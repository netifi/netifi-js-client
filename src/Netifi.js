/**
 * Copyright (c) 2017-present, Netifi Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @flow
 */

('use-strict');

import {
  DuplexConnection,
  Responder,
  ReactiveSocket,
  ISubscription,
} from 'rsocket-types';
import {Single} from 'rsocket-flowable';
import type {PayloadSerializers} from 'rsocket-core/build/RSocketSerialization';
import {BufferEncoders} from 'rsocket-core';
import {encodeMetadata} from 'rsocket-rpc-frames';
import {RequestHandlingRSocket} from 'rsocket-rpc-core';
import type {ClientConfig} from 'rsocket-rpc-core';
import invariant from 'fbjs/lib/invariant';
import {
  DeferredConnectingRSocket,
  WrappingRSocket,
  UnwrappingRSocket,
} from './rsocket';
import {FrameTypes, encodeFrame} from './frames';
import type {Tags} from './frames';
import RSocketWebSocketClient from 'rsocket-websocket-client';
import ConnectionId from './frames/ConnectionId';
import {JWT_AUTHENTICATION} from './frames/DestinationSetupFlyweight';
import AdditionalFlags from './frames/AdditionalFlags';
import uuid from 'uuid/v4';
import FlowableRpcClient from './rsocket/FlowableRpcClient';
import type {ReactiveSocketOrError} from './rsocket/FlowableRpcClient';

export type NetifiConfig = {|
  serializers?: PayloadSerializers<Buffer, Buffer>,
  setup: {|
    group: string,
    destination?: string,
    tags?: Tags,
    keepAlive?: number,
    lifetime?: number,
    accessKey?: number,
    accessToken?: string,
    jwt?: string,
    connectionId?: string,
    additionalFlags?: {|
      public?: boolean,
    |},
  |},
  transport: {|
    url?: string,
    wsCreator?: (url: string) => WebSocket,
    // encoder?: Encoders<*>, *** Right now only BufferEncoder is supported for WebSocket so do not allow passing it in if using a URL ***
    connection?: DuplexConnection,
  |},
  responder?: Responder<Buffer, Buffer>,
|};

export default class Netifi {
  _accessKey: number;
  _accessToken: Buffer;
  _additionalFlags: AdditionalFlags;
  _attempts: number;
  _client: FlowableRpcClient<Buffer, Buffer>;
  _config: NetifiConfig;
  _connection: ?ReactiveSocket<Buffer, Buffer>;
  _connectionId: ConnectionId;
  _connectionStatus: Object;
  _group: string;
  _keepAlive: number;
  _lastConnectionAttemptTs: number;
  _lifetime: number;
  _reconnecting: boolean;
  _shouldReconnect: boolean;
  _requestHandler: RequestHandlingRSocket;
  _rpcClientSubscriber: Object;
  _rpcClientSubscription: ISubscription;
  _subscribers: Array<any>;
  _tags: Tags;

  // commented due to a flow/babel 7 bug:
  // https://github.com/babel/babel/issues/8417
  // _buildClient: () => void;
  // _connect: () => Single<ReactiveSocket<Buffer, Buffer>>;
  // _retryConnection: () => void;

  constructor(
    group: string,
    config: NetifiConfig,
    requestHandler: RequestHandlingRSocket,
  ) {
    this._group = group;
    this._config = config;
    this._subscribers = [];
    this._attempts = 0;
    this._reconnecting = false;
    this._shouldReconnect = true;

    const destination =
      config.setup.destination !== undefined
        ? config.setup.destination
        : uuid();

    this._tags =
      config.setup.tags !== undefined
        ? {'com.netifi.destination': destination, ...config.setup.tags}
        : {'com.netifi.destination': destination};

    this._keepAlive =
      config.setup.keepAlive !== undefined
        ? config.setup.keepAlive
        : 60000; /* 60s in ms */

    this._lifetime =
      config.setup.lifetime !== undefined
        ? config.setup.lifetime
        : 360000; /* 360s in ms */

    if (config.setup.jwt) {
      // get credentials from JWT
      this._accessKey = JWT_AUTHENTICATION;
      this._accessToken = Buffer.from(config.setup.jwt);
    } else if (config.setup.accessKey && config.setup.accessToken) {
      // get access key and token from config
      this._accessKey = config.setup.accessKey;
      this._accessToken = Buffer.from(config.setup.accessToken, 'base64');
    } else {
      throw new Error(
        'Netifi: Credentials were not provided in config setup. Please provide either a JSON Web Token or an accessKey and accessToken.',
      );
    }

    const connectionIdSeed =
      typeof config.setup.connectionId !== 'undefined'
        ? config.setup.connectionId
        : Date.now().toString();

    this._connectionId = new ConnectionId(connectionIdSeed);

    const additionalFlagsLiteral = {
      public: false,
      useJWT: Boolean(config.setup.jwt),
      ...config.setup.additionalFlags,
    };

    this._additionalFlags = new AdditionalFlags(additionalFlagsLiteral);

    this._retryConnection = this._retryConnection.bind(this);
    this._buildClient = this._buildClient.bind(this);
    this._connect = this._connect.bind(this);

    this._requestHandler = requestHandler;

    // this._rpcClientSubscriber handles the stream of sockets from each FlowableRpcClient created
    this._rpcClientSubscriber = {
      onNext: (
        reactiveSocketOrError: ReactiveSocketOrError<Buffer, Buffer>,
      ) => {
        if (reactiveSocketOrError.error) {
          if (!this._connection) {
            // already trying to reconnect
            return;
          }
          this._rpcClientSubscription.cancel();
          this._client.close();
          this._connection && this._connection.close();
          this._connection = null;
          this._retryConnection();
        } else {
          // we have received a socket
          this._connection = reactiveSocketOrError.reactiveSocket;
          this._reconnecting = false;
          console.log('connected.');
          this._subscribers = this._subscribers.filter(subscriber => {
            if (subscriber.onComplete) {
              subscriber.onComplete(this._connection);
              return false;
            }
            return true;
          });
        }
      },
      onError: err => {
        console.warn('An error has occurred while connecting:');
        console.warn(err);
      },
      onSubscribe: subscription => {
        this._rpcClientSubscription = subscription;
        subscription.request(Number.MAX_SAFE_INTEGER);
      },

      subscribe: subscriber => {
        this._subscribers.push(subscriber);
        if (subscriber.onSubscribe) {
          subscriber.onSubscribe(() => {
            const idx = this._subscribers.indexOf(subscriber);
            if (idx > -1) {
              this._subscribers.splice(idx, 1);
            }
          });
        }
      },
    };
  }

  // this._buildClient creates a new transport and FlowableRpcClient
  _buildClient(): void {
    const metadata = encodeFrame({
      type: FrameTypes.DESTINATION_SETUP,
      majorVersion: null,
      minorVersion: null,
      group: this._config.setup.group,
      tags: this._tags,
      accessKey: this._accessKey,
      accessToken: this._accessToken,
      connectionId: this._connectionId,
      additionalFlags: this._additionalFlags,
    });

    const transport: DuplexConnection =
      this._config.transport.connection !== undefined
        ? this._config.transport.connection
        : new RSocketWebSocketClient(
            {
              url: this._config.transport.url
                ? this._config.transport.url
                : 'ws://',
              wsCreator: this._config.transport.wsCreator,
            },
            BufferEncoders,
          );

    const responder =
      this._config.responder || new UnwrappingRSocket(this._requestHandler);

    const finalConfig: ClientConfig<Buffer, Buffer> = {
      setup: {
        keepAlive: this._keepAlive,
        lifetime: this._lifetime,
        metadata,
        connectionId: this._connectionId,
        additionalFlags: this._additionalFlags,
      },
      transport,
      responder,
    };

    if (this._config.serializers !== undefined) {
      finalConfig.serializers = this._config.serializers;
    }

    this._client = new FlowableRpcClient(finalConfig);
  }

  _connect(): Single<ReactiveSocket<Buffer, Buffer>> {
    if (this._connection) {
      return Single.of(this._connection);
    } else {
      this._retryConnection();
      return new Single(subscriber => {
        this._rpcClientSubscriber.subscribe(subscriber);
      });
    }
  }

  _retryConnection(): void {
    if (this._reconnecting || !this._shouldReconnect) {
      // a timeout is already running or close() was called
      return;
    }
    const retryDuration = this.calculateRetryDuration();
    this._reconnecting = true;
    setTimeout(() => {
      if (!this._reconnecting) {
        return; // connection was established
      }
      console.log(`Establishing connection...`);
      this._buildClient();
      this._client.connect().subscribe(this._rpcClientSubscriber);
      this._reconnecting = false;
      this._retryConnection();
    }, retryDuration);
  }

  myGroup(): string {
    return this._group;
  }

  myTags(): Tags {
    return this._tags;
  }

  broadcast(group: string, tags?: Tags): ReactiveSocket<Buffer, Buffer> {
    return DeferredConnectingRSocket.broadcast(group, tags, this._connect);
  }

  group(group: string, tags?: Tags): ReactiveSocket<Buffer, Buffer> {
    return DeferredConnectingRSocket.group(group, tags, this._connect);
  }

  destination(
    destination: string,
    group: string,
  ): ReactiveSocket<Buffer, Buffer> {
    return DeferredConnectingRSocket.group(
      group,
      {'com.netifi.destination': destination},
      this._connect,
    );
  }

  // allows a named RSocket to be located in a group
  groupNamedRSocket(name: string, group: string): Responder<Buffer, Buffer> {
    const groupRSocket = this.group(group);
    return new WrappingRSocket(payload => {
      return {
        data: payload.data,
        metadata: encodeMetadata(
          name,
          name,
          undefined,
          payload.metadata || Buffer.alloc(0),
        ),
      };
    }, groupRSocket);
  }

  addService(service: string, handler: Responder<Buffer, Buffer>): void {
    this._requestHandler.addService(service, handler);
  }

  close(): void {
    this._shouldReconnect = false;
    this._client.close();
  }

  calculateRetryDuration(): number {
    const currentTs = Date.now();
    const oldTs = this._lastConnectionAttemptTs || 0;
    const calculatedDuration = Math.min(this._attempts, 30);

    if (currentTs - oldTs > 60000) {
      this._attempts = 0;
    }

    this._lastConnectionAttemptTs = currentTs;
    this._attempts++;
    return calculatedDuration * 1000;
  }

  static create(config: NetifiConfig): Netifi {
    invariant(
      config && config.setup && config.transport,
      'Netifi: Config is invalid. At minimum  a transport config, a group, and setup properties are required.',
    );

    invariant(
      (config.setup.accessKey && config.setup.accessToken) || config.setup.jwt,
      'Netifi: Config setup should provide either an access key and token, or a JSON Web Token.',
    );

    invariant(
      config.transport.connection || config.transport.url,
      'Netifi: Transport config must supply a connection or a URL',
    );

    const requestHandler = new RequestHandlingRSocket();

    return new Netifi(config.setup.group, config, requestHandler);
  }
}

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

import {DuplexConnection, Responder, ReactiveSocket, ISubscription} from 'rsocket-types';
import {Single} from 'rsocket-flowable';
import type {PayloadSerializers} from 'rsocket-core/build/RSocketSerialization';
import {BufferEncoders} from 'rsocket-core';
import {/*RpcClient,*/ RequestHandlingRSocket} from 'rsocket-rpc-core';
import type {ClientConfig} from 'rsocket-rpc-core';
import invariant from 'fbjs/lib/invariant';
import {DeferredConnectingRSocket, UnwrappingRSocket} from './rsocket';
import {FrameTypes, encodeFrame} from './frames';
import type {Tags} from './frames';

import RSocketWebSocketClient from 'rsocket-websocket-client';
import ConnectionId from './frames/ConnectionId';
import AdditionalFlags from './frames/AdditionalFlags';
import uuid from 'uuid/v4';

import TransparentRpcClient from './rsocket/TransparentRpcClient';
import type {ReactiveSocketOrError} from './rsocket/TransparentRpcClient';

export type NetifiConfig = {|
  serializers?: PayloadSerializers<Buffer, Buffer>,
  setup: {|
    group: string,
    destination?: string,
    tags?: Tags,
    keepAlive?: number,
    lifetime?: number,
    accessKey: number,
    accessToken: string,
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
  _client: TransparentRpcClient<Buffer, Buffer>;
  _group: string;
  _tags: Tags;
  _config: NetifiConfig;
  _buildClient: () => TransparentRpcClient<Buffer, Buffer>;
  _connect: () => Single<ReactiveSocket<Buffer, Buffer>>;
  _rpcClientSubscriber: Object;
  _rpcClientSubscription: ISubscription;
  _connectionStatus: Object;
  _connection: ?ReactiveSocket<Buffer, Buffer>;
  _requestHandler: RequestHandlingRSocket;
  _lastConnectionAttemptTs: number;
  _attempts: number;

  _keepAlive: number;
  _lifetime: number;
  _accessKey: number;
  _accessToken: Buffer;
  _connectionId: ConnectionId;
  _additionalFlags: AdditionalFlags;
  _subscribers: Array<any>;

  constructor(
    group: string,
    config: NetifiConfig,
    requestHandler: RequestHandlingRSocket,
  ) {
    this._group = group;
    this._config = config;
    this._subscribers = [];

    const destination =
        config.setup.destination !== undefined
          ? config.setup.destination
          : uuid();
    
    this._tags = config.setup.tags !== undefined
      ? {'com.netifi.destination': destination, ...config.setup.tags}
      : {'com.netifi.destination': destination};

    this._keepAlive = config.setup.keepAlive !== undefined
      ? config.setup.keepAlive
      : 60000; /* 60s in ms */

    this._lifetime =
      config.setup.lifetime !== undefined
        ? config.setup.lifetime
        : 360000; /* 360s in ms */

    this._accessKey = config.setup.accessKey;

    this._accessToken = Buffer.from(config.setup.accessToken, 'base64');

    const connectionIdSeed =
      typeof config.setup.connectionId !== 'undefined'
        ? config.setup.connectionId
        : Date.now().toString();

    this._connectionId = new ConnectionId(connectionIdSeed);
    
    const additionalFlagsLiteral = {
      public: false,
      ...config.setup.additionalFlags,
    };
    
    this._additionalFlags = new AdditionalFlags(additionalFlagsLiteral);

    this._buildClient = () => {
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
                url: this._config.transport.url ? this._config.transport.url : 'ws://',
                wsCreator: this._config.transport.wsCreator,
              },
              BufferEncoders,
            );
      
      const responder = new UnwrappingRSocket(requestHandler);

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
  
      if (this._config.responder !== undefined) {
        finalConfig.responder = config.responder;
      }
  
      if (this._config.serializers !== undefined) {
        finalConfig.serializers = config.serializers;
      }
  
      this._client = new TransparentRpcClient(finalConfig);
    };

    this._connect = () => {
      if (this._connection) {
        return Single.of(this._connection);
      } else if (this._connectionStatus) {
        return new Single(subscriber => {
          this._connectionStatus.subscribe(subscriber);
        });
      } else {

        this._buildClient();

        const subscribers = this._subscribers;

        /** * This is a useful Publisher implementation that wraps could feasibly wrap the Single type ** */
        /** * Might be useful to clean up and contribute back or put in a utility or something ** */
        this._connectionStatus = (function() {

          return {
            onComplete: connection => {
              subscribers.map(subscriber => {
                if (subscriber.onComplete) {
                  subscriber.onComplete(this._connection);
                }
              });
            },

            onError: error => {
              subscribers.map(subscriber => {
                if (subscriber.onError) {
                  subscriber.onError(error);
                }
              });
            },

            onSubscribe: cancel => {
              subscribers.map(subscriber => {
                if (subscriber.onSubscribe) {
                  subscriber.onSubscribe(cancel);
                }
              });
            },

            subscribe: subscriber => {
              subscribers.push(subscriber);
              if (subscriber.onSubscribe) {
                subscriber.onSubscribe(() => {
                  const idx = subscribers.indexOf(subscriber);
                  if (idx > -1) {
                    subscribers.splice(idx, 1);
                  }
                });
              }
            },
          };
        })();

        this._connectionStatus.subscribe(this._rpcClientSubscriber);

        setTimeout(
          () => this._client.connect().subscribe(this._connectionStatus),
          this.calculateRetryDuration(),
        );

        return this._connectionStatus;
      }
    };

    this._requestHandler = requestHandler;

    this._rpcClientSubscriber = {
      onNext: (reactiveSocketOrError: ReactiveSocketOrError<Buffer, Buffer>) => {
        if (reactiveSocketOrError.error) {
          this._rpcClientSubscription.cancel();
          this._client.close();
          this._connection && this._connection.close();
          this._connection = null;
          this._buildClient(); // rebuilds this._client
          this._client.connect().subscribe(this._connectionStatus);
        }
        else {
          // we have received a socket
          this._connection = reactiveSocketOrError.reactiveSocket;
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
    };
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

  addService(service: string, handler: Responder<Buffer, Buffer>): void {
    this._requestHandler.addService(service, handler);
  }

  close(): void {
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
      config &&
        config.setup &&
        config.setup.accessKey &&
        config.setup.accessToken &&
        config.transport,
      'Netifi: Falsey config is invalid. At minimum transport config, group, access key, and access token are required.',
    );

    invariant(
      config.transport.connection || config.transport.url,
      'Netifi: Transport config must supply a connection or a URL',
    );

    const requestHandler = new RequestHandlingRSocket();

    return new Netifi(config.setup.group, config, requestHandler);
  }
}

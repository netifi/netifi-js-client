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
 */

import {expect} from 'chai';
import {describe, it} from 'mocha';

import {MAX_REQUEST_N} from 'rsocket-core/build/RSocketFrame';

import {BufferEncoders} from 'rsocket-core';

import Netifi from '../Netifi';
import NetifiTlsClient from '../NetifiTlsClient';

import Deferred from 'fbjs/lib/Deferred';

import {BrokerInfoServiceClient} from '../proto/netifi/broker_info_rsocket_pb';

import {Empty} from 'google-protobuf/google/protobuf/empty_pb';

import WebSocket from 'ws';
global.WebSocket = global.WebSocket || WebSocket;

describe.skip('BrokerInfoServiceClient', () => {
  it('retrieves brokers over WebSocket', async () => {
    const netifi = Netifi.create({
      setup: {
        group: 'group',
        keepAlive: 1000000, // avoid sending during test
        lifetime: 100000,
        accessKey: 9007199254740991,
        accessToken: 'kTBDVtfRBO4tHOnZzSyY5ym2kfY=',
      },
      transport: {
        url: 'wss://localhost:8101/',
        wsCreator: url =>
          new WebSocket(url, {
            rejectUnauthorized: false,
          }),
      },
    });

    const brokerInfoService = new BrokerInfoServiceClient(
      netifi.group('com.netifi.brokerServices'),
    );

    const deferred = new Deferred();
    brokerInfoService.brokers(new Empty(), Buffer.alloc(0)).subscribe({
      onComplete() {
        console.log('onComplete()');
      },
      onError(error) {
        console.log('onError(%s)', error.message);
        deferred.reject(error);
      },
      onNext(broker) {
        console.log('onNext(%o)', broker.toObject());
        deferred.resolve(broker.toObject());
      },
      onSubscribe(subscription) {
        subscription.request(MAX_REQUEST_N);
      },
    });
    const broker = await deferred;
    netifi.close();
    expect(broker).to.not.equal(null);
    expect(broker.brokerid).to.not.equal(undefined);
  });

  it('retrieves brokers over TLS', async () => {
    const netifi = Netifi.create({
      setup: {
        group: 'group',
        keepAlive: 1000000, // avoid sending during test
        lifetime: 100000,
        accessKey: 9007199254740991,
        accessToken: 'kTBDVtfRBO4tHOnZzSyY5ym2kfY=',
      },
      transport: {
        connection: new NetifiTlsClient(
          {
            host: 'localhost',
            port: 8001,
            rejectUnauthorized: false,
          },
          BufferEncoders,
        ),
      },
    });

    const brokerInfoService = new BrokerInfoServiceClient(
      netifi.group('com.netifi.brokerServices'),
    );

    const deferred = new Deferred();
    console.log('Calling broker services');
    brokerInfoService.brokers(new Empty(), Buffer.alloc(0)).subscribe({
      onComplete() {
        console.log('onComplete()');
      },
      onError(error) {
        console.log('onError(%s)', error.message);
        deferred.reject(error);
      },
      onNext(broker) {
        console.log('onNext(%o)', broker.toObject());
        deferred.resolve(broker.toObject());
      },
      onSubscribe(subscription) {
        subscription.request(MAX_REQUEST_N);
      },
    });
    const broker = await deferred;
    netifi.close();
    expect(broker).to.not.equal(null);
    expect(broker.brokerid).to.not.equal(undefined);
  });
});

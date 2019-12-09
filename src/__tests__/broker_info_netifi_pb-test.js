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
import {JWT_AUTHENTICATION} from '../frames/DestinationSetupFlyweight';
global.WebSocket = global.WebSocket || WebSocket;

describe('BrokerInfoServiceClient', () => { // describe.skip
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
      netifi.group('com.netifi.broker.admin.brokerServices'),
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
      netifi.group('com.netifi.broker.admin.brokerServices'),
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

  it('can use JWT for authentication', async () => {
    const jwt =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ0ZXN0SWQiOiIxMTExODg4ODgiLCJzdWIiOiJ0ZXN0aW5nLWFwcCIsImF1ZCI6ImR1bmNhbkBuZXRpZmkuY29tIiwic2FzIjpbImRlZmF1bHQiLCJhY2NvdW50IiwidHJhbnNhY3Rpb24iXSwicm9sZXMiOlsiaW50ZXJuYWwiXSwiaXNzIjoiUlNvY2tldEJyb2tlciIsIm9yZ3MiOlsibmV0aWZpIl0sImlhdCI6MTU2NTYzMzMwOX0.Ax72zmzVHAKmP9NL8Wzze_cI3lgVog9GyiLN8FCyqm7jN9RGOax7oPROozvaZEbcQggzHoi3n8ddoWjkknmw4fFgWYUG0sEcUlxnPLrVowBVySdINLPO3tGOCQ3nqeyBTx9b1gLH2R1DEVp5N6ISl37cWH2offnZ-w_PGpj3XQHRBJsrq8XZXrxHogwFD4Vayy8QROS5JS-ab1iMBXgBJCJk4re9xWnBgTtrWj1uSnZWCJSLkk9v0gXxfd1lWrLvwyDkitnidyYZpRhLTWAjR8hoL2DSgTwqetZHMt6KEC-Y-jgaE8K7DoRLE-EaEZ8hP4AUf3Yn2A4qNyalysJaxw';

    const netifi = Netifi.create({
      setup: {
        group: 'group',
        keepAlive: 1000000,
        lifetime: 100000,
        jwt,
      },
      transport: {
        url: 'wss://localhost:8101/',
        wsCreator: url =>
          new WebSocket(url, {
            rejectUnauthorized: false,
          }),
      },
    });

    expect(netifi._jwt).to.not.equal(null);
    expect(netifi._accessKey).to.equal(JWT_AUTHENTICATION);
    expect(netifi._accessToken).to.be.instanceof(Buffer);

    const brokerInfoService = new BrokerInfoServiceClient(
      netifi.group('com.netifi.broker.admin.brokerServices'),
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
    let broker;
    try {
      broker = await deferred;
    }
    catch(err) {
      netifi.close();
      throw err;
    }
    netifi.close();
    expect(broker).to.not.equal(null);
    expect(broker.brokerid).to.not.equal(undefined);
  });
});

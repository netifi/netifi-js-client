// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
//    Copyright 2019 The Netifi Authors
//
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
//
//        http://www.apache.org/licenses/LICENSE-2.0
//
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.
'use strict';
var rsocket_rpc_frames = require('rsocket-rpc-frames');
var rsocket_rpc_core = require('rsocket-rpc-core');
var rsocket_rpc_tracing = require('rsocket-rpc-tracing');
var rsocket_rpc_metrics = require('rsocket-rpc-metrics').Metrics;
var rsocket_flowable = require('rsocket-flowable');
var netifi_tracing_pb = require('../netifi/tracing_pb.js');
var zipkin_proto3_zipkin_pb = require('../zipkin/proto3/zipkin_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

var BrokerTracingServiceClient = function () {
  function BrokerTracingServiceClient(rs, tracer, meterRegistry) {
    this._rs = rs;
    this._tracer = tracer;
    this.streamSpansTrace = rsocket_rpc_tracing.trace(tracer, "BrokerTracingService", {"rsocket.rpc.service": "com.netifi.broker.tracing.BrokerTracingService"}, {"method": "streamSpans"}, {"rsocket.rpc.role": "client"});
    this.streamSpansMetrics = rsocket_rpc_metrics.timed(meterRegistry, "BrokerTracingService", {"service": "com.netifi.broker.tracing.BrokerTracingService"}, {"method": "streamSpans"}, {"role": "client"});
  }
  BrokerTracingServiceClient.prototype.streamSpans = function streamSpans(messages, metadata) {
    const map = {};
    return this.streamSpansMetrics(
      this.streamSpansTrace(map)(new rsocket_flowable.Flowable(subscriber => {
        var dataBuf;
        var tracingMetadata = rsocket_rpc_tracing.mapToBuffer(map);
        var metadataBuf ;
          this._rs.requestChannel(messages.map(function (message) {
            dataBuf = Buffer.from(message.serializeBinary());
            metadataBuf = rsocket_rpc_frames.encodeMetadata('com.netifi.broker.tracing.BrokerTracingService', 'StreamSpans', tracingMetadata, metadata || Buffer.alloc(0));
            return {
              data: dataBuf,
              metadata: metadataBuf
            };
          })).map(function (payload) {
            //TODO: resolve either 'https://github.com/rsocket/rsocket-js/issues/19' or 'https://github.com/google/protobuf/issues/1319'
            var binary = !payload.data || payload.data.constructor === Buffer || payload.data.constructor === Uint8Array ? payload.data : new Uint8Array(payload.data);
            return netifi_tracing_pb.Ack.deserializeBinary(binary);
          }).subscribe(subscriber);
        })
      )
    );
  };
  return BrokerTracingServiceClient;
}();

exports.BrokerTracingServiceClient = BrokerTracingServiceClient;

var BrokerTracingServiceServer = function () {
  function BrokerTracingServiceServer(service, tracer, meterRegistry) {
    this._service = service;
    this._tracer = tracer;
    this.streamSpansTrace = rsocket_rpc_tracing.traceAsChild(tracer, "BrokerTracingService", {"rsocket.rpc.service": "com.netifi.broker.tracing.BrokerTracingService"}, {"method": "streamSpans"}, {"rsocket.rpc.role": "server"});
    this.streamSpansMetrics = rsocket_rpc_metrics.timed(meterRegistry, "BrokerTracingService", {"service": "com.netifi.broker.tracing.BrokerTracingService"}, {"method": "streamSpans"}, {"role": "server"});
    this._channelSwitch = (payload, restOfMessages) => {
      if (payload.metadata == null) {
        return rsocket_flowable.Flowable.error(new Error('metadata is empty'));
      }
      var method = rsocket_rpc_frames.getMethod(payload.metadata);
      var spanContext = rsocket_rpc_tracing.deserializeTraceData(this._tracer, payload.metadata);
      let deserializedMessages;
      switch(method){
        case 'StreamSpans':
          deserializedMessages = restOfMessages.map(payload => {
            var binary = !payload.data || payload.data.constructor === Buffer || payload.data.constructor === Uint8Array ? payload.data : new Uint8Array(payload.data);
            return zipkin_proto3_zipkin_pb.Span.deserializeBinary(binary);
          });
          return this.streamSpansMetrics(
            this.streamSpansTrace(spanContext)(
              this._service
                .streamSpans(deserializedMessages, payload.metadata)
                .map(function (message) {
                  return {
                    data: Buffer.from(message.serializeBinary()),
                    metadata: Buffer.alloc(0)
                  }
                })
              )
            );
        default:
          return rsocket_flowable.Flowable.error(new Error('unknown method'));
      }
    };
  }
  BrokerTracingServiceServer.prototype.fireAndForget = function fireAndForget(payload) {
    throw new Error('fireAndForget() is not implemented');
  };
  BrokerTracingServiceServer.prototype.requestResponse = function requestResponse(payload) {
    return rsocket_flowable.Single.error(new Error('requestResponse() is not implemented'));
  };
  BrokerTracingServiceServer.prototype.requestStream = function requestStream(payload) {
    return rsocket_flowable.Flowable.error(new Error('requestStream() is not implemented'));
  };
  BrokerTracingServiceServer.prototype.requestChannel = function requestChannel(payloads) {
    return new rsocket_flowable.Flowable(s => payloads.subscribe(s)).lift(s =>
      new rsocket_rpc_core.SwitchTransformOperator(s, (payload, flowable) => this._channelSwitch(payload, flowable)),
    );
  };
  BrokerTracingServiceServer.prototype.metadataPush = function metadataPush(payload) {
    return rsocket_flowable.Single.error(new Error('metadataPush() is not implemented'));
  };
  return BrokerTracingServiceServer;
}();

exports.BrokerTracingServiceServer = BrokerTracingServiceServer;


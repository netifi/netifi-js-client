// GENERATED CODE -- DO NOT EDIT!

'use strict';
var rsocket_rpc_frames = require('rsocket-rpc-frames');
var rsocket_rpc_core = require('rsocket-rpc-core');
var rsocket_rpc_tracing = require('rsocket-rpc-tracing');
var rsocket_rpc_metrics = require('rsocket-rpc-metrics').Metrics;
var rsocket_flowable = require('rsocket-flowable');
var netifi_testing_tracing_pb = require('../../netifi/testing/tracing_pb.js');
var zipkin_proto3_zipkin_pb = require('../../zipkin/proto3/zipkin_pb.js');

var NetifiTracingServiceClient = function () {
  function NetifiTracingServiceClient(rs, tracer, meterRegistry) {
    this._rs = rs;
    this._tracer = tracer;
    this.streamSpansTrace = rsocket_rpc_tracing.trace(tracer, "NetifiTracingService", {"rsocket.rpc.service": "com.netifi.tracing.NetifiTracingService"}, {"method": "streamSpans"}, {"rsocket.rpc.role": "client"});
    this.streamSpansMetrics = rsocket_rpc_metrics.timed(meterRegistry, "NetifiTracingService", {"service": "com.netifi.tracing.NetifiTracingService"}, {"method": "streamSpans"}, {"role": "client"});
    this.streamSpansStreamAcksTrace = rsocket_rpc_tracing.trace(tracer, "NetifiTracingService", {"rsocket.rpc.service": "com.netifi.tracing.NetifiTracingService"}, {"method": "streamSpansStreamAcks"}, {"rsocket.rpc.role": "client"});
    this.streamSpansStreamAcksMetrics = rsocket_rpc_metrics.timed(meterRegistry, "NetifiTracingService", {"service": "com.netifi.tracing.NetifiTracingService"}, {"method": "streamSpansStreamAcks"}, {"role": "client"});
    this.sendSpanTrace = rsocket_rpc_tracing.traceSingle(tracer, "NetifiTracingService", {"rsocket.rpc.service": "com.netifi.tracing.NetifiTracingService"}, {"method": "sendSpan"}, {"rsocket.rpc.role": "client"});
    this.sendSpanMetrics = rsocket_rpc_metrics.timedSingle(meterRegistry, "NetifiTracingService", {"service": "com.netifi.tracing.NetifiTracingService"}, {"method": "sendSpan"}, {"role": "client"});
  }
  NetifiTracingServiceClient.prototype.streamSpans = function streamSpans(messages, metadata) {
    const map = {};
    return this.streamSpansMetrics(
      this.streamSpansTrace(map)(new rsocket_flowable.Flowable(subscriber => {
        var dataBuf;
        var tracingMetadata = rsocket_rpc_tracing.mapToBuffer(map);
        var metadataBuf ;
          this._rs.requestChannel(messages.map(function (message) {
            dataBuf = Buffer.from(message.serializeBinary());
            metadataBuf = rsocket_rpc_frames.encodeMetadata('com.netifi.tracing.NetifiTracingService', 'StreamSpans', tracingMetadata, metadata || Buffer.alloc(0));
            return {
              data: dataBuf,
              metadata: metadataBuf
            };
          })).map(function (payload) {
            //TODO: resolve either 'https://github.com/rsocket/rsocket-js/issues/19' or 'https://github.com/google/protobuf/issues/1319'
            var binary = !payload.data || payload.data.constructor === Buffer || payload.data.constructor === Uint8Array ? payload.data : new Uint8Array(payload.data);
            return netifi_testing_tracing_pb.Ack.deserializeBinary(binary);
          }).subscribe(subscriber);
        })
      )
    );
  };
  NetifiTracingServiceClient.prototype.streamSpansStreamAcks = function streamSpansStreamAcks(messages, metadata) {
    const map = {};
    return this.streamSpansStreamAcksMetrics(
      this.streamSpansStreamAcksTrace(map)(new rsocket_flowable.Flowable(subscriber => {
        var dataBuf;
        var tracingMetadata = rsocket_rpc_tracing.mapToBuffer(map);
        var metadataBuf ;
          this._rs.requestChannel(messages.map(function (message) {
            dataBuf = Buffer.from(message.serializeBinary());
            metadataBuf = rsocket_rpc_frames.encodeMetadata('com.netifi.tracing.NetifiTracingService', 'StreamSpansStreamAcks', tracingMetadata, metadata || Buffer.alloc(0));
            return {
              data: dataBuf,
              metadata: metadataBuf
            };
          })).map(function (payload) {
            //TODO: resolve either 'https://github.com/rsocket/rsocket-js/issues/19' or 'https://github.com/google/protobuf/issues/1319'
            var binary = !payload.data || payload.data.constructor === Buffer || payload.data.constructor === Uint8Array ? payload.data : new Uint8Array(payload.data);
            return netifi_testing_tracing_pb.Ack.deserializeBinary(binary);
          }).subscribe(subscriber);
        })
      )
    );
  };
  NetifiTracingServiceClient.prototype.sendSpan = function sendSpan(message, metadata) {
    const map = {};
    return this.sendSpanMetrics(
      this.sendSpanTrace(map)(new rsocket_flowable.Single(subscriber => {
        var dataBuf = Buffer.from(message.serializeBinary());
        var tracingMetadata = rsocket_rpc_tracing.mapToBuffer(map);
        var metadataBuf = rsocket_rpc_frames.encodeMetadata('com.netifi.tracing.NetifiTracingService', 'SendSpan', tracingMetadata, metadata || Buffer.alloc(0));
          this._rs.requestResponse({
            data: dataBuf,
            metadata: metadataBuf
          }).map(function (payload) {
            //TODO: resolve either 'https://github.com/rsocket/rsocket-js/issues/19' or 'https://github.com/google/protobuf/issues/1319'
            var binary = !payload.data || payload.data.constructor === Buffer || payload.data.constructor === Uint8Array ? payload.data : new Uint8Array(payload.data);
            return netifi_testing_tracing_pb.Ack.deserializeBinary(binary);
          }).subscribe(subscriber);
        })
      )
    );
  };
  return NetifiTracingServiceClient;
}();

exports.NetifiTracingServiceClient = NetifiTracingServiceClient;

var NetifiTracingServiceServer = function () {
  function NetifiTracingServiceServer(service, tracer, meterRegistry) {
    this._service = service;
    this._tracer = tracer;
    this.streamSpansTrace = rsocket_rpc_tracing.traceAsChild(tracer, "NetifiTracingService", {"rsocket.rpc.service": "com.netifi.tracing.NetifiTracingService"}, {"method": "streamSpans"}, {"rsocket.rpc.role": "server"});
    this.streamSpansMetrics = rsocket_rpc_metrics.timed(meterRegistry, "NetifiTracingService", {"service": "com.netifi.tracing.NetifiTracingService"}, {"method": "streamSpans"}, {"role": "server"});
    this.streamSpansStreamAcksTrace = rsocket_rpc_tracing.traceAsChild(tracer, "NetifiTracingService", {"rsocket.rpc.service": "com.netifi.tracing.NetifiTracingService"}, {"method": "streamSpansStreamAcks"}, {"rsocket.rpc.role": "server"});
    this.streamSpansStreamAcksMetrics = rsocket_rpc_metrics.timed(meterRegistry, "NetifiTracingService", {"service": "com.netifi.tracing.NetifiTracingService"}, {"method": "streamSpansStreamAcks"}, {"role": "server"});
    this.sendSpanTrace = rsocket_rpc_tracing.traceSingleAsChild(tracer, "NetifiTracingService", {"rsocket.rpc.service": "com.netifi.tracing.NetifiTracingService"}, {"method": "sendSpan"}, {"rsocket.rpc.role": "server"});
    this.sendSpanMetrics = rsocket_rpc_metrics.timedSingle(meterRegistry, "NetifiTracingService", {"service": "com.netifi.tracing.NetifiTracingService"}, {"method": "sendSpan"}, {"role": "server"});
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
        case 'StreamSpansStreamAcks':
          deserializedMessages = restOfMessages.map(payload => {
            var binary = !payload.data || payload.data.constructor === Buffer || payload.data.constructor === Uint8Array ? payload.data : new Uint8Array(payload.data);
            return zipkin_proto3_zipkin_pb.Span.deserializeBinary(binary);
          });
          return this.streamSpansStreamAcksMetrics(
            this.streamSpansStreamAcksTrace(spanContext)(
              this._service
                .streamSpansStreamAcks(deserializedMessages, payload.metadata)
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
  NetifiTracingServiceServer.prototype.fireAndForget = function fireAndForget(payload) {
    throw new Error('fireAndForget() is not implemented');
  };
  NetifiTracingServiceServer.prototype.requestResponse = function requestResponse(payload) {
    try {
      if (payload.metadata == null) {
        return rsocket_flowable.Single.error(new Error('metadata is empty'));
      }
      var method = rsocket_rpc_frames.getMethod(payload.metadata);
      var spanContext = rsocket_rpc_tracing.deserializeTraceData(this._tracer, payload.metadata);
      switch (method) {
        case 'SendSpan':
          return this.sendSpanMetrics(
            this.sendSpanTrace(spanContext)(new rsocket_flowable.Single(subscriber => {
              var binary = !payload.data || payload.data.constructor === Buffer || payload.data.constructor === Uint8Array ? payload.data : new Uint8Array(payload.data);
              return this._service
                .sendSpan(zipkin_proto3_zipkin_pb.Span.deserializeBinary(binary), payload.metadata)
                .map(function (message) {
                  return {
                    data: Buffer.from(message.serializeBinary()),
                    metadata: Buffer.alloc(0)
                  }
                }).subscribe(subscriber);
              }
            )
          )
        );
        default:
          return rsocket_flowable.Single.error(new Error('unknown method'));
      }
    } catch (error) {
      return rsocket_flowable.Single.error(error);
    }
  };
  NetifiTracingServiceServer.prototype.requestStream = function requestStream(payload) {
    return rsocket_flowable.Flowable.error(new Error('requestStream() is not implemented'));
  };
  NetifiTracingServiceServer.prototype.requestChannel = function requestChannel(payloads) {
    return new rsocket_flowable.Flowable(s => payloads.subscribe(s)).lift(s =>
      new rsocket_rpc_core.SwitchTransformOperator(s, (payload, flowable) => this._channelSwitch(payload, flowable)),
    );
  };
  NetifiTracingServiceServer.prototype.metadataPush = function metadataPush(payload) {
    return rsocket_flowable.Single.error(new Error('metadataPush() is not implemented'));
  };
  return NetifiTracingServiceServer;
}();

exports.NetifiTracingServiceServer = NetifiTracingServiceServer;


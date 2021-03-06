const {
  Annotation,
  Endpoint,
  Span,
} = require('../proto/zipkin/proto3/zipkin_pb');
const {
  NetifiTracingServiceClient,
} = require('../proto/netifi/testing/tracing_rsocket_pb');

const Long = require('long');
const {ZipkinTracingService} = require('../tracing/tracingService');
const {BasicTracer} = require('../tracing/tracer');
const {
  NetifiTracingServiceServer,
} = require('../proto/netifi/testing/tracing_rsocket_pb');
const {Netifi} = require('../index');
const {BufferEncoders} = require('rsocket-core');
const {Flowable} = require('rsocket-flowable');
const RSocketTcpClient = require('rsocket-tcp-client').default;
const WebSocket = require('ws');
global.WebSocket = WebSocket;

const url = 'wss://localhost:8101/';
const tcpConnection = new RSocketTcpClient(
  {host: 'localhost', port: 8001},
  BufferEncoders,
);

const tracingServiceGateway = Netifi.create({
  setup: {
    group: 'com.netifi.tracing',
    accessKey: 9007199254740991,
    accessToken: 'kTBDVtfRBO4tHOnZzSyY5ym2kfY=',
  },
  transport: {
    // connection: tcpConnection
    url,
    wsCreator: url =>
      new WebSocket(url, {
        rejectUnauthorized: false,
      }),
  },
});

tracingServiceGateway.addService(
  'com.netifi.tracing.NetifiTracingService',
  new NetifiTracingServiceServer(
    new ZipkinTracingService('localhost', 9411, '/api/v2/spans'),
  ),
);
console.log('Connecting to localhost for tracing service...');
tracingServiceGateway._connect().subscribe({
  onComplete: val => {
    console.log('Connected:' + val);
  },
  onError: err => {
    console.log('Failed to connect:' + err);
  },
  onSubscribe: () => {},
});

const clientOneId = 'thingOne';
const clientGateway = Netifi.create({
  setup: {
    group: 'pinger',
    destination: clientOneId,
    accessKey: 9007199254740991,
    accessToken: 'kTBDVtfRBO4tHOnZzSyY5ym2kfY=',
  },
  transport: {
    // connection: tcpConnection,
    url,
    wsCreator: url =>
      new WebSocket(url, {
        rejectUnauthorized: false,
      }),
  },
});

const basicTracer = new BasicTracer(
  {
    /* default sampler/recorder */
    recorder: {record: () => {}},
  },
  clientGateway,
  null /* no url needed */,
  'channel-test',
  null,
  true,
);

const client = new NetifiTracingServiceClient(
  clientGateway.group('com.netifi.tracing'),
);

const spanStream = function() {
  let lastSpan = null;
  let canceled = false;
  const max = 10;
  let count = 0;
  const opname = 'stream span op';

  return new Flowable(subscriber => {
    subscriber.onSubscribe({
      cancel: () => {
        canceled = true;
        console.log('Subscriber canceled span stream');
      },
      request: n => {
        while (!canceled && n-- > 0 && count++ < max) {
          lastSpan = basicTracer.startSpan(opname, {
            childOf: lastSpan,
            startTime: Date.now() * 1000,
            tags: {},
          });
          subscriber.onNext(
            mapSpan(
              lastSpan,
              'testSource',
              'remoteTracer',
              clientGateway.myGroup(),
              clientGateway.myDestination(),
            ),
          );
        }
        if (count >= max) {
          subscriber.onComplete();
        }
      },
    });
  });
};

setTimeout(() => {
  console.log('Here we go');
  let _sub;
  client.streamSpans(spanStream(), Buffer.alloc(0)).subscribe({
    onNext: ack => {
      console.log('received ack');
      _sub.request(1);
    },
    onError: error => console.log('received error:' + error),
    onComplete: () => {
      console.log('ack complete');
      streamSpansStreamAcks();
    },
    onSubscribe: subscription => {
      _sub = subscription;
      _sub.request(1);
    },
  });
}, 5000);

const streamSpansStreamAcks = function() {
  console.log('Beginning to stream spans and acks');
  let finalCount = 0;
  let _sub;
  client.streamSpansStreamAcks(spanStream(), Buffer.alloc(0)).subscribe({
    onNext: ack => {
      console.log('received ack*');
      finalCount++;
      _sub.request(1);
    },
    onError: error => console.log('received error:' + error),
    onComplete: () => console.log('ack complete after ' + finalCount + ' acks'),
    onSubscribe: subscription => {
      _sub = subscription;
      _sub.request(1);
    },
  });
};

function mapSpan(
  span,
  localService,
  remoteService,
  group,
  destination,
  shared,
) {
  const result = new Span();
  result.setName(span.operationName.toString());
  result.setTraceId(span.traceId.toString());
  result.setId(span.spanId.toString());
  result.setDuration(Long.fromNumber(span.duration));
  result.setTimestamp(Long.fromNumber(span.startTime));
  if (span.spanId.toString() !== span.parentId.toString()) {
    result.setParentId(span.parentId.toString());
  }
  // kind
  if (span.tags['netifi.type']) {
    const kindString = span.tags['netifi.type'].toString().toUpperCase();
    const kind = Span.Kind[kindString] || Span.Kind.SPAN_KIND_UNSPECIFIED;
    result.setKind(kind);
  } else {
    const kind = Span.Kind.CLIENT;
    result.setKind(kind);
  }
  if (span.tags) {
    const map = result.getTagsMap();
    Object.keys(span.tags).forEach(key => {
      map.set(key, span.tags[key]);
    });
    if (group) {
      map.set('group', group);
    }
    if (destination) {
      map.set('com.netifi.destination', destination);
    }
  }
  if (span.logs) {
    const annotations = [];
    span.logs.forEach(log => {
      const annotation = new Annotation();
      annotation.setTimestamp(log.timestamp);
      annotation.setValue(log.event);
      annotations.push(annotation);
    });
    result.setAnnotationsList(annotations);
  }
  if (localService) {
    result.setLocalEndpoint(constructEndpoint(localService));
  }
  if (remoteService) {
    result.setRemoteEndpoint(constructEndpoint(remoteService));
  }
  result.setShared(Boolean(shared));

  return result;
}

function constructEndpoint(service) {
  const endpoint = new Endpoint();
  endpoint.setServiceName(service);
  // TODO: Figure this out for real
  endpoint.setIpv4('127.0.0.1');
  return endpoint;
}

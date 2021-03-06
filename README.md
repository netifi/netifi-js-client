# Netifi JavaScript Client

netifi-js-client allows Javascript apps to connect to a Netifi broker and access services. By providing a destination name and login credentials, the app becomes a new destination on the network, and can both send and receive messages using the RSocket protocol.

[![Join the chat at https://gitter.im/netifi/general](https://badges.gitter.im/netifi/general.svg)](https://gitter.im/netifi/general)

## Bugs and Feedback

For bugs, questions, and discussions please use the [Github Issues](https://github.com/netifi/netifi-js/issues).

## Installation

`yarn add netifi-js-client` OR

`npm install netifi-js-client`

## Basic Use

Netifi JavaScript presumes the use of the Netifi RPC routing model.

The model assumes the user will access a router via a gateway, providing its `group` identification (e.g. `mobile-devices`, `admin-services`, or other user-defined string). Optionally the user can provide a unique `destination` id (any user provided string), or a UUID will be generated automatically.

Once connected, the user can leverage the gateway to create RSockets that will route to particular `group`s (e.g. `metadata-services`, `mobile-clients`, or other application-specific identifier) or a `destination` on the network (e.g. `bobs-laptop`, `server-in-the-closet-nobody-knows-about`). These RSockets can then be passed to an RSocket RPC client and routing will be transparent and automatic.

A workflow would look something like this

```
const Netifi = require('netifi-js-client');
// This Netifi object acts as our gateway to the router
const netifi = Netifi.create({
  setup: {
    group: 'netifi-example',
  //destination: generated UUID if omitted  
    accessKey: 9007199254740991,
    accessToken: 'kTBDVtfRBO4tHOnZzSyY5ym2kfY=',
  //jwt: 'jwt.encoded.string' depending on your broker's authentication setup, you can either provide an access key and token, or use a JWT.
  },
  transport: {
    url
  }
});
```

The configuration passed to `Netifi.create` has this Flow type spec

```angular2html
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
      useJWT?: boolean
    |}
  |},
  transport: {|
    url?: string,
    wsCreator?: (url: string) => WebSocket,
    connection?: DuplexConnection,
  |},
  responder?: Responder<Buffer, Buffer>,
|};
```

Sane defaults are provided for each optional field, with the exception of `transport`. Either a URL or an existing DuplexConnection (e.g. `RSocketTcpClient`) are required. The URL is used to create an `RSocketWebSocketClient` under the covers.

A `Responder<Buffer, Buffer>` is created and simply implements the RSocket defined methods (i.e. `fireAndForget`, `requestResponse`, `requestStream`, `requestChannel`) and routes them to registered services, addressed below in `As a Server`.


### As a Client
The `netifi` object is used to generate RSockets to be used by clients and to attach service handlers. This package includes the BrokerInfoServiceClient (routing services); here is an example of scanning all router instances and requesting all connected `destination`s

```angular2html
const { Empty } = require('google-protobuf/google/protobuf/empty_pb');

// Here we use the netifi gateway to create an RSocket that routes 
// to any instance that is registered in the 'broker-services' group
const brokerServices = new BrokerInfoServiceClient(netifi.group('broker-services'));

// This method is defined in the router services protobuf
// rpc Brokers (google.protobuf.Empty) returns (stream Broker) {}

brokerServices.brokers(new Empty(), Buffer.alloc(0)).subscribe({
  onComplete: () => console.log('All brokers scanned'),
  onError: error => console.error(error),
  onNext: broker => {
    console.log("Scanning destinations connected to broker", broker);
    // Get Stream of All Destinations on Broker, defined in the router services protobuf
    // rpc Destinations (Broker) returns (stream Destination) {}
  
    this.brokerInfoService.destinations(broker, Buffer.alloc(0)).subscribe({
      onComplete: () => console.log('All destinations scanned'),
      onError: error => console.error(error),
      onNext: destination => {
        console.log("Destination connected to broker", destination);
      },
      onSubscribe: subscription => {
        subscription.request(100);
      }
    });
  },
  onSubscribe: subscription => {
    subscription.request(100);
  }
});
```

### As a Server

The netifi gateway can provide services to the network as well as call out. To add services to the gateway, the user must provide a service implementation and the name of the service that clients will know to call.

Assume we have defined a service in protobuf

```angular2html
service RandomStringGenerator {
  // Returns a random string between size 'min' and 'max' defined in the RandomStringRequest
  rpc GenerateString (RandomStringRequest) returns (RandomStringResponse) {}
}

message RandomStringRequest {
  int32 min = 1;
  int32 max = 2;
}

message RandomStringResponse {
  string generated = 1;
}
```

And we have used the `rsocket-rpc-protobuf` generator for the Client and Server classes.

```
// A local implementation that given a random string request, generates a Single<RandomStringResponse>
const localStringGenerator = {
  generateString: (message, metadata) => {
    const min = message.getMin();
    const max = message.getMax();

    const size = Math.floor(Math.random() * max) + min;
    let word = "";
    for(var j = 0; j < size; j++){
      word += generateChar();
    }
    return Single.of(nextWord);
  }
};

// We wrap our local implementation in the protobuf-generated Server code that unwraps and dispatches requests    
const randomStringService = new RandomStringGeneratorServer(localStringGenerator);

// Register our RSocket random string service with our gateway by the service name that we expect Clients to use
netifi.addService('com.netifi.demo.random-string-service', randomStringService);
```

Now our gateway can generate RSockets for the purpose of reaching out to the network and can register handlers so that others on the network can use our services!

For more information on how to set up the client, go to [docs.netifi.com](https://docs.netifi.com) and click the menu link "Netifi JS Client".

## Observables

We also provide a utility method to convert the `rsocket-flowable` types to the more familiar `Observable`.

```
const {Single, Flowable} = require('rsocket-flowable');
const {toObservable} = require('netifi-js-client');
const monoObservable = toObservable(Single.of("some value"));
const manyObservable = toObservable(Flowable.just(...[1, 2, 3, 4]));
```

This loses the semantic of backpressure (i.e. `onSubscribe` and an `ISubscription` with `request n`/`cancel` methods), but may be more palatable to developers with an existing RxJS codebase. 

## License
Copyright 2017 Netifi Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

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

'use strict';

import Netifi from './Netifi';

import {
  AccessKey,
  AccessKeyParameters,
  AccessToken,
  AccessTokenInfo,
} from './netifi/accesskey_info_pb';

import {
  Broker,
  Group,
  Destination,
  Event,
  Cluster,
  Id,
  Tag,
} from './netifi/broker_info_pb';

import {Brokers, Connection} from './netifi/broker_mgmt_pb';

import {
  AccessKeyInfoServiceClient,
  AccessKeyInfoServiceServer,
} from './netifi/accesskey_info_rsocket_pb';
import {
  BrokerInfoServiceClient,
  BrokerInfoServiceServer,
} from './netifi/broker_info_rsocket_pb';
import {
  BrokerManagementServiceClient,
  BrokerManagementServiceServer,
} from './netifi/broker_mgmt_rsocket_pb';
import {
  ClusterManagementServiceClient,
  ClusterManagementServiceServer,
} from './netifi/cluster_mgmt_rsocket_pb';

import toObservable from './rx/FlowableAdapter';

/**
 * The public API of the `client` package.
 */
export type {NetifiConfig} from './Netifi';

export {
  AccessKey,
  AccessKeyInfoServiceClient,
  AccessKeyInfoServiceServer,
  AccessKeyParameters,
  AccessToken,
  AccessTokenInfo,
  Broker,
  BrokerInfoServiceClient,
  BrokerInfoServiceServer,
  BrokerManagementServiceClient,
  BrokerManagementServiceServer,
  Brokers,
  Cluster,
  ClusterManagementServiceClient,
  ClusterManagementServiceServer,
  Connection,
  Destination,
  Event,
  Group,
  Id,
  Netifi,
  Tag,
  toObservable,
};

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var proteus_core_pb = require('../proteus/core_pb.js');
goog.exportSymbol('proto.io.netifi.proteus.broker.info.Broker', null, global);
goog.exportSymbol('proto.io.netifi.proteus.broker.info.Destination', null, global);
goog.exportSymbol('proto.io.netifi.proteus.broker.info.Event', null, global);
goog.exportSymbol('proto.io.netifi.proteus.broker.info.Event.Type', null, global);
goog.exportSymbol('proto.io.netifi.proteus.broker.info.Group', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.netifi.proteus.broker.info.Group = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.netifi.proteus.broker.info.Group, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.io.netifi.proteus.broker.info.Group.displayName = 'proto.io.netifi.proteus.broker.info.Group';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.netifi.proteus.broker.info.Group.prototype.toObject = function(opt_includeInstance) {
  return proto.io.netifi.proteus.broker.info.Group.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.netifi.proteus.broker.info.Group} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.netifi.proteus.broker.info.Group.toObject = function(includeInstance, msg) {
  var f, obj = {
    group: jspb.Message.getFieldWithDefault(msg, 1, ""),
    broker: (f = msg.getBroker()) && proto.io.netifi.proteus.broker.info.Broker.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.netifi.proteus.broker.info.Group}
 */
proto.io.netifi.proteus.broker.info.Group.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.netifi.proteus.broker.info.Group;
  return proto.io.netifi.proteus.broker.info.Group.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.netifi.proteus.broker.info.Group} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.netifi.proteus.broker.info.Group}
 */
proto.io.netifi.proteus.broker.info.Group.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
      break;
    case 2:
      var value = new proto.io.netifi.proteus.broker.info.Broker;
      reader.readMessage(value,proto.io.netifi.proteus.broker.info.Broker.deserializeBinaryFromReader);
      msg.setBroker(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.netifi.proteus.broker.info.Group.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.netifi.proteus.broker.info.Group.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.netifi.proteus.broker.info.Group} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.netifi.proteus.broker.info.Group.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBroker();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.io.netifi.proteus.broker.info.Broker.serializeBinaryToWriter
    );
  }
};


/**
 * optional string group = 1;
 * @return {string}
 */
proto.io.netifi.proteus.broker.info.Group.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.io.netifi.proteus.broker.info.Group.prototype.setGroup = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Broker broker = 2;
 * @return {?proto.io.netifi.proteus.broker.info.Broker}
 */
proto.io.netifi.proteus.broker.info.Group.prototype.getBroker = function() {
  return /** @type{?proto.io.netifi.proteus.broker.info.Broker} */ (
    jspb.Message.getWrapperField(this, proto.io.netifi.proteus.broker.info.Broker, 2));
};


/** @param {?proto.io.netifi.proteus.broker.info.Broker|undefined} value */
proto.io.netifi.proteus.broker.info.Group.prototype.setBroker = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.io.netifi.proteus.broker.info.Group.prototype.clearBroker = function() {
  this.setBroker(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.io.netifi.proteus.broker.info.Group.prototype.hasBroker = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.netifi.proteus.broker.info.Destination = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.netifi.proteus.broker.info.Destination, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.io.netifi.proteus.broker.info.Destination.displayName = 'proto.io.netifi.proteus.broker.info.Destination';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.netifi.proteus.broker.info.Destination.prototype.toObject = function(opt_includeInstance) {
  return proto.io.netifi.proteus.broker.info.Destination.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.netifi.proteus.broker.info.Destination} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.netifi.proteus.broker.info.Destination.toObject = function(includeInstance, msg) {
  var f, obj = {
    group: jspb.Message.getFieldWithDefault(msg, 1, ""),
    destination: jspb.Message.getFieldWithDefault(msg, 2, ""),
    broker: (f = msg.getBroker()) && proto.io.netifi.proteus.broker.info.Broker.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.netifi.proteus.broker.info.Destination}
 */
proto.io.netifi.proteus.broker.info.Destination.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.netifi.proteus.broker.info.Destination;
  return proto.io.netifi.proteus.broker.info.Destination.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.netifi.proteus.broker.info.Destination} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.netifi.proteus.broker.info.Destination}
 */
proto.io.netifi.proteus.broker.info.Destination.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestination(value);
      break;
    case 3:
      var value = new proto.io.netifi.proteus.broker.info.Broker;
      reader.readMessage(value,proto.io.netifi.proteus.broker.info.Broker.deserializeBinaryFromReader);
      msg.setBroker(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.netifi.proteus.broker.info.Destination.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.netifi.proteus.broker.info.Destination.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.netifi.proteus.broker.info.Destination} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.netifi.proteus.broker.info.Destination.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroup();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDestination();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBroker();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.io.netifi.proteus.broker.info.Broker.serializeBinaryToWriter
    );
  }
};


/**
 * optional string group = 1;
 * @return {string}
 */
proto.io.netifi.proteus.broker.info.Destination.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.io.netifi.proteus.broker.info.Destination.prototype.setGroup = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string destination = 2;
 * @return {string}
 */
proto.io.netifi.proteus.broker.info.Destination.prototype.getDestination = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.io.netifi.proteus.broker.info.Destination.prototype.setDestination = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Broker broker = 3;
 * @return {?proto.io.netifi.proteus.broker.info.Broker}
 */
proto.io.netifi.proteus.broker.info.Destination.prototype.getBroker = function() {
  return /** @type{?proto.io.netifi.proteus.broker.info.Broker} */ (
    jspb.Message.getWrapperField(this, proto.io.netifi.proteus.broker.info.Broker, 3));
};


/** @param {?proto.io.netifi.proteus.broker.info.Broker|undefined} value */
proto.io.netifi.proteus.broker.info.Destination.prototype.setBroker = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.io.netifi.proteus.broker.info.Destination.prototype.clearBroker = function() {
  this.setBroker(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.io.netifi.proteus.broker.info.Destination.prototype.hasBroker = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.netifi.proteus.broker.info.Broker = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.netifi.proteus.broker.info.Broker, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.io.netifi.proteus.broker.info.Broker.displayName = 'proto.io.netifi.proteus.broker.info.Broker';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.netifi.proteus.broker.info.Broker.prototype.toObject = function(opt_includeInstance) {
  return proto.io.netifi.proteus.broker.info.Broker.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.netifi.proteus.broker.info.Broker} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.netifi.proteus.broker.info.Broker.toObject = function(includeInstance, msg) {
  var f, obj = {
    brokerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ipaddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    port: jspb.Message.getFieldWithDefault(msg, 3, 0),
    clusterport: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.netifi.proteus.broker.info.Broker}
 */
proto.io.netifi.proteus.broker.info.Broker.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.netifi.proteus.broker.info.Broker;
  return proto.io.netifi.proteus.broker.info.Broker.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.netifi.proteus.broker.info.Broker} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.netifi.proteus.broker.info.Broker}
 */
proto.io.netifi.proteus.broker.info.Broker.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrokerid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpaddress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setClusterport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.netifi.proteus.broker.info.Broker.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.netifi.proteus.broker.info.Broker.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.netifi.proteus.broker.info.Broker} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.netifi.proteus.broker.info.Broker.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBrokerid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIpaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getClusterport();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string brokerId = 1;
 * @return {string}
 */
proto.io.netifi.proteus.broker.info.Broker.prototype.getBrokerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.io.netifi.proteus.broker.info.Broker.prototype.setBrokerid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ipAddress = 2;
 * @return {string}
 */
proto.io.netifi.proteus.broker.info.Broker.prototype.getIpaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.io.netifi.proteus.broker.info.Broker.prototype.setIpaddress = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 port = 3;
 * @return {number}
 */
proto.io.netifi.proteus.broker.info.Broker.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.io.netifi.proteus.broker.info.Broker.prototype.setPort = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 clusterPort = 4;
 * @return {number}
 */
proto.io.netifi.proteus.broker.info.Broker.prototype.getClusterport = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.io.netifi.proteus.broker.info.Broker.prototype.setClusterport = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.io.netifi.proteus.broker.info.Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.netifi.proteus.broker.info.Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.io.netifi.proteus.broker.info.Event.displayName = 'proto.io.netifi.proteus.broker.info.Event';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.io.netifi.proteus.broker.info.Event.prototype.toObject = function(opt_includeInstance) {
  return proto.io.netifi.proteus.broker.info.Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.netifi.proteus.broker.info.Event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.netifi.proteus.broker.info.Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    broker: (f = msg.getBroker()) && proto.io.netifi.proteus.broker.info.Broker.toObject(includeInstance, f),
    destination: (f = msg.getDestination()) && proto.io.netifi.proteus.broker.info.Destination.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.io.netifi.proteus.broker.info.Event}
 */
proto.io.netifi.proteus.broker.info.Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.netifi.proteus.broker.info.Event;
  return proto.io.netifi.proteus.broker.info.Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.netifi.proteus.broker.info.Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.netifi.proteus.broker.info.Event}
 */
proto.io.netifi.proteus.broker.info.Event.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.io.netifi.proteus.broker.info.Event.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.io.netifi.proteus.broker.info.Broker;
      reader.readMessage(value,proto.io.netifi.proteus.broker.info.Broker.deserializeBinaryFromReader);
      msg.setBroker(value);
      break;
    case 3:
      var value = new proto.io.netifi.proteus.broker.info.Destination;
      reader.readMessage(value,proto.io.netifi.proteus.broker.info.Destination.deserializeBinaryFromReader);
      msg.setDestination(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.io.netifi.proteus.broker.info.Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.netifi.proteus.broker.info.Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.netifi.proteus.broker.info.Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.netifi.proteus.broker.info.Event.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getBroker();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.io.netifi.proteus.broker.info.Broker.serializeBinaryToWriter
    );
  }
  f = message.getDestination();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.io.netifi.proteus.broker.info.Destination.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.io.netifi.proteus.broker.info.Event.Type = {
  JOIN: 0,
  LEAVE: 1
};

/**
 * optional Type type = 1;
 * @return {!proto.io.netifi.proteus.broker.info.Event.Type}
 */
proto.io.netifi.proteus.broker.info.Event.prototype.getType = function() {
  return /** @type {!proto.io.netifi.proteus.broker.info.Event.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.io.netifi.proteus.broker.info.Event.Type} value */
proto.io.netifi.proteus.broker.info.Event.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Broker broker = 2;
 * @return {?proto.io.netifi.proteus.broker.info.Broker}
 */
proto.io.netifi.proteus.broker.info.Event.prototype.getBroker = function() {
  return /** @type{?proto.io.netifi.proteus.broker.info.Broker} */ (
    jspb.Message.getWrapperField(this, proto.io.netifi.proteus.broker.info.Broker, 2));
};


/** @param {?proto.io.netifi.proteus.broker.info.Broker|undefined} value */
proto.io.netifi.proteus.broker.info.Event.prototype.setBroker = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.io.netifi.proteus.broker.info.Event.prototype.clearBroker = function() {
  this.setBroker(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.io.netifi.proteus.broker.info.Event.prototype.hasBroker = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Destination destination = 3;
 * @return {?proto.io.netifi.proteus.broker.info.Destination}
 */
proto.io.netifi.proteus.broker.info.Event.prototype.getDestination = function() {
  return /** @type{?proto.io.netifi.proteus.broker.info.Destination} */ (
    jspb.Message.getWrapperField(this, proto.io.netifi.proteus.broker.info.Destination, 3));
};


/** @param {?proto.io.netifi.proteus.broker.info.Destination|undefined} value */
proto.io.netifi.proteus.broker.info.Event.prototype.setDestination = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.io.netifi.proteus.broker.info.Event.prototype.clearDestination = function() {
  this.setDestination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.io.netifi.proteus.broker.info.Event.prototype.hasDestination = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.io.netifi.proteus.broker.info);

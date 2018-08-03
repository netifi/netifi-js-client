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

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.exportSymbol('proto.io.netifi.proteus.broker.access.AccessKey', null, global);
goog.exportSymbol('proto.io.netifi.proteus.broker.access.AccessKeyParameters', null, global);
goog.exportSymbol('proto.io.netifi.proteus.broker.access.AccessTokenInfo', null, global);

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
proto.io.netifi.proteus.broker.access.AccessKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.netifi.proteus.broker.access.AccessKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.io.netifi.proteus.broker.access.AccessKey.displayName = 'proto.io.netifi.proteus.broker.access.AccessKey';
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
proto.io.netifi.proteus.broker.access.AccessKey.prototype.toObject = function(opt_includeInstance) {
  return proto.io.netifi.proteus.broker.access.AccessKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.netifi.proteus.broker.access.AccessKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.netifi.proteus.broker.access.AccessKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.io.netifi.proteus.broker.access.AccessKey}
 */
proto.io.netifi.proteus.broker.access.AccessKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.netifi.proteus.broker.access.AccessKey;
  return proto.io.netifi.proteus.broker.access.AccessKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.netifi.proteus.broker.access.AccessKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.netifi.proteus.broker.access.AccessKey}
 */
proto.io.netifi.proteus.broker.access.AccessKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setKey(value);
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
proto.io.netifi.proteus.broker.access.AccessKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.netifi.proteus.broker.access.AccessKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.netifi.proteus.broker.access.AccessKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.netifi.proteus.broker.access.AccessKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 key = 1;
 * @return {number}
 */
proto.io.netifi.proteus.broker.access.AccessKey.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.io.netifi.proteus.broker.access.AccessKey.prototype.setKey = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
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
proto.io.netifi.proteus.broker.access.AccessKeyParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.netifi.proteus.broker.access.AccessKeyParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.io.netifi.proteus.broker.access.AccessKeyParameters.displayName = 'proto.io.netifi.proteus.broker.access.AccessKeyParameters';
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
proto.io.netifi.proteus.broker.access.AccessKeyParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.io.netifi.proteus.broker.access.AccessKeyParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.netifi.proteus.broker.access.AccessKeyParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.netifi.proteus.broker.access.AccessKeyParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.io.netifi.proteus.broker.access.AccessKeyParameters}
 */
proto.io.netifi.proteus.broker.access.AccessKeyParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.netifi.proteus.broker.access.AccessKeyParameters;
  return proto.io.netifi.proteus.broker.access.AccessKeyParameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.netifi.proteus.broker.access.AccessKeyParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.netifi.proteus.broker.access.AccessKeyParameters}
 */
proto.io.netifi.proteus.broker.access.AccessKeyParameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
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
proto.io.netifi.proteus.broker.access.AccessKeyParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.netifi.proteus.broker.access.AccessKeyParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.netifi.proteus.broker.access.AccessKeyParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.netifi.proteus.broker.access.AccessKeyParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.io.netifi.proteus.broker.access.AccessKeyParameters.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.io.netifi.proteus.broker.access.AccessKeyParameters.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
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
proto.io.netifi.proteus.broker.access.AccessTokenInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.io.netifi.proteus.broker.access.AccessTokenInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.io.netifi.proteus.broker.access.AccessTokenInfo.displayName = 'proto.io.netifi.proteus.broker.access.AccessTokenInfo';
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
proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.io.netifi.proteus.broker.access.AccessTokenInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.io.netifi.proteus.broker.access.AccessTokenInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    accesstokenhash: msg.getAccesstokenhash_asB64(),
    accesstokensalt: msg.getAccesstokensalt_asB64(),
    accesskeyalgo: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    disabled: jspb.Message.getFieldWithDefault(msg, 6, false),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.io.netifi.proteus.broker.access.AccessTokenInfo}
 */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.io.netifi.proteus.broker.access.AccessTokenInfo;
  return proto.io.netifi.proteus.broker.access.AccessTokenInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.io.netifi.proteus.broker.access.AccessTokenInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.io.netifi.proteus.broker.access.AccessTokenInfo}
 */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAccesstokenhash(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAccesstokensalt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccesskeyalgo(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
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
proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.io.netifi.proteus.broker.access.AccessTokenInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.io.netifi.proteus.broker.access.AccessTokenInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAccesstokenhash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getAccesstokensalt_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getAccesskeyalgo();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDisabled();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 key = 1;
 * @return {number}
 */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.setKey = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes accessTokenHash = 2;
 * @return {!(string|Uint8Array)}
 */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.getAccesstokenhash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes accessTokenHash = 2;
 * This is a type-conversion wrapper around `getAccesstokenhash()`
 * @return {string}
 */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.getAccesstokenhash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAccesstokenhash()));
};


/**
 * optional bytes accessTokenHash = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAccesstokenhash()`
 * @return {!Uint8Array}
 */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.getAccesstokenhash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAccesstokenhash()));
};


/** @param {!(string|Uint8Array)} value */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.setAccesstokenhash = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes accessTokenSalt = 3;
 * @return {!(string|Uint8Array)}
 */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.getAccesstokensalt = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes accessTokenSalt = 3;
 * This is a type-conversion wrapper around `getAccesstokensalt()`
 * @return {string}
 */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.getAccesstokensalt_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAccesstokensalt()));
};


/**
 * optional bytes accessTokenSalt = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAccesstokensalt()`
 * @return {!Uint8Array}
 */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.getAccesstokensalt_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAccesstokensalt()));
};


/** @param {!(string|Uint8Array)} value */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.setAccesstokensalt = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional string accessKeyAlgo = 4;
 * @return {string}
 */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.getAccesskeyalgo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.setAccesskeyalgo = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool disabled = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.setDisabled = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.setTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.clearTimestamp = function() {
  this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.io.netifi.proteus.broker.access.AccessTokenInfo.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.io.netifi.proteus.broker.access);

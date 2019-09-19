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

var zipkin_proto3_zipkin_pb = require('../zipkin/proto3/zipkin_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.exportSymbol('proto.com.netifi.broker.tracing.Ack', null, global);
goog.exportSymbol('proto.com.netifi.broker.tracing.Trace', null, global);
goog.exportSymbol('proto.com.netifi.broker.tracing.Traces', null, global);
goog.exportSymbol('proto.com.netifi.broker.tracing.TracesRequest', null, global);

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
proto.com.netifi.broker.tracing.Ack = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.netifi.broker.tracing.Ack, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.netifi.broker.tracing.Ack.displayName = 'proto.com.netifi.broker.tracing.Ack';
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
proto.com.netifi.broker.tracing.Ack.prototype.toObject = function(opt_includeInstance) {
  return proto.com.netifi.broker.tracing.Ack.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.netifi.broker.tracing.Ack} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.netifi.broker.tracing.Ack.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.com.netifi.broker.tracing.Ack}
 */
proto.com.netifi.broker.tracing.Ack.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.netifi.broker.tracing.Ack;
  return proto.com.netifi.broker.tracing.Ack.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.netifi.broker.tracing.Ack} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.netifi.broker.tracing.Ack}
 */
proto.com.netifi.broker.tracing.Ack.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.com.netifi.broker.tracing.Ack.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.netifi.broker.tracing.Ack.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.netifi.broker.tracing.Ack} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.netifi.broker.tracing.Ack.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.com.netifi.broker.tracing.Trace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.netifi.broker.tracing.Trace.repeatedFields_, null);
};
goog.inherits(proto.com.netifi.broker.tracing.Trace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.netifi.broker.tracing.Trace.displayName = 'proto.com.netifi.broker.tracing.Trace';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.netifi.broker.tracing.Trace.repeatedFields_ = [1];



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
proto.com.netifi.broker.tracing.Trace.prototype.toObject = function(opt_includeInstance) {
  return proto.com.netifi.broker.tracing.Trace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.netifi.broker.tracing.Trace} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.netifi.broker.tracing.Trace.toObject = function(includeInstance, msg) {
  var f, obj = {
    spansList: jspb.Message.toObjectList(msg.getSpansList(),
    zipkin_proto3_zipkin_pb.Span.toObject, includeInstance)
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
 * @return {!proto.com.netifi.broker.tracing.Trace}
 */
proto.com.netifi.broker.tracing.Trace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.netifi.broker.tracing.Trace;
  return proto.com.netifi.broker.tracing.Trace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.netifi.broker.tracing.Trace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.netifi.broker.tracing.Trace}
 */
proto.com.netifi.broker.tracing.Trace.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new zipkin_proto3_zipkin_pb.Span;
      reader.readMessage(value,zipkin_proto3_zipkin_pb.Span.deserializeBinaryFromReader);
      msg.addSpans(value);
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
proto.com.netifi.broker.tracing.Trace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.netifi.broker.tracing.Trace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.netifi.broker.tracing.Trace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.netifi.broker.tracing.Trace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpansList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      zipkin_proto3_zipkin_pb.Span.serializeBinaryToWriter
    );
  }
};


/**
 * repeated zipkin.proto3.Span spans = 1;
 * @return {!Array<!proto.zipkin.proto3.Span>}
 */
proto.com.netifi.broker.tracing.Trace.prototype.getSpansList = function() {
  return /** @type{!Array<!proto.zipkin.proto3.Span>} */ (
    jspb.Message.getRepeatedWrapperField(this, zipkin_proto3_zipkin_pb.Span, 1));
};


/** @param {!Array<!proto.zipkin.proto3.Span>} value */
proto.com.netifi.broker.tracing.Trace.prototype.setSpansList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zipkin.proto3.Span=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zipkin.proto3.Span}
 */
proto.com.netifi.broker.tracing.Trace.prototype.addSpans = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zipkin.proto3.Span, opt_index);
};


proto.com.netifi.broker.tracing.Trace.prototype.clearSpansList = function() {
  this.setSpansList([]);
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
proto.com.netifi.broker.tracing.Traces = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.netifi.broker.tracing.Traces.repeatedFields_, null);
};
goog.inherits(proto.com.netifi.broker.tracing.Traces, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.netifi.broker.tracing.Traces.displayName = 'proto.com.netifi.broker.tracing.Traces';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.netifi.broker.tracing.Traces.repeatedFields_ = [1];



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
proto.com.netifi.broker.tracing.Traces.prototype.toObject = function(opt_includeInstance) {
  return proto.com.netifi.broker.tracing.Traces.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.netifi.broker.tracing.Traces} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.netifi.broker.tracing.Traces.toObject = function(includeInstance, msg) {
  var f, obj = {
    tracesList: jspb.Message.toObjectList(msg.getTracesList(),
    proto.com.netifi.broker.tracing.Trace.toObject, includeInstance)
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
 * @return {!proto.com.netifi.broker.tracing.Traces}
 */
proto.com.netifi.broker.tracing.Traces.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.netifi.broker.tracing.Traces;
  return proto.com.netifi.broker.tracing.Traces.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.netifi.broker.tracing.Traces} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.netifi.broker.tracing.Traces}
 */
proto.com.netifi.broker.tracing.Traces.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.netifi.broker.tracing.Trace;
      reader.readMessage(value,proto.com.netifi.broker.tracing.Trace.deserializeBinaryFromReader);
      msg.addTraces(value);
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
proto.com.netifi.broker.tracing.Traces.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.netifi.broker.tracing.Traces.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.netifi.broker.tracing.Traces} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.netifi.broker.tracing.Traces.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTracesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.com.netifi.broker.tracing.Trace.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Trace traces = 1;
 * @return {!Array<!proto.com.netifi.broker.tracing.Trace>}
 */
proto.com.netifi.broker.tracing.Traces.prototype.getTracesList = function() {
  return /** @type{!Array<!proto.com.netifi.broker.tracing.Trace>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.netifi.broker.tracing.Trace, 1));
};


/** @param {!Array<!proto.com.netifi.broker.tracing.Trace>} value */
proto.com.netifi.broker.tracing.Traces.prototype.setTracesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.com.netifi.broker.tracing.Trace=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.netifi.broker.tracing.Trace}
 */
proto.com.netifi.broker.tracing.Traces.prototype.addTraces = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.com.netifi.broker.tracing.Trace, opt_index);
};


proto.com.netifi.broker.tracing.Traces.prototype.clearTracesList = function() {
  this.setTracesList([]);
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
proto.com.netifi.broker.tracing.TracesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.netifi.broker.tracing.TracesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.netifi.broker.tracing.TracesRequest.displayName = 'proto.com.netifi.broker.tracing.TracesRequest';
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
proto.com.netifi.broker.tracing.TracesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.netifi.broker.tracing.TracesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.netifi.broker.tracing.TracesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.netifi.broker.tracing.TracesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    lookbackseconds: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.com.netifi.broker.tracing.TracesRequest}
 */
proto.com.netifi.broker.tracing.TracesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.netifi.broker.tracing.TracesRequest;
  return proto.com.netifi.broker.tracing.TracesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.netifi.broker.tracing.TracesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.netifi.broker.tracing.TracesRequest}
 */
proto.com.netifi.broker.tracing.TracesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLookbackseconds(value);
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
proto.com.netifi.broker.tracing.TracesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.netifi.broker.tracing.TracesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.netifi.broker.tracing.TracesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.netifi.broker.tracing.TracesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLookbackseconds();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 lookbackSeconds = 1;
 * @return {number}
 */
proto.com.netifi.broker.tracing.TracesRequest.prototype.getLookbackseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.com.netifi.broker.tracing.TracesRequest.prototype.setLookbackseconds = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


goog.object.extend(exports, proto.com.netifi.broker.tracing);
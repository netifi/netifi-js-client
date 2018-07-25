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

goog.exportSymbol('proto.zipkin.proto3.Annotation', null, global);
goog.exportSymbol('proto.zipkin.proto3.Endpoint', null, global);
goog.exportSymbol('proto.zipkin.proto3.ListOfSpans', null, global);
goog.exportSymbol('proto.zipkin.proto3.Span', null, global);
goog.exportSymbol('proto.zipkin.proto3.Span.Kind', null, global);

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
proto.zipkin.proto3.Span = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zipkin.proto3.Span.repeatedFields_, null);
};
goog.inherits(proto.zipkin.proto3.Span, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zipkin.proto3.Span.displayName = 'proto.zipkin.proto3.Span';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zipkin.proto3.Span.repeatedFields_ = [10];



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
proto.zipkin.proto3.Span.prototype.toObject = function(opt_includeInstance) {
  return proto.zipkin.proto3.Span.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zipkin.proto3.Span} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zipkin.proto3.Span.toObject = function(includeInstance, msg) {
  var f, obj = {
    traceId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parentId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, ""),
    kind: jspb.Message.getFieldWithDefault(msg, 4, 0),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 6, 0),
    duration: jspb.Message.getFieldWithDefault(msg, 7, 0),
    localEndpoint: (f = msg.getLocalEndpoint()) && proto.zipkin.proto3.Endpoint.toObject(includeInstance, f),
    remoteEndpoint: (f = msg.getRemoteEndpoint()) && proto.zipkin.proto3.Endpoint.toObject(includeInstance, f),
    annotationsList: jspb.Message.toObjectList(msg.getAnnotationsList(),
    proto.zipkin.proto3.Annotation.toObject, includeInstance),
    tagsMap: (f = msg.getTagsMap()) ? f.toObject(includeInstance, undefined) : [],
    debug: jspb.Message.getFieldWithDefault(msg, 12, false),
    shared: jspb.Message.getFieldWithDefault(msg, 13, false)
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
 * @return {!proto.zipkin.proto3.Span}
 */
proto.zipkin.proto3.Span.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zipkin.proto3.Span;
  return proto.zipkin.proto3.Span.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zipkin.proto3.Span} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zipkin.proto3.Span}
 */
proto.zipkin.proto3.Span.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTraceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {!proto.zipkin.proto3.Span.Kind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setTimestamp(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDuration(value);
      break;
    case 8:
      var value = new proto.zipkin.proto3.Endpoint;
      reader.readMessage(value,proto.zipkin.proto3.Endpoint.deserializeBinaryFromReader);
      msg.setLocalEndpoint(value);
      break;
    case 9:
      var value = new proto.zipkin.proto3.Endpoint;
      reader.readMessage(value,proto.zipkin.proto3.Endpoint.deserializeBinaryFromReader);
      msg.setRemoteEndpoint(value);
      break;
    case 10:
      var value = new proto.zipkin.proto3.Annotation;
      reader.readMessage(value,proto.zipkin.proto3.Annotation.deserializeBinaryFromReader);
      msg.addAnnotations(value);
      break;
    case 11:
      var value = msg.getTagsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDebug(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShared(value);
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
proto.zipkin.proto3.Span.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zipkin.proto3.Span.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zipkin.proto3.Span} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zipkin.proto3.Span.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTraceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParentId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeFixed64(
      6,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getLocalEndpoint();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.zipkin.proto3.Endpoint.serializeBinaryToWriter
    );
  }
  f = message.getRemoteEndpoint();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.zipkin.proto3.Endpoint.serializeBinaryToWriter
    );
  }
  f = message.getAnnotationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.zipkin.proto3.Annotation.serializeBinaryToWriter
    );
  }
  f = message.getTagsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(11, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getDebug();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getShared();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.zipkin.proto3.Span.Kind = {
  SPAN_KIND_UNSPECIFIED: 0,
  CLIENT: 1,
  SERVER: 2,
  PRODUCER: 3,
  CONSUMER: 4
};

/**
 * optional string trace_id = 1;
 * @return {string}
 */
proto.zipkin.proto3.Span.prototype.getTraceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.zipkin.proto3.Span.prototype.setTraceId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent_id = 2;
 * @return {string}
 */
proto.zipkin.proto3.Span.prototype.getParentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.zipkin.proto3.Span.prototype.setParentId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.zipkin.proto3.Span.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.zipkin.proto3.Span.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Kind kind = 4;
 * @return {!proto.zipkin.proto3.Span.Kind}
 */
proto.zipkin.proto3.Span.prototype.getKind = function() {
  return /** @type {!proto.zipkin.proto3.Span.Kind} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.zipkin.proto3.Span.Kind} value */
proto.zipkin.proto3.Span.prototype.setKind = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.zipkin.proto3.Span.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.zipkin.proto3.Span.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional fixed64 timestamp = 6;
 * @return {number}
 */
proto.zipkin.proto3.Span.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.zipkin.proto3.Span.prototype.setTimestamp = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 duration = 7;
 * @return {number}
 */
proto.zipkin.proto3.Span.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.zipkin.proto3.Span.prototype.setDuration = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional Endpoint local_endpoint = 8;
 * @return {?proto.zipkin.proto3.Endpoint}
 */
proto.zipkin.proto3.Span.prototype.getLocalEndpoint = function() {
  return /** @type{?proto.zipkin.proto3.Endpoint} */ (
    jspb.Message.getWrapperField(this, proto.zipkin.proto3.Endpoint, 8));
};


/** @param {?proto.zipkin.proto3.Endpoint|undefined} value */
proto.zipkin.proto3.Span.prototype.setLocalEndpoint = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.zipkin.proto3.Span.prototype.clearLocalEndpoint = function() {
  this.setLocalEndpoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zipkin.proto3.Span.prototype.hasLocalEndpoint = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Endpoint remote_endpoint = 9;
 * @return {?proto.zipkin.proto3.Endpoint}
 */
proto.zipkin.proto3.Span.prototype.getRemoteEndpoint = function() {
  return /** @type{?proto.zipkin.proto3.Endpoint} */ (
    jspb.Message.getWrapperField(this, proto.zipkin.proto3.Endpoint, 9));
};


/** @param {?proto.zipkin.proto3.Endpoint|undefined} value */
proto.zipkin.proto3.Span.prototype.setRemoteEndpoint = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.zipkin.proto3.Span.prototype.clearRemoteEndpoint = function() {
  this.setRemoteEndpoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zipkin.proto3.Span.prototype.hasRemoteEndpoint = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated Annotation annotations = 10;
 * @return {!Array<!proto.zipkin.proto3.Annotation>}
 */
proto.zipkin.proto3.Span.prototype.getAnnotationsList = function() {
  return /** @type{!Array<!proto.zipkin.proto3.Annotation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zipkin.proto3.Annotation, 10));
};


/** @param {!Array<!proto.zipkin.proto3.Annotation>} value */
proto.zipkin.proto3.Span.prototype.setAnnotationsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.zipkin.proto3.Annotation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zipkin.proto3.Annotation}
 */
proto.zipkin.proto3.Span.prototype.addAnnotations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.zipkin.proto3.Annotation, opt_index);
};


proto.zipkin.proto3.Span.prototype.clearAnnotationsList = function() {
  this.setAnnotationsList([]);
};


/**
 * map<string, string> tags = 11;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.zipkin.proto3.Span.prototype.getTagsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 11, opt_noLazyCreate,
      null));
};


proto.zipkin.proto3.Span.prototype.clearTagsMap = function() {
  this.getTagsMap().clear();
};


/**
 * optional bool debug = 12;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.zipkin.proto3.Span.prototype.getDebug = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 12, false));
};


/** @param {boolean} value */
proto.zipkin.proto3.Span.prototype.setDebug = function(value) {
  jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool shared = 13;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.zipkin.proto3.Span.prototype.getShared = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 13, false));
};


/** @param {boolean} value */
proto.zipkin.proto3.Span.prototype.setShared = function(value) {
  jspb.Message.setProto3BooleanField(this, 13, value);
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
proto.zipkin.proto3.Endpoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zipkin.proto3.Endpoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zipkin.proto3.Endpoint.displayName = 'proto.zipkin.proto3.Endpoint';
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
proto.zipkin.proto3.Endpoint.prototype.toObject = function(opt_includeInstance) {
  return proto.zipkin.proto3.Endpoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zipkin.proto3.Endpoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zipkin.proto3.Endpoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ipv4: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ipv6: jspb.Message.getFieldWithDefault(msg, 3, ""),
    port: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.zipkin.proto3.Endpoint}
 */
proto.zipkin.proto3.Endpoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zipkin.proto3.Endpoint;
  return proto.zipkin.proto3.Endpoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zipkin.proto3.Endpoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zipkin.proto3.Endpoint}
 */
proto.zipkin.proto3.Endpoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpv4(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpv6(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
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
proto.zipkin.proto3.Endpoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zipkin.proto3.Endpoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zipkin.proto3.Endpoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zipkin.proto3.Endpoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIpv4();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIpv6();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string service_name = 1;
 * @return {string}
 */
proto.zipkin.proto3.Endpoint.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.zipkin.proto3.Endpoint.prototype.setServiceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ipv4 = 2;
 * @return {string}
 */
proto.zipkin.proto3.Endpoint.prototype.getIpv4 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.zipkin.proto3.Endpoint.prototype.setIpv4 = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string ipv6 = 3;
 * @return {string}
 */
proto.zipkin.proto3.Endpoint.prototype.getIpv6 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.zipkin.proto3.Endpoint.prototype.setIpv6 = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 port = 4;
 * @return {number}
 */
proto.zipkin.proto3.Endpoint.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.zipkin.proto3.Endpoint.prototype.setPort = function(value) {
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
proto.zipkin.proto3.Annotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zipkin.proto3.Annotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zipkin.proto3.Annotation.displayName = 'proto.zipkin.proto3.Annotation';
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
proto.zipkin.proto3.Annotation.prototype.toObject = function(opt_includeInstance) {
  return proto.zipkin.proto3.Annotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zipkin.proto3.Annotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zipkin.proto3.Annotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.zipkin.proto3.Annotation}
 */
proto.zipkin.proto3.Annotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zipkin.proto3.Annotation;
  return proto.zipkin.proto3.Annotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zipkin.proto3.Annotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zipkin.proto3.Annotation}
 */
proto.zipkin.proto3.Annotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.zipkin.proto3.Annotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zipkin.proto3.Annotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zipkin.proto3.Annotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zipkin.proto3.Annotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeFixed64(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional fixed64 timestamp = 1;
 * @return {number}
 */
proto.zipkin.proto3.Annotation.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.zipkin.proto3.Annotation.prototype.setTimestamp = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.zipkin.proto3.Annotation.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.zipkin.proto3.Annotation.prototype.setValue = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
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
proto.zipkin.proto3.ListOfSpans = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zipkin.proto3.ListOfSpans.repeatedFields_, null);
};
goog.inherits(proto.zipkin.proto3.ListOfSpans, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zipkin.proto3.ListOfSpans.displayName = 'proto.zipkin.proto3.ListOfSpans';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zipkin.proto3.ListOfSpans.repeatedFields_ = [1];



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
proto.zipkin.proto3.ListOfSpans.prototype.toObject = function(opt_includeInstance) {
  return proto.zipkin.proto3.ListOfSpans.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zipkin.proto3.ListOfSpans} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zipkin.proto3.ListOfSpans.toObject = function(includeInstance, msg) {
  var f, obj = {
    spansList: jspb.Message.toObjectList(msg.getSpansList(),
    proto.zipkin.proto3.Span.toObject, includeInstance)
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
 * @return {!proto.zipkin.proto3.ListOfSpans}
 */
proto.zipkin.proto3.ListOfSpans.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zipkin.proto3.ListOfSpans;
  return proto.zipkin.proto3.ListOfSpans.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zipkin.proto3.ListOfSpans} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zipkin.proto3.ListOfSpans}
 */
proto.zipkin.proto3.ListOfSpans.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zipkin.proto3.Span;
      reader.readMessage(value,proto.zipkin.proto3.Span.deserializeBinaryFromReader);
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
proto.zipkin.proto3.ListOfSpans.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zipkin.proto3.ListOfSpans.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zipkin.proto3.ListOfSpans} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zipkin.proto3.ListOfSpans.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpansList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.zipkin.proto3.Span.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Span spans = 1;
 * @return {!Array<!proto.zipkin.proto3.Span>}
 */
proto.zipkin.proto3.ListOfSpans.prototype.getSpansList = function() {
  return /** @type{!Array<!proto.zipkin.proto3.Span>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zipkin.proto3.Span, 1));
};


/** @param {!Array<!proto.zipkin.proto3.Span>} value */
proto.zipkin.proto3.ListOfSpans.prototype.setSpansList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zipkin.proto3.Span=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zipkin.proto3.Span}
 */
proto.zipkin.proto3.ListOfSpans.prototype.addSpans = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zipkin.proto3.Span, opt_index);
};


proto.zipkin.proto3.ListOfSpans.prototype.clearSpansList = function() {
  this.setSpansList([]);
};


goog.object.extend(exports, proto.zipkin.proto3);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashbuilderComponentController = void 0;
var function_1 = require("../function");
var message_1 = require("../message");
var MessageProperty_1 = require("../message/MessageProperty");
var DashbuilderComponentController = (function () {
  function DashbuilderComponentController(bus, componentId) {
    this.bus = bus;
    this.componentId = componentId;
    this.callbacks = new Map();
    this.onInit = function (p) {
      console.debug("Received INIT.");
      console.debug(p);
    };
    this.onDataSet = function (ds) {
      console.debug("Received DataSet.");
      console.debug(ds);
    };
  }
  DashbuilderComponentController.prototype.init = function (params) {
    this.componentId = params.get(MessageProperty_1.MessageProperty.COMPONENT_ID);
    this.onInit(params);
  };
  DashbuilderComponentController.prototype.setOnDataSet = function (onDataSet) {
    this.onDataSet = onDataSet;
  };
  DashbuilderComponentController.prototype.setOnInit = function (onInit) {
    this.onInit = onInit;
  };
  DashbuilderComponentController.prototype.ready = function () {};
  DashbuilderComponentController.prototype.requireConfigurationFix = function (message) {
    var props = new Map();
    props.set(MessageProperty_1.MessageProperty.CONFIGURATION_ISSUE, message);
    this.bus.send(this.componentId, {
      type: message_1.MessageType.FIX_CONFIGURATION,
      properties: props,
    });
  };
  DashbuilderComponentController.prototype.configurationOk = function () {
    this.bus.send(this.componentId, {
      type: message_1.MessageType.CONFIGURATION_OK,
      properties: new Map(),
    });
  };
  DashbuilderComponentController.prototype.filter = function (filterRequest) {
    var props = new Map();
    props.set(MessageProperty_1.MessageProperty.FILTER, filterRequest);
    this.bus.send(this.componentId, {
      type: message_1.MessageType.FILTER,
      properties: props,
    });
  };
  DashbuilderComponentController.prototype.callFunction = function (functionCallRequest) {
    var _this = this;
    var props = new Map();
    props.set(MessageProperty_1.MessageProperty.FUNCTION_CALL, functionCallRequest);
    this.bus.send(this.componentId, {
      type: message_1.MessageType.FUNCTION_CALL,
      properties: props,
    });
    return new Promise(function (resolve, error) {
      var key = _this.buildFunctionKey(functionCallRequest);
      _this.callbacks.set(key, {
        onSucess: resolve,
        onError: error,
      });
    });
  };
  DashbuilderComponentController.prototype.receiveFunctionResponse = function (functionResponse) {
    var key = this.buildFunctionKey(functionResponse.request);
    var functionCallbacks = this.callbacks.get(key);
    if (functionCallbacks) {
      if (
        functionResponse.resultType === function_1.FunctionResultType.ERROR ||
        functionResponse.resultType === function_1.FunctionResultType.NOT_FOUND
      ) {
        functionCallbacks.onError(functionResponse.message);
      } else {
        functionCallbacks.onSucess(functionResponse.result);
      }
    } else {
      console.warn("Callbacks for function call not found. Key: " + key);
    }
    this.callbacks.delete(key);
  };
  DashbuilderComponentController.prototype.setComponentBus = function (bus) {
    this.bus = bus;
  };
  DashbuilderComponentController.prototype.buildFunctionKey = function (functionRequest) {
    return functionRequest.functionName;
  };
  return DashbuilderComponentController;
})();
exports.DashbuilderComponentController = DashbuilderComponentController;
//# sourceMappingURL=DashbuilderComponentController.js.map

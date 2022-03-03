"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashbuilderComponentDispatcher = void 0;
var message_1 = require("../message");
var MessageProperty_1 = require("../message/MessageProperty");
var DashbuilderComponentDispatcher = (function () {
  function DashbuilderComponentDispatcher(bus, componentController) {
    var _this = this;
    this.bus = bus;
    this.componentController = componentController;
    this.messageDispatcher = function (message) {
      if (message.type === message_1.MessageType.INIT) {
        _this.componentId = message.properties.get(MessageProperty_1.MessageProperty.COMPONENT_ID);
        _this.componentController.init(message.properties);
      }
      if (message.type === message_1.MessageType.DATASET) {
        var dataSet = message.properties.get(MessageProperty_1.MessageProperty.DATASET);
        _this.componentController.onDataSet(dataSet, message.properties);
      }
      if (message.type === message_1.MessageType.FUNCTION_RESPONSE) {
        var functionResponse = message.properties.get(MessageProperty_1.MessageProperty.FUNCTION_RESPONSE);
        _this.componentController.receiveFunctionResponse(functionResponse);
      }
    };
  }
  DashbuilderComponentDispatcher.prototype.isAutoReady = function () {
    return true;
  };
  DashbuilderComponentDispatcher.prototype.init = function () {
    this.bus.setListener(this.messageDispatcher);
    this.bus.start();
  };
  DashbuilderComponentDispatcher.prototype.sendMessage = function (componentMessage) {
    componentMessage.properties.set(MessageProperty_1.MessageProperty.COMPONENT_ID, this.componentId);
    window.parent.postMessage(componentMessage, window.location.href);
  };
  DashbuilderComponentDispatcher.prototype.stop = function () {
    this.bus.destroy();
  };
  return DashbuilderComponentDispatcher;
})();
exports.DashbuilderComponentDispatcher = DashbuilderComponentDispatcher;
//# sourceMappingURL=DashbuilderComponentDispatcher.js.map

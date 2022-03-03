"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserComponentBus = void 0;
var message_1 = require("../message");
var BrowserComponentBus = (function () {
  function BrowserComponentBus() {
    var _this = this;
    this.messageListener = function (e) {
      _this.listener(e.data);
    };
  }
  BrowserComponentBus.prototype.start = function () {
    window.addEventListener("message", this.messageListener, false);
  };
  BrowserComponentBus.prototype.send = function (componentId, message) {
    console.debug("[BrowserComponentBus] Sending Message");
    console.debug(message);
    message.properties.set(message_1.MessageProperty.COMPONENT_ID, componentId);
    window.parent.postMessage(message, window.location.href);
  };
  BrowserComponentBus.prototype.setListener = function (onMessage) {
    this.listener = onMessage;
  };
  BrowserComponentBus.prototype.destroy = function () {
    window.removeEventListener("message", this.messageListener, false);
  };
  return BrowserComponentBus;
})();
exports.BrowserComponentBus = BrowserComponentBus;
//# sourceMappingURL=BrowserComponentBus.js.map

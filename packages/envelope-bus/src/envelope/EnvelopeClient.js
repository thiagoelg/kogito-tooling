"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvelopeClient = void 0;
var api_1 = require("../api");
var common_1 = require("../common");
var EnvelopeClient = (function () {
  function EnvelopeClient(bus, envelopeId) {
    var _this = this;
    this.bus = bus;
    this.envelopeId = envelopeId;
    this.manager = new common_1.EnvelopeBusMessageManager(function (message) {
      return _this.send(message);
    }, "KogitoEnvelopeBus");
  }
  Object.defineProperty(EnvelopeClient.prototype, "channelApi", {
    get: function () {
      return this.manager.clientApi;
    },
    enumerable: false,
    configurable: true,
  });
  EnvelopeClient.prototype.associate = function (origin, envelopeServerId) {
    this.targetOrigin = origin;
    this.associatedEnvelopeServerId = envelopeServerId;
  };
  EnvelopeClient.prototype.startListening = function (apiImpl) {
    var _this = this;
    if (this.eventListener) {
      return;
    }
    this.manager.currentApiImpl = apiImpl;
    this.eventListener = function (event) {
      return _this.receive(event.data, apiImpl);
    };
    window.addEventListener("message", this.eventListener);
  };
  EnvelopeClient.prototype.stopListening = function () {
    this.manager.currentApiImpl = undefined;
    window.removeEventListener("message", this.eventListener);
  };
  EnvelopeClient.prototype.send = function (message) {
    if (!this.targetOrigin || !this.associatedEnvelopeServerId) {
      throw new Error("Tried to send message without associated Envelope Server set");
    }
    this.bus.postMessage(
      __assign(__assign({}, message), {
        targetEnvelopeServerId: this.associatedEnvelopeServerId,
        directSender: api_1.EnvelopeBusMessageDirectSender.ENVELOPE_CLIENT,
      }),
      this.targetOrigin
    );
  };
  EnvelopeClient.prototype.receive = function (message, apiImpl) {
    if (message.directSender === api_1.EnvelopeBusMessageDirectSender.ENVELOPE_CLIENT) {
      return;
    }
    if (this.envelopeId !== message.targetEnvelopeId) {
      return;
    }
    if (!message.targetEnvelopeServerId) {
      this.manager.server.receive(message, apiImpl);
    } else if (message.targetEnvelopeServerId && message.purpose === api_1.EnvelopeBusMessagePurpose.NOTIFICATION) {
      this.manager.server.receive(message, {});
    }
  };
  return EnvelopeClient;
})();
exports.EnvelopeClient = EnvelopeClient;
//# sourceMappingURL=EnvelopeClient.js.map

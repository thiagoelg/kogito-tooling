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
exports.EnvelopeServer = exports.EnvelopeServerType = void 0;
var api_1 = require("../api");
var common_1 = require("../common");
var EnvelopeServerType;
(function (EnvelopeServerType) {
  EnvelopeServerType["LOCAL"] = "local";
  EnvelopeServerType["REMOTE"] = "remote";
})((EnvelopeServerType = exports.EnvelopeServerType || (exports.EnvelopeServerType = {})));
var EnvelopeServer = (function () {
  function EnvelopeServer(bus, origin, pollInit, type, manager) {
    var _this = this;
    if (type === void 0) {
      type = EnvelopeServerType.REMOTE;
    }
    if (manager === void 0) {
      manager = new common_1.EnvelopeBusMessageManager(function (message) {
        return bus.postMessage(
          __assign(__assign({}, message), {
            targetEnvelopeId: type === EnvelopeServerType.LOCAL ? _this.id : undefined,
            directSender: api_1.EnvelopeBusMessageDirectSender.ENVELOPE_SERVER,
          })
        );
      }, "EnvelopeServer");
    }
    this.origin = origin;
    this.pollInit = pollInit;
    this.type = type;
    this.manager = manager;
    this.id = this.generateRandomId();
  }
  Object.defineProperty(EnvelopeServer.prototype, "envelopeApi", {
    get: function () {
      return this.manager.clientApi;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(EnvelopeServer.prototype, "shared", {
    get: function () {
      return this.manager.shared;
    },
    enumerable: false,
    configurable: true,
  });
  EnvelopeServer.prototype.startInitPolling = function (apiImpl) {
    var _this = this;
    this.pollInit(this).then(function () {
      _this.stopInitPolling();
    });
    this.manager.currentApiImpl = apiImpl;
    this.initialPollingSetting = setTimeout(function () {
      _this.initPolling = setInterval(function () {
        _this.pollInit(_this).then(function () {
          return _this.stopInitPolling();
        });
      }, EnvelopeServer.INIT_POLLING_INTERVAL_IN_MS);
      _this.initPollingTimeout = setTimeout(function () {
        _this.stopInitPolling();
        console.info("Init polling timed out. Looks like the Envelope is not responding accordingly.");
      }, EnvelopeServer.INIT_POLLING_TIMEOUT_IN_MS);
    }, EnvelopeServer.INIT_POLLING_INTERVAL_IN_MS);
  };
  EnvelopeServer.prototype.stopInitPolling = function () {
    clearTimeout(this.initialPollingSetting);
    this.initialPollingSetting = undefined;
    this.manager.currentApiImpl = undefined;
    clearInterval(this.initPolling);
    this.initPolling = undefined;
    clearTimeout(this.initPollingTimeout);
    this.initPollingTimeout = undefined;
  };
  EnvelopeServer.prototype.receive = function (message, apiImpl) {
    if (message.directSender === api_1.EnvelopeBusMessageDirectSender.ENVELOPE_SERVER) {
      return;
    }
    if (message.targetEnvelopeId) {
      return;
    }
    if (message.targetEnvelopeServerId === this.id) {
      this.manager.server.receive(message, apiImpl);
    } else if (message.purpose === api_1.EnvelopeBusMessagePurpose.NOTIFICATION) {
      this.manager.server.receive(message, {});
    }
  };
  EnvelopeServer.prototype.generateRandomId = function () {
    var randomPart = Math.random().toString(36).substr(2, 9);
    var milliseconds = new Date().getMilliseconds();
    return "_".concat(randomPart, "_").concat(milliseconds);
  };
  EnvelopeServer.INIT_POLLING_TIMEOUT_IN_MS = 60000;
  EnvelopeServer.INIT_POLLING_INTERVAL_IN_MS = 100;
  return EnvelopeServer;
})();
exports.EnvelopeServer = EnvelopeServer;
//# sourceMappingURL=EnvelopeServer.js.map

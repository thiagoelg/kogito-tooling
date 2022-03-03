"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("@kie-tools-core/envelope-bus/dist/api");
var channel_1 = require("@kie-tools-core/envelope-bus/dist/channel");
var sentMessages;
var envelopeServer;
var apiImpl;
beforeEach(function () {
  sentMessages = [];
  apiImpl = {
    setText: jest.fn(),
    someRequest: jest.fn(function () {
      return Promise.resolve("a string");
    }),
  };
  envelopeServer = new channel_1.EnvelopeServer(
    {
      postMessage: function (msg) {
        return sentMessages.push(msg);
      },
    },
    "tests",
    function (self) {
      return self.envelopeApi.requests.init();
    }
  );
});
var delay = function (ms) {
  return new Promise(function (res) {
    return Promise.resolve().then(function () {
      return setTimeout(res, ms);
    });
  });
};
describe("new instance", function () {
  test("does nothing", function () {
    expect(envelopeServer.initialPollingSetting).toBeFalsy();
    expect(envelopeServer.initPolling).toBeFalsy();
    expect(envelopeServer.initPollingTimeout).toBeFalsy();
    expect(sentMessages.length).toEqual(0);
  });
});
describe("startInitPolling", function () {
  test("polls for init response", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var spy;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            spy = jest.spyOn(envelopeServer, "stopInitPolling");
            envelopeServer.startInitPolling(apiImpl);
            expect(envelopeServer.initialPollingSetting).toBeTruthy();
            expect(envelopeServer.initPolling).toBeFalsy();
            expect(envelopeServer.initPollingTimeout).toBeFalsy();
            return [4, delay(100)];
          case 1:
            _a.sent();
            expect(envelopeServer.initPolling).toBeTruthy();
            expect(envelopeServer.initPollingTimeout).toBeTruthy();
            return [4, delay(100)];
          case 2:
            _a.sent();
            return [
              4,
              incomingMessage({
                targetEnvelopeServerId: envelopeServer.id,
                requestId: "EnvelopeServer_0",
                type: "init",
                purpose: api_1.EnvelopeBusMessagePurpose.RESPONSE,
                data: undefined,
              }),
            ];
          case 3:
            _a.sent();
            expect(envelopeServer.stopInitPolling).toHaveBeenCalled();
            expect(envelopeServer.initialPollingSetting).toBeFalsy();
            expect(envelopeServer.initPolling).toBeFalsy();
            expect(envelopeServer.initPollingTimeout).toBeFalsy();
            spy.mockReset();
            spy.mockRestore();
            return [2];
        }
      });
    });
  });
  test("stops polling after timeout", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var spy;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            spy = jest.spyOn(envelopeServer, "stopInitPolling");
            channel_1.EnvelopeServer.INIT_POLLING_TIMEOUT_IN_MS = 200;
            envelopeServer.startInitPolling(apiImpl);
            expect(envelopeServer.initialPollingSetting).toBeTruthy();
            expect(envelopeServer.initPolling).toBeFalsy();
            expect(envelopeServer.initPollingTimeout).toBeFalsy();
            return [4, delay(250)];
          case 1:
            _a.sent();
            expect(envelopeServer.initPolling).toBeTruthy();
            expect(envelopeServer.initPollingTimeout).toBeTruthy();
            return [4, delay(250)];
          case 2:
            _a.sent();
            expect(envelopeServer.stopInitPolling).toHaveBeenCalled();
            expect(envelopeServer.initialPollingSetting).toBeFalsy();
            expect(envelopeServer.initPolling).toBeFalsy();
            expect(envelopeServer.initPollingTimeout).toBeFalsy();
            spy.mockReset();
            spy.mockRestore();
            return [2];
        }
      });
    });
  });
});
describe("receive", function () {
  test("any request with different targetEnvelopeServerId", function () {
    var receive = jest.spyOn(envelopeServer.manager.server, "receive");
    envelopeServer.receive(
      {
        targetEnvelopeServerId: "unknown-id",
        purpose: api_1.EnvelopeBusMessagePurpose.REQUEST,
        requestId: "any",
        type: "someRequest",
        data: [],
        directSender: api_1.EnvelopeBusMessageDirectSender.ENVELOPE_CLIENT,
      },
      apiImpl
    );
    expect(receive).not.toBeCalled();
  });
  test("any request with targetEnvelopeId", function () {
    var receive = jest.spyOn(envelopeServer.manager.server, "receive");
    envelopeServer.receive(
      {
        targetEnvelopeId: "unknown-id",
        purpose: api_1.EnvelopeBusMessagePurpose.REQUEST,
        requestId: "any",
        type: "someRequest",
        data: [],
        directSender: api_1.EnvelopeBusMessageDirectSender.ENVELOPE_CLIENT,
      },
      apiImpl
    );
    expect(receive).not.toBeCalled();
  });
  test("any request with the same targetEnvelopeServerId", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            envelopeServer.receive(
              {
                targetEnvelopeServerId: envelopeServer.id,
                purpose: api_1.EnvelopeBusMessagePurpose.REQUEST,
                requestId: "any",
                type: "someRequest",
                data: ["param1"],
                directSender: api_1.EnvelopeBusMessageDirectSender.ENVELOPE_CLIENT,
              },
              apiImpl
            );
            return [4, delay(0)];
          case 1:
            _a.sent();
            expect(sentMessages.length).toStrictEqual(1);
            expect(apiImpl.someRequest).toBeCalledWith("param1");
            return [2];
        }
      });
    });
  });
  test("any notification with different targetEnvelopeServerId", function () {
    envelopeServer.receive(
      {
        targetEnvelopeServerId: "not-mine",
        purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
        type: "setText",
        data: ["some text"],
        directSender: api_1.EnvelopeBusMessageDirectSender.ENVELOPE_CLIENT,
      },
      apiImpl
    );
    expect(apiImpl.setText).not.toBeCalled();
  });
  test("any notification with the same targetEnvelopeServerId", function () {
    envelopeServer.receive(
      {
        targetEnvelopeServerId: envelopeServer.id,
        purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
        type: "setText",
        data: ["some text"],
        directSender: api_1.EnvelopeBusMessageDirectSender.ENVELOPE_CLIENT,
      },
      apiImpl
    );
    expect(apiImpl.setText).toBeCalledWith("some text");
  });
  test("any request from another EnvelopeServer", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            envelopeServer.receive(
              {
                targetEnvelopeServerId: envelopeServer.id,
                purpose: api_1.EnvelopeBusMessagePurpose.REQUEST,
                requestId: "any",
                type: "someRequest",
                data: ["param1"],
                directSender: api_1.EnvelopeBusMessageDirectSender.ENVELOPE_SERVER,
              },
              apiImpl
            );
            return [4, delay(0)];
          case 1:
            _a.sent();
            expect(sentMessages.length).toStrictEqual(0);
            expect(apiImpl.someRequest).not.toHaveBeenCalled();
            return [2];
        }
      });
    });
  });
});
function incomingMessage(message) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          envelopeServer.receive(message, apiImpl);
          return [4, delay(0)];
        case 1:
          _a.sent();
          return [2];
      }
    });
  });
}
//# sourceMappingURL=EnvelopeServer.test.js.map

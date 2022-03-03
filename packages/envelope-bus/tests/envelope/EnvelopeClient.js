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
var envelope_1 = require("@kie-tools-core/envelope-bus/dist/envelope");
var api_1 = require("@kie-tools-core/envelope-bus/dist/api");
var apiImpl;
var envelopeClient;
var sentMessages;
beforeEach(function () {
  sentMessages = [];
  apiImpl = {
    init: function () {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          return [2, envelopeClient.associate("my-origin", "my-envelope-id")];
        });
      });
    },
    someNotification: jest.fn(),
  };
});
var createEnvelopeBus = function (envelopeId) {
  return new envelope_1.EnvelopeClient(
    {
      postMessage: function (message, targetOrigin, _) {
        sentMessages.push([message, targetOrigin]);
      },
    },
    envelopeId
  );
};
afterEach(function () {
  envelopeClient.stopListening();
});
var delay = function (ms) {
  return new Promise(function (res) {
    return setTimeout(res, ms);
  });
};
describe("new instance", function () {
  beforeEach(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        envelopeClient = createEnvelopeBus();
        return [2];
      });
    });
  });
  test("does nothing", function () {
    expect(sentMessages.length).toEqual(0);
    expect(envelopeClient.targetOrigin).toBe(undefined);
  });
});
describe("event listening", function () {
  beforeEach(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        envelopeClient = createEnvelopeBus();
        return [2];
      });
    });
  });
  test("activates when requested", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            spyOn(envelopeClient, "receive");
            envelopeClient.startListening(apiImpl);
            return [4, incomingMessage("a-message")];
          case 1:
            _a.sent();
            expect(envelopeClient.receive).toHaveBeenCalledTimes(1);
            return [2];
        }
      });
    });
  });
  test("deactivates when requested", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            spyOn(envelopeClient, "receive");
            envelopeClient.startListening(apiImpl);
            envelopeClient.stopListening();
            return [4, incomingMessage("a-message")];
          case 1:
            _a.sent();
            expect(envelopeClient.receive).toHaveBeenCalledTimes(0);
            return [2];
        }
      });
    });
  });
  test("activation is idempotent", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            spyOn(envelopeClient, "receive");
            envelopeClient.startListening(apiImpl);
            envelopeClient.startListening(apiImpl);
            return [4, incomingMessage("a-message")];
          case 1:
            _a.sent();
            expect(envelopeClient.receive).toHaveBeenCalledTimes(1);
            return [2];
        }
      });
    });
  });
  test("deactivation is idempotent", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            spyOn(envelopeClient, "receive");
            envelopeClient.startListening(apiImpl);
            envelopeClient.stopListening();
            envelopeClient.stopListening();
            return [4, incomingMessage("a-message")];
          case 1:
            _a.sent();
            expect(envelopeClient.receive).toHaveBeenCalledTimes(0);
            return [2];
        }
      });
    });
  });
  test("deactivation does not fail when not started", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            spyOn(envelopeClient, "receive");
            envelopeClient.stopListening();
            return [4, incomingMessage("a-message")];
          case 1:
            _a.sent();
            expect(envelopeClient.receive).toHaveBeenCalledTimes(0);
            return [2];
        }
      });
    });
  });
});
describe("receive without envelopeId", function () {
  beforeEach(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        envelopeClient = createEnvelopeBus();
        return [2];
      });
    });
  });
  beforeEach(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            envelopeClient.startListening(apiImpl);
            return [
              4,
              incomingMessage({
                requestId: "any",
                purpose: api_1.EnvelopeBusMessagePurpose.REQUEST,
                type: "init",
                data: [],
                targetEnvelopeId: "any-envelope-id",
                directSender: api_1.EnvelopeBusMessageDirectSender.ENVELOPE_SERVER,
              }),
            ];
          case 1:
            _a.sent();
            sentMessages = [];
            return [2];
        }
      });
    });
  });
  afterEach(function () {
    envelopeClient.stopListening();
  });
  test("direct notification", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              incomingMessage({
                data: [],
                purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
                type: "someNotification",
                targetEnvelopeId: "any-envelope-id",
                directSender: api_1.EnvelopeBusMessageDirectSender.ENVELOPE_SERVER,
              }),
            ];
          case 1:
            _a.sent();
            expect(apiImpl.someNotification).not.toHaveBeenCalled();
            return [2];
        }
      });
    });
  });
  test("subscription notification", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              incomingMessage({
                data: [],
                targetEnvelopeServerId: "not-my-associated-envelope-server-id",
                purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
                type: "someNotification",
                targetEnvelopeId: "any-envelope-id",
                directSender: api_1.EnvelopeBusMessageDirectSender.ENVELOPE_SERVER,
              }),
            ];
          case 1:
            _a.sent();
            expect(apiImpl.someNotification).not.toHaveBeenCalled();
            return [2];
        }
      });
    });
  });
  test("without targetEnvelopeId", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              incomingMessage({
                data: [],
                purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
                type: "someNotification",
                directSender: api_1.EnvelopeBusMessageDirectSender.ENVELOPE_SERVER,
              }),
            ];
          case 1:
            _a.sent();
            expect(apiImpl.someNotification).toHaveBeenCalled();
            return [2];
        }
      });
    });
  });
  test("from another EnvelopeClient", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              incomingMessage({
                data: [],
                purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
                type: "someNotification",
                directSender: api_1.EnvelopeBusMessageDirectSender.ENVELOPE_CLIENT,
              }),
            ];
          case 1:
            _a.sent();
            expect(apiImpl.someNotification).not.toHaveBeenCalled();
            return [2];
        }
      });
    });
  });
});
describe("receive with envelopeId", function () {
  beforeEach(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        envelopeClient = createEnvelopeBus("my-envelope-id");
        return [2];
      });
    });
  });
  beforeEach(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            envelopeClient.startListening(apiImpl);
            return [
              4,
              incomingMessage({
                requestId: "any",
                purpose: api_1.EnvelopeBusMessagePurpose.REQUEST,
                type: "init",
                data: [],
                targetEnvelopeId: "my-envelope-id",
                directSender: api_1.EnvelopeBusMessageDirectSender.ENVELOPE_SERVER,
              }),
            ];
          case 1:
            _a.sent();
            sentMessages = [];
            return [2];
        }
      });
    });
  });
  afterEach(function () {
    envelopeClient.stopListening();
  });
  test("direct notification", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              incomingMessage({
                data: [],
                purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
                type: "someNotification",
                targetEnvelopeId: "my-envelope-id",
                directSender: api_1.EnvelopeBusMessageDirectSender.ENVELOPE_SERVER,
              }),
            ];
          case 1:
            _a.sent();
            expect(apiImpl.someNotification).toHaveBeenCalled();
            return [2];
        }
      });
    });
  });
  test("subscription notification", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              incomingMessage({
                data: [],
                targetEnvelopeServerId: "not-my-associated-envelope-server-id",
                purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
                type: "someNotification",
                targetEnvelopeId: "my-envelope-id",
                directSender: api_1.EnvelopeBusMessageDirectSender.ENVELOPE_SERVER,
              }),
            ];
          case 1:
            _a.sent();
            expect(apiImpl.someNotification).not.toHaveBeenCalled();
            return [2];
        }
      });
    });
  });
  test("notification to another envelope", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              incomingMessage({
                data: [],
                purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
                type: "someNotification",
                targetEnvelopeId: "not-my-envelope-id",
                directSender: api_1.EnvelopeBusMessageDirectSender.ENVELOPE_SERVER,
              }),
            ];
          case 1:
            _a.sent();
            expect(apiImpl.someNotification).not.toHaveBeenCalled();
            return [2];
        }
      });
    });
  });
  test("without targetEnvelopeId", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              incomingMessage({
                data: [],
                purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
                type: "someNotification",
                directSender: api_1.EnvelopeBusMessageDirectSender.ENVELOPE_SERVER,
              }),
            ];
          case 1:
            _a.sent();
            expect(apiImpl.someNotification).not.toHaveBeenCalled();
            return [2];
        }
      });
    });
  });
  test("from another EnvelopeClient", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              incomingMessage({
                data: [],
                purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
                type: "someNotification",
                directSender: api_1.EnvelopeBusMessageDirectSender.ENVELOPE_CLIENT,
              }),
            ];
          case 1:
            _a.sent();
            expect(apiImpl.someNotification).not.toHaveBeenCalled();
            return [2];
        }
      });
    });
  });
});
describe("send without being associated", function () {
  beforeEach(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        envelopeClient = createEnvelopeBus();
        return [2];
      });
    });
  });
  test("throws error", function () {
    expect(function () {
      return envelopeClient.send({
        data: "anything",
        requestId: "some-id",
        purpose: api_1.EnvelopeBusMessagePurpose.RESPONSE,
        type: "init",
      });
    }).toThrow();
  });
});
function incomingMessage(message) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          window.postMessage(message, window.location.origin);
          return [4, delay(0)];
        case 1:
          _a.sent();
          return [2];
      }
    });
  });
}
//# sourceMappingURL=EnvelopeClient.js.map

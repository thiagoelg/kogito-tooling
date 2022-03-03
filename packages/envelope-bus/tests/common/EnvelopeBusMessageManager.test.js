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
var common_1 = require("@kie-tools-core/envelope-bus/dist/common");
var api_1 = require("@kie-tools-core/envelope-bus/dist/api");
var sentMessages = [];
var manager;
var apiImpl;
beforeEach(function () {
  sentMessages = [];
  manager = new common_1.EnvelopeBusMessageManager(function (msg) {
    return sentMessages.push(msg);
  }, "my-manager");
  apiImpl = {
    setText: jest.fn(function (text) {
      console.info("Setting text: ".concat(text));
    }),
    getEnvelopeText: jest.fn(function () {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          return [2, "a text"];
        });
      });
    }),
    getFooBar: jest.fn(function (foo, bar) {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          return [2, foo + bar];
        });
      });
    }),
    fooValue: function () {
      return { defaultValue: "default-foo" };
    },
  };
  manager.currentApiImpl = apiImpl;
});
describe("cached", function () {
  test("returns the same instance", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        expect(manager.clientApi.notifications.setSomething).toStrictEqual(
          manager.clientApi.notifications.setSomething
        );
        expect(manager.shared.fooValue).toStrictEqual(manager.shared.fooValue);
        expect(manager.clientApi.shared.barValue).toStrictEqual(manager.clientApi.shared.barValue);
        expect(manager.clientApi.requests.getText).toStrictEqual(manager.clientApi.requests.getText);
        return [2];
      });
    });
  });
});
describe("requests", function () {
  test("method with no parameters", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var retPromise, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            retPromise = manager.clientApi.requests.getText();
            expect(sentMessages).toStrictEqual([
              {
                type: "getText",
                purpose: api_1.EnvelopeBusMessagePurpose.REQUEST,
                requestId: "my-manager_0",
                data: [],
              },
            ]);
            return [
              4,
              manager.server.receive(
                {
                  type: "getText",
                  purpose: api_1.EnvelopeBusMessagePurpose.RESPONSE,
                  requestId: "my-manager_0",
                  data: "foo",
                },
                apiImpl
              ),
            ];
          case 1:
            _b.sent();
            _a = expect;
            return [4, retPromise];
          case 2:
            _a.apply(void 0, [_b.sent()]).toBe("foo");
            return [2];
        }
      });
    });
  });
  test("method with parameters", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var retPromise, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            retPromise = manager.clientApi.requests.getSomething("a", 1);
            expect(sentMessages).toStrictEqual([
              {
                type: "getSomething",
                purpose: api_1.EnvelopeBusMessagePurpose.REQUEST,
                requestId: "my-manager_0",
                data: ["a", 1],
              },
            ]);
            return [
              4,
              manager.server.receive(
                {
                  type: "getSomething",
                  purpose: api_1.EnvelopeBusMessagePurpose.RESPONSE,
                  requestId: "my-manager_0",
                  data: 8,
                },
                apiImpl
              ),
            ];
          case 1:
            _b.sent();
            _a = expect;
            return [4, retPromise];
          case 2:
            _a.apply(void 0, [_b.sent()]).toBe(8);
            return [2];
        }
      });
    });
  });
  test("two in a row", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        manager.clientApi.requests.getText();
        manager.clientApi.requests.getSomething("b", 2);
        expect(sentMessages).toStrictEqual([
          {
            type: "getText",
            purpose: api_1.EnvelopeBusMessagePurpose.REQUEST,
            requestId: "my-manager_0",
            data: [],
          },
          {
            type: "getSomething",
            purpose: api_1.EnvelopeBusMessagePurpose.REQUEST,
            requestId: "my-manager_1",
            data: ["b", 2],
          },
        ]);
        return [2];
      });
    });
  });
});
describe("notifications", function () {
  test("simple notification", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        manager.clientApi.notifications.setSomething.send("something");
        expect(sentMessages).toStrictEqual([
          {
            type: "setSomething",
            purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
            data: ["something"],
          },
        ]);
        return [2];
      });
    });
  });
  test("simple subscription", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var callback, subscription;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            callback = jest.fn(function (a, b) {
              expect(a).toStrictEqual("foo");
              expect(b).toStrictEqual("bar");
            });
            subscription = manager.clientApi.notifications.setSomethings.subscribe(callback);
            expect(subscription).toStrictEqual(callback);
            expect(sentMessages).toStrictEqual([
              {
                type: "setSomethings",
                purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION_SUBSCRIPTION,
                data: [],
              },
            ]);
            return [
              4,
              manager.server.receive(
                {
                  type: "setSomethings",
                  purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
                  data: ["foo", "bar"],
                },
                apiImpl
              ),
            ];
          case 1:
            _a.sent();
            expect(callback).toHaveBeenCalledWith("foo", "bar");
            return [2];
        }
      });
    });
  });
  test("simple unsubscription", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var subscription;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            subscription = manager.clientApi.notifications.setSomething.subscribe(jest.fn());
            return [
              4,
              manager.server.receive(
                {
                  type: "setSomething",
                  purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
                  data: ["something"],
                },
                apiImpl
              ),
            ];
          case 1:
            _a.sent();
            expect(subscription).toHaveBeenCalledWith("something");
            expect(subscription).toHaveBeenCalledTimes(1);
            manager.clientApi.notifications.setSomething.unsubscribe(subscription);
            expect(sentMessages).toStrictEqual([
              {
                type: "setSomething",
                purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION_SUBSCRIPTION,
                data: [],
              },
              {
                type: "setSomething",
                purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION_UNSUBSCRIPTION,
                data: [],
              },
            ]);
            return [
              4,
              manager.server.receive(
                {
                  type: "setSomething",
                  purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
                  data: ["something2"],
                },
                apiImpl
              ),
            ];
          case 2:
            _a.sent();
            expect(subscription).toHaveBeenCalledTimes(1);
            return [2];
        }
      });
    });
  });
});
describe("shared", function () {
  test("set consumed", function () {
    manager.clientApi.shared.barValue.set("bar1");
    manager.clientApi.shared.barValue.set("bar2");
    expect(sentMessages).toStrictEqual([
      {
        type: "barValue",
        purpose: api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_UPDATE,
        data: "bar1",
      },
      {
        type: "barValue",
        purpose: api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_UPDATE,
        data: "bar2",
      },
    ]);
  });
  test("set owned", function () {
    manager.shared.fooValue.set("foo1");
    manager.shared.fooValue.set("foo2");
    expect(sentMessages).toStrictEqual([
      {
        type: "fooValue",
        purpose: api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_UPDATE,
        data: "foo1",
      },
      {
        type: "fooValue",
        purpose: api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_UPDATE,
        data: "foo2",
      },
    ]);
  });
  test("set consumed with subscriptions", function () {
    var subscription1 = manager.clientApi.shared.barValue.subscribe(jest.fn());
    manager.clientApi.shared.barValue.set("bar1");
    expect(subscription1).toHaveBeenCalledWith("bar1");
    manager.clientApi.shared.barValue.set("bar2");
    expect(subscription1).toHaveBeenCalledWith("bar2");
    var subscription2 = manager.clientApi.shared.barValue.subscribe(jest.fn());
    expect(subscription2).toHaveBeenCalledWith("bar2");
    expect(sentMessages).toStrictEqual([
      {
        type: "barValue",
        purpose: api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_GET_DEFAULT,
        data: [],
      },
      {
        type: "barValue",
        purpose: api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_UPDATE,
        data: "bar1",
      },
      {
        type: "barValue",
        purpose: api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_UPDATE,
        data: "bar2",
      },
    ]);
  });
  test("set owned with subscriptions", function () {
    var subscription1 = manager.shared.fooValue.subscribe(jest.fn());
    manager.shared.fooValue.set("foo1");
    expect(subscription1).toHaveBeenCalledWith("foo1");
    manager.shared.fooValue.set("foo2");
    expect(subscription1).toHaveBeenCalledWith("foo2");
    var subscription2 = manager.shared.fooValue.subscribe(jest.fn());
    expect(subscription2).toHaveBeenCalledWith("foo2");
    expect(sentMessages).toStrictEqual([
      {
        type: "fooValue",
        purpose: api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_UPDATE,
        data: "foo1",
      },
      {
        type: "fooValue",
        purpose: api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_UPDATE,
        data: "foo2",
      },
    ]);
  });
  test("unsubscribe consumed", function () {
    var subscription = manager.clientApi.shared.barValue.subscribe(jest.fn());
    manager.clientApi.shared.barValue.unsubscribe(subscription);
    manager.clientApi.shared.barValue.set("new-bar");
  });
  test("unsubscribe owned", function () {
    var subscription = manager.shared.fooValue.subscribe(jest.fn());
    manager.shared.fooValue.unsubscribe(subscription);
    manager.shared.fooValue.set("new-foo");
    expect(subscription).toHaveBeenCalledTimes(1);
  });
});
describe("receive", function () {
  test("simple request", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            manager.server.receive(
              {
                type: "getEnvelopeText",
                purpose: api_1.EnvelopeBusMessagePurpose.REQUEST,
                requestId: "my-req-1",
                data: [],
              },
              apiImpl
            );
            return [4, delay(0)];
          case 1:
            _a.sent();
            expect(sentMessages).toStrictEqual([
              {
                error: undefined,
                type: "getEnvelopeText",
                purpose: api_1.EnvelopeBusMessagePurpose.RESPONSE,
                requestId: "my-req-1",
                data: "a text",
              },
            ]);
            return [2];
        }
      });
    });
  });
  test("request with parameters", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            manager.server.receive(
              {
                type: "getFooBar",
                purpose: api_1.EnvelopeBusMessagePurpose.REQUEST,
                requestId: "my-req-1",
                data: ["foo", "bar"],
              },
              apiImpl
            );
            expect(apiImpl.getFooBar).toHaveBeenCalled();
            return [4, delay(0)];
          case 1:
            _a.sent();
            expect(sentMessages).toStrictEqual([
              {
                error: undefined,
                type: "getFooBar",
                purpose: api_1.EnvelopeBusMessagePurpose.RESPONSE,
                requestId: "my-req-1",
                data: "foobar",
              },
            ]);
            return [2];
        }
      });
    });
  });
  test("response with no requestId", function () {
    expect(function () {
      manager.server.receive(
        {
          type: "getEnvelopeText",
          purpose: api_1.EnvelopeBusMessagePurpose.RESPONSE,
          data: [],
        },
        apiImpl
      );
    }).toThrowError();
  });
  test("response with no corresponding request", function () {
    expect(function () {
      manager.server.receive(
        {
          type: "getEnvelopeText",
          purpose: api_1.EnvelopeBusMessagePurpose.RESPONSE,
          requestId: "my-req-1",
          data: [],
        },
        apiImpl
      );
    }).toThrowError();
  });
  test("simple notification", function () {
    manager.server.receive(
      {
        type: "setText",
        purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
        data: ["the text"],
      },
      apiImpl
    );
    expect(apiImpl.setText).toHaveBeenCalledWith("the text");
  });
  test("normal notification subscription", function () {
    manager.server.receive(
      {
        type: "setText",
        purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION_SUBSCRIPTION,
        data: [],
      },
      apiImpl
    );
    manager.server.receive(
      {
        type: "setText",
        purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
        data: ["the text"],
      },
      apiImpl
    );
    expect(apiImpl.setText).toHaveBeenCalledWith("the text");
    expect(sentMessages).toStrictEqual([
      {
        type: "setText",
        purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
        data: ["the text"],
      },
    ]);
  });
  test("notification subscription with no api handler", function () {
    manager.server.receive(
      {
        type: "setText",
        purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION_SUBSCRIPTION,
        data: [],
      },
      apiImpl
    );
    manager.server.receive(
      {
        type: "setText",
        purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
        data: ["the text"],
      },
      {}
    );
    expect(apiImpl.setText).not.toHaveBeenCalledWith();
    expect(sentMessages).toStrictEqual([
      {
        type: "setText",
        purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
        data: ["the text"],
      },
    ]);
  });
  test("notification unsubscription", function () {
    manager.server.receive(
      {
        type: "setText",
        purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION_SUBSCRIPTION,
        data: [],
      },
      apiImpl
    );
    manager.server.receive(
      {
        type: "setText",
        purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION_UNSUBSCRIPTION,
        data: [],
      },
      apiImpl
    );
    manager.server.receive(
      {
        type: "setText",
        purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
        data: ["the text"],
      },
      {}
    );
    expect(apiImpl.setText).not.toHaveBeenCalled();
    expect(sentMessages).toStrictEqual([]);
  });
  test("consumed shared value update", function () {
    var subscription1 = manager.clientApi.shared.barValue.subscribe(jest.fn());
    manager.server.receive(
      {
        type: "barValue",
        purpose: api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_UPDATE,
        data: "default-bar",
      },
      apiImpl
    );
    expect(subscription1).toHaveBeenCalledWith("default-bar");
    expect(subscription1).toHaveBeenCalledTimes(1);
    var subscription2 = manager.clientApi.shared.barValue.subscribe(jest.fn());
    expect(subscription2).toHaveBeenCalledWith("default-bar");
    expect(subscription2).toHaveBeenCalledTimes(1);
  });
  test("owned shared value update", function () {
    var subscription1 = manager.shared.fooValue.subscribe(jest.fn());
    manager.server.receive(
      {
        type: "fooValue",
        purpose: api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_UPDATE,
        data: "foo-from-someone",
      },
      apiImpl
    );
    expect(subscription1).toHaveBeenCalledWith("foo-from-someone");
    expect(subscription1).toHaveBeenCalledTimes(2);
    var subscription2 = manager.shared.fooValue.subscribe(jest.fn());
    expect(subscription2).toHaveBeenCalledWith("foo-from-someone");
    expect(subscription2).toHaveBeenCalledTimes(1);
  });
  test("shared value subscription", function () {
    manager.server.receive(
      {
        type: "fooValue",
        purpose: api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_GET_DEFAULT,
        data: [],
      },
      apiImpl
    );
    expect(sentMessages).toStrictEqual([
      {
        type: "fooValue",
        purpose: api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_UPDATE,
        data: "default-foo",
      },
    ]);
    manager.shared.fooValue.set("new-foo");
    manager.server.receive(
      {
        type: "fooValue",
        purpose: api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_GET_DEFAULT,
        data: [],
      },
      apiImpl
    );
    expect(sentMessages).toStrictEqual([
      {
        type: "fooValue",
        purpose: api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_UPDATE,
        data: "default-foo",
      },
      {
        type: "fooValue",
        purpose: api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_UPDATE,
        data: "new-foo",
      },
      {
        type: "fooValue",
        purpose: api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_UPDATE,
        data: "new-foo",
      },
    ]);
  });
});
var delay = function (ms) {
  return new Promise(function (res) {
    return setTimeout(res, ms);
  });
};
//# sourceMappingURL=EnvelopeBusMessageManager.test.js.map

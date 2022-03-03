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
var api_1 = require("@kie-tools-core/backend/dist/api");
var dummyServices_1 = require("../dummyServices");
var localHttpServer = new dummyServices_1.DummyLocalHttpServer();
describe("satisfy requirements of the backend manager service", function () {
  test("should always return TRUE since there are no requirements to satisfy", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var manager;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            manager = new api_1.BackendManagerService({});
            return [4, expect(manager.satisfyRequirements()).resolves.toBeTruthy()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
});
describe("stop the backend manager service", function () {
  test("should stop all registered services", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var serviceA, serviceB, serviceC, manager, localServerStopFn;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            serviceA = (0, dummyServices_1.createMockedService)("Service A");
            serviceB = (0, dummyServices_1.createMockedService)("Service B");
            serviceC = (0, dummyServices_1.createMockedService)("Service C");
            manager = new api_1.BackendManagerService({
              localHttpServer: localHttpServer,
              bootstrapServices: [serviceA, serviceB],
              lazyServices: [serviceC],
            });
            localServerStopFn = jest.spyOn(localHttpServer, "stop");
            return [4, manager.start()];
          case 1:
            _a.sent();
            return [4, manager.getService("Service C")];
          case 2:
            _a.sent();
            manager.stop();
            expect(serviceA.stop).toBeCalled();
            expect(serviceB.stop).toBeCalled();
            expect(serviceC.stop).toBeCalled();
            expect(localServerStopFn).toBeCalled();
            return [2];
        }
      });
    });
  });
});
describe("start the backend manager service", function () {
  test("should not register when there is no service to be registered", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var manager, registerServiceFn;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            manager = new api_1.BackendManagerService({});
            registerServiceFn = jest.spyOn(manager, "registerService");
            return [4, manager.start()];
          case 1:
            _a.sent();
            expect(registerServiceFn).not.toBeCalled();
            return [2];
        }
      });
    });
  });
  test("should only register the local http server", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var manager, registerServiceFn;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            manager = new api_1.BackendManagerService({ localHttpServer: localHttpServer });
            registerServiceFn = jest.spyOn(manager, "registerService");
            return [4, manager.start()];
          case 1:
            _a.sent();
            expect(registerServiceFn).toBeCalledTimes(1);
            expect(registerServiceFn).toBeCalledWith(localHttpServer);
            return [2];
        }
      });
    });
  });
  test("should only register the bootstrap services", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var serviceA, serviceB, manager, registerServiceFn;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            serviceA = (0, dummyServices_1.createMockedService)("Service A");
            serviceB = (0, dummyServices_1.createMockedService)("Service B");
            manager = new api_1.BackendManagerService({ bootstrapServices: [serviceA, serviceB] });
            registerServiceFn = jest.spyOn(manager, "registerService");
            return [4, manager.start()];
          case 1:
            _a.sent();
            expect(registerServiceFn).toBeCalledTimes(2);
            expect(registerServiceFn).toBeCalledWith(serviceA);
            expect(registerServiceFn).toBeCalledWith(serviceB);
            return [2];
        }
      });
    });
  });
  test("should register both the local http server and the bootstrap services", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var serviceA, serviceB, manager, registerServiceFn;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            serviceA = (0, dummyServices_1.createMockedService)("Service A");
            serviceB = (0, dummyServices_1.createMockedService)("Service B");
            manager = new api_1.BackendManagerService({
              localHttpServer: localHttpServer,
              bootstrapServices: [serviceA, serviceB],
            });
            registerServiceFn = jest.spyOn(manager, "registerService");
            return [4, manager.start()];
          case 1:
            _a.sent();
            expect(registerServiceFn).toBeCalledTimes(3);
            expect(registerServiceFn).toBeCalledWith(localHttpServer);
            expect(registerServiceFn).toBeCalledWith(serviceA);
            expect(registerServiceFn).toBeCalledWith(serviceB);
            return [2];
        }
      });
    });
  });
  test("should not register the lazy services", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var serviceA, serviceB, manager, registerServiceFn;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            serviceA = (0, dummyServices_1.createMockedService)("Service A");
            serviceB = (0, dummyServices_1.createMockedService)("Service B");
            manager = new api_1.BackendManagerService({ lazyServices: [serviceA, serviceB] });
            registerServiceFn = jest.spyOn(manager, "registerService");
            return [4, manager.start()];
          case 1:
            _a.sent();
            expect(registerServiceFn).not.toBeCalled();
            return [2];
        }
      });
    });
  });
});
describe("retrieve a service", function () {
  test("should return undefined when the required service is not found", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var manager;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            manager = new api_1.BackendManagerService({});
            return [4, expect(manager.getService("Unknown Service")).resolves.toBeUndefined()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return undefined when the required service is not found while having other lazy services", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var manager;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            manager = new api_1.BackendManagerService({
              lazyServices: [(0, dummyServices_1.createMockedService)("Service A")],
            });
            return [4, expect(manager.getService("Unknown Service")).resolves.toBeUndefined()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return the required bootstrap service", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var serviceId, serviceA, manager, registerServiceFn;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            serviceId = "Service A";
            serviceA = (0, dummyServices_1.createMockedService)(serviceId);
            manager = new api_1.BackendManagerService({ bootstrapServices: [serviceA] });
            registerServiceFn = jest.spyOn(manager, "registerService");
            return [4, manager.start()];
          case 1:
            _a.sent();
            return [4, expect(manager.getService(serviceId)).resolves.toBe(serviceA)];
          case 2:
            _a.sent();
            expect(registerServiceFn).toBeCalledTimes(1);
            return [2];
        }
      });
    });
  });
  test("should register and return the required lazy service", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var serviceId, serviceA, manager, registerServiceFn;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            serviceId = "Service A";
            serviceA = (0, dummyServices_1.createMockedService)(serviceId);
            manager = new api_1.BackendManagerService({ lazyServices: [serviceA] });
            registerServiceFn = jest.spyOn(manager, "registerService");
            return [4, expect(manager.getService(serviceId)).resolves.toBe(serviceA)];
          case 1:
            _a.sent();
            expect(registerServiceFn).toBeCalled();
            return [2];
        }
      });
    });
  });
});
describe("register a new service", function () {
  var httpService = new dummyServices_1.DummyHttpService();
  var localHttpService = new dummyServices_1.DummyLocalHttpService();
  var httpBridge = {
    request: jest.fn(),
  };
  test("should return TRUE when the service is already registered", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var serviceA, manager;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            serviceA = (0, dummyServices_1.createMockedService)("Service A");
            manager = new api_1.BackendManagerService({ bootstrapServices: [serviceA] });
            return [4, manager.start()];
          case 1:
            _a.sent();
            return [4, expect(manager.registerService(serviceA)).resolves.toBeTruthy()];
          case 2:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return FALSE when the requirements are not satisfied", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var serviceA, manager;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            serviceA = (0, dummyServices_1.createMockedService)("Service A", false);
            manager = new api_1.BackendManagerService({});
            return [4, expect(manager.registerService(serviceA)).resolves.toBeFalsy()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should start the service when the requirements are satisfied", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var serviceA, manager;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            serviceA = (0, dummyServices_1.createMockedService)("Service A");
            manager = new api_1.BackendManagerService({});
            return [4, expect(manager.registerService(serviceA)).resolves.toBeTruthy()];
          case 1:
            _a.sent();
            expect(serviceA.start).toBeCalled();
            return [2];
        }
      });
    });
  });
  test("should return FALSE when an error occurs while starting the service up", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var serviceA, manager;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            serviceA = (0, dummyServices_1.createMockedService)("Service A");
            manager = new api_1.BackendManagerService({});
            serviceA.start.mockRejectedValueOnce("Some error");
            return [4, expect(manager.registerService(serviceA)).resolves.toBeFalsy()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return FALSE when there is no HTTP bridge for an HTTP service", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var manager;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            manager = new api_1.BackendManagerService({});
            return [4, expect(manager.registerService(httpService)).resolves.toBeFalsy()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return TRUE when there is an HTTP bridge for an HTTP service", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var manager, registerHttpBridgeFn;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            manager = new api_1.BackendManagerService({ bridge: httpBridge });
            registerHttpBridgeFn = jest.spyOn(httpService, "registerHttpBridge");
            return [4, expect(manager.registerService(httpService)).resolves.toBeTruthy()];
          case 1:
            _a.sent();
            expect(registerHttpBridgeFn).toBeCalled();
            return [2];
        }
      });
    });
  });
  test("should return FALSE when there is no HTTP bridge for a local HTTP service", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var manager;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            manager = new api_1.BackendManagerService({});
            return [4, expect(manager.registerService(localHttpService)).resolves.toBeFalsy()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return FALSE when there is no local HTTP server for a local HTTP service", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var manager;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            manager = new api_1.BackendManagerService({ bridge: httpBridge });
            return [4, expect(manager.registerService(localHttpService)).resolves.toBeFalsy()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return TRUE when there is a local HTTP server for a local HTTP service", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var manager, registerPortFn;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            manager = new api_1.BackendManagerService({ bridge: httpBridge, localHttpServer: localHttpServer });
            registerPortFn = jest.spyOn(localHttpService, "registerPort");
            return [4, manager.start()];
          case 1:
            _a.sent();
            return [4, expect(manager.registerService(localHttpService)).resolves.toBeTruthy()];
          case 2:
            _a.sent();
            expect(registerPortFn).toBeCalled();
            return [2];
        }
      });
    });
  });
});
//# sourceMappingURL=BackendManagerService.test.js.map

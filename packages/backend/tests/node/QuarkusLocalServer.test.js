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
var cp = require("child_process");
var events = require("events");
var fs = require("fs");
var portfinder = require("portfinder");
var sinon = require("sinon");
var node_1 = require("@kie-tools-core/backend/dist/node");
var utils = require("@kie-tools-core/backend/dist/node/utils");
jest.mock("fs");
var testPort = 8099;
var testJarFile = "jar/file/path.jar";
beforeAll(function () {
  jest.resetAllMocks();
});
describe("satisfy requirements of the Quarkus local server", function () {
  var service = new node_1.QuarkusLocalServer(testJarFile);
  var mockGetPortPromise = jest.spyOn(portfinder, "getPortPromise");
  var mockIsJavaAvailableFn = jest.spyOn(utils, "isJavaAvailable");
  var mockFs = fs;
  test("should check if path provided in the constructor exists", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, service.satisfyRequirements()];
          case 1:
            _a.sent();
            expect(mockFs.existsSync).toBeCalledWith(testJarFile);
            return [2];
        }
      });
    });
  });
  test("should return FALSE when the runner jar file is missing", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockFs.existsSync.mockReturnValueOnce(false);
            return [4, expect(service.satisfyRequirements()).resolves.toBeFalsy()];
          case 1:
            _a.sent();
            expect(mockIsJavaAvailableFn).not.toBeCalled();
            return [2];
        }
      });
    });
  });
  test("should return FALSE when java is missing", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockFs.existsSync.mockReturnValueOnce(true);
            mockIsJavaAvailableFn.mockResolvedValueOnce(false);
            return [4, expect(service.satisfyRequirements()).resolves.toBeFalsy()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return FALSE when an error occurs while trying to find a port", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockFs.existsSync.mockReturnValue(true);
            mockIsJavaAvailableFn.mockResolvedValueOnce(true);
            mockGetPortPromise.mockRejectedValueOnce(new Error());
            return [4, expect(service.satisfyRequirements()).resolves.toBeFalsy()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return TRUE when all requirements are satisfied", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockFs.existsSync.mockReturnValueOnce(true);
            mockIsJavaAvailableFn.mockResolvedValueOnce(true);
            mockGetPortPromise.mockResolvedValueOnce(testPort);
            return [4, expect(service.satisfyRequirements()).resolves.toBeTruthy()];
          case 1:
            _a.sent();
            expect(service.getPort()).toBe(testPort);
            return [2];
        }
      });
    });
  });
});
describe("start the Quarkus local server", function () {
  var sandbox = sinon.createSandbox();
  var quarkusServer;
  beforeEach(function () {
    quarkusServer = new node_1.QuarkusLocalServer(testJarFile);
  });
  afterEach(function () {
    sandbox.restore();
  });
  test("should reject the promise when cannot identify that Quarkus is up (timeout reached)", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var process, e_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            process = new events.EventEmitter();
            process.stdout = new events.EventEmitter();
            sandbox.stub(cp, "spawn").returns(process);
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            return [4, quarkusServer.start()];
          case 2:
            _a.sent();
            fail("should not have reached here");
            return [3, 4];
          case 3:
            e_1 = _a.sent();
            expect(e_1.message).toBe("Could not start the Quarkus local server.");
            return [3, 4];
          case 4:
            return [2];
        }
      });
    });
  });
  test("should reject the promise when there is no stdout", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var e_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            sandbox.stub(cp, "spawn").returns(new events.EventEmitter());
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            return [4, quarkusServer.start()];
          case 2:
            _a.sent();
            fail("should not have reached here");
            return [3, 4];
          case 3:
            e_2 = _a.sent();
            expect(e_2.message).toBe("Could not start the Quarkus local server.");
            return [3, 4];
          case 4:
            return [2];
        }
      });
    });
  });
  test("should reject the promise when the expected data is not emitted on the stdout (timeout reached)", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var process, e_3;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            process = new events.EventEmitter();
            process.stdout = new events.EventEmitter();
            sandbox.stub(cp, "spawn").returns(process);
            setTimeout(function () {
              process.stdout.emit("data", "Some other data");
            }, 1000);
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, , 4]);
            return [4, quarkusServer.start()];
          case 2:
            _a.sent();
            fail("should not have reached here");
            return [3, 4];
          case 3:
            e_3 = _a.sent();
            expect(e_3.message).toBe("Could not start the Quarkus local server.");
            return [3, 4];
          case 4:
            return [2];
        }
      });
    });
  });
  test("should resolve the promise when Quarkus is up", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var process;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            process = new events.EventEmitter();
            process.stdout = new events.EventEmitter();
            sandbox.stub(cp, "spawn").returns(process);
            setTimeout(function () {
              process.stdout.emit("data", "Listening on");
            }, 500);
            return [4, expect(quarkusServer.start()).resolves.toBeUndefined()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
});
describe("stop the Quarkus local server", function () {
  var sandbox = sinon.createSandbox();
  var mockKillProcessFn = jest.spyOn(utils, "killProcess");
  var quarkusServer;
  beforeEach(function () {
    quarkusServer = new node_1.QuarkusLocalServer(testJarFile);
  });
  afterEach(function () {
    sandbox.restore();
  });
  test("should do nothing since there is no active process", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        quarkusServer.stop();
        expect(mockKillProcessFn).not.toBeCalled();
        return [2];
      });
    });
  });
  test("should kill the process", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, startQuarkusServerTest(quarkusServer)];
          case 1:
            _a.sent();
            quarkusServer.stop();
            expect(mockKillProcessFn).toBeCalled();
            return [2];
        }
      });
    });
  });
  function startQuarkusServerTest(server) {
    return __awaiter(this, void 0, void 0, function () {
      var process;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            process = { kill: jest.fn(), pid: 9999 };
            process.stdout = new events.EventEmitter();
            sandbox.stub(cp, "spawn").returns(process);
            setTimeout(function () {
              process.stdout.emit("data", "Listening on");
            }, 500);
            return [4, server.start()];
          case 1:
            _a.sent();
            sandbox.restore();
            return [2];
        }
      });
    });
  }
});
//# sourceMappingURL=QuarkusLocalServer.test.js.map

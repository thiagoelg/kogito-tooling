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
var __values =
  (this && this.__values) ||
  function (o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        },
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
Object.defineProperty(exports, "__esModule", { value: true });
var cp = require("child_process");
var utils = require("@kie-tools-core/backend/dist/node");
var sinon = require("sinon");
var os = require("os");
jest.mock("child_process");
describe("utility to check whether maven is available or not", function () {
  test("should return FALSE when an error occurs", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockCpExecCallbackOnce({ name: "error", message: "error" }, "", "");
            return [4, expect(utils.isMavenAvailable({ major: 3, minor: 6, patch: 3 })).resolves.toBeFalsy()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return FALSE when stdout is empty", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockCpExecCallbackOnce(null, "", "");
            return [4, expect(utils.isMavenAvailable({ major: 3, minor: 6, patch: 3 })).resolves.toBeFalsy()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return FALSE when regex does not match", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockCpExecCallbackOnce(null, "some text that does not match the regex", "");
            return [4, expect(utils.isMavenAvailable({ major: 3, minor: 6, patch: 3 })).resolves.toBeFalsy()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return FALSE when minimun required version > actual version", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockCpExecCallbackOnce(null, "Apache Maven 3.6.3", "");
            return [4, expect(utils.isMavenAvailable({ major: 4, minor: 0, patch: 0 })).resolves.toBeFalsy()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return TRUE when a match is found and version is not specified", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockCpExecCallbackOnce(null, "Apache Maven 3.6.3", "");
            return [4, expect(utils.isMavenAvailable()).resolves.toBeTruthy()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return TRUE when only the major value is found/given", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockCpExecCallbackOnce(null, "Apache Maven 3", "");
            return [4, expect(utils.isMavenAvailable({ major: 3, minor: 0, patch: 0 })).resolves.toBeTruthy()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return TRUE when minimun required version == actual version", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockCpExecCallbackOnce(null, "Apache Maven 3.6.3", "");
            return [4, expect(utils.isMavenAvailable({ major: 3, minor: 6, patch: 3 })).resolves.toBeTruthy()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return TRUE when minimun required version < actual version", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockCpExecCallbackOnce(null, "Apache Maven 3.6.3", "");
            return [4, expect(utils.isMavenAvailable({ major: 3, minor: 5, patch: 2 })).resolves.toBeTruthy()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return TRUE when minimun required version < actual version (some combinations)", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var versions, versions_1, versions_1_1, v, e_1_1;
      var e_1, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            versions = [
              { major: 2, minor: 15, patch: 0 },
              { major: 2, minor: 0, patch: 15 },
              { major: 2, minor: 15, patch: 15 },
              { major: 2, minor: 0, patch: 0 },
              { major: 3, minor: 6, patch: 0 },
              { major: 3, minor: 0, patch: 10 },
            ];
            _b.label = 1;
          case 1:
            _b.trys.push([1, 6, 7, 8]);
            (versions_1 = __values(versions)), (versions_1_1 = versions_1.next());
            _b.label = 2;
          case 2:
            if (!!versions_1_1.done) return [3, 5];
            v = versions_1_1.value;
            mockCpExecCallbackOnce(null, "Apache Maven 3.6.3", "");
            return [4, expect(utils.isMavenAvailable(v)).resolves.toBeTruthy()];
          case 3:
            _b.sent();
            _b.label = 4;
          case 4:
            versions_1_1 = versions_1.next();
            return [3, 2];
          case 5:
            return [3, 8];
          case 6:
            e_1_1 = _b.sent();
            e_1 = { error: e_1_1 };
            return [3, 8];
          case 7:
            try {
              if (versions_1_1 && !versions_1_1.done && (_a = versions_1.return)) _a.call(versions_1);
            } finally {
              if (e_1) throw e_1.error;
            }
            return [7];
          case 8:
            return [2];
        }
      });
    });
  });
});
describe("utility to check whether java|openjdk is available or not", function () {
  test("should return FALSE when an error occurs", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockCpExecCallbackOnce({ name: "error", message: "error" }, "", "");
            return [4, expect(utils.isJavaAvailable({ major: 11, minor: 0, patch: 0 })).resolves.toBeFalsy()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return FALSE when stderr is empty", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockCpExecCallbackOnce(null, "", "");
            return [4, expect(utils.isJavaAvailable({ major: 11, minor: 0, patch: 0 })).resolves.toBeFalsy()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return FALSE when regex does not match", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockCpExecCallbackOnce(null, "", "some text that does not match the regex");
            return [4, expect(utils.isJavaAvailable({ major: 11, minor: 0, patch: 0 })).resolves.toBeFalsy()];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return FALSE when minimun required version > actual version (up to java 8 format)", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockCpExecCallbackOnce(null, "", 'java version "1.7.0_55"');
            return [4, expect(utils.isJavaAvailable({ major: 1, minor: 8, patch: 0 })).resolves.toBeFalsy()];
          case 1:
            _a.sent();
            mockCpExecCallbackOnce(null, "", 'openjdk version "1.7.0_55"');
            return [4, expect(utils.isJavaAvailable({ major: 1, minor: 8, patch: 0 })).resolves.toBeFalsy()];
          case 2:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return FALSE when minimun required version > actual version (java 9+ format)", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockCpExecCallbackOnce(null, "", 'java version "11.0.0" 2020-04-14 LTS');
            return [4, expect(utils.isJavaAvailable({ major: 12, minor: 0, patch: 0 })).resolves.toBeFalsy()];
          case 1:
            _a.sent();
            mockCpExecCallbackOnce(null, "", 'openjdk version "11.0.0" 2020-04-14 LTS');
            return [4, expect(utils.isJavaAvailable({ major: 12, minor: 0, patch: 0 })).resolves.toBeFalsy()];
          case 2:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return TRUE when a match is found and version is not specified", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockCpExecCallbackOnce(null, "", 'java version "11.0.0" 2020-04-14 LTS');
            return [4, expect(utils.isJavaAvailable()).resolves.toBeTruthy()];
          case 1:
            _a.sent();
            mockCpExecCallbackOnce(null, "", 'openjdk version "11.0.0" 2020-04-14 LTS');
            return [4, expect(utils.isJavaAvailable()).resolves.toBeTruthy()];
          case 2:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return TRUE when only the major value is found/given", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockCpExecCallbackOnce(null, "", 'java version "11" 2020-04-14 LTS');
            return [4, expect(utils.isJavaAvailable({ major: 11, minor: 0, patch: 0 })).resolves.toBeTruthy()];
          case 1:
            _a.sent();
            mockCpExecCallbackOnce(null, "", 'openjdk version "11" 2020-04-14 LTS');
            return [4, expect(utils.isJavaAvailable({ major: 11, minor: 0, patch: 0 })).resolves.toBeTruthy()];
          case 2:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return TRUE when minimun required version == actual version", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockCpExecCallbackOnce(null, "", 'java version "11.0.0" 2020-04-14 LTS');
            return [4, expect(utils.isJavaAvailable({ major: 11, minor: 0, patch: 0 })).resolves.toBeTruthy()];
          case 1:
            _a.sent();
            mockCpExecCallbackOnce(null, "", 'openjdk version "11.0.0" 2020-04-14 LTS');
            return [4, expect(utils.isJavaAvailable({ major: 11, minor: 0, patch: 0 })).resolves.toBeTruthy()];
          case 2:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return TRUE when minimun required version < actual version", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            mockCpExecCallbackOnce(null, "", 'java version "12.0.0" 2020-04-14 LTS');
            return [4, expect(utils.isJavaAvailable({ major: 11, minor: 0, patch: 0 })).resolves.toBeTruthy()];
          case 1:
            _a.sent();
            mockCpExecCallbackOnce(null, "", 'openjdk version "12.0.0" 2020-04-14 LTS');
            return [4, expect(utils.isJavaAvailable({ major: 11, minor: 0, patch: 0 })).resolves.toBeTruthy()];
          case 2:
            _a.sent();
            return [2];
        }
      });
    });
  });
  test("should return TRUE when minimun required version < actual version (some combinations)", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var versions, versions_2, versions_2_1, v, e_2_1;
      var e_2, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            versions = [
              { major: 9, minor: 15, patch: 0 },
              { major: 9, minor: 0, patch: 15 },
              { major: 9, minor: 15, patch: 15 },
              { major: 9, minor: 0, patch: 0 },
              { major: 10, minor: 10, patch: 0 },
              { major: 10, minor: 0, patch: 15 },
            ];
            _b.label = 1;
          case 1:
            _b.trys.push([1, 6, 7, 8]);
            (versions_2 = __values(versions)), (versions_2_1 = versions_2.next());
            _b.label = 2;
          case 2:
            if (!!versions_2_1.done) return [3, 5];
            v = versions_2_1.value;
            mockCpExecCallbackOnce(null, "", 'java version "10.10.10" 2020-04-14 LTS');
            return [4, expect(utils.isJavaAvailable(v)).resolves.toBeTruthy()];
          case 3:
            _b.sent();
            _b.label = 4;
          case 4:
            versions_2_1 = versions_2.next();
            return [3, 2];
          case 5:
            return [3, 8];
          case 6:
            e_2_1 = _b.sent();
            e_2 = { error: e_2_1 };
            return [3, 8];
          case 7:
            try {
              if (versions_2_1 && !versions_2_1.done && (_a = versions_2.return)) _a.call(versions_2);
            } finally {
              if (e_2) throw e_2.error;
            }
            return [7];
          case 8:
            return [2];
        }
      });
    });
  });
});
function mockCpExecCallbackOnce(error, stdout, stderr) {
  cp.exec.mockImplementationOnce(function (command, callback) {
    if (callback) {
      callback(error, stdout, stderr);
    }
    return {};
  });
}
describe("Utility to kill a process", function () {
  var process = { kill: jest.fn(), pid: 9999 };
  var sandbox = sinon.createSandbox();
  afterEach(function () {
    sandbox.restore();
  });
  test("should kill the process through taskkill on Windows OS", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var cpStub;
      return __generator(this, function (_a) {
        cpStub = sandbox.stub(cp, "spawn");
        sandbox.stub(os, "platform").returns("win32");
        utils.killProcess(process);
        expect(cpStub.called).toBeTruthy();
        return [2];
      });
    });
  });
  test("should kill the process through the active process on Linux OS", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        sandbox.stub(os, "platform").returns("linux");
        utils.killProcess(process);
        expect(process.kill).toBeCalled();
        return [2];
      });
    });
  });
  test("should kill the process through the active process on Mac OS", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        sandbox.stub(os, "platform").returns("darwin");
        utils.killProcess(process);
        expect(process.kill).toBeCalled();
        return [2];
      });
    });
  });
});
//# sourceMappingURL=utils.test.js.map

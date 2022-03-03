"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
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
exports.QuarkusLocalServer = void 0;
var cp = require("child_process");
var fs = require("fs");
var portfinder_1 = require("portfinder");
var api_1 = require("../api");
var utils = require("./utils");
var QuarkusLocalServer = (function (_super) {
  __extends(QuarkusLocalServer, _super);
  function QuarkusLocalServer(jarFilePath) {
    var _this = _super.call(this) || this;
    _this.jarFilePath = jarFilePath;
    return _this;
  }
  QuarkusLocalServer.prototype.identify = function () {
    return "QUARKUS_LOCAL_SERVER";
  };
  QuarkusLocalServer.prototype.start = function () {
    return __awaiter(this, void 0, void 0, function () {
      var timeoutPromise, checkServerPromise;
      var _this = this;
      return __generator(this, function (_a) {
        this.activeProcess = cp.spawn("java", ["-Dquarkus.http.port=".concat(this.port), "-jar", this.jarFilePath]);
        timeoutPromise = new Promise(function (resolve) {
          setTimeout(function () {
            resolve(false);
          }, 5000);
        });
        checkServerPromise = new Promise(function (resolve) {
          if (!_this.activeProcess || !_this.activeProcess.stdout) {
            resolve(false);
            return;
          }
          _this.activeProcess.stdout.on("data", function (data) {
            if (data.toString().includes("Listening on")) {
              resolve(true);
            }
          });
        });
        return [
          2,
          Promise.race([timeoutPromise, checkServerPromise]).then(function (result) {
            if (!result) {
              throw new Error("Could not start the Quarkus local server.");
            }
          }),
        ];
      });
    });
  };
  QuarkusLocalServer.prototype.stop = function () {
    if (!this.activeProcess) {
      return;
    }
    utils.killProcess(this.activeProcess);
    this.activeProcess = undefined;
  };
  QuarkusLocalServer.prototype.satisfyRequirements = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _a, e_1;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            if (!fs.existsSync(this.jarFilePath)) {
              console.error("".concat(this.jarFilePath, " does not exist."));
              return [2, false];
            }
            return [4, utils.isJavaAvailable({ major: 11, minor: 0, patch: 0 })];
          case 1:
            if (!_b.sent()) {
              console.error("Java 11.0.0+ could not be identified.");
              return [2, false];
            }
            _b.label = 2;
          case 2:
            _b.trys.push([2, 4, , 5]);
            _a = this;
            return [4, (0, portfinder_1.getPortPromise)({ port: 8082 })];
          case 3:
            _a.port = _b.sent();
            return [2, true];
          case 4:
            e_1 = _b.sent();
            console.error(e_1);
            return [2, false];
          case 5:
            return [2];
        }
      });
    });
  };
  return QuarkusLocalServer;
})(api_1.LocalHttpServer);
exports.QuarkusLocalServer = QuarkusLocalServer;
//# sourceMappingURL=QuarkusLocalServer.js.map

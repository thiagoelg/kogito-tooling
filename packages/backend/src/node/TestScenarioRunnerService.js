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
exports.TestScenarioRunnerService = void 0;
var cp = require("child_process");
var xmlParser = require("fast-xml-parser");
var fs = require("fs");
var path = require("path");
var api_1 = require("../api");
var channel_api_1 = require("../channel-api");
var utils = require("./utils");
var TestScenarioRunnerService = (function () {
  function TestScenarioRunnerService() {}
  TestScenarioRunnerService.prototype.identify = function () {
    return channel_api_1.ServiceId.TEST_SCENARIO_RUNNER;
  };
  TestScenarioRunnerService.prototype.start = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        return [2];
      });
    });
  };
  TestScenarioRunnerService.prototype.stop = function () {
    if (!this.activeProcess) {
      return;
    }
    utils.killProcess(this.activeProcess);
    this.activeProcess = undefined;
  };
  TestScenarioRunnerService.prototype.satisfyRequirements = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, utils.isMavenAvailable({ major: 3, minor: 6, patch: 2 })];
          case 1:
            if (!_a.sent()) {
              console.error("Maven 3.6.2+ could not be identified.");
              return [2, false];
            }
            return [4, utils.isJavaAvailable({ major: 11, minor: 0, patch: 0 })];
          case 2:
            if (!_a.sent()) {
              console.error("Java 11.0.0+ could not be identified.");
              return [2, false];
            }
            return [2, true];
        }
      });
    });
  };
  TestScenarioRunnerService.prototype.stopActiveExecution = function () {
    this.stop();
  };
  TestScenarioRunnerService.prototype.execute = function (baseDir, runnerClass) {
    var _this = this;
    if (!fs.existsSync(path.join(baseDir, "pom.xml"))) {
      return Promise.reject("Unable to find a pom.xml file inside ".concat(baseDir));
    }
    if (!fs.existsSync(path.join(baseDir, "src", "test", "java", runnerClass.replace(".", path.sep) + ".java"))) {
      return Promise.reject("Unable to find ".concat(runnerClass, " file in the src/test/java folder"));
    }
    return new Promise(function (resolve, reject) {
      _this.stopActiveExecution();
      _this.activeProcess = cp.spawn("mvn", ["clean", "test", "-f", baseDir]);
      _this.activeProcess.on("exit", function (code) {
        if (code !== 0) {
          resolve(api_1.CapabilityResponse.ok());
          return;
        }
        var resultFilePath = path.join(baseDir, "target", "surefire-reports", runnerClass + ".txt");
        if (!fs.existsSync(resultFilePath)) {
          reject("Test report file could not be found.");
          return;
        }
        var resultXmlPath = path.join(baseDir, "target", "surefire-reports", "TEST-" + runnerClass + ".xml");
        var attrsMap = xmlParser.getTraversalObj(fs.readFileSync(resultXmlPath).toString(), {
          attributeNamePrefix: "",
          ignoreNameSpace: true,
          ignoreAttributes: false,
          parseAttributeValue: true,
          trimValues: true,
        }).child.testsuite[0].attrsMap;
        resolve(
          api_1.CapabilityResponse.ok({
            filePath: resultFilePath,
            tests: attrsMap.tests,
            errors: attrsMap.errors,
            failures: attrsMap.failures,
            skipped: attrsMap.skipped,
          })
        );
      });
    });
  };
  return TestScenarioRunnerService;
})();
exports.TestScenarioRunnerService = TestScenarioRunnerService;
//# sourceMappingURL=TestScenarioRunnerService.js.map

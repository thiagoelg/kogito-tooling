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
var selenium_webdriver_1 = require("selenium-webdriver");
var ErrorProcessor_1 = require("./ErrorProcessor");
var os_1 = require("os");
var Clipboard = (function () {
  function Clipboard(driver) {
    this.driver = driver;
  }
  Clipboard.prototype.getContent = function () {
    return __awaiter(this, void 0, void 0, function () {
      var input;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.addHelperInputToPage()];
          case 1:
            input = _a.sent();
            return [4, this.pasteContentToHelperInput(input)];
          case 2:
            _a.sent();
            return [4, this.getTextFromHelperInput()];
          case 3:
            return [2, _a.sent()];
        }
      });
    });
  };
  Clipboard.prototype.getTextFromHelperInput = function () {
    return __awaiter(this, void 0, void 0, function () {
      var GET_TEXT_FROM_INPUT_CMD;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            GET_TEXT_FROM_INPUT_CMD =
              "input=document.getElementById('copyPaste');" +
              "text=document.getElementById('copyPaste').value;" +
              "input.remove();" +
              "return text;";
            return [
              4,
              ErrorProcessor_1.default.run(function () {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4, this.driver.executeScript(GET_TEXT_FROM_INPUT_CMD)];
                      case 1:
                        return [2, _a.sent()];
                    }
                  });
                });
              }, "Error while getting text from helper input."),
            ];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  Clipboard.prototype.pasteContentToHelperInput = function (input) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              ErrorProcessor_1.default.run(function () {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4, input.sendKeys(this.getCtrvKeys())];
                      case 1:
                        return [2, _a.sent()];
                    }
                  });
                });
              }, "Error while pasting contenct from clipboard to helper input by keys: " + this.getCtrvKeys()),
            ];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  };
  Clipboard.prototype.getCtrvKeys = function () {
    if ((0, os_1.platform)() === "darwin") {
      return selenium_webdriver_1.Key.SHIFT + selenium_webdriver_1.Key.INSERT;
    } else {
      return selenium_webdriver_1.Key.CONTROL + "v";
    }
  };
  Clipboard.prototype.addHelperInputToPage = function () {
    return __awaiter(this, void 0, void 0, function () {
      var ADD_HELPER_INPUT_CMD;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            ADD_HELPER_INPUT_CMD =
              "input=document.createElement('input');" +
              "input.setAttribute('id','copyPaste');" +
              "return document.getElementsByTagName('body')[0].appendChild(input)";
            return [4, this.driver.executeScript(ADD_HELPER_INPUT_CMD)];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  return Clipboard;
})();
exports.default = Clipboard;
//# sourceMappingURL=Clipboard.js.map

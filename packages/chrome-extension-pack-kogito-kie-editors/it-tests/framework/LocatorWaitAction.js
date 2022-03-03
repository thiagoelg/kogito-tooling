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
var Element_1 = require("./Element");
var ErrorProcessor_1 = require("../utils/tools/ErrorProcessor");
var LocatorWaitAction = (function () {
  function LocatorWaitAction(driver, by, timeout) {
    if (timeout === void 0) {
      timeout = timeout !== null && timeout !== void 0 ? timeout : LocatorWaitAction.DEFAULT_TIMEOUT;
    }
    this.driver = driver;
    this.by = by;
    this.timeout = timeout;
  }
  LocatorWaitAction.prototype.absent = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              this.driver.wait(function () {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4, this.driver.findElements(this.by)];
                      case 1:
                        return [2, _a.sent().length === 0];
                    }
                  });
                });
              }, this.timeout),
            ];
          case 1:
            _a.sent();
            return [2, Promise.resolve()];
        }
      });
    });
  };
  LocatorWaitAction.prototype.untilAbsent = function () {
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
                        return [4, this.absent()];
                      case 1:
                        return [2, _a.sent()];
                    }
                  });
                });
              }, "Error while waiting until absent " + this.by),
            ];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  LocatorWaitAction.prototype.isAbsent = function () {
    return __awaiter(this, void 0, void 0, function () {
      var err_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4, this.absent()];
          case 1:
            _a.sent();
            return [2, true];
          case 2:
            err_1 = _a.sent();
            if (err_1 instanceof selenium_webdriver_1.error.TimeoutError) {
              return [2, false];
            } else {
              throw err_1;
            }
            return [3, 3];
          case 3:
            return [2];
        }
      });
    });
  };
  LocatorWaitAction.prototype.present = function () {
    return __awaiter(this, void 0, void 0, function () {
      var _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = Element_1.default.bind;
            return [4, this.driver.wait(selenium_webdriver_1.until.elementLocated(this.by), this.timeout)];
          case 1:
            return [2, new (_a.apply(Element_1.default, [void 0, _b.sent()]))()];
        }
      });
    });
  };
  LocatorWaitAction.prototype.untilPresent = function () {
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
                        return [4, this.present()];
                      case 1:
                        return [2, _a.sent()];
                    }
                  });
                });
              }, "Error while waiting until present: " + this.by),
            ];
          case 1:
            _a.sent();
            return [2, Promise.resolve()];
        }
      });
    });
  };
  LocatorWaitAction.prototype.isPresent = function () {
    return __awaiter(this, void 0, void 0, function () {
      var err_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4, this.present()];
          case 1:
            _a.sent();
            return [2, true];
          case 2:
            err_2 = _a.sent();
            if (err_2 instanceof selenium_webdriver_1.error.TimeoutError) {
              return [2, false];
            } else {
              throw err_2;
            }
            return [3, 3];
          case 3:
            return [2];
        }
      });
    });
  };
  LocatorWaitAction.prototype.visible = function () {
    return __awaiter(this, void 0, void 0, function () {
      var webElement;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.driver.findElement(this.by)];
          case 1:
            webElement = _a.sent();
            return [4, this.driver.wait(selenium_webdriver_1.until.elementIsVisible(webElement), this.timeout)];
          case 2:
            _a.sent();
            return [2, Promise.resolve()];
        }
      });
    });
  };
  LocatorWaitAction.prototype.untilVisible = function () {
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
                        return [4, this.visible()];
                      case 1:
                        return [2, _a.sent()];
                    }
                  });
                });
              }, "Error while waiting until visible: " + this.by),
            ];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  LocatorWaitAction.prototype.isVisible = function () {
    return __awaiter(this, void 0, void 0, function () {
      var err_3;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4, this.visible()];
          case 1:
            _a.sent();
            return [2, true];
          case 2:
            err_3 = _a.sent();
            if (err_3 instanceof selenium_webdriver_1.error.TimeoutError) {
              return [2, false];
            } else {
              throw err_3;
            }
            return [3, 3];
          case 3:
            return [2];
        }
      });
    });
  };
  LocatorWaitAction.prototype.value = function () {
    return __awaiter(this, void 0, void 0, function () {
      var webElement;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.driver.findElement(this.by)];
          case 1:
            webElement = _a.sent();
            return [
              4,
              this.driver.wait(function () {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4, webElement.getAttribute("value")];
                      case 1:
                        return [2, _a.sent() !== ""];
                    }
                  });
                });
              }, this.timeout),
            ];
          case 2:
            _a.sent();
            return [4, webElement.getAttribute("value")];
          case 3:
            return [2, _a.sent()];
        }
      });
    });
  };
  LocatorWaitAction.prototype.untilHasValue = function () {
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
                        return [4, this.value()];
                      case 1:
                        return [2, _a.sent()];
                    }
                  });
                });
              }, "Error while waiting until has value: " + this.by),
            ];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  LocatorWaitAction.prototype.hasValue = function () {
    return __awaiter(this, void 0, void 0, function () {
      var err_4;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4, this.value()];
          case 1:
            _a.sent();
            return [2, true];
          case 2:
            err_4 = _a.sent();
            if (err_4 instanceof selenium_webdriver_1.error.TimeoutError) {
              return [2, false];
            } else {
              throw err_4;
            }
            return [3, 3];
          case 3:
            return [2];
        }
      });
    });
  };
  LocatorWaitAction.prototype.enabled = function () {
    return __awaiter(this, void 0, void 0, function () {
      var webElement, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [4, this.driver.findElement(this.by)];
          case 1:
            webElement = _b.sent();
            _a = Element_1.default.bind;
            return [4, this.driver.wait(selenium_webdriver_1.until.elementIsEnabled(webElement), this.timeout)];
          case 2:
            return [2, new (_a.apply(Element_1.default, [void 0, _b.sent()]))()];
        }
      });
    });
  };
  LocatorWaitAction.prototype.untilEnabled = function () {
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
                        return [4, this.enabled()];
                      case 1:
                        return [2, _a.sent()];
                    }
                  });
                });
              }, "Error while waiting until enabled: " + this.by),
            ];
          case 1:
            _a.sent();
            return [2, Promise.resolve()];
        }
      });
    });
  };
  LocatorWaitAction.DEFAULT_TIMEOUT = 100;
  return LocatorWaitAction;
})();
exports.default = LocatorWaitAction;
//# sourceMappingURL=LocatorWaitAction.js.map

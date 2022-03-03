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
var ErrorProcessor_1 = require("../utils/tools/ErrorProcessor");
var Element = (function () {
  function Element(webElement) {
    this.webElement = webElement;
  }
  Element.prototype.dragAndDrop = function (x, y) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              ErrorProcessor_1.default.run(function () {
                return __awaiter(_this, void 0, void 0, function () {
                  var actions;
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4, this.click()];
                      case 1:
                        _a.sent();
                        actions = this.webElement.getDriver().actions();
                        return [4, actions.move({ origin: this.webElement, x: x, y: y }).perform()];
                      case 2:
                        _a.sent();
                        return [4, actions.click().perform()];
                      case 3:
                        return [2, _a.sent()];
                    }
                  });
                });
              }, "Error while drag and drop element to: x=" + x + " y=" + y),
            ];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  Element.prototype.sendKeys = function (keys) {
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
                        return [4, this.webElement.sendKeys(keys)];
                      case 1:
                        return [2, _a.sent()];
                    }
                  });
                });
              }, "Error while sending keys " + keys),
            ];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  Element.prototype.getText = function () {
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
                        return [4, this.webElement.getText()];
                      case 1:
                        return [2, _a.sent()];
                    }
                  });
                });
              }, "Error while getting text from element."),
            ];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  Element.prototype.clickJs = function () {
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
                        return [4, this.webElement.getDriver().executeScript("arguments[0].click();", this.webElement)];
                      case 1:
                        return [2, _a.sent()];
                    }
                  });
                });
              }, "Error while clicking by JavaScript on element."),
            ];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  Element.prototype.click = function () {
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
                        return [4, this.webElement.click()];
                      case 1:
                        return [2, _a.sent()];
                    }
                  });
                });
              }, "Error while clicking on element."),
            ];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  Element.prototype.offsetClick = function (x, y) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              ErrorProcessor_1.default.run(function () {
                return __awaiter(_this, void 0, void 0, function () {
                  var actions;
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        actions = this.webElement.getDriver().actions();
                        return [4, actions.move({ origin: this.webElement, x: x, y: y }).perform()];
                      case 1:
                        _a.sent();
                        return [4, actions.click().perform()];
                      case 2:
                        return [2, _a.sent()];
                    }
                  });
                });
              }, "Error while clicking on element by offset: x=" + x + " ,y=" + y),
            ];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  Element.prototype.offsetMove = function (x, y) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              ErrorProcessor_1.default.run(function () {
                return __awaiter(_this, void 0, void 0, function () {
                  var actions;
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        actions = this.webElement.getDriver().actions();
                        return [4, actions.move({ origin: this.webElement, x: x, y: y }).perform()];
                      case 1:
                        return [2, _a.sent()];
                    }
                  });
                });
              }, "Error while moving from element by offset: x=" + x + " ,y=" + y),
            ];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  Element.prototype.scroll = function () {
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
                        return [
                          4,
                          this.webElement
                            .getDriver()
                            .executeScript("arguments[0].scrollIntoView(true);", this.webElement),
                        ];
                      case 1:
                        return [2, _a.sent()];
                    }
                  });
                });
              }, "Error while scrolling to element."),
            ];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  Element.prototype.getAttribute = function (attributeName) {
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
                        return [4, this.webElement.getAttribute(attributeName)];
                      case 1:
                        return [2, _a.sent()];
                    }
                  });
                });
              }, "Error while getting attribute: " + attributeName),
            ];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  Element.prototype.findElement = function (by) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              ErrorProcessor_1.default.run(function () {
                return __awaiter(_this, void 0, void 0, function () {
                  var _a;
                  return __generator(this, function (_b) {
                    switch (_b.label) {
                      case 0:
                        _a = Element.bind;
                        return [4, this.webElement.findElement(by)];
                      case 1:
                        return [2, new (_a.apply(Element, [void 0, _b.sent()]))()];
                    }
                  });
                });
              }, "Error while finding element: " + by),
            ];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  Element.prototype.findElements = function (by) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              ErrorProcessor_1.default.run(function () {
                return __awaiter(_this, void 0, void 0, function () {
                  var webElements;
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4, this.webElement.findElements(by)];
                      case 1:
                        webElements = _a.sent();
                        return [
                          2,
                          webElements.map(function (webElement) {
                            return new Element(webElement);
                          }),
                        ];
                    }
                  });
                });
              }, "Error while finding elements: " + by),
            ];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  Element.prototype.enterFrame = function () {
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
                        return [4, this.webElement.getDriver().switchTo().frame(this.webElement)];
                      case 1:
                        return [2, _a.sent()];
                    }
                  });
                });
              }, "Error while entering element frame."),
            ];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  Element.prototype.markWithRedColor = function () {
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
                        return [
                          4,
                          this.webElement
                            .getDriver()
                            .executeScript("arguments[0].style.backgroundColor = '#ff0000';", this.webElement),
                        ];
                      case 1:
                        return [2, _a.sent()];
                    }
                  });
                });
              }, "Error while coloring element."),
            ];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  return Element;
})();
exports.default = Element;
//# sourceMappingURL=Element.js.map

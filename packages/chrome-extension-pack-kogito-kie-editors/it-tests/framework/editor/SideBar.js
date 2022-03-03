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
var selenium_webdriver_1 = require("selenium-webdriver");
var Explorer_1 = require("./Explorer");
var PageFragment_1 = require("../PageFragment");
var Properties_1 = require("./Properties");
var MAX_ATTEMPTS_TO_OPEN_SIDEBAR = 10;
var SideBar = (function (_super) {
  __extends(SideBar, _super);
  function SideBar() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  SideBar.prototype.waitUntilLoaded = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.tools.by(SideBar.EXPLORER_BUTTON_LOCATOR).wait(1000).untilPresent()];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  SideBar.prototype.openSideBar = function (byIcon, sideBarTitle) {
    return __awaiter(this, void 0, void 0, function () {
      var expandedBar, i;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            expandedBar = this.tools.by(SideBar.EXPANDED_BAR_LOCATOR);
            i = 0;
            _a.label = 1;
          case 1:
            return [4, this.isSideBarOpen(sideBarTitle)];
          case 2:
            if (!(!_a.sent() && i < MAX_ATTEMPTS_TO_OPEN_SIDEBAR)) return [3, 6];
            return [4, byIcon.click()];
          case 3:
            _a.sent();
            return [4, this.tools.sleep(1000)];
          case 4:
            _a.sent();
            _a.label = 5;
          case 5:
            i++;
            return [3, 1];
          case 6:
            return [4, expandedBar.wait(2000).untilVisible()];
          case 7:
            _a.sent();
            return [4, byIcon.offsetMove(-200, 0)];
          case 8:
            _a.sent();
            return [4, expandedBar.getElement()];
          case 9:
            return [2, _a.sent()];
        }
      });
    });
  };
  SideBar.prototype.isSideBarOpen = function (title) {
    return __awaiter(this, void 0, void 0, function () {
      var sideBarLocator, isSideBarOpen, sideBar, sideBarTitle, actualTitle;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            sideBarLocator = this.tools.by(SideBar.EXPANDED_BAR_LOCATOR);
            return [4, sideBarLocator.wait().isVisible()];
          case 1:
            isSideBarOpen = _a.sent();
            if (!isSideBarOpen) return [3, 5];
            return [4, sideBarLocator.getElement()];
          case 2:
            sideBar = _a.sent();
            return [4, sideBar.findElement(SideBar.TITLE_LOCATOR)];
          case 3:
            sideBarTitle = _a.sent();
            return [4, sideBarTitle.getText()];
          case 4:
            actualTitle = _a.sent();
            if (actualTitle === title) {
              return [2, true];
            }
            _a.label = 5;
          case 5:
            return [2, false];
        }
      });
    });
  };
  SideBar.prototype.openExplorer = function () {
    return __awaiter(this, void 0, void 0, function () {
      var explorerButtonLocator, diagramButton, sideBar;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            explorerButtonLocator = this.tools.by(SideBar.EXPLORER_BUTTON_LOCATOR);
            return [4, explorerButtonLocator.wait(2000).untilPresent()];
          case 1:
            _a.sent();
            return [4, explorerButtonLocator.getElement()];
          case 2:
            diagramButton = _a.sent();
            return [4, this.openSideBar(diagramButton, "Explore Diagram")];
          case 3:
            sideBar = _a.sent();
            return [4, this.tools.createPageFragment(Explorer_1.default, sideBar)];
          case 4:
            return [2, _a.sent()];
        }
      });
    });
  };
  SideBar.prototype.openProperties = function () {
    return __awaiter(this, void 0, void 0, function () {
      var propButton, sideBar;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.tools.by(SideBar.PROP_BUTTON_LOCATOR).getElement()];
          case 1:
            propButton = _a.sent();
            return [4, this.openSideBar(propButton, "Properties")];
          case 2:
            sideBar = _a.sent();
            return [4, this.tools.createPageFragment(Properties_1.default, sideBar)];
          case 3:
            return [2, _a.sent()];
        }
      });
    });
  };
  SideBar.PROP_BUTTON_LOCATOR = selenium_webdriver_1.By.xpath("//div[./button[@data-title='Properties']]");
  SideBar.EXPLORER_BUTTON_LOCATOR = selenium_webdriver_1.By.xpath(
    "//div[./button[@data-title='Explore Diagram' or @data-title='Explore diagram']]"
  );
  SideBar.EXPANDED_BAR_LOCATOR = selenium_webdriver_1.By.className("expanded-docks-bar-E");
  SideBar.TITLE_LOCATOR = selenium_webdriver_1.By.xpath("./div/h3");
  return SideBar;
})(PageFragment_1.default);
exports.default = SideBar;
//# sourceMappingURL=SideBar.js.map

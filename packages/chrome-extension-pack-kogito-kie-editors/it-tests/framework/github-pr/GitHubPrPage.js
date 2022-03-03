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
var EditorPage_1 = require("../editor/EditorPage");
var GitHubPrPage = (function (_super) {
  __extends(GitHubPrPage, _super);
  function GitHubPrPage() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  GitHubPrPage.prototype.waitUntilLoaded = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.tools.by(GitHubPrPage.SEE_AS_DIAGRAM_BUTTON_LOCATOR).wait(1000).untilPresent()];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  GitHubPrPage.prototype.scrollToPrHeader = function () {
    return __awaiter(this, void 0, void 0, function () {
      var panel;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.tools.by(GitHubPrPage.PR_HEADER_LOCATOR).getElement()];
          case 1:
            panel = _a.sent();
            return [4, panel.scroll()];
          case 2:
            return [2, _a.sent()];
        }
      });
    });
  };
  GitHubPrPage.prototype.isSourceOpened = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.tools.by(GitHubPrPage.RAW_CONTENT_LOCATOR).wait(5000).isVisible()];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  GitHubPrPage.prototype.isDiagramOpened = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.tools.by(EditorPage_1.default.FRAME_LOCATOR).wait(5000).isPresent()];
          case 1:
            return [2, _a.sent()];
        }
      });
    });
  };
  GitHubPrPage.prototype.seeAsDiagram = function () {
    return __awaiter(this, void 0, void 0, function () {
      var seeAsDiagramButton;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.tools.by(GitHubPrPage.SEE_AS_DIAGRAM_BUTTON_LOCATOR).getElement()];
          case 1:
            seeAsDiagramButton = _a.sent();
            return [4, seeAsDiagramButton.click()];
          case 2:
            return [2, _a.sent()];
        }
      });
    });
  };
  GitHubPrPage.prototype.closeDiagram = function () {
    return __awaiter(this, void 0, void 0, function () {
      var closeDiagramButton;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.tools.by(GitHubPrPage.CLOSE_DIAGRAM_BUTTON_LOCATOR).getElement()];
          case 1:
            closeDiagramButton = _a.sent();
            return [4, closeDiagramButton.click()];
          case 2:
            return [2, _a.sent()];
        }
      });
    });
  };
  GitHubPrPage.prototype.original = function () {
    return __awaiter(this, void 0, void 0, function () {
      var originalButton;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.tools.by(GitHubPrPage.ORIGINAL_BUTTON_LOCATOR).getElement()];
          case 1:
            originalButton = _a.sent();
            return [4, originalButton.click()];
          case 2:
            _a.sent();
            return [4, this.tools.by(GitHubPrPage.CHANGES_BUTTON_LOCATOR).wait(1000).untilEnabled()];
          case 3:
            return [2, _a.sent()];
        }
      });
    });
  };
  GitHubPrPage.prototype.changes = function () {
    return __awaiter(this, void 0, void 0, function () {
      var changesButton;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.tools.by(GitHubPrPage.CHANGES_BUTTON_LOCATOR).getElement()];
          case 1:
            changesButton = _a.sent();
            return [4, changesButton.click()];
          case 2:
            _a.sent();
            return [4, this.tools.by(GitHubPrPage.ORIGINAL_BUTTON_LOCATOR).wait(1000).untilEnabled()];
          case 3:
            return [2, _a.sent()];
        }
      });
    });
  };
  GitHubPrPage.SEE_AS_DIAGRAM_BUTTON_LOCATOR = selenium_webdriver_1.By.xpath("//button[text()='See as diagram']");
  GitHubPrPage.CLOSE_DIAGRAM_BUTTON_LOCATOR = selenium_webdriver_1.By.xpath("//button[text()='Close diagram']");
  GitHubPrPage.ORIGINAL_BUTTON_LOCATOR = selenium_webdriver_1.By.xpath("//button[text()='Original']");
  GitHubPrPage.CHANGES_BUTTON_LOCATOR = selenium_webdriver_1.By.xpath("//button[text()='Changes']");
  GitHubPrPage.RAW_CONTENT_LOCATOR = selenium_webdriver_1.By.className("js-file-content");
  GitHubPrPage.PR_HEADER_LOCATOR = selenium_webdriver_1.By.className("gh-header-meta");
  return GitHubPrPage;
})(EditorPage_1.default);
exports.default = GitHubPrPage;
//# sourceMappingURL=GitHubPrPage.js.map

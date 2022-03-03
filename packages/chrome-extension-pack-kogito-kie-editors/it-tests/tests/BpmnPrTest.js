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
var GitHubPrPage_1 = require("../framework/github-pr/GitHubPrPage");
var Tools_1 = require("../utils/Tools");
var TEST_NAME = "BpmnPrTest";
var tools;
beforeEach(function () {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, Tools_1.default.init(TEST_NAME)];
        case 1:
          tools = _a.sent();
          return [2];
      }
    });
  });
});
test(TEST_NAME, function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var PR_WEB_PAGE,
      gitHubPrPage,
      _a,
      _b,
      _c,
      _d,
      changesEditor,
      sideBar,
      exlorer,
      _e,
      originalEditor,
      originalSideBar,
      originalExlorer,
      _f,
      _g,
      _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          PR_WEB_PAGE = "https://github.com/tomasdavidorg/chrome-extension-pr-test/pull/2/files";
          return [4, tools.openPage(GitHubPrPage_1.default, PR_WEB_PAGE)];
        case 1:
          gitHubPrPage = _j.sent();
          _a = expect;
          return [4, gitHubPrPage.isSourceOpened()];
        case 2:
          _a.apply(void 0, [_j.sent()]).toBe(true);
          _b = expect;
          return [4, gitHubPrPage.isDiagramOpened()];
        case 3:
          _b.apply(void 0, [_j.sent()]).toBe(false);
          return [4, gitHubPrPage.seeAsDiagram()];
        case 4:
          _j.sent();
          _c = expect;
          return [4, gitHubPrPage.isSourceOpened()];
        case 5:
          _c.apply(void 0, [_j.sent()]).toBe(false);
          _d = expect;
          return [4, gitHubPrPage.isDiagramOpened()];
        case 6:
          _d.apply(void 0, [_j.sent()]).toBe(true);
          return [4, gitHubPrPage.getBpmnEditor()];
        case 7:
          changesEditor = _j.sent();
          return [4, gitHubPrPage.scrollToPrHeader()];
        case 8:
          _j.sent();
          return [4, changesEditor.enter()];
        case 9:
          _j.sent();
          return [4, changesEditor.getSideBar()];
        case 10:
          sideBar = _j.sent();
          return [4, sideBar.openExplorer()];
        case 11:
          exlorer = _j.sent();
          _e = expect;
          return [4, exlorer.getNodeNames()];
        case 12:
          _e.apply(void 0, [_j.sent().sort()]).toEqual(["Start", "Task", "End", "Intermediate Timer"].sort());
          return [4, changesEditor.leave()];
        case 13:
          _j.sent();
          return [4, gitHubPrPage.original()];
        case 14:
          _j.sent();
          return [4, gitHubPrPage.getBpmnEditor()];
        case 15:
          originalEditor = _j.sent();
          return [4, gitHubPrPage.scrollToPrHeader()];
        case 16:
          _j.sent();
          return [4, originalEditor.enter()];
        case 17:
          _j.sent();
          return [4, originalEditor.getSideBar()];
        case 18:
          originalSideBar = _j.sent();
          return [4, originalSideBar.openExplorer()];
        case 19:
          originalExlorer = _j.sent();
          _f = expect;
          return [4, originalExlorer.getNodeNames()];
        case 20:
          _f.apply(void 0, [_j.sent().sort()]).toEqual(["Start", "Task", "End"].sort());
          return [4, originalEditor.leave()];
        case 21:
          _j.sent();
          return [4, gitHubPrPage.closeDiagram()];
        case 22:
          _j.sent();
          _g = expect;
          return [4, gitHubPrPage.isSourceOpened()];
        case 23:
          _g.apply(void 0, [_j.sent()]).toBe(true);
          _h = expect;
          return [4, gitHubPrPage.isDiagramOpened()];
        case 24:
          _h.apply(void 0, [_j.sent()]).toBe(false);
          return [2];
      }
    });
  });
});
afterEach(function () {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, tools.finishTest()];
        case 1:
          _a.sent();
          return [2];
      }
    });
  });
});
//# sourceMappingURL=BpmnPrTest.js.map

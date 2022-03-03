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
var Tools_1 = require("./Tools");
var app;
var client;
beforeEach(function () {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, (0, Tools_1.initApp)()];
        case 1:
          app = _a.sent();
          client = app.client;
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
          return [4, app.stop()];
        case 1:
          _a.sent();
          return [2];
      }
    });
  });
});
test("navigation", function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var headerBrand,
      _a,
      _b,
      sidebar,
      sidebarClass,
      sidebarButton,
      learnMoreNav,
      learnMoreCards,
      learMoreCardsTitles,
      _c,
      _d,
      filesNav,
      newFileCards,
      newFileCardTitles,
      recentFilesSectionTitle,
      _e;
    return __generator(this, function (_f) {
      switch (_f.label) {
        case 0:
          return [4, client.$(".pf-c-brand")];
        case 1:
          headerBrand = _f.sent();
          _a = expect;
          return [4, headerBrand.getAttribute("alt")];
        case 2:
          _a.apply(void 0, [_f.sent()]).toEqual("Business Modeler Logo");
          _b = expect;
          return [4, headerBrand.getAttribute("src")];
        case 3:
          _b.apply(void 0, [_f.sent()]).toContain("images/BusinessModeler_Logo.svg");
          return [4, client.$("#page-sidebar")];
        case 4:
          sidebar = _f.sent();
          return [4, sidebar.getAttribute("class")];
        case 5:
          sidebarClass = _f.sent();
          if (!!sidebarClass.includes("expanded")) return [3, 8];
          return [4, client.$("#nav-toggle")];
        case 6:
          sidebarButton = _f.sent();
          return [4, sidebarButton.click()];
        case 7:
          _f.sent();
          _f.label = 8;
        case 8:
          return [4, client.$("[data-ouia-component-id='learn-more-nav']")];
        case 9:
          learnMoreNav = _f.sent();
          return [
            4,
            client.waitUntil(
              function () {
                return __awaiter(void 0, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4, learnMoreNav.isDisplayed()];
                      case 1:
                        return [2, _a.sent()];
                    }
                  });
                });
              },
              { timeout: 2000 }
            ),
          ];
        case 10:
          _f.sent();
          return [4, learnMoreNav.click()];
        case 11:
          _f.sent();
          return [4, client.$$("[data-ouia-component-type='PF4/Card'] > div > h2")];
        case 12:
          learnMoreCards = _f.sent();
          _d = (_c = Promise).all;
          return [
            4,
            learnMoreCards.map(function (card) {
              return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return [4, card.getText()];
                    case 1:
                      return [2, _a.sent()];
                  }
                });
              });
            }),
          ];
        case 13:
          return [4, _d.apply(_c, [_f.sent()])];
        case 14:
          learMoreCardsTitles = _f.sent();
          expect(learMoreCardsTitles).toEqual(["Why BPMN?", "Why DMN?", "About Business Modeler Preview"]);
          return [4, client.$("[data-ouia-component-id='files-nav']")];
        case 15:
          filesNav = _f.sent();
          return [4, filesNav.click()];
        case 16:
          _f.sent();
          return [4, client.$$("[data-ouia-component-type='PF4/Card'] > div > h3")];
        case 17:
          newFileCards = _f.sent();
          return [
            4,
            Promise.all(
              newFileCards.map(function (card) {
                return __awaiter(void 0, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4, card.getText()];
                      case 1:
                        return [2, _a.sent()];
                    }
                  });
                });
              })
            ),
          ];
        case 18:
          newFileCardTitles = _f.sent();
          expect(newFileCardTitles).toEqual([
            "Blank Workflow (.BPMN)",
            "Blank Decision Model (.DMN)",
            "Sample Workflow (.BPMN)",
            "Sample Decision Model (.DMN)",
            "Open from source",
          ]);
          return [4, client.$("[data-ouia-component-id='recent-files-section-title']")];
        case 19:
          recentFilesSectionTitle = _f.sent();
          _e = expect;
          return [4, recentFilesSectionTitle.getText()];
        case 20:
          _e.apply(void 0, [_f.sent()]).toEqual("Recent Files");
          return [2];
      }
    });
  });
});
//# sourceMappingURL=NavigationTest.js.map

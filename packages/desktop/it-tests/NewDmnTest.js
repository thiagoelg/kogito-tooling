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
test("new DMN from pages", function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var bpmnCard;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, client.$("[data-ouia-component-id='new-blank-dmn-file-card']")];
        case 1:
          bpmnCard = _a.sent();
          return [4, bpmnCard.click()];
        case 2:
          _a.sent();
          return [4, testEmptyDmn()];
        case 3:
          _a.sent();
          return [2];
      }
    });
  });
});
test("new DMN from learn more", function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var sidebarButton, sidebar, learnMoreNav, newBpmnButton;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, client.$("#nav-toggle")];
        case 1:
          sidebarButton = _a.sent();
          return [4, client.$("#page-sidebar")];
        case 2:
          sidebar = _a.sent();
          return [4, sidebar.getAttribute("class")];
        case 3:
          if (!!_a.sent().includes("expanded")) return [3, 5];
          return [4, sidebarButton.click()];
        case 4:
          _a.sent();
          _a.label = 5;
        case 5:
          return [4, client.$("[data-ouia-component-id='learn-more-nav']")];
        case 6:
          learnMoreNav = _a.sent();
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
        case 7:
          _a.sent();
          return [4, learnMoreNav.click()];
        case 8:
          _a.sent();
          return [4, sidebar.getAttribute("class")];
        case 9:
          if (!_a.sent().includes("expanded")) return [3, 11];
          return [4, sidebarButton.click()];
        case 10:
          _a.sent();
          _a.label = 11;
        case 11:
          return [4, client.$("[data-ouia-component-id='create-dmn-button']")];
        case 12:
          newBpmnButton = _a.sent();
          return [4, newBpmnButton.click()];
        case 13:
          _a.sent();
          return [4, testEmptyDmn()];
        case 14:
          _a.sent();
          return [2];
      }
    });
  });
});
function testEmptyDmn() {
  return __awaiter(this, void 0, void 0, function () {
    var iframe,
      propertiesButton,
      dmnName,
      _a,
      decisionNavigatorButton,
      dmnNodes,
      nodeNames,
      dataTypesTab,
      noDataTypesTitle,
      _b,
      title,
      _c,
      saveButton,
      _d,
      closeButton,
      _e,
      headerBrand,
      _f,
      _g,
      newFileActions,
      _h;
    var _this = this;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          return [4, client.$("#kogito-iframe")];
        case 1:
          iframe = _j.sent();
          return [4, client.switchToFrame(iframe)];
        case 2:
          _j.sent();
          return [4, (0, Tools_1.waitLoading)(client)];
        case 3:
          _j.sent();
          return [4, client.$("[data-ouia-component-id='docks-item-DiagramEditorPropertiesScreen']")];
        case 4:
          propertiesButton = _j.sent();
          return [4, propertiesButton.click()];
        case 5:
          _j.sent();
          return [4, client.$("input[name$='.definitions.nameHolder']")];
        case 6:
          dmnName = _j.sent();
          _a = expect;
          return [4, dmnName.getValue()];
        case 7:
          _a.apply(void 0, [_j.sent()]).toEqual("unsaved file");
          return [4, client.$("[data-ouia-component-id='collapsed-docks-bar-W']")];
        case 8:
          decisionNavigatorButton = _j.sent();
          return [4, decisionNavigatorButton.click()];
        case 9:
          _j.sent();
          return [
            4,
            client.$$("[data-i18n-prefix='DecisionNavigatorTreeView.'] > div > span[data-field='text-content']"),
          ];
        case 10:
          dmnNodes = _j.sent();
          return [
            4,
            Promise.all(
              dmnNodes.map(function (i) {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4, i.getText()];
                      case 1:
                        return [2, _a.sent()];
                    }
                  });
                });
              })
            ),
          ];
        case 11:
          nodeNames = _j.sent();
          expect(nodeNames).toEqual(["unsaved file"]);
          return [4, client.$("[data-ouia-component-id='Data Types'] > a")];
        case 12:
          dataTypesTab = _j.sent();
          return [4, dataTypesTab.click()];
        case 13:
          _j.sent();
          return [4, client.$("[data-i18n-key='NoCustomDataTitle']")];
        case 14:
          noDataTypesTitle = _j.sent();
          _b = expect;
          return [4, noDataTypesTitle.getText()];
        case 15:
          _b.apply(void 0, [_j.sent()]).toEqual("No custom data types have been defined.");
          return [4, client.switchToParentFrame()];
        case 16:
          _j.sent();
          return [4, client.$("[data-testid='toolbar-title'] > h3")];
        case 17:
          title = _j.sent();
          _c = expect;
          return [4, title.getText()];
        case 18:
          _c.apply(void 0, [_j.sent()]).toEqual("unsaved file");
          return [4, client.$("[data-ouia-component-id='save-button']")];
        case 19:
          saveButton = _j.sent();
          _d = expect;
          return [4, saveButton.isDisplayed()];
        case 20:
          _d.apply(void 0, [_j.sent()]).toEqual(true);
          return [4, client.$("[data-ouia-component-id='close-button']")];
        case 21:
          closeButton = _j.sent();
          _e = expect;
          return [4, closeButton.isDisplayed()];
        case 22:
          _e.apply(void 0, [_j.sent()]).toEqual(true);
          return [4, client.$(".pf-c-brand")];
        case 23:
          headerBrand = _j.sent();
          _f = expect;
          return [4, headerBrand.getAttribute("alt")];
        case 24:
          _f.apply(void 0, [_j.sent()]).toEqual("dmn kogito logo");
          _g = expect;
          return [4, headerBrand.getAttribute("src")];
        case 25:
          _g.apply(void 0, [_j.sent()]).toContain("images/dmn_kogito_logo.svg");
          return [4, closeButton.click()];
        case 26:
          _j.sent();
          return [4, client.$("[data-ouia-component-id='new-file-gallery']")];
        case 27:
          newFileActions = _j.sent();
          _h = expect;
          return [4, newFileActions.isDisplayed()];
        case 28:
          _h.apply(void 0, [_j.sent()]).toEqual(true);
          return [2];
      }
    });
  });
}
//# sourceMappingURL=NewDmnTest.js.map

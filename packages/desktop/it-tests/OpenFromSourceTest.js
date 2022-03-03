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
test("BPMN from source", function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var urlInput,
      openFromSourceButton,
      iframe,
      explorerDiagramButton,
      process,
      _a,
      nodes,
      nodeNames,
      propertiesButton,
      processName,
      _b,
      taskNode,
      nodePropName,
      _c,
      title,
      _d,
      saveButton,
      _e,
      closeButton,
      _f,
      headerBrand,
      _g,
      _h,
      newFileActions,
      _j;
    return __generator(this, function (_k) {
      switch (_k.label) {
        case 0:
          return [4, client.$("#url-text-input")];
        case 1:
          urlInput = _k.sent();
          return [
            4,
            urlInput.setValue(
              "https://raw.githubusercontent.com/kiegroup/kie-tools/main/packages/chrome-extension-pack-kogito-kie-editors/it-tests/samples/test.bpmn"
            ),
          ];
        case 2:
          _k.sent();
          return [4, client.$("[data-ouia-component-id='open-from-source-button']")];
        case 3:
          openFromSourceButton = _k.sent();
          return [4, openFromSourceButton.click()];
        case 4:
          _k.sent();
          return [4, client.$("#kogito-iframe")];
        case 5:
          iframe = _k.sent();
          return [4, client.switchToFrame(iframe)];
        case 6:
          _k.sent();
          return [4, (0, Tools_1.waitLoading)(client)];
        case 7:
          _k.sent();
          return [4, client.$("[data-ouia-component-id='docks-item-ProjectDiagramExplorerScreen']")];
        case 8:
          explorerDiagramButton = _k.sent();
          return [4, explorerDiagramButton.click()];
        case 9:
          _k.sent();
          return [4, client.$("[data-ouia-component-id='tree-item-myProcess'] > div")];
        case 10:
          process = _k.sent();
          _a = expect;
          return [4, process.getText()];
        case 11:
          _a.apply(void 0, [_k.sent()]).toEqual("myProcess");
          return [4, client.$$("[data-ouia-component-type='tree-item'] a")];
        case 12:
          nodes = _k.sent();
          return [
            4,
            Promise.all(
              nodes.map(function (n) {
                return __awaiter(void 0, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4, n.getText()];
                      case 1:
                        return [2, _a.sent()];
                    }
                  });
                });
              })
            ),
          ];
        case 13:
          nodeNames = _k.sent();
          expect(nodeNames).toEqual(["myProcess", "MyStart", "MyTask", "MyEnd"]);
          return [4, client.$("[data-ouia-component-id='docks-item-DiagramEditorPropertiesScreen']")];
        case 14:
          propertiesButton = _k.sent();
          return [4, propertiesButton.click()];
        case 15:
          _k.sent();
          return [4, client.$("input[name$='.diagramSet.name']")];
        case 16:
          processName = _k.sent();
          _b = expect;
          return [4, processName.getValue()];
        case 17:
          _b.apply(void 0, [_k.sent()]).toEqual("myProcess");
          return [4, explorerDiagramButton.click()];
        case 18:
          _k.sent();
          return [4, client.$("[data-ouia-component-id='tree-item-MyTask']")];
        case 19:
          taskNode = _k.sent();
          return [4, taskNode.click()];
        case 20:
          _k.sent();
          return [4, propertiesButton.click()];
        case 21:
          _k.sent();
          return [4, client.$("textarea[name$='.general.name']")];
        case 22:
          nodePropName = _k.sent();
          _c = expect;
          return [4, nodePropName.getValue()];
        case 23:
          _c.apply(void 0, [_k.sent()]).toEqual("MyTask");
          return [4, client.switchToParentFrame()];
        case 24:
          _k.sent();
          return [4, client.$("[data-testid='toolbar-title'] > h3")];
        case 25:
          title = _k.sent();
          _d = expect;
          return [4, title.getText()];
        case 26:
          _d.apply(void 0, [_k.sent()]).toEqual("unsaved file");
          return [4, client.$("[data-ouia-component-id='save-button']")];
        case 27:
          saveButton = _k.sent();
          _e = expect;
          return [4, saveButton.isDisplayed()];
        case 28:
          _e.apply(void 0, [_k.sent()]).toEqual(true);
          return [4, client.$("[data-ouia-component-id='close-button']")];
        case 29:
          closeButton = _k.sent();
          _f = expect;
          return [4, closeButton.isDisplayed()];
        case 30:
          _f.apply(void 0, [_k.sent()]).toEqual(true);
          return [4, client.$(".pf-c-brand")];
        case 31:
          headerBrand = _k.sent();
          _g = expect;
          return [4, headerBrand.getAttribute("alt")];
        case 32:
          _g.apply(void 0, [_k.sent()]).toEqual("bpmn kogito logo");
          _h = expect;
          return [4, headerBrand.getAttribute("src")];
        case 33:
          _h.apply(void 0, [_k.sent()]).toContain("images/bpmn_kogito_logo.svg");
          return [4, closeButton.click()];
        case 34:
          _k.sent();
          return [4, client.$("[data-ouia-component-id='new-file-gallery']")];
        case 35:
          newFileActions = _k.sent();
          _j = expect;
          return [4, newFileActions.isDisplayed()];
        case 36:
          _j.apply(void 0, [_k.sent()]).toEqual(true);
          return [2];
      }
    });
  });
});
test("DMN from source", function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var urlInput,
      openFromSourceButton,
      iframe,
      decisionNavigatorButton,
      dmnNodes,
      nodeNames,
      propertiesButton,
      dmnName,
      _a,
      title,
      _b,
      saveButton,
      _c,
      closeButton,
      _d,
      headerBrand,
      _e,
      _f,
      newFileActions,
      _g;
    return __generator(this, function (_h) {
      switch (_h.label) {
        case 0:
          return [4, client.$("#url-text-input")];
        case 1:
          urlInput = _h.sent();
          return [
            4,
            urlInput.setValue(
              "https://raw.githubusercontent.com/kiegroup/kie-tools/main/packages/chrome-extension-pack-kogito-kie-editors/it-tests/samples/test.dmn"
            ),
          ];
        case 2:
          _h.sent();
          return [4, client.$("[data-ouia-component-id='open-from-source-button']")];
        case 3:
          openFromSourceButton = _h.sent();
          return [4, openFromSourceButton.click()];
        case 4:
          _h.sent();
          return [4, client.$("#kogito-iframe")];
        case 5:
          iframe = _h.sent();
          return [4, client.switchToFrame(iframe)];
        case 6:
          _h.sent();
          return [4, (0, Tools_1.waitLoading)(client)];
        case 7:
          _h.sent();
          return [4, client.$("[data-ouia-component-id='collapsed-docks-bar-W']")];
        case 8:
          decisionNavigatorButton = _h.sent();
          return [4, decisionNavigatorButton.click()];
        case 9:
          _h.sent();
          return [
            4,
            client.$$("[data-i18n-prefix='DecisionNavigatorTreeView.'] > div > span[data-field='text-content']"),
          ];
        case 10:
          dmnNodes = _h.sent();
          return [
            4,
            Promise.all(
              dmnNodes.map(function (i) {
                return __awaiter(void 0, void 0, void 0, function () {
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
          nodeNames = _h.sent();
          expect(nodeNames).toEqual(["myDmn", "MyDecision", "MyInputData", "MyModel", "Function"]);
          return [4, client.$("[data-ouia-component-id='docks-item-DiagramEditorPropertiesScreen']")];
        case 12:
          propertiesButton = _h.sent();
          return [4, propertiesButton.click()];
        case 13:
          _h.sent();
          return [4, client.$("input[name$='.definitions.nameHolder']")];
        case 14:
          dmnName = _h.sent();
          _a = expect;
          return [4, dmnName.getValue()];
        case 15:
          _a.apply(void 0, [_h.sent()]).toEqual("myDmn");
          return [4, client.switchToParentFrame()];
        case 16:
          _h.sent();
          return [4, client.$("[data-testid='toolbar-title'] > h3")];
        case 17:
          title = _h.sent();
          _b = expect;
          return [4, title.getText()];
        case 18:
          _b.apply(void 0, [_h.sent()]).toEqual("unsaved file");
          return [4, client.$("[data-ouia-component-id='save-button']")];
        case 19:
          saveButton = _h.sent();
          _c = expect;
          return [4, saveButton.isDisplayed()];
        case 20:
          _c.apply(void 0, [_h.sent()]).toEqual(true);
          return [4, client.$("[data-ouia-component-id='close-button']")];
        case 21:
          closeButton = _h.sent();
          _d = expect;
          return [4, closeButton.isDisplayed()];
        case 22:
          _d.apply(void 0, [_h.sent()]).toEqual(true);
          return [4, client.$(".pf-c-brand")];
        case 23:
          headerBrand = _h.sent();
          _e = expect;
          return [4, headerBrand.getAttribute("alt")];
        case 24:
          _e.apply(void 0, [_h.sent()]).toEqual("dmn kogito logo");
          _f = expect;
          return [4, headerBrand.getAttribute("src")];
        case 25:
          _f.apply(void 0, [_h.sent()]).toContain("images/dmn_kogito_logo.svg");
          return [4, closeButton.click()];
        case 26:
          _h.sent();
          return [4, client.$("[data-ouia-component-id='new-file-gallery']")];
        case 27:
          newFileActions = _h.sent();
          _g = expect;
          return [4, newFileActions.isDisplayed()];
        case 28:
          _g.apply(void 0, [_h.sent()]).toEqual(true);
          return [2];
      }
    });
  });
});
//# sourceMappingURL=OpenFromSourceTest.js.map

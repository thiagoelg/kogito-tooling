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
test("BPMN example", function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var bpmnCard,
      iframe,
      explorerDiagramButton,
      process,
      _a,
      nodes,
      nodeNames,
      propertiesButton,
      processName,
      _b,
      scriptNode,
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
          return [4, client.$("[data-ouia-component-id='new-sample-bpmn-file-card']")];
        case 1:
          bpmnCard = _k.sent();
          return [4, bpmnCard.click()];
        case 2:
          _k.sent();
          return [4, client.$("#kogito-iframe")];
        case 3:
          iframe = _k.sent();
          return [4, client.switchToFrame(iframe)];
        case 4:
          _k.sent();
          return [4, (0, Tools_1.waitLoading)(client)];
        case 5:
          _k.sent();
          return [4, client.$("[data-ouia-component-id='docks-item-ProjectDiagramExplorerScreen']")];
        case 6:
          explorerDiagramButton = _k.sent();
          return [4, explorerDiagramButton.click()];
        case 7:
          _k.sent();
          return [4, client.$("[data-ouia-component-id='tree-item-Process travelers'] > div")];
        case 8:
          process = _k.sent();
          _a = expect;
          return [4, process.getText()];
        case 9:
          _a.apply(void 0, [_k.sent()]).toEqual("Process travelers");
          return [4, client.$$("[data-ouia-component-type='tree-item'] a")];
        case 10:
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
        case 11:
          nodeNames = _k.sent();
          expect(nodeNames).toEqual([
            "Process travelers",
            "processedtraveler",
            "skipTraveler",
            "Processed Traveler?",
            "Process Traveler",
            "travelers",
            "Log Traveler",
            "Skip Traveler",
          ]);
          return [4, client.$("[data-ouia-component-id='docks-item-DiagramEditorPropertiesScreen']")];
        case 12:
          propertiesButton = _k.sent();
          return [4, propertiesButton.click()];
        case 13:
          _k.sent();
          return [4, client.$("input[name$='.diagramSet.name']")];
        case 14:
          processName = _k.sent();
          _b = expect;
          return [4, processName.getValue()];
        case 15:
          _b.apply(void 0, [_k.sent()]).toEqual("Process travelers");
          return [4, explorerDiagramButton.click()];
        case 16:
          _k.sent();
          return [4, client.$("[data-ouia-component-id='tree-item-Log Traveler']")];
        case 17:
          scriptNode = _k.sent();
          return [4, scriptNode.click()];
        case 18:
          _k.sent();
          return [4, propertiesButton.click()];
        case 19:
          _k.sent();
          return [4, client.$("textarea[name$='.general.name']")];
        case 20:
          nodePropName = _k.sent();
          _c = expect;
          return [4, nodePropName.getValue()];
        case 21:
          _c.apply(void 0, [_k.sent()]).toEqual("Log Traveler");
          return [4, client.switchToParentFrame()];
        case 22:
          _k.sent();
          return [4, client.$("[data-testid='toolbar-title'] > h3")];
        case 23:
          title = _k.sent();
          _d = expect;
          return [4, title.getText()];
        case 24:
          _d.apply(void 0, [_k.sent()]).toEqual("sample.bpmn");
          return [4, client.$("[data-ouia-component-id='save-button']")];
        case 25:
          saveButton = _k.sent();
          _e = expect;
          return [4, saveButton.isDisplayed()];
        case 26:
          _e.apply(void 0, [_k.sent()]).toEqual(true);
          return [4, client.$("[data-ouia-component-id='close-button']")];
        case 27:
          closeButton = _k.sent();
          _f = expect;
          return [4, closeButton.isDisplayed()];
        case 28:
          _f.apply(void 0, [_k.sent()]).toEqual(true);
          return [4, client.$(".pf-c-brand")];
        case 29:
          headerBrand = _k.sent();
          _g = expect;
          return [4, headerBrand.getAttribute("alt")];
        case 30:
          _g.apply(void 0, [_k.sent()]).toEqual("bpmn kogito logo");
          _h = expect;
          return [4, headerBrand.getAttribute("src")];
        case 31:
          _h.apply(void 0, [_k.sent()]).toContain("images/bpmn_kogito_logo.svg");
          return [4, closeButton.click()];
        case 32:
          _k.sent();
          return [4, client.$("[data-ouia-component-id='new-file-gallery']")];
        case 33:
          newFileActions = _k.sent();
          _j = expect;
          return [4, newFileActions.isDisplayed()];
        case 34:
          _j.apply(void 0, [_k.sent()]).toEqual(true);
          return [2];
      }
    });
  });
});
test("DMN example", function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var bpmnCard,
      iframe,
      decisionNavigatorButton,
      dmnNodes,
      nodeNames,
      propertiesButton,
      dmnName,
      _a,
      dataTypesTab,
      dataTypes,
      dataTypeNames,
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
          return [4, client.$("[data-ouia-component-id='new-sample-dmn-file-card']")];
        case 1:
          bpmnCard = _h.sent();
          return [4, bpmnCard.click()];
        case 2:
          _h.sent();
          return [4, client.$("#kogito-iframe")];
        case 3:
          iframe = _h.sent();
          return [4, client.switchToFrame(iframe)];
        case 4:
          _h.sent();
          return [4, (0, Tools_1.waitLoading)(client)];
        case 5:
          _h.sent();
          return [4, client.$("[data-ouia-component-id='collapsed-docks-bar-W']")];
        case 6:
          decisionNavigatorButton = _h.sent();
          return [4, decisionNavigatorButton.click()];
        case 7:
          _h.sent();
          return [
            4,
            client.$$("[data-i18n-prefix='DecisionNavigatorTreeView.'] > div > span[data-field='text-content']"),
          ];
        case 8:
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
        case 9:
          nodeNames = _h.sent();
          expect(nodeNames).toEqual([
            "loan_pre_qualification",
            "Applicant Data",
            "Back End Ratio",
            "Context",
            "Credit Score Rating",
            "Decision Table",
            "Credit Score",
            "DTI",
            "Function",
            "Front End Ratio",
            "Context",
            "Lender Acceptable DTI",
            "Function",
            "Lender Acceptable PITI",
            "Function",
            "Loan Pre-Qualification",
            "Decision Table",
            "PITI",
            "Function",
            "Requested Product",
          ]);
          return [4, client.$("[data-ouia-component-id='docks-item-DiagramEditorPropertiesScreen']")];
        case 10:
          propertiesButton = _h.sent();
          return [4, propertiesButton.click()];
        case 11:
          _h.sent();
          return [4, client.$("input[name$='.definitions.nameHolder']")];
        case 12:
          dmnName = _h.sent();
          _a = expect;
          return [4, dmnName.getValue()];
        case 13:
          _a.apply(void 0, [_h.sent()]).toEqual("loan_pre_qualification");
          return [4, client.$("[data-ouia-component-id='Data Types'] > a")];
        case 14:
          dataTypesTab = _h.sent();
          return [4, dataTypesTab.click()];
        case 15:
          _h.sent();
          return [4, client.$$(".kie-dnd-draggable:not(.hidden) .name-text")];
        case 16:
          dataTypes = _h.sent();
          return [
            4,
            Promise.all(
              dataTypes.map(function (d) {
                return __awaiter(void 0, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4, d.getText()];
                      case 1:
                        return [2, _a.sent()];
                    }
                  });
                });
              })
            ),
          ];
        case 17:
          dataTypeNames = _h.sent();
          expect(dataTypeNames).toEqual([
            "Requested_Product",
            "Marital_Status",
            "Applicant_Data",
            "Post-Bureau_Risk_Category",
            "Pre-Bureau_Risk_Category",
            "Eligibility",
            "Strategy",
            "Bureau_Call_Type",
            "Product_Type",
            "Risk_Category",
            "Credit_Score_Rating",
            "Back_End_Ratio",
            "Front_End_Ratio",
            "Qualification",
            "Credit_Score",
            "Loan_Qualification",
          ]);
          return [4, client.switchToParentFrame()];
        case 18:
          _h.sent();
          return [4, client.$("[data-testid='toolbar-title'] > h3")];
        case 19:
          title = _h.sent();
          _b = expect;
          return [4, title.getText()];
        case 20:
          _b.apply(void 0, [_h.sent()]).toEqual("sample.dmn");
          return [4, client.$("[data-ouia-component-id='save-button']")];
        case 21:
          saveButton = _h.sent();
          _c = expect;
          return [4, saveButton.isDisplayed()];
        case 22:
          _c.apply(void 0, [_h.sent()]).toEqual(true);
          return [4, client.$("[data-ouia-component-id='close-button']")];
        case 23:
          closeButton = _h.sent();
          _d = expect;
          return [4, closeButton.isDisplayed()];
        case 24:
          _d.apply(void 0, [_h.sent()]).toEqual(true);
          return [4, client.$(".pf-c-brand")];
        case 25:
          headerBrand = _h.sent();
          _e = expect;
          return [4, headerBrand.getAttribute("alt")];
        case 26:
          _e.apply(void 0, [_h.sent()]).toEqual("dmn kogito logo");
          _f = expect;
          return [4, headerBrand.getAttribute("src")];
        case 27:
          _f.apply(void 0, [_h.sent()]).toContain("images/dmn_kogito_logo.svg");
          return [4, closeButton.click()];
        case 28:
          _h.sent();
          return [4, client.$("[data-ouia-component-id='new-file-gallery']")];
        case 29:
          newFileActions = _h.sent();
          _g = expect;
          return [4, newFileActions.isDisplayed()];
        case 30:
          _g.apply(void 0, [_h.sent()]).toEqual(true);
          return [2];
      }
    });
  });
});
//# sourceMappingURL=SampleTest.js.map

"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
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
exports.checkEntryLogicType =
  exports.checkEntryStyle =
  exports.checkEntryContent =
  exports.contextEntry =
  exports.updateElementViaPopover =
  exports.activateNameAndDataTypePopover =
  exports.activateSelector =
  exports.wrapComponentInContext =
  exports.usingTestingBoxedExpressionProviderContext =
  exports.usingTestingBoxedExpressionI18nContext =
  exports.pmmlParams =
  exports.dataTypes =
  exports.flushPromises =
  exports.EDIT_EXPRESSION_DATA_TYPE =
  exports.EDIT_EXPRESSION_NAME =
    void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var i18n_1 = require("@kie-tools/boxed-expression-component/dist/i18n");
var test_utils_1 = require("react-dom/test-utils");
var react_1 = require("@testing-library/react");
var context_1 = require("@kie-tools/boxed-expression-component/dist/context");
var boxed_expression_component_1 = require("@kie-tools/boxed-expression-component");
global.console = __assign(__assign({}, global.console), {
  warn: function () {
    return {};
  },
});
exports.EDIT_EXPRESSION_NAME = "[data-ouia-component-id='edit-expression-name']";
exports.EDIT_EXPRESSION_DATA_TYPE = "[data-ouia-component-id='edit-expression-data-type'] span";
var flushPromises = function () {
  return new Promise(function (resolve) {
    return process.nextTick(resolve);
  });
};
exports.flushPromises = flushPromises;
exports.dataTypes = [
  { typeRef: "Undefined", name: "<Undefined>", isCustom: false },
  { typeRef: "Any", name: "Any", isCustom: false },
  { typeRef: "Boolean", name: "boolean", isCustom: false },
  { typeRef: "Context", name: "context", isCustom: false },
  { typeRef: "Date", name: "date", isCustom: false },
  { typeRef: "DateTime", name: "date and time", isCustom: false },
  { typeRef: "DateTimeDuration", name: "days and time duration", isCustom: false },
  { typeRef: "Number", name: "number", isCustom: false },
  { typeRef: "String", name: "string", isCustom: false },
  { typeRef: "Time", name: "time", isCustom: false },
  { typeRef: "YearsMonthsDuration", name: "years and months duration", isCustom: false },
  { typeRef: "tPerson", name: "tPerson", isCustom: true },
];
exports.pmmlParams = [
  {
    document: "document",
    modelsFromDocument: [
      {
        model: "model",
        parametersFromModel: [{ id: "p1", name: "p-1", dataType: boxed_expression_component_1.DataType.Number }],
      },
    ],
  },
  {
    document: "mining pmml",
    modelsFromDocument: [
      {
        model: "MiningModelSum",
        parametersFromModel: [
          { id: "i1", name: "input1", dataType: boxed_expression_component_1.DataType.Any },
          { id: "i2", name: "input2", dataType: boxed_expression_component_1.DataType.Any },
          { id: "i3", name: "input3", dataType: boxed_expression_component_1.DataType.Any },
        ],
      },
    ],
  },
  {
    document: "regression pmml",
    modelsFromDocument: [
      {
        model: "RegressionLinear",
        parametersFromModel: [
          { id: "i1", name: "i1", dataType: boxed_expression_component_1.DataType.Number },
          { id: "i2", name: "i2", dataType: boxed_expression_component_1.DataType.Number },
        ],
      },
    ],
  },
];
function usingTestingBoxedExpressionI18nContext(children, ctx) {
  var usedCtx = __assign(
    {
      defaults: i18n_1.boxedExpressionEditorI18nDefaults,
      dictionaries: i18n_1.boxedExpressionEditorDictionaries,
      ctx: i18n_1.BoxedExpressionEditorI18nContext,
      children: children,
    },
    ctx
  );
  return {
    ctx: usedCtx,
    wrapper: (0, jsx_runtime_1.jsx)(
      react_components_1.I18nDictionariesProvider,
      __assign(
        { defaults: usedCtx.defaults, dictionaries: usedCtx.dictionaries, ctx: usedCtx.ctx },
        { children: usedCtx.children }
      ),
      void 0
    ),
  };
}
exports.usingTestingBoxedExpressionI18nContext = usingTestingBoxedExpressionI18nContext;
function usingTestingBoxedExpressionProviderContext(children, ctx) {
  var usedCtx = __assign(
    {
      decisionNodeId: "_00000000-0000-0000-0000-000000000000",
      expressionDefinition: {},
      dataTypes: exports.dataTypes,
      pmmlParams: exports.pmmlParams,
      isRunnerTable: false,
      children: children,
    },
    ctx
  );
  return {
    ctx: usedCtx,
    wrapper: (0, jsx_runtime_1.jsx)(
      boxed_expression_component_1.BoxedExpressionProvider,
      __assign(
        {
          boxedExpressionEditorGWTService: usedCtx.boxedExpressionEditorGWTService,
          decisionNodeId: usedCtx.decisionNodeId,
          expressionDefinition: usedCtx.expressionDefinition,
          dataTypes: usedCtx.dataTypes,
          pmmlParams: usedCtx.pmmlParams,
          isRunnerTable: false,
        },
        { children: usedCtx.children }
      ),
      void 0
    ),
  };
}
exports.usingTestingBoxedExpressionProviderContext = usingTestingBoxedExpressionProviderContext;
function wrapComponentInContext(component, boxedExpressionEditorGWTService) {
  return (0, jsx_runtime_1.jsx)(
    context_1.BoxedExpressionGlobalContext.Provider,
    __assign(
      {
        value: {
          boxedExpressionEditorGWTService: boxedExpressionEditorGWTService,
          decisionNodeId: "_00000000-0000-0000-0000-000000000000",
          dataTypes: exports.dataTypes,
          pmmlParams: exports.pmmlParams,
          supervisorHash: "",
          setSupervisorHash: jest.fn,
          editorRef: { current: document.body },
          currentlyOpenedHandlerCallback: jest.fn,
          setCurrentlyOpenedHandlerCallback: jest.fn,
        },
      },
      { children: component }
    ),
    void 0
  );
}
exports.wrapComponentInContext = wrapComponentInContext;
function activateSelector(container, query) {
  return __awaiter(this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [
            4,
            (0, test_utils_1.act)(function () {
              return __awaiter(_this, void 0, void 0, function () {
                var selector;
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      selector = container.querySelector(query);
                      selector.click();
                      return [4, (0, exports.flushPromises)()];
                    case 1:
                      _a.sent();
                      jest.runAllTimers();
                      return [2];
                  }
                });
              });
            }),
          ];
        case 1:
          _a.sent();
          return [2];
      }
    });
  });
}
exports.activateSelector = activateSelector;
function activateNameAndDataTypePopover(element) {
  return __awaiter(this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [
            4,
            (0, test_utils_1.act)(function () {
              return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      element.click();
                      return [4, (0, exports.flushPromises)()];
                    case 1:
                      _a.sent();
                      jest.runAllTimers();
                      return [2];
                  }
                });
              });
            }),
          ];
        case 1:
          _a.sent();
          return [2];
      }
    });
  });
}
exports.activateNameAndDataTypePopover = activateNameAndDataTypePopover;
function updateElementViaPopover(triggerPoint, baseElement, inputSelector, newName) {
  return __awaiter(this, void 0, void 0, function () {
    var inputElement;
    var _this = this;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, activateNameAndDataTypePopover(triggerPoint)];
        case 1:
          _a.sent();
          inputElement = baseElement.querySelector(inputSelector);
          inputElement.value = newName;
          return [
            4,
            (0, test_utils_1.act)(function () {
              return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      react_1.fireEvent.change(inputElement, {
                        target: { value: newName },
                      });
                      return [4, (0, exports.flushPromises)()];
                    case 1:
                      _a.sent();
                      jest.runAllTimers();
                      return [2];
                  }
                });
              });
            }),
          ];
        case 2:
          _a.sent();
          return [
            4,
            (0, test_utils_1.act)(function () {
              return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      react_1.fireEvent.blur(inputElement);
                      return [4, (0, exports.flushPromises)()];
                    case 1:
                      _a.sent();
                      jest.runAllTimers();
                      return [2];
                  }
                });
              });
            }),
          ];
        case 3:
          _a.sent();
          return [2];
      }
    });
  });
}
exports.updateElementViaPopover = updateElementViaPopover;
var contextEntry = function (container, index) {
  return container.querySelector("table tbody tr:nth-of-type(".concat(index, ")"));
};
exports.contextEntry = contextEntry;
var checkEntryContent = function (entry, entryRecordInfo) {
  if (entryRecordInfo.id) {
    expect(entry === null || entry === void 0 ? void 0 : entry.querySelector(".entry-info")).toHaveClass(
      entryRecordInfo.id
    );
  }
  expect(entry).toContainHTML(entryRecordInfo.name);
  expect(entry).toContainHTML(entryRecordInfo.dataType);
};
exports.checkEntryContent = checkEntryContent;
var checkEntryStyle = function (entry, cssClass) {
  var _a;
  expect(
    (_a = entry === null || entry === void 0 ? void 0 : entry.querySelector(".entry-expression")) === null ||
      _a === void 0
      ? void 0
      : _a.firstChild
  ).toHaveClass(cssClass);
};
exports.checkEntryStyle = checkEntryStyle;
var checkEntryLogicType = function (entry, cssClass) {
  var _a, _b;
  expect(
    (_b =
      (_a = entry === null || entry === void 0 ? void 0 : entry.querySelector(".entry-expression")) === null ||
      _a === void 0
        ? void 0
        : _a.firstChild) === null || _b === void 0
      ? void 0
      : _b.firstChild
  ).toHaveClass(cssClass);
};
exports.checkEntryLogicType = checkEntryLogicType;
//# sourceMappingURL=test-utils.js.map

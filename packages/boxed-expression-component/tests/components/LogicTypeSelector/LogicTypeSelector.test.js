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
var jsx_runtime_1 = require("react/jsx-runtime");
require("../../__mocks__/ReactWithSupervisor");
var boxed_expression_component_1 = require("@kie-tools/boxed-expression-component");
var react_1 = require("@testing-library/react");
var test_utils_1 = require("../test-utils");
var test_utils_2 = require("react-dom/test-utils");
var LogicTypeSelector_1 = require("@kie-tools/boxed-expression-component/dist/components/LogicTypeSelector");
var _ = require("lodash");
jest.useFakeTimers();
describe("LogicTypeSelector tests", function () {
  test("should have the clear action disabled on startup", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var expression, baseElement;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            expression = { name: "Test", dataType: boxed_expression_component_1.DataType.Undefined };
            baseElement = (0, react_1.render)(
              (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
                (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
                  (0, jsx_runtime_1.jsx)(
                    LogicTypeSelector_1.LogicTypeSelector,
                    {
                      selectedExpression: expression,
                      getPlacementRef: function () {
                        return document.body;
                      },
                      onLogicTypeResetting: _.identity,
                      onLogicTypeUpdating: _.identity,
                    },
                    void 0
                  )
                ).wrapper
              ).wrapper
            ).baseElement;
            return [4, triggerContextMenu(baseElement, ".logic-type-selector")];
          case 1:
            _a.sent();
            expect(baseElement.querySelector(".context-menu-container button")).toBeDisabled();
            expect(baseElement.querySelector(".context-menu-container button")).toHaveTextContent("Clear");
            return [2];
        }
      });
    });
  });
  test("should have the clear action enabled, when logic type is selected", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var expression, baseElement;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            expression = {
              name: "Test",
              logicType: boxed_expression_component_1.LogicType.LiteralExpression,
              dataType: boxed_expression_component_1.DataType.Undefined,
            };
            baseElement = (0, react_1.render)(
              (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
                (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
                  (0, jsx_runtime_1.jsx)(
                    LogicTypeSelector_1.LogicTypeSelector,
                    {
                      selectedExpression: expression,
                      getPlacementRef: function () {
                        return document.body;
                      },
                      onLogicTypeResetting: _.identity,
                      onLogicTypeUpdating: _.identity,
                    },
                    void 0
                  )
                ).wrapper
              ).wrapper
            ).baseElement;
            return [4, triggerContextMenu(baseElement, ".logic-type-selector")];
          case 1:
            _a.sent();
            expect(baseElement.querySelector(".context-menu-container button")).not.toBeDisabled();
            expect(baseElement.querySelector(".context-menu-container button")).toBeTruthy();
            expect(baseElement.querySelector(".context-menu-container button")).toHaveTextContent("Clear");
            return [2];
        }
      });
    });
  });
});
describe("Logic type selection", function () {
  test("should show the pre-selection, when logic type prop is passed", function () {
    var expression = {
      name: "Test",
      logicType: boxed_expression_component_1.LogicType.List,
      dataType: boxed_expression_component_1.DataType.Undefined,
    };
    var baseElement = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(
            LogicTypeSelector_1.LogicTypeSelector,
            {
              selectedExpression: expression,
              getPlacementRef: function () {
                return document.body;
              },
              onLogicTypeResetting: _.identity,
              onLogicTypeUpdating: _.identity,
            },
            void 0
          )
        ).wrapper
      ).wrapper
    ).baseElement;
    expect(baseElement.querySelector(".logic-type-selector")).toBeTruthy();
    expect(baseElement.querySelector(".logic-type-selector")).toHaveClass("logic-type-selected");
  });
  test("should reset the selection, when logic type is selected and clear button gets clicked", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var expression, onLogicTypeResetting, logicTypeSelector, screen;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            expression = {
              name: "Test",
              logicType: boxed_expression_component_1.LogicType.LiteralExpression,
              dataType: boxed_expression_component_1.DataType.Undefined,
            };
            onLogicTypeResetting = jest.fn().mockImplementation(function () {
              expression.logicType = boxed_expression_component_1.LogicType.Undefined;
            });
            logicTypeSelector = (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
              (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
                (0, jsx_runtime_1.jsx)(
                  LogicTypeSelector_1.LogicTypeSelector,
                  {
                    selectedExpression: expression,
                    getPlacementRef: function () {
                      return document.body;
                    },
                    onLogicTypeResetting: onLogicTypeResetting,
                    onLogicTypeUpdating: _.identity,
                  },
                  void 0
                )
              ).wrapper
            ).wrapper;
            screen = (0, react_1.render)(logicTypeSelector);
            return [4, triggerContextMenu(screen.baseElement, ".logic-type-selector")];
          case 1:
            _a.sent();
            (0, test_utils_2.act)(function () {
              var clearButtonElement = screen.baseElement.querySelector(".context-menu-container button");
              var clearButton = clearButtonElement;
              clearButton.click();
            });
            screen.rerender(logicTypeSelector);
            expect(screen.baseElement.querySelector(".logic-type-selector")).toBeTruthy();
            expect(screen.baseElement.querySelector(".logic-type-selector")).toHaveClass("logic-type-not-present");
            return [2];
        }
      });
    });
  });
});
var triggerContextMenu = function (container, selector) {
  return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [
            4,
            (0, test_utils_2.act)(function () {
              return __awaiter(void 0, void 0, void 0, function () {
                var element;
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      element = container.querySelector(selector);
                      react_1.fireEvent.contextMenu(element);
                      return [4, (0, test_utils_1.flushPromises)()];
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
};
//# sourceMappingURL=LogicTypeSelector.test.js.map

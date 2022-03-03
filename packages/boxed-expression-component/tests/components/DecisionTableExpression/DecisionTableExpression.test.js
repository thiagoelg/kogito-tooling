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
var boxed_expression_component_1 = require("@kie-tools/boxed-expression-component");
var react_1 = require("@testing-library/react");
var test_utils_1 = require("../test-utils");
var DecisionTableExpression_1 = require("@kie-tools/boxed-expression-component/dist/components/DecisionTableExpression");
var Table_test_1 = require("../Table/Table.test");
var test_utils_2 = require("react-dom/test-utils");
describe("DecisionTableExpression tests", function () {
  test("should show a table with three columns: input, output and annotation, and one row", function () {
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(
            DecisionTableExpression_1.DecisionTableExpression,
            { id: "decision-node-id", logicType: boxed_expression_component_1.LogicType.DecisionTable },
            void 0
          )
        ).wrapper
      ).wrapper
    ).container;
    expect(container.querySelector(".decision-table-expression")).toBeTruthy();
    expect(container.querySelector(".decision-table-expression table")).toBeTruthy();
    expect(
      container.querySelectorAll(".decision-table-expression table thead tr:last-of-type th:not(.fixed-column)")
    ).toHaveLength(3);
    expect(container.querySelectorAll(".decision-table-expression table thead tr:last-of-type th.input")).toHaveLength(
      1
    );
    expect(container.querySelectorAll(".decision-table-expression table thead tr:last-of-type th.output")).toHaveLength(
      1
    );
    expect(
      container.querySelectorAll(".decision-table-expression table thead tr:last-of-type th.annotation")
    ).toHaveLength(1);
    expect(container.querySelectorAll(".decision-table-expression table tbody tr")).toHaveLength(1);
  });
  test("should show as default hit policy, unique", function () {
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(
            DecisionTableExpression_1.DecisionTableExpression,
            { id: "decision-node-id", logicType: boxed_expression_component_1.LogicType.DecisionTable },
            void 0
          )
        ).wrapper
      ).wrapper
    ).container;
    expect(container.querySelector(".decision-table-expression .selected-hit-policy")).toContainHTML("U");
  });
  test("should show the passed hit policy", function () {
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(
            DecisionTableExpression_1.DecisionTableExpression,
            {
              id: "decision-node-id",
              logicType: boxed_expression_component_1.LogicType.DecisionTable,
              hitPolicy: boxed_expression_component_1.HitPolicy.First,
            },
            void 0
          )
        ).wrapper
      ).wrapper
    ).container;
    expect(container.querySelector(".decision-table-expression .selected-hit-policy")).toContainHTML("F");
  });
  test("should show as default a row, with empty values, except for input column, whose value is dash symbol", function () {
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(
            DecisionTableExpression_1.DecisionTableExpression,
            { id: "decision-node-id", logicType: boxed_expression_component_1.LogicType.DecisionTable },
            void 0
          )
        ).wrapper
      ).wrapper
    ).container;
    expect(container.querySelectorAll(".decision-table-expression table tbody tr td.data-cell")).toHaveLength(3);
    expect(container.querySelectorAll(".decision-table-expression table tbody tr td.data-cell")[0]).toHaveTextContent(
      "-"
    );
    expect(container.querySelectorAll(".decision-table-expression table tbody tr td.data-cell")[1]).toHaveTextContent(
      ""
    );
    expect(container.querySelectorAll(".decision-table-expression table tbody tr td.data-cell")[2]).toHaveTextContent(
      ""
    );
  });
  test("should show the passed input, output and annotations", function () {
    var inputName = "input name";
    var outputName = "output name";
    var annotationName = "annotation name";
    var input = [{ id: "input", name: inputName, dataType: boxed_expression_component_1.DataType.Undefined }];
    var output = [{ id: "output", name: outputName, dataType: boxed_expression_component_1.DataType.Undefined }];
    var annotations = [{ id: "annotation", name: annotationName }];
    var inputEntry = "input entry";
    var outputEntry = "output entry";
    var annotation = "annotation";
    var rules = [
      { id: "rule-1", inputEntries: [inputEntry], outputEntries: [outputEntry], annotationEntries: [annotation] },
    ];
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(
            DecisionTableExpression_1.DecisionTableExpression,
            {
              id: "decision-node-id",
              logicType: boxed_expression_component_1.LogicType.DecisionTable,
              input: input,
              output: output,
              annotations: annotations,
              rules: rules,
            },
            void 0
          )
        ).wrapper
      ).wrapper
    ).container;
    expect(
      container.querySelector(".decision-table-expression table thead tr:last-of-type th.input")
    ).toHaveTextContent(inputName);
    expect(
      container.querySelector(".decision-table-expression table thead tr:last-of-type th.output")
    ).toHaveTextContent(outputName);
    expect(
      container.querySelector(".decision-table-expression table thead tr:last-of-type th.annotation")
    ).toHaveTextContent(annotationName);
    expect(container.querySelectorAll(".decision-table-expression table tbody tr td.data-cell")).toHaveLength(3);
    expect(container.querySelectorAll(".decision-table-expression table tbody tr td.data-cell")[0]).toHaveTextContent(
      inputEntry
    );
    expect(container.querySelectorAll(".decision-table-expression table tbody tr td.data-cell")[1]).toHaveTextContent(
      outputEntry
    );
    expect(container.querySelectorAll(".decision-table-expression table tbody tr td.data-cell")[2]).toHaveTextContent(
      annotation
    );
  });
  test("should append a row, with empty values, except for input column, whose value is dash symbol, when user inserts a row below", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var mockedBroadcastDefinition, boxedExpressionEditorGWTService, _a, container, baseElement;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            mockedBroadcastDefinition = jest.fn();
            boxedExpressionEditorGWTService = {
              broadcastDecisionTableExpressionDefinition: function (definition) {
                return mockedBroadcastDefinition(definition);
              },
              notifyUserAction: function () {},
            };
            (_a = (0, react_1.render)(
              (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
                (0, test_utils_1.wrapComponentInContext)(
                  (0, jsx_runtime_1.jsx)(
                    DecisionTableExpression_1.DecisionTableExpression,
                    { id: "decision-node-id", logicType: boxed_expression_component_1.LogicType.DecisionTable },
                    void 0
                  ),
                  boxedExpressionEditorGWTService
                )
              ).wrapper
            )),
              (container = _a.container),
              (baseElement = _a.baseElement);
            return [
              4,
              (0, Table_test_1.openContextMenu)(
                container.querySelector(".decision-table-expression table tbody tr td.counter-cell")
              ),
            ];
          case 1:
            _b.sent();
            return [
              4,
              (0, test_utils_2.act)(function () {
                return __awaiter(void 0, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        react_1.fireEvent.click(
                          baseElement.querySelector(
                            "[data-ouia-component-id='expression-table-handler-menu-Insert below'] button"
                          )
                        );
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
          case 2:
            _b.sent();
            expect(mockedBroadcastDefinition).toHaveBeenLastCalledWith(
              expect.objectContaining({
                rules: [
                  expect.objectContaining({
                    inputEntries: ["-"],
                    outputEntries: [""],
                    annotationEntries: [""],
                  }),
                  expect.objectContaining({
                    inputEntries: ["-"],
                    outputEntries: [""],
                    annotationEntries: [""],
                  }),
                ],
              })
            );
            return [2];
        }
      });
    });
  });
});
//# sourceMappingURL=DecisionTableExpression.test.js.map

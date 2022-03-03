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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("../../__mocks__/ReactWithSupervisor");
var react_1 = require("@testing-library/react");
var test_utils_1 = require("../test-utils");
var ContextExpression_1 = require("@kie-tools/boxed-expression-component/dist/components/ContextExpression");
var boxed_expression_component_1 = require("@kie-tools/boxed-expression-component");
describe("ContextExpression tests", function () {
  var name = "contextName";
  var dataType = boxed_expression_component_1.DataType.Boolean;
  test("should show a table with two rows: two context entries, where last is representing the result", function () {
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(
            ContextExpression_1.ContextExpression,
            { logicType: boxed_expression_component_1.LogicType.Context, name: name, dataType: dataType },
            void 0
          )
        ).wrapper
      ).wrapper
    ).container;
    expect(container.querySelector(".context-expression")).toBeTruthy();
    expect(container.querySelector(".context-expression table")).toBeTruthy();
    expect(container.querySelectorAll(".context-expression table tbody tr")).toHaveLength(2);
    expect(container.querySelector(".context-expression table tbody tr:first-of-type")).toContainHTML("ContextEntry-1");
    expect(container.querySelector(".context-expression table tbody tr:last-of-type")).toContainHTML("result");
  });
  test("should show a table with one row for each passed entry, plus the passed entry result", function () {
    var firstEntryId = "id1";
    var firstEntry = "first entry";
    var firstDataType = boxed_expression_component_1.DataType.Boolean;
    var firstExpression = {
      name: "expressionName",
      dataType: boxed_expression_component_1.DataType.Any,
      logicType: boxed_expression_component_1.LogicType.LiteralExpression,
    };
    var secondEntryId = "id2";
    var secondEntry = "second entry";
    var secondDataType = boxed_expression_component_1.DataType.Date;
    var secondExpression = { name: "anotherName", dataType: boxed_expression_component_1.DataType.Undefined };
    var resultEntry = "result entry";
    var resultDataType = boxed_expression_component_1.DataType.Undefined;
    var contextEntries = [
      {
        entryInfo: {
          id: firstEntryId,
          name: firstEntry,
          dataType: firstDataType,
        },
        entryExpression: firstExpression,
        editInfoPopoverLabel: "Edit entry",
      },
      {
        entryInfo: {
          id: secondEntryId,
          name: secondEntry,
          dataType: secondDataType,
        },
        entryExpression: secondExpression,
        editInfoPopoverLabel: "Edit entry",
      },
    ];
    var result = {
      name: resultEntry,
      dataType: resultDataType,
      expression: {},
    };
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(
            ContextExpression_1.ContextExpression,
            {
              logicType: boxed_expression_component_1.LogicType.Context,
              name: name,
              dataType: dataType,
              contextEntries: contextEntries,
              result: result,
            },
            void 0
          )
        ).wrapper
      ).wrapper
    ).container;
    expect(container.querySelector(".context-expression")).toBeTruthy();
    expect(container.querySelector(".context-expression table")).toBeTruthy();
    expect(container.querySelectorAll(".context-expression table tbody tr")).toHaveLength(3);
    (0, test_utils_1.checkEntryContent)((0, test_utils_1.contextEntry)(container, 1), {
      id: firstEntryId,
      name: firstEntry,
      dataType: firstDataType,
    });
    (0, test_utils_1.checkEntryContent)((0, test_utils_1.contextEntry)(container, 2), {
      id: secondEntryId,
      name: secondEntry,
      dataType: secondDataType,
    });
    (0, test_utils_1.checkEntryContent)((0, test_utils_1.contextEntry)(container, 3), { name: "result", dataType: "" });
    (0, test_utils_1.checkEntryStyle)((0, test_utils_1.contextEntry)(container, 1), "logic-type-selected");
    (0, test_utils_1.checkEntryLogicType)((0, test_utils_1.contextEntry)(container, 1), "literal-expression");
    (0, test_utils_1.checkEntryStyle)((0, test_utils_1.contextEntry)(container, 2), "logic-type-not-present");
    (0, test_utils_1.checkEntryStyle)((0, test_utils_1.contextEntry)(container, 3), "logic-type-not-present");
  });
});
jest.mock("@kie-tools/boxed-expression-component", function () {
  return __assign(__assign({}, jest.requireActual("@kie-tools/boxed-expression-component")), {
    getHandlerConfiguration: jest.fn(),
  });
});
//# sourceMappingURL=ContextExpression.test.js.map

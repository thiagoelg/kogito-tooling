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
var boxed_expression_component_1 = require("@kie-tools/boxed-expression-component");
var InvocationExpression_1 = require("@kie-tools/boxed-expression-component/dist/components/InvocationExpression");
describe("InvocationExpression tests", function () {
  test("should show a table with two levels visible header, with one row and two columns", function () {
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(
            InvocationExpression_1.InvocationExpression,
            { logicType: boxed_expression_component_1.LogicType.Invocation },
            void 0
          )
        ).wrapper
      ).wrapper
    ).container;
    expect(container.querySelector(".invocation-expression")).toBeTruthy();
    expect(container.querySelector(".invocation-expression table")).toBeTruthy();
    expect(container.querySelector(".invocation-expression table thead")).toBeTruthy();
    expect(container.querySelectorAll(".invocation-expression table thead tr")).toHaveLength(2);
    expect(container.querySelectorAll(".invocation-expression table tbody tr")).toHaveLength(1);
    expect(container.querySelectorAll(".invocation-expression table tbody td.data-cell")).toHaveLength(2);
  });
  test("should show a table with an input in the header, representing the invoked function", function () {
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(
            InvocationExpression_1.InvocationExpression,
            { logicType: boxed_expression_component_1.LogicType.Invocation },
            void 0
          )
        ).wrapper
      ).wrapper
    ).container;
    expect(
      container.querySelector(".invocation-expression table thead th .function-definition-container")
    ).toBeTruthy();
    expect(
      container.querySelector(".invocation-expression table thead th .function-definition-container")
    ).toContainHTML(
      '<input class="function-definition pf-u-text-truncate" type="text" placeholder="Enter function" value="">'
    );
  });
  test("should display the value of the passed invoked function", function () {
    var invokedFunction = "Math.max";
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(
            InvocationExpression_1.InvocationExpression,
            { logicType: boxed_expression_component_1.LogicType.Invocation, invokedFunction: invokedFunction },
            void 0
          )
        ).wrapper
      ).wrapper
    ).container;
    expect(container.querySelector(".invocation-expression .function-definition").value).toBe(invokedFunction);
  });
  test("should display a row in the table body, for each given binding entries", function () {
    var firstEntryId = "p1";
    var firstEntryName = "param1";
    var firstEntryDataType = boxed_expression_component_1.DataType.Boolean;
    var firstEntry = {
      entryInfo: { id: firstEntryId, name: firstEntryName, dataType: firstEntryDataType },
      entryExpression: {},
      editInfoPopoverLabel: "Edit parameter",
    };
    var secondEntryId = "p2";
    var secondEntryName = "param2";
    var secondEntryDataType = boxed_expression_component_1.DataType.Any;
    var secondEntry = {
      entryInfo: { id: secondEntryId, name: secondEntryName, dataType: secondEntryDataType },
      entryExpression: {},
      editInfoPopoverLabel: "Edit parameter",
    };
    var bindingEntries = [firstEntry, secondEntry];
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(
            InvocationExpression_1.InvocationExpression,
            { logicType: boxed_expression_component_1.LogicType.Invocation, bindingEntries: bindingEntries },
            void 0
          )
        ).wrapper
      ).wrapper
    ).container;
    expect(container.querySelector(".invocation-expression")).toBeTruthy();
    expect(container.querySelectorAll(".invocation-expression table tbody tr")).toHaveLength(2);
    (0, test_utils_1.checkEntryContent)((0, test_utils_1.contextEntry)(container, 1), firstEntry.entryInfo);
    (0, test_utils_1.checkEntryContent)((0, test_utils_1.contextEntry)(container, 2), secondEntry.entryInfo);
  });
});
jest.mock("@kie-tools/boxed-expression-component", function () {
  return __assign(__assign({}, jest.requireActual("@kie-tools/boxed-expression-component")), {
    getHandlerConfiguration: jest.fn(),
  });
});
//# sourceMappingURL=InvocationExpression.test.js.map

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("../../__mocks__/ReactWithSupervisor");
var react_1 = require("@testing-library/react");
var test_utils_1 = require("../test-utils");
var boxed_expression_component_1 = require("@kie-tools/boxed-expression-component");
var ListExpression_1 = require("@kie-tools/boxed-expression-component/dist/components/ListExpression");
describe("ListExpression tests", function () {
  test("should show a table without header, with one row and one column", function () {
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(
            ListExpression_1.ListExpression,
            { logicType: boxed_expression_component_1.LogicType.List },
            void 0
          )
        ).wrapper
      ).wrapper
    ).container;
    expect(container.querySelector(".list-expression")).toBeTruthy();
    expect(container.querySelector(".list-expression table")).toBeTruthy();
    expect(container.querySelector(".list-expression table thead")).toBeNull();
    expect(container.querySelectorAll(".list-expression table tbody tr")).toHaveLength(1);
    expect(container.querySelectorAll(".list-expression table tbody td.data-cell")).toHaveLength(1);
  });
  test("should have, for its default cell, as default logic type, a literal expression with empty content", function () {
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(
            ListExpression_1.ListExpression,
            { logicType: boxed_expression_component_1.LogicType.List },
            void 0
          )
        ).wrapper
      ).wrapper
    ).container;
    expect(container.querySelector(".list-expression table tbody td.data-cell .literal-expression")).toBeTruthy();
    expect(
      container.querySelector(
        ".list-expression table tbody td.data-cell .literal-expression .literal-expression-body textarea"
      )
    ).toBeEmpty();
  });
  test("should be able to render nested expressions", function () {
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(
            ListExpression_1.ListExpression,
            {
              id: "id1",
              logicType: boxed_expression_component_1.LogicType.List,
              items: [{ logicType: boxed_expression_component_1.LogicType.List, id: "id2" }],
            },
            void 0
          )
        ).wrapper
      ).wrapper
    ).container;
    expect(container.querySelectorAll(".list-expression")).toHaveLength(2);
    expect(container.querySelector(".list-expression .table-component.id1 td.data-cell .list-expression")).toBeTruthy();
    expect(
      container.querySelector(
        ".list-expression .table-component tbody td.data-cell .literal-expression .literal-expression-body textarea"
      )
    ).toBeEmpty();
  });
});
//# sourceMappingURL=ListExpression.test.js.map

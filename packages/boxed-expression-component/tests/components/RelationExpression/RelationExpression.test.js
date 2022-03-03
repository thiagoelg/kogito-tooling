"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var boxed_expression_component_1 = require("@kie-tools/boxed-expression-component");
var react_1 = require("@testing-library/react");
var test_utils_1 = require("../test-utils");
var RelationExpression_1 = require("@kie-tools/boxed-expression-component/dist/components/RelationExpression");
describe("RelationExpression tests", function () {
  test("should render a table element, with one default column and one default row, when no props are passed", function () {
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(
            RelationExpression_1.RelationExpression,
            {
              logicType: boxed_expression_component_1.LogicType.Relation,
              name: "Relation",
              dataType: boxed_expression_component_1.DataType.Undefined,
            },
            void 0
          )
        ).wrapper
      ).wrapper
    ).container;
    expect(container.querySelector(".relation-expression")).toBeTruthy();
    expect(container.querySelectorAll(".relation-expression table thead tr th")).toHaveLength(2);
    expect(container.querySelectorAll(".relation-expression table thead tr th")[1].innerHTML).toContain("column-1");
    expect(container.querySelectorAll(".relation-expression table tbody tr")).toHaveLength(1);
  });
  test("should render a table element, with one column, corresponding to passed prop", function () {
    var columnName = "a column";
    var columnDataType = boxed_expression_component_1.DataType.Date;
    var column = { id: (0, boxed_expression_component_1.generateUuid)(), name: columnName, dataType: columnDataType };
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(
            RelationExpression_1.RelationExpression,
            {
              logicType: boxed_expression_component_1.LogicType.Relation,
              name: "Relation",
              dataType: boxed_expression_component_1.DataType.Undefined,
              columns: [column],
            },
            void 0
          )
        ).wrapper
      ).wrapper
    ).container;
    expect(container.querySelector(".relation-expression")).toBeTruthy();
    expect(container.querySelectorAll(".relation-expression table thead tr th")).toHaveLength(2);
    expect(container.querySelectorAll(".relation-expression table thead tr th")[1].innerHTML).toContain(columnName);
    expect(container.querySelectorAll(".relation-expression table thead tr th")[1].innerHTML).toContain(columnDataType);
  });
  test("should render a table element, with one row, corresponding to passed prop", function () {
    var columnName = "a column";
    var column = {
      id: (0, boxed_expression_component_1.generateUuid)(),
      name: columnName,
      dataType: boxed_expression_component_1.DataType.Date,
    };
    var rowValue = "value";
    var row = { id: "row-id", cells: [rowValue] };
    var container = buildRelationComponent(column, row);
    expect(container.querySelector(".relation-expression")).toBeTruthy();
    expect(container.querySelectorAll(".relation-expression table tbody tr")).toHaveLength(1);
    expect(container.querySelectorAll(".relation-expression table tbody tr td")).toHaveLength(2);
    expect(container.querySelectorAll(".relation-expression table tbody tr td")[1].innerHTML).toContain(rowValue);
  });
  test("should render a table element, where there is just one cell for each column", function () {
    var columnName = "a column";
    var column = {
      id: (0, boxed_expression_component_1.generateUuid)(),
      name: columnName,
      dataType: boxed_expression_component_1.DataType.Date,
    };
    var rowValue = "value";
    var row = { id: "row-id", cells: [rowValue, "another value", "and another one"] };
    var container = buildRelationComponent(column, row);
    expect(container.querySelector(".relation-expression")).toBeTruthy();
    expect(container.querySelectorAll(".relation-expression table tbody tr")).toHaveLength(1);
    expect(container.querySelectorAll(".relation-expression table tbody tr td")).toHaveLength(2);
  });
});
function buildRelationComponent(column, row) {
  var container = (0, react_1.render)(
    (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
      (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
        (0, jsx_runtime_1.jsx)(
          RelationExpression_1.RelationExpression,
          {
            logicType: boxed_expression_component_1.LogicType.Relation,
            name: "Relation",
            dataType: boxed_expression_component_1.DataType.Undefined,
            columns: [column],
            rows: [row],
          },
          void 0
        )
      ).wrapper
    ).wrapper
  ).container;
  return container;
}
//# sourceMappingURL=RelationExpression.test.js.map

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var components_1 = require("@kie-tools/boxed-expression-component/dist/components");
var react_1 = require("@testing-library/react");
var test_utils_1 = require("../test-utils");
var boxed_expression_component_1 = require("@kie-tools/boxed-expression-component");
describe("ExpressionContainer tests", function () {
  test("should render ExpressionContainer component", function () {
    var expression = { name: "Test", dataType: boxed_expression_component_1.DataType.Undefined };
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(components_1.ExpressionContainer, { selectedExpression: expression }, void 0),
          {
            expressionDefinition: expression,
          }
        ).wrapper
      ).wrapper
    ).container;
    expect(container).toMatchSnapshot();
  });
  test("should render expression title, when name prop is passed", function () {
    var expressionTitle = "Test";
    var expression = { name: expressionTitle, dataType: boxed_expression_component_1.DataType.Undefined };
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(components_1.ExpressionContainer, { selectedExpression: expression }, void 0),
          {
            expressionDefinition: expression,
          }
        ).wrapper
      ).wrapper
    ).container;
    expect(container.querySelector(".expression-title")).toBeTruthy();
    expect(container.querySelector(".expression-title").innerHTML).toBe(expressionTitle);
  });
  test("should render expression type, when type prop is passed", function () {
    var expression = {
      name: "Test",
      logicType: boxed_expression_component_1.LogicType.LiteralExpression,
      dataType: boxed_expression_component_1.DataType.Undefined,
    };
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(components_1.ExpressionContainer, { selectedExpression: expression }, void 0),
          {
            expressionDefinition: expression,
          }
        ).wrapper
      ).wrapper
    ).container;
    expect(container.querySelector(".expression-type")).toBeTruthy();
    expect(container.querySelector(".expression-type").innerHTML).toBe(
      "(" + boxed_expression_component_1.LogicType.LiteralExpression + ")"
    );
  });
  test("should render expression type as undefined, when type prop is not passed", function () {
    var expression = { name: "Test", dataType: boxed_expression_component_1.DataType.Undefined };
    var container = (0, react_1.render)(
      (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
        (0, test_utils_1.usingTestingBoxedExpressionProviderContext)(
          (0, jsx_runtime_1.jsx)(components_1.ExpressionContainer, { selectedExpression: expression }, void 0),
          {
            expressionDefinition: expression,
          }
        ).wrapper
      ).wrapper
    ).container;
    expect(container.querySelector(".expression-type")).toBeTruthy();
    expect(container.querySelector(".expression-type").innerHTML).toBe("(&lt;Undefined&gt;)");
  });
});
//# sourceMappingURL=ExpressionContainer.test.js.map

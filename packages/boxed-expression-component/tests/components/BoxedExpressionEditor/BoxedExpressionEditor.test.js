"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var components_1 = require("@kie-tools/boxed-expression-component/dist/components");
var boxed_expression_component_1 = require("@kie-tools/boxed-expression-component");
describe("BoxedExpressionEditor tests", function () {
  test("should render BoxedExpressionEditor component", function () {
    var selectedExpression = { name: "Expression Name", dataType: boxed_expression_component_1.DataType.Undefined };
    var container = (0, react_1.render)(
      (0, jsx_runtime_1.jsx)(
        components_1.BoxedExpressionEditor,
        {
          decisionNodeId: "_00000000-0000-0000-0000-000000000000",
          expressionDefinition: selectedExpression,
          dataTypes: [{ typeRef: "ANY", name: "Any", isCustom: false }],
        },
        void 0
      )
    ).container;
    expect(container).toMatchSnapshot();
  });
});
//# sourceMappingURL=BoxedExpressionEditor.test.js.map

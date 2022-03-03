"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var boxed_expression_component_1 = require("@kie-tools/boxed-expression-component");
describe("BoxedExpressionEditor tests", function () {
  describe("executeIfExpressionDefinitionChanged function", function () {
    test("when prevDef and updatedDef are not equal, functionToExecute gets executed", function () {
      var mockedFunctionToExecute = jest.fn();
      (0, boxed_expression_component_1.executeIfExpressionDefinitionChanged)(
        { name: "1" },
        { name: "2" },
        mockedFunctionToExecute,
        ["name"]
      );
      expect(mockedFunctionToExecute).toHaveBeenCalledTimes(1);
    });
    test("when prevDef and updatedDef are equal, functionToExecute is not executed", function () {
      var mockedFunctionToExecute = jest.fn();
      (0, boxed_expression_component_1.executeIfExpressionDefinitionChanged)(
        { name: "1" },
        { name: "1" },
        mockedFunctionToExecute,
        ["name"]
      );
      expect(mockedFunctionToExecute).toHaveBeenCalledTimes(0);
    });
    test("when prevDef and updatedDef are not equal, but propertiesToCheck contains a field for which they are equal, functionToExecute is not executed", function () {
      var mockedFunctionToExecute = jest.fn();
      (0, boxed_expression_component_1.executeIfExpressionDefinitionChanged)(
        { name: "1", logicType: boxed_expression_component_1.LogicType.Undefined },
        { name: "1", logicType: boxed_expression_component_1.LogicType.LiteralExpression },
        mockedFunctionToExecute,
        ["name"]
      );
      expect(mockedFunctionToExecute).toHaveBeenCalledTimes(0);
    });
    test("when prevDef and updatedDef are not equal and propertiesToCheck is not passed, functionToExecute gets executed", function () {
      var mockedFunctionToExecute = jest.fn();
      (0, boxed_expression_component_1.executeIfExpressionDefinitionChanged)(
        { name: "1" },
        { name: "2" },
        mockedFunctionToExecute
      );
      expect(mockedFunctionToExecute).toHaveBeenCalledTimes(1);
    });
  });
});
//# sourceMappingURL=BoxedExpressionEditor.test.js.map

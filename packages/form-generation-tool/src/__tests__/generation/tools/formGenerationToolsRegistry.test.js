"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tools_1 = require("../../../generation/tools");
var types_1 = require("../../../generation/types");
describe("formGenerationToolsRegistry tests", function () {
  it("Lookup existing tool - patternfly", function () {
    var tool = (0, tools_1.lookupFormGenerationTool)(types_1.FormStyle.PATTERNFLY);
    expect(tool).not.toBeUndefined();
    expect(tool.type).toStrictEqual(types_1.FormStyle.PATTERNFLY);
  });
  it("Lookup wrong tool", function () {
    var toolType = "wrong tool type";
    expect(function () {
      return (0, tools_1.lookupFormGenerationTool)(toolType);
    }).toThrow('Unsupported form type "'.concat(toolType, '"'));
  });
  it("Register tool & lookup", function () {
    var tool = {
      type: "cool new tool",
      generate: jest.fn(),
    };
    (0, tools_1.registerFormGenerationTool)(tool);
    var coolTool = (0, tools_1.lookupFormGenerationTool)(tool.type);
    expect(coolTool).not.toBeUndefined();
    expect(coolTool).toStrictEqual(tool);
    var patternfly = (0, tools_1.lookupFormGenerationTool)(types_1.FormStyle.PATTERNFLY);
    expect(patternfly).not.toBeUndefined();
  });
});
//# sourceMappingURL=formGenerationToolsRegistry.test.js.map

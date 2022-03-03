"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PatternflyFormGenerationTool_1 = require("../../../../../generation/tools/uniforms/patternfly/PatternflyFormGenerationTool");
var mock_1 = require("./mock");
describe("PatternflyFormGenerationTool tests", function () {
  it("Generate", function () {
    var tool = new PatternflyFormGenerationTool_1.PatternflyFormGenerationTool();
    var formAsset = tool.generate({
      name: "ApplyForVisa",
      schema: mock_1.ApplyForVisaSchema,
    });
    expect(formAsset).not.toBeUndefined();
    expect(formAsset.id).toStrictEqual("ApplyForVisa");
    expect(formAsset.assetName).toStrictEqual("ApplyForVisa.tsx");
    expect(formAsset.content).not.toBeUndefined();
    expect(formAsset.content).toContain("const Form__ApplyForVisa");
    expect(formAsset.content).toContain("export default Form__ApplyForVisa;");
    expect(formAsset.config).not.toBeUndefined();
    expect(formAsset.config).toMatchObject(
      new PatternflyFormGenerationTool_1.PatternflyFormConfig(mock_1.ApplyForVisaSchema)
    );
  });
});
//# sourceMappingURL=PatternflyFormGenerationTool.test.js.map

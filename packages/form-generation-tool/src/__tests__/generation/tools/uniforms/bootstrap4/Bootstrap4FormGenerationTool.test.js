"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mock_1 = require("./mock");
var Bootstrap4FormGenerationTool_1 = require("../../../../../generation/tools/uniforms/bootstrap4/Bootstrap4FormGenerationTool");
describe("Bootstrap4FormGenerationTool tests", function () {
  it("Generate", function () {
    var tool = new Bootstrap4FormGenerationTool_1.Bootstrap4FormGenerationTool();
    var formAsset = tool.generate({
      name: "ApplyForVisa",
      schema: mock_1.ApplyForVisaSchema,
    });
    expect(formAsset).not.toBeUndefined();
    expect(formAsset.id).toStrictEqual("ApplyForVisa");
    expect(formAsset.assetName).toStrictEqual("ApplyForVisa.html");
    expect(formAsset.content).not.toBeUndefined();
    expect(formAsset.config).not.toBeUndefined();
    expect(formAsset.config).toMatchObject(
      new Bootstrap4FormGenerationTool_1.Bootstrap4FormConfig(mock_1.ApplyForVisaSchema)
    );
  });
});
//# sourceMappingURL=Bootstrap4FormGenerationTool.test.js.map

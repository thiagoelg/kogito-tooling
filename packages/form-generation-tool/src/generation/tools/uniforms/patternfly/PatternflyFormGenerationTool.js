"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatternflyFormGenerationTool = exports.PatternflyFormConfig = void 0;
var unescape_1 = require("lodash/unescape");
var types_1 = require("../../../types");
var dist_1 = require("@kie-tools/uniforms-patternfly-codegen/dist");
var uniforms_bridge_json_schema_1 = require("uniforms-bridge-json-schema");
var UniformsSchemaUtils_1 = require("../utils/UniformsSchemaUtils");
var PatternflyFormConfig = (function () {
  function PatternflyFormConfig(formSchema) {
    this.resources = {
      styles: {},
      scripts: {},
    };
    this.schema = JSON.stringify(formSchema);
  }
  return PatternflyFormConfig;
})();
exports.PatternflyFormConfig = PatternflyFormConfig;
var PatternflyFormGenerationTool = (function () {
  function PatternflyFormGenerationTool() {
    this.type = types_1.FormStyle.PATTERNFLY;
  }
  PatternflyFormGenerationTool.prototype.generate = function (inputSchema) {
    var uniformsSchema = (0, UniformsSchemaUtils_1.getUniformsSchema)(inputSchema.schema);
    var form = (0, dist_1.renderForm)({
      id: inputSchema.name,
      schema: new uniforms_bridge_json_schema_1.default(uniformsSchema, function () {
        return true;
      }),
      disabled: false,
      placeholder: true,
    });
    return {
      id: inputSchema.name,
      assetName: "".concat(inputSchema.name, ".").concat(types_1.FormAssetType.TSX),
      type: types_1.FormAssetType.TSX,
      content: (0, unescape_1.default)(form),
      config: new PatternflyFormConfig(inputSchema.schema),
    };
  };
  return PatternflyFormGenerationTool;
})();
exports.PatternflyFormGenerationTool = PatternflyFormGenerationTool;
//# sourceMappingURL=PatternflyFormGenerationTool.js.map

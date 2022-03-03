"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bootstrap4FormGenerationTool =
  exports.Bootstrap4FormConfig =
  exports.JQUERY_URL =
  exports.BOOTSTRAP4_JS_URL =
  exports.BOOTSTRAP4_CSS_URL =
    void 0;
var unescape_1 = require("lodash/unescape");
var types_1 = require("../../../types");
var dist_1 = require("@kie-tools/uniforms-bootstrap4-codegen/dist");
var uniforms_bridge_json_schema_1 = require("uniforms-bridge-json-schema");
var UniformsSchemaUtils_1 = require("../utils/UniformsSchemaUtils");
exports.BOOTSTRAP4_CSS_URL = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
exports.BOOTSTRAP4_JS_URL = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js";
exports.JQUERY_URL = "https://code.jquery.com/jquery-3.2.1.slim.min.js";
var Bootstrap4FormConfig = (function () {
  function Bootstrap4FormConfig(formSchema) {
    this.resources = {
      styles: {
        "bootstrap.min.css": exports.BOOTSTRAP4_CSS_URL,
      },
      scripts: {
        "jquery.js": exports.JQUERY_URL,
        "bootstrap.bundle.min.js": exports.BOOTSTRAP4_JS_URL,
      },
    };
    this.schema = JSON.stringify(formSchema);
  }
  return Bootstrap4FormConfig;
})();
exports.Bootstrap4FormConfig = Bootstrap4FormConfig;
var Bootstrap4FormGenerationTool = (function () {
  function Bootstrap4FormGenerationTool() {
    this.type = types_1.FormStyle.BOOTSTRAP;
  }
  Bootstrap4FormGenerationTool.prototype.generate = function (inputSchema) {
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
      assetName: "".concat(inputSchema.name, ".").concat(types_1.FormAssetType.HTML),
      type: types_1.FormAssetType.HTML,
      content: (0, unescape_1.default)(form),
      config: new Bootstrap4FormConfig(inputSchema.schema),
    };
  };
  return Bootstrap4FormGenerationTool;
})();
exports.Bootstrap4FormGenerationTool = Bootstrap4FormGenerationTool;
//# sourceMappingURL=Bootstrap4FormGenerationTool.js.map

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
var ajv_1 = require("ajv");
var uniforms_bridge_json_schema_1 = require("uniforms-bridge-json-schema");
var Validator = (function () {
  function Validator() {
    this.ajv = new ajv_1.default({ allErrors: true, schemaId: "auto", useDefaults: true });
  }
  Validator.prototype.createValidator = function (jsonSchema) {
    var validator = this.ajv.compile(jsonSchema);
    return function (model) {
      validator(JSON.parse(JSON.stringify(model)));
      if (validator.errors && validator.errors.length) {
        return { details: validator.errors };
      }
      return null;
    };
  };
  Validator.prototype.getBridge = function (formSchema) {
    return new uniforms_bridge_json_schema_1.default(formSchema, this.createValidator(formSchema));
  };
  return Validator;
})();
exports.Validator = Validator;
//# sourceMappingURL=Validator.js.map

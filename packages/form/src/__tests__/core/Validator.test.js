"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("../../core");
var uniforms_bridge_json_schema_1 = require("uniforms-bridge-json-schema");
var schema = {
  type: "object",
  properties: {
    name: { type: "string" },
    lastName: { type: "string" },
    birthDate: { format: "date-time", type: "string" },
    contributors: { type: "number", minimum: 1 },
  },
  required: ["name", "lastName"],
};
describe("Validator Tests", function () {
  it("create instance", function () {
    var validator = new core_1.Validator();
    expect(validator).toBeInstanceOf(core_1.Validator);
  });
  describe("create validator", function () {
    it("valid model", function () {
      var model = {
        name: "Kogito",
        lastName: "Tooling",
        birthDate: new Date(),
        contributors: 10,
      };
      var validator = new core_1.Validator();
      var validate = validator.createValidator(schema);
      var errors = validate(model);
      expect(errors).toBeNull();
    });
    it("invalid model - constraint", function () {
      var model = {
        name: "Kogito",
        lastName: "Tooling",
        birthDate: new Date(),
        contributors: 0,
      };
      var validator = new core_1.Validator();
      var validate = validator.createValidator(schema);
      var errors = validate(model);
      expect(errors === null || errors === void 0 ? void 0 : errors.details[0].keyword).toEqual("minimum");
      expect(errors === null || errors === void 0 ? void 0 : errors.details[0].message).toEqual("should be >= 1");
    });
    it("invalid model - format", function () {
      var model = {
        name: "Kogito",
        lastName: "Tooling",
        birthDate: "2000-10-10",
        contributors: 10,
      };
      var validator = new core_1.Validator();
      var validate = validator.createValidator(schema);
      var errors = validate(model);
      expect(errors === null || errors === void 0 ? void 0 : errors.details[0].keyword).toEqual("format");
      expect(errors === null || errors === void 0 ? void 0 : errors.details[0].message).toEqual(
        'should match format "date-time"'
      );
    });
  });
  it("get bridge", function () {
    var validator = new core_1.Validator();
    var bridge = validator.getBridge(schema);
    expect(bridge).toBeInstanceOf(uniforms_bridge_json_schema_1.default);
  });
});
//# sourceMappingURL=Validator.test.js.map

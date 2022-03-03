"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DmnValidator_1 = require("../../dmn/DmnValidator");
var i18n_1 = require("../../dmn/i18n");
var uniforms_1 = require("../../dmn/uniforms");
var schema = {
  type: "object",
  properties: {
    name: { type: "string" },
    lastName: { type: "string" },
    daysAndTimeDuration: { format: "days and time duration", type: "string" },
    yearsAndMonthsDuration: { format: "years and months duration", type: "string" },
  },
  required: ["name", "lastName"],
};
var i18n = i18n_1.dmnFormI18n.getCurrent();
describe("DmnValidator Tests", function () {
  it("create instance", function () {
    var dmnValidator = new DmnValidator_1.DmnValidator(i18n);
    expect(dmnValidator).toBeInstanceOf(DmnValidator_1.DmnValidator);
  });
  describe("create validator", function () {
    it("valid model", function () {
      var model = {
        name: "Kogito",
        lastName: "Tooling",
        daysAndTimeDuration: "P1D",
        yearsAndMonthsDuration: "P1Y",
      };
      var validator = new DmnValidator_1.DmnValidator(i18n);
      var validate = validator.createValidator(schema);
      var errors = validate(model);
      expect(errors).toBeNull();
    });
    it("invalid model - constraint", function () {
      var model = {
        name: "Kogito",
        lastName: "Tooling",
        daysAndTimeDuration: "P1H",
      };
      var validator = new DmnValidator_1.DmnValidator(i18n);
      var validate = validator.createValidator(schema);
      var errors = validate(model);
      expect(errors === null || errors === void 0 ? void 0 : errors.details[0].keyword).toEqual("format");
      expect(errors === null || errors === void 0 ? void 0 : errors.details[0].message).toEqual(
        "should match format P1D(ays)T2H(ours)3M(inutes)1S(econds)"
      );
    });
    it("invalid model - format", function () {
      var model = {
        name: "Kogito",
        lastName: "Tooling",
        yearsAndMonthsDuration: "1M",
      };
      var validator = new DmnValidator_1.DmnValidator(i18n);
      var validate = validator.createValidator(schema);
      var errors = validate(model);
      expect(errors === null || errors === void 0 ? void 0 : errors.details[0].keyword).toEqual("format");
      expect(errors === null || errors === void 0 ? void 0 : errors.details[0].message).toEqual(
        "should match format P1Y(ears)2M(onths)"
      );
    });
  });
  it("get bridge", function () {
    var validator = new DmnValidator_1.DmnValidator(i18n);
    var bridge = validator.getBridge(schema);
    expect(bridge).toBeInstanceOf(uniforms_1.DmnFormJsonSchemaBridge);
  });
});
//# sourceMappingURL=DmnValidator.test.js.map

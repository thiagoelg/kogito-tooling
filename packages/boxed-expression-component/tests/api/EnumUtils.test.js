"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var boxed_expression_component_1 = require("@kie-tools/boxed-expression-component");
describe("EnumUtils tests", function () {
  test("given an enum value, it should return its key", function () {
    var Enum;
    (function (Enum) {
      Enum["OneKey"] = "val";
      Enum["AnotherKey"] = "anotherVal";
    })(Enum || (Enum = {}));
    expect((0, boxed_expression_component_1.getEnumKeyByEnumValue)(Enum, "val")).toBe("OneKey");
  });
  test("given an enum, where multiple keys have the same value, it should return one of its keys", function () {
    var Enum;
    (function (Enum) {
      Enum["AnotherKey"] = "val";
      Enum["OneKey"] = "val";
    })(Enum || (Enum = {}));
    expect((0, boxed_expression_component_1.getEnumKeyByEnumValue)(Enum, "val")).toBe("AnotherKey");
  });
  test("given an enum, where no key has the passed value, it should return null", function () {
    var Enum;
    (function (Enum) {
      Enum["AnotherKey"] = "val";
      Enum["OneKey"] = "another";
    })(Enum || (Enum = {}));
    expect((0, boxed_expression_component_1.getEnumKeyByEnumValue)(Enum, "not present")).toBeNull();
  });
});
//# sourceMappingURL=EnumUtils.test.js.map

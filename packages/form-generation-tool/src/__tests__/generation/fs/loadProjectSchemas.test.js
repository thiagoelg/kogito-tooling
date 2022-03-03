"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("../../../generation/fs");
describe("loadProjectSchemas tests", function () {
  it("Load project without schemas", function () {
    expect((0, fs_1.loadProjectSchemas)("".concat(__dirname, "/resources/empty"))).toHaveLength(0);
  });
  it("Load project with schemas", function () {
    var schemas = (0, fs_1.loadProjectSchemas)("".concat(__dirname, "/resources/full"), "schemas");
    expect(schemas).toHaveLength(2);
    expect(schemas[0].name).toBe("travels_ApplyForVisa");
    expect(schemas[1].name).toBe("travels_ConfirmTravel");
  });
});
//# sourceMappingURL=loadProjectSchemas.test.js.map

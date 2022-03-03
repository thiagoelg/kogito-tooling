"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lookupFormGenerationTool = exports.registerFormGenerationTool = void 0;
var formGenerationToolRegistry_1 = require("./formGenerationToolRegistry");
Object.defineProperty(exports, "registerFormGenerationTool", {
  enumerable: true,
  get: function () {
    return formGenerationToolRegistry_1.registerFormGenerationTool;
  },
});
Object.defineProperty(exports, "lookupFormGenerationTool", {
  enumerable: true,
  get: function () {
    return formGenerationToolRegistry_1.lookupFormGenerationTool;
  },
});
//# sourceMappingURL=index.js.map

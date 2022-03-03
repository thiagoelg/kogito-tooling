"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lookupFormGenerationTool = exports.registerFormGenerationTool = void 0;
var PatternflyFormGenerationTool_1 = require("./uniforms/patternfly/PatternflyFormGenerationTool");
var Bootstrap4FormGenerationTool_1 = require("./uniforms/bootstrap4/Bootstrap4FormGenerationTool");
var toolsRegistry = new Map();
function registerFormGenerationTool(formGenerationTool) {
  toolsRegistry.set(formGenerationTool.type, formGenerationTool);
}
exports.registerFormGenerationTool = registerFormGenerationTool;
registerFormGenerationTool(new PatternflyFormGenerationTool_1.PatternflyFormGenerationTool());
registerFormGenerationTool(new Bootstrap4FormGenerationTool_1.Bootstrap4FormGenerationTool());
function lookupFormGenerationTool(type) {
  var tool = toolsRegistry.get(type);
  if (tool) {
    return tool;
  }
  throw new Error('Unsupported form type "'.concat(type, '"'));
}
exports.lookupFormGenerationTool = lookupFormGenerationTool;
//# sourceMappingURL=formGenerationToolRegistry.js.map

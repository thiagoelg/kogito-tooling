"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateForms = void 0;
var tools_1 = require("./tools");
var fs_1 = require("./fs");
function generateForms(_a) {
  var path = _a.path,
    type = _a.type,
    overwrite = _a.overwrite;
  console.log("\nStarting Form generation:");
  try {
    var tool_1 = (0, tools_1.lookupFormGenerationTool)(type);
    var forms = (0, fs_1.loadProjectSchemas)(path);
    if (forms.length === 0) {
      console.log("\nCouldn't find any form schema in \"".concat(path, '", check if your project is already built.'));
      return;
    }
    console.log("\nFound ".concat(forms.length, " schemas"));
    forms.forEach(function (form) {
      try {
        console.log('\nGenerating form "'.concat(form.name, '"'));
        var output = tool_1.generate(form);
        (0, fs_1.storeFormAsset)(output, path, overwrite);
        console.log('Successfully generated form "'.concat(output.assetName, '"'));
      } catch (err) {
        console.log('Cannot generate form "'.concat(form.name, '": '), err.message);
      }
    });
  } catch (err) {
    console.log("Error during form generation:");
    console.log(err.message);
  }
}
exports.generateForms = generateForms;
//# sourceMappingURL=formGenerationCommand.js.map

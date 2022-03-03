"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("underscore");
var fs = require("fs");
var DmnEditorResources_1 = require("../dmn/DmnEditorResources");
var BpmnEditorResources_1 = require("../bpmn/BpmnEditorResources");
function main() {
  var editorsResources = [
    new DmnEditorResources_1.DmnEditorResources(),
    new BpmnEditorResources_1.BpmnEditorResources(),
  ];
  editorsResources.forEach(function (editorResources) {
    var template = _.template(fs.readFileSync(editorResources.getTemplatePath()).toString());
    var result = template({
      editorResources: editorResources.get({
        resourcesPathPrefix: editorResources.getEditorResourcesPath(),
      }),
    });
    fs.writeFileSync(editorResources.getHtmlOutputPath(), result);
  });
}
main();
//# sourceMappingURL=preprocessor.js.map

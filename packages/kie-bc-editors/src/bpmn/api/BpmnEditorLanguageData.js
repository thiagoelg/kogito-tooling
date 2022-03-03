"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBpmnLanguageData = void 0;
var common_1 = require("../../common");
function getBpmnLanguageData(resourcesPathPrefix) {
  return {
    type: "gwt",
    editorId: common_1.editors.bpmn.id,
    gwtModuleName: common_1.editors.bpmn.name,
    resources: [
      {
        type: "css",
        paths: ["".concat(resourcesPathPrefix, "/").concat(common_1.editors.bpmn.name, "/css/patternfly.min.css")],
      },
      {
        type: "js",
        paths: [
          ""
            .concat(resourcesPathPrefix, "/")
            .concat(common_1.editors.bpmn.name, "/")
            .concat(common_1.editors.bpmn.name, ".nocache.js"),
        ],
      },
    ],
  };
}
exports.getBpmnLanguageData = getBpmnLanguageData;
//# sourceMappingURL=BpmnEditorLanguageData.js.map

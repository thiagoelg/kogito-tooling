"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSceSimLanguageData = void 0;
var common_1 = require("../../common");
function getSceSimLanguageData(resourcesPathPrefix) {
  return {
    type: "gwt",
    editorId: common_1.editors.scesim.id,
    gwtModuleName: common_1.editors.scesim.name,
    resources: [
      {
        type: "css",
        paths: ["".concat(resourcesPathPrefix, "/").concat(common_1.editors.scesim.name, "/css/patternfly.min.css")],
      },
      {
        type: "js",
        paths: [
          "".concat(resourcesPathPrefix, "/model/Jsonix-all.js"),
          "".concat(resourcesPathPrefix, "/model/DC.js"),
          "".concat(resourcesPathPrefix, "/model/DI.js"),
          "".concat(resourcesPathPrefix, "/model/DMNDI12.js"),
          "".concat(resourcesPathPrefix, "/model/DMN12.js"),
          "".concat(resourcesPathPrefix, "/model/KIE.js"),
          "".concat(resourcesPathPrefix, "/model/MainJs.js"),
          "".concat(resourcesPathPrefix, "/model/SCESIM.js"),
          "".concat(resourcesPathPrefix, "/model/SCESIMMainJs.js"),
          ""
            .concat(resourcesPathPrefix, "/")
            .concat(common_1.editors.scesim.name, "/")
            .concat(common_1.editors.scesim.name, ".nocache.js"),
        ],
      },
    ],
  };
}
exports.getSceSimLanguageData = getSceSimLanguageData;
//# sourceMappingURL=SceSimEditorLanguageData.js.map

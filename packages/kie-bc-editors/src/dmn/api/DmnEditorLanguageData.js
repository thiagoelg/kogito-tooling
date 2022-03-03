"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDmnLanguageData = void 0;
var common_1 = require("../../common");
function getDmnLanguageData(resourcesPathPrefix) {
  return {
    type: "gwt",
    editorId: common_1.editors.dmn.id,
    gwtModuleName: common_1.editors.dmn.name,
    resources: [
      {
        type: "css",
        paths: ["".concat(resourcesPathPrefix, "/").concat(common_1.editors.dmn.name, "/css/patternfly.min.css")],
      },
      {
        type: "js",
        paths: [
          "".concat(resourcesPathPrefix, "/kogito-editors-js/dmn-loader.js"),
          "".concat(resourcesPathPrefix, "/model/Jsonix-all.js"),
          "".concat(resourcesPathPrefix, "/model/DC.js"),
          "".concat(resourcesPathPrefix, "/model/DI.js"),
          "".concat(resourcesPathPrefix, "/model/DMNDI12.js"),
          "".concat(resourcesPathPrefix, "/model/DMN12.js"),
          "".concat(resourcesPathPrefix, "/model/KIE.js"),
          "".concat(resourcesPathPrefix, "/model/MainJs.js"),
          ""
            .concat(resourcesPathPrefix, "/")
            .concat(common_1.editors.dmn.name, "/")
            .concat(common_1.editors.dmn.name, ".nocache.js"),
        ],
      },
    ],
  };
}
exports.getDmnLanguageData = getDmnLanguageData;
//# sourceMappingURL=DmnEditorLanguageData.js.map

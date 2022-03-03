"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EditorEnvelope = require("@kie-tools-core/editor/dist/envelope");
var pmml_editor_1 = require("@kie-tools/pmml-editor");
EditorEnvelope.init({
  container: document.getElementById("envelope-app"),
  bus: {
    postMessage: function (message, targetOrigin, _) {
      return window.parent.postMessage(message, "*", _);
    },
  },
  editorFactory: new pmml_editor_1.PMMLEditorFactory(),
});
//# sourceMappingURL=PMMLEditorEnvelopeApp.js.map

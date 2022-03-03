"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EditorEnvelope = require("@kie-tools-core/editor/dist/envelope");
var envelope_1 = require("@kie-tools/kie-bc-editors/dist/dmn/envelope");
EditorEnvelope.init({
  container: document.getElementById("envelope-app"),
  bus: {
    postMessage: function (message, targetOrigin, transfer) {
      return window.parent.postMessage(message, "*", transfer);
    },
  },
  editorFactory: new envelope_1.DmnEditorFactory({ shouldLoadResourcesDynamically: true }),
});
//# sourceMappingURL=dmn-editor.js.map

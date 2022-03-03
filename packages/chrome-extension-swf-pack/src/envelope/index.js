"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serverless_workflow_editor_1 = require("@kie-tools/serverless-workflow-editor");
var EditorEnvelope = require("@kie-tools-core/editor/dist/envelope");
EditorEnvelope.init({
  container: document.getElementById("envelope-app"),
  bus: {
    postMessage: function (message, targetOrigin, _) {
      return window.parent.postMessage(message, targetOrigin, _);
    },
  },
  editorFactory: new serverless_workflow_editor_1.ServerlessWorkflowEditorFactory(),
});
//# sourceMappingURL=index.js.map

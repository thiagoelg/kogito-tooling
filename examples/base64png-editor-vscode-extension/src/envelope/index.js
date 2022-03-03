"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EditorEnvelope = require("@kie-tools-core/editor/dist/envelope");
var base64png_editor_1 = require("@kie-tools-examples/base64png-editor");
EditorEnvelope.init({
  container: document.getElementById("envelope-app"),
  bus: acquireVsCodeApi(),
  editorFactory: new base64png_editor_1.Base64PngEditorFactory(),
});
//# sourceMappingURL=index.js.map

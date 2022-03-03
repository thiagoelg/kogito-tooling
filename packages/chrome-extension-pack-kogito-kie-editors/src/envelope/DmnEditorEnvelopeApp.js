"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EditorEnvelope = require("@kie-tools-core/editor/dist/envelope");
var envelope_1 = require("@kie-tools/kie-bc-editors/dist/dmn/envelope");
EditorEnvelope.initCustom({
  container: document.getElementById("envelope-app"),
  bus: {
    postMessage: function (message, targetOrigin, _) {
      return window.parent.postMessage(message, targetOrigin, _);
    },
  },
  apiImplFactory: {
    create: function (args) {
      return new envelope_1.DmnEditorEnvelopeApiImpl(args, { shouldLoadResourcesDynamically: true });
    },
  },
});
//# sourceMappingURL=DmnEditorEnvelopeApp.js.map

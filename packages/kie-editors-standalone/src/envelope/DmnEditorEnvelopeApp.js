"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EditorEnvelope = require("@kie-tools-core/editor/dist/envelope");
var envelope_1 = require("@kie-tools/kie-bc-editors/dist/dmn/envelope");
var initEnvelope = function () {
  var container = document.getElementById("envelope-app");
  var removeHrefIfNecessary = function (link) {
    if (link.getAttribute("href") === "#") {
      link.setAttribute("href", "javascript:void(0);");
    }
  };
  var mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node instanceof HTMLAnchorElement) {
          removeHrefIfNecessary(node);
        } else if (node instanceof Element) {
          Array.from(node.getElementsByTagName("a")).forEach(removeHrefIfNecessary);
        }
      });
    });
  });
  mutationObserver.observe(document.body, { childList: true, subtree: true });
  EditorEnvelope.initCustom({
    container: container,
    bus: {
      postMessage: function (message, targetOrigin, _) {
        return window.parent.postMessage(message, targetOrigin, _);
      },
    },
    apiImplFactory: {
      create: function (args) {
        return new envelope_1.DmnEditorEnvelopeApiImpl(args, { shouldLoadResourcesDynamically: false });
      },
    },
  });
};
if (document.readyState !== "loading") {
  initEnvelope();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initEnvelope();
  });
}
//# sourceMappingURL=DmnEditorEnvelopeApp.js.map

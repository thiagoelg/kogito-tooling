"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chrome_extension_swf_1 = require("@kie-tools-core/chrome-extension-swf");
var api_1 = require("@kie-tools-core/editor/dist/api");
var ChromeRouter_1 = require("./ChromeRouter");
var resourcesPathPrefix = new ChromeRouter_1.ChromeRouter().getResourcesPathPrefix();
(0, chrome_extension_swf_1.startExtension)({
  name: "Kogito :: Serverless Workflow Extension",
  imageUris: {
    kie: chrome.extension.getURL("/resources/kie_icon_rgb_fullcolor_default.svg"),
    serverlessWorkflow: chrome.extension.getURL("/resources/sw-logo-transparent.png"),
  },
  editorEnvelopeLocator: new api_1.EditorEnvelopeLocator(window.location.origin, [
    new api_1.EnvelopeMapping(
      "sw",
      "**/*.sw.+(json|yml|yaml)",
      "".concat(resourcesPathPrefix, "/"),
      "".concat(resourcesPathPrefix, "/envelope/index.html")
    ),
  ]),
});
//# sourceMappingURL=contentscript.js.map

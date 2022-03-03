"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChromeRouter_1 = require("./ChromeRouter");
var chrome_extension_1 = require("@kie-tools-core/chrome-extension");
var api_1 = require("@kie-tools-core/editor/dist/api");
var resourcesPathPrefix = new ChromeRouter_1.ChromeRouter().getResourcesPathPrefix();
(0, chrome_extension_1.startExtension)({
  name: "Kogito :: BPMN and DMN editors",
  extensionIconUrl: chrome.extension.getURL("/resources/kie_icon_rgb_fullcolor_default.svg"),
  githubAuthTokenCookieName: "github-oauth-token-kie-editors",
  externalEditorManager: {
    name: "KIE Sandbox",
    getImportRepoUrl: function (repoUrl) {
      return "".concat(process.env.WEBPACK_REPLACE__onlineEditor_url, "/#/import?url=").concat(repoUrl);
    },
  },
  editorEnvelopeLocator: new api_1.EditorEnvelopeLocator(window.location.origin, [
    new api_1.EnvelopeMapping(
      "bpmn",
      "**/*.bpmn?(2)",
      "".concat(resourcesPathPrefix, "/bpmn"),
      "".concat(resourcesPathPrefix, "/bpmn-envelope.html")
    ),
    new api_1.EnvelopeMapping(
      "dmn",
      "**/*.dmn",
      "".concat(resourcesPathPrefix, "/dmn"),
      "".concat(resourcesPathPrefix, "/dmn-envelope.html")
    ),
    new api_1.EnvelopeMapping(
      "scesim",
      "**/*.scesim",
      "".concat(resourcesPathPrefix, "/scesim"),
      "".concat(resourcesPathPrefix, "/scesim-envelope.html")
    ),
  ]),
});
//# sourceMappingURL=github-content-script.js.map

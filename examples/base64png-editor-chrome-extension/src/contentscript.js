"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chrome_extension_1 = require("@kie-tools-core/chrome-extension");
var api_1 = require("@kie-tools-core/editor/dist/api");
var resourcesPathPrefix = process.env["WEBPACK_REPLACE__targetOrigin"];
(0, chrome_extension_1.startExtension)({
  name: "Kogito Base64 PNG React Editor",
  extensionIconUrl: chrome.extension.getURL("/resources/kie_icon_rgb_fullcolor_default.svg"),
  githubAuthTokenCookieName: "github-oauth-token-base64-editors",
  editorEnvelopeLocator: new api_1.EditorEnvelopeLocator(window.location.origin, [
    new api_1.EnvelopeMapping(
      "base64png",
      "**/*.base64png",
      "".concat(resourcesPathPrefix, "/dist/"),
      "".concat(resourcesPathPrefix, "/dist/envelope/index.html")
    ),
  ]),
});
//# sourceMappingURL=contentscript.js.map

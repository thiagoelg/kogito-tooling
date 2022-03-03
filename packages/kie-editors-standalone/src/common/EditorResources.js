"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEditorResources = exports.FONT_ATTRIBUTES = void 0;
var fs = require("fs");
exports.FONT_ATTRIBUTES = new Map([
  ["ttf", { mimeType: "font/ttf", format: "truetype" }],
  ["woff", { mimeType: "font/woff", format: "woff" }],
  ["woff2", { mimeType: "font/woff2", format: "woff2" }],
  ["eot", { mimeType: "application/vnd.ms-fontobject", format: "embedded-opentype" }],
  ["svg", { mimeType: "image/svg+xml", format: "svg" }],
]);
var BaseEditorResources = (function () {
  function BaseEditorResources() {}
  BaseEditorResources.prototype.createResource = function (resource, escapeCharacters) {
    var _a, _b;
    var content = fs.readFileSync(resource.path).toString();
    if (escapeCharacters) {
      escapeCharacters.forEach(function (character) {
        content = content.replace(new RegExp("[" + character.replace(/[\\]/g, "\\\\") + "]", "gi"), "\\" + character);
      });
    }
    return {
      path: resource.path,
      content:
        ((_a = resource.prefix) !== null && _a !== void 0 ? _a : "") +
        content +
        ((_b = resource.suffix) !== null && _b !== void 0 ? _b : ""),
    };
  };
  BaseEditorResources.prototype.createFontSource = function (path) {
    var fontAttributes = exports.FONT_ATTRIBUTES.get(path.split(".").pop());
    return {
      mimeType: fontAttributes.mimeType,
      content: this.getBase64FromFile(path),
      format: fontAttributes.format,
    };
  };
  BaseEditorResources.prototype.getBase64FromFile = function (path) {
    return Buffer.from(fs.readFileSync(path)).toString("base64");
  };
  return BaseEditorResources;
})();
exports.BaseEditorResources = BaseEditorResources;
//# sourceMappingURL=EditorResources.js.map

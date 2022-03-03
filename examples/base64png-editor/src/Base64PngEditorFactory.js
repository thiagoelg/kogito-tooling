"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base64PngEditorFactory = void 0;
var Base64PngEditorInterface_1 = require("./Base64PngEditorInterface");
var Base64PngEditorFactory = (function () {
  function Base64PngEditorFactory() {}
  Base64PngEditorFactory.prototype.supports = function (fileExtension) {
    return fileExtension === "base64png";
  };
  Base64PngEditorFactory.prototype.createEditor = function (envelopeContext, initArgs) {
    return Promise.resolve(new Base64PngEditorInterface_1.Base64PngEditorInterface(envelopeContext, initArgs));
  };
  return Base64PngEditorFactory;
})();
exports.Base64PngEditorFactory = Base64PngEditorFactory;
//# sourceMappingURL=Base64PngEditorFactory.js.map

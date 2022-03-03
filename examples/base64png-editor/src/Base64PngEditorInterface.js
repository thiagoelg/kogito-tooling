"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base64PngEditorInterface = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var Base64PngEditor_1 = require("./Base64PngEditor");
var Base64PngEditorInterface = (function () {
  function Base64PngEditorInterface(envelopeContext, initArgs) {
    this.envelopeContext = envelopeContext;
    this.initArgs = initArgs;
    this.af_isReact = true;
    this.editorRef = React.createRef();
  }
  Base64PngEditorInterface.prototype.getContent = function () {
    return this.editorRef.current.getContent();
  };
  Base64PngEditorInterface.prototype.getElementPosition = function (selector) {
    return this.editorRef.current.getElementPosition(selector);
  };
  Base64PngEditorInterface.prototype.setContent = function (path, content) {
    return this.editorRef.current.setContent(path, content);
  };
  Base64PngEditorInterface.prototype.getPreview = function () {
    return this.editorRef.current.getPreview();
  };
  Base64PngEditorInterface.prototype.undo = function () {
    return this.editorRef.current.undo();
  };
  Base64PngEditorInterface.prototype.redo = function () {
    return this.editorRef.current.redo();
  };
  Base64PngEditorInterface.prototype.validate = function () {
    return this.editorRef.current.validate();
  };
  Base64PngEditorInterface.prototype.af_componentRoot = function () {
    return (0, jsx_runtime_1.jsx)(
      Base64PngEditor_1.Base64PngEditor,
      { ref: this.editorRef, envelopeContext: this.envelopeContext },
      void 0
    );
  };
  return Base64PngEditorInterface;
})();
exports.Base64PngEditorInterface = Base64PngEditorInterface;
//# sourceMappingURL=Base64PngEditorInterface.js.map

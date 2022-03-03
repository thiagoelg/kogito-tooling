"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeelEditorService = void 0;
var Monaco = require("@kie-tools-core/monaco-editor");
var _1 = require(".");
var FeelEditorService = (function () {
  function FeelEditorService() {}
  FeelEditorService.getEditorBuilder = function (suggestionProvider) {
    if (this.getServiceInstance() === undefined) {
      (0, _1.initializeFeelLanguage)();
      (0, _1.initializeMonacoTheme)();
      (0, _1.initializeFeelTokensProvider)();
      (0, _1.initializeFeelCompletionItemProvider)(suggestionProvider);
      this.setServiceInstance(new FeelEditorService());
    }
    return this.getServiceInstance();
  };
  FeelEditorService.setServiceInstance = function (editor) {
    window.__KIE__MONACO__EDITOR__ = editor;
  };
  FeelEditorService.getServiceInstance = function () {
    return window.__KIE__MONACO__EDITOR__;
  };
  FeelEditorService.getStandaloneEditor = function () {
    return this.getEditorBuilder().standaloneEditor;
  };
  FeelEditorService.dispose = function () {
    var _a;
    (_a = this.getEditorBuilder().standaloneEditor) === null || _a === void 0 ? void 0 : _a.dispose();
    this.getEditorBuilder().standaloneEditor = undefined;
  };
  FeelEditorService.isInitialized = function () {
    return this.getEditorBuilder().standaloneEditor !== undefined;
  };
  FeelEditorService.prototype.withDomElement = function (domElement) {
    this.domElement = domElement;
    return this;
  };
  FeelEditorService.prototype.withOnChange = function (onChange) {
    this.onChange = onChange;
    return this;
  };
  FeelEditorService.prototype.withOnKeyDown = function (onKeyDown) {
    this.onKeyDown = onKeyDown;
    return this;
  };
  FeelEditorService.prototype.withOnBlur = function (onBlur) {
    this.onBlur = onBlur;
    return this;
  };
  FeelEditorService.prototype.withOptions = function (options) {
    this.options = options;
    return this;
  };
  FeelEditorService.prototype.createEditor = function () {
    this.dispose();
    return this.createStandaloneEditor();
  };
  FeelEditorService.prototype.colorize = function (value) {
    this.firstSetup();
    return Monaco.editor.colorize(value, _1.MONACO_FEEL_LANGUAGE, {});
  };
  FeelEditorService.prototype.firstSetup = function () {
    if (!FeelEditorService.isInitialized()) {
      this.createEditor();
      this.dispose();
    }
  };
  FeelEditorService.prototype.dispose = function () {
    var _a;
    (_a = this.standaloneEditor) === null || _a === void 0 ? void 0 : _a.dispose();
  };
  FeelEditorService.prototype.getValue = function () {
    var _a;
    return ((_a = this.standaloneEditor) === null || _a === void 0 ? void 0 : _a.getValue()) || "";
  };
  FeelEditorService.prototype.createStandaloneEditor = function () {
    if (!this.domElement) {
      throw new Error("FEEL editor cannot be created without a DOM element.");
    }
    var element = this.domElement;
    var config = (0, _1.feelDefaultConfig)(this.options);
    this.standaloneEditor = Monaco.editor.create(element, config);
    this.setupOnChange();
    this.setupOnBlur();
    this.setupOnKeyDown();
    return this.standaloneEditor;
  };
  FeelEditorService.prototype.setupOnChange = function () {
    var _this = this;
    var _a;
    if (!this.onChange) {
      return;
    }
    (_a = this.standaloneEditor) === null || _a === void 0
      ? void 0
      : _a.onDidChangeModelContent(function (event) {
          var value = _this.getValue();
          var colorize = _this.colorize(value);
          colorize.then(function (colorizedValue) {
            _this.onChange(event, value, colorizedValue);
          });
        });
  };
  FeelEditorService.prototype.setupOnBlur = function () {
    var _this = this;
    var _a;
    if (!this.onBlur) {
      return;
    }
    (_a = this.standaloneEditor) === null || _a === void 0
      ? void 0
      : _a.onDidBlurEditorText(function () {
          _this.onBlur(_this.getValue());
        });
  };
  FeelEditorService.prototype.setupOnKeyDown = function () {
    var _this = this;
    var _a;
    if (!this.onKeyDown) {
      return;
    }
    (_a = this.standaloneEditor) === null || _a === void 0
      ? void 0
      : _a.onKeyDown(function (e) {
          _this.onKeyDown(e, _this.getValue());
        });
  };
  return FeelEditorService;
})();
exports.FeelEditorService = FeelEditorService;
//# sourceMappingURL=FeelEditorService.js.map

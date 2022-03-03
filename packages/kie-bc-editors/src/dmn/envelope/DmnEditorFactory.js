"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmnEditorFactory = void 0;
var common_1 = require("../../common");
var api_1 = require("../api");
var DmnEditor_1 = require("./DmnEditor");
var pmml_editor_marshaller_1 = require("@kie-tools/pmml-editor-marshaller");
var DmnEditorFactory = (function () {
  function DmnEditorFactory(gwtEditorEnvelopeConfig) {
    this.gwtEditorEnvelopeConfig = gwtEditorEnvelopeConfig;
  }
  DmnEditorFactory.prototype.createEditor = function (ctx, initArgs) {
    var _a;
    window.envelope = __assign(__assign({}, (_a = window.envelope) !== null && _a !== void 0 ? _a : {}), {
      pmmlEditorMarshallerService: new pmml_editor_marshaller_1.PMMLEditorMarshallerService(),
    });
    var languageData = (0, api_1.getDmnLanguageData)(initArgs.resourcesPathPrefix);
    var factory = new common_1.GwtEditorWrapperFactory(
      languageData,
      function (self) {
        return new DmnEditor_1.DmnEditorImpl(
          languageData.editorId,
          self.gwtAppFormerApi.getEditor(languageData.editorId),
          ctx.channelApi,
          self.xmlFormatter,
          self.gwtStateControlService,
          self.kieBcEditorsI18n
        );
      },
      this.gwtEditorEnvelopeConfig
    );
    return factory.createEditor(ctx, initArgs);
  };
  return DmnEditorFactory;
})();
exports.DmnEditorFactory = DmnEditorFactory;
//# sourceMappingURL=DmnEditorFactory.js.map

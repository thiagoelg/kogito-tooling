"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceSimEditorFactory = void 0;
var SceSimEditor_1 = require("./SceSimEditor");
var api_1 = require("../api");
var common_1 = require("../../common");
var SceSimEditorFactory = (function () {
  function SceSimEditorFactory(gwtEditorEnvelopeConfig) {
    this.gwtEditorEnvelopeConfig = gwtEditorEnvelopeConfig;
  }
  SceSimEditorFactory.prototype.createEditor = function (ctx, initArgs) {
    var languageData = (0, api_1.getSceSimLanguageData)(initArgs.resourcesPathPrefix);
    var factory = new common_1.GwtEditorWrapperFactory(
      languageData,
      function (self) {
        return new SceSimEditor_1.SceSimEditorImpl(
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
  return SceSimEditorFactory;
})();
exports.SceSimEditorFactory = SceSimEditorFactory;
//# sourceMappingURL=SceSimEditorFactory.js.map

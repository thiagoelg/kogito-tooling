"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpmnEditorFactory = void 0;
var BpmnEditor_1 = require("./BpmnEditor");
var api_1 = require("../api");
var common_1 = require("../../common");
var BpmnEditorFactory = (function () {
  function BpmnEditorFactory(gwtEditorEnvelopeConfig) {
    this.gwtEditorEnvelopeConfig = gwtEditorEnvelopeConfig;
  }
  BpmnEditorFactory.prototype.createEditor = function (ctx, initArgs) {
    var languageData = (0, api_1.getBpmnLanguageData)(initArgs.resourcesPathPrefix);
    var factory = new common_1.GwtEditorWrapperFactory(
      languageData,
      function (self) {
        return new BpmnEditor_1.BpmnEditorImpl(
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
  return BpmnEditorFactory;
})();
exports.BpmnEditorFactory = BpmnEditorFactory;
//# sourceMappingURL=BpmnEditorFactory.js.map

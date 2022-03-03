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
exports.VsCodeBpmnEditorFactory = void 0;
var BpmnEditorFactory_1 = require("../BpmnEditorFactory");
var JavaCodeCompletionService = (function () {
  function JavaCodeCompletionService(envelopeContext) {
    this.envelopeContext = envelopeContext;
  }
  JavaCodeCompletionService.prototype.getAccessors = function (fqcn, query) {
    return this.envelopeContext.channelApi.requests.kogitoJavaCodeCompletion__getAccessors(fqcn, query);
  };
  JavaCodeCompletionService.prototype.getClasses = function (query) {
    return this.envelopeContext.channelApi.requests.kogitoJavaCodeCompletion__getClasses(query);
  };
  JavaCodeCompletionService.prototype.isLanguageServerAvailable = function () {
    return this.envelopeContext.channelApi.requests.kogitoJavaCodeCompletion__isLanguageServerAvailable();
  };
  return JavaCodeCompletionService;
})();
var VsCodeBpmnEditorFactory = (function () {
  function VsCodeBpmnEditorFactory(gwtEditorEnvelopeConfig) {
    this.gwtEditorEnvelopeConfig = gwtEditorEnvelopeConfig;
  }
  VsCodeBpmnEditorFactory.prototype.createEditor = function (ctx, initArgs) {
    var _a;
    window.envelope = __assign(__assign({}, (_a = window.envelope) !== null && _a !== void 0 ? _a : {}), {
      javaCodeCompletionService: new JavaCodeCompletionService(ctx),
    });
    var factory = new BpmnEditorFactory_1.BpmnEditorFactory(this.gwtEditorEnvelopeConfig);
    return factory.createEditor(ctx, initArgs);
  };
  return VsCodeBpmnEditorFactory;
})();
exports.VsCodeBpmnEditorFactory = VsCodeBpmnEditorFactory;
//# sourceMappingURL=VsCodeBpmnEditorFactory.js.map

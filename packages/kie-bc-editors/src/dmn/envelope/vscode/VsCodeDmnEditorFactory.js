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
exports.VsCodeDmnEditorFactory = void 0;
var DmnEditorFactory_1 = require("../DmnEditorFactory");
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
var VsCodeDmnEditorFactory = (function () {
  function VsCodeDmnEditorFactory(gwtEditorEnvelopeConfig) {
    this.gwtEditorEnvelopeConfig = gwtEditorEnvelopeConfig;
  }
  VsCodeDmnEditorFactory.prototype.createEditor = function (ctx, initArgs) {
    var _a;
    window.envelope = __assign(__assign({}, (_a = window.envelope) !== null && _a !== void 0 ? _a : {}), {
      javaCodeCompletionService: new JavaCodeCompletionService(ctx),
    });
    var factory = new DmnEditorFactory_1.DmnEditorFactory(this.gwtEditorEnvelopeConfig);
    return factory.createEditor(ctx, initArgs);
  };
  return VsCodeDmnEditorFactory;
})();
exports.VsCodeDmnEditorFactory = VsCodeDmnEditorFactory;
//# sourceMappingURL=VsCodeDmnEditorFactory.js.map

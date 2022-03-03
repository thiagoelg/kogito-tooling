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
exports.usingEditorEnvelopeI18nContext =
  exports.usingEnvelopeContext =
  exports.DEFAULT_TESTING_ENVELOPE_CONTEXT =
    void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("@kie-tools-core/editor/dist/api");
var envelope_1 = require("@kie-tools-core/keyboard-shortcuts/dist/envelope");
var envelope_2 = require("@kie-tools-core/i18n/dist/envelope");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var i18n_1 = require("@kie-tools-core/editor/dist/envelope/i18n");
exports.DEFAULT_TESTING_ENVELOPE_CONTEXT = {
  channelApi: {},
  services: {
    keyboardShortcuts: new envelope_1.DefaultKeyboardShortcutsService({}),
    i18n: new envelope_2.I18nService(),
  },
};
function usingEnvelopeContext(children, ctx) {
  var usedCtx = __assign(__assign({}, exports.DEFAULT_TESTING_ENVELOPE_CONTEXT), ctx);
  return {
    ctx: usedCtx,
    wrapper: (0, jsx_runtime_1.jsx)(
      api_1.KogitoEditorEnvelopeContext.Provider,
      __assign({ value: usedCtx }, { children: children }),
      ""
    ),
  };
}
exports.usingEnvelopeContext = usingEnvelopeContext;
function usingEditorEnvelopeI18nContext(children, ctx) {
  var usedCtx = __assign(
    {
      defaults: i18n_1.editorEnvelopeI18nDefaults,
      dictionaries: i18n_1.editorEnvelopeI18nDictionaries,
      ctx: i18n_1.EditorEnvelopeI18nContext,
      children: children,
    },
    ctx
  );
  return {
    ctx: usedCtx,
    wrapper: (0, jsx_runtime_1.jsx)(
      react_components_1.I18nDictionariesProvider,
      __assign(
        { defaults: usedCtx.defaults, dictionaries: usedCtx.dictionaries, ctx: usedCtx.ctx },
        { children: usedCtx.children }
      ),
      void 0
    ),
  };
}
exports.usingEditorEnvelopeI18nContext = usingEditorEnvelopeI18nContext;
//# sourceMappingURL=utils.js.map

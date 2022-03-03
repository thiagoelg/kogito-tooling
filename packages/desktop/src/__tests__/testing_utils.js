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
exports.usingTestingDesktopI18nContext = exports.usingTestingGlobalContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var GlobalContext_1 = require("../webview/common/GlobalContext");
var api_1 = require("@kie-tools-core/editor/dist/api");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var i18n_1 = require("../webview/common/i18n");
function usingTestingGlobalContext(children, ctx) {
  var usedCtx = __assign(
    {
      editorEnvelopeLocator: new api_1.EditorEnvelopeLocator(window.location.origin, [
        new api_1.EnvelopeMapping("dmn", "**/*.dmn", "", "envelope/envelope.html"),
      ]),
      file: {
        fileName: "test.dmn",
        fileExtension: "dmn",
        getFileContents: function () {
          return Promise.resolve("");
        },
        isReadOnly: false,
      },
    },
    ctx
  );
  return {
    ctx: usedCtx,
    wrapper: (0, jsx_runtime_1.jsx)(
      GlobalContext_1.GlobalContext.Provider,
      __assign({ value: usedCtx }, { children: children }),
      ""
    ),
  };
}
exports.usingTestingGlobalContext = usingTestingGlobalContext;
function usingTestingDesktopI18nContext(children, ctx) {
  var usedCtx = __assign(
    {
      defaults: i18n_1.desktopI18nDefaults,
      dictionaries: i18n_1.desktopI18nDictionaries,
      ctx: i18n_1.DesktopI18nContext,
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
exports.usingTestingDesktopI18nContext = usingTestingDesktopI18nContext;
//# sourceMappingURL=testing_utils.js.map

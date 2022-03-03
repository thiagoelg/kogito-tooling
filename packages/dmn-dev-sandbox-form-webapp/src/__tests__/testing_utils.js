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
exports.usingTestingAppContext = exports.usingTestingDmnFormI18nContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var AppContext_1 = require("../AppContext");
var i18n_1 = require("../i18n");
function usingTestingDmnFormI18nContext(children, ctx) {
  var usedCtx = __assign(
    {
      defaults: i18n_1.dmnFormI18nDefaults,
      dictionaries: i18n_1.dmnFormI18nDictionaries,
      ctx: i18n_1.DmnFormI18nContext,
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
exports.usingTestingDmnFormI18nContext = usingTestingDmnFormI18nContext;
function usingTestingAppContext(children, ctx) {
  var usedCtx = __assign({ fetchDone: true }, ctx);
  return {
    ctx: usedCtx,
    wrapper: (0, jsx_runtime_1.jsx)(
      AppContext_1.AppContext.Provider,
      __assign({ value: usedCtx }, { children: children }),
      void 0
    ),
  };
}
exports.usingTestingAppContext = usingTestingAppContext;
//# sourceMappingURL=testing_utils.js.map

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
exports.useOnlineI18n =
  exports.OnlineI18nContextProvider =
  exports.OnlineI18nContext =
  exports.onlineI18nDictionaries =
  exports.onlineI18nDefaults =
    void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var react_1 = require("react");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var locales_1 = require("./locales");
exports.onlineI18nDefaults = { locale: "en", dictionary: locales_1.en };
exports.onlineI18nDictionaries = new Map([["en", locales_1.en]]);
exports.OnlineI18nContext = React.createContext({});
function OnlineI18nContextProvider(props) {
  return (0, jsx_runtime_1.jsx)(
    react_components_1.I18nDictionariesProvider,
    __assign(
      {
        defaults: exports.onlineI18nDefaults,
        dictionaries: exports.onlineI18nDictionaries,
        initialLocale: navigator.language,
        ctx: exports.OnlineI18nContext,
      },
      { children: props.children }
    ),
    void 0
  );
}
exports.OnlineI18nContextProvider = OnlineI18nContextProvider;
function useOnlineI18n() {
  return (0, react_1.useContext)(exports.OnlineI18nContext);
}
exports.useOnlineI18n = useOnlineI18n;
//# sourceMappingURL=setup.js.map

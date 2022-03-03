"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChromeExtensionI18n =
  exports.ChromeExtensionI18nContext =
  exports.chromeExtensionI18nDictionaries =
  exports.chromeExtensionI18nDefaults =
    void 0;
var React = require("react");
var react_1 = require("react");
var locales_1 = require("./locales");
exports.chromeExtensionI18nDefaults = {
  locale: navigator.language,
  dictionary: locales_1.en,
};
exports.chromeExtensionI18nDictionaries = new Map([["en", locales_1.en]]);
exports.ChromeExtensionI18nContext = React.createContext({});
function useChromeExtensionI18n() {
  return (0, react_1.useContext)(exports.ChromeExtensionI18nContext);
}
exports.useChromeExtensionI18n = useChromeExtensionI18n;
//# sourceMappingURL=setup.js.map

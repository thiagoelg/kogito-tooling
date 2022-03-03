"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDesktopI18n =
  exports.DesktopI18nContext =
  exports.desktopI18nDictionaries =
  exports.desktopI18nDefaults =
    void 0;
var React = require("react");
var react_1 = require("react");
var locales_1 = require("./locales");
exports.desktopI18nDefaults = { locale: "en", dictionary: locales_1.en };
exports.desktopI18nDictionaries = new Map([["en", locales_1.en]]);
exports.DesktopI18nContext = React.createContext({});
function useDesktopI18n() {
  return (0, react_1.useContext)(exports.DesktopI18nContext);
}
exports.useDesktopI18n = useDesktopI18n;
//# sourceMappingURL=setup.js.map

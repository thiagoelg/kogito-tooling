"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGuidedTourI18n =
  exports.GuidedTourI18nContext =
  exports.guidedTourI18nDictionaries =
  exports.guidedTourI18nDefaults =
    void 0;
var React = require("react");
var react_1 = require("react");
var locales_1 = require("./locales");
exports.guidedTourI18nDefaults = { locale: "en", dictionary: locales_1.en };
exports.guidedTourI18nDictionaries = new Map([["en", locales_1.en]]);
exports.GuidedTourI18nContext = React.createContext({});
function useGuidedTourI18n() {
  return (0, react_1.useContext)(exports.GuidedTourI18nContext);
}
exports.useGuidedTourI18n = useGuidedTourI18n;
//# sourceMappingURL=setup.js.map

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDmnFormI18n =
  exports.DmnFormI18nContext =
  exports.dmnFormI18nDictionaries =
  exports.dmnFormI18nDefaults =
    void 0;
var React = require("react");
var react_1 = require("react");
var locales_1 = require("./locales");
exports.dmnFormI18nDefaults = { locale: "en", dictionary: locales_1.en };
exports.dmnFormI18nDictionaries = new Map([["en", locales_1.en]]);
exports.DmnFormI18nContext = React.createContext({});
function useDmnFormI18n() {
  return (0, react_1.useContext)(exports.DmnFormI18nContext);
}
exports.useDmnFormI18n = useDmnFormI18n;
//# sourceMappingURL=setup.js.map

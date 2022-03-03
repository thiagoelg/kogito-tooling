"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useImportJavaClassesWizardI18n =
  exports.ImportJavaClassesWizardI18nContext =
  exports.importJavaClassesWizardI18nDictionaries =
  exports.importJavaClassesWizardI18nDefaults =
    void 0;
var React = require("react");
var react_1 = require("react");
var locales_1 = require("./locales");
exports.importJavaClassesWizardI18nDefaults = {
  locale: "en",
  dictionary: locales_1.en,
};
exports.importJavaClassesWizardI18nDictionaries = new Map([["en", locales_1.en]]);
exports.ImportJavaClassesWizardI18nContext = React.createContext({});
function useImportJavaClassesWizardI18n() {
  return (0, react_1.useContext)(exports.ImportJavaClassesWizardI18nContext);
}
exports.useImportJavaClassesWizardI18n = useImportJavaClassesWizardI18n;
//# sourceMappingURL=setup.js.map

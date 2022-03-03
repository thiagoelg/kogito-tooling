"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBoxedExpressionEditorI18n =
  exports.BoxedExpressionEditorI18nContext =
  exports.boxedExpressionEditorDictionaries =
  exports.boxedExpressionEditorI18nDefaults =
    void 0;
var React = require("react");
var react_1 = require("react");
var locales_1 = require("./locales");
exports.boxedExpressionEditorI18nDefaults = {
  locale: "en",
  dictionary: locales_1.en,
};
exports.boxedExpressionEditorDictionaries = new Map([["en", locales_1.en]]);
exports.BoxedExpressionEditorI18nContext = React.createContext({});
function useBoxedExpressionEditorI18n() {
  return (0, react_1.useContext)(exports.BoxedExpressionEditorI18nContext);
}
exports.useBoxedExpressionEditorI18n = useBoxedExpressionEditorI18n;
//# sourceMappingURL=setup.js.map

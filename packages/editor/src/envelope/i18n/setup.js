"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEditorEnvelopeI18nContext =
  exports.EditorEnvelopeI18nContext =
  exports.editorEnvelopeI18nDictionaries =
  exports.editorEnvelopeI18nDefaults =
    void 0;
var React = require("react");
var react_1 = require("react");
var locales_1 = require("./locales");
exports.editorEnvelopeI18nDefaults = { locale: "en", dictionary: locales_1.en };
exports.editorEnvelopeI18nDictionaries = new Map([["en", locales_1.en]]);
exports.EditorEnvelopeI18nContext = React.createContext({});
function useEditorEnvelopeI18nContext() {
  return (0, react_1.useContext)(exports.EditorEnvelopeI18nContext);
}
exports.useEditorEnvelopeI18nContext = useEditorEnvelopeI18nContext;
//# sourceMappingURL=setup.js.map

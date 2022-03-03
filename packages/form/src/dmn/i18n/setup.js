"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dmnFormI18n =
  exports.DmnFormI18nContext =
  exports.dmnFormI18nDictionaries =
  exports.dmnFormI18nDefaults =
    void 0;
var React = require("react");
var locales_1 = require("./locales");
var core_1 = require("@kie-tools-core/i18n/dist/core");
exports.dmnFormI18nDefaults = { locale: "en", dictionary: locales_1.en };
exports.dmnFormI18nDictionaries = new Map([["en", locales_1.en]]);
exports.DmnFormI18nContext = React.createContext({});
exports.dmnFormI18n = new core_1.I18n(exports.dmnFormI18nDefaults, exports.dmnFormI18nDictionaries);
//# sourceMappingURL=setup.js.map

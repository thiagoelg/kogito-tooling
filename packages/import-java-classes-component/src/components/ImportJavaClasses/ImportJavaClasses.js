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
exports.ImportJavaClasses = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var i18n_1 = require("../../i18n");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var ImportJavaClassesWizard_1 = require("./ImportJavaClassesWizard");
var ImportJavaClasses = function (_a) {
  var gwtLayerService = _a.gwtLayerService,
    javaCodeCompletionService = _a.javaCodeCompletionService;
  return (0, jsx_runtime_1.jsx)(
    react_components_1.I18nDictionariesProvider,
    __assign(
      {
        defaults: i18n_1.importJavaClassesWizardI18nDefaults,
        dictionaries: i18n_1.importJavaClassesWizardI18nDictionaries,
        initialLocale: navigator.language,
        ctx: i18n_1.ImportJavaClassesWizardI18nContext,
      },
      {
        children: (0, jsx_runtime_1.jsx)(
          ImportJavaClassesWizard_1.ImportJavaClassesWizard,
          { gwtLayerService: gwtLayerService, javaCodeCompletionService: javaCodeCompletionService },
          void 0
        ),
      }
    ),
    void 0
  );
};
exports.ImportJavaClasses = ImportJavaClasses;
//# sourceMappingURL=ImportJavaClasses.js.map

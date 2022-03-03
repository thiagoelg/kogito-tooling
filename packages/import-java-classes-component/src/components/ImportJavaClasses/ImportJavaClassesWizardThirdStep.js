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
exports.ImportJavaClassesWizardThirdStep = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./ImportJavaClassesWizardThirdStep.css");
var ImportJavaClassesWizardFieldListTable_1 = require("./ImportJavaClassesWizardFieldListTable");
var ImportJavaClassesWizardThirdStep = function (_a) {
  var selectedJavaClasses = _a.selectedJavaClasses;
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children: (0, jsx_runtime_1.jsx)(
        "div",
        __assign(
          { className: "fields-table" },
          {
            children: (0, jsx_runtime_1.jsx)(
              ImportJavaClassesWizardFieldListTable_1.ImportJavaClassesWizardFieldListTable,
              { selectedJavaClassFields: selectedJavaClasses },
              void 0
            ),
          }
        ),
        void 0
      ),
    },
    void 0
  );
};
exports.ImportJavaClassesWizardThirdStep = ImportJavaClassesWizardThirdStep;
//# sourceMappingURL=ImportJavaClassesWizardThirdStep.js.map

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
exports.en = void 0;
var i18n_common_dictionary_1 = require("@kie-tools/i18n-common-dictionary");
exports.en = __assign(__assign({}, i18n_common_dictionary_1.en), {
  modalButton: {
    text: "Import Java classes",
    disabledMessage:
      "Not available, please check if 'Language Support for Java by Red Hat' extension is correctly installed",
    errorMessage: "An error occurred. Please check your WebView Developer Tools",
  },
  modalWizard: {
    title: "Import Java classes",
    description:
      "It converts your Java assets to DMN types. This is a one-time import action: if the Java class gets updated, you will need to reimport it.",
    firstStep: {
      stepName: "Select Java classes",
      input: {
        placeholder: "Type the class name here",
        title: "Search:",
        tooltip: "Type at least 3 characters to begin the search",
      },
      emptyState: {
        title: "No Java classes found or selected",
        body: "Type the Java class name or part of the name to find the one you want to import",
      },
    },
    secondStep: {
      stepName: "Select fields",
    },
    thirdStep: {
      stepName: "Review",
      nextButtonText: "Import",
    },
    fieldTable: {
      fetchButtonLabel: "Fetch",
    },
  },
});
//# sourceMappingURL=en.js.map

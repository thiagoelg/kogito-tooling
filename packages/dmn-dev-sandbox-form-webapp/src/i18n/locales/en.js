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
var core_1 = require("@kie-tools-core/i18n/dist/core");
var i18n_common_dictionary_1 = require("@kie-tools/i18n-common-dictionary");
exports.en = __assign(__assign({}, i18n_common_dictionary_1.en), {
  formToolbar: {
    disclaimer: {
      title: "Development only",
      description: "The "
        .concat(i18n_common_dictionary_1.en.names.dmn, " ")
        .concat(i18n_common_dictionary_1.en.names.shortDevSandbox, " is intended to be used during ")
        .concat("development".bold(), ", so users should not use the\n        deployed ")
        .concat(
          i18n_common_dictionary_1.en.names.dmn,
          " services in production or for any type of business-critical workloads."
        ),
    },
  },
  page: {
    error: {
      title: "".concat(i18n_common_dictionary_1.en.terms.oops, "!"),
      explanation: "The page couldn't be rendered due to an error.",
      dmnNotSupported: "This ".concat(
        i18n_common_dictionary_1.en.names.dmn,
        " has a construct that is not supported. "
      ),
      uploadFiles: "Don't forget to upload the current file, and the used inputs",
      referToJira: ["Please refer to ", (0, core_1.wrapped)("jira"), " and report an issue."],
    },
  },
  error: {
    title: "An unexpected error happened while trying to fetch your file",
    notFound: "A required file could be not be found",
  },
});
//# sourceMappingURL=en.js.map

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
var core_1 = require("@kie-tools-core/i18n/dist/core");
exports.en = __assign(__assign({}, i18n_common_dictionary_1.en), {
  form: {
    status: {
      autoGenerationError: {
        title: "".concat(i18n_common_dictionary_1.en.terms.oops, "!"),
        explanation: "Form cannot be rendered because of an error.",
        checkNotificationPanel: ["Check for ", (0, core_1.wrapped)("link"), " error on the Notifications Panel"],
      },
      emptyForm: {
        title: "No Form",
        explanation: "Associated ".concat(i18n_common_dictionary_1.en.names.dmn, " doesn't have any inputs."),
      },
      validatorError: {
        title: "An error occurred while trying to generate the form",
        message: [
          "This ".concat(
            i18n_common_dictionary_1.en.names.dmn,
            " model contains a construct that is not yet supported. Please refer to "
          ),
          (0, core_1.wrapped)("jira"),
          " and report an issue. Don't forget to upload the current file.",
        ],
      },
    },
    validation: {
      daysAndTimeError: "should match format P1D(ays)T2H(ours)3M(inutes)1S(econds)",
      yearsAndMonthsError: "should match format P1Y(ears)2M(onths)",
    },
    preProcessing: {
      selectPlaceholder: "Select...",
      daysAndTimePlaceholder: "P1DT5H or P2D or PT1H2M10S",
      yearsAndMonthsPlaceholder: "P1Y5M or P2Y or P1M",
    },
  },
  result: {
    evaluation: {
      success: "Evaluated with success",
      skipped: "Evaluation skipped",
      failed: "Evaluation failed",
    },
    error: {
      title: "".concat(i18n_common_dictionary_1.en.terms.oops, "!"),
      explanation: "Result cannot be rendered because of an error.",
      message: [
        "This result contains a construct that is not yet supported. Please refer to ",
        (0, core_1.wrapped)("jira"),
        " and report an issue. Don't forget to upload the current file, and the used inputs",
      ],
    },
    dateTooltip: ["This value is in UTC. The value in your current timezone is ", (0, core_1.wrapped)("date")],
    withoutResponse: {
      title: "No response",
      explanation: "Response appears after decisions are evaluated.",
    },
  },
});
//# sourceMappingURL=en.js.map

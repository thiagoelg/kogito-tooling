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
  app: {
    title: "This file extension is not supported.",
  },
  editorPage: {
    textEditorModal: {
      title: function (fileName) {
        return "Editing ".concat(fileName);
      },
    },
    alerts: {
      setContentError: {
        title: "Error opening file. You can edit it as text and reopen the diagram after you've fixed it.",
        action: "Open as text",
      },
      copy: "Content copied to clipboard",
      unsaved: {
        title: "Unsaved changes will be lost",
        message: "Click Save to download your progress before closing.",
        closeWithoutSaving: "Close without saving",
      },
      saved: "File saved successfully!",
      previewSaved: "Preview saved successfully!",
    },
  },
  filesPage: {
    alerts: {
      errorFetchingFile: "An error happened while fetching your file",
      unexpectedErrorFetchingFile: "An unexpected error happened while trying to fetch your file",
    },
    errorDetails: "Error details",
    files: {
      title: "Create new file",
      bpmn: {
        blank: "Blank Workflow (.".concat(i18n_common_dictionary_1.en.names.bpmn, ")"),
        sample: "Sample Workflow (.".concat(i18n_common_dictionary_1.en.names.bpmn, ")"),
      },
      dmn: {
        blank: "Blank Decision Model (.".concat(i18n_common_dictionary_1.en.names.dmn, ")"),
        sample: "Sample Decision Model (.".concat(i18n_common_dictionary_1.en.names.dmn, ")"),
      },
    },
    openUrl: {
      initial: "http://",
      invalidExtension: "File type is not supported",
      invalidUrl: "Enter a valid ".concat(i18n_common_dictionary_1.en.names.url),
      notFoundUrl: "File ".concat(i18n_common_dictionary_1.en.names.url, " is not valid"),
      openFromSource: "Open from source",
      description: "Paste a "
        .concat(i18n_common_dictionary_1.en.names.url, " to a source code link (")
        .concat(i18n_common_dictionary_1.en.names.github, ", ")
        .concat(i18n_common_dictionary_1.en.names.dropbox, ", etc.)"),
    },
    recent: {
      title: "Recent ".concat(i18n_common_dictionary_1.en.terms.files),
      noFilesYet: "No files were opened yet.",
    },
  },
  homePage: {
    learnMore: "Learn more",
  },
  learnMorePage: {
    readMore: "Read more",
    bpmn: {
      title: "Why ".concat(i18n_common_dictionary_1.en.names.bpmn, "?"),
      explanation: "".concat(i18n_common_dictionary_1.en.names.bpmn, " files are used to generate business processes."),
      create: "Create ".concat(i18n_common_dictionary_1.en.names.bpmn),
    },
    dmn: {
      title: "Why ".concat(i18n_common_dictionary_1.en.names.dmn, "?"),
      explanation: "".concat(i18n_common_dictionary_1.en.names.dmn, " files are used to generate decision models."),
      learn: "Learn ".concat(i18n_common_dictionary_1.en.names.dmn, " in 15 minutes"),
      create: "Create ".concat(i18n_common_dictionary_1.en.names.dmn),
    },
    about: "About ".concat(i18n_common_dictionary_1.en.names.businessModeler.name, " Preview"),
    editorsExplanation: "These simple "
      .concat(i18n_common_dictionary_1.en.names.bpmn, " and ")
      .concat(
        i18n_common_dictionary_1.en.names.dmn,
        " editors are here to allow you to collaborate quickly and to help introduce you to the new tools and capabilities of Process Automation. Feel free to get in touch in the"
      ),
    getChromeExtension: "Get "
      .concat(i18n_common_dictionary_1.en.names.github, " ")
      .concat(i18n_common_dictionary_1.en.names.chrome, " extension"),
    getVsCodeExtension: "Get ".concat(i18n_common_dictionary_1.en.names.vscode, " extension"),
    redHatOpenSource: "".concat(i18n_common_dictionary_1.en.names.redHat, " and open source"),
    kogitoWebsite: "".concat(i18n_common_dictionary_1.en.names.kogito, " website"),
  },
});
//# sourceMappingURL=en.js.map

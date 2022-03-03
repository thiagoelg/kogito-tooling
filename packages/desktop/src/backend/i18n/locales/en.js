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
  fileOperations: {
    dialog: {
      savePreview: "Save preview",
      saveFile: "Save file",
    },
  },
  menu: {
    open: {
      submenu: {
        file: {
          title: "Open file",
          supported: "Supported file extensions (*.bpmn, *.bpmn2, *.dmn)",
        },
        sample: "Sample",
      },
    },
    saveAs: "".concat(i18n_common_dictionary_1.en.terms.save, " As..."),
    savePreviewAs: "".concat(i18n_common_dictionary_1.en.terms.save, " Preview As..."),
    closeWindow: "".concat(i18n_common_dictionary_1.en.terms.close, " Window"),
    edit: {
      submenu: {
        label: "Copy source",
        selectAll: "Select All",
      },
    },
    devMenu: {
      label: "Development Menu",
      submenu: {
        showDevTools: "Show Developer Tools",
        clearUserData: "Clear User Data",
      },
    },
    macOsAppMenu: {
      submenu: {
        about: "About ".concat(i18n_common_dictionary_1.en.names.businessModeler),
        services: "Services",
        hide: "Hide ".concat(i18n_common_dictionary_1.en.names.businessModeler),
        hideOthers: "Hide Others",
        showAll: "Show All",
      },
    },
  },
});
//# sourceMappingURL=en.js.map

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
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Alert_1 = require("@patternfly/react-core/dist/js/components/Alert");
var electron = require("electron");
var react_1 = require("react");
require("@patternfly/patternfly/base/patternfly-variables.css");
require("@patternfly/patternfly/patternfly-addons.scss");
require("@patternfly/patternfly/patternfly.scss");
require("../../static/resources/style.css");
var ElectronFile_1 = require("../common/ElectronFile");
var GlobalContext_1 = require("./common/GlobalContext");
var EditorPage_1 = require("./editor/EditorPage");
var HomePage_1 = require("./home/HomePage");
var api_1 = require("@kie-tools-core/editor/dist/api");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var i18n_1 = require("./common/i18n");
var Pages;
(function (Pages) {
  Pages[(Pages["HOME"] = 0)] = "HOME";
  Pages[(Pages["EDITOR"] = 1)] = "EDITOR";
})(Pages || (Pages = {}));
var ALERT_AUTO_CLOSE_TIMEOUT = 3000;
var bpmnEnvelope = { resourcesPathPrefix: "../gwt-editors/bpmn", envelopePath: "envelope/bpmn-envelope.html" };
var dmnEnvelope = { resourcesPathPrefix: "../gwt-editors/dmn", envelopePath: "envelope/dmn-envelope.html" };
function App() {
  var _a = __read((0, react_1.useState)(Pages.HOME), 2),
    page = _a[0],
    setPage = _a[1];
  var _b = __read(
      (0, react_1.useState)({
        fileName: "",
        fileExtension: "",
        getFileContents: function () {
          return Promise.resolve("");
        },
        isReadOnly: false,
      }),
      2
    ),
    file = _b[0],
    setFile = _b[1];
  var _c = __read((0, react_1.useState)(false), 2),
    invalidFileTypeErrorVisible = _c[0],
    setInvalidFileTypeErrorVisible = _c[1];
  var onFilenameChange = (0, react_1.useCallback)(
    function (filePath) {
      setFile({
        fileName: filePath,
        fileExtension: file.fileExtension,
        getFileContents: file.getFileContents,
        isReadOnly: false,
      });
    },
    [file]
  );
  var editorEnvelopeLocator = (0, react_1.useMemo)(function () {
    return new api_1.EditorEnvelopeLocator(window.location.origin, [
      new api_1.EnvelopeMapping("bpmn", "**/*.bpmn?(2)", "../gwt-editors/bpmn", "envelope/bpmn-envelope.html"),
      new api_1.EnvelopeMapping("dmn", "**/*.dmn", "../gwt-editors/dmn", "envelope/dmn-envelope.html"),
    ]);
  }, []);
  var closeInvalidFileTypeErrorAlert = (0, react_1.useCallback)(
    function () {
      if (page === Pages.HOME) {
        setInvalidFileTypeErrorVisible(false);
      }
    },
    [page]
  );
  var openFile = (0, react_1.useCallback)(
    function (fileToOpen) {
      closeInvalidFileTypeErrorAlert();
      setPage(Pages.EDITOR);
      setFile({
        fileName: fileToOpen.filePath,
        fileExtension: fileToOpen.fileType,
        getFileContents: function () {
          return Promise.resolve(fileToOpen.fileContent);
        },
        isReadOnly: false,
      });
    },
    [closeInvalidFileTypeErrorAlert]
  );
  var openFileByPath = (0, react_1.useCallback)(function (filePath) {
    electron.ipcRenderer.send("openFileByPath", { filePath: filePath });
  }, []);
  var goToHomePage = (0, react_1.useCallback)(function () {
    electron.ipcRenderer.send("setFileMenusEnabled", { enabled: false });
    setPage(Pages.HOME);
  }, []);
  var dragAndDropFileEvent = (0, react_1.useCallback)(
    function (ev) {
      ev.preventDefault();
      if (ev.dataTransfer) {
        openFileByPath(ev.dataTransfer.files[0].path);
      }
    },
    [openFileByPath]
  );
  (0, react_1.useEffect)(
    function () {
      if (invalidFileTypeErrorVisible) {
        var autoCloseInvalidFileTypeErrorAlert_1 = setTimeout(closeInvalidFileTypeErrorAlert, ALERT_AUTO_CLOSE_TIMEOUT);
        return function () {
          return clearInterval(autoCloseInvalidFileTypeErrorAlert_1);
        };
      }
      return function () {};
    },
    [invalidFileTypeErrorVisible, closeInvalidFileTypeErrorAlert]
  );
  (0, react_1.useEffect)(
    function () {
      electron.ipcRenderer.on("openFile", function (event, data) {
        if (
          data.file.filePath === ElectronFile_1.UNSAVED_FILE_NAME ||
          editorEnvelopeLocator.hasMappingFor(data.file.filePath)
        ) {
          if (page === Pages.EDITOR) {
            setPage(Pages.HOME);
          }
          openFile(data.file);
        } else {
          setInvalidFileTypeErrorVisible(true);
        }
      });
      return function () {
        electron.ipcRenderer.removeAllListeners("openFile");
      };
    },
    [page, editorEnvelopeLocator, openFile]
  );
  (0, react_1.useEffect)(
    function () {
      document.addEventListener("dragover", function (e) {
        return e.preventDefault();
      });
      document.addEventListener("drop", function (e) {
        return e.preventDefault();
      });
      document.body.addEventListener("drop", dragAndDropFileEvent);
      return function () {
        document.removeEventListener("dragover", function (e) {
          return e.preventDefault();
        });
        document.removeEventListener("drop", function (e) {
          return e.preventDefault();
        });
        document.body.removeEventListener("drop", dragAndDropFileEvent);
      };
    },
    [dragAndDropFileEvent]
  );
  var Router = (0, react_1.useMemo)(
    function () {
      switch (page) {
        case Pages.HOME:
          return (0, jsx_runtime_1.jsx)(
            HomePage_1.HomePage,
            { openFile: openFile, openFileByPath: openFileByPath },
            void 0
          );
        case Pages.EDITOR:
          return (0, jsx_runtime_1.jsx)(
            EditorPage_1.EditorPage,
            { onFilenameChange: onFilenameChange, onClose: goToHomePage },
            void 0
          );
        default:
          return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
      }
    },
    [page, openFile, openFileByPath, onFilenameChange, goToHomePage]
  );
  return (0, jsx_runtime_1.jsx)(
    react_components_1.I18nDictionariesProvider,
    __assign(
      {
        defaults: i18n_1.desktopI18nDefaults,
        dictionaries: i18n_1.desktopI18nDictionaries,
        initialLocale: navigator.language,
        ctx: i18n_1.DesktopI18nContext,
      },
      {
        children: (0, jsx_runtime_1.jsx)(
          i18n_1.DesktopI18nContext.Consumer,
          {
            children: function (_a) {
              var i18n = _a.i18n;
              return (0, jsx_runtime_1.jsxs)(
                GlobalContext_1.GlobalContext.Provider,
                __assign(
                  {
                    value: {
                      file: file,
                      editorEnvelopeLocator: editorEnvelopeLocator,
                    },
                  },
                  {
                    children: [
                      invalidFileTypeErrorVisible &&
                        (0, jsx_runtime_1.jsx)(
                          "div",
                          __assign(
                            { className: "kogito--alert-container" },
                            {
                              children: (0, jsx_runtime_1.jsx)(
                                Alert_1.Alert,
                                {
                                  variant: Alert_1.AlertVariant.danger,
                                  title: i18n.app.title,
                                  actionClose: (0, jsx_runtime_1.jsx)(
                                    Alert_1.AlertActionCloseButton,
                                    { onClose: closeInvalidFileTypeErrorAlert, ouiaId: "close-danger-alert-button" },
                                    void 0
                                  ),
                                  ouiaId: "danger-alert",
                                },
                                void 0
                              ),
                            }
                          ),
                          void 0
                        ),
                      Router,
                    ],
                  }
                ),
                void 0
              );
            },
          },
          void 0
        ),
      }
    ),
    void 0
  );
}
exports.App = App;
//# sourceMappingURL=App.js.map

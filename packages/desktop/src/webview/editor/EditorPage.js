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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
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
exports.EditorPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("@kie-tools-core/editor/dist/api");
var embedded_1 = require("@kie-tools-core/editor/dist/embedded");
var Alert_1 = require("@patternfly/react-core/dist/js/components/Alert");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Page_1 = require("@patternfly/react-core/dist/js/components/Page");
var Modal_1 = require("@patternfly/react-core/dist/js/components/Modal");
var Stack_1 = require("@patternfly/react-core/dist/js/layouts/Stack");
var electron = require("electron");
var React = require("react");
var react_1 = require("react");
var ElectronFile_1 = require("../../common/ElectronFile");
var GlobalContext_1 = require("../common/GlobalContext");
var EditorToolbar_1 = require("./EditorToolbar");
var i18n_1 = require("../common/i18n");
var monaco = require("@kie-tools-core/monaco-editor");
var ALERT_AUTO_CLOSE_TIMEOUT = 3000;
function EditorPage(props) {
  var _this = this;
  var context = (0, react_1.useContext)(GlobalContext_1.GlobalContext);
  var _a = (0, embedded_1.useEditorRef)(),
    editor = _a.editor,
    editorRef = _a.editorRef;
  var copyContentTextArea = (0, react_1.useRef)(null);
  var _b = __read((0, react_1.useState)(false), 2),
    copySuccessAlertVisible = _b[0],
    setCopySuccessAlertVisible = _b[1];
  var _c = __read((0, react_1.useState)(false), 2),
    saveFileSuccessAlertVisible = _c[0],
    setSaveFileSuccessAlertVisible = _c[1];
  var _d = __read((0, react_1.useState)(false), 2),
    savePreviewSuccessAlertVisible = _d[0],
    setSavePreviewSuccessAlertVisible = _d[1];
  var isDirty = (0, embedded_1.useDirtyState)(editor);
  var _e = __read((0, react_1.useState)(false), 2),
    showUnsavedAlert = _e[0],
    setShowUnsavedAlert = _e[1];
  var _f = __read((0, react_1.useState)(false), 2),
    setContentError = _f[0],
    setSetContentError = _f[1];
  var _g = __read((0, react_1.useState)(false), 2),
    fileOpenedAsText = _g[0],
    setFileOpenedAsText = _g[1];
  var _h = (0, i18n_1.useDesktopI18n)(),
    locale = _h.locale,
    i18n = _h.i18n;
  var textEditorContainerRef = (0, react_1.useRef)(null);
  var onClose = (0, react_1.useCallback)(
    function () {
      if (!isDirty) {
        props.onClose();
      } else {
        setShowUnsavedAlert(true);
      }
    },
    [isDirty, props.onClose]
  );
  var onCloseWithoutSave = (0, react_1.useCallback)(
    function () {
      setShowUnsavedAlert(false);
      props.onClose();
    },
    [props.onClose]
  );
  var requestSaveFile = (0, react_1.useCallback)(
    function (action) {
      setShowUnsavedAlert(false);
      editor === null || editor === void 0
        ? void 0
        : editor.getContent().then(function (content) {
            electron.ipcRenderer.send("saveFile", {
              file: {
                filePath: context.file.fileName,
                fileType: context.file.fileExtension,
                fileContent: content,
              },
              action: action,
            });
          });
    },
    [context.file, editor]
  );
  var requestCopyContentToClipboard = (0, react_1.useCallback)(
    function () {
      editor === null || editor === void 0
        ? void 0
        : editor.getContent().then(function (content) {
            if (copyContentTextArea.current) {
              copyContentTextArea.current.value = content;
              copyContentTextArea.current.select();
              if (document.execCommand("copy")) {
                setCopySuccessAlertVisible(true);
              }
            }
          });
    },
    [editor]
  );
  var requestSavePreview = (0, react_1.useCallback)(
    function () {
      editor === null || editor === void 0
        ? void 0
        : editor.getPreview().then(function (previewSvg) {
            electron.ipcRenderer.send("savePreview", {
              filePath: context.file.fileName,
              fileType: "svg",
              fileContent: previewSvg,
            });
          });
    },
    [editor, context.file]
  );
  var closeCopySuccessAlert = (0, react_1.useCallback)(function () {
    return setCopySuccessAlertVisible(false);
  }, []);
  var closeSaveFileSuccessAlert = (0, react_1.useCallback)(function () {
    return setSaveFileSuccessAlertVisible(false);
  }, []);
  var closeSavePreviewSuccessAlert = (0, react_1.useCallback)(function () {
    return setSavePreviewSuccessAlertVisible(false);
  }, []);
  var onSave = (0, react_1.useCallback)(
    function () {
      requestSaveFile(ElectronFile_1.FileSaveActions.SAVE);
    },
    [requestSaveFile]
  );
  (0, react_1.useEffect)(
    function () {
      if (copySuccessAlertVisible) {
        var autoCloseCopySuccessAlert_1 = setTimeout(closeCopySuccessAlert, ALERT_AUTO_CLOSE_TIMEOUT);
        return function () {
          return clearInterval(autoCloseCopySuccessAlert_1);
        };
      }
      return function () {};
    },
    [copySuccessAlertVisible, closeCopySuccessAlert]
  );
  (0, react_1.useEffect)(
    function () {
      if (saveFileSuccessAlertVisible) {
        var autoCloseSaveFileSuccessAlert_1 = setTimeout(closeSaveFileSuccessAlert, ALERT_AUTO_CLOSE_TIMEOUT);
        return function () {
          return clearInterval(autoCloseSaveFileSuccessAlert_1);
        };
      }
      return function () {};
    },
    [saveFileSuccessAlertVisible, closeSaveFileSuccessAlert]
  );
  (0, react_1.useEffect)(
    function () {
      if (savePreviewSuccessAlertVisible) {
        var autoCloseSavePreviewSuccessAlert_1 = setTimeout(closeSavePreviewSuccessAlert, ALERT_AUTO_CLOSE_TIMEOUT);
        return function () {
          return clearInterval(autoCloseSavePreviewSuccessAlert_1);
        };
      }
      return function () {};
    },
    [savePreviewSuccessAlertVisible, closeSavePreviewSuccessAlert]
  );
  (0, react_1.useEffect)(
    function () {
      electron.ipcRenderer.on("requestOpenedFile", function (event, data) {
        requestSaveFile(data.action);
      });
      return function () {
        electron.ipcRenderer.removeAllListeners("requestOpenedFile");
      };
    },
    [requestSaveFile]
  );
  (0, react_1.useEffect)(
    function () {
      electron.ipcRenderer.on("copyContentToClipboard", function () {
        requestCopyContentToClipboard();
      });
      return function () {
        electron.ipcRenderer.removeAllListeners("copyContentToClipboard");
      };
    },
    [requestCopyContentToClipboard]
  );
  (0, react_1.useEffect)(
    function () {
      electron.ipcRenderer.on("savePreview", function () {
        requestSavePreview();
      });
      return function () {
        electron.ipcRenderer.removeAllListeners("savePreview");
      };
    },
    [requestSavePreview]
  );
  (0, react_1.useEffect)(
    function () {
      electron.ipcRenderer.on("saveFileSuccess", function (event, data) {
        editor === null || editor === void 0
          ? void 0
          : editor
              .getPreview()
              .then(function (previewSvg) {
                electron.ipcRenderer.send("saveThumbnail", {
                  filePath: data.filePath,
                  fileType: "svg",
                  fileContent: previewSvg,
                });
                editor === null || editor === void 0 ? void 0 : editor.getStateControl().setSavedCommand();
                setSaveFileSuccessAlertVisible(true);
                props.onFilenameChange(data.filePath);
              })
              .catch(function (err) {
                return console.log(err);
              });
      });
      return function () {
        electron.ipcRenderer.removeAllListeners("saveFileSuccess");
      };
    },
    [editor, props.onFilenameChange]
  );
  var saveOpenedFileThumbnail = (0, react_1.useCallback)(
    function () {
      return __awaiter(_this, void 0, void 0, function () {
        var previewSvg;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4, editor === null || editor === void 0 ? void 0 : editor.getPreview()];
            case 1:
              previewSvg = _a.sent();
              electron.ipcRenderer.send("saveThumbnail", {
                filePath: context.file.fileName,
                fileType: "svg",
                fileContent: previewSvg,
              });
              return [2];
          }
        });
      });
    },
    [editor, context.file]
  );
  (0, react_1.useEffect)(function () {
    electron.ipcRenderer.on("savePreviewSuccess", function () {
      setSavePreviewSuccessAlertVisible(true);
    });
    return function () {
      electron.ipcRenderer.removeAllListeners("savePreviewSuccess");
    };
  }, []);
  var onSetContentError = (0, react_1.useCallback)(function () {
    setSetContentError(true);
  }, []);
  var openFileAsText = (0, react_1.useCallback)(function () {
    setFileOpenedAsText(true);
  }, []);
  var refreshDiagramEditor = (0, react_1.useCallback)(function () {
    setFileOpenedAsText(false);
    setSetContentError(false);
  }, []);
  var _j = __read((0, react_1.useState)(undefined), 2),
    textEditorContent = _j[0],
    setTextEditorContext = _j[1];
  (0, react_1.useEffect)(
    function () {
      context.file.getFileContents().then(function (content) {
        setTextEditorContext(content);
      });
    },
    [context.file]
  );
  (0, react_1.useEffect)(
    function () {
      if (!fileOpenedAsText) {
        return;
      }
      var monacoInstance = monaco.editor.create(textEditorContainerRef.current, {
        value: textEditorContent,
        language: "xml",
        scrollBeyondLastLine: false,
      });
      return function () {
        var contentAfterFix = monacoInstance.getValue();
        monacoInstance.dispose();
        editor === null || editor === void 0
          ? void 0
          : editor
              .setContent(context.file.fileName, contentAfterFix)
              .then(function () {
                editor === null || editor === void 0
                  ? void 0
                  : editor.getStateControl().updateCommandStack({
                      id: "fix-from-text-editor",
                      undo: function () {
                        editor === null || editor === void 0
                          ? void 0
                          : editor.setContent(context.file.fileName, textEditorContent);
                      },
                      redo: function () {
                        editor === null || editor === void 0
                          ? void 0
                          : editor.setContent(context.file.fileName, contentAfterFix).then(function () {
                              setFileOpenedAsText(false);
                              setSetContentError(false);
                            });
                      },
                    });
              })
              .catch(function () {
                setTextEditorContext(contentAfterFix);
              });
      };
    },
    [fileOpenedAsText, editor, context.file, textEditorContent]
  );
  return (0, jsx_runtime_1.jsx)(
    Page_1.Page,
    __assign(
      { className: "kogito--editor-page" },
      {
        children: (0, jsx_runtime_1.jsxs)(
          Page_1.PageSection,
          __assign(
            { variant: "dark", padding: { default: "noPadding" }, style: { flexBasis: "100%" } },
            {
              children: [
                (0, jsx_runtime_1.jsxs)(
                  Stack_1.Stack,
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(
                        Stack_1.StackItem,
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            EditorToolbar_1.EditorToolbar,
                            { onClose: onClose, onSave: onSave, isEdited: isDirty },
                            void 0
                          ),
                        },
                        void 0
                      ),
                      (0, jsx_runtime_1.jsxs)(
                        Stack_1.StackItem,
                        __assign(
                          { className: "pf-m-fill" },
                          {
                            children: [
                              showUnsavedAlert &&
                                (0, jsx_runtime_1.jsx)(
                                  "div",
                                  __assign(
                                    { className: "kogito--alert-container-unsaved", "data-testid": "unsaved-alert" },
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        Alert_1.Alert,
                                        __assign(
                                          {
                                            variant: "warning",
                                            title: i18n.editorPage.alerts.unsaved.title,
                                            actionClose: (0, jsx_runtime_1.jsx)(
                                              Alert_1.AlertActionCloseButton,
                                              {
                                                "data-testid": "unsaved-alert-close-button",
                                                onClose: function () {
                                                  return setShowUnsavedAlert(false);
                                                },
                                                ouiaId: "unsaved-changes-close-alert-button",
                                              },
                                              void 0
                                            ),
                                            actionLinks: (0, jsx_runtime_1.jsxs)(
                                              React.Fragment,
                                              {
                                                children: [
                                                  (0, jsx_runtime_1.jsx)(
                                                    Alert_1.AlertActionLink,
                                                    __assign(
                                                      {
                                                        "data-testid": "unsaved-alert-save-button",
                                                        onClick: onSave,
                                                        ouiaId: "unsaved-alert-save-button",
                                                      },
                                                      { children: i18n.terms.save }
                                                    ),
                                                    void 0
                                                  ),
                                                  (0, jsx_runtime_1.jsx)(
                                                    Alert_1.AlertActionLink,
                                                    __assign(
                                                      {
                                                        "data-testid": "unsaved-alert-close-without-save-button",
                                                        onClick: onCloseWithoutSave,
                                                        ouiaId: "unsaved-changes-close-without-saving-button",
                                                      },
                                                      { children: i18n.editorPage.alerts.unsaved.closeWithoutSaving }
                                                    ),
                                                    void 0
                                                  ),
                                                ],
                                              },
                                              void 0
                                            ),
                                            ouiaId: "unsaved-changes-warning-alert",
                                          },
                                          {
                                            children: (0, jsx_runtime_1.jsx)(
                                              "p",
                                              { children: i18n.editorPage.alerts.unsaved.message },
                                              void 0
                                            ),
                                          }
                                        ),
                                        void 0
                                      ),
                                    }
                                  ),
                                  void 0
                                ),
                              copySuccessAlertVisible &&
                                (0, jsx_runtime_1.jsx)(
                                  "div",
                                  __assign(
                                    { className: "kogito--alert-container" },
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        Alert_1.Alert,
                                        {
                                          variant: "success",
                                          title: i18n.editorPage.alerts.copy,
                                          actionClose: (0, jsx_runtime_1.jsx)(
                                            Alert_1.AlertActionCloseButton,
                                            { onClose: closeCopySuccessAlert },
                                            void 0
                                          ),
                                        },
                                        void 0
                                      ),
                                    }
                                  ),
                                  void 0
                                ),
                              setContentError &&
                                !fileOpenedAsText &&
                                (0, jsx_runtime_1.jsx)(
                                  "div",
                                  __assign(
                                    { className: "kogito--alert-container" },
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        Alert_1.Alert,
                                        {
                                          variant: "danger",
                                          title: i18n.editorPage.alerts.setContentError.title,
                                          actionLinks: (0, jsx_runtime_1.jsx)(
                                            jsx_runtime_1.Fragment,
                                            {
                                              children: (0, jsx_runtime_1.jsx)(
                                                Alert_1.AlertActionLink,
                                                __assign(
                                                  {
                                                    "data-testid": "unsaved-alert-save-button",
                                                    onClick: openFileAsText,
                                                  },
                                                  { children: i18n.editorPage.alerts.setContentError.action }
                                                ),
                                                void 0
                                              ),
                                            },
                                            void 0
                                          ),
                                        },
                                        void 0
                                      ),
                                    }
                                  ),
                                  void 0
                                ),
                              saveFileSuccessAlertVisible &&
                                (0, jsx_runtime_1.jsx)(
                                  "div",
                                  __assign(
                                    { className: "kogito--alert-container" },
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        Alert_1.Alert,
                                        {
                                          variant: "success",
                                          title: i18n.editorPage.alerts.saved,
                                          actionClose: (0, jsx_runtime_1.jsx)(
                                            Alert_1.AlertActionCloseButton,
                                            { onClose: closeSaveFileSuccessAlert },
                                            void 0
                                          ),
                                        },
                                        void 0
                                      ),
                                    }
                                  ),
                                  void 0
                                ),
                              savePreviewSuccessAlertVisible &&
                                (0, jsx_runtime_1.jsx)(
                                  "div",
                                  __assign(
                                    { className: "kogito--alert-container" },
                                    {
                                      children: (0, jsx_runtime_1.jsx)(
                                        Alert_1.Alert,
                                        {
                                          variant: "success",
                                          title: i18n.editorPage.alerts.previewSaved,
                                          actionClose: (0, jsx_runtime_1.jsx)(
                                            Alert_1.AlertActionCloseButton,
                                            { onClose: closeSavePreviewSuccessAlert },
                                            void 0
                                          ),
                                        },
                                        void 0
                                      ),
                                    }
                                  ),
                                  void 0
                                ),
                              (0, jsx_runtime_1.jsx)(
                                embedded_1.EmbeddedEditor,
                                {
                                  ref: editorRef,
                                  file: context.file,
                                  kogitoEditor_ready: saveOpenedFileThumbnail,
                                  kogitoEditor_setContentError: onSetContentError,
                                  editorEnvelopeLocator: context.editorEnvelopeLocator,
                                  channelType: api_1.ChannelType.DESKTOP,
                                  locale: locale,
                                },
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                Modal_1.Modal,
                                __assign(
                                  {
                                    showClose: false,
                                    width: "100%",
                                    height: "100%",
                                    title: i18n.editorPage.textEditorModal.title(
                                      context.file.fileName.split("/").pop()
                                    ),
                                    isOpen: fileOpenedAsText,
                                    actions: [
                                      (0, jsx_runtime_1.jsx)(
                                        Button_1.Button,
                                        __assign(
                                          { variant: "primary", onClick: refreshDiagramEditor },
                                          { children: i18n.terms.done }
                                        ),
                                        "confirm"
                                      ),
                                    ],
                                  },
                                  {
                                    children: (0, jsx_runtime_1.jsx)(
                                      "div",
                                      {
                                        style: { width: "100%", minHeight: "calc(100vh - 210px)" },
                                        ref: textEditorContainerRef,
                                      },
                                      void 0
                                    ),
                                  }
                                ),
                                void 0
                              ),
                            ],
                          }
                        ),
                        void 0
                      ),
                    ],
                  },
                  void 0
                ),
                (0, jsx_runtime_1.jsx)(
                  "textarea",
                  { ref: copyContentTextArea, style: { opacity: 0, width: 0, height: 0 } },
                  void 0
                ),
              ],
            }
          ),
          void 0
        ),
      }
    ),
    void 0
  );
}
exports.EditorPage = EditorPage;
//# sourceMappingURL=EditorPage.js.map

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
exports.TextEditorModal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Modal_1 = require("@patternfly/react-core/dist/js/components/Modal");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var react_1 = require("react");
var i18n_1 = require("../../i18n");
var importMonacoEditor = function () {
  return Promise.resolve().then(function () {
    return require("@kie-tools-core/monaco-editor");
  });
};
function TextEditorModal(props) {
  var i18n = (0, i18n_1.useOnlineI18n)().i18n;
  var textEditorContainerRef = (0, react_1.useRef)(null);
  var _a = __read((0, react_1.useState)(undefined), 2),
    textEditorContent = _a[0],
    setTextEditorContext = _a[1];
  (0, react_1.useEffect)(
    function () {
      if (!props.isOpen) {
        return;
      }
      var monacoInstance;
      importMonacoEditor().then(function (monaco) {
        monacoInstance = monaco.editor.create(textEditorContainerRef.current, {
          value: textEditorContent,
          language: "xml",
          scrollBeyondLastLine: false,
        });
      });
      return function () {
        var _a;
        if (!monacoInstance || !props.workspaceFile) {
          return;
        }
        var contentAfterFix = monacoInstance.getValue();
        monacoInstance.dispose();
        (_a = props.editor) === null || _a === void 0
          ? void 0
          : _a
              .setContent(props.workspaceFile.name, contentAfterFix)
              .then(function () {
                var _a;
                (_a = props.editor) === null || _a === void 0
                  ? void 0
                  : _a.getStateControl().updateCommandStack({
                      id: "fix-from-text-editor",
                      undo: function () {
                        var _a;
                        if (props.workspaceFile) {
                          (_a = props.editor) === null || _a === void 0
                            ? void 0
                            : _a.setContent(props.workspaceFile.name, textEditorContent);
                        }
                      },
                      redo: function () {
                        var _a;
                        if (props.workspaceFile) {
                          (_a = props.editor) === null || _a === void 0
                            ? void 0
                            : _a.setContent(props.workspaceFile.name, contentAfterFix).then(props.refreshEditor);
                        }
                      },
                    });
              })
              .catch(function () {
                setTextEditorContext(contentAfterFix);
              });
      };
    },
    [props.refreshEditor, props.isOpen, props.editor, props.workspaceFile, textEditorContent]
  );
  (0, react_1.useEffect)(
    function () {
      props.workspaceFile.getFileContentsAsString().then(function (content) {
        setTextEditorContext(content);
      });
    },
    [props.workspaceFile]
  );
  return (0, jsx_runtime_1.jsx)(
    Modal_1.Modal,
    __assign(
      {
        showClose: false,
        width: "100%",
        height: "100%",
        title: i18n.editorPage.textEditorModal.title(props.workspaceFile.nameWithoutExtension),
        isOpen: props.isOpen,
        actions: [
          (0, jsx_runtime_1.jsx)(
            Button_1.Button,
            __assign({ variant: "primary", onClick: props.refreshEditor }, { children: i18n.terms.done }),
            "confirm"
          ),
        ],
      },
      {
        children: (0, jsx_runtime_1.jsx)(
          "div",
          { style: { width: "100%", minHeight: "calc(100vh - 210px)" }, ref: textEditorContainerRef },
          void 0
        ),
      }
    ),
    void 0
  );
}
exports.TextEditorModal = TextEditorModal;
//# sourceMappingURL=TextEditorModal.js.map

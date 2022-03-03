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
exports.DmnStandaloneEditorPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_core_1 = require("@patternfly/react-core");
var DmnEditor = require("@kie-tools/kie-editors-standalone/dist/dmn");
function DmnStandaloneEditorPage() {
  var dmnEditorContainer = (0, react_1.useRef)(null);
  var unsavedChanges = (0, react_1.useRef)(null);
  var undo = (0, react_1.useRef)(null);
  var redo = (0, react_1.useRef)(null);
  var download = (0, react_1.useRef)(null);
  var downloadSvg = (0, react_1.useRef)(null);
  (0, react_1.useEffect)(function () {
    var _a, _b, _c, _d;
    var editor = DmnEditor.open({
      container: dmnEditorContainer.current,
      initialContent: Promise.resolve(""),
      readOnly: false,
    });
    (_a = undo.current) === null || _a === void 0
      ? void 0
      : _a.addEventListener("click", function () {
          editor.undo();
        });
    (_b = redo.current) === null || _b === void 0
      ? void 0
      : _b.addEventListener("click", function () {
          editor.redo();
        });
    (_c = download.current) === null || _c === void 0
      ? void 0
      : _c.addEventListener("click", function () {
          editor.getContent().then(function (content) {
            var elem = window.document.createElement("a");
            elem.href = "data:text/plain;charset=utf-8," + encodeURIComponent(content);
            elem.download = "model.dmn";
            document.body.appendChild(elem);
            elem.click();
            document.body.removeChild(elem);
            editor.markAsSaved();
          });
        });
    (_d = downloadSvg.current) === null || _d === void 0
      ? void 0
      : _d.addEventListener("click", function () {
          editor.getPreview().then(function (svgContent) {
            var elem = window.document.createElement("a");
            elem.href = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgContent);
            elem.download = "model.svg";
            document.body.appendChild(elem);
            elem.click();
            document.body.removeChild(elem);
          });
        });
    editor.subscribeToContentChanges(function (isDirty) {
      if (isDirty) {
        unsavedChanges.current.style.display = "";
      } else {
        unsavedChanges.current.style.display = "none";
      }
    });
  }, []);
  return (0, jsx_runtime_1.jsxs)(
    react_core_1.Page,
    {
      children: [
        (0, jsx_runtime_1.jsxs)(
          "div",
          __assign(
            { style: { height: "40px", padding: "5px" } },
            {
              children: [
                (0, jsx_runtime_1.jsx)("button", __assign({ ref: undo }, { children: "Undo" }), void 0),
                (0, jsx_runtime_1.jsx)("button", __assign({ ref: redo }, { children: "Redo" }), void 0),
                (0, jsx_runtime_1.jsx)("button", __assign({ ref: download }, { children: "Download" }), void 0),
                (0, jsx_runtime_1.jsx)("button", __assign({ ref: downloadSvg }, { children: "Download SVG" }), void 0),
                (0, jsx_runtime_1.jsx)(
                  "span",
                  __assign(
                    { ref: unsavedChanges, style: { display: "none" } },
                    { children: "File contains unsaved changes." }
                  ),
                  void 0
                ),
              ],
            }
          ),
          void 0
        ),
        (0, jsx_runtime_1.jsx)("div", { ref: dmnEditorContainer, style: { height: "calc(100% - 50px)" } }, void 0),
      ],
    },
    void 0
  );
}
exports.DmnStandaloneEditorPage = DmnStandaloneEditorPage;
//# sourceMappingURL=DmnStandaloneEditorPage.js.map

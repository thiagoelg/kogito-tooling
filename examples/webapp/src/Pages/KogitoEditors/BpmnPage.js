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
exports.BpmnPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("@kie-tools-core/editor/dist/api");
var api_2 = require("@kie-tools-core/editor/dist/api");
var react_1 = require("react");
var react_core_1 = require("@patternfly/react-core");
var embedded_1 = require("@kie-tools-core/editor/dist/embedded");
var Sidebar_1 = require("./Sidebar");
function BpmnPage() {
  var _a = (0, embedded_1.useEditorRef)(),
    editor = _a.editor,
    editorRef = _a.editorRef;
  var _b = __read(
      (0, react_1.useState)({
        fileName: "new-file",
        fileExtension: "bpmn",
        getFileContents: function () {
          return Promise.resolve("");
        },
        isReadOnly: false,
      }),
      2
    ),
    file = _b[0],
    setFile = _b[1];
  var editorEnvelopeLocator = (0, react_1.useMemo)(function () {
    return new api_2.EditorEnvelopeLocator(window.location.origin, [
      new api_2.EnvelopeMapping(
        "bpmn",
        "**/*.bpmn",
        "https://kiegroup.github.io/kogito-online/editors/latest/bpmn",
        "https://kiegroup.github.io/kogito-online/bpmn-envelope.html"
      ),
      new api_2.EnvelopeMapping(
        "bpmn",
        "**/*.bpmn2",
        "https://kiegroup.github.io/kogito-online/editors/latest/bpmn",
        "https://kiegroup.github.io/kogito-online/bpmn-envelope.html"
      ),
    ]);
  }, []);
  return (0, jsx_runtime_1.jsx)(
    react_core_1.Page,
    {
      children: (0, jsx_runtime_1.jsxs)(
        "div",
        __assign(
          { className: "webapp--page-main-div" },
          {
            children: [
              (0, jsx_runtime_1.jsx)(
                Sidebar_1.Sidebar,
                {
                  editor: editor,
                  editorEnvelopeLocator: editorEnvelopeLocator,
                  file: file,
                  setFile: setFile,
                  fileExtension: "bpmn",
                  accept: ".bpmn, .bpmn2",
                },
                void 0
              ),
              (0, jsx_runtime_1.jsx)(
                embedded_1.EmbeddedEditor,
                {
                  ref: editorRef,
                  file: file,
                  editorEnvelopeLocator: editorEnvelopeLocator,
                  channelType: api_1.ChannelType.EMBEDDED,
                  locale: "en",
                },
                void 0
              ),
            ],
          }
        ),
        void 0
      ),
    },
    void 0
  );
}
exports.BpmnPage = BpmnPage;
//# sourceMappingURL=BpmnPage.js.map

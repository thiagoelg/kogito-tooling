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
exports.useEditorEnvelopeLocator =
  exports.EditorEnvelopeLocatorContextProvider =
  exports.EditorEnvelopeLocatorContext =
    void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var react_1 = require("react");
var api_1 = require("@kie-tools-core/editor/dist/api");
exports.EditorEnvelopeLocatorContext = React.createContext({});
function EditorEnvelopeLocatorContextProvider(props) {
  var editorEnvelopeLocator = (0, react_1.useMemo)(function () {
    return new api_1.EditorEnvelopeLocator(window.location.origin, [
      new api_1.EnvelopeMapping("bpmn", "**/*.bpmn?(2)", "gwt-editors/bpmn", "bpmn-envelope.html"),
      new api_1.EnvelopeMapping("dmn", "**/*.dmn", "gwt-editors/dmn", "dmn-envelope.html"),
      new api_1.EnvelopeMapping("pmml", "**/*.pmml", "", "pmml-envelope.html"),
    ]);
  }, []);
  var value = (0, react_1.useMemo)(
    function () {
      return editorEnvelopeLocator;
    },
    [editorEnvelopeLocator]
  );
  return (0, jsx_runtime_1.jsx)(
    exports.EditorEnvelopeLocatorContext.Provider,
    __assign({ value: value }, { children: props.children }),
    void 0
  );
}
exports.EditorEnvelopeLocatorContextProvider = EditorEnvelopeLocatorContextProvider;
function useEditorEnvelopeLocator() {
  return (0, react_1.useContext)(exports.EditorEnvelopeLocatorContext);
}
exports.useEditorEnvelopeLocator = useEditorEnvelopeLocator;
//# sourceMappingURL=EditorEnvelopeLocatorContext.js.map

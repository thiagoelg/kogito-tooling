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
exports.BoxedExpressionProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./BoxedExpressionProvider.css");
var Resizer_1 = require("../Resizer");
var context_1 = require("../../context");
var _ = require("lodash");
var SelectionBox_1 = require("../SelectionBox");
function BoxedExpressionProvider(props) {
  var _a = __read(
      (0, react_1.useState)(function () {
        return _.identity;
      }),
      2
    ),
    currentlyOpenedHandlerCallback = _a[0],
    setCurrentlyOpenedHandlerCallback = _a[1];
  var _b = __read((0, react_1.useState)((0, Resizer_1.hashfy)(props.expressionDefinition)), 2),
    supervisorHash = _b[0],
    setSupervisorHash = _b[1];
  var editorRef = (0, react_1.useRef)(null);
  (0, react_1.useEffect)(
    function () {
      setSupervisorHash((0, Resizer_1.hashfy)(props.expressionDefinition));
    },
    [props.expressionDefinition]
  );
  return (0, jsx_runtime_1.jsxs)(
    context_1.BoxedExpressionGlobalContext.Provider,
    __assign(
      {
        value: {
          boxedExpressionEditorGWTService: props.boxedExpressionEditorGWTService,
          decisionNodeId: props.decisionNodeId,
          dataTypes: props.dataTypes,
          pmmlParams: props.pmmlParams,
          supervisorHash: supervisorHash,
          setSupervisorHash: setSupervisorHash,
          editorRef: editorRef,
          currentlyOpenedHandlerCallback: currentlyOpenedHandlerCallback,
          setCurrentlyOpenedHandlerCallback: setCurrentlyOpenedHandlerCallback,
        },
      },
      {
        children: [
          (0, jsx_runtime_1.jsx)(
            Resizer_1.ResizerSupervisor,
            __assign(
              { isRunnerTable: props.isRunnerTable },
              {
                children: (0, jsx_runtime_1.jsx)(
                  "div",
                  __assign({ className: "boxed-expression-provider", ref: editorRef }, { children: props.children }),
                  void 0
                ),
              }
            ),
            void 0
          ),
          props.isRunnerTable === false && (0, jsx_runtime_1.jsx)(SelectionBox_1.CellSelectionBox, {}, void 0),
        ],
      }
    ),
    void 0
  );
}
exports.BoxedExpressionProvider = BoxedExpressionProvider;
//# sourceMappingURL=BoxedExpressionProvider.js.map

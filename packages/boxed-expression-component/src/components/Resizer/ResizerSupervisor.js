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
exports.ResizerSupervisor = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var dom_1 = require("./dom");
var context_1 = require("../../context");
require("./ResizerSupervisor.css");
var ResizerSupervisor = function (_a) {
  var children = _a.children,
    isRunnerTable = _a.isRunnerTable;
  var supervisorHash = (0, react_1.useContext)(context_1.BoxedExpressionGlobalContext).supervisorHash;
  var boxedExpression = (0, context_1.useBoxedExpression)();
  (0, react_1.useEffect)(
    function () {
      var id = setTimeout(function () {
        if (boxedExpression.editorRef.current !== null) {
          (0, dom_1.applyDOMSupervisor)(isRunnerTable, boxedExpression.editorRef.current);
        }
      }, 0);
      return function () {
        return clearTimeout(id);
      };
    },
    [isRunnerTable, supervisorHash, boxedExpression.editorRef]
  );
  return (0, jsx_runtime_1.jsx)(
    "div",
    __assign({ className: "react-resizable-supervisor" }, { children: children }),
    void 0
  );
};
exports.ResizerSupervisor = ResizerSupervisor;
//# sourceMappingURL=ResizerSupervisor.js.map

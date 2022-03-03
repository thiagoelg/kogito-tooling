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
exports.FeelInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var react_1 = require("react");
var Monaco_1 = require("../Monaco");
exports.FeelInput = React.forwardRef(function (_a, forwardRef) {
  var enabled = _a.enabled,
    value = _a.value,
    suggestionProvider = _a.suggestionProvider,
    onBlur = _a.onBlur,
    onLoad = _a.onLoad,
    onKeyDown = _a.onKeyDown,
    onChange = _a.onChange,
    options = _a.options;
  var monacoContainer = (0, react_1.useRef)(null);
  var calculatePosition = (0, react_1.useCallback)(function (value) {
    var lines = value.split("\n");
    var lineNumber = lines.length;
    var column = lines[lineNumber - 1].length + 1;
    return { lineNumber: lineNumber, column: column };
  }, []);
  (0, react_1.useEffect)(
    function () {
      if (enabled) {
        var editor = Monaco_1.FeelEditorService.getEditorBuilder(suggestionProvider)
          .withDomElement(monacoContainer.current)
          .withOnBlur(onBlur)
          .withOnChange(onChange)
          .withOptions(options)
          .withOnKeyDown(onKeyDown)
          .createEditor();
        editor.setValue(value !== null && value !== void 0 ? value : "");
        editor.setPosition(calculatePosition(value !== null && value !== void 0 ? value : ""));
        editor.focus();
      }
      if (value !== undefined && onLoad !== undefined) {
        Monaco_1.FeelEditorService.getEditorBuilder(suggestionProvider)
          .withDomElement(monacoContainer.current)
          .colorize(value)
          .then(onLoad);
      }
      return function () {
        Monaco_1.FeelEditorService.dispose();
      };
    },
    [enabled, suggestionProvider, value, calculatePosition, options, onLoad, onChange, onKeyDown, onBlur]
  );
  (0, react_1.useImperativeHandle)(forwardRef, function () {
    return {
      setMonacoValue: function (newValue) {
        var _a;
        return (_a = Monaco_1.FeelEditorService.getStandaloneEditor()) === null || _a === void 0
          ? void 0
          : _a.setValue(newValue);
      },
    };
  });
  return (0,
  jsx_runtime_1.jsx)("div", __assign({ className: "feel-input" }, { children: (0, jsx_runtime_1.jsx)("div", { ref: monacoContainer }, void 0) }), void 0);
});
//# sourceMappingURL=FeelInput.js.map

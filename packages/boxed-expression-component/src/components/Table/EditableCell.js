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
exports.EditableCell = exports.EDIT_MODE = exports.READ_MODE = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var feel_input_component_1 = require("@kie-tools/feel-input-component");
var react_1 = require("react");
var common_1 = require("./common");
require("./EditableCell.css");
var context_1 = require("../../context");
var CELL_LINE_HEIGHT = 20;
var MONACO_OPTIONS = {
  fixedOverflowWidgets: true,
  lineNumbers: "off",
  fontSize: 13,
  renderLineHighlight: "none",
  lineDecorationsWidth: 1,
  automaticLayout: true,
};
exports.READ_MODE = "editable-cell--read-mode";
exports.EDIT_MODE = "editable-cell--edit-mode";
function EditableCell(_a) {
  var value = _a.value,
    rowIndex = _a.rowIndex,
    columnId = _a.columnId,
    onCellUpdate = _a.onCellUpdate,
    readOnly = _a.readOnly;
  var _b = __read((0, react_1.useState)(false), 2),
    isSelected = _b[0],
    setIsSelected = _b[1];
  var _c = __read((0, react_1.useState)(exports.READ_MODE), 2),
    mode = _c[0],
    setMode = _c[1];
  var _d = __read((0, react_1.useState)(CELL_LINE_HEIGHT * 3), 2),
    cellHeight = _d[0],
    setCellHeight = _d[1];
  var _f = __read((0, react_1.useState)(""), 2),
    preview = _f[0],
    setPreview = _f[1];
  var textarea = (0, react_1.useRef)(null);
  var _g = __read((0, react_1.useState)(""), 2),
    previousValue = _g[0],
    setPreviousValue = _g[1];
  var feelInputRef = (0, react_1.useRef)(null);
  var boxedExpression = (0, context_1.useBoxedExpression)();
  (0, react_1.useEffect)(
    function () {
      if (value === "") {
        setPreview("");
      }
    },
    [value]
  );
  var triggerReadMode = (0, react_1.useCallback)(
    function (newValue) {
      var _a;
      if (mode !== exports.EDIT_MODE) {
        return;
      }
      if (value !== newValue) {
        (_a = boxedExpression.boxedExpressionEditorGWTService) === null || _a === void 0
          ? void 0
          : _a.notifyUserAction();
        onCellUpdate(rowIndex, columnId, newValue !== null && newValue !== void 0 ? newValue : value);
      }
      (0, common_1.focusTextArea)(textarea.current);
    },
    [boxedExpression.boxedExpressionEditorGWTService, mode, columnId, onCellUpdate, rowIndex, value]
  );
  var triggerEditMode = (0, react_1.useCallback)(
    function () {
      setPreviousValue(value);
      (0, common_1.blurActiveElement)();
      setMode(exports.EDIT_MODE);
    },
    [value]
  );
  var cssClass = (0, react_1.useCallback)(
    function () {
      var selectedClass = isSelected ? "editable-cell--selected" : "";
      return "editable-cell ".concat(selectedClass, " ").concat(mode);
    },
    [isSelected, mode]
  );
  var onFocus = (0, react_1.useCallback)(
    function () {
      if (mode === exports.EDIT_MODE) {
        return;
      }
      setIsSelected(true);
      (0, common_1.focusTextArea)(textarea.current);
    },
    [mode]
  );
  var onClick = (0, react_1.useCallback)(
    function () {
      if (document.activeElement !== textarea.current) {
        onFocus();
      }
    },
    [onFocus]
  );
  var onTextAreaBlur = (0, react_1.useCallback)(function () {
    return setIsSelected(false);
  }, []);
  var onTextAreaChange = (0, react_1.useCallback)(
    function (event) {
      var _a;
      var newValue = (_a = event.target.value.trim("")) !== null && _a !== void 0 ? _a : "";
      var isPastedValue = newValue.includes("\t") || newValue.includes("\n");
      if (textarea.current && isPastedValue) {
        var pasteValue = newValue.slice(value.length);
        (0, common_1.paste)(pasteValue, textarea.current, boxedExpression.editorRef.current);
        triggerReadMode();
        return;
      }
      onCellUpdate(rowIndex, columnId, newValue !== null && newValue !== void 0 ? newValue : value);
      triggerEditMode();
    },
    [triggerEditMode, value, triggerReadMode, onCellUpdate, rowIndex, columnId, boxedExpression.editorRef]
  );
  var onFeelBlur = (0, react_1.useCallback)(
    function (valueOnBlur) {
      triggerReadMode(valueOnBlur);
      setMode(exports.READ_MODE);
    },
    [triggerReadMode]
  );
  var onFeelKeyDown = (0, react_1.useCallback)(
    function (event, newValue) {
      var _a, _b;
      var key =
        (_a = event === null || event === void 0 ? void 0 : event.code.toLowerCase()) !== null && _a !== void 0
          ? _a
          : "";
      var isModKey = event.altKey || event.ctrlKey || event.shiftKey;
      var isEnter = isModKey && key === "enter";
      var isTab = key === "tab";
      var isEsc = !!key.match("esc");
      if (isEnter || isTab || isEsc) {
        event.preventDefault();
      }
      if (isEnter || isTab) {
        triggerReadMode(newValue);
        setMode(exports.READ_MODE);
      }
      if (isEsc) {
        (_b = feelInputRef.current) === null || _b === void 0 ? void 0 : _b.setMonacoValue(previousValue);
        triggerReadMode(previousValue);
        setMode(exports.READ_MODE);
      }
      if (isTab) {
        (0, common_1.focusNextTextArea)(textarea.current);
      }
    },
    [triggerReadMode, previousValue]
  );
  var onFeelChange = (0, react_1.useCallback)(function (_e, newValue, newPreview) {
    var numberOfValueLines = "".concat(newValue).split("\n").length + 1;
    var numberOfLines = numberOfValueLines < 3 ? 3 : numberOfValueLines;
    setCellHeight(numberOfLines * CELL_LINE_HEIGHT);
    setPreview(newPreview);
  }, []);
  var onFeelLoad = (0, react_1.useCallback)(function (newPreview) {
    setPreview(newPreview);
  }, []);
  var textValue = (0, react_1.useMemo)(
    function () {
      if (!value) {
        return "";
      }
      if (typeof value === "object") {
        return value[columnId];
      }
      return "".concat(value);
    },
    [value, columnId]
  );
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children: (0, jsx_runtime_1.jsxs)(
        "div",
        __assign(
          {
            onDoubleClick: triggerEditMode,
            onClick: onClick,
            style: { height: "".concat(cellHeight, "px") },
            className: cssClass(),
          },
          {
            children: [
              (0, jsx_runtime_1.jsx)(
                "span",
                { className: "editable-cell-value", dangerouslySetInnerHTML: { __html: preview } },
                void 0
              ),
              (0, jsx_runtime_1.jsx)(
                "textarea",
                {
                  "data-testid": "editable-cell-textarea",
                  className: "editable-cell-textarea",
                  ref: textarea,
                  value: textValue,
                  onChange: onTextAreaChange,
                  onFocus: onFocus,
                  onBlur: onTextAreaBlur,
                  readOnly: readOnly,
                },
                void 0
              ),
              (0, jsx_runtime_1.jsx)(
                feel_input_component_1.FeelInput,
                {
                  ref: feelInputRef,
                  enabled: mode === exports.EDIT_MODE,
                  value: textValue,
                  onKeyDown: onFeelKeyDown,
                  onChange: onFeelChange,
                  onLoad: onFeelLoad,
                  options: MONACO_OPTIONS,
                  onBlur: onFeelBlur,
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
exports.EditableCell = EditableCell;
//# sourceMappingURL=EditableCell.js.map

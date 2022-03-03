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
exports.EditTextInline = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var _ = require("lodash");
var i18n_1 = require("../../i18n");
var EditTextInline = function (_a) {
  var onTextChange = _a.onTextChange,
    value = _a.value;
  var i18n = (0, i18n_1.useBoxedExpressionEditorI18n)().i18n;
  var _b = __read((0, react_1.useState)(true), 2),
    toggle = _b[0],
    setToggle = _b[1];
  var onValueBlur = (0, react_1.useCallback)(
    function (event) {
      var changedText = event.target.value;
      onTextChange(changedText);
      setToggle(true);
    },
    [onTextChange]
  );
  var onKeyDown = (0, react_1.useMemo)(function () {
    return function (event) {
      var pressedEnter = _.lowerCase(event.key) === "enter";
      var pressedEscape = _.lowerCase(event.key) === "escape";
      if (pressedEnter) {
        event.currentTarget.blur();
      }
      if (pressedEscape) {
        setToggle(true);
      }
    };
  }, []);
  var onClick = (0, react_1.useMemo)(function () {
    return function () {
      setToggle(false);
    };
  }, []);
  var getTextStyle = (0, react_1.useMemo)(
    function () {
      if (_.isEmpty(value)) {
        return { fontStyle: "italic" };
      }
    },
    [value]
  );
  return toggle
    ? (0, jsx_runtime_1.jsx)(
        "p",
        __assign(
          { className: "pf-u-text-truncate", style: getTextStyle, onClick: onClick },
          { children: value || i18n.enterText }
        ),
        void 0
      )
    : (0, jsx_runtime_1.jsx)(
        "input",
        {
          type: "text",
          autoFocus: true,
          defaultValue: value,
          onBlur: onValueBlur,
          style: { borderRadius: "0.5em", width: "100%" },
          onKeyDown: onKeyDown,
        },
        void 0
      );
};
exports.EditTextInline = EditTextInline;
//# sourceMappingURL=EditTextInline.js.map

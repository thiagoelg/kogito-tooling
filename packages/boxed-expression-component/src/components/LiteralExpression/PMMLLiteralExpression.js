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
exports.PMMLLiteralExpression = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./PMMLLiteralExpression.css");
var react_1 = require("react");
var react_core_1 = require("@patternfly/react-core");
var _ = require("lodash");
var context_1 = require("../../context");
var PMMLLiteralExpression = function (props) {
  var _a, _b;
  var boxedExpression = (0, context_1.useBoxedExpression)();
  var selection = (0, react_1.useRef)(props.selected);
  var _c = __read((0, react_1.useState)(false), 2),
    selectOpen = _c[0],
    setSelectOpen = _c[1];
  var onSelectToggle = (0, react_1.useCallback)(function (isOpen) {
    return setSelectOpen(isOpen);
  }, []);
  var onSelect = (0, react_1.useCallback)(
    function (event, updatedSelection) {
      var _a;
      setSelectOpen(false);
      selection.current = updatedSelection;
      (_a = props.onUpdatingRecursiveExpression) === null || _a === void 0
        ? void 0
        : _a.call(props, __assign(__assign({}, props), { selected: updatedSelection }));
    },
    [props]
  );
  var getOptions = (0, react_1.useCallback)(
    function () {
      return _.map(props.getOptions(), function (key) {
        return (0,
        jsx_runtime_1.jsx)(react_core_1.SelectOption, __assign({ "data-testid": "pmml-".concat(key), value: key, "data-ouia-component-id": key }, { children: key }), key);
      });
    },
    [props]
  );
  var getSelection = (0, react_1.useCallback)(
    function () {
      return _.includes(props.getOptions(), selection.current) ? selection.current : undefined;
    },
    [props]
  );
  var showingPlaceholder = (0, react_1.useCallback)(
    function () {
      return _.isEmpty(getSelection());
    },
    [getSelection]
  );
  var onSelectorClick = (0, react_1.useCallback)(
    function () {
      var _a;
      (_a = boxedExpression.boxedExpressionEditorGWTService) === null || _a === void 0
        ? void 0
        : _a.selectObject(props.id);
    },
    [boxedExpression.boxedExpressionEditorGWTService, props.id]
  );
  return (0, jsx_runtime_1.jsx)(
    "div",
    __assign(
      { onClick: onSelectorClick, className: "".concat(props.id, " pmml-literal-expression") },
      {
        children: (0, jsx_runtime_1.jsx)(
          react_core_1.Select,
          __assign(
            {
              className: "pmml-selector ".concat(showingPlaceholder() ? "showing-placeholder" : ""),
              menuAppendTo:
                (_b = (_a = boxedExpression.editorRef) === null || _a === void 0 ? void 0 : _a.current) !== null &&
                _b !== void 0
                  ? _b
                  : "inline",
              ouiaId: "pmml-literal-expression-selector",
              placeholderText: props.noOptionsLabel,
              "aria-placeholder": props.noOptionsLabel,
              variant: react_core_1.SelectVariant.single,
              onToggle: onSelectToggle,
              onSelect: onSelect,
              isOpen: selectOpen,
              selections: getSelection(),
              "data-testid": props.testId,
            },
            { children: getOptions() }
          ),
          void 0
        ),
      }
    ),
    void 0
  );
};
exports.PMMLLiteralExpression = PMMLLiteralExpression;
//# sourceMappingURL=PMMLLiteralExpression.js.map

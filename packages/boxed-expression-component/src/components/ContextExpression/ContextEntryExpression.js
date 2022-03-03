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
exports.ContextEntryExpression = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("../../api");
var react_1 = require("react");
var LogicTypeSelector_1 = require("../LogicTypeSelector");
var _ = require("lodash");
var ContextEntryExpression = function (_a) {
  var expression = _a.expression,
    onUpdatingRecursiveExpression = _a.onUpdatingRecursiveExpression,
    onExpressionResetting = _a.onExpressionResetting;
  var expressionContainerRef = (0, react_1.useRef)(null);
  var getLogicTypeSelectorRef = (0, react_1.useCallback)(function () {
    return expressionContainerRef.current;
  }, []);
  var onLogicTypeUpdating = (0, react_1.useCallback)(
    function (logicType) {
      onUpdatingRecursiveExpression(_.omit(__assign(__assign({}, expression), { logicType: logicType }), "isHeadless"));
    },
    [onUpdatingRecursiveExpression, expression]
  );
  var onLogicTypeResetting = (0, react_1.useCallback)(
    function () {
      onExpressionResetting === null || onExpressionResetting === void 0 ? void 0 : onExpressionResetting();
      onUpdatingRecursiveExpression(
        _.omit(__assign(__assign({}, expression), { logicType: api_1.LogicType.Undefined }), "isHeadless")
      );
    },
    [onExpressionResetting, onUpdatingRecursiveExpression, expression]
  );
  return (0, jsx_runtime_1.jsx)(
    "div",
    __assign(
      { className: "entry-expression", ref: expressionContainerRef },
      {
        children: (0, jsx_runtime_1.jsx)(
          LogicTypeSelector_1.LogicTypeSelector,
          {
            isHeadless: true,
            onUpdatingRecursiveExpression: onUpdatingRecursiveExpression,
            selectedExpression: expression,
            onLogicTypeUpdating: onLogicTypeUpdating,
            onLogicTypeResetting: onLogicTypeResetting,
            getPlacementRef: getLogicTypeSelectorRef,
          },
          void 0
        ),
      }
    ),
    void 0
  );
};
exports.ContextEntryExpression = ContextEntryExpression;
//# sourceMappingURL=ContextEntryExpression.js.map

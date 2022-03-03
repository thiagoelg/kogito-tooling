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
exports.ExpressionContainer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./ExpressionContainer.css");
var api_1 = require("../../api");
var LogicTypeSelector_1 = require("../LogicTypeSelector");
var context_1 = require("../../context");
var ExpressionContainer = function (_a) {
  var selectedExpression = _a.selectedExpression,
    onExpressionChange = _a.onExpressionChange;
  var boxedExpressionEditorGWTService = (0, context_1.useBoxedExpression)().boxedExpressionEditorGWTService;
  var expressionContainerRef = (0, react_1.useRef)(null);
  var updateExpressionNameAndDataType = (0, react_1.useCallback)(
    function (updatedName, updatedDataType) {
      if (selectedExpression.name === updatedName && selectedExpression.dataType === updatedDataType) {
        return;
      }
      onExpressionChange === null || onExpressionChange === void 0
        ? void 0
        : onExpressionChange(
            __assign(__assign({}, selectedExpression), { name: updatedName, dataType: updatedDataType })
          );
    },
    [onExpressionChange, selectedExpression]
  );
  var onLogicTypeUpdating = (0, react_1.useCallback)(
    function (logicType) {
      onExpressionChange === null || onExpressionChange === void 0
        ? void 0
        : onExpressionChange(__assign(__assign({}, selectedExpression), { logicType: logicType }));
    },
    [onExpressionChange, selectedExpression]
  );
  var onLogicTypeResetting = (0, react_1.useCallback)(
    function () {
      var _a;
      var updatedExpression = {
        id: selectedExpression.id,
        name: selectedExpression.name,
        dataType: selectedExpression.dataType,
        logicType: api_1.LogicType.Undefined,
      };
      (_a =
        boxedExpressionEditorGWTService === null || boxedExpressionEditorGWTService === void 0
          ? void 0
          : boxedExpressionEditorGWTService.resetExpressionDefinition) === null || _a === void 0
        ? void 0
        : _a.call(boxedExpressionEditorGWTService, updatedExpression);
      onExpressionChange === null || onExpressionChange === void 0 ? void 0 : onExpressionChange(updatedExpression);
    },
    [
      boxedExpressionEditorGWTService,
      onExpressionChange,
      selectedExpression.dataType,
      selectedExpression.name,
      selectedExpression.id,
    ]
  );
  return (0, jsx_runtime_1.jsxs)(
    "div",
    __assign(
      { className: "expression-container" },
      {
        children: [
          (0, jsx_runtime_1.jsxs)(
            "div",
            __assign(
              { className: "expression-name-and-logic-type" },
              {
                children: [
                  (0, jsx_runtime_1.jsx)(
                    "span",
                    __assign({ className: "expression-title" }, { children: selectedExpression.name }),
                    void 0
                  ),
                  (0, jsx_runtime_1.jsxs)(
                    "span",
                    __assign(
                      { className: "expression-type" },
                      { children: ["(", selectedExpression.logicType || api_1.LogicType.Undefined, ")"] }
                    ),
                    void 0
                  ),
                ],
              }
            ),
            void 0
          ),
          (0, jsx_runtime_1.jsx)(
            "div",
            __assign(
              {
                className: "expression-container-box",
                ref: expressionContainerRef,
                "data-ouia-component-id": "expression-container",
              },
              {
                children: (0, jsx_runtime_1.jsx)(
                  LogicTypeSelector_1.LogicTypeSelector,
                  {
                    selectedExpression: selectedExpression,
                    onLogicTypeUpdating: onLogicTypeUpdating,
                    onLogicTypeResetting: onLogicTypeResetting,
                    onUpdatingNameAndDataType: updateExpressionNameAndDataType,
                    getPlacementRef: (0, react_1.useCallback)(function () {
                      return expressionContainerRef.current;
                    }, []),
                  },
                  void 0
                ),
              }
            ),
            void 0
          ),
        ],
      }
    ),
    void 0
  );
};
exports.ExpressionContainer = ExpressionContainer;
//# sourceMappingURL=ExpressionContainer.js.map

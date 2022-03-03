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
exports.ContextEntryExpressionCell = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./ContextEntryExpressionCell.css");
var react_1 = require("react");
var ContextEntryExpression_1 = require("./ContextEntryExpression");
var _ = require("lodash");
var ContextEntryExpressionCell = function (_a) {
  var data = _a.data,
    rowIndex = _a.rowIndex,
    onRowUpdate = _a.onRowUpdate;
  var onUpdatingRecursiveExpression = (0, react_1.useCallback)(
    function (expression) {
      var updatedEntryInfo = __assign({}, data[rowIndex].entryInfo);
      if (data[rowIndex].nameAndDataTypeSynchronized && _.size(expression.name) && _.size(expression.dataType)) {
        updatedEntryInfo.name = expression.name;
        updatedEntryInfo.dataType = expression.dataType;
      }
      onRowUpdate(
        rowIndex,
        __assign(__assign({}, data[rowIndex]), { entryInfo: updatedEntryInfo, entryExpression: expression })
      );
    },
    [onRowUpdate, data, rowIndex]
  );
  return (0, jsx_runtime_1.jsx)(
    "div",
    __assign(
      { className: "context-entry-expression-cell" },
      {
        children: (0, jsx_runtime_1.jsx)(
          ContextEntryExpression_1.ContextEntryExpression,
          {
            expression: data[rowIndex].entryExpression,
            onUpdatingRecursiveExpression: onUpdatingRecursiveExpression,
            onExpressionResetting: data[rowIndex].onExpressionResetting,
          },
          void 0
        ),
      }
    ),
    void 0
  );
};
exports.ContextEntryExpressionCell = ContextEntryExpressionCell;
//# sourceMappingURL=ContextEntryExpressionCell.js.map

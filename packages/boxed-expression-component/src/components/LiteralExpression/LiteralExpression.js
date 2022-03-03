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
exports.LiteralExpression = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./LiteralExpression.css");
var react_1 = require("react");
var api_1 = require("../../api");
var EditExpressionMenu_1 = require("../EditExpressionMenu");
var Resizer_1 = require("../Resizer");
var Table_1 = require("../Table");
var context_1 = require("../../context");
var HEADER_WIDTH = 250;
var LiteralExpression = function (literalExpression) {
  var _a, _b, _c, _d, _e, _f, _g;
  var _h = (0, context_1.useBoxedExpression)(),
    boxedExpressionEditorGWTService = _h.boxedExpressionEditorGWTService,
    decisionNodeId = _h.decisionNodeId;
  var spreadLiteralExpressionDefinition = (0, react_1.useCallback)(
    function (literalExpressionUpdate) {
      var _a, _b, _c;
      var expressionDefinition = __assign(
        __assign(
          {
            id: literalExpression.id,
            name: (_a = literalExpression.name) !== null && _a !== void 0 ? _a : EditExpressionMenu_1.EXPRESSION_NAME,
            dataType: (_b = literalExpression.dataType) !== null && _b !== void 0 ? _b : api_1.DataType.Undefined,
            logicType: api_1.LogicType.LiteralExpression,
            content: (_c = literalExpression.content) !== null && _c !== void 0 ? _c : "",
          },
          !literalExpression.isHeadless && literalExpression.width !== HEADER_WIDTH
            ? { width: literalExpression.width }
            : {}
        ),
        literalExpressionUpdate
      );
      (0, api_1.executeIfExpressionDefinitionChanged)(
        literalExpression,
        expressionDefinition,
        function () {
          var _a, _b;
          if (literalExpression.isHeadless) {
            (_a = literalExpression.onUpdatingRecursiveExpression) === null || _a === void 0
              ? void 0
              : _a.call(literalExpression, expressionDefinition);
          } else {
            (_b =
              boxedExpressionEditorGWTService === null || boxedExpressionEditorGWTService === void 0
                ? void 0
                : boxedExpressionEditorGWTService.broadcastLiteralExpressionDefinition) === null || _b === void 0
              ? void 0
              : _b.call(boxedExpressionEditorGWTService, expressionDefinition);
          }
        },
        ["name", "dataType", "content", "width"]
      );
    },
    [boxedExpressionEditorGWTService, literalExpression]
  );
  var onExpressionUpdate = (0, react_1.useCallback)(
    function (_a) {
      var _b;
      var _c = _a.dataType,
        dataType = _c === void 0 ? api_1.DataType.Undefined : _c,
        _d = _a.name,
        name = _d === void 0 ? EditExpressionMenu_1.EXPRESSION_NAME : _d;
      (_b = literalExpression.onUpdatingNameAndDataType) === null || _b === void 0
        ? void 0
        : _b.call(literalExpression, name, dataType);
      spreadLiteralExpressionDefinition({
        name: name,
        dataType: dataType,
      });
    },
    [literalExpression, spreadLiteralExpressionDefinition]
  );
  var onHorizontalResizeStop = (0, react_1.useCallback)(
    function (width) {
      spreadLiteralExpressionDefinition({
        width: width,
      });
    },
    [spreadLiteralExpressionDefinition]
  );
  var onCellUpdate = (0, react_1.useCallback)(
    function (_number, _columnId, value) {
      spreadLiteralExpressionDefinition({
        content: value,
      });
    },
    [spreadLiteralExpressionDefinition]
  );
  (0, react_1.useEffect)(function () {
    var _a;
    if (!literalExpression.isHeadless) {
      (_a =
        boxedExpressionEditorGWTService === null || boxedExpressionEditorGWTService === void 0
          ? void 0
          : boxedExpressionEditorGWTService.broadcastLiteralExpressionDefinition) === null || _a === void 0
        ? void 0
        : _a.call(
            boxedExpressionEditorGWTService,
            __assign(__assign({}, literalExpression), { logicType: api_1.LogicType.LiteralExpression })
          );
    }
  }, []);
  var onHeaderClick = (0, react_1.useCallback)(
    function () {
      boxedExpressionEditorGWTService === null || boxedExpressionEditorGWTService === void 0
        ? void 0
        : boxedExpressionEditorGWTService.selectObject(decisionNodeId);
    },
    [boxedExpressionEditorGWTService, decisionNodeId]
  );
  var onBodyClick = (0, react_1.useCallback)(
    function () {
      boxedExpressionEditorGWTService === null || boxedExpressionEditorGWTService === void 0
        ? void 0
        : boxedExpressionEditorGWTService.selectObject(literalExpression.id);
    },
    [boxedExpressionEditorGWTService, literalExpression.id]
  );
  return (0, jsx_runtime_1.jsxs)(
    "div",
    __assign(
      { className: "literal-expression" },
      {
        children: [
          !literalExpression.isHeadless &&
            (0, jsx_runtime_1.jsx)(
              "div",
              __assign(
                { className: "literal-expression-header", onClick: onHeaderClick },
                {
                  children: (0, jsx_runtime_1.jsx)(
                    Resizer_1.Resizer,
                    __assign(
                      {
                        width: (_a = literalExpression.width) !== null && _a !== void 0 ? _a : HEADER_WIDTH,
                        minWidth: HEADER_WIDTH,
                        onHorizontalResizeStop: onHorizontalResizeStop,
                      },
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          EditExpressionMenu_1.EditExpressionMenu,
                          __assign(
                            {
                              selectedExpressionName:
                                (_b = literalExpression.name) !== null && _b !== void 0
                                  ? _b
                                  : EditExpressionMenu_1.EXPRESSION_NAME,
                              selectedDataType:
                                (_c = literalExpression.dataType) !== null && _c !== void 0
                                  ? _c
                                  : api_1.DataType.Undefined,
                              onExpressionUpdate: onExpressionUpdate,
                            },
                            {
                              children: (0, jsx_runtime_1.jsxs)(
                                "div",
                                __assign(
                                  { className: "expression-info" },
                                  {
                                    children: [
                                      (0, jsx_runtime_1.jsx)(
                                        "p",
                                        __assign(
                                          { className: "expression-name pf-u-text-truncate" },
                                          {
                                            children:
                                              (_d = literalExpression.name) !== null && _d !== void 0
                                                ? _d
                                                : EditExpressionMenu_1.EXPRESSION_NAME,
                                          }
                                        ),
                                        void 0
                                      ),
                                      (0, jsx_runtime_1.jsxs)(
                                        "p",
                                        __assign(
                                          { className: "expression-data-type pf-u-text-truncate" },
                                          {
                                            children: [
                                              "(",
                                              (_e = literalExpression.dataType) !== null && _e !== void 0
                                                ? _e
                                                : api_1.DataType.Undefined,
                                              ")",
                                            ],
                                          }
                                        ),
                                        void 0
                                      ),
                                    ],
                                  }
                                ),
                                void 0
                              ),
                            }
                          ),
                          void 0
                        ),
                      }
                    ),
                    void 0
                  ),
                }
              ),
              void 0
            ),
          (0, jsx_runtime_1.jsx)(
            "div",
            __assign(
              { className: "".concat(literalExpression.id, " literal-expression-body"), onClick: onBodyClick },
              {
                children: (0, jsx_runtime_1.jsx)(
                  Table_1.EditableCell,
                  {
                    value: (_f = literalExpression.content) !== null && _f !== void 0 ? _f : "",
                    rowIndex: 0,
                    columnId: (_g = literalExpression.id) !== null && _g !== void 0 ? _g : "-",
                    onCellUpdate: onCellUpdate,
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
exports.LiteralExpression = LiteralExpression;
//# sourceMappingURL=LiteralExpression.js.map

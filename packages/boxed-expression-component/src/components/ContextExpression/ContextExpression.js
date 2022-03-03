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
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextExpression = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./ContextExpression.css");
var react_1 = require("react");
var api_1 = require("../../api");
var Table_1 = require("../Table");
var i18n_1 = require("../../i18n");
var ContextEntryExpressionCell_1 = require("./ContextEntryExpressionCell");
var _ = require("lodash");
var ContextEntryExpression_1 = require("./ContextEntryExpression");
var ContextEntryInfoCell_1 = require("./ContextEntryInfoCell");
var Resizer_1 = require("../Resizer");
var context_1 = require("../../context");
var DEFAULT_CONTEXT_ENTRY_NAME = "ContextEntry-1";
var DEFAULT_CONTEXT_ENTRY_DATA_TYPE = api_1.DataType.Undefined;
var ContextExpression = function (contextExpression) {
  var _a, _b, _c;
  var i18n = (0, i18n_1.useBoxedExpressionEditorI18n)().i18n;
  var _d = (0, context_1.useBoxedExpression)(),
    setSupervisorHash = _d.setSupervisorHash,
    boxedExpressionEditorGWTService = _d.boxedExpressionEditorGWTService,
    decisionNodeId = _d.decisionNodeId;
  var rows = (0, react_1.useMemo)(
    function () {
      var _a;
      return (_a = contextExpression.contextEntries) !== null && _a !== void 0
        ? _a
        : [
            {
              entryInfo: {
                id: (0, api_1.generateUuid)(),
                name: DEFAULT_CONTEXT_ENTRY_NAME,
                dataType: DEFAULT_CONTEXT_ENTRY_DATA_TYPE,
              },
              entryExpression: {
                name: DEFAULT_CONTEXT_ENTRY_NAME,
                dataType: DEFAULT_CONTEXT_ENTRY_DATA_TYPE,
              },
              nameAndDataTypeSynchronized: true,
            },
          ];
    },
    [contextExpression.contextEntries]
  );
  var spreadContextExpressionDefinition = (0, react_1.useCallback)(
    function (contextExpressionUpdated) {
      var _a, _b, _c, _d;
      var updatedDefinition = __assign(
        {
          id: contextExpression.id,
          logicType: api_1.LogicType.Context,
          name: (_a = contextExpression.name) !== null && _a !== void 0 ? _a : DEFAULT_CONTEXT_ENTRY_NAME,
          dataType: (_b = contextExpression.dataType) !== null && _b !== void 0 ? _b : DEFAULT_CONTEXT_ENTRY_DATA_TYPE,
          contextEntries: rows,
          result: contextExpression.result,
          entryInfoWidth:
            (_c = contextExpression.entryInfoWidth) !== null && _c !== void 0 ? _c : api_1.DEFAULT_ENTRY_INFO_MIN_WIDTH,
          entryExpressionWidth:
            (_d = contextExpression.entryExpressionWidth) !== null && _d !== void 0
              ? _d
              : api_1.DEFAULT_ENTRY_EXPRESSION_MIN_WIDTH,
          noClearAction: contextExpression.noClearAction,
          renderResult: contextExpression.renderResult,
          noHandlerMenu: contextExpression.noHandlerMenu,
        },
        contextExpressionUpdated
      );
      var expression = _.omit(updatedDefinition, ["name", "dataType", "isHeadless"]);
      (0, api_1.executeIfExpressionDefinitionChanged)(
        contextExpression,
        updatedDefinition,
        function () {
          var _a, _b;
          if (contextExpression.isHeadless) {
            (_a = contextExpression.onUpdatingRecursiveExpression) === null || _a === void 0
              ? void 0
              : _a.call(contextExpression, expression);
          } else {
            setSupervisorHash((0, Resizer_1.hashfy)(expression));
            (_b =
              boxedExpressionEditorGWTService === null || boxedExpressionEditorGWTService === void 0
                ? void 0
                : boxedExpressionEditorGWTService.broadcastContextExpressionDefinition) === null || _b === void 0
              ? void 0
              : _b.call(boxedExpressionEditorGWTService, updatedDefinition);
          }
        },
        ["name", "dataType", "contextEntries", "result", "entryInfoWidth", "entryExpressionWidth"]
      );
    },
    [boxedExpressionEditorGWTService, contextExpression, setSupervisorHash, rows]
  );
  var setInfoWidth = (0, react_1.useCallback)(
    function (newInfoWidth) {
      spreadContextExpressionDefinition({ entryInfoWidth: newInfoWidth });
    },
    [spreadContextExpressionDefinition]
  );
  var setExpressionWidth = (0, react_1.useCallback)(
    function (newEntryExpressionWidth) {
      spreadContextExpressionDefinition({ entryExpressionWidth: newEntryExpressionWidth });
    },
    [spreadContextExpressionDefinition]
  );
  var columns = (0, react_1.useMemo)(
    function () {
      var _a, _b, _c, _d;
      return [
        {
          label: (_a = contextExpression.name) !== null && _a !== void 0 ? _a : DEFAULT_CONTEXT_ENTRY_NAME,
          accessor: decisionNodeId,
          dataType: (_b = contextExpression.dataType) !== null && _b !== void 0 ? _b : DEFAULT_CONTEXT_ENTRY_DATA_TYPE,
          disableHandlerOnHeader: true,
          columns: [
            {
              accessor: "entryInfo",
              disableHandlerOnHeader: true,
              width:
                (_c = contextExpression.entryInfoWidth) !== null && _c !== void 0
                  ? _c
                  : api_1.DEFAULT_ENTRY_INFO_MIN_WIDTH,
              setWidth: setInfoWidth,
              minWidth: api_1.DEFAULT_ENTRY_INFO_MIN_WIDTH,
            },
            {
              accessor: "entryExpression",
              disableHandlerOnHeader: true,
              width:
                (_d = contextExpression.entryExpressionWidth) !== null && _d !== void 0
                  ? _d
                  : api_1.DEFAULT_ENTRY_EXPRESSION_MIN_WIDTH,
              setWidth: setExpressionWidth,
              minWidth: api_1.DEFAULT_ENTRY_EXPRESSION_MIN_WIDTH,
            },
          ],
        },
      ];
    },
    [
      contextExpression.name,
      contextExpression.dataType,
      contextExpression.entryInfoWidth,
      contextExpression.entryExpressionWidth,
      decisionNodeId,
      setInfoWidth,
      setExpressionWidth,
    ]
  );
  var onColumnsUpdate = (0, react_1.useCallback)(
    function (_a) {
      var _b, _c;
      var _d = __read(_a.columns, 1),
        column = _d[0];
      (_b = contextExpression.onUpdatingNameAndDataType) === null || _b === void 0
        ? void 0
        : _b.call(contextExpression, column.label, column.dataType);
      var updatedWidth =
        (_c = column.columns) === null || _c === void 0
          ? void 0
          : _c.reduce(function (acc, e) {
              if (e.id === "entryInfo") {
                acc["entryInfoWidth"] = e.width;
              }
              if (e.id === "entryExpression") {
                acc["entryExpressionWidth"] = e.width;
              }
              return acc;
            }, {});
      spreadContextExpressionDefinition(__assign({ name: column.label, dataType: column.dataType }, updatedWidth));
    },
    [contextExpression, spreadContextExpressionDefinition]
  );
  var onRowAdding = (0, react_1.useCallback)(
    function () {
      var generatedName = (0, api_1.generateNextAvailableEntryName)(
        _.map(rows, function (row) {
          return row.entryInfo;
        }),
        "ContextEntry"
      );
      return {
        entryInfo: {
          id: (0, api_1.generateUuid)(),
          name: generatedName,
          dataType: api_1.DataType.Undefined,
        },
        entryExpression: {
          name: generatedName,
          dataType: api_1.DataType.Undefined,
        },
        editInfoPopoverLabel: i18n.editContextEntry,
        nameAndDataTypeSynchronized: true,
      };
    },
    [i18n.editContextEntry, rows]
  );
  var onRowsUpdate = (0, react_1.useCallback)(
    function (_a) {
      var rows = _a.rows;
      spreadContextExpressionDefinition({ contextEntries: __spreadArray([], __read(rows), false) });
    },
    [spreadContextExpressionDefinition]
  );
  var onUpdatingRecursiveExpression = (0, react_1.useCallback)(
    function (expression) {
      if (expression.logicType === api_1.LogicType.Undefined) {
        spreadContextExpressionDefinition({ result: { logicType: api_1.LogicType.Undefined } });
      } else {
        var filteredExpression = _.omit(expression, "onUpdatingRecursiveExpression");
        spreadContextExpressionDefinition({ result: __assign({}, filteredExpression) });
      }
    },
    [spreadContextExpressionDefinition]
  );
  var getHeaderVisibility = (0, react_1.useMemo)(
    function () {
      return contextExpression.isHeadless
        ? api_1.TableHeaderVisibility.None
        : api_1.TableHeaderVisibility.SecondToLastLevel;
    },
    [contextExpression.isHeadless]
  );
  var defaultCell = (0, react_1.useMemo)(
    function () {
      return {
        entryInfo: (0, ContextEntryInfoCell_1.getContextEntryInfoCell)(i18n.editContextEntry),
        entryExpression: ContextEntryExpressionCell_1.ContextEntryExpressionCell,
      };
    },
    [i18n.editContextEntry]
  );
  var handlerConfiguration = (0, react_1.useMemo)(
    function () {
      return contextExpression.noHandlerMenu ? undefined : (0, api_1.getHandlerConfiguration)(i18n, i18n.contextEntry);
    },
    [i18n, contextExpression.noHandlerMenu]
  );
  var getRowKey = (0, react_1.useCallback)(function (row) {
    return (0, api_1.getEntryKey)(row);
  }, []);
  var resetRowCustomFunction = (0, react_1.useCallback)(function (row) {
    var _a, _b;
    var updatedRow = (0, api_1.resetEntry)(row);
    updatedRow.entryExpression.name =
      (_a = updatedRow.entryInfo.name) !== null && _a !== void 0 ? _a : DEFAULT_CONTEXT_ENTRY_NAME;
    updatedRow.entryExpression.dataType =
      (_b = updatedRow.entryInfo.dataType) !== null && _b !== void 0 ? _b : DEFAULT_CONTEXT_ENTRY_DATA_TYPE;
    return updatedRow;
  }, []);
  var onHorizontalResizeStop = (0, react_1.useCallback)(
    function (width) {
      setExpressionWidth(width);
    },
    [setExpressionWidth]
  );
  var shouldRenderResult = (0, react_1.useMemo)(
    function () {
      if (contextExpression.renderResult === undefined) {
        return true;
      }
      return contextExpression.renderResult;
    },
    [contextExpression.renderResult]
  );
  return (0, jsx_runtime_1.jsx)(
    "div",
    __assign(
      { className: "context-expression ".concat(contextExpression.id) },
      {
        children: (0, jsx_runtime_1.jsx)(
          Table_1.Table,
          __assign(
            {
              tableId: contextExpression.id,
              headerLevels: 1,
              headerVisibility: getHeaderVisibility,
              defaultCell: defaultCell,
              columns: columns,
              rows: rows,
              onColumnsUpdate: onColumnsUpdate,
              onRowAdding: onRowAdding,
              onRowsUpdate: onRowsUpdate,
              handlerConfiguration: handlerConfiguration,
              getRowKey: getRowKey,
              resetRowCustomFunction: resetRowCustomFunction,
            },
            {
              children: shouldRenderResult
                ? [
                    (0, jsx_runtime_1.jsx)(
                      Resizer_1.Resizer,
                      __assign(
                        {
                          width:
                            (_a = contextExpression.entryInfoWidth) !== null && _a !== void 0
                              ? _a
                              : api_1.DEFAULT_ENTRY_INFO_MIN_WIDTH,
                          minWidth: api_1.DEFAULT_ENTRY_INFO_MIN_WIDTH,
                          onHorizontalResizeStop: onHorizontalResizeStop,
                        },
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            "div",
                            __assign({ className: "context-result" }, { children: "<result>" }),
                            void 0
                          ),
                        }
                      ),
                      "context-result"
                    ),
                    (0, jsx_runtime_1.jsx)(
                      Resizer_1.Resizer,
                      __assign(
                        {
                          width:
                            (_b = contextExpression.entryExpressionWidth) !== null && _b !== void 0
                              ? _b
                              : api_1.DEFAULT_ENTRY_EXPRESSION_MIN_WIDTH,
                          minWidth: api_1.DEFAULT_ENTRY_EXPRESSION_MIN_WIDTH,
                          onHorizontalResizeStop: onHorizontalResizeStop,
                        },
                        {
                          children: (0, jsx_runtime_1.jsx)(
                            ContextEntryExpression_1.ContextEntryExpression,
                            {
                              expression: (_c = contextExpression.result) !== null && _c !== void 0 ? _c : {},
                              onUpdatingRecursiveExpression: onUpdatingRecursiveExpression,
                            },
                            void 0
                          ),
                        }
                      ),
                      "context-expression"
                    ),
                  ]
                : undefined,
            }
          ),
          void 0
        ),
      }
    ),
    void 0
  );
};
exports.ContextExpression = ContextExpression;
//# sourceMappingURL=ContextExpression.js.map

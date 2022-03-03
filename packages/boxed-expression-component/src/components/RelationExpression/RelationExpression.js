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
exports.RelationExpression = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./RelationExpression.css");
var lodash_1 = require("lodash");
var react_1 = require("react");
require("@patternfly/react-styles/css/utilities/Text/text.css");
var api_1 = require("../../api");
var Table_1 = require("../Table");
var i18n_1 = require("../../i18n");
var Resizer_1 = require("../Resizer");
var context_1 = require("../../context");
var RelationExpression = function (relationProps) {
  var FIRST_COLUMN_NAME = "column-1";
  var i18n = (0, i18n_1.useBoxedExpressionEditorI18n)().i18n;
  var boxedExpressionEditorGWTService = (0, context_1.useBoxedExpression)().boxedExpressionEditorGWTService;
  var handlerConfiguration = [
    {
      group: i18n.columns,
      items: [
        { name: i18n.columnOperations.insertLeft, type: api_1.TableOperation.ColumnInsertLeft },
        { name: i18n.columnOperations.insertRight, type: api_1.TableOperation.ColumnInsertRight },
        { name: i18n.columnOperations.delete, type: api_1.TableOperation.ColumnDelete },
      ],
    },
    {
      group: i18n.rows,
      items: [
        { name: i18n.rowOperations.insertAbove, type: api_1.TableOperation.RowInsertAbove },
        { name: i18n.rowOperations.insertBelow, type: api_1.TableOperation.RowInsertBelow },
        { name: i18n.rowOperations.delete, type: api_1.TableOperation.RowDelete },
      ],
    },
  ];
  var columns = (0, react_1.useMemo)(
    function () {
      return relationProps.columns === undefined
        ? [
            {
              id: (0, api_1.generateUuid)(),
              name: FIRST_COLUMN_NAME,
              dataType: api_1.DataType.Undefined,
              width: Resizer_1.DEFAULT_MIN_WIDTH,
            },
          ]
        : relationProps.columns;
    },
    [relationProps]
  );
  var rows = (0, react_1.useMemo)(
    function () {
      return relationProps.rows === undefined ? [{ id: (0, api_1.generateUuid)(), cells: [""] }] : relationProps.rows;
    },
    [relationProps]
  );
  var spreadRelationExpressionDefinition = (0, react_1.useCallback)(
    function (newColumns, newRows) {
      var expressionDefinition = __assign(__assign({}, relationProps), {
        columns: newColumns !== null && newColumns !== void 0 ? newColumns : columns,
        rows: newRows !== null && newRows !== void 0 ? newRows : rows,
      });
      (0, api_1.executeIfExpressionDefinitionChanged)(
        relationProps,
        expressionDefinition,
        function () {
          var _a, _b;
          if (relationProps.isHeadless) {
            (_a = relationProps.onUpdatingRecursiveExpression) === null || _a === void 0
              ? void 0
              : _a.call(relationProps, expressionDefinition);
          } else {
            (_b =
              boxedExpressionEditorGWTService === null || boxedExpressionEditorGWTService === void 0
                ? void 0
                : boxedExpressionEditorGWTService.broadcastRelationExpressionDefinition) === null || _b === void 0
              ? void 0
              : _b.call(boxedExpressionEditorGWTService, expressionDefinition);
          }
        },
        ["columns", "rows"]
      );
    },
    [boxedExpressionEditorGWTService, relationProps, columns, rows]
  );
  var convertColumnsForTheTable = (0, react_1.useMemo)(
    function () {
      return columns.map(function (column) {
        return __assign(
          { accessor: column.id, label: column.name, dataType: column.dataType },
          column.width ? { width: column.width } : {}
        );
      });
    },
    [columns]
  );
  var convertRowsForTheTable = (0, react_1.useMemo)(
    function () {
      return lodash_1.default
        .chain(rows)
        .map(function (row) {
          var updatedRow = lodash_1.default
            .chain(columns)
            .reduce(function (tableRow, column, columnIndex) {
              tableRow[column.id] = row.cells[columnIndex] || "";
              return tableRow;
            }, {})
            .value();
          updatedRow.id = row.id;
          return updatedRow;
        })
        .value();
    },
    [rows, columns]
  );
  var onRowsUpdate = (0, react_1.useCallback)(
    function (_a) {
      var rows = _a.rows,
        columns = _a.columns;
      var newRows = lodash_1.default
        .chain(rows)
        .map(function (tableRow) {
          var cells = lodash_1.default
            .chain(columns)
            .reduce(function (row, column) {
              var _a;
              row.push((_a = tableRow[column.accessor]) !== null && _a !== void 0 ? _a : "");
              return row;
            }, [])
            .value();
          return { id: tableRow.id, cells: cells };
        })
        .value();
      spreadRelationExpressionDefinition(undefined, newRows);
    },
    [spreadRelationExpressionDefinition]
  );
  var onColumnsUpdate = (0, react_1.useCallback)(
    function (_a) {
      var columns = _a.columns,
        operation = _a.operation,
        columnIndex = _a.columnIndex;
      var newColumns = columns.map(function (columnInstance) {
        return {
          id: columnInstance.accessor,
          name: columnInstance.label,
          dataType: columnInstance.dataType,
          width: columnInstance.width,
        };
      });
      var newRows = rows.map(function (tableRow) {
        switch (operation) {
          case api_1.TableOperation.ColumnInsertLeft:
            return __assign(__assign({}, tableRow), {
              cells: __spreadArray(
                __spreadArray(__spreadArray([], __read(tableRow.cells.slice(0, columnIndex)), false), [""], false),
                __read(tableRow.cells.slice(columnIndex)),
                false
              ),
            });
          case api_1.TableOperation.ColumnInsertRight:
            return __assign(__assign({}, tableRow), {
              cells: __spreadArray(
                __spreadArray(__spreadArray([], __read(tableRow.cells.slice(0, columnIndex + 1)), false), [""], false),
                __read(tableRow.cells.slice(columnIndex + 1)),
                false
              ),
            });
          case api_1.TableOperation.ColumnDelete:
            return __assign(__assign({}, tableRow), {
              cells: __spreadArray(
                __spreadArray([], __read(tableRow.cells.slice(0, columnIndex)), false),
                __read(tableRow.cells.slice(columnIndex + 1)),
                false
              ),
            });
        }
        return __assign({}, tableRow);
      });
      spreadRelationExpressionDefinition(newColumns, newRows);
    },
    [spreadRelationExpressionDefinition, rows]
  );
  return (0, jsx_runtime_1.jsx)(
    "div",
    __assign(
      { className: "relation-expression" },
      {
        children: (0, jsx_runtime_1.jsx)(
          Table_1.Table,
          {
            editColumnLabel: i18n.editRelation,
            columns: convertColumnsForTheTable,
            rows: convertRowsForTheTable,
            onColumnsUpdate: onColumnsUpdate,
            onRowsUpdate: onRowsUpdate,
            handlerConfiguration: handlerConfiguration,
          },
          void 0
        ),
      }
    ),
    void 0
  );
};
exports.RelationExpression = RelationExpression;
//# sourceMappingURL=RelationExpression.js.map

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
exports.Table =
  exports.getColumnSearchPredicate =
  exports.getColumnsAtLastLevel =
  exports.DEFAULT_ON_ROW_ADDING =
  exports.NO_TABLE_CONTEXT_MENU_CLASS =
    void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var _ = require("lodash");
var react_1 = require("react");
var react_table_1 = require("react-table");
var react_table_2 = require("@patternfly/react-table");
var uuid_1 = require("uuid");
var api_1 = require("../../api");
var context_1 = require("../../context");
var common_1 = require("./common");
var EditableCell_1 = require("./EditableCell");
require("./Table.css");
var TableBody_1 = require("./TableBody");
var TableHandler_1 = require("./TableHandler");
var TableHeader_1 = require("./TableHeader");
exports.NO_TABLE_CONTEXT_MENU_CLASS = "no-table-context-menu";
var NUMBER_OF_ROWS_COLUMN = "#";
var NUMBER_OF_ROWS_SUBCOLUMN = "0";
var DEFAULT_ON_ROW_ADDING = function () {
  return {};
};
exports.DEFAULT_ON_ROW_ADDING = DEFAULT_ON_ROW_ADDING;
var getColumnsAtLastLevel = function (columns, depth) {
  if (depth === void 0) {
    depth = 0;
  }
  return _.flatMap(columns, function (column) {
    if (_.has(column, "columns")) {
      return depth > 0 ? (0, exports.getColumnsAtLastLevel)(column.columns, depth - 1) : column.columns;
    }
    return column;
  });
};
exports.getColumnsAtLastLevel = getColumnsAtLastLevel;
var getColumnSearchPredicate = function (column) {
  var columnId = column.originalId || column.id || column.accessor;
  return function (columnToCompare) {
    return columnToCompare.id === columnId || columnToCompare.accessor === columnId;
  };
};
exports.getColumnSearchPredicate = getColumnSearchPredicate;
var Table = function (_a) {
  var tableId = _a.tableId,
    children = _a.children,
    getColumnPrefix = _a.getColumnPrefix,
    editColumnLabel = _a.editColumnLabel,
    _b = _a.editableHeader,
    editableHeader = _b === void 0 ? true : _b,
    onColumnsUpdate = _a.onColumnsUpdate,
    onRowsUpdate = _a.onRowsUpdate,
    onRowAdding = _a.onRowAdding,
    _c = _a.controllerCell,
    controllerCell = _c === void 0 ? NUMBER_OF_ROWS_COLUMN : _c,
    defaultCell = _a.defaultCell,
    rows = _a.rows,
    columns = _a.columns,
    handlerConfiguration = _a.handlerConfiguration,
    headerVisibility = _a.headerVisibility,
    _d = _a.headerLevels,
    headerLevels = _d === void 0 ? 0 : _d,
    _e = _a.skipLastHeaderGroup,
    skipLastHeaderGroup = _e === void 0 ? false : _e,
    getRowKey = _a.getRowKey,
    getColumnKey = _a.getColumnKey,
    resetRowCustomFunction = _a.resetRowCustomFunction,
    _f = _a.readOnlyCells,
    readOnlyCells = _f === void 0 ? false : _f;
  var tableRef = (0, react_1.useRef)(null);
  var tableEventUUID = (0, react_1.useMemo)(function () {
    return "table-event-".concat((0, uuid_1.v4)());
  }, []);
  var boxedExpression = (0, context_1.useBoxedExpression)();
  var onRowAddingCallback = (0, react_1.useCallback)(
    function () {
      return onRowAdding ? onRowAdding() : {};
    },
    [onRowAdding]
  );
  var onGetColumnPrefix = (0, react_1.useCallback)(
    function (groupType) {
      return getColumnPrefix ? getColumnPrefix(groupType) : "column-";
    },
    [getColumnPrefix]
  );
  var globalContext = (0, react_1.useContext)(context_1.BoxedExpressionGlobalContext);
  var generateNumberOfRowsSubColumnRecursively = (0, react_1.useCallback)(
    function (column, headerLevels) {
      var _a;
      if (headerLevels > 0) {
        _.assign(column, {
          columns: [
            {
              label: headerVisibility === api_1.TableHeaderVisibility.Full ? NUMBER_OF_ROWS_SUBCOLUMN : controllerCell,
              accessor: NUMBER_OF_ROWS_SUBCOLUMN,
              minWidth: 60,
              width: 60,
              disableResizing: true,
              isCountColumn: true,
              hideFilter: true,
            },
          ],
        });
        if (
          (_a = column === null || column === void 0 ? void 0 : column.columns) === null || _a === void 0
            ? void 0
            : _a.length
        ) {
          generateNumberOfRowsSubColumnRecursively(column.columns[0], headerLevels - 1);
        }
      }
    },
    [controllerCell, headerVisibility]
  );
  var generateNumberOfRowsColumn = (0, react_1.useCallback)(
    function (currentControllerCell, columns) {
      var numberOfRowsColumn = {
        label: currentControllerCell,
        accessor: NUMBER_OF_ROWS_COLUMN,
        width: 60,
        minWidth: 60,
        isCountColumn: true,
      };
      generateNumberOfRowsSubColumnRecursively(numberOfRowsColumn, headerLevels);
      return __spreadArray([numberOfRowsColumn], __read(columns), false);
    },
    [generateNumberOfRowsSubColumnRecursively, headerLevels]
  );
  var evaluateRows = (0, react_1.useCallback)(function (rows) {
    return _.map(rows, function (row) {
      if (_.isEmpty(row.id)) {
        row.id = (0, api_1.generateUuid)();
      }
      return row;
    });
  }, []);
  var tableRows = (0, react_1.useRef)(evaluateRows(rows));
  var _g = __read((0, react_1.useState)(false), 2),
    showTableHandler = _g[0],
    setShowTableHandler = _g[1];
  var _h = __read((0, react_1.useState)(boxedExpression.editorRef.current), 2),
    tableHandlerTarget = _h[0],
    setTableHandlerTarget = _h[1];
  var _j = __read(
      (0, react_1.useState)(
        _.values(api_1.TableOperation).map(function (operation) {
          return parseInt(operation.toString());
        })
      ),
      2
    ),
    tableHandlerAllowedOperations = _j[0],
    setTableHandlerAllowedOperations = _j[1];
  var _k = __read((0, react_1.useState)({}), 2),
    lastSelectedColumn = _k[0],
    setLastSelectedColumn = _k[1];
  var _l = __read((0, react_1.useState)(-1), 2),
    lastSelectedRowIndex = _l[0],
    setLastSelectedRowIndex = _l[1];
  var tableColumns = (0, react_1.useMemo)(
    function () {
      return generateNumberOfRowsColumn(controllerCell, columns);
    },
    [generateNumberOfRowsColumn, columns, controllerCell]
  );
  (0, react_1.useEffect)(
    function () {
      tableRows.current = rows;
    },
    [rows]
  );
  (0, react_1.useEffect)(
    function () {
      var _a;
      function listener(event) {
        if (event.detail.type !== common_1.PASTE_OPERATION || !tableRows.current || tableRows.current.length === 0) {
          return;
        }
        var _a = event.detail,
          pasteValue = _a.pasteValue,
          x = _a.x,
          y = _a.y;
        var rows = tableRows.current;
        var rowFactory = onRowAddingCallback;
        var isLockedTable = _.some(tableRows.current[0], function (col) {
          return col && col.noClearAction;
        });
        if (exports.DEFAULT_ON_ROW_ADDING !== rowFactory && !isLockedTable) {
          var pastedRows = (0, common_1.pasteOnTable)(pasteValue, rows, rowFactory, x, y);
          tableRows.current = pastedRows;
          onRowsUpdate === null || onRowsUpdate === void 0
            ? void 0
            : onRowsUpdate({ rows: pastedRows, columns: columns });
        }
      }
      (_a = boxedExpression.editorRef.current) === null || _a === void 0
        ? void 0
        : _a.addEventListener(tableEventUUID, listener);
      return function () {
        var _a;
        (_a = boxedExpression.editorRef.current) === null || _a === void 0
          ? void 0
          : _a.removeEventListener(tableEventUUID, listener);
      };
    },
    [tableEventUUID, tableRows, onRowsUpdate, onColumnsUpdate, onRowAddingCallback, columns, boxedExpression.editorRef]
  );
  var onColumnsUpdateCallback = (0, react_1.useCallback)(
    function (columns, operation, columnIndex) {
      onColumnsUpdate === null || onColumnsUpdate === void 0
        ? void 0
        : onColumnsUpdate({
            columns: columns.slice(1),
            operation: operation,
            columnIndex: (columnIndex !== null && columnIndex !== void 0 ? columnIndex : 1) - 1,
          });
    },
    [onColumnsUpdate]
  );
  var onRowsUpdateCallback = (0, react_1.useCallback)(
    function (rows, operation, rowIndex) {
      tableRows.current = rows;
      onRowsUpdate === null || onRowsUpdate === void 0
        ? void 0
        : onRowsUpdate({
            rows: __spreadArray([], __read(rows), false),
            operation: operation,
            rowIndex: rowIndex,
            columns: columns,
          });
    },
    [onRowsUpdate, columns]
  );
  var onCellUpdate = (0, react_1.useCallback)(
    function (rowIndex, columnId, value) {
      var updatedTableCells = __spreadArray([], __read(tableRows.current), false);
      updatedTableCells[rowIndex][columnId] = value;
      onRowsUpdateCallback(updatedTableCells);
    },
    [onRowsUpdateCallback]
  );
  var onRowUpdate = (0, react_1.useCallback)(
    function (rowIndex, updatedRow) {
      var updatedRows = __spreadArray([], __read(tableRows.current), false);
      updatedRows[rowIndex] = updatedRow;
      onRowsUpdateCallback(updatedRows);
    },
    [onRowsUpdateCallback]
  );
  var contextMenuIsAvailable = (0, react_1.useCallback)(function (target) {
    var targetIsContainedInCurrentTable = target.closest("table") === tableRef.current;
    var contextMenuAvailableForTarget = !target.classList.contains(exports.NO_TABLE_CONTEXT_MENU_CLASS);
    return targetIsContainedInCurrentTable && contextMenuAvailableForTarget;
  }, []);
  var tableHandlerStateUpdate = (0, react_1.useCallback)(
    function (target, column) {
      var _a, _b;
      setTableHandlerTarget(target);
      (_a = globalContext.currentlyOpenedHandlerCallback) === null || _a === void 0
        ? void 0
        : _a.call(globalContext, false);
      setShowTableHandler(true);
      (_b = globalContext.setCurrentlyOpenedHandlerCallback) === null || _b === void 0
        ? void 0
        : _b.call(globalContext, function () {
            return setShowTableHandler;
          });
      setLastSelectedColumn(column);
    },
    [globalContext]
  );
  var getColumnOperations = (0, react_1.useCallback)(
    function (columnIndex) {
      var _a;
      var columnsAtLastLevel = (0, exports.getColumnsAtLastLevel)(tableColumns);
      var groupTypeForCurrentColumn =
        (_a = columnsAtLastLevel[columnIndex]) === null || _a === void 0 ? void 0 : _a.groupType;
      var columnsByGroupType = _.groupBy(columnsAtLastLevel, function (column) {
        return column.groupType;
      });
      var atLeastTwoColumnsOfTheSameGroupType = groupTypeForCurrentColumn
        ? columnsByGroupType[groupTypeForCurrentColumn].length > 1
        : tableColumns.length > 2;
      var columnCanBeDeleted = columnIndex > 0 && atLeastTwoColumnsOfTheSameGroupType;
      return columnIndex === 0
        ? []
        : __spreadArray(
            [api_1.TableOperation.ColumnInsertLeft, api_1.TableOperation.ColumnInsertRight],
            __read(columnCanBeDeleted ? [api_1.TableOperation.ColumnDelete] : []),
            false
          );
    },
    [tableColumns]
  );
  var thProps = (0, react_1.useCallback)(
    function (column) {
      return {
        onContextMenu: function (e) {
          var columnIndex = _.findIndex(
            (0, exports.getColumnsAtLastLevel)(tableColumns, column.depth),
            (0, exports.getColumnSearchPredicate)(column)
          );
          var target = e.target;
          var handlerOnHeaderIsAvailable = !column.disableHandlerOnHeader;
          if (contextMenuIsAvailable(target) && handlerOnHeaderIsAvailable) {
            e.preventDefault();
            setTableHandlerAllowedOperations(getColumnOperations(columnIndex));
            tableHandlerStateUpdate(target, column);
          }
        },
      };
    },
    [getColumnOperations, tableHandlerStateUpdate, contextMenuIsAvailable, tableColumns]
  );
  var defaultColumn = (0, react_1.useMemo)(
    function () {
      return {
        Cell: function (cellRef) {
          var column = cellRef.column;
          if (column.isCountColumn) {
            return cellRef.value;
          } else {
            if (defaultCell) {
              return defaultCell[column.id](
                __assign(__assign({}, cellRef), { rowIndex: cellRef.row.index, columnId: cellRef.column.id })
              );
            }
            return (0, jsx_runtime_1.jsx)(
              EditableCell_1.EditableCell,
              __assign({}, cellRef, {
                rowIndex: cellRef.row.index,
                columnId: cellRef.column.id,
                readOnly: readOnlyCells,
              }),
              void 0
            );
          }
        },
      };
    },
    [defaultCell, readOnlyCells]
  );
  var tdProps = (0, react_1.useCallback)(
    function (columnIndex, rowIndex) {
      return {
        onContextMenu: function (e) {
          var target = e.target;
          if (contextMenuIsAvailable(target)) {
            e.preventDefault();
            setTableHandlerAllowedOperations(
              __spreadArray(
                __spreadArray(
                  __spreadArray(
                    __spreadArray([], __read(getColumnOperations(columnIndex)), false),
                    [api_1.TableOperation.RowInsertAbove, api_1.TableOperation.RowInsertBelow],
                    false
                  ),
                  __read(rows.length > 1 ? [api_1.TableOperation.RowDelete] : []),
                  false
                ),
                [api_1.TableOperation.RowClear, api_1.TableOperation.RowDuplicate],
                false
              )
            );
            tableHandlerStateUpdate(
              target,
              (0, exports.getColumnsAtLastLevel)(tableColumns, headerLevels)[columnIndex]
            );
            setLastSelectedRowIndex(rowIndex);
          }
        },
      };
    },
    [getColumnOperations, tableHandlerStateUpdate, contextMenuIsAvailable, tableColumns, rows, headerLevels]
  );
  var tableInstance = (0, react_table_1.useTable)(
    {
      columns: tableColumns,
      data: rows,
      defaultColumn: defaultColumn,
      onCellUpdate: onCellUpdate,
      onRowUpdate: onRowUpdate,
    },
    react_table_1.useBlockLayout,
    react_table_1.useResizeColumns
  );
  var onGetColumnKey = (0, react_1.useCallback)(
    function (column) {
      var columnId = column.originalId || column.id;
      return getColumnKey ? getColumnKey(column) : columnId;
    },
    [getColumnKey]
  );
  var onGetRowKey = (0, react_1.useCallback)(
    function (row) {
      if (getRowKey) {
        return getRowKey(row);
      } else {
        if (row.original) {
          return row.original.id;
        }
        return row.id;
      }
    },
    [getRowKey]
  );
  return (0, jsx_runtime_1.jsxs)(
    "div",
    __assign(
      { className: "table-component ".concat(tableId, " ").concat(tableEventUUID) },
      {
        children: [
          (0, jsx_runtime_1.jsxs)(
            react_table_2.TableComposable,
            __assign(
              { variant: "compact" },
              tableInstance.getTableProps(),
              { ref: tableRef, ouiaId: "expression-grid-table" },
              {
                children: [
                  (0, jsx_runtime_1.jsx)(
                    TableHeader_1.TableHeader,
                    {
                      tableInstance: tableInstance,
                      editColumnLabel: editColumnLabel,
                      headerVisibility: headerVisibility,
                      skipLastHeaderGroup: skipLastHeaderGroup,
                      tableColumns: tableColumns,
                      getColumnKey: onGetColumnKey,
                      onColumnsUpdate: onColumnsUpdateCallback,
                      thProps: thProps,
                      editableHeader: editableHeader,
                    },
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    TableBody_1.TableBody,
                    __assign(
                      {
                        tableInstance: tableInstance,
                        getRowKey: onGetRowKey,
                        getColumnKey: onGetColumnKey,
                        onColumnsUpdate: onColumnsUpdateCallback,
                        headerVisibility: headerVisibility,
                        tdProps: tdProps,
                      },
                      { children: children }
                    ),
                    void 0
                  ),
                ],
              }
            ),
            void 0
          ),
          showTableHandler &&
            handlerConfiguration &&
            (0, jsx_runtime_1.jsx)(
              TableHandler_1.TableHandler,
              {
                tableColumns: tableColumns,
                getColumnPrefix: onGetColumnPrefix,
                handlerConfiguration: handlerConfiguration,
                lastSelectedColumn: lastSelectedColumn,
                lastSelectedRowIndex: lastSelectedRowIndex,
                tableRows: tableRows,
                onRowsUpdate: onRowsUpdateCallback,
                onRowAdding: onRowAddingCallback,
                showTableHandler: showTableHandler,
                setShowTableHandler: setShowTableHandler,
                tableHandlerAllowedOperations: tableHandlerAllowedOperations,
                tableHandlerTarget: tableHandlerTarget,
                resetRowCustomFunction: resetRowCustomFunction,
                onColumnsUpdate: onColumnsUpdateCallback,
              },
              void 0
            ),
        ],
      }
    ),
    void 0
  );
};
exports.Table = Table;
//# sourceMappingURL=Table.js.map

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
var __values =
  (this && this.__values) ||
  function (o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        },
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableHandler = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var api_1 = require("../../api");
var _ = require("lodash");
var react_core_1 = require("@patternfly/react-core");
var TableHandlerMenu_1 = require("./TableHandlerMenu");
var context_1 = require("../../context");
var Table_1 = require("./Table");
var Resizer_1 = require("../Resizer");
var TableHandler = function (_a) {
  var _b, _c;
  var getColumnPrefix = _a.getColumnPrefix,
    tableColumns = _a.tableColumns,
    lastSelectedColumn = _a.lastSelectedColumn,
    lastSelectedRowIndex = _a.lastSelectedRowIndex,
    tableRows = _a.tableRows,
    onRowsUpdate = _a.onRowsUpdate,
    onRowAdding = _a.onRowAdding,
    showTableHandler = _a.showTableHandler,
    setShowTableHandler = _a.setShowTableHandler,
    tableHandlerTarget = _a.tableHandlerTarget,
    handlerConfiguration = _a.handlerConfiguration,
    tableHandlerAllowedOperations = _a.tableHandlerAllowedOperations,
    _d = _a.resetRowCustomFunction,
    resetRowCustomFunction =
      _d === void 0
        ? function () {
            return {};
          }
        : _d,
    onColumnsUpdate = _a.onColumnsUpdate;
  var boxedExpression = (0, context_1.useBoxedExpression)();
  var _e = __read((0, react_1.useState)(lastSelectedColumn.placeholderOf || lastSelectedColumn), 2),
    selectedColumn = _e[0],
    setSelectedColumn = _e[1];
  var _f = __read((0, react_1.useState)(lastSelectedRowIndex), 2),
    selectedRowIndex = _f[0],
    setSelectedRowIndex = _f[1];
  (0, react_1.useEffect)(
    function () {
      setSelectedColumn(lastSelectedColumn.placeholderOf || lastSelectedColumn);
    },
    [lastSelectedColumn]
  );
  (0, react_1.useEffect)(
    function () {
      setSelectedRowIndex(lastSelectedRowIndex);
    },
    [lastSelectedRowIndex]
  );
  var withDefaultValues = function (element) {
    return __assign({ width: Resizer_1.DEFAULT_MIN_WIDTH }, element);
  };
  var insertBefore = function (elements, index, element) {
    return __spreadArray(
      __spreadArray(__spreadArray([], __read(elements.slice(0, index)), false), [withDefaultValues(element)], false),
      __read(elements.slice(index)),
      false
    );
  };
  var insertAfter = function (elements, index, element) {
    return __spreadArray(
      __spreadArray(
        __spreadArray([], __read(elements.slice(0, index + 1)), false),
        [withDefaultValues(element)],
        false
      ),
      __read(elements.slice(index + 1)),
      false
    );
  };
  var duplicateAfter = function (elements, index) {
    return __spreadArray(
      __spreadArray(
        __spreadArray([], __read(elements.slice(0, index + 1)), false),
        [_.cloneDeep(elements[index])],
        false
      ),
      __read(elements.slice(index + 1)),
      false
    );
  };
  var deleteAt = function (elements, index) {
    return __spreadArray(
      __spreadArray([], __read(elements.slice(0, index)), false),
      __read(elements.slice(index + 1)),
      false
    );
  };
  var clearAt = function (elements, index) {
    return __spreadArray(
      __spreadArray(
        __spreadArray([], __read(elements.slice(0, index)), false),
        [resetRowCustomFunction(elements[index])],
        false
      ),
      __read(elements.slice(index + 1)),
      false
    );
  };
  var generateNextAvailableColumnName = (0, react_1.useCallback)(
    function (lastIndex, groupType) {
      var candidateName = "".concat(getColumnPrefix(groupType)).concat(lastIndex);
      var columnWithCandidateName = _.find((0, Table_1.getColumnsAtLastLevel)(tableColumns), { label: candidateName });
      return columnWithCandidateName ? generateNextAvailableColumnName(lastIndex + 1, groupType) : candidateName;
    },
    [getColumnPrefix, tableColumns]
  );
  var getLengthOfColumnsByGroupType = (0, react_1.useCallback)(function (columns, groupType) {
    var _a;
    var columnsByGroupType = _.groupBy(columns, function (column) {
      return column.groupType;
    });
    return (_a = columnsByGroupType[groupType]) === null || _a === void 0 ? void 0 : _a.length;
  }, []);
  var generateNextAvailableColumn = (0, react_1.useCallback)(
    function () {
      var groupType = selectedColumn.groupType;
      var cssClasses = selectedColumn.cssClasses;
      var columns = (0, Table_1.getColumnsAtLastLevel)(tableColumns);
      var columnsLength = groupType ? getLengthOfColumnsByGroupType(columns, groupType) + 1 : columns.length;
      var nextAvailableColumnName = generateNextAvailableColumnName(columnsLength, groupType);
      return __assign(
        __assign(
          { accessor: (0, api_1.generateUuid)(), label: nextAvailableColumnName },
          selectedColumn.dataType ? { dataType: api_1.DataType.Undefined } : {}
        ),
        { inlineEditable: selectedColumn.inlineEditable, groupType: groupType, cssClasses: cssClasses }
      );
    },
    [generateNextAvailableColumnName, getLengthOfColumnsByGroupType, selectedColumn, tableColumns]
  );
  var updateColumnsThenRows = (0, react_1.useCallback)(
    function (operation, columnIndex, updatedColumns) {
      if (updatedColumns) {
        onColumnsUpdate(__spreadArray([], __read(updatedColumns), false), operation, columnIndex);
      } else {
        onColumnsUpdate(__spreadArray([], __read(tableColumns), false), operation, columnIndex);
      }
      onRowsUpdate(__spreadArray([], __read(tableRows.current), false));
    },
    [onColumnsUpdate, onRowsUpdate, tableColumns, tableRows]
  );
  var appendOnColumnChildren = (0, react_1.useCallback)(
    function (operation) {
      var children = _.find(tableColumns, (0, Table_1.getColumnSearchPredicate)(selectedColumn)).columns;
      if (operation === insertBefore) {
        children.unshift(generateNextAvailableColumn());
      } else if (operation === insertAfter) {
        children.push(generateNextAvailableColumn());
      }
    },
    [generateNextAvailableColumn, selectedColumn, tableColumns]
  );
  var updateTargetColumns = (0, react_1.useCallback)(
    function (operationCallback, operation) {
      var e_1, _a;
      var _b;
      if (selectedColumn.parent) {
        var parent_1 = _.find(tableColumns, (0, Table_1.getColumnSearchPredicate)(selectedColumn.parent));
        parent_1.columns = operationCallback(
          parent_1.columns,
          _.findIndex(parent_1.columns, (0, Table_1.getColumnSearchPredicate)(selectedColumn)),
          generateNextAvailableColumn()
        );
      } else {
        if (selectedColumn.appendColumnsOnChildren && _.isArray(selectedColumn.columns)) {
          appendOnColumnChildren(operationCallback);
        } else {
          var columnIndex = -1;
          try {
            for (var _c = __values(tableColumns), _d = _c.next(); !_d.done; _d = _c.next()) {
              var column = _d.value;
              var foundIndex =
                (_b = column.columns) === null || _b === void 0
                  ? void 0
                  : _b.findIndex((0, Table_1.getColumnSearchPredicate)(selectedColumn));
              if (column.columns && foundIndex !== undefined && foundIndex !== -1) {
                column.columns = operationCallback(column.columns, foundIndex, generateNextAvailableColumn());
                columnIndex = foundIndex;
                break;
              }
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          if (columnIndex !== -1) {
            updateColumnsThenRows(operation, columnIndex, tableColumns);
          } else {
            var columnIndex_1 = _.findIndex(tableColumns, (0, Table_1.getColumnSearchPredicate)(selectedColumn));
            var updatedColumns = operationCallback(tableColumns, columnIndex_1, generateNextAvailableColumn());
            updateColumnsThenRows(operation, columnIndex_1, updatedColumns);
          }
          return;
        }
      }
      updateColumnsThenRows();
    },
    [appendOnColumnChildren, generateNextAvailableColumn, selectedColumn, tableColumns, updateColumnsThenRows]
  );
  var generateRow = (0, react_1.useCallback)(
    function () {
      var row = onRowAdding();
      if (_.isEmpty(row.id)) {
        row.id = (0, api_1.generateUuid)();
      }
      return row;
    },
    [onRowAdding]
  );
  var handlingOperation = (0, react_1.useCallback)(
    function (tableOperation) {
      var _a;
      (_a = boxedExpression.boxedExpressionEditorGWTService) === null || _a === void 0 ? void 0 : _a.notifyUserAction();
      switch (tableOperation) {
        case api_1.TableOperation.ColumnInsertLeft:
          updateTargetColumns(insertBefore, api_1.TableOperation.ColumnInsertLeft);
          break;
        case api_1.TableOperation.ColumnInsertRight:
          updateTargetColumns(insertAfter, api_1.TableOperation.ColumnInsertRight);
          break;
        case api_1.TableOperation.ColumnDelete:
          updateTargetColumns(deleteAt, api_1.TableOperation.ColumnDelete);
          break;
        case api_1.TableOperation.RowInsertAbove:
          onRowsUpdate(
            insertBefore(tableRows.current, selectedRowIndex, generateRow()),
            api_1.TableOperation.RowInsertAbove,
            selectedRowIndex
          );
          break;
        case api_1.TableOperation.RowInsertBelow:
          onRowsUpdate(
            insertAfter(tableRows.current, selectedRowIndex, generateRow()),
            api_1.TableOperation.RowInsertBelow,
            selectedRowIndex
          );
          break;
        case api_1.TableOperation.RowDelete:
          onRowsUpdate(deleteAt(tableRows.current, selectedRowIndex), api_1.TableOperation.RowDelete, selectedRowIndex);
          break;
        case api_1.TableOperation.RowClear:
          onRowsUpdate(clearAt(tableRows.current, selectedRowIndex), api_1.TableOperation.RowClear, selectedRowIndex);
          break;
        case api_1.TableOperation.RowDuplicate:
          onRowsUpdate(
            duplicateAfter(tableRows.current, selectedRowIndex),
            api_1.TableOperation.RowDuplicate,
            selectedRowIndex
          );
      }
      setShowTableHandler(false);
    },
    [updateTargetColumns, generateRow, onRowsUpdate, selectedRowIndex, setShowTableHandler, tableRows]
  );
  var getHandlerConfiguration = (0, react_1.useMemo)(
    function () {
      if (_.isArray(handlerConfiguration)) {
        return handlerConfiguration;
      }
      return handlerConfiguration[
        (selectedColumn === null || selectedColumn === void 0 ? void 0 : selectedColumn.groupType) || ""
      ];
    },
    [handlerConfiguration, selectedColumn === null || selectedColumn === void 0 ? void 0 : selectedColumn.groupType]
  );
  return (0, jsx_runtime_1.jsx)(
    react_core_1.Popover,
    {
      className: "table-handler",
      hasNoPadding: true,
      showClose: false,
      distance: 5,
      position: "right",
      isVisible: showTableHandler,
      shouldClose: function () {
        return setShowTableHandler(false);
      },
      shouldOpen: function (showFunction) {
        return showFunction === null || showFunction === void 0 ? void 0 : showFunction();
      },
      reference: function () {
        return tableHandlerTarget;
      },
      appendTo:
        (_c = (_b = boxedExpression.editorRef) === null || _b === void 0 ? void 0 : _b.current) !== null &&
        _c !== void 0
          ? _c
          : undefined,
      bodyContent: (0, jsx_runtime_1.jsx)(
        TableHandlerMenu_1.TableHandlerMenu,
        {
          handlerConfiguration: getHandlerConfiguration,
          allowedOperations: tableHandlerAllowedOperations,
          onOperation: handlingOperation,
        },
        void 0
      ),
    },
    void 0
  );
};
exports.TableHandler = TableHandler;
//# sourceMappingURL=TableHandler.js.map

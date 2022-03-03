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
exports.TableBody = void 0;
var react_1 = require("react");
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var react_2 = require("react");
var react_table_1 = require("@patternfly/react-table");
var api_1 = require("../../api");
var Resizer_1 = require("../Resizer");
var context_1 = require("../../context");
var LogicTypeSelector_1 = require("../LogicTypeSelector");
var TableBody = function (_a) {
  var tableInstance = _a.tableInstance,
    children = _a.children,
    headerVisibility = _a.headerVisibility,
    getRowKey = _a.getRowKey,
    getColumnKey = _a.getColumnKey,
    onColumnsUpdate = _a.onColumnsUpdate,
    tdProps = _a.tdProps;
  var boxedExpressionEditorGWTService = (0, context_1.useBoxedExpression)().boxedExpressionEditorGWTService;
  var headerVisibilityMemo = (0, react_2.useMemo)(
    function () {
      return headerVisibility !== null && headerVisibility !== void 0
        ? headerVisibility
        : api_1.TableHeaderVisibility.Full;
    },
    [headerVisibility]
  );
  var renderCell = (0, react_2.useCallback)(
    function (cellIndex, cell, rowIndex, inAForm) {
      var _a, _b, _c;
      var cellType = cellIndex === 0 ? "counter-cell" : "data-cell";
      var column = tableInstance.allColumns[cellIndex];
      var width =
        typeof (column === null || column === void 0 ? void 0 : column.width) === "number"
          ? column === null || column === void 0
            ? void 0
            : column.width
          : Resizer_1.DEFAULT_MIN_WIDTH;
      var onResize = function (width) {
        if (column.setWidth) {
          column.setWidth(width);
          tableInstance.allColumns[cellIndex].width = width;
          onColumnsUpdate === null || onColumnsUpdate === void 0 ? void 0 : onColumnsUpdate(tableInstance.columns);
        }
      };
      var cellTemplate =
        cellIndex === 0
          ? (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: rowIndex + 1 }, void 0)
          : (0, jsx_runtime_1.jsx)(
              Resizer_1.Resizer,
              __assign(
                { width: width, onHorizontalResizeStop: onResize },
                {
                  children: (0, jsx_runtime_1.jsx)(
                    jsx_runtime_1.Fragment,
                    {
                      children:
                        inAForm &&
                        typeof ((_a = cell.column) === null || _a === void 0 ? void 0 : _a.cellDelegate) === "function"
                          ? (_b = cell.column) === null || _b === void 0
                            ? void 0
                            : _b.cellDelegate("dmn-auto-form-".concat(rowIndex))
                          : cell.render("Cell"),
                    },
                    void 0
                  ),
                }
              ),
              void 0
            );
      if (typeof ((_c = cell.column) === null || _c === void 0 ? void 0 : _c.cellDelegate) === "function") {
        cellType += " input";
      }
      var tdProp = tdProps(cellIndex, rowIndex);
      return (0, react_1.createElement)(
        react_table_1.Td,
        __assign({}, tdProp, {
          key: "".concat(rowIndex, "-").concat(getColumnKey(cell.column), "-").concat(cellIndex),
          "data-ouia-component-id": "expression-column-" + cellIndex,
          className: "".concat(cellType),
        }),
        cellTemplate
      );
    },
    [getColumnKey, onColumnsUpdate, tableInstance, tdProps]
  );
  var eventPathHasNestedExpression = (0, react_2.useCallback)(function (event, path) {
    var _a, _b;
    var currentPathTarget = event.target;
    var currentIndex = 0;
    while (currentPathTarget !== event.currentTarget && currentIndex < path.length) {
      currentIndex++;
      currentPathTarget = path[currentIndex];
      if (
        (_b = (_a = currentPathTarget) === null || _a === void 0 ? void 0 : _a.classList) === null || _b === void 0
          ? void 0
          : _b.contains(LogicTypeSelector_1.LOGIC_TYPE_SELECTOR_CLASS)
      ) {
        return true;
      }
    }
    return false;
  }, []);
  var onRowClick = (0, react_2.useCallback)(
    function (rowKey) {
      return function (event) {
        var _a;
        var nativeEvent = event.nativeEvent;
        var path =
          ((_a = nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.composedPath) === null ||
          _a === void 0
            ? void 0
            : _a.call(nativeEvent)) || [];
        if (!eventPathHasNestedExpression(event, path)) {
          boxedExpressionEditorGWTService === null || boxedExpressionEditorGWTService === void 0
            ? void 0
            : boxedExpressionEditorGWTService.selectObject(rowKey);
        }
      };
    },
    [boxedExpressionEditorGWTService, eventPathHasNestedExpression]
  );
  var renderBodyRow = (0, react_2.useCallback)(
    function (row, rowIndex) {
      tableInstance.prepareRow(row);
      var rowProps = __assign(__assign({}, row.getRowProps()), { style: {} });
      var RowDelegate = row.original.rowDelegate;
      var rowKey = getRowKey(row);
      var rowClassNames = "".concat(rowKey, " table-row");
      var buildTableRow = function (inAForm) {
        return (0, react_1.createElement)(
          react_table_1.Tr,
          __assign({ className: rowClassNames }, rowProps, {
            ouiaId: "expression-row-" + rowIndex,
            key: rowKey,
            onClick: onRowClick(rowKey),
          }),
          row.cells.map(function (cell, cellIndex) {
            return renderCell(cellIndex, cell, rowIndex, inAForm);
          })
        );
      };
      return (0, jsx_runtime_1.jsx)(
        React.Fragment,
        {
          children: RowDelegate
            ? (0, jsx_runtime_1.jsx)(RowDelegate, { children: buildTableRow(true) }, void 0)
            : buildTableRow(false),
        },
        rowKey
      );
    },
    [getRowKey, onRowClick, renderCell, tableInstance]
  );
  var renderAdditiveRow = (0, react_2.useMemo)(
    function () {
      return (0, jsx_runtime_1.jsxs)(
        react_table_1.Tr,
        __assign(
          { className: "table-row additive-row" },
          {
            children: [
              (0, jsx_runtime_1.jsx)(
                react_table_1.Td,
                __assign(
                  { role: "cell", className: "empty-cell" },
                  { children: (0, jsx_runtime_1.jsx)("br", {}, void 0) }
                ),
                void 0
              ),
              children === null || children === void 0
                ? void 0
                : children.map(function (child, childIndex) {
                    return (0,
                    jsx_runtime_1.jsx)(react_table_1.Td, __assign({ role: "cell", className: "row-remainder-content" }, { children: child }), childIndex);
                  }),
            ],
          }
        ),
        void 0
      );
    },
    [children]
  );
  return (0, jsx_runtime_1.jsxs)(
    react_table_1.Tbody,
    __assign(
      { className: "".concat(headerVisibilityMemo === api_1.TableHeaderVisibility.None ? "missing-header" : "") },
      tableInstance.getTableBodyProps(),
      {
        children: [
          tableInstance.rows.map(function (row, rowIndex) {
            return renderBodyRow(row, rowIndex);
          }),
          children ? renderAdditiveRow : null,
        ],
      }
    ),
    void 0
  );
};
exports.TableBody = TableBody;
//# sourceMappingURL=TableBody.js.map

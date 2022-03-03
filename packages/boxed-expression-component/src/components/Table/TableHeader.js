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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
    return t;
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
exports.TableHeader = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_table_1 = require("@patternfly/react-table");
var _ = require("lodash");
var react_2 = require("react");
var api_1 = require("../../api");
var EditExpressionMenu_1 = require("../EditExpressionMenu");
var Resizer_1 = require("../Resizer");
var Table_1 = require("./Table");
var context_1 = require("../../context");
var TableHeader = function (_a) {
  var tableInstance = _a.tableInstance,
    editColumnLabel = _a.editColumnLabel,
    _b = _a.headerVisibility,
    headerVisibility = _b === void 0 ? api_1.TableHeaderVisibility.Full : _b,
    skipLastHeaderGroup = _a.skipLastHeaderGroup,
    getColumnKey = _a.getColumnKey,
    tableColumns = _a.tableColumns,
    onColumnsUpdate = _a.onColumnsUpdate,
    thProps = _a.thProps,
    editableHeader = _a.editableHeader;
  var boxedExpressionEditorGWTService = (0, context_1.useBoxedExpression)().boxedExpressionEditorGWTService;
  var getColumnLabel = (0, react_2.useCallback)(
    function (groupType) {
      if (_.isObject(editColumnLabel) && _.has(editColumnLabel, groupType)) {
        return editColumnLabel[groupType];
      }
      if (typeof editColumnLabel === "string") {
        return editColumnLabel;
      }
    },
    [editColumnLabel]
  );
  var onColumnNameOrDataTypeUpdate = (0, react_2.useCallback)(
    function (column, columnIndex) {
      return function (_a) {
        var _b = _a.name,
          name = _b === void 0 ? "" : _b,
          dataType = _a.dataType;
        var columnToUpdate = tableColumns[columnIndex];
        if (column.depth > 0) {
          var columnsBelongingToParent = _.find(tableColumns, { accessor: column.parent.id }).columns;
          columnToUpdate = _.find(columnsBelongingToParent, { accessor: column.id });
        }
        columnToUpdate.label = name;
        columnToUpdate.dataType = dataType;
        onColumnsUpdate(__spreadArray([], __read(tableColumns), false));
      };
    },
    [onColumnsUpdate, tableColumns]
  );
  var renderCountColumn = (0, react_2.useCallback)(
    function (column) {
      var columnKey = getColumnKey(column);
      var classNames = "".concat(columnKey, " fixed-column no-clickable-cell");
      return (0, react_1.createElement)(
        react_table_1.Th,
        __assign({}, column.getHeaderProps(), { className: classNames, key: columnKey }),
        (0, jsx_runtime_1.jsx)(
          "div",
          __assign(
            { className: "header-cell", "data-ouia-component-type": "expression-column-header" },
            { children: column.label }
          ),
          void 0
        )
      );
    },
    [getColumnKey]
  );
  var renderCellInfoLabel = (0, react_2.useCallback)(
    function (column, columnIndex) {
      if (column.inlineEditable) {
        return (0, jsx_runtime_1.jsx)(
          EditExpressionMenu_1.EditTextInline,
          {
            value: column.label,
            onTextChange: function (value) {
              return onColumnNameOrDataTypeUpdate(column, columnIndex)({ name: value });
            },
          },
          void 0
        );
      }
      return (0, jsx_runtime_1.jsx)(
        "p",
        __assign({ className: "pf-u-text-truncate label" }, { children: column.label }),
        void 0
      );
    },
    [onColumnNameOrDataTypeUpdate]
  );
  var renderHeaderCellInfo = (0, react_2.useCallback)(
    function (column, columnIndex) {
      return (0, jsx_runtime_1.jsxs)(
        "div",
        __assign(
          { className: "header-cell-info", "data-ouia-component-type": "expression-column-header-cell-info" },
          {
            children: [
              column.headerCellElement ? column.headerCellElement : renderCellInfoLabel(column, columnIndex),
              column.dataType
                ? (0, jsx_runtime_1.jsxs)(
                    "p",
                    __assign({ className: "pf-u-text-truncate data-type" }, { children: ["(", column.dataType, ")"] }),
                    void 0
                  )
                : null,
            ],
          }
        ),
        void 0
      );
    },
    [renderCellInfoLabel]
  );
  var onHorizontalResizeStop = (0, react_2.useCallback)(
    function (column, columnWidth) {
      var columnToBeFound = column.placeholderOf || column;
      var columnToUpdate = _.find(tableColumns, (0, Table_1.getColumnSearchPredicate)(columnToBeFound));
      if (column.parent) {
        columnToUpdate = _.find(
          (0, Table_1.getColumnsAtLastLevel)(tableColumns),
          (0, Table_1.getColumnSearchPredicate)(column)
        );
      }
      if (columnToUpdate) {
        columnToUpdate.width = columnWidth;
      }
      tableColumns.forEach(function (tableColumn) {
        if (tableColumn.width === undefined) {
          tableColumn.width = tableColumn.columns.reduce(function (acc, column) {
            return acc + column.width;
          }, 0);
        }
      });
      onColumnsUpdate(tableColumns);
    },
    [onColumnsUpdate, tableColumns]
  );
  var onHeaderClick = (0, react_2.useCallback)(
    function (columnKey) {
      return function () {
        boxedExpressionEditorGWTService === null || boxedExpressionEditorGWTService === void 0
          ? void 0
          : boxedExpressionEditorGWTService.selectObject(columnKey);
      };
    },
    [boxedExpressionEditorGWTService]
  );
  var renderResizableHeaderCell = (0, react_2.useCallback)(
    function (column, columnIndex) {
      var _a, _b;
      var headerProps = __assign(__assign({}, column.getHeaderProps()), { style: {} });
      var width = column.width || Resizer_1.DEFAULT_MIN_WIDTH;
      var isColspan =
        ((_b = (_a = column.columns) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0
          ? _b
          : 0) > 0 || false;
      var columnKey = getColumnKey(column);
      var getCssClass = function () {
        var cssClasses = [columnKey];
        if (!column.dataType) {
          cssClasses.push("no-clickable-cell");
        }
        if (isColspan) {
          cssClasses.push("colspan-header");
        }
        if (column.placeholderOf) {
          cssClasses.push("colspan-header");
          cssClasses.push(column.placeholderOf.cssClasses);
          cssClasses.push(column.placeholderOf.groupType);
        }
        cssClasses.push(column.groupType || "");
        cssClasses.push(column.cssClasses || "");
        return cssClasses.join(" ");
      };
      return (0, react_1.createElement)(
        react_table_1.Th,
        __assign({}, headerProps, thProps(column), {
          className: getCssClass(),
          key: columnKey,
          onClick: onHeaderClick(columnKey),
        }),
        (0, jsx_runtime_1.jsx)(
          Resizer_1.Resizer,
          __assign(
            {
              width: width,
              onHorizontalResizeStop: function (columnWidth) {
                return onHorizontalResizeStop(column, columnWidth);
              },
            },
            {
              children: (0, jsx_runtime_1.jsx)(
                "div",
                __assign(
                  { className: "header-cell", "data-ouia-component-type": "expression-column-header" },
                  {
                    children:
                      column.dataType && editableHeader
                        ? (0, jsx_runtime_1.jsx)(
                            EditExpressionMenu_1.EditExpressionMenu,
                            __assign(
                              {
                                title: getColumnLabel(column.groupType),
                                selectedExpressionName: column.label,
                                selectedDataType: column.dataType,
                                onExpressionUpdate: function (expression) {
                                  return onColumnNameOrDataTypeUpdate(column, columnIndex)(expression);
                                },
                              },
                              { children: renderHeaderCellInfo(column, columnIndex) }
                            ),
                            columnKey
                          )
                        : renderHeaderCellInfo(column, columnIndex),
                  }
                ),
                void 0
              ),
            }
          ),
          void 0
        )
      );
    },
    [
      getColumnKey,
      thProps,
      onHeaderClick,
      editableHeader,
      getColumnLabel,
      renderHeaderCellInfo,
      onHorizontalResizeStop,
      onColumnNameOrDataTypeUpdate,
    ]
  );
  var renderColumn = (0, react_2.useCallback)(
    function (column, columnIndex) {
      return column.isCountColumn ? renderCountColumn(column) : renderResizableHeaderCell(column, columnIndex);
    },
    [renderCountColumn, renderResizableHeaderCell]
  );
  var getHeaderGroups = (0, react_2.useCallback)(
    function (tableInstance) {
      return skipLastHeaderGroup ? _.dropRight(tableInstance.headerGroups) : tableInstance.headerGroups;
    },
    [skipLastHeaderGroup]
  );
  var renderHeaderGroups = (0, react_2.useMemo)(
    function () {
      return getHeaderGroups(tableInstance).map(function (headerGroup) {
        var _a = __assign(__assign({}, headerGroup.getHeaderGroupProps()), { style: {} }),
          key = _a.key,
          props = __rest(_a, ["key"]);
        return (0, jsx_runtime_1.jsx)(
          react_table_1.Tr,
          __assign({}, props, {
            children: headerGroup.headers.map(function (column, columnIndex) {
              return renderColumn(column, columnIndex);
            }),
          }),
          key
        );
      });
    },
    [getHeaderGroups, renderColumn, tableInstance]
  );
  var renderAtLevelInHeaderGroups = (0, react_2.useCallback)(
    function (level) {
      return (0, jsx_runtime_1.jsx)(
        react_table_1.Tr,
        {
          children: _.nth(tableInstance.headerGroups, level).headers.map(function (column, columnIndex) {
            return renderColumn(column, columnIndex);
          }),
        },
        void 0
      );
    },
    [renderColumn, tableInstance.headerGroups]
  );
  var header = (0, react_2.useMemo)(
    function () {
      switch (headerVisibility) {
        case api_1.TableHeaderVisibility.Full:
          return (0, jsx_runtime_1.jsx)(
            react_table_1.Thead,
            __assign({ noWrap: true }, { children: renderHeaderGroups }),
            void 0
          );
        case api_1.TableHeaderVisibility.LastLevel:
          return (0, jsx_runtime_1.jsx)(
            react_table_1.Thead,
            __assign({ noWrap: true }, { children: renderAtLevelInHeaderGroups(-1) }),
            void 0
          );
        case api_1.TableHeaderVisibility.SecondToLastLevel:
          return (0, jsx_runtime_1.jsx)(
            react_table_1.Thead,
            __assign({ noWrap: true }, { children: renderAtLevelInHeaderGroups(-2) }),
            void 0
          );
        default:
          return null;
      }
    },
    [headerVisibility, renderHeaderGroups, renderAtLevelInHeaderGroups]
  );
  return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: header }, void 0);
};
exports.TableHeader = TableHeader;
//# sourceMappingURL=TableHeader.js.map

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
exports.ListExpression = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./ListExpression.css");
var react_1 = require("react");
var api_1 = require("../../api");
var ContextExpression_1 = require("../ContextExpression");
var Table_1 = require("../Table");
var i18n_1 = require("../../i18n");
var Resizer_1 = require("../Resizer");
var context_1 = require("../../context");
var LIST_EXPRESSION_MIN_WIDTH = 430;
var ListExpression = function (listExpression) {
  var i18n = (0, i18n_1.useBoxedExpressionEditorI18n)().i18n;
  var _a = (0, context_1.useBoxedExpression)(),
    boxedExpressionEditorGWTService = _a.boxedExpressionEditorGWTService,
    setSupervisorHash = _a.setSupervisorHash;
  var generateLiteralExpression = (0, react_1.useCallback)(function () {
    return {
      id: (0, api_1.generateUuid)(),
      name: "",
      dataType: api_1.DataType.Undefined,
      logicType: api_1.LogicType.LiteralExpression,
      content: "",
    };
  }, []);
  var handlerConfiguration = (0, react_1.useMemo)(
    function () {
      return [
        {
          group: i18n.rows,
          items: [
            { name: i18n.rowOperations.insertAbove, type: api_1.TableOperation.RowInsertAbove },
            { name: i18n.rowOperations.insertBelow, type: api_1.TableOperation.RowInsertBelow },
            { name: i18n.rowOperations.delete, type: api_1.TableOperation.RowDelete },
            { name: i18n.rowOperations.clear, type: api_1.TableOperation.RowClear },
          ],
        },
      ];
    },
    [
      i18n.rowOperations.clear,
      i18n.rowOperations.delete,
      i18n.rowOperations.insertAbove,
      i18n.rowOperations.insertBelow,
      i18n.rows,
    ]
  );
  var items = (0, react_1.useMemo)(
    function () {
      var _a;
      if (
        listExpression.items === undefined ||
        ((_a = listExpression.items) === null || _a === void 0 ? void 0 : _a.length) === 0
      ) {
        return [{ entryExpression: generateLiteralExpression() }];
      } else {
        return listExpression.items.map(function (item) {
          return { entryExpression: item };
        });
      }
    },
    [listExpression.items, generateLiteralExpression]
  );
  var spreadListExpressionDefinition = (0, react_1.useCallback)(
    function (updatedListExpression) {
      var _a;
      var updatedDefinition = __assign(
        {
          id: listExpression.id,
          name: listExpression.name,
          dataType: listExpression.dataType,
          logicType: api_1.LogicType.List,
          width: (_a = listExpression.width) !== null && _a !== void 0 ? _a : LIST_EXPRESSION_MIN_WIDTH,
        },
        updatedListExpression
      );
      updatedDefinition.items = (
        (updatedListExpression === null || updatedListExpression === void 0 ? void 0 : updatedListExpression.items)
          ? updatedListExpression.items
          : items
      ).map(function (listItem) {
        return listItem.entryExpression;
      });
      (0, api_1.executeIfExpressionDefinitionChanged)(
        listExpression,
        updatedDefinition,
        function () {
          var _a, _b;
          if (listExpression.isHeadless) {
            (_a = listExpression.onUpdatingRecursiveExpression) === null || _a === void 0
              ? void 0
              : _a.call(listExpression, updatedDefinition);
          } else {
            setSupervisorHash((0, Resizer_1.hashfy)(updatedDefinition));
            (_b =
              boxedExpressionEditorGWTService === null || boxedExpressionEditorGWTService === void 0
                ? void 0
                : boxedExpressionEditorGWTService.broadcastListExpressionDefinition) === null || _b === void 0
              ? void 0
              : _b.call(boxedExpressionEditorGWTService, updatedDefinition);
          }
        },
        ["width", "items"]
      );
    },
    [boxedExpressionEditorGWTService, listExpression, items, setSupervisorHash]
  );
  var setListWidth = (0, react_1.useCallback)(
    function (newInfoWidth) {
      spreadListExpressionDefinition({ width: newInfoWidth });
    },
    [spreadListExpressionDefinition]
  );
  var columns = (0, react_1.useMemo)(
    function () {
      var _a;
      return [
        {
          accessor: "list",
          width: (_a = listExpression.width) !== null && _a !== void 0 ? _a : LIST_EXPRESSION_MIN_WIDTH,
          setWidth: setListWidth,
        },
      ];
    },
    [listExpression.width, setListWidth]
  );
  var resetRowCustomFunction = (0, react_1.useCallback)(function (row) {
    return { entryExpression: { id: row.entryExpression.id } };
  }, []);
  var onRowAdding = (0, react_1.useCallback)(
    function () {
      return {
        entryExpression: generateLiteralExpression(),
      };
    },
    [generateLiteralExpression]
  );
  var onRowsUpdate = (0, react_1.useCallback)(
    function (_a) {
      var rows = _a.rows;
      var newEntryExpressions = rows.map(function (row) {
        return { entryExpression: row.entryExpression };
      });
      spreadListExpressionDefinition({
        items: newEntryExpressions,
      });
    },
    [spreadListExpressionDefinition]
  );
  var getRowKey = (0, react_1.useCallback)(function (row) {
    return row.original.entryExpression.id;
  }, []);
  var defaultCell = (0, react_1.useMemo)(function () {
    return {
      list: ContextExpression_1.ContextEntryExpressionCell,
    };
  }, []);
  return (0, jsx_runtime_1.jsx)(
    "div",
    __assign(
      { className: "".concat(listExpression.id, " list-expression") },
      {
        children: (0, jsx_runtime_1.jsx)(
          Table_1.Table,
          {
            tableId: listExpression.id,
            headerVisibility: api_1.TableHeaderVisibility.None,
            defaultCell: defaultCell,
            columns: columns,
            rows: items,
            onRowsUpdate: onRowsUpdate,
            onRowAdding: onRowAdding,
            handlerConfiguration: handlerConfiguration,
            getRowKey: getRowKey,
            resetRowCustomFunction: resetRowCustomFunction,
          },
          void 0
        ),
      }
    ),
    void 0
  );
};
exports.ListExpression = ListExpression;
//# sourceMappingURL=ListExpression.js.map

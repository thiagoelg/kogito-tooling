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
exports.InvocationExpression = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./InvocationExpression.css");
var react_1 = require("react");
var api_1 = require("../../api");
var Table_1 = require("../Table");
var i18n_1 = require("../../i18n");
var ContextExpression_1 = require("../ContextExpression");
var _ = require("lodash");
var context_1 = require("../../context");
var Resizer_1 = require("../Resizer");
var DEFAULT_PARAMETER_NAME = "p-1";
var DEFAULT_PARAMETER_DATA_TYPE = api_1.DataType.Undefined;
var InvocationExpression = function (invocationProps) {
  var i18n = (0, i18n_1.useBoxedExpressionEditorI18n)().i18n;
  var rows = (0, react_1.useMemo)(
    function () {
      var _a;
      return (_a = invocationProps.bindingEntries) !== null && _a !== void 0
        ? _a
        : [
            {
              entryInfo: {
                id: (0, api_1.generateUuid)(),
                name: DEFAULT_PARAMETER_NAME,
                dataType: DEFAULT_PARAMETER_DATA_TYPE,
              },
              entryExpression: {
                name: DEFAULT_PARAMETER_NAME,
                dataType: DEFAULT_PARAMETER_DATA_TYPE,
              },
              nameAndDataTypeSynchronized: true,
            },
          ];
    },
    [invocationProps.bindingEntries]
  );
  var _a = (0, context_1.useBoxedExpression)(),
    boxedExpressionEditorGWTService = _a.boxedExpressionEditorGWTService,
    setSupervisorHash = _a.setSupervisorHash,
    decisionNodeId = _a.decisionNodeId;
  var spreadInvocationExpressionDefinition = (0, react_1.useCallback)(
    function (invocationExpressionUpdated) {
      var _a, _b, _c, _d, _e;
      var updatedDefinition = __assign(
        {
          id: invocationProps.id,
          logicType: api_1.LogicType.Invocation,
          name: (_a = invocationProps.name) !== null && _a !== void 0 ? _a : DEFAULT_PARAMETER_NAME,
          dataType: (_b = invocationProps.dataType) !== null && _b !== void 0 ? _b : DEFAULT_PARAMETER_DATA_TYPE,
          bindingEntries: rows,
          invokedFunction: (_c = invocationProps.invokedFunction) !== null && _c !== void 0 ? _c : "",
          entryInfoWidth:
            (_d = invocationProps.entryInfoWidth) !== null && _d !== void 0 ? _d : api_1.DEFAULT_ENTRY_INFO_MIN_WIDTH,
          entryExpressionWidth:
            (_e = invocationProps.entryExpressionWidth) !== null && _e !== void 0
              ? _e
              : api_1.DEFAULT_ENTRY_EXPRESSION_MIN_WIDTH,
        },
        invocationExpressionUpdated
      );
      if (invocationProps.isHeadless) {
        var headlessDefinition_1 = _.omit(updatedDefinition, ["name", "dataType", "isHeadless"]);
        (0, api_1.executeIfExpressionDefinitionChanged)(
          invocationProps,
          headlessDefinition_1,
          function () {
            var _a;
            (_a = invocationProps.onUpdatingRecursiveExpression) === null || _a === void 0
              ? void 0
              : _a.call(invocationProps, headlessDefinition_1);
          },
          ["bindingEntries", "invokedFunction", "entryInfoWidth", "entryExpressionWidth"]
        );
      } else {
        (0, api_1.executeIfExpressionDefinitionChanged)(
          invocationProps,
          updatedDefinition,
          function () {
            var _a;
            setSupervisorHash((0, Resizer_1.hashfy)(updatedDefinition));
            (_a =
              boxedExpressionEditorGWTService === null || boxedExpressionEditorGWTService === void 0
                ? void 0
                : boxedExpressionEditorGWTService.broadcastInvocationExpressionDefinition) === null || _a === void 0
              ? void 0
              : _a.call(boxedExpressionEditorGWTService, updatedDefinition);
          },
          ["name", "dataType", "bindingEntries", "invokedFunction", "entryInfoWidth", "entryExpressionWidth"]
        );
      }
    },
    [boxedExpressionEditorGWTService, invocationProps, rows, setSupervisorHash]
  );
  var onBlurCallback = (0, react_1.useCallback)(
    function (event) {
      if (invocationProps.invokedFunction != event.target.value) {
        boxedExpressionEditorGWTService === null || boxedExpressionEditorGWTService === void 0
          ? void 0
          : boxedExpressionEditorGWTService.notifyUserAction();
      }
      spreadInvocationExpressionDefinition({ invokedFunction: event.target.value });
    },
    [boxedExpressionEditorGWTService, spreadInvocationExpressionDefinition, invocationProps.invokedFunction]
  );
  var headerCellElement = (0, react_1.useMemo)(
    function () {
      return (0, jsx_runtime_1.jsx)(
        "div",
        __assign(
          { className: "function-definition-container" },
          {
            children: (0, jsx_runtime_1.jsx)(
              "input",
              {
                className: "function-definition pf-u-text-truncate",
                type: "text",
                placeholder: i18n.enterFunction,
                defaultValue: invocationProps.invokedFunction,
                onBlur: onBlurCallback,
              },
              void 0
            ),
          }
        ),
        void 0
      );
    },
    [invocationProps.invokedFunction, onBlurCallback, i18n.enterFunction]
  );
  var setInfoWidth = (0, react_1.useCallback)(
    function (newInfoWidth) {
      spreadInvocationExpressionDefinition({ entryInfoWidth: newInfoWidth });
    },
    [spreadInvocationExpressionDefinition]
  );
  var setExpressionWidth = (0, react_1.useCallback)(
    function (newEntryExpressionWidth) {
      spreadInvocationExpressionDefinition({ entryExpressionWidth: newEntryExpressionWidth });
    },
    [spreadInvocationExpressionDefinition]
  );
  var columns = (0, react_1.useMemo)(
    function () {
      var _a, _b, _c, _d;
      return [
        {
          label: (_a = invocationProps.name) !== null && _a !== void 0 ? _a : DEFAULT_PARAMETER_NAME,
          accessor: decisionNodeId,
          dataType: (_b = invocationProps.dataType) !== null && _b !== void 0 ? _b : DEFAULT_PARAMETER_DATA_TYPE,
          disableHandlerOnHeader: true,
          columns: [
            {
              headerCellElement: headerCellElement,
              accessor: "functionDefinition",
              disableHandlerOnHeader: true,
              columns: [
                {
                  accessor: "entryInfo",
                  disableHandlerOnHeader: true,
                  width:
                    (_c = invocationProps.entryInfoWidth) !== null && _c !== void 0
                      ? _c
                      : api_1.DEFAULT_ENTRY_INFO_MIN_WIDTH,
                  setWidth: setInfoWidth,
                  minWidth: api_1.DEFAULT_ENTRY_INFO_MIN_WIDTH,
                },
                {
                  accessor: "entryExpression",
                  disableHandlerOnHeader: true,
                  width:
                    (_d = invocationProps.entryExpressionWidth) !== null && _d !== void 0
                      ? _d
                      : api_1.DEFAULT_ENTRY_EXPRESSION_MIN_WIDTH,
                  setWidth: setExpressionWidth,
                  minWidth: api_1.DEFAULT_ENTRY_EXPRESSION_MIN_WIDTH,
                },
              ],
            },
          ],
        },
      ];
    },
    [
      invocationProps.name,
      invocationProps.dataType,
      invocationProps.entryInfoWidth,
      invocationProps.entryExpressionWidth,
      decisionNodeId,
      headerCellElement,
      setInfoWidth,
      setExpressionWidth,
    ]
  );
  var onColumnsUpdate = (0, react_1.useCallback)(
    function (_a) {
      var _b;
      var _c = __read(_a.columns, 1),
        column = _c[0];
      (_b = invocationProps.onUpdatingNameAndDataType) === null || _b === void 0
        ? void 0
        : _b.call(invocationProps, column.label, column.dataType);
      spreadInvocationExpressionDefinition({
        name: column.label,
        dataType: column.dataType,
      });
    },
    [invocationProps, spreadInvocationExpressionDefinition]
  );
  var onRowAdding = (0, react_1.useCallback)(
    function () {
      var generatedName = (0, api_1.generateNextAvailableEntryName)(
        rows.map(function (row) {
          return row.entryInfo;
        }),
        "p"
      );
      return {
        entryInfo: {
          id: (0, api_1.generateUuid)(),
          name: generatedName,
          dataType: DEFAULT_PARAMETER_DATA_TYPE,
        },
        entryExpression: {
          name: generatedName,
          dataType: DEFAULT_PARAMETER_DATA_TYPE,
        },
        nameAndDataTypeSynchronized: true,
      };
    },
    [rows]
  );
  var getHeaderVisibility = (0, react_1.useMemo)(
    function () {
      return invocationProps.isHeadless
        ? api_1.TableHeaderVisibility.SecondToLastLevel
        : api_1.TableHeaderVisibility.Full;
    },
    [invocationProps.isHeadless]
  );
  var onRowsUpdate = (0, react_1.useCallback)(
    function (_a) {
      var rows = _a.rows;
      spreadInvocationExpressionDefinition({ bindingEntries: __spreadArray([], __read(rows), false) });
    },
    [spreadInvocationExpressionDefinition]
  );
  var getRowKeyCallback = (0, react_1.useCallback)(function (row) {
    return (0, api_1.getEntryKey)(row);
  }, []);
  var resetEntryCallback = (0, react_1.useCallback)(function (row) {
    return (0, api_1.resetEntry)(row);
  }, []);
  var defaultCell = (0, react_1.useMemo)(
    function () {
      return {
        entryInfo: (0, ContextExpression_1.getContextEntryInfoCell)(i18n.editParameter),
        entryExpression: ContextExpression_1.ContextEntryExpressionCell,
      };
    },
    [i18n.editParameter]
  );
  var handlerConfiguration = (0, react_1.useMemo)(
    function () {
      return (0, api_1.getHandlerConfiguration)(i18n, i18n.parameters);
    },
    [i18n]
  );
  return (0, jsx_runtime_1.jsx)(
    "div",
    __assign(
      { className: "invocation-expression ".concat(invocationProps.id) },
      {
        children: (0, jsx_runtime_1.jsx)(
          Table_1.Table,
          {
            tableId: invocationProps.id,
            headerLevels: 2,
            headerVisibility: getHeaderVisibility,
            skipLastHeaderGroup: true,
            defaultCell: defaultCell,
            columns: columns,
            rows: rows !== null && rows !== void 0 ? rows : [],
            onColumnsUpdate: onColumnsUpdate,
            onRowAdding: onRowAdding,
            onRowsUpdate: onRowsUpdate,
            handlerConfiguration: handlerConfiguration,
            getRowKey: getRowKeyCallback,
            resetRowCustomFunction: resetEntryCallback,
          },
          void 0
        ),
      }
    ),
    void 0
  );
};
exports.InvocationExpression = InvocationExpression;
//# sourceMappingURL=InvocationExpression.js.map

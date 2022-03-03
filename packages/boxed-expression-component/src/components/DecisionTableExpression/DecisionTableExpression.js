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
exports.DecisionTableExpression = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var _ = require("lodash");
var react_1 = require("react");
var api_1 = require("../../api");
var context_1 = require("../../context");
var i18n_1 = require("../../i18n");
var Resizer_1 = require("../Resizer");
var Table_1 = require("../Table");
require("./DecisionTableExpression.css");
var HitPolicySelector_1 = require("./HitPolicySelector");
var DecisionTableColumnType;
(function (DecisionTableColumnType) {
  DecisionTableColumnType["InputClause"] = "input";
  DecisionTableColumnType["OutputClause"] = "output";
  DecisionTableColumnType["Annotation"] = "annotation";
})(DecisionTableColumnType || (DecisionTableColumnType = {}));
var DASH_SYMBOL = "-";
var EMPTY_SYMBOL = "";
var DECISION_NODE_DEFAULT_NAME = "output-1";
function DecisionTableExpression(decisionTable) {
  var _a = (0, context_1.useBoxedExpression)(),
    setSupervisorHash = _a.setSupervisorHash,
    decisionNodeId = _a.decisionNodeId,
    boxedExpressionEditorGWTService = _a.boxedExpressionEditorGWTService;
  var i18n = (0, i18n_1.useBoxedExpressionEditorI18n)().i18n;
  var getColumnPrefix = (0, react_1.useCallback)(function (groupType) {
    switch (groupType) {
      case DecisionTableColumnType.InputClause:
        return "input-";
      case DecisionTableColumnType.OutputClause:
        return "output-";
      case DecisionTableColumnType.Annotation:
        return "annotation-";
      default:
        return "column-";
    }
  }, []);
  var generateHandlerConfigurationByColumn = (0, react_1.useCallback)(
    function (groupName) {
      return [
        {
          group: groupName,
          items: [
            { name: i18n.columnOperations.insertLeft, type: api_1.TableOperation.ColumnInsertLeft },
            { name: i18n.columnOperations.insertRight, type: api_1.TableOperation.ColumnInsertRight },
            { name: i18n.columnOperations.delete, type: api_1.TableOperation.ColumnDelete },
          ],
        },
        {
          group: i18n.decisionRule,
          items: [
            { name: i18n.rowOperations.insertAbove, type: api_1.TableOperation.RowInsertAbove },
            { name: i18n.rowOperations.insertBelow, type: api_1.TableOperation.RowInsertBelow },
            { name: i18n.rowOperations.delete, type: api_1.TableOperation.RowDelete },
            { name: i18n.rowOperations.duplicate, type: api_1.TableOperation.RowDuplicate },
          ],
        },
      ];
    },
    [i18n]
  );
  var getHandlerConfiguration = (0, react_1.useMemo)(
    function () {
      var configuration = {};
      configuration[EMPTY_SYMBOL] = generateHandlerConfigurationByColumn(i18n.ruleAnnotation);
      configuration[DecisionTableColumnType.InputClause] = generateHandlerConfigurationByColumn(i18n.inputClause);
      configuration[DecisionTableColumnType.OutputClause] = generateHandlerConfigurationByColumn(i18n.outputClause);
      configuration[DecisionTableColumnType.Annotation] = generateHandlerConfigurationByColumn(i18n.ruleAnnotation);
      return configuration;
    },
    [generateHandlerConfigurationByColumn, i18n.inputClause, i18n.outputClause, i18n.ruleAnnotation]
  );
  var getEditColumnLabel = (0, react_1.useMemo)(
    function () {
      var editColumnLabel = {};
      editColumnLabel[DecisionTableColumnType.InputClause] = i18n.editClause.input;
      editColumnLabel[DecisionTableColumnType.OutputClause] = i18n.editClause.output;
      return editColumnLabel;
    },
    [i18n.editClause.input, i18n.editClause.output]
  );
  var columns = (0, react_1.useMemo)(
    function () {
      var _a, _b, _c, _d, _e;
      var inputColumns = _.chain(
        (_a = decisionTable.input) !== null && _a !== void 0
          ? _a
          : [{ name: "input-1", dataType: api_1.DataType.Undefined }]
      )
        .map(function (inputClause) {
          var _a;
          return {
            accessor: (_a = inputClause.id) !== null && _a !== void 0 ? _a : (0, api_1.generateUuid)(),
            label: inputClause.name,
            dataType: inputClause.dataType,
            width: inputClause.width,
            groupType: DecisionTableColumnType.InputClause,
            cssClasses: "decision-table--input",
          };
        })
        .value();
      var outputColumns = _.chain(
        (_b = decisionTable.output) !== null && _b !== void 0
          ? _b
          : [{ name: DECISION_NODE_DEFAULT_NAME, dataType: api_1.DataType.Undefined }]
      )
        .map(function (outputClause) {
          var _a;
          return {
            accessor: (_a = outputClause.id) !== null && _a !== void 0 ? _a : (0, api_1.generateUuid)(),
            label: outputClause.name,
            dataType: outputClause.dataType,
            width: outputClause.width,
            groupType: DecisionTableColumnType.OutputClause,
            cssClasses: "decision-table--output",
          };
        })
        .value();
      var annotationColumns = _.chain(
        (_c = decisionTable.annotations) !== null && _c !== void 0 ? _c : [{ name: "annotation-1" }]
      )
        .map(function (annotation) {
          var _a;
          return {
            accessor: (_a = annotation.id) !== null && _a !== void 0 ? _a : (0, api_1.generateUuid)(),
            label: annotation.name,
            width: annotation.width,
            inlineEditable: true,
            groupType: DecisionTableColumnType.Annotation,
            cssClasses: "decision-table--annotation",
          };
        })
        .value();
      var inputSection = {
        groupType: DecisionTableColumnType.InputClause,
        accessor: "Input",
        label: "Input",
        cssClasses: "decision-table--input",
        columns: inputColumns,
      };
      var outputSection = {
        groupType: DecisionTableColumnType.OutputClause,
        accessor: decisionTable.isHeadless ? decisionTable.id : decisionNodeId,
        label: (_d = decisionTable.name) !== null && _d !== void 0 ? _d : DECISION_NODE_DEFAULT_NAME,
        dataType: (_e = decisionTable.dataType) !== null && _e !== void 0 ? _e : api_1.DataType.Undefined,
        cssClasses: "decision-table--output",
        columns: outputColumns,
        appendColumnsOnChildren: true,
      };
      var annotationSection = {
        groupType: DecisionTableColumnType.Annotation,
        accessor: "Annotations",
        label: "Annotations",
        cssClasses: "decision-table--annotation",
        columns: annotationColumns,
        inlineEditable: true,
      };
      return [inputSection, outputSection, annotationSection];
    },
    [
      decisionNodeId,
      decisionTable.annotations,
      decisionTable.dataType,
      decisionTable.id,
      decisionTable.input,
      decisionTable.isHeadless,
      decisionTable.name,
      decisionTable.output,
    ]
  );
  var rows = (0, react_1.useMemo)(
    function () {
      var _a;
      return (
        (_a = decisionTable.rules) !== null && _a !== void 0
          ? _a
          : [
              {
                id: (0, api_1.generateUuid)(),
                inputEntries: [DASH_SYMBOL],
                outputEntries: [EMPTY_SYMBOL],
                annotationEntries: [EMPTY_SYMBOL],
              },
            ]
      ).map(function (rule) {
        var rowArray = __spreadArray(
          __spreadArray(__spreadArray([], __read(rule.inputEntries), false), __read(rule.outputEntries), false),
          __read(rule.annotationEntries),
          false
        );
        var tableRow = _.chain((0, Table_1.getColumnsAtLastLevel)(columns))
          .reduce(function (tableRow, column, columnIndex) {
            tableRow[column.accessor] = rowArray[columnIndex] || EMPTY_SYMBOL;
            return tableRow;
          }, {})
          .value();
        tableRow.id = rule.id;
        return tableRow;
      });
    },
    [columns, decisionTable.rules]
  );
  var spreadDecisionTableExpressionDefinition = (0, react_1.useCallback)(
    function (_a) {
      var _b, _c, _d, _e;
      var updatedColumns = _a.updatedColumns,
        updatedDecisionTable = _a.updatedDecisionTable,
        updatedRows = _a.updatedRows;
      var groupedColumns = _.groupBy(
        (0, Table_1.getColumnsAtLastLevel)(
          updatedColumns !== null && updatedColumns !== void 0 ? updatedColumns : columns
        ),
        function (column) {
          return column.groupType;
        }
      );
      var input = _.chain(groupedColumns[DecisionTableColumnType.InputClause])
        .map(function (inputClause) {
          return {
            id: inputClause.accessor,
            name: inputClause.label,
            dataType: inputClause.dataType,
            width: inputClause.width,
          };
        })
        .value();
      var output = _.chain(groupedColumns[DecisionTableColumnType.OutputClause])
        .map(function (outputClause) {
          return {
            id: outputClause.accessor,
            name: outputClause.label,
            dataType: outputClause.dataType,
            width: outputClause.width,
          };
        })
        .value();
      var annotations = _.chain(groupedColumns[DecisionTableColumnType.Annotation])
        .map(function (annotation) {
          return {
            id: annotation.accessor,
            name: annotation.label,
            width: annotation.width,
          };
        })
        .value();
      var rules = _.chain(updatedRows !== null && updatedRows !== void 0 ? updatedRows : rows)
        .map(function (row) {
          return {
            id: row.id,
            inputEntries: _.chain(input)
              .map(function (inputClause) {
                return row[inputClause.id];
              })
              .value(),
            outputEntries: _.chain(output)
              .map(function (outputClause) {
                return row[outputClause.id];
              })
              .value(),
            annotationEntries: _.chain(annotations)
              .map(function (annotation) {
                return row[annotation.id];
              })
              .value(),
          };
        })
        .value();
      var updatedDefinition = __assign(
        {
          id: decisionTable.id,
          logicType: api_1.LogicType.DecisionTable,
          name: (_b = decisionTable.name) !== null && _b !== void 0 ? _b : DECISION_NODE_DEFAULT_NAME,
          dataType: (_c = decisionTable.dataType) !== null && _c !== void 0 ? _c : api_1.DataType.Undefined,
          hitPolicy: (_d = decisionTable.hitPolicy) !== null && _d !== void 0 ? _d : api_1.HitPolicy.Unique,
          aggregation:
            (_e = decisionTable.aggregation) !== null && _e !== void 0 ? _e : api_1.BuiltinAggregation["<None>"],
          input: input !== null && input !== void 0 ? input : [{ name: "input-1", dataType: api_1.DataType.Undefined }],
          output:
            output !== null && output !== void 0
              ? output
              : [{ name: DECISION_NODE_DEFAULT_NAME, dataType: api_1.DataType.Undefined }],
          annotations: annotations !== null && annotations !== void 0 ? annotations : [{ name: "annotation-1" }],
          rules:
            rules !== null && rules !== void 0
              ? rules
              : [{ inputEntries: [DASH_SYMBOL], outputEntries: [EMPTY_SYMBOL], annotationEntries: [EMPTY_SYMBOL] }],
        },
        updatedDecisionTable
      );
      if (decisionTable.isHeadless) {
        var headlessDefinition_1 = _.omit(updatedDefinition, ["isHeadless"]);
        (0, api_1.executeIfExpressionDefinitionChanged)(
          decisionTable,
          headlessDefinition_1,
          function () {
            var _a;
            (_a = decisionTable.onUpdatingRecursiveExpression) === null || _a === void 0
              ? void 0
              : _a.call(decisionTable, headlessDefinition_1);
          },
          ["name", "dataType", "hitPolicy", "aggregation", "input", "output", "annotations", "rules"]
        );
      } else {
        (0, api_1.executeIfExpressionDefinitionChanged)(
          decisionTable,
          updatedDefinition,
          function () {
            var _a;
            setSupervisorHash((0, Resizer_1.hashfy)(updatedDefinition));
            (_a =
              boxedExpressionEditorGWTService === null || boxedExpressionEditorGWTService === void 0
                ? void 0
                : boxedExpressionEditorGWTService.broadcastDecisionTableExpressionDefinition) === null || _a === void 0
              ? void 0
              : _a.call(boxedExpressionEditorGWTService, updatedDefinition);
          },
          ["name", "dataType", "hitPolicy", "aggregation", "input", "output", "annotations", "rules"]
        );
      }
    },
    [boxedExpressionEditorGWTService, columns, decisionTable, rows, setSupervisorHash]
  );
  var singleOutputChildDataType = (0, react_1.useRef)(api_1.DataType.Undefined);
  var synchronizeDecisionNodeDataTypeWithSingleOutputColumnDataType = (0, react_1.useCallback)(
    function (decisionNodeColumn) {
      var _a;
      if (_.size(decisionNodeColumn.columns) === 1) {
        var updatedSingleOutputChildDataType = _.first(decisionNodeColumn.columns).dataType;
        if (updatedSingleOutputChildDataType !== singleOutputChildDataType.current) {
          singleOutputChildDataType.current = updatedSingleOutputChildDataType;
          decisionNodeColumn.dataType = updatedSingleOutputChildDataType;
        } else if (
          (_a = decisionNodeColumn.dataType !== decisionTable.dataType) !== null && _a !== void 0
            ? _a
            : api_1.DataType.Undefined
        ) {
          singleOutputChildDataType.current = decisionNodeColumn.dataType;
          _.first(decisionNodeColumn.columns).dataType = decisionNodeColumn.dataType;
        }
      }
    },
    [decisionTable.dataType]
  );
  var onColumnsUpdate = (0, react_1.useCallback)(
    function (_a) {
      var _b;
      var columns = _a.columns;
      var decisionNodeColumn = _.find(columns, { groupType: DecisionTableColumnType.OutputClause });
      if (!decisionTable.isHeadless) {
        synchronizeDecisionNodeDataTypeWithSingleOutputColumnDataType(decisionNodeColumn);
      }
      spreadDecisionTableExpressionDefinition({
        updatedDecisionTable: {
          name: decisionNodeColumn.label,
          dataType: decisionNodeColumn.dataType,
        },
        updatedColumns: __spreadArray([], __read(columns), false),
      });
      (_b = decisionTable.onUpdatingNameAndDataType) === null || _b === void 0
        ? void 0
        : _b.call(decisionTable, decisionNodeColumn.label, decisionNodeColumn.dataType);
    },
    [
      decisionTable.onUpdatingNameAndDataType,
      spreadDecisionTableExpressionDefinition,
      synchronizeDecisionNodeDataTypeWithSingleOutputColumnDataType,
    ]
  );
  var fillMissingCellValues = (0, react_1.useCallback)(
    function (updatedRows) {
      return updatedRows.map(function (row) {
        var updatedRow = (0, Table_1.getColumnsAtLastLevel)(columns).reduce(function (filledRow, column) {
          if (_.isNil(row[column.accessor])) {
            filledRow[column.accessor] =
              column.groupType === DecisionTableColumnType.InputClause ? DASH_SYMBOL : EMPTY_SYMBOL;
          } else {
            filledRow[column.accessor] = row[column.accessor];
          }
          return filledRow;
        }, {});
        updatedRow.id = row.id;
        return updatedRow;
      });
    },
    [columns]
  );
  var onRowsUpdate = (0, react_1.useCallback)(
    function (_a) {
      var rows = _a.rows;
      spreadDecisionTableExpressionDefinition({ updatedRows: fillMissingCellValues(rows) });
    },
    [fillMissingCellValues, spreadDecisionTableExpressionDefinition]
  );
  var onRowAdding = (0, react_1.useCallback)(
    function () {
      return (0, Table_1.getColumnsAtLastLevel)(columns).reduce(function (tableRow, column) {
        tableRow[column.accessor] =
          column.groupType === DecisionTableColumnType.InputClause ? DASH_SYMBOL : EMPTY_SYMBOL;
        return tableRow;
      }, {});
    },
    [columns]
  );
  var onHitPolicySelect = (0, react_1.useCallback)(
    function (itemId) {
      spreadDecisionTableExpressionDefinition({
        updatedDecisionTable: {
          hitPolicy: itemId,
        },
      });
    },
    [spreadDecisionTableExpressionDefinition]
  );
  var onBuiltInAggregatorSelect = (0, react_1.useCallback)(
    function (itemId) {
      spreadDecisionTableExpressionDefinition({
        updatedDecisionTable: {
          aggregation: api_1.BuiltinAggregation[itemId],
        },
      });
    },
    [spreadDecisionTableExpressionDefinition]
  );
  var controllerCell = (0, react_1.useMemo)(
    function () {
      var _a, _b;
      return (0, jsx_runtime_1.jsx)(
        HitPolicySelector_1.HitPolicySelector,
        {
          selectedHitPolicy: (_a = decisionTable.hitPolicy) !== null && _a !== void 0 ? _a : api_1.HitPolicy.Unique,
          selectedBuiltInAggregator:
            (_b = decisionTable.aggregation) !== null && _b !== void 0 ? _b : api_1.BuiltinAggregation["<None>"],
          onHitPolicySelect: onHitPolicySelect,
          onBuiltInAggregatorSelect: onBuiltInAggregatorSelect,
        },
        void 0
      );
    },
    [decisionTable.aggregation, decisionTable.hitPolicy, onBuiltInAggregatorSelect, onHitPolicySelect]
  );
  return (0, jsx_runtime_1.jsx)(
    "div",
    __assign(
      { className: "decision-table-expression ".concat(decisionTable.id) },
      {
        children: (0, jsx_runtime_1.jsx)(
          Table_1.Table,
          {
            headerLevels: 1,
            headerVisibility: api_1.TableHeaderVisibility.Full,
            getColumnPrefix: getColumnPrefix,
            editColumnLabel: getEditColumnLabel,
            handlerConfiguration: getHandlerConfiguration,
            columns: columns,
            rows: rows !== null && rows !== void 0 ? rows : [],
            onColumnsUpdate: onColumnsUpdate,
            onRowsUpdate: onRowsUpdate,
            onRowAdding: onRowAdding,
            controllerCell: controllerCell,
          },
          void 0
        ),
      }
    ),
    void 0
  );
}
exports.DecisionTableExpression = DecisionTableExpression;
//# sourceMappingURL=DecisionTableExpression.js.map

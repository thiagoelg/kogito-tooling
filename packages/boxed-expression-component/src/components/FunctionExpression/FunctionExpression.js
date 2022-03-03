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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionExpression = exports.DEFAULT_FIRST_PARAM_NAME = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./FunctionExpression.css");
var react_1 = require("react");
var api_1 = require("../../api");
var Table_1 = require("../Table");
var ContextExpression_1 = require("../ContextExpression");
var i18n_1 = require("../../i18n");
var PopoverMenu_1 = require("../PopoverMenu");
var _ = require("lodash");
var context_1 = require("../../context");
var FunctionKindSelector_1 = require("./FunctionKindSelector");
var EditParameters_1 = require("./EditParameters");
var Resizer_1 = require("../Resizer");
exports.DEFAULT_FIRST_PARAM_NAME = "p-1";
var FunctionExpression = function (functionExpression) {
  var FIRST_ENTRY_ID = "0";
  var SECOND_ENTRY_ID = "1";
  var i18n = (0, i18n_1.useBoxedExpressionEditorI18n)().i18n;
  var _a = (0, context_1.useBoxedExpression)(),
    editorRef = _a.editorRef,
    setSupervisorHash = _a.setSupervisorHash,
    pmmlParams = _a.pmmlParams,
    boxedExpressionEditorGWTService = _a.boxedExpressionEditorGWTService,
    decisionNodeId = _a.decisionNodeId;
  var pmmlDocument = (0, react_1.useMemo)(
    function () {
      return functionExpression.document;
    },
    [functionExpression.document]
  );
  var pmmlDocumentFieldId = (0, react_1.useMemo)(
    function () {
      var _a;
      return (_a = functionExpression.documentFieldId) !== null && _a !== void 0 ? _a : (0, api_1.generateUuid)();
    },
    [functionExpression.documentFieldId]
  );
  var pmmlModel = (0, react_1.useMemo)(
    function () {
      return functionExpression.model;
    },
    [functionExpression.model]
  );
  var pmmlModelFieldId = (0, react_1.useMemo)(
    function () {
      var _a;
      return (_a = functionExpression.modelFieldId) !== null && _a !== void 0 ? _a : (0, api_1.generateUuid)();
    },
    [functionExpression.modelFieldId]
  );
  var javaClassName = (0, react_1.useMemo)(
    function () {
      return functionExpression.className;
    },
    [functionExpression.className]
  );
  var javaClassFieldId = (0, react_1.useMemo)(
    function () {
      var _a;
      return (_a = functionExpression.classFieldId) !== null && _a !== void 0 ? _a : (0, api_1.generateUuid)();
    },
    [functionExpression.classFieldId]
  );
  var javaMethodName = (0, react_1.useMemo)(
    function () {
      return functionExpression.methodName;
    },
    [functionExpression.methodName]
  );
  var javaMethodFieldId = (0, react_1.useMemo)(
    function () {
      var _a;
      return (_a = functionExpression.methodFieldId) !== null && _a !== void 0 ? _a : (0, api_1.generateUuid)();
    },
    [functionExpression.methodFieldId]
  );
  var feelExpression = (0, react_1.useMemo)(
    function () {
      return functionExpression.expression;
    },
    [functionExpression.expression]
  );
  var extractContextEntriesFromJavaProps = (0, react_1.useMemo)(
    function () {
      return [
        {
          entryInfo: { id: FIRST_ENTRY_ID, name: i18n.class, dataType: api_1.DataType.String },
          entryExpression: {
            id: javaClassFieldId,
            noClearAction: true,
            logicType: api_1.LogicType.LiteralExpression,
            content: javaClassName !== null && javaClassName !== void 0 ? javaClassName : "",
          },
        },
        {
          entryInfo: { id: SECOND_ENTRY_ID, name: i18n.methodSignature, dataType: api_1.DataType.String },
          entryExpression: {
            id: javaMethodFieldId,
            noClearAction: true,
            logicType: api_1.LogicType.LiteralExpression,
            content: javaMethodName !== null && javaMethodName !== void 0 ? javaMethodName : "",
          },
        },
      ];
    },
    [i18n.class, i18n.methodSignature, javaClassName, javaClassFieldId, javaMethodName, javaMethodFieldId]
  );
  var extractContextEntriesFromPmmlProps = (0, react_1.useMemo)(
    function () {
      return [
        {
          entryInfo: { id: FIRST_ENTRY_ID, name: i18n.document, dataType: api_1.DataType.String },
          entryExpression: {
            id: pmmlDocumentFieldId,
            noClearAction: true,
            logicType: api_1.LogicType.PMMLLiteralExpression,
            testId: "pmml-selector-document",
            noOptionsLabel: i18n.pmml.firstSelection,
            getOptions: function () {
              return _.map(pmmlParams, "document");
            },
            selected: pmmlDocument !== null && pmmlDocument !== void 0 ? pmmlDocument : "",
          },
        },
        {
          entryInfo: { id: SECOND_ENTRY_ID, name: i18n.model, dataType: api_1.DataType.String },
          entryExpression: {
            id: pmmlModelFieldId,
            noClearAction: true,
            logicType: api_1.LogicType.PMMLLiteralExpression,
            noOptionsLabel: i18n.pmml.secondSelection,
            testId: "pmml-selector-model",
            getOptions: function () {
              var _a;
              return _.map(
                (_a = _.find(pmmlParams, function (param) {
                  return param.document === pmmlDocument;
                })) === null || _a === void 0
                  ? void 0
                  : _a.modelsFromDocument,
                "model"
              );
            },
            selected: pmmlModel !== null && pmmlModel !== void 0 ? pmmlModel : "",
          },
        },
      ];
    },
    [
      i18n.document,
      i18n.model,
      i18n.pmml.firstSelection,
      i18n.pmml.secondSelection,
      pmmlParams,
      pmmlDocument,
      pmmlDocumentFieldId,
      pmmlModel,
      pmmlModelFieldId,
    ]
  );
  var extractParametersFromPmmlProps = (0, react_1.useMemo)(
    function () {
      var _a, _b;
      return (
        ((_b = _.find(
          (_a = _.find(pmmlParams, {
            document: pmmlDocument !== null && pmmlDocument !== void 0 ? pmmlDocument : "",
          })) === null || _a === void 0
            ? void 0
            : _a.modelsFromDocument,
          {
            model: pmmlModel !== null && pmmlModel !== void 0 ? pmmlModel : "",
          }
        )) === null || _b === void 0
          ? void 0
          : _b.parametersFromModel) || []
      );
    },
    [pmmlParams, pmmlModel, pmmlDocument]
  );
  var rows = (0, react_1.useCallback)(
    function (functionKind) {
      switch (functionKind) {
        case api_1.FunctionKind.Java: {
          return {
            id: FIRST_ENTRY_ID,
            entryExpression: {
              logicType: api_1.LogicType.Context,
              noClearAction: true,
              renderResult: false,
              noHandlerMenu: true,
              contextEntries: extractContextEntriesFromJavaProps,
            },
          };
        }
        case api_1.FunctionKind.Pmml: {
          return {
            id: FIRST_ENTRY_ID,
            entryExpression: {
              logicType: api_1.LogicType.Context,
              noClearAction: true,
              renderResult: false,
              noHandlerMenu: true,
              contextEntries: extractContextEntriesFromPmmlProps,
            },
          };
        }
        case api_1.FunctionKind.Feel:
        default: {
          return {
            id: FIRST_ENTRY_ID,
            entryExpression: feelExpression || { logicType: api_1.LogicType.LiteralExpression },
          };
        }
      }
    },
    [extractContextEntriesFromJavaProps, extractContextEntriesFromPmmlProps, feelExpression]
  );
  var retrieveModelValue = (0, react_1.useCallback)(
    function (documentValue, contextProps) {
      var _a, _b, _c, _d, _e, _f;
      return documentValue === pmmlDocument
        ? _.includes(
            (_b =
              (_a = _.nth(contextProps.contextEntries, 1)) === null || _a === void 0 ? void 0 : _a.entryExpression) ===
              null || _b === void 0
              ? void 0
              : _b.getOptions(),
            (_d =
              (_c = _.nth(contextProps.contextEntries, 1)) === null || _c === void 0 ? void 0 : _c.entryExpression) ===
              null || _d === void 0
              ? void 0
              : _d.selected
          )
          ? (_f =
              (_e = _.nth(contextProps.contextEntries, 1)) === null || _e === void 0 ? void 0 : _e.entryExpression) ===
              null || _f === void 0
            ? void 0
            : _f.selected
          : ""
        : "";
    },
    [pmmlDocument]
  );
  var extendDefinitionBasedOnFunctionKind = (0, react_1.useCallback)(
    function (definition, updatedDefinition, functionKind) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
      var currentFunctionKind =
        functionKind !== null && functionKind !== void 0 ? functionKind : functionExpression.functionKind;
      switch (currentFunctionKind) {
        case api_1.FunctionKind.Java: {
          var contextProps = rows(currentFunctionKind).entryExpression;
          var firstEntry =
            (_a = _.nth(contextProps.contextEntries, 0)) === null || _a === void 0 ? void 0 : _a.entryExpression;
          var secondEntry =
            (_b = _.nth(contextProps.contextEntries, 1)) === null || _b === void 0 ? void 0 : _b.entryExpression;
          var className =
            (_c = firstEntry === null || firstEntry === void 0 ? void 0 : firstEntry.content) !== null && _c !== void 0
              ? _c
              : "";
          var classFieldId = firstEntry === null || firstEntry === void 0 ? void 0 : firstEntry.id;
          var methodName =
            (_d = secondEntry === null || secondEntry === void 0 ? void 0 : secondEntry.content) !== null &&
            _d !== void 0
              ? _d
              : "";
          var methodFieldId = secondEntry === null || secondEntry === void 0 ? void 0 : secondEntry.id;
          return _.extend(definition, {
            className: className,
            methodName: methodName,
            classFieldId: classFieldId,
            methodFieldId: methodFieldId,
          });
        }
        case api_1.FunctionKind.Pmml: {
          var contextProps = rows(currentFunctionKind).entryExpression;
          var firstEntry =
            (_e = _.nth(contextProps.contextEntries, 0)) === null || _e === void 0 ? void 0 : _e.entryExpression;
          var secondEntry =
            (_f = _.nth(contextProps.contextEntries, 1)) === null || _f === void 0 ? void 0 : _f.entryExpression;
          var documentValue =
            (_g = firstEntry === null || firstEntry === void 0 ? void 0 : firstEntry.selected) !== null && _g !== void 0
              ? _g
              : "";
          var documentFieldId = firstEntry === null || firstEntry === void 0 ? void 0 : firstEntry.id;
          var modelValue = retrieveModelValue(documentValue, contextProps);
          var modelFieldId = secondEntry === null || secondEntry === void 0 ? void 0 : secondEntry.id;
          var modelHasChanged =
            ((_j = (_h = definition) === null || _h === void 0 ? void 0 : _h.model) !== null && _j !== void 0
              ? _j
              : "") !==
            ((_l = (_k = updatedDefinition) === null || _k === void 0 ? void 0 : _k.model) !== null && _l !== void 0
              ? _l
              : "");
          if (pmmlModel !== "") {
            var parametersFromPmmlProps = extractParametersFromPmmlProps;
            if (
              !_.isEmpty(parametersFromPmmlProps) &&
              parametersFromPmmlProps &&
              ((_m = definition.formalParameters) === null || _m === void 0 ? void 0 : _m.length) === 0
            ) {
              definition.formalParameters = parametersFromPmmlProps;
            }
          } else if (modelHasChanged) {
            definition.formalParameters = [];
          }
          return _.extend(definition, {
            document: documentValue,
            model: modelValue,
            documentFieldId: documentFieldId,
            modelFieldId: modelFieldId,
          });
        }
        case api_1.FunctionKind.Feel:
        default: {
          return _.extend(definition, {
            expression: rows(currentFunctionKind).entryExpression,
          });
        }
      }
    },
    [retrieveModelValue, rows, functionExpression.functionKind, pmmlModel, extractParametersFromPmmlProps]
  );
  var spreadFunctionExpressionDefinition = (0, react_1.useCallback)(
    function (updatedFunctionExpression) {
      var _a, _b, _c, _d;
      var extendedDefinition = extendDefinitionBasedOnFunctionKind(
        {
          id: functionExpression.id,
          logicType: functionExpression.logicType,
          name: (_a = functionExpression.name) !== null && _a !== void 0 ? _a : exports.DEFAULT_FIRST_PARAM_NAME,
          dataType: (_b = functionExpression.dataType) !== null && _b !== void 0 ? _b : api_1.DataType.Undefined,
          functionKind: (_c = functionExpression.functionKind) !== null && _c !== void 0 ? _c : api_1.FunctionKind.Feel,
          parametersWidth:
            (_d = functionExpression.parametersWidth) !== null && _d !== void 0
              ? _d
              : api_1.DEFAULT_ENTRY_EXPRESSION_MIN_WIDTH,
          formalParameters: functionExpression.formalParameters,
        },
        updatedFunctionExpression,
        updatedFunctionExpression === null || updatedFunctionExpression === void 0
          ? void 0
          : updatedFunctionExpression.functionKind
      );
      var updatedDefinition = __assign(__assign({}, extendedDefinition), updatedFunctionExpression);
      if (functionExpression.isHeadless) {
        var headlessDefinition_1 = _.omit(updatedDefinition, ["name", "dataType", "isHeadless"]);
        (0, api_1.executeIfExpressionDefinitionChanged)(
          functionExpression,
          headlessDefinition_1,
          function () {
            var _a;
            (_a = functionExpression.onUpdatingRecursiveExpression) === null || _a === void 0
              ? void 0
              : _a.call(functionExpression, headlessDefinition_1);
          },
          [
            "functionKind",
            "formalParameters",
            "parametersWidth",
            "className",
            "methodName",
            "document",
            "model",
            "expression",
          ]
        );
      } else {
        (0, api_1.executeIfExpressionDefinitionChanged)(
          functionExpression,
          updatedDefinition,
          function () {
            var _a;
            setSupervisorHash((0, Resizer_1.hashfy)(updatedDefinition));
            (_a =
              boxedExpressionEditorGWTService === null || boxedExpressionEditorGWTService === void 0
                ? void 0
                : boxedExpressionEditorGWTService.broadcastFunctionExpressionDefinition) === null || _a === void 0
              ? void 0
              : _a.call(boxedExpressionEditorGWTService, updatedDefinition);
          },
          [
            "name",
            "dataType",
            "functionKind",
            "formalParameters",
            "parametersWidth",
            "className",
            "methodName",
            "document",
            "model",
            "expression",
          ]
        );
      }
    },
    [boxedExpressionEditorGWTService, extendDefinitionBasedOnFunctionKind, setSupervisorHash, functionExpression]
  );
  var editParametersPopoverAppendTo = (0, react_1.useCallback)(
    function () {
      return function () {
        return editorRef.current;
      };
    },
    [editorRef]
  );
  var setParameters = (0, react_1.useCallback)(
    function (newParameter) {
      spreadFunctionExpressionDefinition({ formalParameters: newParameter });
    },
    [spreadFunctionExpressionDefinition]
  );
  var headerCellElement = (0, react_1.useMemo)(
    function () {
      var _a, _b, _c, _d;
      return (0, jsx_runtime_1.jsx)(
        PopoverMenu_1.PopoverMenu,
        __assign(
          {
            title: i18n.editParameters,
            appendTo: editParametersPopoverAppendTo(),
            className: "parameters-editor-popover",
            minWidth: "400px",
            body: (0, jsx_runtime_1.jsx)(
              EditParameters_1.EditParameters,
              {
                parameters: (_a = functionExpression.formalParameters) !== null && _a !== void 0 ? _a : [],
                setParameters: setParameters,
              },
              void 0
            ),
          },
          {
            children: (0, jsx_runtime_1.jsx)(
              "div",
              __assign(
                {
                  className: "parameters-list ".concat(
                    _.isEmpty((_b = functionExpression.formalParameters) !== null && _b !== void 0 ? _b : [])
                      ? "empty-parameters"
                      : ""
                  ),
                },
                {
                  children: (0, jsx_runtime_1.jsx)(
                    "p",
                    __assign(
                      { className: "pf-u-text-truncate" },
                      {
                        children: _.isEmpty(
                          (_c = functionExpression.formalParameters) !== null && _c !== void 0 ? _c : []
                        )
                          ? i18n.editParameters
                          : "(".concat(
                              _.join(
                                _.map(
                                  (_d = functionExpression.formalParameters) !== null && _d !== void 0 ? _d : [],
                                  function (parameter) {
                                    return parameter.name;
                                  }
                                ),
                                ", "
                              ),
                              ")"
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
      );
    },
    [editParametersPopoverAppendTo, i18n.editParameters, functionExpression.formalParameters, setParameters]
  );
  var columns = (0, react_1.useMemo)(
    function () {
      var _a, _b, _c;
      return [
        {
          label: (_a = functionExpression.name) !== null && _a !== void 0 ? _a : exports.DEFAULT_FIRST_PARAM_NAME,
          accessor: decisionNodeId,
          dataType: (_b = functionExpression.dataType) !== null && _b !== void 0 ? _b : api_1.DataType.Undefined,
          disableHandlerOnHeader: true,
          columns: [
            {
              headerCellElement: headerCellElement,
              accessor: "parameters",
              disableHandlerOnHeader: true,
              width:
                (_c = functionExpression.parametersWidth) !== null && _c !== void 0
                  ? _c
                  : api_1.DEFAULT_ENTRY_EXPRESSION_MIN_WIDTH,
              minWidth: api_1.DEFAULT_ENTRY_EXPRESSION_MIN_WIDTH,
            },
          ],
        },
      ];
    },
    [
      decisionNodeId,
      functionExpression.name,
      functionExpression.dataType,
      headerCellElement,
      functionExpression.parametersWidth,
    ]
  );
  var getHeaderVisibility = (0, react_1.useMemo)(
    function () {
      return functionExpression.isHeadless ? api_1.TableHeaderVisibility.LastLevel : api_1.TableHeaderVisibility.Full;
    },
    [functionExpression.isHeadless]
  );
  var onFunctionKindSelect = (0, react_1.useCallback)(
    function (itemId) {
      var kind = itemId;
      spreadFunctionExpressionDefinition({ functionKind: kind, formalParameters: [] });
    },
    [spreadFunctionExpressionDefinition]
  );
  var onColumnsUpdate = (0, react_1.useCallback)(
    function (_a) {
      var _b;
      var _c = __read(_a.columns, 1),
        column = _c[0];
      (_b = functionExpression.onUpdatingNameAndDataType) === null || _b === void 0
        ? void 0
        : _b.call(functionExpression, column.label, column.dataType);
      spreadFunctionExpressionDefinition({
        name: column.label,
        dataType: column.dataType,
        parametersWidth: column.width,
      });
    },
    [functionExpression, spreadFunctionExpressionDefinition]
  );
  var resetRowCustomFunction = (0, react_1.useCallback)(
    function (row) {
      spreadFunctionExpressionDefinition({
        functionKind: api_1.FunctionKind.Feel,
        formalParameters: [],
      });
      return (0, api_1.resetEntry)(row);
    },
    [spreadFunctionExpressionDefinition]
  );
  var handlerConfiguration = (0, react_1.useMemo)(
    function () {
      return [
        {
          group: _.upperCase(i18n.function),
          items: [{ name: i18n.rowOperations.clear, type: api_1.TableOperation.RowClear }],
        },
      ];
    },
    [i18n.function, i18n.rowOperations.clear]
  );
  var defaultCell = (0, react_1.useMemo)(function () {
    return { parameters: ContextExpression_1.ContextEntryExpressionCell };
  }, []);
  var onRowsUpdate = (0, react_1.useCallback)(
    function (_a) {
      var _b, _c, _d, _e, _f, _g, _h, _j;
      var _k = __read(_a.rows, 1),
        row = _k[0];
      switch (functionExpression.functionKind) {
        case api_1.FunctionKind.Feel:
          spreadFunctionExpressionDefinition({ expression: row.entryExpression });
          break;
        case api_1.FunctionKind.Java:
          if (row.entryExpression.contextEntries) {
            spreadFunctionExpressionDefinition({
              className:
                (_c = (
                  (_b = row.entryExpression.contextEntries[0]) === null || _b === void 0 ? void 0 : _b.entryExpression
                ).content) !== null && _c !== void 0
                  ? _c
                  : "",
              methodName:
                (_e = (
                  (_d = row.entryExpression.contextEntries[1]) === null || _d === void 0 ? void 0 : _d.entryExpression
                ).content) !== null && _e !== void 0
                  ? _e
                  : "",
            });
          }
          break;
        case api_1.FunctionKind.Pmml:
          if (row.entryExpression.contextEntries) {
            spreadFunctionExpressionDefinition({
              document:
                (_g = (
                  (_f = row.entryExpression.contextEntries[0]) === null || _f === void 0 ? void 0 : _f.entryExpression
                ).selected) !== null && _g !== void 0
                  ? _g
                  : "",
              model:
                (_j = (
                  (_h = row.entryExpression.contextEntries[1]) === null || _h === void 0 ? void 0 : _h.entryExpression
                ).selected) !== null && _j !== void 0
                  ? _j
                  : "",
            });
          }
          break;
      }
    },
    [spreadFunctionExpressionDefinition, functionExpression.functionKind]
  );
  var tableRows = (0, react_1.useMemo)(
    function () {
      return [rows(functionExpression.functionKind)];
    },
    [rows, functionExpression.functionKind]
  );
  var controllerCell = (0, react_1.useMemo)(
    function () {
      var _a;
      return (0, jsx_runtime_1.jsx)(
        FunctionKindSelector_1.FunctionKindSelector,
        {
          selectedFunctionKind:
            (_a = functionExpression.functionKind) !== null && _a !== void 0 ? _a : api_1.FunctionKind.Feel,
          onFunctionKindSelect: onFunctionKindSelect,
        },
        void 0
      );
    },
    [functionExpression.functionKind, onFunctionKindSelect]
  );
  return (0, jsx_runtime_1.jsx)(
    "div",
    __assign(
      { className: "function-expression ".concat(functionExpression.id) },
      {
        children: (0, jsx_runtime_1.jsx)(
          Table_1.Table,
          {
            handlerConfiguration: handlerConfiguration,
            columns: columns,
            onColumnsUpdate: onColumnsUpdate,
            rows: tableRows,
            onRowsUpdate: onRowsUpdate,
            headerLevels: 1,
            headerVisibility: getHeaderVisibility,
            controllerCell: controllerCell,
            defaultCell: defaultCell,
            resetRowCustomFunction: resetRowCustomFunction,
          },
          void 0
        ),
      }
    ),
    void 0
  );
};
exports.FunctionExpression = FunctionExpression;
//# sourceMappingURL=FunctionExpression.js.map

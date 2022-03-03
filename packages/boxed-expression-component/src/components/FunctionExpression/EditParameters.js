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
exports.EditParameters = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./EditParameters.css");
var _ = require("lodash");
var EditExpressionMenu_1 = require("../EditExpressionMenu");
var react_core_1 = require("@patternfly/react-core");
var react_icons_1 = require("@patternfly/react-icons");
var react_1 = require("react");
var api_1 = require("../../api");
var i18n_1 = require("../../i18n");
var context_1 = require("../../context");
var EditParameters = function (_a) {
  var parameters = _a.parameters,
    setParameters = _a.setParameters;
  var boxedExpressionEditorGWTService = (0, context_1.useBoxedExpression)().boxedExpressionEditorGWTService;
  var i18n = (0, i18n_1.useBoxedExpressionEditorI18n)().i18n;
  var addParameter = (0, react_1.useCallback)(
    function () {
      boxedExpressionEditorGWTService === null || boxedExpressionEditorGWTService === void 0
        ? void 0
        : boxedExpressionEditorGWTService.notifyUserAction();
      setParameters(
        __spreadArray(
          __spreadArray([], __read(parameters), false),
          [
            {
              id: (0, api_1.generateUuid)(),
              name: (0, api_1.generateNextAvailableEntryName)(parameters, "p"),
              dataType: api_1.DataType.Undefined,
            },
          ],
          false
        )
      );
    },
    [boxedExpressionEditorGWTService, parameters, setParameters]
  );
  var onNameChange = (0, react_1.useCallback)(
    function (index) {
      return function (event) {
        var parametersCopy = __spreadArray([], __read(parameters), false).map(function (parameter) {
          return Object.assign({}, parameter);
        });
        if (parametersCopy[index].name != event.target.value) {
          boxedExpressionEditorGWTService === null || boxedExpressionEditorGWTService === void 0
            ? void 0
            : boxedExpressionEditorGWTService.notifyUserAction();
        }
        parametersCopy[index].name = event.target.value;
        setParameters(__spreadArray([], __read(parametersCopy), false));
      };
    },
    [boxedExpressionEditorGWTService, parameters, setParameters]
  );
  var onDataTypeChange = (0, react_1.useCallback)(
    function (index) {
      return function (dataType) {
        boxedExpressionEditorGWTService === null || boxedExpressionEditorGWTService === void 0
          ? void 0
          : boxedExpressionEditorGWTService.notifyUserAction();
        var parametersCopy = __spreadArray([], __read(parameters), false).map(function (parameter) {
          return Object.assign({}, parameter);
        });
        parametersCopy[index].dataType = dataType;
        setParameters(__spreadArray([], __read(parametersCopy), false));
      };
    },
    [boxedExpressionEditorGWTService, parameters, setParameters]
  );
  var onParameterRemove = (0, react_1.useCallback)(
    function (index) {
      return function () {
        boxedExpressionEditorGWTService === null || boxedExpressionEditorGWTService === void 0
          ? void 0
          : boxedExpressionEditorGWTService.notifyUserAction();
        setParameters(
          __spreadArray(
            __spreadArray([], __read(parameters.slice(0, index)), false),
            __read(parameters.slice(index + 1)),
            false
          )
        );
      };
    },
    [boxedExpressionEditorGWTService, parameters, setParameters]
  );
  return (0, jsx_runtime_1.jsxs)(
    "div",
    __assign(
      { className: "parameters-editor" },
      {
        children: [
          (0, jsx_runtime_1.jsx)(
            react_core_1.Button,
            __assign(
              { variant: "tertiary", onClick: addParameter, className: "add-parameter" },
              { children: i18n.addParameter }
            ),
            void 0
          ),
          (0, jsx_runtime_1.jsx)(
            "div",
            __assign(
              { className: "parameters-container" },
              {
                children: _.map(parameters, function (parameter, index) {
                  return (0,
                  jsx_runtime_1.jsxs)("div", __assign({ className: "parameter-entry" }, { children: [(0, jsx_runtime_1.jsx)("input", { className: "parameter-name", type: "text", onBlur: onNameChange(index), defaultValue: parameter.name }, void 0), (0, jsx_runtime_1.jsx)(EditExpressionMenu_1.DataTypeSelector, { selectedDataType: parameter.dataType, onDataTypeChange: onDataTypeChange(index), menuAppendTo: "parent" }, void 0), (0, jsx_runtime_1.jsx)(react_core_1.Button, __assign({ variant: "danger", className: "delete-parameter", icon: (0, jsx_runtime_1.jsx)(react_icons_1.OutlinedTrashAltIcon, {}, void 0), iconPosition: "left", onClick: onParameterRemove(index) }, { children: i18n.delete }), void 0)] }), "".concat(parameter.name, "_").concat(index));
                }),
              }
            ),
            void 0
          ),
        ],
      }
    ),
    void 0
  );
};
exports.EditParameters = EditParameters;
//# sourceMappingURL=EditParameters.js.map

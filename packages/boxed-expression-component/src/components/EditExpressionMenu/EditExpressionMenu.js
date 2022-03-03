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
exports.EditExpressionMenu = exports.EXPRESSION_NAME = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./EditExpressionMenu.css");
var react_1 = require("react");
var PopoverMenu_1 = require("../PopoverMenu");
var i18n_1 = require("../../i18n");
var api_1 = require("../../api");
var context_1 = require("../../context");
var DataTypeSelector_1 = require("./DataTypeSelector");
var react_icons_1 = require("@patternfly/react-icons");
var react_core_1 = require("@patternfly/react-core");
exports.EXPRESSION_NAME = "Expression Name";
var EditExpressionMenu = function (_a) {
  var _b, _c;
  var children = _a.children,
    appendTo = _a.appendTo,
    arrowPlacement = _a.arrowPlacement,
    title = _a.title,
    nameField = _a.nameField,
    dataTypeField = _a.dataTypeField,
    _d = _a.selectedDataType,
    selectedDataType = _d === void 0 ? api_1.DataType.Undefined : _d,
    selectedExpressionName = _a.selectedExpressionName,
    onExpressionUpdate = _a.onExpressionUpdate;
  var boxedExpression = (0, context_1.useBoxedExpression)();
  var i18n = (0, i18n_1.useBoxedExpressionEditorI18n)().i18n;
  title = title !== null && title !== void 0 ? title : i18n.editExpression;
  nameField = nameField !== null && nameField !== void 0 ? nameField : i18n.name;
  dataTypeField = dataTypeField !== null && dataTypeField !== void 0 ? dataTypeField : i18n.dataType;
  appendTo =
    (_c =
      appendTo !== null && appendTo !== void 0
        ? appendTo
        : (_b = boxedExpression.editorRef) === null || _b === void 0
        ? void 0
        : _b.current) !== null && _c !== void 0
      ? _c
      : undefined;
  var _e = __read((0, react_1.useState)(selectedDataType), 2),
    dataType = _e[0],
    setDataType = _e[1];
  var _f = __read((0, react_1.useState)(selectedExpressionName), 2),
    expressionName = _f[0],
    setExpressionName = _f[1];
  (0, react_1.useEffect)(
    function () {
      setExpressionName(selectedExpressionName);
    },
    [selectedExpressionName]
  );
  (0, react_1.useEffect)(
    function () {
      setDataType(selectedDataType);
    },
    [selectedDataType]
  );
  var onExpressionNameChange = (0, react_1.useCallback)(
    function (event) {
      var _a;
      setExpressionName(event.target.value);
      if (event.type === "blur") {
        (_a = boxedExpression.boxedExpressionEditorGWTService) === null || _a === void 0
          ? void 0
          : _a.notifyUserAction();
        onExpressionUpdate({
          name: event.target.value,
          dataType: dataType,
        });
      }
    },
    [boxedExpression.boxedExpressionEditorGWTService, dataType, onExpressionUpdate]
  );
  var onDataTypeChange = (0, react_1.useCallback)(
    function (dataType) {
      var _a;
      (_a = boxedExpression.boxedExpressionEditorGWTService) === null || _a === void 0 ? void 0 : _a.notifyUserAction();
      setDataType(dataType);
      onExpressionUpdate({
        name: expressionName,
        dataType: dataType,
      });
    },
    [boxedExpression.boxedExpressionEditorGWTService, expressionName, onExpressionUpdate]
  );
  var openManageDataType = (0, react_1.useCallback)(
    function () {
      var _a;
      return (_a = boxedExpression.boxedExpressionEditorGWTService) === null || _a === void 0
        ? void 0
        : _a.openManageDataType();
    },
    [boxedExpression.boxedExpressionEditorGWTService]
  );
  return (0, jsx_runtime_1.jsx)(
    PopoverMenu_1.PopoverMenu,
    __assign(
      {
        title: title,
        arrowPlacement: arrowPlacement,
        appendTo: appendTo,
        body: (0, jsx_runtime_1.jsxs)(
          "div",
          __assign(
            { className: "edit-expression-menu" },
            {
              children: [
                (0, jsx_runtime_1.jsxs)(
                  "div",
                  __assign(
                    { className: "expression-name" },
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)("label", { children: nameField }, void 0),
                        (0, jsx_runtime_1.jsx)(
                          "input",
                          {
                            type: "text",
                            id: "expression-name",
                            "data-ouia-component-id": "edit-expression-name",
                            value: expressionName,
                            onChange: onExpressionNameChange,
                            onBlur: onExpressionNameChange,
                            className: "form-control pf-c-form-control",
                            placeholder: exports.EXPRESSION_NAME,
                          },
                          void 0
                        ),
                      ],
                    }
                  ),
                  void 0
                ),
                (0, jsx_runtime_1.jsxs)(
                  "div",
                  __assign(
                    { className: "expression-data-type" },
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)("label", { children: dataTypeField }, void 0),
                        (0, jsx_runtime_1.jsx)(
                          react_core_1.Button,
                          __assign(
                            {
                              ouiaId: "manage-data-type-link",
                              variant: "link",
                              className: "manage-datatype",
                              icon: (0, jsx_runtime_1.jsx)(react_icons_1.CogIcon, {}, void 0),
                              iconPosition: "left",
                              onClick: openManageDataType,
                            },
                            { children: i18n.manage }
                          ),
                          void 0
                        ),
                        (0, jsx_runtime_1.jsx)(
                          DataTypeSelector_1.DataTypeSelector,
                          { selectedDataType: dataType, onDataTypeChange: onDataTypeChange },
                          void 0
                        ),
                      ],
                    }
                  ),
                  void 0
                ),
              ],
            }
          ),
          void 0
        ),
      },
      { children: children }
    ),
    void 0
  );
};
exports.EditExpressionMenu = EditExpressionMenu;
//# sourceMappingURL=EditExpressionMenu.js.map

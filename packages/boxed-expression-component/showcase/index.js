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
exports.App = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ReactDOM = require("react-dom");
require("./index.css");
var src_1 = require("../src");
var react_core_1 = require("@patternfly/react-core");
var react_icons_1 = require("@patternfly/react-icons");
var test_utils_1 = require("../tests/components/test-utils");
require("../src/components/BoxedExpressionEditor/base-no-reset-wrapped.css");
var react_json_view_1 = require("react-json-view");
var App = function () {
  var selectedExpression = {
    name: "Expression Name",
    dataType: src_1.DataType.Undefined,
  };
  var _a = __read((0, react_1.useState)(selectedExpression), 2),
    expressionDefinition = _a[0],
    setExpressionDefinition = _a[1];
  var _b = __read((0, react_1.useState)(JSON.stringify(selectedExpression)), 2),
    typedExpressionDefinition = _b[0],
    setTypedExpressionDefinition = _b[1];
  var _c = __read((0, react_1.useState)(false), 2),
    isModalOpen = _c[0],
    setIsModalOpen = _c[1];
  var boxedExpressionEditorGWTService = {
    resetExpressionDefinition: function (definition) {
      return setExpressionDefinition(definition);
    },
    broadcastLiteralExpressionDefinition: function (definition) {
      return setExpressionDefinition(definition);
    },
    broadcastRelationExpressionDefinition: function (definition) {
      return setExpressionDefinition(definition);
    },
    broadcastContextExpressionDefinition: function (definition) {
      return setExpressionDefinition(definition);
    },
    broadcastListExpressionDefinition: function (definition) {
      return setExpressionDefinition(definition);
    },
    broadcastInvocationExpressionDefinition: function (definition) {
      return setExpressionDefinition(definition);
    },
    broadcastFunctionExpressionDefinition: function (definition) {
      return setExpressionDefinition(definition);
    },
    broadcastDecisionTableExpressionDefinition: function (definition) {
      return setExpressionDefinition(definition);
    },
    notifyUserAction: function () {},
    openManageDataType: function () {},
    onLogicTypeSelect: function () {},
    selectObject: function () {},
  };
  var onTypedExpressionChange = (0, react_1.useCallback)(function (e) {
    setTypedExpressionDefinition(e.target.value);
  }, []);
  var handleModalToggle = (0, react_1.useCallback)(
    function () {
      setIsModalOpen(function (isModalOpen) {
        var goingToOpenTheModal = !isModalOpen;
        if (goingToOpenTheModal) {
          setTypedExpressionDefinition(JSON.stringify(expressionDefinition));
        }
        return goingToOpenTheModal;
      });
    },
    [expressionDefinition]
  );
  var updateExpressionDefinition = (0, react_1.useCallback)(
    function () {
      try {
        var parsedTypedExpression_1 = JSON.parse(typedExpressionDefinition);
        setExpressionDefinition({ logicType: src_1.LogicType.Undefined });
        setTimeout(function () {
          setExpressionDefinition(parsedTypedExpression_1);
        }, 0);
        setIsModalOpen(false);
      } catch (e) {
        console.error(e);
      }
    },
    [typedExpressionDefinition]
  );
  return (0, jsx_runtime_1.jsxs)(
    "div",
    __assign(
      { className: "showcase" },
      {
        children: [
          (0, jsx_runtime_1.jsx)(
            "div",
            __assign(
              { className: "boxed-expression" },
              {
                children: (0, jsx_runtime_1.jsx)(
                  src_1.BoxedExpressionEditor,
                  {
                    boxedExpressionEditorGWTService: boxedExpressionEditorGWTService,
                    decisionNodeId: "_00000000-0000-0000-0000-000000000000",
                    expressionDefinition: expressionDefinition,
                    dataTypes: test_utils_1.dataTypes,
                    pmmlParams: test_utils_1.pmmlParams,
                  },
                  void 0
                ),
              }
            ),
            void 0
          ),
          (0, jsx_runtime_1.jsxs)(
            "div",
            __assign(
              { className: "updated-json" },
              {
                children: [
                  (0, jsx_runtime_1.jsx)(
                    "div",
                    __assign(
                      { className: "buttons" },
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          react_core_1.Button,
                          {
                            variant: "secondary",
                            icon: (0, jsx_runtime_1.jsx)(react_icons_1.PenIcon, {}, void 0),
                            iconPosition: "left",
                            onClick: handleModalToggle,
                            ouiaId: "edit-expression-json",
                          },
                          void 0
                        ),
                      }
                    ),
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    "pre",
                    {
                      children: (0, jsx_runtime_1.jsx)(
                        react_json_view_1.default,
                        { src: expressionDefinition, name: false, enableClipboard: true },
                        void 0
                      ),
                    },
                    void 0
                  ),
                ],
              }
            ),
            void 0
          ),
          (0, jsx_runtime_1.jsx)(
            react_core_1.Modal,
            __assign(
              {
                title: "Manually edit Expression Definition",
                className: "expression-definition-editor-modal",
                isOpen: isModalOpen,
                onClose: handleModalToggle,
                description:
                  "This modal is supposed to provide a manual edit option for the expression definition. If \u00ABConfirm\u00BB action does nothing, probably there is an issue with JSON definition parsing: look at browser's console.",
                actions: [
                  (0, jsx_runtime_1.jsx)(
                    react_core_1.Button,
                    __assign(
                      { variant: "primary", onClick: updateExpressionDefinition, ouiaId: "confirm-expression-json" },
                      { children: "Confirm" }
                    ),
                    "confirm"
                  ),
                  (0, jsx_runtime_1.jsx)(
                    react_core_1.Button,
                    __assign({ variant: "link", onClick: handleModalToggle }, { children: "Cancel" }),
                    "cancel"
                  ),
                ],
              },
              {
                children: (0, jsx_runtime_1.jsx)(
                  "textarea",
                  {
                    className: "typed-expression",
                    value: typedExpressionDefinition,
                    onChange: onTypedExpressionChange,
                    "data-ouia-component-id": "typed-expression-json",
                  },
                  void 0
                ),
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
exports.App = App;
ReactDOM.render((0, jsx_runtime_1.jsx)(exports.App, {}, void 0), document.getElementById("root"));
//# sourceMappingURL=index.js.map

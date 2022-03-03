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
exports.FunctionKindSelector = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var PopoverMenu_1 = require("../PopoverMenu");
var react_core_1 = require("@patternfly/react-core");
var _ = require("lodash");
var react_1 = require("react");
var i18n_1 = require("../../i18n");
var context_1 = require("../../context");
var api_1 = require("../../api");
var FunctionKindSelector = function (_a) {
  var _b, _c;
  var selectedFunctionKind = _a.selectedFunctionKind,
    onFunctionKindSelect = _a.onFunctionKindSelect;
  var i18n = (0, i18n_1.useBoxedExpressionEditorI18n)().i18n;
  var boxedExpression = (0, context_1.useBoxedExpression)();
  var functionKindSelectionCallback = (0, react_1.useCallback)(
    function (hide) {
      return function (event, itemId) {
        var _a;
        (_a = boxedExpression.boxedExpressionEditorGWTService) === null || _a === void 0
          ? void 0
          : _a.notifyUserAction();
        onFunctionKindSelect(itemId);
        hide();
      };
    },
    [boxedExpression.boxedExpressionEditorGWTService, onFunctionKindSelect]
  );
  var renderFunctionKindItems = (0, react_1.useCallback)(function () {
    return _.map(Object.values(api_1.FunctionKind), function (key) {
      return (0,
      jsx_runtime_1.jsx)(react_core_1.MenuItem, __assign({ itemId: key, "data-ouia-component-id": key }, { children: key }), key);
    });
  }, []);
  return (0, jsx_runtime_1.jsx)(
    PopoverMenu_1.PopoverMenu,
    __assign(
      {
        title: i18n.selectFunctionKind,
        appendTo:
          (_c = (_b = boxedExpression.editorRef) === null || _b === void 0 ? void 0 : _b.current) !== null &&
          _c !== void 0
            ? _c
            : undefined,
        className: "function-kind-popover",
        hasAutoWidth: true,
        body: function (hide) {
          return (0, jsx_runtime_1.jsx)(
            react_core_1.Menu,
            __assign(
              { onSelect: functionKindSelectionCallback(hide) },
              {
                children: (0, jsx_runtime_1.jsx)(
                  react_core_1.MenuList,
                  { children: renderFunctionKindItems() },
                  void 0
                ),
              }
            ),
            void 0
          );
        },
      },
      {
        children: (0, jsx_runtime_1.jsx)(
          "div",
          __assign({ className: "selected-function-kind" }, { children: _.first(selectedFunctionKind) }),
          void 0
        ),
      }
    ),
    void 0
  );
};
exports.FunctionKindSelector = FunctionKindSelector;
//# sourceMappingURL=FunctionKindSelector.js.map

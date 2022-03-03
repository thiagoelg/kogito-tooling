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
exports.BoxedExpressionEditor = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var react_1 = require("react");
var i18n_1 = require("../../i18n");
var BoxedExpressionProvider_1 = require("./BoxedExpressionProvider");
var ExpressionContainer_1 = require("../ExpressionContainer");
require("@patternfly/react-styles/css/components/Drawer/drawer.css");
require("./base-no-reset-wrapped.css");
function BoxedExpressionEditor(props) {
  var noClearAction = (0, react_1.useMemo)(
    function () {
      return props.clearSupportedOnRootExpression === false;
    },
    [props.clearSupportedOnRootExpression]
  );
  var _a = __read(
      (0, react_1.useState)(
        __assign(__assign({}, props.expressionDefinition), {
          noClearAction: props.clearSupportedOnRootExpression === false,
        })
      ),
      2
    ),
    expressionDefinition = _a[0],
    setExpressionDefinition = _a[1];
  (0, react_1.useEffect)(
    function () {
      setExpressionDefinition(__assign(__assign({}, props.expressionDefinition), { noClearAction: noClearAction }));
    },
    [props.expressionDefinition]
  );
  var onExpressionChange = (0, react_1.useCallback)(function (updatedExpression) {
    return setExpressionDefinition(updatedExpression);
  }, []);
  return (0, jsx_runtime_1.jsx)(
    react_components_1.I18nDictionariesProvider,
    __assign(
      {
        defaults: i18n_1.boxedExpressionEditorI18nDefaults,
        dictionaries: i18n_1.boxedExpressionEditorDictionaries,
        initialLocale: navigator.language,
        ctx: i18n_1.BoxedExpressionEditorI18nContext,
      },
      {
        children: (0, jsx_runtime_1.jsx)(
          BoxedExpressionProvider_1.BoxedExpressionProvider,
          __assign(
            {
              boxedExpressionEditorGWTService: props.boxedExpressionEditorGWTService,
              decisionNodeId: props.decisionNodeId,
              expressionDefinition: expressionDefinition,
              dataTypes: props.dataTypes,
              pmmlParams: props.pmmlParams,
              isRunnerTable: false,
            },
            {
              children: (0, jsx_runtime_1.jsx)(
                ExpressionContainer_1.ExpressionContainer,
                { selectedExpression: expressionDefinition, onExpressionChange: onExpressionChange },
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
}
exports.BoxedExpressionEditor = BoxedExpressionEditor;
//# sourceMappingURL=BoxedExpressionEditor.js.map

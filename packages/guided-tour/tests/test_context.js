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
exports.usingTestingGuidedTourI18nContext = exports.usingCurrentTutorialContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var contexts_1 = require("@kie-tools-core/guided-tour/dist/contexts");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var i18n_1 = require("@kie-tools-core/guided-tour/dist/i18n");
var api_1 = require("@kie-tools-core/guided-tour/dist/api");
function usingCurrentTutorialContext(children, ctx) {
  var currentTutorialContext = __assign(
    {
      currentStep: 0,
      completedStep: 0,
      currentTutorial: new api_1.Tutorial("default tutorial", []),
      isHighlightLayerEnabled: false,
      isNegativeReinforcementStateEnabled: false,
      currentRefElementPosition: api_1.DEFAULT_RECT,
      setCompletedStep: function (index) {
        return (currentTutorialContext.completedStep = index);
      },
      setCurrentStep: function (index) {
        return (currentTutorialContext.currentStep = index);
      },
      setCurrentTutorial: function (tutorial) {
        return (currentTutorialContext.currentTutorial = tutorial);
      },
      setCurrentRefElementPosition: function (rect) {
        return (currentTutorialContext.currentRefElementPosition = rect);
      },
      setIsHighlightLayerEnabled: function (isEnabled) {
        return (currentTutorialContext.isHighlightLayerEnabled = isEnabled);
      },
      setIsNegativeReinforcementStateEnabled: function (isEnabled) {
        return (currentTutorialContext.isNegativeReinforcementStateEnabled = isEnabled);
      },
      setLatestUserInteraction: function () {
        return null;
      },
    },
    ctx
  );
  return {
    ctx: currentTutorialContext,
    wrapper: (0, jsx_runtime_1.jsx)(
      contexts_1.CurrentTutorialContext.Provider,
      __assign({ value: currentTutorialContext }, { children: children }),
      ""
    ),
  };
}
exports.usingCurrentTutorialContext = usingCurrentTutorialContext;
function usingTestingGuidedTourI18nContext(children, ctx) {
  var usedCtx = __assign(
    {
      defaults: i18n_1.guidedTourI18nDefaults,
      dictionaries: i18n_1.guidedTourI18nDictionaries,
      ctx: i18n_1.GuidedTourI18nContext,
      children: children,
    },
    ctx
  );
  return {
    ctx: usedCtx,
    wrapper: (0, jsx_runtime_1.jsx)(
      react_components_1.I18nDictionariesProvider,
      __assign(
        { defaults: usedCtx.defaults, dictionaries: usedCtx.dictionaries, ctx: usedCtx.ctx },
        { children: usedCtx.children }
      ),
      void 0
    ),
  };
}
exports.usingTestingGuidedTourI18nContext = usingTestingGuidedTourI18nContext;
//# sourceMappingURL=test_context.js.map

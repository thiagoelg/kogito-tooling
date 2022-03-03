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
exports.GuidedTour = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var _1 = require(".");
var contexts_1 = require("../contexts");
var react_components_1 = require("@kie-tools-core/i18n/dist/react-components");
var i18n_1 = require("../i18n");
var GuidedTour = function () {
  var _a = __read((0, react_1.useState)(), 2),
    currentTutorial = _a[0],
    setCurrentTutorial = _a[1];
  var _b = __read((0, react_1.useState)(), 2),
    currentRefElementPosition = _b[0],
    setCurrentRefElementPosition = _b[1];
  var _c = __read((0, react_1.useState)(false), 2),
    isNegativeReinforcementStateEnabled = _c[0],
    setIsNegativeReinforcementStateEnabled = _c[1];
  var _d = __read((0, react_1.useState)(), 2),
    latestUserInteraction = _d[0],
    setLatestUserInteraction = _d[1];
  var _e = __read((0, react_1.useState)(false), 2),
    isHighlightLayerEnabled = _e[0],
    setIsHighlightLayerEnabled = _e[1];
  var _f = __read((0, react_1.useState)(0), 2),
    currentStep = _f[0],
    setCurrentStep = _f[1];
  var _g = __read((0, react_1.useState)(0), 2),
    completedStep = _g[0],
    setCompletedStep = _g[1];
  return (0, jsx_runtime_1.jsx)(
    react_components_1.I18nDictionariesProvider,
    __assign(
      {
        defaults: i18n_1.guidedTourI18nDefaults,
        dictionaries: i18n_1.guidedTourI18nDictionaries,
        initialLocale: navigator.language,
        ctx: i18n_1.GuidedTourI18nContext,
      },
      {
        children: (0, jsx_runtime_1.jsxs)(
          contexts_1.CurrentTutorialContext.Provider,
          __assign(
            {
              value: {
                currentTutorial: currentTutorial,
                currentStep: currentStep,
                completedStep: completedStep,
                currentRefElementPosition: currentRefElementPosition,
                isNegativeReinforcementStateEnabled: isNegativeReinforcementStateEnabled,
                isHighlightLayerEnabled: isHighlightLayerEnabled,
                latestUserInteraction: latestUserInteraction,
                setCurrentStep: setCurrentStep,
                setCompletedStep: setCompletedStep,
                setCurrentTutorial: setCurrentTutorial,
                setCurrentRefElementPosition: setCurrentRefElementPosition,
                setIsNegativeReinforcementStateEnabled: setIsNegativeReinforcementStateEnabled,
                setIsHighlightLayerEnabled: setIsHighlightLayerEnabled,
                setLatestUserInteraction: setLatestUserInteraction,
              },
            },
            {
              children: [
                (0, jsx_runtime_1.jsx)(_1.HighlightLayer, {}, void 0),
                (0, jsx_runtime_1.jsx)(_1.Dialog, { isEnabled: false, tutorialLabel: "" }, void 0),
              ],
            }
          ),
          void 0
        ),
      }
    ),
    void 0
  );
};
exports.GuidedTour = GuidedTour;
//# sourceMappingURL=GuidedTour.js.map

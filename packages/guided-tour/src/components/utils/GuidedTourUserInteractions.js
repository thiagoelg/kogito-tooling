"use strict";
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
exports.useUserInteractions = void 0;
var react_1 = require("react");
var _1 = require(".");
var api_1 = require("../../api");
var contexts_1 = require("../../contexts");
var useUserInteractions = function () {
  var _a;
  var _b = (0, react_1.useContext)(contexts_1.CurrentTutorialContext),
    currentStep = _b.currentStep,
    completedStep = _b.completedStep,
    currentTutorial = _b.currentTutorial,
    isNegativeReinforcementStateEnabled = _b.isNegativeReinforcementStateEnabled,
    latestUserInteraction = _b.latestUserInteraction,
    setCurrentStep = _b.setCurrentStep,
    setIsNegativeReinforcementStateEnabled = _b.setIsNegativeReinforcementStateEnabled,
    setIsHighlightLayerEnabled = _b.setIsHighlightLayerEnabled;
  var dialogStep = (0, react_1.useMemo)(
    function () {
      return (0, _1.getCurrentStep)(currentStep, currentTutorial);
    },
    [currentStep, currentTutorial]
  );
  var mode =
    (_a = dialogStep === null || dialogStep === void 0 ? void 0 : dialogStep.mode) !== null && _a !== void 0
      ? _a
      : new api_1.DemoMode();
  function handleBlockMode(blockMode) {
    var _a, _b, _c, _d, _e;
    var userInteraction = blockMode.userInteraction,
      allowedSelectors = blockMode.allowedSelectors;
    var targetSelector =
      (_a =
        latestUserInteraction === null || latestUserInteraction === void 0 ? void 0 : latestUserInteraction.target) !==
        null && _a !== void 0
        ? _a
        : "";
    function isAllowedInteraction() {
      return (
        __spreadArray(__spreadArray([], __read(allowedSelectors), false), [userInteraction.target], false).indexOf(
          targetSelector
        ) !== -1
      );
    }
    function isNegativeReinforcementMessagePresent() {
      var _a;
      var message =
        (_a = dialogStep === null || dialogStep === void 0 ? void 0 : dialogStep.negativeReinforcementMessage) !==
          null && _a !== void 0
          ? _a
          : "";
      return message.length > 0;
    }
    function alreadyPerformedAction() {
      return completedStep > currentStep;
    }
    function isNegativeReinforcementAllowed() {
      return (
        !isAllowedInteraction() &&
        !alreadyPerformedAction() &&
        isNegativeReinforcementMessagePresent() &&
        !isNegativeReinforcementStateEnabled
      );
    }
    if (isNegativeReinforcementAllowed()) {
      setIsNegativeReinforcementStateEnabled(true);
      setIsHighlightLayerEnabled(true);
    }
    var expectedAction = (_b = userInteraction.action) !== null && _b !== void 0 ? _b : "";
    var expectedTarget = (_c = userInteraction.target) !== null && _c !== void 0 ? _c : "";
    var actualAction =
      (_d =
        latestUserInteraction === null || latestUserInteraction === void 0 ? void 0 : latestUserInteraction.action) !==
        null && _d !== void 0
        ? _d
        : "";
    var actualTarget =
      (_e =
        latestUserInteraction === null || latestUserInteraction === void 0 ? void 0 : latestUserInteraction.target) !==
        null && _e !== void 0
        ? _e
        : "";
    var isExpectedAction = actualAction.startsWith(expectedAction);
    var isExpectedTarget = actualTarget.startsWith(expectedTarget);
    if (isExpectedAction && isExpectedTarget) {
      setCurrentStep(currentStep + 1);
      setIsNegativeReinforcementStateEnabled(false);
      setIsHighlightLayerEnabled(false);
    }
  }
  (0, react_1.useEffect)(
    function () {
      if ("userInteraction" in mode) {
        handleBlockMode(mode);
      }
    },
    [latestUserInteraction]
  );
};
exports.useUserInteractions = useUserInteractions;
//# sourceMappingURL=GuidedTourUserInteractions.js.map

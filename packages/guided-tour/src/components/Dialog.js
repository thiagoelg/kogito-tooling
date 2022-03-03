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
exports.Dialog = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var utils_1 = require("./utils");
var __1 = require("..");
var contexts_1 = require("../contexts");
var api_1 = require("../api");
require("./Dialog.sass");
var Dialog = function (props) {
  var _a, _b, _c;
  var _d = __read((0, react_1.useState)(props.isEnabled), 2),
    isEnabled = _d[0],
    setIsEnabled = _d[1];
  var _e = __read((0, react_1.useState)(props.tutorialLabel), 2),
    currentTutorialLabel = _e[0],
    setCurrentTutorialLabel = _e[1];
  var _f = (0, react_1.useContext)(contexts_1.CurrentTutorialContext),
    currentTutorial = _f.currentTutorial,
    currentStep = _f.currentStep,
    completedStep = _f.completedStep,
    currentRefElementPosition = _f.currentRefElementPosition,
    isNegativeReinforcementStateEnabled = _f.isNegativeReinforcementStateEnabled,
    isHighlightLayerEnabled = _f.isHighlightLayerEnabled,
    setCurrentTutorial = _f.setCurrentTutorial,
    setCurrentStep = _f.setCurrentStep,
    setCompletedStep = _f.setCompletedStep,
    setCurrentRefElementPosition = _f.setCurrentRefElementPosition,
    setLatestUserInteraction = _f.setLatestUserInteraction,
    setIsNegativeReinforcementStateEnabled = _f.setIsNegativeReinforcementStateEnabled,
    setIsHighlightLayerEnabled = _f.setIsHighlightLayerEnabled;
  var guidedTour = __1.KogitoGuidedTour.getInstance();
  var registeredTutorials = guidedTour.getRegisteredTutorials();
  var dialogClass = "pf-c-modal-box kgt-dialog kgt-dialog" + (isEnabled ? "--enabled" : "--disabled");
  var dialogStep = (0, react_1.useMemo)(
    function () {
      return (0, utils_1.getCurrentStep)(currentStep, currentTutorial);
    },
    [currentStep, currentTutorial]
  );
  var dialogContent =
    (_a = dialogStep === null || dialogStep === void 0 ? void 0 : dialogStep.content) !== null && _a !== void 0
      ? _a
      : "";
  var dialogPosition =
    (_b = dialogStep === null || dialogStep === void 0 ? void 0 : dialogStep.position) !== null && _b !== void 0
      ? _b
      : "center";
  var dialogMode =
    (_c = dialogStep === null || dialogStep === void 0 ? void 0 : dialogStep.mode) !== null && _c !== void 0
      ? _c
      : new api_1.DemoMode();
  var dialogRefElement = isNegativeReinforcementStateEnabled ? api_1.DEFAULT_RECT : currentRefElementPosition;
  var dialogStyle = (0, utils_1.calculatePositionStyle)(dialogPosition, dialogRefElement);
  var emptyTemplate = (0, react_1.useMemo)((0, utils_1.EmptyDialog)(closeDialog), []);
  var regularTemplate = (0, react_1.useMemo)((0, utils_1.StepDialog)(dialogContent, closeDialog), [
    currentStep,
    currentTutorial,
    registeredTutorials,
    isNegativeReinforcementStateEnabled,
  ]);
  var negativeReinforcementTemplate = (0, react_1.useMemo)(
    (0, utils_1.NegativeReinforcementDialog)(dialogStep, closeDialog),
    [currentStep, isHighlightLayerEnabled, isNegativeReinforcementStateEnabled]
  );
  (0, utils_1.useStartTutorialListener)(function (tutorialLabel) {
    return setCurrentTutorialLabel(tutorialLabel);
  });
  (0, utils_1.usePositionListener)(function (rect) {
    return setCurrentRefElementPosition(rect);
  });
  (0, utils_1.useUserInteractionListener)(function (userInteraction) {
    return setLatestUserInteraction(userInteraction);
  });
  (0, utils_1.useUserInteractions)();
  (0, utils_1.useSelectorHandler)();
  function closeDialog() {
    setIsEnabled(false);
    guidedTour.teardown();
  }
  function getDialogTemplate() {
    if (isNegativeReinforcementStateEnabled && dialogStep) {
      return negativeReinforcementTemplate;
    } else if (dialogStep) {
      return regularTemplate;
    } else {
      return emptyTemplate;
    }
  }
  function handleAutoMode() {
    if ("delay" in dialogMode) {
      var autoMode = dialogMode;
      setTimeout(function () {
        return setCurrentStep(currentStep + 1);
      }, autoMode.delay);
    }
  }
  (0, react_1.useEffect)(
    function () {
      if (currentStep > completedStep) {
        setCompletedStep(currentStep);
      }
    },
    [currentStep]
  );
  (0, react_1.useEffect)(
    function () {
      var newCurrentTutorial = registeredTutorials.find(function (tutorial) {
        return tutorial.label === currentTutorialLabel;
      });
      if (newCurrentTutorial) {
        setCurrentTutorial(newCurrentTutorial);
        setIsEnabled(true);
        setCurrentStep(0);
        setCompletedStep(0);
        setCurrentRefElementPosition(api_1.DEFAULT_RECT);
        setIsNegativeReinforcementStateEnabled(false);
        setIsHighlightLayerEnabled(false);
      }
    },
    [registeredTutorials, currentTutorialLabel]
  );
  handleAutoMode();
  return (0, jsx_runtime_1.jsx)(
    "div",
    __assign(
      { style: dialogStyle, className: dialogClass, "data-ouia-component-id": "dmn-guided-tour" },
      { children: getDialogTemplate() }
    ),
    void 0
  );
};
exports.Dialog = Dialog;
//# sourceMappingURL=Dialog.js.map

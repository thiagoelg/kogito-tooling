"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelectorHandler = void 0;
var react_1 = require("react");
var _1 = require(".");
var __1 = require("../..");
var api_1 = require("../../api");
var contexts_1 = require("../../contexts");
function querySelector(query) {
  try {
    return document.querySelector(query);
  } catch (err) {
    return undefined;
  }
}
var useSelectorHandler = function () {
  var _a;
  var _b = (0, react_1.useContext)(contexts_1.CurrentTutorialContext),
    currentStep = _b.currentStep,
    currentTutorial = _b.currentTutorial,
    latestUserInteraction = _b.latestUserInteraction,
    setCurrentRefElementPosition = _b.setCurrentRefElementPosition;
  var dialogStep = (0, react_1.useMemo)(
    function () {
      return (0, _1.getCurrentStep)(currentStep, currentTutorial);
    },
    [currentStep, currentTutorial]
  );
  var selector =
    (_a = dialogStep === null || dialogStep === void 0 ? void 0 : dialogStep.selector) !== null && _a !== void 0
      ? _a
      : "";
  (0, react_1.useEffect)(
    function () {
      if (selector.length === 0) {
        return;
      }
      var isCustomSelector = selector.indexOf(":::") !== -1;
      if (isCustomSelector) {
        __1.KogitoGuidedTour.getInstance().triggerPositionProvider(selector);
        return;
      }
      var element = querySelector(selector);
      var isValidQuerySelector = !!element;
      if (isValidQuerySelector) {
        setCurrentRefElementPosition(element.getBoundingClientRect());
        return;
      }
      setCurrentRefElementPosition(api_1.DEFAULT_RECT);
    },
    [currentStep, latestUserInteraction]
  );
};
exports.useSelectorHandler = useSelectorHandler;
//# sourceMappingURL=GuidedTourSelectorHandler.js.map

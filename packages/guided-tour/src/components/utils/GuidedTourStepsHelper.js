"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSteps = exports.getCurrentStep = void 0;
var __1 = require("../..");
var api_1 = require("../../api");
var concat = function (array1, array2) {
  return array1.concat(array2);
};
var flatMap = function (f, array) {
  return array.map(f).reduce(concat, []);
};
var getCurrentStep = function (currentStep, currentTutorial) {
  return (0, exports.getSteps)(currentTutorial)[currentStep];
};
exports.getCurrentStep = getCurrentStep;
var getSteps = function (currentTutorial) {
  var _a;
  var guidedTour = __1.KogitoGuidedTour.getInstance();
  var registeredTutorials = guidedTour.getRegisteredTutorials();
  var steps =
    (_a = currentTutorial === null || currentTutorial === void 0 ? void 0 : currentTutorial.steps) !== null &&
    _a !== void 0
      ? _a
      : [];
  return flatMap(function (step) {
    var _a, _b;
    var stepMode = (_a = step.mode) !== null && _a !== void 0 ? _a : new api_1.DemoMode();
    if (!("label" in stepMode)) {
      return [step];
    }
    var stepTutorialLabel = stepMode.label;
    var stepTutorial = registeredTutorials.find(function (tutorial) {
      return tutorial.label === stepTutorialLabel;
    });
    return (_b = stepTutorial === null || stepTutorial === void 0 ? void 0 : stepTutorial.steps) !== null &&
      _b !== void 0
      ? _b
      : [];
  }, steps);
};
exports.getSteps = getSteps;
//# sourceMappingURL=GuidedTourStepsHelper.js.map

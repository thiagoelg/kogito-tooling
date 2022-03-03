"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@kie-tools-core/guided-tour/dist/components/utils");
var dist_1 = require("@kie-tools-core/guided-tour/dist");
var api_1 = require("@kie-tools-core/guided-tour/dist/api");
describe("GuidedTourStepsHelper", function () {
  var currentStep = 3;
  var guidedTour = dist_1.KogitoGuidedTour.getInstance();
  var step0 = makeStep("#selector-0");
  var step1 = makeStep("#selector-1");
  var step2 = makeStep("#selector-2", new api_1.SubTutorialMode("tutorial 2"));
  var step3 = makeStep("#selector-3");
  var tutorial1 = {
    label: "tutorial 1",
    steps: [step0, step1, step2, step3],
  };
  var step2_0 = makeStep("#selector-2_0");
  var step2_1 = makeStep("#selector-2_1");
  var step2_2 = makeStep("#selector-2_2");
  var step2_3 = makeStep("#selector-2_3");
  var tutorial2 = {
    label: "tutorial 2",
    steps: [step2_0, step2_1, step2_2, step2_3],
  };
  guidedTour.registerTutorial(tutorial1);
  guidedTour.registerTutorial(tutorial2);
  describe("getCurrentStep", function () {
    it("returns the current step", function () {
      expect((0, utils_1.getCurrentStep)(currentStep, tutorial1)).toBe(step2_1);
    });
  });
  describe("getSteps", function () {
    it("returns the steps for the current tutorial", function () {
      expect((0, utils_1.getSteps)(tutorial1)).toEqual([step0, step1, step2_0, step2_1, step2_2, step2_3, step3]);
    });
  });
});
function makeStep(selector, mode) {
  if (mode === void 0) {
    mode = new api_1.DemoMode();
  }
  return new api_1.Step(mode, "", selector);
}
//# sourceMappingURL=GuidedTourStepsHelper.test.js.map

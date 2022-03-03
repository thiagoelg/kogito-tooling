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
var test_utils_1 = require("react-dom/test-utils");
var utils_1 = require("@kie-tools-core/guided-tour/dist/components/utils");
var api_1 = require("@kie-tools-core/guided-tour/dist/api");
describe("GuidedTourUserInteractions", function () {
  describe("useUserInteractions", function () {
    it("enables negative reinforcement when it's allowed", function () {
      useContext({
        latestUserInteraction: new api_1.UserInteraction("CLICK", ".data-types-tab"),
      });
      (0, test_utils_1.act)(function () {
        return (0, utils_1.useUserInteractions)();
      });
      expect(ctx.currentStep).toBe(0);
      expect(ctx.isNegativeReinforcementStateEnabled).toBeTruthy();
      expect(ctx.isHighlightLayerEnabled).toBeTruthy();
    });
    it("does not enable negative reinforcement when user already performed the required action", function () {
      useContext({
        completedStep: 1,
        latestUserInteraction: new api_1.UserInteraction("CLICK", ".data-types-tab"),
      });
      (0, test_utils_1.act)(function () {
        return (0, utils_1.useUserInteractions)();
      });
      expect(ctx.currentStep).toBe(0);
      expect(ctx.isNegativeReinforcementStateEnabled).toBeFalsy();
      expect(ctx.isHighlightLayerEnabled).toBeFalsy();
    });
    it("does not enable negative reinforcement when reinforcement message is not present", function () {
      useContext({
        latestUserInteraction: new api_1.UserInteraction("CLICK", ".data-types-tab"),
        currentTutorial: {
          steps: [
            {
              negativeReinforcementMessage: null,
              mode: new api_1.BlockMode({ action: "CREATED", target: "Node" }, [".palette", "canvas"]),
            },
          ],
        },
      });
      (0, test_utils_1.act)(function () {
        return (0, utils_1.useUserInteractions)();
      });
      expect(ctx.currentStep).toBe(0);
      expect(ctx.isNegativeReinforcementStateEnabled).toBeFalsy();
      expect(ctx.isHighlightLayerEnabled).toBeFalsy();
    });
    it("does not enable negative reinforcement when it's already enabled", function () {
      useContext({
        isNegativeReinforcementStateEnabled: true,
        isHighlightLayerEnabled: false,
        latestUserInteraction: new api_1.UserInteraction("CLICK", ".data-types-tab"),
      });
      (0, test_utils_1.act)(function () {
        return (0, utils_1.useUserInteractions)();
      });
      expect(ctx.currentStep).toBe(0);
      expect(ctx.isNegativeReinforcementStateEnabled).toBeTruthy();
      expect(ctx.isHighlightLayerEnabled).toBeFalsy();
    });
    it("does not enable negative reinforcement when the current step mode is not block mode", function () {
      useContext({
        latestUserInteraction: new api_1.UserInteraction("CLICK", ".data-types-tab"),
        currentTutorial: {
          steps: [{ mode: new api_1.DemoMode() }],
        },
      });
      (0, test_utils_1.act)(function () {
        return (0, utils_1.useUserInteractions)();
      });
      expect(ctx.currentStep).toBe(0);
      expect(ctx.isNegativeReinforcementStateEnabled).toBeFalsy();
      expect(ctx.isHighlightLayerEnabled).toBeFalsy();
    });
    it("goes to the next step when the latest user interaction matches with the current step user interaction", function () {
      useContext({
        latestUserInteraction: new api_1.UserInteraction("CREATED", "Node"),
      });
      (0, test_utils_1.act)(function () {
        return (0, utils_1.useUserInteractions)();
      });
      expect(ctx.currentStep).toBe(1);
      expect(ctx.isNegativeReinforcementStateEnabled).toBeFalsy();
      expect(ctx.isHighlightLayerEnabled).toBeFalsy();
    });
  });
});
jest.mock("react", function () {
  var ActualReact = jest.requireActual("react");
  return __assign(__assign({}, ActualReact), {
    useContext: function () {
      return ctx;
    },
    useEffect: function (fn) {
      return fn();
    },
    useMemo: function (fn, _deps) {
      return fn();
    },
  });
});
var ctx = {
  setCurrentStep: function (currentStepIndex) {
    return (ctx.currentStep = currentStepIndex);
  },
  setIsNegativeReinforcementStateEnabled: function (isEnabled) {
    return (ctx.isNegativeReinforcementStateEnabled = isEnabled);
  },
  setIsHighlightLayerEnabled: function (isEnabled) {
    return (ctx.isHighlightLayerEnabled = isEnabled);
  },
};
function useContext(currentCtx) {
  var _a, _b, _c, _d, _e, _f;
  ctx.currentStep = (_a = currentCtx.currentStep) !== null && _a !== void 0 ? _a : 0;
  ctx.completedStep = (_b = currentCtx.completedStep) !== null && _b !== void 0 ? _b : 0;
  ctx.currentTutorial =
    (_c = currentCtx.currentTutorial) !== null && _c !== void 0
      ? _c
      : {
          steps: [
            {
              negativeReinforcementMessage: "Click on 'Node' to continue...",
              mode: new api_1.BlockMode({ action: "CREATED", target: "Node" }, [".palette", "canvas"]),
            },
          ],
        };
  ctx.isHighlightLayerEnabled = (_d = currentCtx.isHighlightLayerEnabled) !== null && _d !== void 0 ? _d : false;
  ctx.isNegativeReinforcementStateEnabled =
    (_e = currentCtx.isNegativeReinforcementStateEnabled) !== null && _e !== void 0 ? _e : false;
  ctx.latestUserInteraction =
    (_f = currentCtx.latestUserInteraction) !== null && _f !== void 0 ? _f : new api_1.UserInteraction("", "");
}
//# sourceMappingURL=GuidedTourUserInteractions.test.js.map

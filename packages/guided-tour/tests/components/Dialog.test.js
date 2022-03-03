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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var test_context_1 = require("../test_context");
var components_1 = require("@kie-tools-core/guided-tour/dist/components");
var dist_1 = require("@kie-tools-core/guided-tour/dist");
var api_1 = require("@kie-tools-core/guided-tour/dist/api");
jest.useFakeTimers();
var tutorialLabel = "default tutorial";
function registeredTutorial(tutorial) {
  dist_1.KogitoGuidedTour.getInstance().registerTutorial(tutorial);
  return tutorial;
}
beforeAll(function () {
  jest.resetAllMocks();
});
describe("Dialog", function () {
  describe("when the step loads", function () {
    it("renders react-based content", function () {
      var container = (0, react_1.render)(
        (0, test_context_1.usingTestingGuidedTourI18nContext)(
          (0, test_context_1.usingCurrentTutorialContext)(
            (0, jsx_runtime_1.jsx)(components_1.Dialog, { isEnabled: true, tutorialLabel: tutorialLabel }, void 0),
            {
              currentTutorial: registeredTutorial({
                label: tutorialLabel,
                steps: [
                  {
                    mode: new api_1.DemoMode(),
                    content: (0, jsx_runtime_1.jsx)("div", { children: "Something as JSX" }, void 0),
                  },
                ],
              }),
            }
          ).wrapper
        ).wrapper
      ).container;
      expect(container).toMatchSnapshot();
    });
    it("renders function-based content", function () {
      var container = (0, react_1.render)(
        (0, test_context_1.usingTestingGuidedTourI18nContext)(
          (0, test_context_1.usingCurrentTutorialContext)(
            (0, jsx_runtime_1.jsx)(components_1.Dialog, { isEnabled: true, tutorialLabel: tutorialLabel }, void 0),
            {
              currentTutorial: registeredTutorial({
                label: tutorialLabel,
                steps: [
                  {
                    mode: new api_1.DemoMode(),
                    content: function () {
                      return (0, jsx_runtime_1.jsx)("div", { children: "Something as JSX-function" }, void 0);
                    },
                  },
                ],
              }),
            }
          ).wrapper
        ).wrapper
      ).container;
      expect(container).toMatchSnapshot();
    });
    it("renders string-based content", function () {
      var container = (0, react_1.render)(
        (0, test_context_1.usingTestingGuidedTourI18nContext)(
          (0, test_context_1.usingCurrentTutorialContext)(
            (0, jsx_runtime_1.jsx)(components_1.Dialog, { isEnabled: true, tutorialLabel: tutorialLabel }, void 0),
            {
              currentTutorial: registeredTutorial({
                label: tutorialLabel,
                steps: [
                  {
                    mode: new api_1.DemoMode(),
                    content: "<div>Something as string</div>",
                  },
                ],
              }),
            }
          ).wrapper
        ).wrapper
      ).container;
      expect(container).toMatchSnapshot();
    });
    it("renders a step on auto mode", function () {
      var container = (0, react_1.render)(
        (0, test_context_1.usingTestingGuidedTourI18nContext)(
          (0, test_context_1.usingCurrentTutorialContext)(
            (0, jsx_runtime_1.jsx)(components_1.Dialog, { isEnabled: true, tutorialLabel: tutorialLabel }, void 0),
            {
              currentTutorial: registeredTutorial({
                label: tutorialLabel,
                steps: [
                  {
                    mode: new api_1.AutoMode(1000),
                    content: "<div>Something as string</div>",
                  },
                ],
              }),
            }
          ).wrapper
        ).wrapper
      ).container;
      expect(container).toMatchSnapshot();
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    });
    it("closes when users click on the close button", function () {
      var container = (0, react_1.render)(
        (0, test_context_1.usingTestingGuidedTourI18nContext)(
          (0, test_context_1.usingCurrentTutorialContext)(
            (0, jsx_runtime_1.jsx)(components_1.Dialog, { isEnabled: true, tutorialLabel: tutorialLabel }, void 0),
            {
              currentTutorial: registeredTutorial({
                label: tutorialLabel,
                steps: [
                  {
                    mode: new api_1.DemoMode(),
                    content: (0, jsx_runtime_1.jsx)("div", { children: "Something" }, void 0),
                  },
                ],
              }),
            }
          ).wrapper
        ).wrapper
      ).container;
      react_1.fireEvent.click(
        document.querySelector("[data-ouia-component-id='dmn-guided-tour'] button[aria-label='Close']"),
        { bubbles: true }
      );
      expect(container).toMatchSnapshot();
    });
  });
  describe("when the step cannot be loaded", function () {
    it("renders empty state", function () {
      var container = (0, react_1.render)(
        (0, test_context_1.usingTestingGuidedTourI18nContext)(
          (0, test_context_1.usingCurrentTutorialContext)(
            (0, jsx_runtime_1.jsx)(components_1.Dialog, { isEnabled: true, tutorialLabel: tutorialLabel }, void 0),
            {
              currentStep: 1,
              currentTutorial: registeredTutorial({
                label: tutorialLabel,
                steps: [],
              }),
            }
          ).wrapper
        ).wrapper
      ).container;
      expect(container).toMatchSnapshot();
    });
  });
  describe("when negative reinforcement appears", function () {
    var negativeReinforcementCtx = {
      isNegativeReinforcementStateEnabled: true,
      currentTutorial: registeredTutorial({
        label: tutorialLabel,
        steps: [
          {
            mode: new api_1.DemoMode(),
            negativeReinforcementMessage: "Try to click there!",
          },
        ],
      }),
    };
    it("renders negative reinforcement message", function () {
      var container = (0, react_1.render)(
        (0, test_context_1.usingTestingGuidedTourI18nContext)(
          (0, test_context_1.usingCurrentTutorialContext)(
            (0, jsx_runtime_1.jsx)(components_1.Dialog, { isEnabled: true, tutorialLabel: tutorialLabel }, void 0),
            __assign(__assign({}, negativeReinforcementCtx), { isHighlightLayerEnabled: true })
          ).wrapper
        ).wrapper
      ).container;
      expect(container).toMatchSnapshot();
    });
    it("renders negative reinforcement clue", function () {
      var container = (0, react_1.render)(
        (0, test_context_1.usingTestingGuidedTourI18nContext)(
          (0, test_context_1.usingCurrentTutorialContext)(
            (0, jsx_runtime_1.jsx)(components_1.Dialog, { isEnabled: true, tutorialLabel: tutorialLabel }, void 0),
            __assign(__assign({}, negativeReinforcementCtx), { isHighlightLayerEnabled: false })
          ).wrapper
        ).wrapper
      ).container;
      expect(container).toMatchSnapshot();
    });
    it("sets 'isHighlightLayerEnabled' as 'false' when users press the 'Continue' button", function () {
      var _a = (0, test_context_1.usingCurrentTutorialContext)(
          (0, test_context_1.usingTestingGuidedTourI18nContext)(
            (0, jsx_runtime_1.jsx)(components_1.Dialog, { isEnabled: true, tutorialLabel: tutorialLabel }, void 0)
          ).wrapper,
          __assign(__assign({}, negativeReinforcementCtx), { isHighlightLayerEnabled: true })
        ),
        ctx = _a.ctx,
        wrapper = _a.wrapper;
      (0, react_1.render)(wrapper);
      react_1.fireEvent.click(document.querySelector("[data-kgt-continue]"), { bubbles: true });
      expect(ctx.isHighlightLayerEnabled).toBeFalsy();
    });
  });
});
//# sourceMappingURL=Dialog.test.js.map

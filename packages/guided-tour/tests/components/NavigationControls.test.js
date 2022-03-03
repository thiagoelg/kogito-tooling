"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var test_utils_1 = require("react-dom/test-utils");
var utils_1 = require("../utils");
var components_1 = require("@kie-tools-core/guided-tour/dist/components");
var dist_1 = require("@kie-tools-core/guided-tour/dist");
var api_1 = require("@kie-tools-core/guided-tour/dist/api");
describe("NavigationControls", function () {
  beforeEach(utils_1.setupContainer);
  afterEach(utils_1.teardownContainer);
  it("works when users go to the next step", function () {
    var ctx = {
      currentStep: 2,
      setCurrentStep: function (index) {
        ctx.currentStep = index;
      },
      currentTutorial: { steps: [{}, {}, {}, {}] },
    };
    (0, test_utils_1.act)(function () {
      (0, utils_1.useContextMock)(ctx);
      (0, utils_1.render)((0, jsx_runtime_1.jsx)(components_1.NavigationControls, {}, void 0));
      (0, utils_1.triggerClick)("[data-kgt-next]");
    });
    expect((0, utils_1.renderedComponent)()).toMatchSnapshot();
    expect(ctx.currentStep).toBe(3);
  });
  it("works when users go to the previous step", function () {
    var ctx = {
      currentStep: 2,
      setCurrentStep: function (index) {
        ctx.currentStep = index;
      },
      currentTutorial: { steps: [{}, {}, {}, {}] },
    };
    (0, test_utils_1.act)(function () {
      (0, utils_1.useContextMock)(ctx);
      (0, utils_1.render)((0, jsx_runtime_1.jsx)(components_1.NavigationControls, {}, void 0));
      (0, utils_1.triggerClick)("[data-kgt-prev]");
    });
    expect((0, utils_1.renderedComponent)()).toMatchSnapshot();
    expect(ctx.currentStep).toBe(1);
  });
  it("renders with a tutorial and a step", function () {
    (0, test_utils_1.act)(function () {
      (0, utils_1.useContextMock)({
        currentStep: 2,
        currentTutorial: {
          steps: [{}, {}, {}],
        },
      });
      (0, utils_1.render)((0, jsx_runtime_1.jsx)(components_1.NavigationControls, {}, void 0));
    });
    expect((0, utils_1.renderedComponent)()).toMatchSnapshot();
  });
  it("renders without a tutorial, but with a step", function () {
    (0, test_utils_1.act)(function () {
      (0, utils_1.useContextMock)({ currentStep: 2, currentTutorial: undefined });
      (0, utils_1.render)((0, jsx_runtime_1.jsx)(components_1.NavigationControls, {}, void 0));
    });
    expect((0, utils_1.renderedComponent)()).toMatchSnapshot();
  });
  it("renders without a tutorial and without a step", function () {
    (0, test_utils_1.act)(function () {
      (0, utils_1.useContextMock)({ currentStep: undefined, currentTutorial: undefined });
      (0, utils_1.render)((0, jsx_runtime_1.jsx)(components_1.NavigationControls, {}, void 0));
    });
    expect((0, utils_1.renderedComponent)()).toMatchSnapshot();
  });
  it("renders with buttons when navigator is enabled", function () {
    var ctx = {
      currentStep: 0,
      setCurrentStep: function (index) {
        ctx.currentStep = index;
      },
      currentTutorial: {
        label: "Tutorial",
        steps: [
          {
            mode: new api_1.DemoMode(),
            navigatorEnabled: true,
          },
        ],
      },
    };
    (0, test_utils_1.act)(function () {
      dist_1.KogitoGuidedTour.getInstance().registerTutorial(ctx.currentTutorial);
      (0, utils_1.useContextMock)(ctx);
      (0, utils_1.render)((0, jsx_runtime_1.jsx)(components_1.NavigationControls, {}, void 0));
    });
    expect((0, utils_1.renderedComponent)()).toMatchSnapshot();
  });
});
//# sourceMappingURL=NavigationControls.test.js.map

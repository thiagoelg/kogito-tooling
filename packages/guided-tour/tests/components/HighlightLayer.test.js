"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var test_utils_1 = require("react-dom/test-utils");
var utils_1 = require("../utils");
var components_1 = require("@kie-tools-core/guided-tour/dist/components");
describe("HighlightLayer", function () {
  beforeEach(utils_1.setupContainer);
  afterEach(utils_1.teardownContainer);
  it("does not render when layer and the current highlight are disabled", function () {
    var ctx = {
      isHighlightLayerEnabled: false,
      currentStep: 0,
      currentTutorial: { steps: [{ highlightEnabled: false }] },
    };
    (0, test_utils_1.act)(function () {
      (0, utils_1.useContextMock)(ctx);
      (0, utils_1.render)((0, jsx_runtime_1.jsx)(components_1.HighlightLayer, {}, void 0));
    });
    expect((0, utils_1.renderedComponent)()).toMatchSnapshot();
  });
  it("renders when layer is disabled, but the current step highlight is enabled", function () {
    var ctx = {
      isHighlightLayerEnabled: false,
      currentStep: 0,
      currentTutorial: { steps: [{ highlightEnabled: true }] },
    };
    (0, test_utils_1.act)(function () {
      (0, utils_1.useContextMock)(ctx);
      (0, utils_1.render)((0, jsx_runtime_1.jsx)(components_1.HighlightLayer, {}, void 0));
    });
    expect((0, utils_1.renderedComponent)()).toMatchSnapshot();
  });
  it("renders when layer is enabled, but the current step highlight is disabled", function () {
    var ctx = {
      isHighlightLayerEnabled: true,
      currentStep: 0,
      currentTutorial: { steps: [{ highlightEnabled: false }] },
    };
    (0, test_utils_1.act)(function () {
      (0, utils_1.useContextMock)(ctx);
      (0, utils_1.render)((0, jsx_runtime_1.jsx)(components_1.HighlightLayer, {}, void 0));
    });
    expect((0, utils_1.renderedComponent)()).toMatchSnapshot();
  });
  it("renders when layer is enabled, but current element position and curre step are not present", function () {
    var ctx = { isHighlightLayerEnabled: true };
    (0, test_utils_1.act)(function () {
      (0, utils_1.useContextMock)(ctx);
      (0, utils_1.render)((0, jsx_runtime_1.jsx)(components_1.HighlightLayer, {}, void 0));
    });
    expect((0, utils_1.renderedComponent)()).toMatchSnapshot();
  });
  it("renders when layer with a square to highlight current element, when current element position is present", function () {
    var ctx = {
      isNegativeReinforcementStateEnabled: false,
      isHighlightLayerEnabled: true,
      currentRefElementPosition: {
        top: 100,
        left: 100,
        height: 200,
        width: 200,
      },
    };
    (0, test_utils_1.act)(function () {
      (0, utils_1.useContextMock)(ctx);
      (0, utils_1.render)((0, jsx_runtime_1.jsx)(components_1.HighlightLayer, {}, void 0));
    });
    expect((0, utils_1.renderedComponent)()).toMatchSnapshot();
  });
});
//# sourceMappingURL=HighlightLayer.test.js.map

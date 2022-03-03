"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var test_context_1 = require("../test_context");
var components_1 = require("@kie-tools-core/guided-tour/dist/components");
describe("GuidedTour", function () {
  it("renders", function () {
    var container = (0, react_1.render)(
      (0, test_context_1.usingCurrentTutorialContext)((0, jsx_runtime_1.jsx)(components_1.GuidedTour, {}, void 0))
        .wrapper
    ).container;
    expect(container).toMatchSnapshot();
  });
});
//# sourceMappingURL=GuidedTour.test.js.map

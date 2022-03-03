"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var feel_input_component_1 = require("@kie-tools/feel-input-component");
describe("FeelInput", function () {
  describe("when it's not enabled", function () {
    it("should render an empty component", function () {
      var container = (0, react_1.render)(
        (0, jsx_runtime_1.jsx)(feel_input_component_1.FeelInput, { enabled: false }, void 0)
      ).container;
      expect(container).toMatchSnapshot();
    });
  });
  describe("when it's enabled", function () {
    it("should render the FEEL input component", function () {
      var container = (0, react_1.render)(
        (0, jsx_runtime_1.jsx)(feel_input_component_1.FeelInput, { enabled: true }, void 0)
      ).container;
      expect(container).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=FeelInput.test.js.map

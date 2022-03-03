"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var LineChart_1 = require("../LineChart");
var enzyme_1 = require("enzyme");
var SampleData_1 = require("../SampleData");
var enzyme_2 = require("enzyme");
var enzyme_adapter_react_16_1 = require("enzyme-adapter-react-16");
require("jest-enzyme");
(0, enzyme_2.configure)({ adapter: new enzyme_adapter_react_16_1.default() });
it("Should test LineChart component with different props", function () {
  var wrapper = (0, enzyme_1.shallow)(
    (0, jsx_runtime_1.jsx)(
      LineChart_1.LineChart,
      { type: "line", options: SampleData_1.options, series: SampleData_1.series },
      void 0
    )
  );
  expect(wrapper.html()).toMatchSnapshot();
  wrapper.setProps({ type: "line", options: SampleData_1.options, series: SampleData_1.series });
  expect(wrapper.html()).toMatchSnapshot();
  wrapper.setProps({ type: "area", options: SampleData_1.options, series: SampleData_1.series });
  expect(wrapper.html()).toMatchSnapshot();
});
//# sourceMappingURL=LineChart.test.js.map

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineChart = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_apexcharts_1 = require("react-apexcharts");
function LineChart(props) {
  return (0, jsx_runtime_1.jsx)(
    react_apexcharts_1.default,
    { type: props.type || "line", options: props.options, series: props.series },
    void 0
  );
}
exports.LineChart = LineChart;
//# sourceMappingURL=LineChart.js.map

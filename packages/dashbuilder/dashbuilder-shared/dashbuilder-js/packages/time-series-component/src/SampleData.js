"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.series = exports.options = void 0;
exports.options = {
  chart: {
    id: "apexchart-example",
    zoom: {
      type: "x",
      enabled: true,
      autoScaleYaxis: true,
    },
    toolbar: {
      show: true,
      autoSelected: "zoom",
    },
  },
  title: {
    text: "Increase of series with time",
    align: "left",
  },
  xaxis: {
    type: "category",
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
  dataLabels: { enabled: false },
};
exports.series = [
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
  },
];
//# sourceMappingURL=SampleData.js.map

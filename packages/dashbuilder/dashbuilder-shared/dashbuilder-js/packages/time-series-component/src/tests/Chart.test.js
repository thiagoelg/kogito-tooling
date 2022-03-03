"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Chart_1 = require("../Chart");
var component_api_1 = require("@dashbuilder-js/component-api");
var enzyme_1 = require("enzyme");
var enzyme_2 = require("enzyme");
var enzyme_adapter_react_16_1 = require("enzyme-adapter-react-16");
require("jest-enzyme");
(0, enzyme_2.configure)({ adapter: new enzyme_adapter_react_16_1.default() });
var api = new component_api_1.ComponentApi();
var settings = { columnId: "", columnName: "", valueExpression: "", emptyTemplate: "" };
it("should test Chart component", function () {
  var wrapper = (0, enzyme_1.shallow)(
    (0, jsx_runtime_1.jsx)(Chart_1.Chart, { controller: api.getComponentController() }, void 0)
  );
  expect(wrapper).toMatchSnapshot();
});
describe("should test validateTransposedDataset", function () {
  it("should return not enough columns when columns are not enough", function () {
    var ds = {
      columns: [
        {
          name: "category",
          type: component_api_1.ColumnType.TEXT,
          settings: settings,
        },
        {
          name: "series",
          type: component_api_1.ColumnType.LABEL,
          settings: settings,
        },
      ],
      data: [[]],
    };
    var result = (0, Chart_1.validateTransposedDataset)(ds);
    expect(result).toBe(Chart_1.NOT_ENOUGH_COLUMNS_MSG_TRANSPOSED);
  });
  it("should test type of second column", function () {
    var ds = {
      columns: [
        {
          name: "category",
          type: component_api_1.ColumnType.TEXT,
          settings: settings,
        },
        {
          name: "series",
          type: component_api_1.ColumnType.NUMBER,
          settings: settings,
        },
        {
          name: "series",
          type: component_api_1.ColumnType.NUMBER,
          settings: settings,
        },
      ],
      data: [[]],
    };
    var result = (0, Chart_1.validateTransposedDataset)(ds);
    expect(result).toBe(Chart_1.SECOND_COLUMN_INVALID_MSG_TRANSPOSED);
  });
  it("should test type of third column", function () {
    var ds = {
      columns: [
        {
          name: "category",
          type: component_api_1.ColumnType.TEXT,
          settings: settings,
        },
        {
          name: "series",
          type: component_api_1.ColumnType.TEXT,
          settings: settings,
        },
        {
          name: "series",
          type: component_api_1.ColumnType.TEXT,
          settings: settings,
        },
      ],
      data: [[]],
    };
    var result = (0, Chart_1.validateTransposedDataset)(ds);
    expect(result).toBe(Chart_1.THIRD_COLUMN_INVALID_MSG_TRANSPOSED);
  });
});
describe("should test validateNonTransposedDataset", function () {
  it("should test number of columns of validateNonTransposedDataset", function () {
    var ds = {
      columns: [
        {
          name: "category",
          type: component_api_1.ColumnType.TEXT,
          settings: settings,
        },
      ],
      data: [[]],
    };
    var result = (0, Chart_1.validateNonTransposedDataset)(ds);
    expect(result).toBe(Chart_1.NOT_ENOUGH_COLUMNS_MSG_NON_TRANSPOSED);
  });
  it("should test type of second column of validateNonTransposedDataset", function () {
    var ds = {
      columns: [
        {
          name: "category",
          type: component_api_1.ColumnType.TEXT,
          settings: settings,
        },
        {
          name: "series-1",
          type: component_api_1.ColumnType.TEXT,
          settings: settings,
        },
      ],
      data: [[]],
    };
    var result = (0, Chart_1.validateNonTransposedDataset)(ds);
    expect(result).toBe("Wrong type for column 2, it should be NUMBER");
  });
});
describe("should test series and options for Transposed dataset", function () {
  it("should test getSeriesforTransposedDataset", function () {
    var ds = {
      columns: [
        {
          name: "category",
          type: component_api_1.ColumnType.LABEL,
          settings: settings,
        },
        {
          name: "series",
          type: component_api_1.ColumnType.LABEL,
          settings: settings,
        },
        {
          name: "values",
          type: component_api_1.ColumnType.NUMBER,
          settings: settings,
        },
      ],
      data: [
        ["2000", "series-1", "2"],
        ["2000", "series-2", "78"],
        ["2000", "series-3", "200"],
        ["2001", "series-1", "89"],
        ["2001", "series-2", "23"],
        ["2001", "series-3", "110"],
        ["2002", "series-1", "167"],
        ["2002", "series-2", "110"],
        ["2002", "series-3", "11"],
      ],
    };
    var expectedResult = [
      {
        name: "series-1",
        data: [2, 89, 167],
      },
      {
        name: "series-2",
        data: [78, 23, 110],
      },
      {
        name: "series-3",
        data: [200, 110, 11],
      },
    ];
    var result = (0, Chart_1.getSeriesforTransposedDataset)(ds);
    expect(result).toStrictEqual(expectedResult);
  });
  it("should test getOptions for transposed dataset", function () {
    var ds = {
      columns: [
        {
          name: "category",
          type: component_api_1.ColumnType.LABEL,
          settings: settings,
        },
        {
          name: "series",
          type: component_api_1.ColumnType.LABEL,
          settings: settings,
        },
        {
          name: "values",
          type: component_api_1.ColumnType.NUMBER,
          settings: settings,
        },
      ],
      data: [
        ["2000", "series-1", "2"],
        ["2000", "series-2", "78"],
        ["2000", "series-3", "200"],
        ["2001", "series-1", "89"],
        ["2001", "series-2", "23"],
        ["2001", "series-3", "110"],
        ["2002", "series-1", "167"],
        ["2002", "series-2", "110"],
        ["2002", "series-3", "11"],
      ],
    };
    var expectedResult = {
      chart: {
        id: "new",
        zoom: {
          type: "x",
          enabled: false,
          autoScaleYaxis: false,
        },
        toolbar: {
          show: false,
          autoSelected: "zoom",
        },
      },
      title: {
        text: "new",
        align: "left",
      },
      xaxis: {
        type: "datetime",
        categories: ["2000", "2001", "2002"],
      },
      dataLabels: { enabled: false },
    };
    var result = (0, Chart_1.getOptions)(ds, true, "new", "x", false, false, "new", "left", false, "zoom", "datetime");
    expect(result).toStrictEqual(expectedResult);
  });
});
describe("should test series and options for NonTransposed dataset", function () {
  it("should test getSeriesforNonTransposedDataset", function () {
    var ds = {
      columns: [
        {
          name: "category",
          type: component_api_1.ColumnType.TEXT,
          settings: settings,
        },
        {
          name: "series-1",
          type: component_api_1.ColumnType.TEXT,
          settings: settings,
        },
      ],
      data: [
        ["2000", "2"],
        ["2001", "78"],
        ["2002", "200"],
      ],
    };
    var expectedResult = [
      {
        name: "series-1",
        data: [2, 78, 200],
      },
    ];
    var result = (0, Chart_1.getSeriesforNonTransposedDataset)(ds);
    expect(result).toStrictEqual(expectedResult);
  });
  it("should test getOptions for non-transposed dataset", function () {
    var ds = {
      columns: [
        {
          name: "category",
          type: component_api_1.ColumnType.TEXT,
          settings: settings,
        },
        {
          name: "series-1",
          type: component_api_1.ColumnType.TEXT,
          settings: settings,
        },
      ],
      data: [
        ["2000", "2"],
        ["2001", "78"],
        ["2002", "200"],
      ],
    };
    var expectedResult = {
      chart: {
        id: "new",
        zoom: {
          type: "x",
          enabled: false,
          autoScaleYaxis: false,
        },
        toolbar: {
          show: false,
          autoSelected: "zoom",
        },
      },
      title: {
        text: "new",
        align: "left",
      },
      xaxis: {
        type: "category",
        categories: ["2000", "2001", "2002"],
      },
      dataLabels: { enabled: false },
    };
    var result = (0, Chart_1.getOptions)(ds, false, "new", "x", false, false, "new", "left", false, "zoom", "category");
    expect(result).toStrictEqual(expectedResult);
  });
});
describe("should test validateChartName", function () {
  it("should test special characters", function () {
    var result = (0, Chart_1.validateChartName)("foo+bar");
    expect(result).toBe(Chart_1.CHARTNAME_VALIDATION);
  });
  it("should test spaces", function () {
    var result = (0, Chart_1.validateChartName)("foo bar");
    expect(result).toBe(Chart_1.CHARTNAME_VALIDATION);
  });
  it("should test string without special characters", function () {
    var result = (0, Chart_1.validateChartName)("foobar");
    expect(result).toBe("");
  });
});
//# sourceMappingURL=Chart.test.js.map

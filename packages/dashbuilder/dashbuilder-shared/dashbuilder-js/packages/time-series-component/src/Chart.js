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
var __values =
  (this && this.__values) ||
  function (o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        },
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chart =
  exports.getOptions =
  exports.getSeriesforTransposedDataset =
  exports.getSeriesforNonTransposedDataset =
  exports.validateTransposedDataset =
  exports.validateNonTransposedDataset =
  exports.validateChartName =
  exports.validateParams =
  exports.Params =
  exports.CHARTNAME_VALIDATION =
  exports.THIRD_COLUMN_INVALID_MSG_TRANSPOSED =
  exports.SECOND_COLUMN_INVALID_MSG_TRANSPOSED =
  exports.NOT_ENOUGH_COLUMNS_MSG_TRANSPOSED =
  exports.NOT_ENOUGH_COLUMNS_MSG_NON_TRANSPOSED =
    void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var LineChart_1 = require("./LineChart");
var SampleData_1 = require("./SampleData");
var component_api_1 = require("@dashbuilder-js/component-api");
var react_1 = require("react");
exports.NOT_ENOUGH_COLUMNS_MSG_NON_TRANSPOSED =
  "Time series component expects at least 2 columns: category(LABEL or TEXT or NUMBER or DATE) and one or more series(NUMBER).";
exports.NOT_ENOUGH_COLUMNS_MSG_TRANSPOSED =
  "Time series component expects 3 columns: category(LABEL or TEXT or NUMBER or DATE), series(TEXT) and values(NUMBER).";
exports.SECOND_COLUMN_INVALID_MSG_TRANSPOSED = "Wrong type for second column, it should be TEXT.";
exports.THIRD_COLUMN_INVALID_MSG_TRANSPOSED = "Wrong type for third column, it should be NUMBER.";
exports.CHARTNAME_VALIDATION = "Please remove all special characters and spaces in Chart Name";
var Params;
(function (Params) {
  Params["TRANSPOSED"] = "transposed";
  Params["CHARTNAME"] = "chartName";
  Params["SHOWAREA"] = "showArea";
  Params["XAXISTYPE"] = "xaxisType";
  Params["DATALABELS"] = "dataLabels";
  Params["ZOOMTYPE"] = "type";
  Params["ZOOMENABLED"] = "enabled";
  Params["ZOOMAUTOSCALEYAXIS"] = "autoScaleYaxis";
  Params["TITLETEXT"] = "text";
  Params["TITLEALIGN"] = "align";
  Params["TOOLBARSHOW"] = "show";
  Params["TOOLBARAUTOSELECTED"] = "autoSelected";
})((Params = exports.Params || (exports.Params = {})));
var AppStateType;
(function (AppStateType) {
  AppStateType["ERROR"] = "Error";
  AppStateType["INIT"] = "Initializing";
  AppStateType["LOADING_COMPONENT"] = "Loading Component";
  AppStateType["LOADED_COMPONENT"] = "Loaded Component";
  AppStateType["FINISHED"] = "Finished loading";
})(AppStateType || (AppStateType = {}));
var validateParams = function (params) {
  if (!params.get(Params.TRANSPOSED)) {
    return "Transposed is required.";
  }
  if (!params.get(Params.CHARTNAME)) {
    return "Chart name is required.";
  } else {
    return (0, exports.validateChartName)(params.get(Params.CHARTNAME));
  }
};
exports.validateParams = validateParams;
var validateChartName = function (chartName) {
  var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (typeof chartName === "string") {
    return format.test(chartName) ? exports.CHARTNAME_VALIDATION : "";
  }
};
exports.validateChartName = validateChartName;
var validateDataSet = function (ds, transposed) {
  return transposed ? (0, exports.validateTransposedDataset)(ds) : (0, exports.validateNonTransposedDataset)(ds);
};
var validateNonTransposedDataset = function (ds) {
  if (ds.columns.length < 2) {
    return exports.NOT_ENOUGH_COLUMNS_MSG_NON_TRANSPOSED;
  }
  for (var i = 1; i < ds.columns.length; i++) {
    if (ds.columns[i].type !== component_api_1.ColumnType.NUMBER) {
      return "Wrong type for column " + (i + 1) + ", it should be NUMBER";
    }
  }
};
exports.validateNonTransposedDataset = validateNonTransposedDataset;
var validateTransposedDataset = function (ds) {
  if (ds.columns.length < 3) {
    return exports.NOT_ENOUGH_COLUMNS_MSG_TRANSPOSED;
  }
  if (
    ds.columns[1].type !== component_api_1.ColumnType.TEXT &&
    ds.columns[1].type !== component_api_1.ColumnType.LABEL
  ) {
    return exports.SECOND_COLUMN_INVALID_MSG_TRANSPOSED;
  }
  if (ds.columns[2].type !== component_api_1.ColumnType.NUMBER) {
    return exports.THIRD_COLUMN_INVALID_MSG_TRANSPOSED;
  }
};
exports.validateTransposedDataset = validateTransposedDataset;
function getSeries(dataset, transposed) {
  return transposed ? getSeriesforTransposedDataset(dataset) : getSeriesforNonTransposedDataset(dataset);
}
function getSeriesforNonTransposedDataset(dataset) {
  var arrayseries = [];
  var _loop_1 = function (i) {
    arrayseries.push({
      name: dataset.columns[i].name,
      data: dataset.data.map(function (d) {
        return +d[i];
      }),
    });
  };
  for (var i = 1; i < dataset.columns.length; i++) {
    _loop_1(i);
  }
  return arrayseries;
}
exports.getSeriesforNonTransposedDataset = getSeriesforNonTransposedDataset;
function getSeriesforTransposedDataset(dataset) {
  var e_1, _a, e_2, _b;
  var arrayseries = [];
  var names = dataset.data.map(function (d) {
    return d[1];
  });
  var datum = dataset.data.map(function (d) {
    return d[2];
  });
  var newnames = [];
  try {
    for (var names_1 = __values(names), names_1_1 = names_1.next(); !names_1_1.done; names_1_1 = names_1.next()) {
      var i = names_1_1.value;
      if (newnames.indexOf(i) === -1) {
        newnames.push(i);
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (names_1_1 && !names_1_1.done && (_a = names_1.return)) _a.call(names_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  try {
    for (
      var newnames_1 = __values(newnames), newnames_1_1 = newnames_1.next();
      !newnames_1_1.done;
      newnames_1_1 = newnames_1.next()
    ) {
      var i = newnames_1_1.value;
      var newdata = [];
      for (var j = 0; j < names.length; j++) {
        if (i === names[j]) {
          newdata.push(+datum[j]);
        }
      }
      arrayseries.push({ name: i, data: newdata });
    }
  } catch (e_2_1) {
    e_2 = { error: e_2_1 };
  } finally {
    try {
      if (newnames_1_1 && !newnames_1_1.done && (_b = newnames_1.return)) _b.call(newnames_1);
    } finally {
      if (e_2) throw e_2.error;
    }
  }
  return arrayseries;
}
exports.getSeriesforTransposedDataset = getSeriesforTransposedDataset;
function getOptions(
  dataset,
  transposed,
  chartName,
  type,
  enabled,
  autoScaleYaxis,
  text,
  align,
  show,
  autoSelected,
  xaxisType
) {
  var newoptions = {
    chart: {
      id: chartName,
      zoom: { type: type, enabled: enabled, autoScaleYaxis: autoScaleYaxis },
      toolbar: { show: show, autoSelected: autoSelected },
    },
    title: { text: text, align: align },
    xaxis: {
      type: xaxisType,
      categories: dataset.data.map(function (d) {
        return d[0];
      }),
    },
    dataLabels: { enabled: false },
  };
  if (transposed) {
    newoptions.xaxis.categories = Array.from(new Set(newoptions.xaxis.categories));
  }
  return newoptions;
}
exports.getOptions = getOptions;
function Chart(props) {
  var _a = __read(
      (0, react_1.useState)({
        options: SampleData_1.options,
        series: SampleData_1.series,
      }),
      2
    ),
    chartProps = _a[0],
    setChartProps = _a[1];
  var _b = __read(
      (0, react_1.useState)({
        state: AppStateType.INIT,
        processesOptions: {
          chart: {
            id: "",
            zoom: { type: "", enabled: false, autoScaleYaxis: false },
            toolbar: { show: false, autoSelected: "" },
          },
          xaxis: { type: "", categories: [] },
          dataLabels: { enabled: false },
          title: { text: "", align: "" },
        },
        processesSeries: [{ name: "", data: [] }],
        configurationIssue: "",
      }),
      2
    ),
    appState = _b[0],
    setAppState = _b[1];
  var onDataset = (0, react_1.useCallback)(function (ds, params) {
    var transposed = params.get(Params.TRANSPOSED) === "true";
    var validationMessage = (0, exports.validateParams)(params) || validateDataSet(ds, transposed);
    if (validationMessage) {
      setAppState(function (previousAppState) {
        return __assign(__assign({}, previousAppState), {
          state: AppStateType.ERROR,
          message: validationMessage,
          configurationIssue: validationMessage,
        });
      });
    } else {
      var op_1 = getOptions(
        ds,
        transposed,
        params.get(Params.CHARTNAME),
        params.get(Params.ZOOMTYPE),
        params.get(Params.ZOOMENABLED),
        params.get(Params.ZOOMAUTOSCALEYAXIS),
        params.get(Params.TITLETEXT),
        params.get(Params.TITLEALIGN),
        params.get(Params.TOOLBARSHOW),
        params.get(Params.TOOLBARAUTOSELECTED),
        params.get(Params.XAXISTYPE)
      );
      op_1.dataLabels.enabled = params.get(Params.DATALABELS) === "true";
      op_1.chart.zoom.enabled = params.get(Params.ZOOMENABLED) === "true";
      op_1.chart.zoom.autoScaleYaxis = params.get(Params.ZOOMAUTOSCALEYAXIS) === "true";
      op_1.chart.toolbar.show = params.get(Params.TOOLBARSHOW) === "true";
      setAppState(function (previousAppState) {
        return __assign(__assign({}, previousAppState), {
          processesOptions: op_1,
          processesSeries: getSeries(ds, transposed),
          state: AppStateType.FINISHED,
          configurationIssue: "",
        });
      });
    }
  }, []);
  (0, react_1.useEffect)(
    function () {
      props.controller.setOnInit(function (componentProps) {
        setChartProps({
          type: componentProps.get(Params.SHOWAREA) === "true" ? "area" : "line",
          options: appState.processesOptions,
          series: appState.processesSeries,
        });
      });
      props.controller.setOnDataSet(onDataset);
    },
    [appState]
  );
  (0, react_1.useEffect)(
    function () {
      if (appState.configurationIssue) {
        props.controller.requireConfigurationFix(appState.configurationIssue);
      } else {
        props.controller.configurationOk();
      }
    },
    [appState.configurationIssue]
  );
  return (0, jsx_runtime_1.jsx)(
    "div",
    __assign(
      { style: { width: "100%", height: "100%" } },
      {
        children: (function () {
          switch (appState.state) {
            case AppStateType.ERROR:
              return (0, jsx_runtime_1.jsx)(
                "em",
                __assign({ style: { color: "red" } }, { children: appState.message }),
                void 0
              );
            case AppStateType.LOADED_COMPONENT:
            case AppStateType.FINISHED:
              return (0, jsx_runtime_1.jsx)(
                LineChart_1.LineChart,
                __assign({}, chartProps, { options: appState.processesOptions, series: appState.processesSeries }),
                void 0
              );
            default:
              return (0, jsx_runtime_1.jsxs)("em", { children: ["Status: ", appState.state] }, void 0);
          }
        })(),
      }
    ),
    void 0
  );
}
exports.Chart = Chart;
//# sourceMappingURL=Chart.js.map

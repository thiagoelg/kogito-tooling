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
exports.ProcessHeatmapComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var component_api_1 = require("@dashbuilder-js/component-api");
var heatmap_base_1 = require("@dashbuilder-js/heatmap-base");
var NOT_ENOUGH_COLUMNS_MSG = "Process Heatmap expects 2 columns: Node Id(LABEL or TEXT),Value (NUMBER).";
var FIRST_COLUMN_INVALID_MSG = "Wrong type for first column, it should be either LABEL or TEXT.";
var SECOND_COLUMN_INVALID_MSG = "Wrong type for second column, it should be NUMBER.";
var Params;
(function (Params) {
  Params["SERVER_TEMPLATE"] = "serverTemplate";
  Params["CONTAINER_ID"] = "containerId";
  Params["PROCESS_ID"] = "processId";
})(Params || (Params = {}));
var AppStateType;
(function (AppStateType) {
  AppStateType["ERROR"] = "Error";
  AppStateType["INIT"] = "Initializing";
  AppStateType["LOADING_SVG"] = "Loading SVG";
  AppStateType["LOADED_SVG"] = "Loaded SVG";
  AppStateType["FINISHED"] = "Finished loading";
})(AppStateType || (AppStateType = {}));
var isEmpty = function (param) {
  return param === undefined || param.trim() === "";
};
var validateParams = function (params) {
  if (isEmpty(params.get(Params.SERVER_TEMPLATE))) {
    return "Server template is required.";
  }
  if (isEmpty(params.get(Params.CONTAINER_ID))) {
    return "Container ID is required.";
  }
  if (isEmpty(params.get(Params.PROCESS_ID))) {
    return "Process ID is required.";
  }
};
var validateDataSet = function (ds) {
  if (ds.columns.length < 2) {
    return NOT_ENOUGH_COLUMNS_MSG;
  }
  if (
    ds.columns[0].type !== component_api_1.ColumnType.LABEL &&
    ds.columns[0].type !== component_api_1.ColumnType.TEXT
  ) {
    return FIRST_COLUMN_INVALID_MSG;
  }
  if (ds.columns[1].type !== component_api_1.ColumnType.NUMBER) {
    return SECOND_COLUMN_INVALID_MSG;
  }
};
function ProcessHeatmapComponent(props) {
  var _a = __read(
      (0, react_1.useState)({
        state: AppStateType.INIT,
        processesNodesValues: [],
        configurationIssue: "",
      }),
      2
    ),
    appState = _a[0],
    setAppState = _a[1];
  var onInit = (0, react_1.useCallback)(
    function (params) {
      var validationMessage = validateParams(params);
      if (validationMessage) {
        setAppState(function (previousAppState) {
          return __assign(__assign({}, previousAppState), {
            state: AppStateType.ERROR,
            message: validationMessage,
            configurationIssue: validationMessage,
          });
        });
      } else {
        setAppState(function (previousAppState) {
          return __assign(__assign({}, previousAppState), {
            state: AppStateType.LOADING_SVG,
            svgRequest: {
              functionName: "ProcessSVGFunction",
              parameters: params,
            },
            configurationIssue: "",
          });
        });
      }
    },
    [appState]
  );
  var onDataset = (0, react_1.useCallback)(function (ds, params) {
    var validationMessage = validateParams(params) || validateDataSet(ds);
    if (validationMessage) {
      setAppState(function (previousAppState) {
        return __assign(__assign({}, previousAppState), {
          state: AppStateType.ERROR,
          message: validationMessage,
          configurationIssue: validationMessage,
        });
      });
    } else {
      setAppState(function (previousAppState) {
        return __assign(__assign({}, previousAppState), {
          processesNodesValues: ds.data.map(function (d) {
            return { nodeId: d[0], value: +d[1] };
          }),
          state: AppStateType.FINISHED,
          configurationIssue: "",
        });
      });
    }
  }, []);
  (0, react_1.useEffect)(
    function () {
      props.controller.setOnInit(onInit);
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
  (0, react_1.useEffect)(
    function () {
      if (appState.svgRequest) {
        props.controller
          .callFunction(appState.svgRequest)
          .then(function (result) {
            return setAppState(function (previousAppState) {
              return __assign(__assign({}, previousAppState), { state: AppStateType.LOADED_SVG, processSVG: result });
            });
          })
          .catch(function (errorMsg) {
            return setAppState(function (previousAppState) {
              return __assign(__assign({}, previousAppState), {
                state: AppStateType.ERROR,
                message: "There was an error retrieving process SVG: ".concat(errorMsg),
              });
            });
          });
      }
    },
    [appState.svgRequest]
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
            case AppStateType.LOADED_SVG:
            case AppStateType.FINISHED:
              return (0, jsx_runtime_1.jsx)(
                heatmap_base_1.SvgHeatmap,
                { svgContent: appState.processSVG, svgNodesValues: appState.processesNodesValues },
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
exports.ProcessHeatmapComponent = ProcessHeatmapComponent;
//# sourceMappingURL=ProcessHeatmapComponent.js.map

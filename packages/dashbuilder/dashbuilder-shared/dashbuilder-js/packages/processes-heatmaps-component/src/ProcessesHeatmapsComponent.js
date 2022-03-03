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
exports.ProcessesHeatmapsComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var component_api_1 = require("@dashbuilder-js/component-api");
var heatmap_base_1 = require("@dashbuilder-js/heatmap-base");
var ProcessSelector_1 = require("./ProcessSelector");
var NOT_ENOUGH_COLUMNS_MSG =
  "All Processes Heatmaps expects 4 columns: Container Id (or External Id), Process Id, Node Id ,Value (NUMBER).";
var INVALID_TEXT_COLUMN = "Wrong type for column {0}, it should be either LABEL or TEXT.";
var VALUE_COLUMN_INVALID_MSG = "Wrong type for node value column, it should be NUMBER.";
var NO_DATA_MESSAGE = "Dataset is empty. Please provide data with container id, process id, node id and value.";
var Params;
(function (Params) {
  Params["SERVER_TEMPLATE"] = "serverTemplate";
  Params["SHOW_STATUS"] = "showStatus";
  Params["SHOW_PROCESS_SELECTOR"] = "showProcessSelector";
})(Params || (Params = {}));
var AppStateType;
(function (AppStateType) {
  AppStateType["ERROR"] = "Error";
  AppStateType["INIT"] = "Initializing";
  AppStateType["WAITING_DATA"] = "Waiting Data";
  AppStateType["LOADING_SVG"] = "Loading SVG";
  AppStateType["LOADED_SVG"] = "Loaded SVG";
  AppStateType["FINISHED"] = "Finished loading";
})(AppStateType || (AppStateType = {}));
var isEmpty = function (param) {
  return param === undefined || param.trim() === "";
};
var validateParams = function (params) {
  if (isEmpty(params.get(Params.SERVER_TEMPLATE))) {
    return "Server template is required. (Component Properties)";
  }
};
var validateDataSet = function (ds) {
  if (ds.columns.length < 4) {
    return NOT_ENOUGH_COLUMNS_MSG;
  }
  for (var i = 0; i < ds.columns.length; i++) {
    var column = ds.columns[i];
    var columnType = column.type;
    if (i < 3 && columnType !== component_api_1.ColumnType.LABEL && columnType !== component_api_1.ColumnType.TEXT) {
      return INVALID_TEXT_COLUMN.replace("{0}", column.name);
    }
    if (i === 3 && columnType !== component_api_1.ColumnType.NUMBER) {
      return VALUE_COLUMN_INVALID_MSG;
    }
  }
};
function ProcessesHeatmapsComponent(props) {
  var _a = __read(
      (0, react_1.useState)({
        state: AppStateType.INIT,
        nodesValues: [],
        containerData: [],
        showStatus: false,
      }),
      2
    ),
    appState = _a[0],
    setAppState = _a[1];
  var onDataset = (0, react_1.useCallback)(
    function (ds, params) {
      var validation = validateParams(params) || validateDataSet(ds);
      if (validation) {
        setAppState(function (previousState) {
          return __assign(__assign({}, previousState), { state: AppStateType.ERROR, message: validation });
        });
        props.controller.requireConfigurationFix(validation);
        return;
      }
      if (ds.data.length === 0) {
        setAppState(function (previousState) {
          return __assign(__assign({}, previousState), { state: AppStateType.ERROR, message: NO_DATA_MESSAGE });
        });
        props.controller.requireConfigurationFix(NO_DATA_MESSAGE);
        return;
      }
      props.controller.configurationOk();
      var allContainerData = [];
      ds.data.map(function (d) {
        var cid = d[0];
        var pid = d[1];
        var nid = d[2];
        var nodeValue = +d[3];
        var containerData = allContainerData.filter(function (c) {
          return c.containerId === cid;
        })[0];
        if (!containerData) {
          containerData = { containerId: cid, processData: [] };
          allContainerData.push(containerData);
        }
        var processData = containerData.processData.filter(function (p) {
          return p.processId === pid;
        })[0];
        if (processData) {
          processData.nodeValues.push({ nodeid: nid, value: nodeValue });
        } else {
          containerData.processData.push({ processId: pid, nodeValues: [{ nodeid: nid, value: nodeValue }] });
        }
      });
      setAppState(function (previousState) {
        return __assign(__assign({}, previousState), {
          nodesValues: ds.data.map(function (d) {
            return { nodeId: d[2], value: +d[3] };
          }),
          state: AppStateType.LOADING_SVG,
          containerData: allContainerData,
          serverTemplate: params.get(Params.SERVER_TEMPLATE),
          showStatus: params.get(Params.SHOW_STATUS) === "true",
          selectedContainer: appState.selectedContainer || allContainerData[0].containerId,
          selectedProcess: appState.selectedProcess || allContainerData[0].processData[0].processId,
        });
      });
    },
    [appState]
  );
  var onProcessSelected = (0, react_1.useCallback)(
    function (containerId, processId) {
      if (
        !appState.serverTemplate ||
        (containerId === appState.selectedContainer && processId === appState.selectedProcess)
      ) {
        return;
      }
      setAppState(function (previousState) {
        return __assign(__assign({}, previousState), {
          state: AppStateType.LOADING_SVG,
          selectedContainer: containerId,
          selectedProcess: processId,
        });
      });
    },
    [appState.serverTemplate, appState.selectedContainer, appState.selectedProcess]
  );
  (0, react_1.useEffect)(
    function () {
      return props.controller.setOnDataSet(onDataset);
    },
    [appState]
  );
  (0, react_1.useEffect)(
    function () {
      if (appState.serverTemplate && appState.selectedContainer && appState.selectedProcess) {
        var params = new Map();
        params.set(Params.SERVER_TEMPLATE, appState.serverTemplate);
        params.set("containerId", appState.selectedContainer);
        params.set("processId", appState.selectedProcess);
        props.controller
          .callFunction({
            functionName: "ProcessSVGFunction",
            parameters: params,
          })
          .then(function (result) {
            return setAppState(function (previousState) {
              return __assign(__assign({}, previousState), { state: AppStateType.LOADED_SVG, processSvg: result });
            });
          })
          .catch(function (errorMsg) {
            return setAppState(function (previousState) {
              return __assign(__assign({}, previousState), {
                state: AppStateType.ERROR,
                processSvg: undefined,
                message: 'Error loading SVG for process "'
                  .concat(appState.selectedProcess, '" from container "')
                  .concat(
                    appState.selectedContainer,
                    '". \n            Please make sure the process SVG exists. Error: '
                  )
                  .concat(errorMsg),
              });
            });
          });
      }
    },
    [appState.serverTemplate, appState.selectedContainer, appState.selectedProcess]
  );
  return (0, jsx_runtime_1.jsxs)(
    "div",
    __assign(
      { className: "allProcessHeatmapsComponent" },
      {
        children: [
          appState.state !== AppStateType.ERROR &&
            appState.processSvg &&
            (0, jsx_runtime_1.jsx)(
              heatmap_base_1.SvgHeatmap,
              { svgNodesValues: appState.nodesValues, svgContent: appState.processSvg },
              void 0
            ),
          appState.containerData.length > 0 &&
            (0, jsx_runtime_1.jsx)(
              ProcessSelector_1.ProcessSelector,
              {
                containers: appState.containerData.map(function (c) {
                  return {
                    id: c.containerId,
                    processes: c.processData.map(function (p) {
                      return p.processId;
                    }),
                  };
                }),
                onContainerProcessSelected: onProcessSelected,
                selectedContainer: appState.selectedContainer,
                selectedProcess: appState.selectedProcess,
              },
              void 0
            ),
          appState.state === AppStateType.ERROR &&
            (0, jsx_runtime_1.jsx)(
              "p",
              __assign({ className: "errorMessage" }, { children: appState.message }),
              void 0
            ),
          appState.showStatus &&
            (0, jsx_runtime_1.jsx)(
              "div",
              __assign(
                { className: "statusContainer" },
                {
                  children: (0, jsx_runtime_1.jsxs)(
                    "em",
                    __assign(
                      { className: "statusLabel" },
                      { children: [appState.state, " ", appState.message ? ": ".concat(appState.message) : ""] }
                    ),
                    void 0
                  ),
                }
              ),
              void 0
            ),
        ],
      }
    ),
    void 0
  );
}
exports.ProcessesHeatmapsComponent = ProcessesHeatmapsComponent;
//# sourceMappingURL=ProcessesHeatmapsComponent.js.map

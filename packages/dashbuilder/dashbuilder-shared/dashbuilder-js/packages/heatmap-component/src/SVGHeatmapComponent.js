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
exports.SVGHeatmapComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var heatmap_base_1 = require("@dashbuilder-js/heatmap-base");
var component_api_1 = require("@dashbuilder-js/component-api");
var SVG_CONTENT_PARAM = "svgContent";
var SVG_URL_PARAM = "svgUrl";
var NOT_ENOUGH_COLUMNS_MSG = "Heatmap expects 2 columns: Node ID (TEXT or Label) and value (NUMBER)";
var INVALID_COLUMNS_TYPE_MSG = "Wrong columns type. First column should be TEXT or LABEL and second column NUMBER.";
var MISSING_PARAM_MSG = "You must provide either a SVG URL or the SVG Content.";
var notEmpty = function (param) {
  return param !== undefined && param.trim() !== "";
};
var validateDataSet = function (ds) {
  if (ds.columns.length < 2) {
    return NOT_ENOUGH_COLUMNS_MSG;
  }
  if (
    (ds.columns[0].type !== component_api_1.ColumnType.TEXT &&
      ds.columns[0].type !== component_api_1.ColumnType.LABEL) ||
    ds.columns[1].type !== component_api_1.ColumnType.NUMBER
  ) {
    return INVALID_COLUMNS_TYPE_MSG;
  }
};
var validateParams = function (params) {
  var svgContent = params.get(SVG_CONTENT_PARAM);
  var svgUrl = params.get(SVG_URL_PARAM);
  if (!(svgContent || svgUrl)) {
    return MISSING_PARAM_MSG;
  }
};
var extractNodeInfo = function (dataset) {
  return dataset.map(function (row) {
    return {
      nodeId: row[0],
      value: +row[1],
    };
  });
};
function SVGHeatmapComponent(props) {
  var _a = __read((0, react_1.useState)({ data: [] }), 2),
    appState = _a[0],
    setAppState = _a[1];
  var onDataset = function (ds, params) {
    var validationMessage = validateDataSet(ds) || validateParams(params);
    if (validationMessage) {
      props.controller.requireConfigurationFix(validationMessage);
      setAppState(function (previousState) {
        return __assign(__assign({}, previousState), { errorMessage: validationMessage });
      });
      return;
    }
    props.controller.configurationOk();
    var userSvgContent = params.get(SVG_CONTENT_PARAM);
    var svgUrl = params.get(SVG_URL_PARAM);
    if (notEmpty(userSvgContent)) {
      setAppState(function (previousState) {
        return __assign(__assign({}, previousState), { data: extractNodeInfo(ds.data), svgContent: userSvgContent });
      });
    } else {
      fetch(svgUrl)
        .then(function (r) {
          return r.text();
        })
        .then(function (urlSvgContent) {
          return setAppState(function (previousState) {
            return __assign(__assign({}, previousState), { data: extractNodeInfo(ds.data), svgContent: urlSvgContent });
          });
        })
        .catch(function (e) {
          return setAppState(function (previousState) {
            return __assign(__assign({}, previousState), { data: [], svgContent: undefined, errorMessage: e });
          });
        });
    }
  };
  (0, react_1.useEffect)(
    function () {
      return props.controller.setOnDataSet(onDataset);
    },
    [appState.data]
  );
  return (appState === null || appState === void 0 ? void 0 : appState.errorMessage)
    ? (0, jsx_runtime_1.jsx)("em", { children: appState.errorMessage }, void 0)
    : (0, jsx_runtime_1.jsx)(
        heatmap_base_1.SvgHeatmap,
        { svgContent: appState.svgContent, svgNodesValues: appState.data },
        void 0
      );
}
exports.SVGHeatmapComponent = SVGHeatmapComponent;
//# sourceMappingURL=SVGHeatmapComponent.js.map

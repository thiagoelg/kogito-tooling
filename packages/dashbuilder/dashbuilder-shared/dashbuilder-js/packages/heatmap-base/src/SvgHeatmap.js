"use strict";
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
exports.SvgHeatmap = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var heatmap = require("heatmap.js");
var reduce = function (data, reducer) {
  return data.length > 0
    ? data
        .map(function (d) {
          return d.value;
        })
        .reduce(function (d1, d2) {
          return reducer(d1, d2);
        })
    : 0;
};
function createHeatmap(parent, heatData) {
  return heatmap
    .create({
      container: parent,
    })
    .setData({
      max: reduce(heatData, Math.max),
      min: reduce(heatData, Math.min),
      data: heatData,
    });
}
var getNodeInfo = function (el) {
  var bounds = el.getBoundingClientRect();
  var radius = Math.sqrt((bounds.width * bounds.height) / 4);
  return {
    x: (bounds.left + bounds.right) / 2,
    y: (bounds.top + bounds.bottom) / 2,
    size: radius,
  };
};
function SvgHeatmap(props) {
  var parentRef = (0, react_1.createRef)();
  var _a = __read((0, react_1.useState)(), 2),
    svgHeatmap = _a[0],
    setSvgHeatmap = _a[1];
  var _b = __read((0, react_1.useState)(false), 2),
    repaint = _b[0],
    setRepaint = _b[1];
  (0, react_1.useEffect)(
    function () {
      if (props.svgContent) {
        var heatmapContainer = parentRef.current;
        heatmapContainer.innerHTML = props.svgContent;
        var svg = heatmapContainer.querySelector("svg");
        svg.style.width = "100%";
        svg.style.height = "auto";
        setSvgHeatmap(createHeatmap(heatmapContainer, []));
      }
    },
    [props.svgContent]
  );
  (0, react_1.useEffect)(
    function () {
      if (svgHeatmap && props.svgNodesValues && props.svgNodesValues.length > 0) {
        var values = props.svgNodesValues
          .filter(function (n) {
            return document.getElementById(n.nodeId);
          })
          .map(function (nodeValue) {
            var node = document.getElementById(nodeValue.nodeId);
            var nodeInfo = getNodeInfo(node);
            return {
              x: Math.ceil(nodeInfo.x),
              y: Math.ceil(nodeInfo.y),
              radius: nodeInfo.size,
              value: nodeValue.value,
            };
          });
        if (values.length > 0) {
          svgHeatmap.setData({
            min: values
              .map(function (d) {
                return d.value;
              })
              .reduce(function (d1, d2) {
                return Math.min(d1, d2);
              }),
            max: values
              .map(function (d) {
                return d.value;
              })
              .reduce(function (d1, d2) {
                return Math.max(d1, d2);
              }),
            data: values,
          });
        }
        svgHeatmap.repaint();
      }
    },
    [svgHeatmap, props.svgNodesValues, repaint]
  );
  var onResize = (0, react_1.useCallback)(
    function () {
      return setRepaint(function (previous) {
        return !previous;
      });
    },
    [repaint]
  );
  (0, react_1.useEffect)(
    function () {
      window.addEventListener("resize", onResize, false);
      return function () {
        return window.removeEventListener("resize", onResize, false);
      };
    },
    [repaint]
  );
  return (0, jsx_runtime_1.jsx)(
    "div",
    { style: { width: props.width || "100%", height: props.height || "100%" }, ref: parentRef },
    void 0
  );
}
exports.SvgHeatmap = SvgHeatmap;
//# sourceMappingURL=SvgHeatmap.js.map

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePositionStyle = void 0;
var api_1 = require("../../api");
var DEFAULT_STYLE = {
  left: "",
  top: "",
  transform: "translate(-50%, -50%)",
};
var calculatePositionStyle = function (position, rect) {
  var _a;
  var _b = rect !== null && rect !== void 0 ? rect : {},
    left = _b.left,
    top = _b.top,
    width = _b.width,
    height = _b.height;
  if ((_a = !(left && top && width && height)) !== null && _a !== void 0 ? _a : rect === api_1.DEFAULT_RECT) {
    return DEFAULT_STYLE;
  }
  var MARGIN = 20;
  switch (position) {
    case "right":
      return {
        left: left + width + MARGIN,
        top: top,
        transform: "rotate3d(0, 0, 0, 0deg)",
      };
    case "left":
      return {
        left: left - MARGIN,
        top: top,
        transform: "translate(-100%, 0%)",
      };
    case "bottom":
      return {
        left: left,
        top: top + height + MARGIN,
        transform: "rotate3d(0, 0, 0, 0deg)",
      };
    default:
      return DEFAULT_STYLE;
  }
};
exports.calculatePositionStyle = calculatePositionStyle;
//# sourceMappingURL=PositionCalculator.js.map

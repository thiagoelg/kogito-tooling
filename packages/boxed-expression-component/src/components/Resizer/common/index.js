"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notifyCell = exports.hashfy = exports.widthValue = void 0;
var dom_1 = require("../dom");
var widthValue = function (width) {
  return Math.max(Math.round(parseFloat(width + "")), dom_1.DEFAULT_MIN_WIDTH);
};
exports.widthValue = widthValue;
var hashfy = function (obj) {
  if (obj === void 0) {
    obj = {};
  }
  var getCircularReplacer = function () {
    var seen = new WeakSet();
    return function (key, value) {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
  return JSON.stringify(obj, getCircularReplacer());
};
exports.hashfy = hashfy;
var notifyCell = function (id, width, editorElement) {
  if (width === void 0) {
    width = dom_1.DEFAULT_MIN_WIDTH;
  }
  editorElement.dispatchEvent(
    new CustomEvent(id, {
      detail: { width: width },
    })
  );
};
exports.notifyCell = notifyCell;
//# sourceMappingURL=index.js.map

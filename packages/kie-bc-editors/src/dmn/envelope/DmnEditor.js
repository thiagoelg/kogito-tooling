"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmnEditorImpl = void 0;
var common_1 = require("../../common");
var DmnEditorImpl = (function (_super) {
  __extends(DmnEditorImpl, _super);
  function DmnEditorImpl() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  DmnEditorImpl.prototype.myDmnMethod = function () {
    return "dmn-specific--configured";
  };
  DmnEditorImpl.prototype.getNodeIds = function () {
    return window.canvas.getNodeIds();
  };
  DmnEditorImpl.prototype.getBackgroundColor = function (uuid) {
    return window.canvas.getBackgroundColor(uuid);
  };
  DmnEditorImpl.prototype.setBackgroundColor = function (uuid, backgroundColor) {
    window.canvas.setBackgroundColor(uuid, backgroundColor);
  };
  DmnEditorImpl.prototype.getBorderColor = function (uuid) {
    return window.canvas.getBorderColor(uuid);
  };
  DmnEditorImpl.prototype.setBorderColor = function (uuid, borderColor) {
    window.canvas.setBorderColor(uuid, borderColor);
  };
  DmnEditorImpl.prototype.getLocation = function (uuid) {
    return window.canvas.getLocation(uuid);
  };
  DmnEditorImpl.prototype.getAbsoluteLocation = function (uuid) {
    return window.canvas.getAbsoluteLocation(uuid);
  };
  DmnEditorImpl.prototype.getDimensions = function (uuid) {
    return window.canvas.getDimensions(uuid);
  };
  DmnEditorImpl.prototype.applyState = function (uuid, state) {
    window.canvas.applyState(uuid, state);
  };
  DmnEditorImpl.prototype.centerNode = function (uuid) {
    window.canvas.centerNode(uuid);
  };
  return DmnEditorImpl;
})(common_1.GwtEditorWrapper);
exports.DmnEditorImpl = DmnEditorImpl;
//# sourceMappingURL=DmnEditor.js.map

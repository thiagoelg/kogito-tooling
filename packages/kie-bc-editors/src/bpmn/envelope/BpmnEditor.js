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
exports.BpmnEditorImpl = void 0;
var common_1 = require("../../common");
var BpmnEditorImpl = (function (_super) {
  __extends(BpmnEditorImpl, _super);
  function BpmnEditorImpl() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  BpmnEditorImpl.prototype.myBpmnMethod = function () {
    return "bpmn-specific--configured";
  };
  BpmnEditorImpl.prototype.getNodeIds = function () {
    return window.canvas.getNodeIds();
  };
  BpmnEditorImpl.prototype.getBackgroundColor = function (uuid) {
    return window.canvas.getBackgroundColor(uuid);
  };
  BpmnEditorImpl.prototype.setBackgroundColor = function (uuid, backgroundColor) {
    window.canvas.setBackgroundColor(uuid, backgroundColor);
  };
  BpmnEditorImpl.prototype.getBorderColor = function (uuid) {
    return window.canvas.getBorderColor(uuid);
  };
  BpmnEditorImpl.prototype.setBorderColor = function (uuid, borderColor) {
    window.canvas.setBorderColor(uuid, borderColor);
  };
  BpmnEditorImpl.prototype.getLocation = function (uuid) {
    return window.canvas.getLocation(uuid);
  };
  BpmnEditorImpl.prototype.getAbsoluteLocation = function (uuid) {
    return window.canvas.getAbsoluteLocation(uuid);
  };
  BpmnEditorImpl.prototype.getDimensions = function (uuid) {
    return window.canvas.getDimensions(uuid);
  };
  BpmnEditorImpl.prototype.applyState = function (uuid, state) {
    window.canvas.applyState(uuid, state);
  };
  BpmnEditorImpl.prototype.centerNode = function (uuid) {
    window.canvas.centerNode(uuid);
  };
  return BpmnEditorImpl;
})(common_1.GwtEditorWrapper);
exports.BpmnEditorImpl = BpmnEditorImpl;
//# sourceMappingURL=BpmnEditor.js.map

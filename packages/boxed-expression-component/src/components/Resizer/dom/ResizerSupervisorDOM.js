"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyDOMSupervisor = exports.DEFAULT_MIN_WIDTH = void 0;
var dom_1 = require("../dom");
exports.DEFAULT_MIN_WIDTH = 100;
var applyDOMSupervisor = function (isRunnerTable, container) {
  new SupervisorExecution(isRunnerTable, container).execute();
};
exports.applyDOMSupervisor = applyDOMSupervisor;
var SupervisorExecution = (function () {
  function SupervisorExecution(isRunnerTable, editorElement) {
    this.isRunnerTable = isRunnerTable;
    this.editorElement = editorElement;
    this.domSession = new dom_1.DOMSession(editorElement);
  }
  SupervisorExecution.prototype.execute = function () {
    var cells = this.domSession.getCells().sort(function (c1, c2) {
      return c2.depth - c1.depth;
    });
    cells.forEach(this.refreshWidthAsParent);
    if (this.isRunnerTable) {
      exports.DEFAULT_MIN_WIDTH = 150;
      var properties = { originalIndex: 0, cellIndex: 0 };
      for (properties.originalIndex; properties.originalIndex < cells.length; properties.originalIndex++) {
        this.refreshWidthAsLastGroupColumnRunner(cells[properties.originalIndex], properties);
      }
    } else {
      cells.forEach(this.refreshWidthAsLastGroupColumn);
    }
    cells
      .sort(function (c1, c2) {
        return c1.depth - c2.depth;
      })
      .forEach(this.refreshWidthAsLastColumn);
  };
  SupervisorExecution.prototype.refreshWidthAsParent = function (cell) {
    cell.refreshWidthAsParent();
  };
  SupervisorExecution.prototype.refreshWidthAsLastColumn = function (cell) {
    cell.refreshWidthAsLastColumn();
  };
  SupervisorExecution.prototype.refreshWidthAsLastGroupColumnRunner = function (cell, properties) {
    cell.refreshWidthAsLastGroupColumnRunner(properties);
    properties.cellIndex++;
  };
  SupervisorExecution.prototype.refreshWidthAsLastGroupColumn = function (cell) {
    cell.refreshWidthAsLastGroupColumn();
  };
  return SupervisorExecution;
})();
//# sourceMappingURL=ResizerSupervisorDOM.js.map

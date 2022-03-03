"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOMSession = exports.CELL_CSS_SELECTOR = void 0;
var _1 = require("./");
exports.CELL_CSS_SELECTOR = ".react-resizable";
var DOMSession = (function () {
  function DOMSession(editorElement) {
    this.editorElement = editorElement;
  }
  DOMSession.prototype.getCells = function () {
    if (this.cells === undefined) {
      this.cells = this.buildCells();
    }
    return this.cells;
  };
  DOMSession.prototype.buildCells = function () {
    var _this = this;
    var _a;
    var cells = [];
    this.fetchCellElements((_a = this.editorElement) !== null && _a !== void 0 ? _a : document.body).forEach(function (
      cellElement
    ) {
      _this.buildCell(cellElement, cells, 0);
    });
    return cells;
  };
  DOMSession.prototype.buildCell = function (htmlElement, cells, depthLevel) {
    var _this = this;
    var exitingElement = cells.find(function (c) {
      return c.element === htmlElement;
    });
    if (exitingElement) {
      return exitingElement;
    }
    var cell = new _1.Cell(
      htmlElement,
      this.fetchCellElements(htmlElement)
        .map(function (child) {
          return _this.buildCell(child, cells, depthLevel + 1);
        })
        .filter(function (c) {
          return c.depth == depthLevel + 1;
        }),
      depthLevel,
      this.editorElement
    );
    cells.push(cell);
    return cell;
  };
  DOMSession.prototype.fetchCellElements = function (parent) {
    var htmlElements = parent.querySelectorAll(exports.CELL_CSS_SELECTOR);
    return [].slice.call(htmlElements);
  };
  return DOMSession;
})();
exports.DOMSession = DOMSession;
//# sourceMappingURL=DOMSession.js.map

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCellTableId = exports.getCellCoordinates = void 0;
var lodash_1 = require("lodash");
var DEFAULT = { x: 0, y: 0 };
var getCellCoordinates = function (cell) {
  var tbody = cell === null || cell === void 0 ? void 0 : cell.closest("tbody");
  if (!tbody) {
    return DEFAULT;
  }
  var rows = tbody.querySelectorAll("tr");
  for (var y = 0; y < rows.length; y++) {
    var row = rows[y];
    var cols = row.querySelectorAll(".data-cell");
    for (var x = 0; x < cols.length; x++) {
      if (cell === cols[x]) {
        return { x: x, y: y };
      }
    }
  }
  return DEFAULT;
};
exports.getCellCoordinates = getCellCoordinates;
var getCellTableId = function (cell) {
  var _a;
  var cssClasses =
    ((_a = cell === null || cell === void 0 ? void 0 : cell.closest(".table-component")) === null || _a === void 0
      ? void 0
      : _a.classList) || [];
  return (
    lodash_1.default.first(
      [].slice.call(cssClasses).filter(function (c) {
        return c.match(/table-event-/g);
      })
    ) || ""
  );
};
exports.getCellTableId = getCellTableId;
//# sourceMappingURL=TableUtils.js.map

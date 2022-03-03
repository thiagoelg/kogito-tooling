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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellSelectionBox = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var lodash_1 = require("lodash");
var react_1 = require("react");
var _1 = require(".");
var Resizer_1 = require("../Resizer");
var common_1 = require("../Table/common");
require("./CellSelectionBox.css");
var context_1 = require("../../context");
var SELECTED_CELL = "cell--selected";
var EDITABLE_CELL = "editable-cell";
var CellSelectionBox = function () {
  var textarea = (0, react_1.useRef)(null);
  var boxedExpression = (0, context_1.useBoxedExpression)();
  var allEditableCells = (0, react_1.useCallback)(
    function () {
      var _a;
      var hasEditableCell = function (cell) {
        return !!cell.querySelector(".".concat(EDITABLE_CELL));
      };
      var allCells =
        (_a = boxedExpression.editorRef.current) === null || _a === void 0
          ? void 0
          : _a.querySelectorAll(Resizer_1.CELL_CSS_SELECTOR);
      return [].slice.call(allCells).filter(hasEditableCell);
    },
    [boxedExpression.editorRef]
  );
  var findCell = (0, react_1.useCallback)(function (x, y) {
    var _a;
    var refElement = null;
    try {
      refElement = document.elementFromPoint(x, y);
      var closest =
        refElement === null || refElement === void 0 ? void 0 : refElement.closest(Resizer_1.CELL_CSS_SELECTOR);
      if (closest) {
        return closest;
      }
    } catch (e) {
      return null;
    }
    return (
      ((_a = refElement === null || refElement === void 0 ? void 0 : refElement.closest("td")) === null || _a === void 0
        ? void 0
        : _a.querySelector(Resizer_1.CELL_CSS_SELECTOR)) || null
    );
  }, []);
  var findFirstCell = (0, react_1.useCallback)(
    function (rect) {
      var x = rect.x;
      var y = rect.y;
      return findCell(x, y);
    },
    [findCell]
  );
  var findLastCell = (0, react_1.useCallback)(
    function (rect) {
      var x = rect.x + rect.width;
      var y = rect.y + rect.height;
      return findCell(x, y);
    },
    [findCell]
  );
  var lowlightCells = (0, react_1.useCallback)(
    function () {
      var _a;
      (_a = boxedExpression.editorRef.current) === null || _a === void 0
        ? void 0
        : _a.querySelectorAll(".".concat(SELECTED_CELL)).forEach(function (c) {
            return c.classList.remove(SELECTED_CELL);
          });
    },
    [boxedExpression.editorRef]
  );
  var highlightCells = (0, react_1.useCallback)(
    function (cells) {
      lowlightCells();
      cells.forEach(function (c) {
        return c.classList.add(SELECTED_CELL);
      });
    },
    [lowlightCells]
  );
  var enableSelection = (0, react_1.useCallback)(
    function (rect) {
      var _a, _b;
      if (!rect) {
        return;
      }
      var firstCell = (_a = findFirstCell(rect)) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
      var lastCell = (_b = findLastCell(rect)) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
      var xStart = (firstCell === null || firstCell === void 0 ? void 0 : firstCell.x) || rect.x;
      var xEnd = (lastCell === null || lastCell === void 0 ? void 0 : lastCell.x) || rect.x + rect.width;
      var yStart = (firstCell === null || firstCell === void 0 ? void 0 : firstCell.y) || rect.y;
      var yEnd = (lastCell === null || lastCell === void 0 ? void 0 : lastCell.y) || rect.y + rect.height;
      var selectedCells = allEditableCells().filter(function (cell) {
        var _a, _b;
        var cellRect = cell.getBoundingClientRect();
        var cellRectX = (_a = cellRect.x) !== null && _a !== void 0 ? _a : 0;
        var cellRectY = (_b = cellRect.y) !== null && _b !== void 0 ? _b : 0;
        return cellRectX >= xStart && cellRectX <= xEnd && cellRectY >= yStart && cellRectY <= yEnd;
      });
      if (textarea.current) {
        highlightCells(selectedCells);
        var rowsGroupedByY = (0, lodash_1.default)(selectedCells).groupBy(function (e) {
          return e.getBoundingClientRect().y;
        });
        var selectedValue_1 = "";
        rowsGroupedByY.forEach(function (row) {
          for (var i = 0; i < row.length; i++) {
            var value = row[i].querySelector("textarea").textContent;
            selectedValue_1 += "".concat(value);
            if (i < row.length - 1) {
              selectedValue_1 += "\t";
            }
          }
          selectedValue_1 += "\n";
        });
        textarea.current.value = selectedValue_1;
        textarea.current.focus();
        textarea.current.setSelectionRange(0, selectedValue_1.length);
      }
    },
    [findFirstCell, highlightCells, findLastCell, allEditableCells, textarea]
  );
  var disableSelection = (0, react_1.useCallback)(
    function () {
      lowlightCells();
    },
    [lowlightCells]
  );
  var disableHighlightedCells = (0, react_1.useCallback)(
    function () {
      var _a;
      var selectedCellClassName = "editable-cell--selected";
      var selectedCell =
        (_a = boxedExpression.editorRef.current) === null || _a === void 0
          ? void 0
          : _a.querySelector(".".concat(selectedCellClassName));
      selectedCell === null || selectedCell === void 0 ? void 0 : selectedCell.classList.remove(selectedCellClassName);
    },
    [boxedExpression.editorRef]
  );
  var ignoredElements = (0, react_1.useMemo)(function () {
    return [
      "pf-c-drawer__splitter",
      "pf-m-vertical",
      "pf-c-form-control",
      "pf-u-text-truncate",
      "data-type",
      "form-control",
    ];
  }, []);
  var setCellsValue = (0, react_1.useCallback)(
    function (event) {
      var _a;
      var pasteValue = event.target.value;
      var selectedCell =
        (_a = boxedExpression.editorRef.current) === null || _a === void 0
          ? void 0
          : _a.querySelector(".".concat(SELECTED_CELL));
      if (!selectedCell) {
        return;
      }
      (0, common_1.paste)(pasteValue, selectedCell, boxedExpression.editorRef.current);
      disableSelection();
    },
    [disableSelection, boxedExpression.editorRef]
  );
  return (0, react_1.useMemo)(
    function () {
      return (0, jsx_runtime_1.jsxs)(
        "div",
        __assign(
          { className: "kie-cell-selection-box" },
          {
            children: [
              (0, jsx_runtime_1.jsx)(
                _1.SelectionBox,
                { ignoredElements: ignoredElements, onDragMove: disableHighlightedCells, onDragStop: enableSelection },
                void 0
              ),
              (0, jsx_runtime_1.jsx)(
                "textarea",
                { ref: textarea, onBlur: disableSelection, onChange: setCellsValue },
                void 0
              ),
            ],
          }
        ),
        void 0
      );
    },
    [enableSelection, disableSelection, disableHighlightedCells, ignoredElements, setCellsValue]
  );
};
exports.CellSelectionBox = CellSelectionBox;
//# sourceMappingURL=CellSelectionBox.js.map

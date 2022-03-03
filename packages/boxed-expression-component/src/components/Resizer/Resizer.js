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
exports.Resizer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var _ = require("lodash");
var react_1 = require("react");
var react_resizable_1 = require("react-resizable");
var uuid_1 = require("uuid");
var context_1 = require("../../context");
var common_1 = require("./common");
var dom_1 = require("./dom");
require("./Resizer.css");
var Resizer = function (_a) {
  var children = _a.children,
    _b = _a.height,
    height = _b === void 0 ? "100%" : _b,
    minWidth = _a.minWidth,
    onHorizontalResizeStop = _a.onHorizontalResizeStop,
    width = _a.width;
  var _c = __read((0, react_1.useState)(width), 2),
    resizerWidth = _c[0],
    setResizerWidth = _c[1];
  var _d = __read((0, react_1.useState)(0), 2),
    initialResizerWidth = _d[0],
    setInitialResizerWidth = _d[1];
  var _e = __read((0, react_1.useState)([]), 2),
    cells = _e[0],
    setCells = _e[1];
  var setSupervisorHash = (0, react_1.useContext)(context_1.BoxedExpressionGlobalContext).setSupervisorHash;
  var boxedExpression = (0, context_1.useBoxedExpression)();
  var id = (0, react_1.useMemo)(function () {
    return "uuid-".concat((0, uuid_1.v4)());
  }, []);
  var resizerMinWidth = (0, react_1.useMemo)(
    function () {
      return minWidth !== null && minWidth !== void 0 ? minWidth : dom_1.DEFAULT_MIN_WIDTH;
    },
    [minWidth]
  );
  var resizerClassName = (0, react_1.useMemo)(
    function () {
      var heightClass = height === "100%" ? "height-based-on-content" : "";
      return "".concat(heightClass, " ").concat(id);
    },
    [height, id]
  );
  (0, react_1.useLayoutEffect)(
    function () {
      var _a;
      function listener(event) {
        var width = Math.round(event.detail.width);
        setResizerWidth(width);
        onHorizontalResizeStop === null || onHorizontalResizeStop === void 0 ? void 0 : onHorizontalResizeStop(width);
      }
      (_a = boxedExpression.editorRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener(id, listener);
      return function () {
        var _a;
        (_a = boxedExpression.editorRef.current) === null || _a === void 0
          ? void 0
          : _a.removeEventListener(id, listener);
      };
    },
    [id, onHorizontalResizeStop, resizerWidth, boxedExpression.editorRef]
  );
  var widthValue = (0, react_1.useCallback)(common_1.widthValue, []);
  var getApplicableCells = (0, react_1.useCallback)(function (allCells, currentCell) {
    var applicableCells = [];
    var parent = currentCell.element.closest("table");
    var currentRect = currentCell.getRect();
    var hasSameParent = function (cell) {
      return parent === null || parent === void 0 ? void 0 : parent.contains(cell.element);
    };
    var isCellParent = function (cell) {
      var _a;
      return (_a = cell.element) === null || _a === void 0 ? void 0 : _a.contains(currentCell.element);
    };
    var containsCurrent = function (cell) {
      var cellRect = cell.getRect();
      return (
        +Number(cellRect.x).toFixed(3) <= +Number(currentRect.x).toFixed(3) &&
        +Number(cellRect.right).toFixed(3) >= +Number(currentRect.right).toFixed(3)
      );
    };
    var isLastGroupColumn = function (cell) {
      if (!currentCell.isColSpanHeader()) {
        return false;
      }
      return cell.getRect().right === currentRect.right;
    };
    if (currentCell.isLastColumn()) {
      allCells
        .filter(function (cell) {
          return cell.isLastColumn();
        })
        .forEach(function (cell) {
          applicableCells.push(cell);
        });
    } else {
      var hasSomeLastColumn_1 = false;
      allCells.forEach(function (cell) {
        var hasParentRelationship = hasSameParent(cell) || isCellParent(cell);
        var shareSamePosition = containsCurrent(cell) || isLastGroupColumn(cell);
        if (hasParentRelationship && shareSamePosition) {
          applicableCells.push(cell);
          if (cell.isLastColumn()) {
            hasSomeLastColumn_1 = true;
          }
        }
      });
      if (hasSomeLastColumn_1) {
        allCells
          .filter(function (cell) {
            return cell.isLastColumn() && !hasSameParent(cell);
          })
          .forEach(function (cell) {
            applicableCells.push(cell);
          });
      }
    }
    applicableCells.forEach(function (cell) {
      cell.element.dataset.initialWidth = cell.element.style.width;
    });
    return _.uniqBy(applicableCells, function (cell) {
      return cell.getId();
    });
  }, []);
  var onResizeStart = (0, react_1.useCallback)(
    function () {
      var allCells = new dom_1.DOMSession(boxedExpression.editorRef.current).getCells();
      var currentCell = allCells.find(function (c) {
        return c.getId() === id;
      });
      var applicableCells = getApplicableCells(allCells, currentCell);
      var initialWidth = widthValue(currentCell.getRect().width);
      setCells(applicableCells);
      setInitialResizerWidth(initialWidth);
    },
    [getApplicableCells, id, widthValue, boxedExpression.editorRef]
  );
  var onResize = (0, react_1.useCallback)(
    function (_, data) {
      var newResizerWidth = parseInt(data.size.width + "");
      cells.forEach(function (cell) {
        var delta = newResizerWidth - initialResizerWidth;
        var cellElement = cell.element;
        var isSameCell = cell.getId() === id;
        if (!isSameCell) {
          var cellInitialWidth = parseInt(cellElement.dataset.initialWidth + "");
          cellElement.style.width = cellInitialWidth + delta + "px";
        }
      });
    },
    [cells, id, initialResizerWidth]
  );
  var onResizeStop = (0, react_1.useCallback)(
    function (_, data) {
      var _a;
      var newResizerWidth = widthValue(data.size.width);
      (_a = boxedExpression.boxedExpressionEditorGWTService) === null || _a === void 0 ? void 0 : _a.notifyUserAction();
      cells.forEach(function (cell) {
        var delta = newResizerWidth - initialResizerWidth;
        var cellInitialWidth = widthValue(cell.element.dataset.initialWidth);
        cell.setWidth(cellInitialWidth + delta);
      });
      setSupervisorHash("-");
    },
    [boxedExpression.boxedExpressionEditorGWTService, cells, initialResizerWidth, setSupervisorHash, widthValue]
  );
  return (0, jsx_runtime_1.jsx)(
    react_resizable_1.ResizableBox,
    __assign(
      {
        className: resizerClassName,
        width: resizerWidth,
        minConstraints: [resizerMinWidth, 0],
        height: 0,
        axis: "x",
        onResize: onResize,
        onResizeStop: onResizeStop,
        onResizeStart: onResizeStart,
        handle: (0, jsx_runtime_1.jsx)(
          "div",
          __assign(
            { className: "pf-c-drawer" },
            {
              children: (0, jsx_runtime_1.jsx)(
                "div",
                __assign(
                  { className: "pf-c-drawer__splitter pf-m-vertical" },
                  { children: (0, jsx_runtime_1.jsx)("div", { className: "pf-c-drawer__splitter-handle" }, void 0) }
                ),
                void 0
              ),
            }
          ),
          void 0
        ),
      },
      { children: children }
    ),
    void 0
  );
};
exports.Resizer = Resizer;
//# sourceMappingURL=Resizer.js.map

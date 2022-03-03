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
exports.SelectionBox = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./SelectionBox.css");
var context_1 = require("../../context");
var SelectionBox = function (_a) {
  var ignoredElements = _a.ignoredElements,
    onDragStart = _a.onDragStart,
    onDragMove = _a.onDragMove,
    onDragStop = _a.onDragStop;
  var _b = __read((0, react_1.useState)(null), 2),
    selectionStart = _b[0],
    setSelectionStart = _b[1];
  var _c = __read((0, react_1.useState)(null), 2),
    selectionRect = _c[0],
    setSelectionRect = _c[1];
  var boxedExpression = (0, context_1.useBoxedExpression)();
  var pxValue = (0, react_1.useCallback)(function (value) {
    return "".concat(value, "px");
  }, []);
  var selectionBoxStyle = (0, react_1.useMemo)(
    function () {
      if (selectionRect) {
        return {
          width: pxValue(selectionRect.width),
          height: pxValue(selectionRect.height),
          top: pxValue(selectionRect.y),
          left: pxValue(selectionRect.x),
        };
      }
      return {};
    },
    [pxValue, selectionRect]
  );
  var getCoordinate = (0, react_1.useCallback)(function (event) {
    if ("touches" in event) {
      return {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      };
    }
    return {
      x: event.clientX,
      y: event.clientY,
    };
  }, []);
  var moveHandler = (0, react_1.useCallback)(
    function (event) {
      if (!selectionStart) {
        return;
      }
      onDragMove === null || onDragMove === void 0 ? void 0 : onDragMove();
      var mouseCoordinate = getCoordinate(event);
      var x = Math.min(selectionStart.x, mouseCoordinate.x);
      var y = Math.min(selectionStart.y, mouseCoordinate.y);
      var width = Math.abs(mouseCoordinate.x - selectionStart.x);
      var height = Math.abs(mouseCoordinate.y - selectionStart.y);
      setSelectionRect({ x: x, y: y, width: width, height: height });
    },
    [selectionStart, setSelectionRect, getCoordinate, onDragMove]
  );
  var downHandler = (0, react_1.useCallback)(
    function (event) {
      var targetElement = event.target;
      var isIgnoredTarget =
        (ignoredElements === null || ignoredElements === void 0
          ? void 0
          : ignoredElements.some(function (e) {
              return targetElement.classList.contains(e);
            })) || false;
      if (isIgnoredTarget) {
        return;
      }
      var startPosition = getCoordinate(event);
      setSelectionStart(startPosition);
      onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(startPosition);
    },
    [setSelectionStart, ignoredElements, getCoordinate, onDragStart]
  );
  var upHandler = (0, react_1.useCallback)(
    function () {
      onDragStop === null || onDragStop === void 0 ? void 0 : onDragStop(selectionRect);
      setSelectionStart(null);
      setSelectionRect(null);
    },
    [selectionRect, setSelectionStart, setSelectionRect, onDragStop]
  );
  (0, react_1.useLayoutEffect)(
    function () {
      var _a, _b, _c, _d, _e, _f;
      var mouseMoveType = "mousemove";
      var mouseDownType = "mousedown";
      var mouseUpType = "mouseup";
      var touchMoveType = "touchmove";
      var touchStartType = "touchstart";
      var touchEndType = "touchend";
      (_a = boxedExpression.editorRef.current) === null || _a === void 0
        ? void 0
        : _a.addEventListener(mouseMoveType, moveHandler);
      (_b = boxedExpression.editorRef.current) === null || _b === void 0
        ? void 0
        : _b.addEventListener(mouseDownType, downHandler);
      (_c = boxedExpression.editorRef.current) === null || _c === void 0
        ? void 0
        : _c.addEventListener(mouseUpType, upHandler);
      (_d = boxedExpression.editorRef.current) === null || _d === void 0
        ? void 0
        : _d.addEventListener(touchMoveType, moveHandler);
      (_e = boxedExpression.editorRef.current) === null || _e === void 0
        ? void 0
        : _e.addEventListener(touchStartType, downHandler);
      (_f = boxedExpression.editorRef.current) === null || _f === void 0
        ? void 0
        : _f.addEventListener(touchEndType, upHandler);
      return function () {
        var _a, _b, _c, _d, _e, _f;
        (_a = boxedExpression.editorRef.current) === null || _a === void 0
          ? void 0
          : _a.removeEventListener(mouseMoveType, moveHandler);
        (_b = boxedExpression.editorRef.current) === null || _b === void 0
          ? void 0
          : _b.removeEventListener(mouseDownType, downHandler);
        (_c = boxedExpression.editorRef.current) === null || _c === void 0
          ? void 0
          : _c.removeEventListener(mouseUpType, upHandler);
        (_d = boxedExpression.editorRef.current) === null || _d === void 0
          ? void 0
          : _d.removeEventListener(touchMoveType, moveHandler);
        (_e = boxedExpression.editorRef.current) === null || _e === void 0
          ? void 0
          : _e.removeEventListener(touchStartType, downHandler);
        (_f = boxedExpression.editorRef.current) === null || _f === void 0
          ? void 0
          : _f.removeEventListener(touchEndType, upHandler);
      };
    },
    [moveHandler, downHandler, upHandler, boxedExpression.editorRef]
  );
  return (0, jsx_runtime_1.jsx)(
    "div",
    { style: __assign({}, selectionBoxStyle), className: "kie-selection-box" },
    void 0
  );
};
exports.SelectionBox = SelectionBox;
//# sourceMappingURL=SelectionBox.js.map

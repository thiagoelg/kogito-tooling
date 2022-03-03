"use strict";
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
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
var _ = require("lodash");
var common_1 = require("../common");
var RESIZER_PADDING = 14;
var BORDER = 1;
var Cell = (function () {
  function Cell(element, children, depth, editorElement) {
    this.element = element;
    this.children = children;
    this.depth = depth;
    this.editorElement = editorElement;
  }
  Cell.prototype.getId = function () {
    if (!this.id) {
      this.id =
        _.first(
          [].slice.call(this.element.classList).filter(function (c) {
            return c.match(/uuid-/g);
          })
        ) || "";
    }
    return this.id;
  };
  Cell.prototype.getRect = function () {
    if (!this.rect) {
      this.rect = this.element.getBoundingClientRect();
    }
    return this.rect;
  };
  Cell.prototype.isLastColumn = function () {
    var _a;
    if (!this.lastColumn) {
      this.lastColumn =
        ((_a = this.getParentRow()) === null || _a === void 0 ? void 0 : _a.lastChild) ===
        this.element.closest("th, td");
    }
    return this.lastColumn;
  };
  Cell.prototype.setWidth = function (width) {
    var cellWidth = (0, common_1.widthValue)(width);
    (0, common_1.notifyCell)(this.getId(), cellWidth, this.editorElement);
    this.element.style.width = cellWidth + "px";
  };
  Cell.prototype.refreshWidthAsParent = function () {
    if (this.children.length > 0) {
      this.setWidth(this.fetchChildWidth() + RESIZER_PADDING);
    }
  };
  Cell.prototype.refreshWidthAsLastColumn = function () {
    if (!this.isLastColumn()) {
      return;
    }
    var parentRect = this.getParentRow().getBoundingClientRect();
    if (parentRect) {
      this.setWidth(Math.round(parentRect.right) - Math.round(this.getRect().x) - BORDER);
    }
  };
  Cell.prototype.refreshWidthAsLastGroupColumn = function () {
    var _a, _b;
    if (!this.isColSpanHeader()) {
      return;
    }
    var refSibling =
      (_b = (_a = this.getParent()) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0
        ? void 0
        : _b.nextSibling;
    if (!refSibling) {
      return;
    }
    var children = [].slice.call(refSibling.querySelectorAll(".".concat(this.getHeaderType())));
    var childrenRects = children.map(function (c) {
      return c.getBoundingClientRect();
    });
    var x = Math.min.apply(
      Math,
      __spreadArray(
        [],
        __read(
          childrenRects.map(function (c) {
            return c.x;
          })
        ),
        false
      )
    );
    var right = Math.max.apply(
      Math,
      __spreadArray(
        [],
        __read(
          childrenRects.map(function (c) {
            return c.right;
          })
        ),
        false
      )
    );
    if (isFinite(x) && isFinite(right)) {
      this.setWidth(right - x - BORDER * 2);
    }
  };
  Cell.prototype.refreshWidthAsLastGroupColumnRunner = function (properties) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    if (
      !this.isColSpanHeader() &&
      !((_a = this.getParentRow()) === null || _a === void 0 ? void 0 : _a.classList.contains("table-row"))
    ) {
      return;
    }
    var refSibling =
      (_c = (_b = this.getParent()) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0
        ? void 0
        : _c.nextSibling;
    if (
      !refSibling ||
      ((_e = (_d = refSibling) === null || _d === void 0 ? void 0 : _d.classList) === null || _e === void 0
        ? void 0
        : _e.contains("table-row"))
    ) {
      refSibling = (_f = document.querySelector('[role="row"]')) === null || _f === void 0 ? void 0 : _f.nextSibling;
    }
    var headerElements =
      (_h =
        (_g = refSibling.parentNode) === null || _g === void 0 ? void 0 : _g.querySelectorAll(".colspan-header")) !==
        null && _h !== void 0
        ? _h
        : [];
    var headerSize = Array.from(headerElements).reduce(function (acc, th) {
      return acc + (th.colSpan || 1);
    }, 0);
    var children = this.isColSpanHeader()
      ? __spreadArray(
          __spreadArray([], __read(Array.from(refSibling.querySelectorAll(".input"))), false),
          __read(Array.from(refSibling.querySelectorAll(".output"))),
          false
        )
      : [].slice.call(refSibling.querySelectorAll(".data-cell"));
    var colSpan =
      (_k = (_j = this.element) === null || _j === void 0 ? void 0 : _j.parentNode) === null || _k === void 0
        ? void 0
        : _k.colSpan;
    if (colSpan > 1) {
      var firstReact = children[properties.cellIndex].getBoundingClientRect();
      var lastReact = children[properties.cellIndex + colSpan - 1].getBoundingClientRect();
      this.setWidth(lastReact.right - firstReact.x - BORDER * 2);
      properties.cellIndex += colSpan - 1;
    } else {
      var childrenA = children[properties.cellIndex];
      var childrenRects = childrenA === null || childrenA === void 0 ? void 0 : childrenA.getBoundingClientRect();
      if (childrenRects) {
        this.setWidth(childrenRects.width - BORDER * 2);
      } else {
        var entries = __spreadArray(
          __spreadArray(
            [],
            __read(Array.from((_l = refSibling) === null || _l === void 0 ? void 0 : _l.querySelectorAll(".input"))),
            false
          ),
          __read(Array.from((_m = refSibling) === null || _m === void 0 ? void 0 : _m.querySelectorAll(".output"))),
          false
        );
        var element =
          (_o = entries[(properties.originalIndex - headerSize - headerElements.length) % entries.length]) === null ||
          _o === void 0
            ? void 0
            : _o.getBoundingClientRect();
        this.setWidth(element.width - BORDER * 2);
      }
    }
  };
  Cell.prototype.isColSpanHeader = function () {
    var _a;
    return (
      ((_a = this.getParent()) === null || _a === void 0 ? void 0 : _a.classList.contains("colspan-header")) || false
    );
  };
  Cell.prototype.getHeaderType = function () {
    var _a;
    var cssClasses = ((_a = this.getParent()) === null || _a === void 0 ? void 0 : _a.classList) || [];
    if (cssClasses.contains("input")) {
      return "input";
    }
    if (cssClasses.contains("output")) {
      return "output";
    }
    return "annotation";
  };
  Cell.prototype.getParent = function () {
    return this.element.parentElement;
  };
  Cell.prototype.getParentRow = function () {
    if (!this.parentRow) {
      this.parentRow = this.element.closest("tr");
    }
    return this.parentRow;
  };
  Cell.prototype.fetchChildWidth = function () {
    var thead = this.element.querySelector("thead, tbody");
    return (0, common_1.widthValue)(thead === null || thead === void 0 ? void 0 : thead.getBoundingClientRect().width);
  };
  return Cell;
})();
exports.Cell = Cell;
//# sourceMappingURL=Cell.js.map

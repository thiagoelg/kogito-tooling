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
exports.firstIterableValue =
  exports.iterableValue =
  exports.pasteOnTable =
  exports.paste =
  exports.PASTE_OPERATION =
    void 0;
var _1 = require(".");
var api_1 = require("../../../api");
var DASH_SYMBOL = "-";
exports.PASTE_OPERATION = "PASTE_OPERATION";
var paste = function (pasteValue, reference, editorElement) {
  var cell = reference.closest("td");
  var coordinates = (0, _1.getCellCoordinates)(cell);
  var detail = __assign(__assign({}, coordinates), { pasteValue: pasteValue, type: exports.PASTE_OPERATION });
  var eventId = (0, _1.getCellTableId)(cell);
  editorElement.dispatchEvent(new CustomEvent(eventId, { detail: detail }));
};
exports.paste = paste;
var pasteOnTable = function (pasteValue, rows, rowFactory, x, y) {
  if (x === void 0) {
    x = 0;
  }
  if (y === void 0) {
    y = 0;
  }
  var newRows = __spreadArray([], __read(rows), false);
  var colsByIndex = Object.keys(rows[0]);
  var paste = (0, exports.iterableValue)(pasteValue);
  var updateStringValue = function (rows, row, colName, value) {
    rows[row][colName] = value;
  };
  var updateObjectValue = function (rows, row, colName, value) {
    var currentElement = rows[row][colName];
    if (typeof currentElement !== "object") {
      return;
    }
    currentElement.content = value;
    currentElement.logicType = api_1.LogicType.LiteralExpression;
  };
  var hasAnyObject = function (rows) {
    if (rows.length > 0) {
      var cols = Object.keys(rows[0]);
      return cols.includes("entryExpression");
    }
    return false;
  };
  for (var i = 0; i < paste.length; i++) {
    var row = paste[i];
    if (i + y >= newRows.length) {
      newRows.push(rowFactory());
    }
    for (var j = 0; j < row.length; j++) {
      var colName = colsByIndex[j + x];
      var row_1 = i + y;
      var updateValue = hasAnyObject(newRows) ? updateObjectValue : updateStringValue;
      updateValue(newRows, row_1, colName, paste[i][j]);
    }
  }
  return newRows;
};
exports.pasteOnTable = pasteOnTable;
var iterableValue = function (value) {
  var iterable = value
    .trim()
    .split("\n")
    .map(function (strRow) {
      var trimedValue = strRow.trim();
      return trimedValue === "" ? [] : trimedValue.split("\t");
    });
  ensureSameNumberOfColumns(iterable);
  return iterable;
};
exports.iterableValue = iterableValue;
var firstIterableValue = function (value) {
  var rows = (0, exports.iterableValue)(value);
  if (rows.length > 0) {
    var cols = rows[0];
    if (cols.length > 0) {
      return cols[0];
    }
  }
  return "";
};
exports.firstIterableValue = firstIterableValue;
var ensureSameNumberOfColumns = function (iterable) {
  var maxNumberOfColumns = Math.max.apply(
    Math,
    __spreadArray(
      [],
      __read(
        iterable.map(function (i) {
          return i.length;
        })
      ),
      false
    )
  );
  iterable.forEach(function (row) {
    while (row.length < maxNumberOfColumns) {
      row.push(DASH_SYMBOL);
    }
  });
};
//# sourceMappingURL=CopyAndPasteUtils.js.map

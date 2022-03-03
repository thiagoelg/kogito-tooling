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
exports.getContextEntryInfoCell = exports.ContextEntryInfoCell = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ContextEntryInfo_1 = require("./ContextEntryInfo");
var _ = require("lodash");
var ContextEntryInfoCell = function (_a) {
  var data = _a.data,
    rowIndex = _a.rowIndex,
    onRowUpdate = _a.onRowUpdate,
    editInfoPopoverLabel = _a.editInfoPopoverLabel;
  var contextEntry = (0, react_1.useMemo)(
    function () {
      return data[rowIndex];
    },
    [data, rowIndex]
  );
  var entryInfo = (0, react_1.useMemo)(
    function () {
      return contextEntry.entryInfo;
    },
    [contextEntry.entryInfo]
  );
  var entryExpression = (0, react_1.useMemo)(
    function () {
      return contextEntry.entryExpression;
    },
    [contextEntry.entryExpression]
  );
  var onContextEntryUpdate = (0, react_1.useCallback)(
    function (name, dataType) {
      var updatedExpression = __assign({}, entryExpression);
      if (contextEntry.nameAndDataTypeSynchronized && _.size(name) && _.size(dataType)) {
        updatedExpression.name = name;
        updatedExpression.dataType = dataType;
      }
      onRowUpdate(
        rowIndex,
        __assign(__assign({}, contextEntry), {
          entryExpression: updatedExpression,
          entryInfo: { id: entryInfo.id, name: name, dataType: dataType },
        })
      );
    },
    [entryExpression, contextEntry, rowIndex, onRowUpdate, entryInfo.id]
  );
  return (0, jsx_runtime_1.jsx)(
    "div",
    __assign(
      { className: "context-entry-info-cell" },
      {
        children: (0, jsx_runtime_1.jsx)(
          ContextEntryInfo_1.ContextEntryInfo,
          {
            id: entryInfo.id,
            name: entryInfo.name,
            dataType: entryInfo.dataType,
            onContextEntryUpdate: onContextEntryUpdate,
            editInfoPopoverLabel: editInfoPopoverLabel,
          },
          void 0
        ),
      }
    ),
    void 0
  );
};
exports.ContextEntryInfoCell = ContextEntryInfoCell;
var getContextEntryInfoCell = function (editInfoPopoverLabel) {
  return function (props) {
    return (0, exports.ContextEntryInfoCell)(
      __assign(__assign({}, props), { editInfoPopoverLabel: editInfoPopoverLabel })
    );
  };
};
exports.getContextEntryInfoCell = getContextEntryInfoCell;
//# sourceMappingURL=ContextEntryInfoCell.js.map

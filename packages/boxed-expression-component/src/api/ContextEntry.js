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
exports.resetEntry =
  exports.getEntryKey =
  exports.generateNextAvailableEntryName =
  exports.getHandlerConfiguration =
  exports.DEFAULT_ENTRY_EXPRESSION_MIN_WIDTH =
  exports.DEFAULT_ENTRY_INFO_MIN_WIDTH =
    void 0;
var _ = require("lodash");
var Table_1 = require("./Table");
exports.DEFAULT_ENTRY_INFO_MIN_WIDTH = 150;
exports.DEFAULT_ENTRY_EXPRESSION_MIN_WIDTH = 370;
var getHandlerConfiguration = function (i18n, groupName) {
  return [
    {
      group: groupName,
      items: [
        { name: i18n.rowOperations.insertAbove, type: Table_1.TableOperation.RowInsertAbove },
        { name: i18n.rowOperations.insertBelow, type: Table_1.TableOperation.RowInsertBelow },
        { name: i18n.rowOperations.delete, type: Table_1.TableOperation.RowDelete },
        { name: i18n.rowOperations.clear, type: Table_1.TableOperation.RowClear },
      ],
    },
  ];
};
exports.getHandlerConfiguration = getHandlerConfiguration;
var generateNextAvailableEntryName = function (entryInfos, namePrefix, lastIndex) {
  if (lastIndex === void 0) {
    lastIndex = entryInfos.length;
  }
  var candidateName = "".concat(namePrefix, "-").concat(lastIndex === 0 ? 1 : lastIndex);
  var entryWithCandidateName = _.find(entryInfos, { name: candidateName });
  return entryWithCandidateName
    ? (0, exports.generateNextAvailableEntryName)(entryInfos, namePrefix, lastIndex + 1)
    : candidateName;
};
exports.generateNextAvailableEntryName = generateNextAvailableEntryName;
var getEntryKey = function (row) {
  var _a;
  var entryRecord = row.original;
  return (_a = entryRecord.entryInfo.id) !== null && _a !== void 0 ? _a : row.original.id;
};
exports.getEntryKey = getEntryKey;
function resetEntry(row) {
  return __assign(__assign({}, row), { entryExpression: { id: row.entryExpression.id } });
}
exports.resetEntry = resetEntry;
//# sourceMappingURL=ContextEntry.js.map

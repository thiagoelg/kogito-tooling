"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableOperation = exports.TableHeaderVisibility = void 0;
var TableHeaderVisibility;
(function (TableHeaderVisibility) {
  TableHeaderVisibility[(TableHeaderVisibility["Full"] = 0)] = "Full";
  TableHeaderVisibility[(TableHeaderVisibility["LastLevel"] = 1)] = "LastLevel";
  TableHeaderVisibility[(TableHeaderVisibility["SecondToLastLevel"] = 2)] = "SecondToLastLevel";
  TableHeaderVisibility[(TableHeaderVisibility["None"] = 3)] = "None";
})((TableHeaderVisibility = exports.TableHeaderVisibility || (exports.TableHeaderVisibility = {})));
var TableOperation;
(function (TableOperation) {
  TableOperation[(TableOperation["ColumnInsertLeft"] = 0)] = "ColumnInsertLeft";
  TableOperation[(TableOperation["ColumnInsertRight"] = 1)] = "ColumnInsertRight";
  TableOperation[(TableOperation["ColumnDelete"] = 2)] = "ColumnDelete";
  TableOperation[(TableOperation["RowInsertAbove"] = 3)] = "RowInsertAbove";
  TableOperation[(TableOperation["RowInsertBelow"] = 4)] = "RowInsertBelow";
  TableOperation[(TableOperation["RowDelete"] = 5)] = "RowDelete";
  TableOperation[(TableOperation["RowClear"] = 6)] = "RowClear";
  TableOperation[(TableOperation["RowDuplicate"] = 7)] = "RowDuplicate";
})((TableOperation = exports.TableOperation || (exports.TableOperation = {})));
//# sourceMappingURL=Table.js.map

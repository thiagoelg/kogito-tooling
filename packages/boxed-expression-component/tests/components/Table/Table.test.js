"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.openContextMenu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var _ = require("lodash");
var test_utils_1 = require("react-dom/test-utils");
var common_1 = require("@kie-tools/boxed-expression-component/dist/components/Table/common");
var boxed_expression_component_1 = require("@kie-tools/boxed-expression-component");
var boxed_expression_component_2 = require("@kie-tools/boxed-expression-component");
var test_utils_2 = require("../test-utils");
var Resizer_1 = require("@kie-tools/boxed-expression-component/dist/components/Resizer");
jest.useFakeTimers();
var EXPRESSION_COLUMN_HEADER = "[data-ouia-component-type='expression-column-header']";
var EXPRESSION_COLUMN_HEADER_CELL_INFO = "[data-ouia-component-type='expression-column-header-cell-info']";
var EXPRESSION_POPOVER_MENU = "[data-ouia-component-id='expression-popover-menu']";
var EXPRESSION_POPOVER_MENU_TITLE = "[data-ouia-component-id='expression-popover-menu-title']";
var EXPRESSION_TABLE_HANDLER_MENU = "[data-ouia-component-id='expression-table-handler-menu']";
var expressionRow = function (index) {
  return "[data-ouia-component-id='expression-row-" + index + "']";
};
var expressionCell = function (rowIndex, columnIndex) {
  return (
    "[data-ouia-component-id='expression-row-" +
    rowIndex +
    "'] [data-ouia-component-id='expression-column-" +
    columnIndex +
    "']"
  );
};
var expressionTableHandlerMenuEntry = function (menuEntry) {
  return "[data-ouia-component-id='expression-table-handler-menu-" + menuEntry + "']";
};
var assertHeaderCell = function (container, expectedCells, content) {
  expect(container.querySelector(".table-component table thead")).toBeTruthy();
  expect(container.querySelector(".table-component table thead tr")).toBeTruthy();
  expect(container.querySelectorAll(EXPRESSION_COLUMN_HEADER).length).toBe(expectedCells);
  expect(container.querySelectorAll(EXPRESSION_COLUMN_HEADER)[expectedCells - 1].innerHTML).toContain(content);
};
describe("Table tests", function () {
  var columnName = "column-1";
  var handlerConfiguration = [];
  describe("when rendering it", function () {
    test("should show a table element", function () {
      var container = (0, react_1.render)(
        (0, test_utils_2.usingTestingBoxedExpressionI18nContext)(
          (0, test_utils_2.usingTestingBoxedExpressionProviderContext)(
            (0, jsx_runtime_1.jsx)(
              boxed_expression_component_2.Table,
              {
                columns: [],
                rows: [],
                onColumnsUpdate: _.identity,
                onRowsUpdate: _.identity,
                handlerConfiguration: handlerConfiguration,
              },
              void 0
            )
          ).wrapper
        ).wrapper
      ).container;
      expect(container.querySelector(".table-component table")).toBeTruthy();
    });
    test("should show a table head with only one default column (#)", function () {
      var container = (0, react_1.render)(
        (0, test_utils_2.usingTestingBoxedExpressionI18nContext)(
          (0, test_utils_2.usingTestingBoxedExpressionProviderContext)(
            (0, jsx_runtime_1.jsx)(
              boxed_expression_component_2.Table,
              {
                columns: [],
                rows: [],
                onColumnsUpdate: _.identity,
                onRowsUpdate: _.identity,
                handlerConfiguration: handlerConfiguration,
              },
              void 0
            )
          ).wrapper
        ).wrapper
      ).container;
      assertHeaderCell(container, 1, "#");
    });
    test("should show a table head with one configured column, rendering its label", function () {
      var container = (0, react_1.render)(
        (0, test_utils_2.usingTestingBoxedExpressionI18nContext)(
          (0, test_utils_2.usingTestingBoxedExpressionProviderContext)(
            (0, jsx_runtime_1.jsx)(
              boxed_expression_component_2.Table,
              {
                columns: [
                  {
                    accessor: columnName,
                    label: columnName,
                    dataType: boxed_expression_component_1.DataType.Undefined,
                  },
                ],
                rows: [],
                onColumnsUpdate: _.identity,
                onRowsUpdate: _.identity,
                handlerConfiguration: handlerConfiguration,
              },
              void 0
            )
          ).wrapper
        ).wrapper
      ).container;
      assertHeaderCell(container, 2, columnName);
    });
    test("should show a table head with one configured column, rendering its custom element", function () {
      var customElementContent = "Custom Element";
      var headerCellElement = (0, jsx_runtime_1.jsxs)("div", { children: ["`$", customElementContent, "`"] }, void 0);
      var container = (0, react_1.render)(
        (0, test_utils_2.usingTestingBoxedExpressionI18nContext)(
          (0, test_utils_2.usingTestingBoxedExpressionProviderContext)(
            (0, jsx_runtime_1.jsx)(
              boxed_expression_component_2.Table,
              {
                columns: [
                  {
                    accessor: columnName,
                    headerCellElement: headerCellElement,
                    dataType: boxed_expression_component_1.DataType.Undefined,
                  },
                ],
                rows: [],
                onColumnsUpdate: _.identity,
                onRowsUpdate: _.identity,
                handlerConfiguration: handlerConfiguration,
              },
              void 0
            )
          ).wrapper
        ).wrapper
      ).container;
      assertHeaderCell(container, 2, customElementContent);
    });
    test("should show a table body with no rows", function () {
      var container = (0, react_1.render)(
        (0, test_utils_2.usingTestingBoxedExpressionI18nContext)(
          (0, test_utils_2.usingTestingBoxedExpressionProviderContext)(
            (0, jsx_runtime_1.jsx)(
              boxed_expression_component_2.Table,
              {
                columns: [],
                rows: [],
                onColumnsUpdate: _.identity,
                onRowsUpdate: _.identity,
                handlerConfiguration: handlerConfiguration,
              },
              void 0
            )
          ).wrapper
        ).wrapper
      ).container;
      expect(container.querySelector(".table-component table tbody")).toBeTruthy();
      expect(container.querySelector(".table-component table tbody tr")).toBeFalsy();
    });
    test("should show a table body with one configured row", function () {
      var row = {};
      var cellValue = "cell value";
      row[columnName] = cellValue;
      var rows = [row];
      var container = (0, react_1.render)(
        (0, test_utils_2.usingTestingBoxedExpressionI18nContext)(
          (0, test_utils_2.usingTestingBoxedExpressionProviderContext)(
            (0, jsx_runtime_1.jsx)(
              boxed_expression_component_2.Table,
              {
                columns: [{ accessor: columnName, dataType: boxed_expression_component_1.DataType.Undefined }],
                rows: rows,
                onColumnsUpdate: _.identity,
                onRowsUpdate: _.identity,
                handlerConfiguration: handlerConfiguration,
              },
              void 0
            )
          ).wrapper
        ).wrapper
      ).container;
      expect(container.querySelector(".table-component table tbody")).toBeTruthy();
      expect(container.querySelector(expressionRow(0))).toBeTruthy();
      expect(container.querySelectorAll(expressionRow(0) + " td")).toHaveLength(2);
      expect(container.querySelector(expressionCell(0, 0)).innerHTML).toContain("1");
      expect(container.querySelector(expressionCell(0, 1)).innerHTML).toContain(cellValue);
    });
  });
  describe("when interacting with header", function () {
    test("should render popover with column name and dataType, when clicking on header cell", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var editRelationLabel, _a, container, baseElement;
        var _b;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              editRelationLabel = "Edit Relation";
              (_a = (0, react_1.render)(
                (0, test_utils_2.usingTestingBoxedExpressionI18nContext)(
                  (0, test_utils_2.usingTestingBoxedExpressionProviderContext)(
                    (0, jsx_runtime_1.jsx)(
                      boxed_expression_component_2.Table,
                      {
                        editColumnLabel: editRelationLabel,
                        columns: [
                          {
                            label: columnName,
                            accessor: columnName,
                            dataType: boxed_expression_component_1.DataType.Boolean,
                          },
                        ],
                        rows: [],
                        onColumnsUpdate: _.identity,
                        onRowsUpdate: _.identity,
                        handlerConfiguration: handlerConfiguration,
                      },
                      void 0
                    )
                  ).wrapper
                ).wrapper
              )),
                (container = _a.container),
                (baseElement = _a.baseElement);
              return [
                4,
                (0, test_utils_2.activateNameAndDataTypePopover)(
                  container.querySelectorAll(EXPRESSION_COLUMN_HEADER_CELL_INFO)[0]
                ),
              ];
            case 1:
              _c.sent();
              expect(baseElement.querySelector(EXPRESSION_POPOVER_MENU)).toBeTruthy();
              expect(
                (_b = baseElement.querySelector(EXPRESSION_POPOVER_MENU_TITLE)) === null || _b === void 0
                  ? void 0
                  : _b.innerHTML
              ).toBe(editRelationLabel);
              expect(baseElement.querySelector(test_utils_2.EDIT_EXPRESSION_NAME).value).toBe(columnName);
              expect(baseElement.querySelector(test_utils_2.EDIT_EXPRESSION_DATA_TYPE).textContent).toBe(
                boxed_expression_component_1.DataType.Boolean
              );
              return [2];
          }
        });
      });
    });
    test("should trigger onColumnUpdate, when changing column name via popover", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var columnId, newColumnName, onColumnUpdate, mockedOnColumnUpdate, _a, container, baseElement;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              columnId = "column-id";
              newColumnName = "changed";
              onColumnUpdate = function (_a) {
                var columns = _a.columns;
                _.identity(columns);
              };
              mockedOnColumnUpdate = jest.fn(onColumnUpdate);
              (_a = (0, react_1.render)(
                (0, test_utils_2.usingTestingBoxedExpressionI18nContext)(
                  (0, test_utils_2.usingTestingBoxedExpressionProviderContext)(
                    (0, jsx_runtime_1.jsx)(
                      boxed_expression_component_2.Table,
                      {
                        columns: [
                          {
                            label: columnName,
                            accessor: columnId,
                            dataType: boxed_expression_component_1.DataType.Boolean,
                          },
                        ],
                        rows: [],
                        onColumnsUpdate: mockedOnColumnUpdate,
                        onRowsUpdate: _.identity,
                        handlerConfiguration: handlerConfiguration,
                      },
                      void 0
                    )
                  ).wrapper
                ).wrapper
              )),
                (container = _a.container),
                (baseElement = _a.baseElement);
              return [
                4,
                (0, test_utils_2.updateElementViaPopover)(
                  container.querySelectorAll(EXPRESSION_COLUMN_HEADER_CELL_INFO)[0],
                  baseElement,
                  test_utils_2.EDIT_EXPRESSION_NAME,
                  newColumnName
                ),
              ];
            case 1:
              _b.sent();
              expect(mockedOnColumnUpdate).toHaveBeenCalled();
              expect(mockedOnColumnUpdate).toHaveBeenCalledWith({
                columns: [
                  { label: newColumnName, accessor: columnId, dataType: boxed_expression_component_1.DataType.Boolean },
                ],
                columnIndex: 0,
              });
              return [2];
          }
        });
      });
    });
    test("should trigger boxedExpressionEditorGWTService.selectObject, when clicking on header cell", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, boxedExpressionEditorGWTService, mockedSelectObject, container;
        return __generator(this, function (_b) {
          (_a = mockBoxedExpressionEditorGWTService()),
            (boxedExpressionEditorGWTService = _a.boxedExpressionEditorGWTService),
            (mockedSelectObject = _a.mockedSelectObject);
          container = (0, react_1.render)(
            (0, test_utils_2.usingTestingBoxedExpressionI18nContext)(
              (0, test_utils_2.usingTestingBoxedExpressionProviderContext)(
                (0, jsx_runtime_1.jsx)(
                  boxed_expression_component_2.Table,
                  {
                    columns: [
                      {
                        label: columnName,
                        accessor: columnName,
                        dataType: boxed_expression_component_1.DataType.Undefined,
                      },
                    ],
                    rows: [],
                  },
                  void 0
                ),
                { boxedExpressionEditorGWTService: boxedExpressionEditorGWTService }
              ).wrapper
            ).wrapper
          ).container;
          react_1.fireEvent.click(container.querySelectorAll(EXPRESSION_COLUMN_HEADER_CELL_INFO)[0]);
          expect(mockedSelectObject).toHaveBeenLastCalledWith(columnName);
          return [2];
        });
      });
    });
  });
  describe("when interacting with body", function () {
    test("should trigger onRowsUpdate, when changing cell value", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var row, newRow, rowValue, newRowValue, columns, orRowsUpdate, mockedOnRowsUpdate, container, textarea;
        return __generator(this, function (_a) {
          row = {};
          newRow = {};
          rowValue = "value";
          newRowValue = "new value";
          row[columnName] = rowValue;
          newRow[columnName] = newRowValue;
          columns = [
            { label: columnName, accessor: columnName, dataType: boxed_expression_component_1.DataType.Boolean },
          ];
          row[columnName] = "value";
          orRowsUpdate = function (_a) {
            var rows = _a.rows;
            _.identity(rows);
          };
          mockedOnRowsUpdate = jest.fn(orRowsUpdate);
          container = (0, react_1.render)(
            (0, test_utils_2.usingTestingBoxedExpressionI18nContext)(
              (0, test_utils_2.usingTestingBoxedExpressionProviderContext)(
                (0, jsx_runtime_1.jsx)(
                  boxed_expression_component_2.Table,
                  {
                    columns: columns,
                    rows: [row],
                    onColumnsUpdate: _.identity,
                    onRowsUpdate: mockedOnRowsUpdate,
                    handlerConfiguration: handlerConfiguration,
                  },
                  void 0
                )
              ).wrapper
            ).wrapper
          ).container;
          textarea = container.querySelector("table tbody tr td textarea");
          react_1.fireEvent.change(textarea, { target: { value: "".concat(newRowValue) } });
          expect(mockedOnRowsUpdate).toHaveBeenCalled();
          expect(mockedOnRowsUpdate).toHaveBeenCalledWith({
            rows: [expect.objectContaining(newRow)],
            columns: columns,
          });
          return [2];
        });
      });
    });
    test("should trigger boxedExpressionEditorGWTService.selectObject, when clicking on body cell", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var _a, boxedExpressionEditorGWTService, mockedSelectObject, id, container;
        return __generator(this, function (_b) {
          (_a = mockBoxedExpressionEditorGWTService()),
            (boxedExpressionEditorGWTService = _a.boxedExpressionEditorGWTService),
            (mockedSelectObject = _a.mockedSelectObject);
          id = "row-id";
          container = (0, react_1.render)(
            (0, test_utils_2.usingTestingBoxedExpressionI18nContext)(
              (0, test_utils_2.usingTestingBoxedExpressionProviderContext)(
                (0, jsx_runtime_1.jsx)(
                  boxed_expression_component_2.Table,
                  {
                    columns: [
                      {
                        label: columnName,
                        accessor: columnName,
                        dataType: boxed_expression_component_1.DataType.Undefined,
                      },
                    ],
                    rows: [{ id: id, columnName: "" }],
                  },
                  void 0
                ),
                { boxedExpressionEditorGWTService: boxedExpressionEditorGWTService }
              ).wrapper
            ).wrapper
          ).container;
          react_1.fireEvent.click(container.querySelector("table tbody tr td"));
          expect(mockedSelectObject).toHaveBeenLastCalledWith(id);
          return [2];
        });
      });
    });
  });
  describe("when users paste a value", function () {
    test("should trigger onRowsUpdate", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var orRowsUpdate, mockedOnRowsUpdate, row, newRow, rowValue, newRowValue, container;
        var _a;
        return __generator(this, function (_b) {
          orRowsUpdate = function (_a) {
            var rows = _a.rows;
            _.identity(rows);
          };
          mockedOnRowsUpdate = jest.fn(orRowsUpdate);
          row = {};
          newRow = {};
          rowValue = "value";
          newRowValue = "new value";
          row[columnName] = rowValue;
          newRow[columnName] = newRowValue;
          row[columnName] = "value";
          container = (0, react_1.render)(
            (0, test_utils_2.usingTestingBoxedExpressionI18nContext)(
              (0, test_utils_2.usingTestingBoxedExpressionProviderContext)(
                (0, jsx_runtime_1.jsx)(
                  boxed_expression_component_2.Table,
                  {
                    columns: [
                      {
                        label: columnName,
                        accessor: columnName,
                        dataType: boxed_expression_component_1.DataType.Boolean,
                      },
                    ],
                    rows: [row],
                    onColumnsUpdate: _.identity,
                    onRowAdding: function () {
                      return {};
                    },
                    onRowsUpdate: mockedOnRowsUpdate,
                    handlerConfiguration: handlerConfiguration,
                  },
                  void 0
                )
              ).wrapper
            ).wrapper
          ).container;
          (_a = container.querySelector(".boxed-expression-provider")) === null || _a === void 0
            ? void 0
            : _a.dispatchEvent(customEvent(container));
          expect(mockedOnRowsUpdate).toHaveBeenCalled();
          return [2];
        });
      });
    });
  });
  describe("when interacting with context menu", function () {
    test("should trigger onColumnUpdate, when inserting a new column on the left", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var firstColumn, secondColumn, onColumnUpdate, mockedOnColumnUpdate, _a, container, baseElement;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              firstColumn = {
                label: "column-2",
                accessor: "column-2",
                dataType: boxed_expression_component_1.DataType.Undefined,
                width: Resizer_1.DEFAULT_MIN_WIDTH,
              };
              secondColumn = {
                label: "column-3",
                dataType: boxed_expression_component_1.DataType.Undefined,
                width: Resizer_1.DEFAULT_MIN_WIDTH,
              };
              onColumnUpdate = function (_a) {
                var columns = _a.columns;
                _.identity(columns);
              };
              mockedOnColumnUpdate = jest.fn(onColumnUpdate);
              (_a = (0, react_1.render)(
                (0, test_utils_2.usingTestingBoxedExpressionI18nContext)(
                  (0, test_utils_2.usingTestingBoxedExpressionProviderContext)(
                    (0, jsx_runtime_1.jsx)(
                      boxed_expression_component_2.Table,
                      {
                        columns: [firstColumn],
                        rows: [],
                        onColumnsUpdate: mockedOnColumnUpdate,
                        onRowsUpdate: _.identity,
                        handlerConfiguration: [
                          {
                            group: "COLUMNS",
                            items: [
                              {
                                name: "Insert Column Left",
                                type: boxed_expression_component_1.TableOperation.ColumnInsertLeft,
                              },
                            ],
                          },
                        ],
                      },
                      void 0
                    )
                  ).wrapper
                ).wrapper
              )),
                (container = _a.container),
                (baseElement = _a.baseElement);
              return [4, openContextMenu(container.querySelectorAll(EXPRESSION_COLUMN_HEADER)[1])];
            case 1:
              _b.sent();
              return [4, selectMenuEntryIfNotDisabled(baseElement, "Insert Column Left")];
            case 2:
              _b.sent();
              expect(mockedOnColumnUpdate).toHaveBeenCalledWith({
                columns: [expect.objectContaining(secondColumn), firstColumn],
                operation: boxed_expression_component_1.TableOperation.ColumnInsertLeft,
                columnIndex: 0,
              });
              return [2];
          }
        });
      });
    });
    test("should trigger onColumnUpdate, when inserting a new column on the right", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var firstColumn, secondColumn, onColumnUpdate, mockedOnColumnUpdate, _a, container, baseElement;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              firstColumn = {
                label: "column-2",
                accessor: "column-2",
                dataType: boxed_expression_component_1.DataType.Undefined,
                width: Resizer_1.DEFAULT_MIN_WIDTH,
              };
              secondColumn = {
                label: "column-3",
                dataType: boxed_expression_component_1.DataType.Undefined,
                width: Resizer_1.DEFAULT_MIN_WIDTH,
              };
              onColumnUpdate = function (_a) {
                var columns = _a.columns;
                _.identity(columns);
              };
              mockedOnColumnUpdate = jest.fn(onColumnUpdate);
              (_a = (0, react_1.render)(
                (0, test_utils_2.usingTestingBoxedExpressionI18nContext)(
                  (0, test_utils_2.usingTestingBoxedExpressionProviderContext)(
                    (0, jsx_runtime_1.jsx)(
                      boxed_expression_component_2.Table,
                      {
                        columns: [firstColumn],
                        rows: [],
                        onColumnsUpdate: mockedOnColumnUpdate,
                        onRowsUpdate: _.identity,
                        handlerConfiguration: [
                          {
                            group: "COLUMNS",
                            items: [
                              {
                                name: "Insert Column right",
                                type: boxed_expression_component_1.TableOperation.ColumnInsertRight,
                              },
                            ],
                          },
                        ],
                      },
                      void 0
                    )
                  ).wrapper
                ).wrapper
              )),
                (container = _a.container),
                (baseElement = _a.baseElement);
              return [4, openContextMenu(container.querySelectorAll(EXPRESSION_COLUMN_HEADER)[1])];
            case 1:
              _b.sent();
              return [4, selectMenuEntryIfNotDisabled(baseElement, "Insert Column right")];
            case 2:
              _b.sent();
              expect(mockedOnColumnUpdate).toHaveBeenCalledWith({
                columns: [firstColumn, expect.objectContaining(secondColumn)],
                operation: boxed_expression_component_1.TableOperation.ColumnInsertRight,
                columnIndex: 0,
              });
              return [2];
          }
        });
      });
    });
    test("should trigger onColumnUpdate, when deleting a column", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var firstColumn, secondColumn, onColumnUpdate, mockedOnColumnUpdate, _a, container, baseElement;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              firstColumn = {
                label: "column-1",
                accessor: "column-1",
                dataType: boxed_expression_component_1.DataType.Undefined,
              };
              secondColumn = {
                label: "column-2",
                accessor: "column-2",
                dataType: boxed_expression_component_1.DataType.Undefined,
              };
              onColumnUpdate = function (_a) {
                var columns = _a.columns;
                _.identity(columns);
              };
              mockedOnColumnUpdate = jest.fn(onColumnUpdate);
              (_a = (0, react_1.render)(
                (0, test_utils_2.usingTestingBoxedExpressionI18nContext)(
                  (0, test_utils_2.wrapComponentInContext)(
                    (0, jsx_runtime_1.jsx)(
                      boxed_expression_component_2.Table,
                      {
                        columns: [firstColumn, secondColumn],
                        rows: [],
                        onColumnsUpdate: mockedOnColumnUpdate,
                        onRowsUpdate: _.identity,
                        handlerConfiguration: [
                          {
                            group: "COLUMNS",
                            items: [{ name: "Delete", type: boxed_expression_component_1.TableOperation.ColumnDelete }],
                          },
                        ],
                      },
                      void 0
                    )
                  )
                ).wrapper
              )),
                (container = _a.container),
                (baseElement = _a.baseElement);
              return [4, openContextMenu(container.querySelectorAll(EXPRESSION_COLUMN_HEADER)[1])];
            case 1:
              _b.sent();
              return [4, selectMenuEntryIfNotDisabled(baseElement, "Delete")];
            case 2:
              _b.sent();
              expect(mockedOnColumnUpdate).toHaveBeenCalledWith({
                columns: [secondColumn],
                operation: boxed_expression_component_1.TableOperation.ColumnDelete,
                columnIndex: 0,
              });
              return [2];
          }
        });
      });
    });
    test("should not trigger onColumnUpdate, when deleting a row number column", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var row, firstColumn, secondColumn, onColumnUpdate, mockedOnColumnUpdate, _a, container, baseElement;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              row = {};
              row["#"] = "1";
              row["column-1"] = "column-1 value";
              row["column-2"] = "column-2 value";
              firstColumn = {
                label: "column-1",
                accessor: "column-1",
                dataType: boxed_expression_component_1.DataType.Undefined,
              };
              secondColumn = {
                label: "column-2",
                accessor: "column-2",
                dataType: boxed_expression_component_1.DataType.Undefined,
              };
              onColumnUpdate = function (_a) {
                var columns = _a.columns;
                _.identity(columns);
              };
              mockedOnColumnUpdate = jest.fn(onColumnUpdate);
              (_a = (0, react_1.render)(
                (0, test_utils_2.usingTestingBoxedExpressionI18nContext)(
                  (0, test_utils_2.wrapComponentInContext)(
                    (0, jsx_runtime_1.jsx)(
                      boxed_expression_component_2.Table,
                      {
                        columns: [firstColumn, secondColumn],
                        rows: [row],
                        onColumnsUpdate: mockedOnColumnUpdate,
                        onRowsUpdate: _.identity,
                        handlerConfiguration: [
                          {
                            group: "COLUMNS",
                            items: [{ name: "Delete", type: boxed_expression_component_1.TableOperation.ColumnDelete }],
                          },
                        ],
                      },
                      void 0
                    )
                  )
                ).wrapper
              )),
                (container = _a.container),
                (baseElement = _a.baseElement);
              return [4, openContextMenu(container.querySelector(expressionCell(0, 0)))];
            case 1:
              _b.sent();
              return [4, selectMenuEntryIfNotDisabled(baseElement, "Delete")];
            case 2:
              _b.sent();
              expect(mockedOnColumnUpdate).toHaveBeenCalledTimes(0);
              return [2];
          }
        });
      });
    });
    test("should trigger onRowsUpdate, when inserting a new row above", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var row, columns, onRowsUpdate, mockedOnRowsUpdate, _a, container, baseElement;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              row = {};
              row[columnName] = "value";
              columns = [
                { label: columnName, accessor: columnName, dataType: boxed_expression_component_1.DataType.Undefined },
              ];
              onRowsUpdate = function (_a) {
                var rows = _a.rows;
                _.identity(rows);
              };
              mockedOnRowsUpdate = jest.fn(onRowsUpdate);
              (_a = (0, react_1.render)(
                (0, test_utils_2.usingTestingBoxedExpressionI18nContext)(
                  (0, test_utils_2.usingTestingBoxedExpressionProviderContext)(
                    (0, jsx_runtime_1.jsx)(
                      boxed_expression_component_2.Table,
                      {
                        columns: columns,
                        rows: [row],
                        onColumnsUpdate: _.identity,
                        onRowsUpdate: mockedOnRowsUpdate,
                        handlerConfiguration: [
                          {
                            group: "ROWS",
                            items: [
                              {
                                name: "Insert row above",
                                type: boxed_expression_component_1.TableOperation.RowInsertAbove,
                              },
                            ],
                          },
                        ],
                      },
                      void 0
                    )
                  ).wrapper
                ).wrapper
              )),
                (container = _a.container),
                (baseElement = _a.baseElement);
              return [4, openContextMenu(container.querySelector(expressionCell(0, 1)))];
            case 1:
              _b.sent();
              return [4, selectMenuEntryIfNotDisabled(baseElement, "Insert row above")];
            case 2:
              _b.sent();
              expect(mockedOnRowsUpdate).toHaveBeenCalledWith({
                rows: [expect.objectContaining({ width: Resizer_1.DEFAULT_MIN_WIDTH }), expect.objectContaining(row)],
                operation: boxed_expression_component_1.TableOperation.RowInsertAbove,
                rowIndex: 0,
                columns: columns,
              });
              return [2];
          }
        });
      });
    });
    test("should trigger onRowsUpdate, when inserting a new row below", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var row, onRowsUpdate, mockedOnRowsUpdate, columns, _a, container, baseElement;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              row = {};
              row[columnName] = "value";
              onRowsUpdate = function (_a) {
                var rows = _a.rows;
                _.identity(rows);
              };
              mockedOnRowsUpdate = jest.fn(onRowsUpdate);
              columns = [
                { label: columnName, accessor: columnName, dataType: boxed_expression_component_1.DataType.Undefined },
              ];
              (_a = (0, react_1.render)(
                (0, test_utils_2.usingTestingBoxedExpressionI18nContext)(
                  (0, test_utils_2.usingTestingBoxedExpressionProviderContext)(
                    (0, jsx_runtime_1.jsx)(
                      boxed_expression_component_2.Table,
                      {
                        columns: columns,
                        rows: [row],
                        onColumnsUpdate: _.identity,
                        onRowsUpdate: mockedOnRowsUpdate,
                        handlerConfiguration: [
                          {
                            group: "ROWS",
                            items: [
                              {
                                name: "Insert row below",
                                type: boxed_expression_component_1.TableOperation.RowInsertBelow,
                              },
                            ],
                          },
                        ],
                      },
                      void 0
                    )
                  ).wrapper
                ).wrapper
              )),
                (container = _a.container),
                (baseElement = _a.baseElement);
              return [4, openContextMenu(container.querySelector(expressionCell(0, 1)))];
            case 1:
              _b.sent();
              return [4, selectMenuEntryIfNotDisabled(baseElement, "Insert row below")];
            case 2:
              _b.sent();
              expect(mockedOnRowsUpdate).toHaveBeenCalledWith({
                rows: [expect.objectContaining(row), expect.objectContaining({ width: Resizer_1.DEFAULT_MIN_WIDTH })],
                operation: boxed_expression_component_1.TableOperation.RowInsertBelow,
                rowIndex: 0,
                columns: columns,
              });
              return [2];
          }
        });
      });
    });
    test("should trigger onRowsUpdate, when deleting a row", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var firstRow, secondRow, onRowsUpdate, mockedOnRowsUpdate, columns, _a, container, baseElement;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              firstRow = {};
              secondRow = {};
              firstRow[columnName] = "value";
              secondRow[columnName] = "another value";
              onRowsUpdate = function (_a) {
                var rows = _a.rows;
                _.identity(rows);
              };
              mockedOnRowsUpdate = jest.fn(onRowsUpdate);
              columns = [
                { label: columnName, accessor: columnName, dataType: boxed_expression_component_1.DataType.Undefined },
              ];
              (_a = (0, react_1.render)(
                (0, test_utils_2.usingTestingBoxedExpressionI18nContext)(
                  (0, test_utils_2.usingTestingBoxedExpressionProviderContext)(
                    (0, jsx_runtime_1.jsx)(
                      boxed_expression_component_2.Table,
                      {
                        columns: columns,
                        rows: [firstRow, secondRow],
                        onColumnsUpdate: _.identity,
                        onRowsUpdate: mockedOnRowsUpdate,
                        handlerConfiguration: [
                          {
                            group: "ROWS",
                            items: [{ name: "Delete", type: boxed_expression_component_1.TableOperation.RowDelete }],
                          },
                        ],
                      },
                      void 0
                    )
                  ).wrapper
                ).wrapper
              )),
                (container = _a.container),
                (baseElement = _a.baseElement);
              return [4, openContextMenu(container.querySelector(expressionCell(0, 1)))];
            case 1:
              _b.sent();
              return [4, selectMenuEntryIfNotDisabled(baseElement, "Delete")];
            case 2:
              _b.sent();
              expect(mockedOnRowsUpdate).toHaveBeenCalledWith({
                rows: [secondRow],
                operation: boxed_expression_component_1.TableOperation.RowDelete,
                rowIndex: 0,
                columns: columns,
              });
              return [2];
          }
        });
      });
    });
  });
});
function selectMenuEntryIfNotDisabled(baseElement, menuEntry) {
  return __awaiter(this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [
            4,
            (0, test_utils_1.act)(function () {
              return __awaiter(_this, void 0, void 0, function () {
                var button;
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      expect(baseElement.querySelector(EXPRESSION_TABLE_HANDLER_MENU)).toBeTruthy();
                      button = baseElement.querySelector(
                        expressionTableHandlerMenuEntry(menuEntry) + " button:not([disabled])"
                      );
                      if (button != null) {
                        button.click();
                      }
                      return [4, (0, test_utils_2.flushPromises)()];
                    case 1:
                      _a.sent();
                      jest.runAllTimers();
                      return [2];
                  }
                });
              });
            }),
          ];
        case 1:
          _a.sent();
          return [2];
      }
    });
  });
}
function openContextMenu(element) {
  return __awaiter(this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [
            4,
            (0, test_utils_1.act)(function () {
              return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      react_1.fireEvent.contextMenu(element);
                      return [4, (0, test_utils_2.flushPromises)()];
                    case 1:
                      _a.sent();
                      jest.runAllTimers();
                      return [2];
                  }
                });
              });
            }),
          ];
        case 1:
          _a.sent();
          return [2];
      }
    });
  });
}
exports.openContextMenu = openContextMenu;
function customEvent(container) {
  var _a;
  var eventId =
    _.first(
      [].slice
        .call((_a = container.querySelector(".table-component")) === null || _a === void 0 ? void 0 : _a.classList)
        .filter(function (c) {
          return c.match(/table-event-/g);
        })
    ) || "";
  return new CustomEvent(eventId, {
    detail: {
      x: 0,
      y: 0,
      pasteValue: "A\tA\tA\n",
      type: common_1.PASTE_OPERATION,
    },
  });
}
function mockBoxedExpressionEditorGWTService() {
  var mockedSelectObject = jest.fn();
  var boxedExpressionEditorGWTService = {
    broadcastFunctionExpressionDefinition: function () {},
    notifyUserAction: function () {},
    selectObject: mockedSelectObject,
  };
  return { mockedSelectObject: mockedSelectObject, boxedExpressionEditorGWTService: boxedExpressionEditorGWTService };
}
//# sourceMappingURL=Table.test.js.map

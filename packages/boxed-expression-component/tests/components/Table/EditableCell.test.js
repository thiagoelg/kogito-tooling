"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var _ = require("lodash");
var Table_1 = require("@kie-tools/boxed-expression-component/dist/components/Table");
var test_utils_1 = require("../test-utils");
describe("EditableCell", function () {
  var CELL_SELECTOR = ".editable-cell";
  var container;
  describe("when it renders", function () {
    var initialValue = "INITIAL_VALUE";
    beforeEach(function () {
      container = (0, react_1.render)(
        (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
          (0, jsx_runtime_1.jsx)(
            Table_1.EditableCell,
            { value: initialValue, rowIndex: 0, columnId: "col1", onCellUpdate: _.identity },
            void 0
          )
        ).wrapper
      ).container;
    });
    test("renders the initial value", function () {
      expect(container.querySelector("textarea")).toBeTruthy();
      expect(container.querySelector("textarea").value).toBe(initialValue);
    });
    test("renders on read mode", function () {
      var _a;
      expect(
        (_a = container.querySelector(CELL_SELECTOR)) === null || _a === void 0
          ? void 0
          : _a.classList.contains(Table_1.READ_MODE)
      ).toBeTruthy();
    });
  });
  describe("when the user double-click on it", function () {
    beforeEach(function () {
      container = (0, react_1.render)(
        (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
          (0, jsx_runtime_1.jsx)(
            Table_1.EditableCell,
            { value: "value", rowIndex: 0, columnId: "col1", onCellUpdate: _.identity },
            void 0
          )
        ).wrapper
      ).container;
      react_1.fireEvent.doubleClick(container.querySelector(CELL_SELECTOR));
    });
    test("renders on edit mode", function () {
      var _a;
      expect(
        (_a = container.querySelector(CELL_SELECTOR)) === null || _a === void 0
          ? void 0
          : _a.classList.contains(Table_1.EDIT_MODE)
      ).toBeTruthy();
    });
  });
  describe("when the user presses Enter with the cell selected", function () {
    beforeEach(function () {
      container = (0, react_1.render)(
        (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
          (0, jsx_runtime_1.jsx)(
            Table_1.EditableCell,
            { value: "value", rowIndex: 0, columnId: "col1", onCellUpdate: _.identity },
            void 0
          )
        ).wrapper
      ).container;
    });
    test("renders on edit mode", function () {
      var _a;
      react_1.fireEvent.click(container.querySelector(CELL_SELECTOR));
      react_1.fireEvent.change(container.querySelector("textarea"), { target: { value: "Z" } });
      expect(
        (_a = container.querySelector(CELL_SELECTOR)) === null || _a === void 0
          ? void 0
          : _a.classList.contains(Table_1.EDIT_MODE)
      ).toBeTruthy();
    });
  });
  describe("when the user click on it", function () {
    beforeEach(function () {
      container = (0, react_1.render)(
        (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
          (0, jsx_runtime_1.jsx)(
            Table_1.EditableCell,
            { value: "value", rowIndex: 0, columnId: "col1", onCellUpdate: _.identity },
            void 0
          )
        ).wrapper
      ).container;
      react_1.fireEvent.click(container.querySelector(CELL_SELECTOR));
    });
    test("focus on the text area", function () {
      expect(document.querySelector("textarea")).toEqual(document.activeElement);
    });
    test("enable the selected style", function () {
      var _a;
      expect(
        (_a = container.querySelector(CELL_SELECTOR)) === null || _a === void 0
          ? void 0
          : _a.classList.contains("editable-cell--selected")
      ).toBeTruthy();
    });
  });
  describe("when the on blur events happens", function () {
    var value = "value";
    var newValue = "new value";
    var rowIndex = 0;
    var columnId = "col1";
    var onCellUpdate = function (rowIndex, columnId, value) {
      _.identity({ rowIndex: rowIndex, columnId: columnId, value: value });
    };
    var mockedOnCellUpdate = jest.fn(onCellUpdate);
    test("triggers the onCellUpdate function", function () {
      var getByTestId = (0, react_1.render)(
        (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
          (0, jsx_runtime_1.jsx)(
            Table_1.EditableCell,
            { value: value, rowIndex: rowIndex, columnId: columnId, onCellUpdate: mockedOnCellUpdate, readOnly: false },
            void 0
          )
        ).wrapper
      ).getByTestId;
      var textArea = getByTestId("editable-cell-textarea");
      (0, react_1.act)(function () {
        react_1.fireEvent.change(textArea, {
          target: { value: "".concat(newValue) },
        });
      });
      expect(mockedOnCellUpdate).toHaveBeenCalled();
      expect(mockedOnCellUpdate).toHaveBeenCalledWith(rowIndex, columnId, newValue);
    });
  });
});
//# sourceMappingURL=EditableCell.test.js.map

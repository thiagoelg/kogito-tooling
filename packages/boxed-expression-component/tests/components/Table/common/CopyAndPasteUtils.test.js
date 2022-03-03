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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var test_utils_1 = require("react-dom/test-utils");
var common_1 = require("@kie-tools/boxed-expression-component/dist/components/Table/common");
var test_utils_2 = require("../../test-utils");
describe("CopyAndPasteUtils", function () {
  describe("pasteOnTable", function () {
    var rows;
    var rowFactory;
    beforeEach(function () {
      rows = [
        { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
        { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
        { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
        { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
        { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
      ];
      rowFactory = function () {
        return { "column-1": "-", "column-2": "-", "column-3": "-" };
      };
    });
    describe("when the paste value is empty", function () {
      test("returns a new instance of rows with updated values", function () {
        var newRows;
        (0, test_utils_1.act)(function () {
          newRows = (0, common_1.pasteOnTable)("", rows, rowFactory);
        });
        expect(newRows).not.toBe(rows);
        expect(newRows).toEqual([
          { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
          { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
          { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
          { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
          { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
        ]);
      });
    });
    describe("when the paste value has a single row", function () {
      test("returns a new instance of rows with updated values", function () {
        var newRows;
        (0, test_utils_1.act)(function () {
          newRows = (0, common_1.pasteOnTable)("aaaa\tbbbb", rows, rowFactory);
        });
        expect(newRows).not.toBe(rows);
        expect(newRows).toEqual([
          { "column-1": "aaaa", "column-2": "bbbb", "column-3": "0000" },
          { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
          { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
          { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
          { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
        ]);
      });
    });
    describe("when the paste value has multiple rows", function () {
      test("returns a new instance of rows with updated values", function () {
        var newRows;
        (0, test_utils_1.act)(function () {
          newRows = (0, common_1.pasteOnTable)("aaaa\tbbbb\ncccc\tdddd", rows, rowFactory);
        });
        expect(newRows).not.toBe(rows);
        expect(newRows).toEqual([
          { "column-1": "aaaa", "column-2": "bbbb", "column-3": "0000" },
          { "column-1": "cccc", "column-2": "dddd", "column-3": "0000" },
          { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
          { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
          { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
        ]);
      });
    });
    describe("when the paste value has multiple rows and a custom initial coordinate", function () {
      test("returns a new instance of rows with updated values", function () {
        var newRows;
        (0, test_utils_1.act)(function () {
          newRows = (0, common_1.pasteOnTable)("aaaa\tbbbb\ncccc\tdddd", rows, rowFactory, 1, 1);
        });
        expect(newRows).not.toBe(rows);
        expect(newRows).toEqual([
          { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
          { "column-1": "0000", "column-2": "aaaa", "column-3": "bbbb" },
          { "column-1": "0000", "column-2": "cccc", "column-3": "dddd" },
          { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
          { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
        ]);
      });
    });
    describe("when the paste value has multiple rows with extra reserved chars", function () {
      test("returns a new instance of rows with updated values", function () {
        var newRows;
        (0, test_utils_1.act)(function () {
          newRows = (0, common_1.pasteOnTable)("aaaa\tbbbb\t\ncccc\tdddd\n", rows, rowFactory);
        });
        expect(newRows).not.toBe(rows);
        expect(newRows).toEqual([
          { "column-1": "aaaa", "column-2": "bbbb", "column-3": "0000" },
          { "column-1": "cccc", "column-2": "dddd", "column-3": "0000" },
          { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
          { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
          { "column-1": "0000", "column-2": "0000", "column-3": "0000" },
        ]);
      });
    });
  });
  describe("iterableValue", function () {
    describe("when the paste value is empty", function () {
      test("returns an iterable data structure", function () {
        expect((0, common_1.iterableValue)("")).toEqual([[]]);
      });
    });
    describe("when the paste value has a single row", function () {
      test("returns an iterable data structure", function () {
        expect((0, common_1.iterableValue)("A\tB\tC")).toEqual([["A", "B", "C"]]);
      });
    });
    describe("when the paste value has multiple rows", function () {
      test("returns an iterable data structure", function () {
        expect((0, common_1.iterableValue)("A\tB\tC\nD\tE\tF")).toEqual([
          ["A", "B", "C"],
          ["D", "E", "F"],
        ]);
      });
    });
  });
  describe("paste", function () {
    beforeEach(function () {
      document.body.dispatchEvent = jest.fn();
      var container = (0, react_1.render)(
        (0, test_utils_2.wrapComponentInContext)(
          (0, jsx_runtime_1.jsx)(
            jsx_runtime_1.Fragment,
            {
              children: (0, jsx_runtime_1.jsx)(
                "table",
                __assign(
                  { className: "table-component table-event-0" },
                  {
                    children: (0, jsx_runtime_1.jsxs)(
                      "tbody",
                      {
                        children: [
                          (0, jsx_runtime_1.jsxs)(
                            "tr",
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)("td", { children: "A" }, void 0),
                                (0, jsx_runtime_1.jsx)("td", { children: "B" }, void 0),
                                (0, jsx_runtime_1.jsx)("td", { children: "C" }, void 0),
                              ],
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsxs)(
                            "tr",
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)("td", { children: "D" }, void 0),
                                (0, jsx_runtime_1.jsx)("td", __assign({ className: "ref" }, { children: "E" }), void 0),
                                (0, jsx_runtime_1.jsx)("td", { children: "F" }, void 0),
                              ],
                            },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsxs)(
                            "tr",
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)("td", { children: "G" }, void 0),
                                (0, jsx_runtime_1.jsx)("td", { children: "H" }, void 0),
                                (0, jsx_runtime_1.jsx)("td", { children: "I" }, void 0),
                              ],
                            },
                            void 0
                          ),
                        ],
                      },
                      void 0
                    ),
                  }
                ),
                void 0
              ),
            },
            void 0
          )
        )
      ).container;
      (0, common_1.paste)("Z\tZ\nZ\tZ", container.querySelector(".ref"), document.body);
    });
    test("dispatches paste event", function () {
      expect(document.body.dispatchEvent).toBeCalled();
    });
  });
});
//# sourceMappingURL=CopyAndPasteUtils.test.js.map

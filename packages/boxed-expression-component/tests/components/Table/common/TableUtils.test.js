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
var common_1 = require("@kie-tools/boxed-expression-component/dist/components/Table/common");
describe("TableUtils", function () {
  describe("getCellCoordinates", function () {
    var container;
    var cells;
    beforeEach(function () {
      document.dispatchEvent = jest.fn();
      container = (0, react_1.render)(
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
                              (0, jsx_runtime_1.jsx)(
                                "td",
                                __assign({ className: "data-cell" }, { children: "A" }),
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                "td",
                                __assign({ className: "data-cell" }, { children: "B" }),
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                "td",
                                __assign({ className: "data-cell" }, { children: "C" }),
                                void 0
                              ),
                            ],
                          },
                          void 0
                        ),
                        (0, jsx_runtime_1.jsxs)(
                          "tr",
                          {
                            children: [
                              (0, jsx_runtime_1.jsx)(
                                "td",
                                __assign({ className: "data-cell" }, { children: "D" }),
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                "td",
                                __assign({ className: "data-cell" }, { children: "E" }),
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                "td",
                                __assign({ className: "data-cell" }, { children: "F" }),
                                void 0
                              ),
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
      ).container;
      cells = container.querySelectorAll(".data-cell");
    });
    test("valid coordinates", function () {
      expect((0, common_1.getCellCoordinates)(cells[0])).toEqual({
        x: 0,
        y: 0,
      });
      expect((0, common_1.getCellCoordinates)(cells[1])).toEqual({
        x: 1,
        y: 0,
      });
      expect((0, common_1.getCellCoordinates)(cells[2])).toEqual({
        x: 2,
        y: 0,
      });
      expect((0, common_1.getCellCoordinates)(cells[3])).toEqual({
        x: 0,
        y: 1,
      });
      expect((0, common_1.getCellCoordinates)(cells[4])).toEqual({
        x: 1,
        y: 1,
      });
      expect((0, common_1.getCellCoordinates)(cells[5])).toEqual({
        x: 2,
        y: 1,
      });
      expect((0, common_1.getCellCoordinates)(null)).toEqual({
        x: 0,
        y: 0,
      });
    });
  });
  describe("getCellTableId", function () {
    var container;
    var cells;
    beforeEach(function () {
      document.dispatchEvent = jest.fn();
      container = (0, react_1.render)(
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
                              (0, jsx_runtime_1.jsx)(
                                "td",
                                __assign({ className: "data-cell" }, { children: "A" }),
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                "td",
                                __assign({ className: "data-cell" }, { children: "B" }),
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                "td",
                                __assign({ className: "data-cell" }, { children: "C" }),
                                void 0
                              ),
                            ],
                          },
                          void 0
                        ),
                        (0, jsx_runtime_1.jsxs)(
                          "tr",
                          {
                            children: [
                              (0, jsx_runtime_1.jsx)(
                                "td",
                                __assign({ className: "data-cell" }, { children: "D" }),
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                "td",
                                __assign({ className: "data-cell" }, { children: "E" }),
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                "td",
                                __assign({ className: "data-cell" }, { children: "F" }),
                                void 0
                              ),
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
      ).container;
      cells = container.querySelectorAll(".data-cell");
    });
    test("dispatches paste event", function () {
      expect((0, common_1.getCellTableId)(cells[0])).toEqual("table-event-0");
    });
  });
});
//# sourceMappingURL=TableUtils.test.js.map

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
var dom_1 = require("@kie-tools/boxed-expression-component/dist/components/Resizer/dom");
var fakeCells = [fakeCell(0), fakeCell(2), fakeCell(4), fakeCell(8)];
describe("ResizerSupervisorDOM", function () {
  describe("applyDOMSupervisor", function () {
    beforeEach(function () {
      (0, dom_1.applyDOMSupervisor)(false, document.body);
    });
    it("refreshes cell widths as parents", function () {
      expect(fakeCells[0].spyRefreshWidthAsParent).toBeCalled();
      expect(fakeCells[1].spyRefreshWidthAsParent).toBeCalled();
      expect(fakeCells[2].spyRefreshWidthAsParent).toBeCalled();
      expect(fakeCells[3].spyRefreshWidthAsParent).toBeCalled();
    });
    it("refreshes cell widths as last column", function () {
      expect(fakeCells[0].spyRefreshWidthAsLastColumn).toBeCalled();
      expect(fakeCells[1].spyRefreshWidthAsLastColumn).toBeCalled();
      expect(fakeCells[2].spyRefreshWidthAsLastColumn).toBeCalled();
      expect(fakeCells[3].spyRefreshWidthAsLastColumn).toBeCalled();
    });
  });
});
jest.mock("@kie-tools/boxed-expression-component/dist/components/Resizer/dom", function () {
  var actualResizerDOM = jest.requireActual("@kie-tools/boxed-expression-component/dist/components/Resizer/dom");
  return __assign(__assign({}, actualResizerDOM), {
    DOMSession: jest.fn(function () {
      return {
        getCells: function () {
          return fakeCells.map(function (c) {
            return c.cell;
          });
        },
      };
    }),
    Cell: jest.fn(function () {
      return {
        refreshWidthAsParent: function () {
          return {};
        },
        refreshWidthAsLastColumn: function () {
          return {};
        },
        refreshWidthAsLastGroupColumn: function () {
          return {};
        },
      };
    }),
  });
});
function fakeCell(depth) {
  var cell = new dom_1.Cell({}, [], depth, document.body);
  var spyRefreshWidthAsParent = jest.spyOn(cell, "refreshWidthAsParent");
  var spyRefreshWidthAsLastColumn = jest.spyOn(cell, "refreshWidthAsLastColumn");
  return {
    cell: cell,
    spyRefreshWidthAsParent: spyRefreshWidthAsParent,
    spyRefreshWidthAsLastColumn: spyRefreshWidthAsLastColumn,
  };
}
//# sourceMappingURL=ResizerSupervisorDOM.test.js.map

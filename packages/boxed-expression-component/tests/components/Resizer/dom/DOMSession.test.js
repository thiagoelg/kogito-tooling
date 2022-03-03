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
var Resizer_1 = require("@kie-tools/boxed-expression-component/dist/components/Resizer");
var test_utils_1 = require("../../test-utils");
describe("DOMSession", function () {
  var session;
  var cells;
  beforeEach(function () {
    (0,
    react_1.render)((0, test_utils_1.wrapComponentInContext)((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ "data-test-id": "cell-0", className: "react-resizable" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ "data-test-id": "cell-1", className: "react-resizable" }, { children: [(0, jsx_runtime_1.jsx)("div", { "data-test-id": "cell-2", className: "react-resizable" }, void 0), (0, jsx_runtime_1.jsx)("div", { "data-test-id": "cell-3", className: "react-resizable" }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", { "data-test-id": "cell-4", className: "react-resizable" }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", { "data-test-id": "cell-5", className: "react-resizable" }, void 0), (0, jsx_runtime_1.jsx)("div", { "data-test-id": "cell-6", className: "react-resizable" }, void 0)] }, void 0)));
    session = new Resizer_1.DOMSession(document.body);
  });
  describe("getCells", function () {
    beforeEach(function () {
      cells = session.getCells();
    });
    it("returns the cells with depth information", function () {
      expect(cells[4].element.dataset.testId).toBe("cell-0");
      expect(cells[4].depth).toBe(0);
      expect(cells[5].element.dataset.testId).toBe("cell-5");
      expect(cells[5].depth).toBe(0);
      expect(cells[6].element.dataset.testId).toBe("cell-6");
      expect(cells[6].depth).toBe(0);
      expect(cells[2].element.dataset.testId).toBe("cell-1");
      expect(cells[2].depth).toBe(1);
      expect(cells[3].element.dataset.testId).toBe("cell-4");
      expect(cells[3].depth).toBe(1);
      expect(cells[0].element.dataset.testId).toBe("cell-2");
      expect(cells[0].depth).toBe(2);
      expect(cells[1].element.dataset.testId).toBe("cell-3");
      expect(cells[1].depth).toBe(2);
    });
    it("returns the cells with children", function () {
      expect(cells[0].children).toHaveLength(0);
      expect(cells[1].children).toHaveLength(0);
      expect(cells[2].children).toHaveLength(2);
      expect(cells[3].children).toHaveLength(0);
      expect(cells[4].children).toHaveLength(2);
      expect(cells[5].children).toHaveLength(0);
      expect(cells[6].children).toHaveLength(0);
    });
  });
});
//# sourceMappingURL=DOMSession.test.js.map

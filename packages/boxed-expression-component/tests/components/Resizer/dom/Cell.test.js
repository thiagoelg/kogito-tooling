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
require("../../../__mocks__/ReactWithSupervisor");
var Resizer_1 = require("@kie-tools/boxed-expression-component/dist/components/Resizer");
var Resizer_2 = require("@kie-tools/boxed-expression-component/dist/components/Resizer");
var react_1 = require("@testing-library/react");
var test_utils_1 = require("../../test-utils");
var ContextExpression_1 = require("@kie-tools/boxed-expression-component/dist/components/ContextExpression");
var test_utils_2 = require("react-dom/test-utils");
var cell;
var element;
var container;
describe("Cell", function () {
  beforeAll(function () {
    document.body.dispatchEvent = jest.fn();
  });
  describe("getId", function () {
    beforeEach(createLiteral);
    it("returns the id present in the cell element", function () {
      expect(cell.getId()).toBe("uuid-0000-1111-2222-3333");
    });
  });
  describe("getRect", function () {
    beforeEach(createLiteral);
    it("returns the rect from the cell element", function () {
      expect(cell.getRect()).toEqual(element.getBoundingClientRect());
    });
  });
  describe("setWidth", function () {
    beforeEach(createLiteral);
    it("set the width in the element", function () {
      (0, test_utils_2.act)(function () {
        return cell.setWidth(150);
      });
      expect(element.style.width).toEqual("150px");
      expect(document.body.dispatchEvent).toBeCalled();
    });
    it("set the width in the element considering the minimum value", function () {
      (0, test_utils_2.act)(function () {
        return cell.setWidth(80);
      });
      expect(element.style.width).toEqual("100px");
      expect(document.body.dispatchEvent).toBeCalled();
    });
  });
  describe("refreshWidthAsParent", function () {
    it("set the width as parent", function () {
      (0, test_utils_2.act)(function () {
        createContext();
        var elements = container.querySelectorAll(Resizer_1.CELL_CSS_SELECTOR);
        var child1 = new Resizer_1.Cell(elements.item(1), [], 1, document.body);
        var child2 = new Resizer_1.Cell(elements.item(2), [], 1, document.body);
        element = elements.item(3);
        cell = new Resizer_1.Cell(element, [child1, child2], 0, document.body);
        cell.refreshWidthAsParent();
      });
      expect(element.style.width).toBe("713px");
    });
  });
  describe("refreshWidthAsLastColumn", function () {
    it("set the width as the last column", function () {
      (0, test_utils_2.act)(function () {
        createContext();
        var elements = container.querySelectorAll(Resizer_1.CELL_CSS_SELECTOR);
        var child1 = new Resizer_1.Cell(elements.item(0), [], 1, document.body);
        var child2 = new Resizer_1.Cell(elements.item(1), [], 1, document.body);
        element = elements.item(2);
        cell = new Resizer_1.Cell(element, [child1, child2], 0, document.body);
        cell.refreshWidthAsLastColumn();
      });
      expect(element.style.width).toBe("1468px");
    });
    it("does not change the width when it is not the last column", function () {
      (0, test_utils_2.act)(function () {
        createLiteral();
        cell.refreshWidthAsLastColumn();
      });
      expect(element.style.width).toBe("250px");
    });
  });
  describe("isLastColumn", function () {
    it("returns true when the literal expression lives in the last column", function () {
      (0, test_utils_2.act)(renderLiteralAtLastColumn);
      expect(cell.isLastColumn()).toBeTruthy();
    });
    it("returns false when the literal expression does not live in the last column", function () {
      (0, test_utils_2.act)(renderLiteralAtRegularColumn);
      expect(cell.isLastColumn()).toBeFalsy();
    });
  });
});
function renderLiteralAtRegularColumn() {
  container = (0, react_1.render)(
    (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
      (0, test_utils_1.wrapComponentInContext)(
        (0, jsx_runtime_1.jsx)(
          jsx_runtime_1.Fragment,
          {
            children: (0, jsx_runtime_1.jsx)(
              "table",
              {
                children: (0, jsx_runtime_1.jsx)(
                  "tbody",
                  {
                    children: (0, jsx_runtime_1.jsxs)(
                      "tr",
                      {
                        children: [
                          (0, jsx_runtime_1.jsx)("td", {}, void 0),
                          (0, jsx_runtime_1.jsx)(
                            "td",
                            { children: (0, jsx_runtime_1.jsx)(Resizer_2.Resizer, { width: 250 }, void 0) },
                            void 0
                          ),
                          (0, jsx_runtime_1.jsx)("td", {}, void 0),
                        ],
                      },
                      void 0
                    ),
                  },
                  void 0
                ),
              },
              void 0
            ),
          },
          void 0
        )
      )
    ).wrapper
  ).container;
  element = container.querySelector(Resizer_1.CELL_CSS_SELECTOR);
  cell = new Resizer_1.Cell(element, [], 0, document.body);
}
function renderLiteralAtLastColumn() {
  container = (0, react_1.render)(
    (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
      (0, test_utils_1.wrapComponentInContext)(
        (0, jsx_runtime_1.jsx)(
          jsx_runtime_1.Fragment,
          {
            children: (0, jsx_runtime_1.jsx)(
              "table",
              {
                children: (0, jsx_runtime_1.jsx)(
                  "tbody",
                  {
                    children: (0, jsx_runtime_1.jsxs)(
                      "tr",
                      {
                        children: [
                          (0, jsx_runtime_1.jsx)("td", {}, void 0),
                          (0, jsx_runtime_1.jsx)("td", {}, void 0),
                          (0, jsx_runtime_1.jsx)(
                            "td",
                            { children: (0, jsx_runtime_1.jsx)(Resizer_2.Resizer, { width: 250 }, void 0) },
                            void 0
                          ),
                        ],
                      },
                      void 0
                    ),
                  },
                  void 0
                ),
              },
              void 0
            ),
          },
          void 0
        )
      )
    ).wrapper
  ).container;
  element = container.querySelector(Resizer_1.CELL_CSS_SELECTOR);
  cell = new Resizer_1.Cell(element, [], 0, document.body);
}
function createLiteral() {
  container = (0, react_1.render)(
    (0, test_utils_1.wrapComponentInContext)((0, jsx_runtime_1.jsx)(Resizer_2.Resizer, { width: 250 }, void 0))
  ).container;
  element = container.querySelector(Resizer_1.CELL_CSS_SELECTOR);
  cell = new Resizer_1.Cell(element, [], 0, document.body);
}
function createContext() {
  container = (0, react_1.render)(
    (0, test_utils_1.usingTestingBoxedExpressionI18nContext)(
      (0, test_utils_1.wrapComponentInContext)(
        (0, jsx_runtime_1.jsx)(
          ContextExpression_1.ContextExpression,
          __assign(
            {},
            {
              id: "id1",
              logicType: "Context",
              name: "Expression Name",
              dataType: "<Undefined>",
              contextEntries: [
                {
                  entryInfo: {
                    name: "ContextEntry-1",
                    dataType: "<Undefined>",
                  },
                  entryExpression: {
                    id: "id2",
                    logicType: "Context",
                    contextEntries: [
                      {
                        entryInfo: {
                          name: "ContextEntry-1",
                          dataType: "<Undefined>",
                        },
                        entryExpression: {
                          id: "id4",
                          logicType: "Context",
                          contextEntries: [
                            {
                              entryInfo: {
                                name: "ContextEntry-1",
                                dataType: "<Undefined>",
                              },
                              entryExpression: {},
                              editInfoPopoverLabel: "Edit Context Entry",
                            },
                          ],
                          result: {
                            id: "id7",
                          },
                          entryInfoWidth: 257,
                          entryExpressionWidth: 370,
                        },
                        editInfoPopoverLabel: "Edit Context Entry",
                      },
                    ],
                    result: {
                      id: "id5",
                    },
                    entryInfoWidth: 713,
                    entryExpressionWidth: 691,
                  },
                  editInfoPopoverLabel: "Edit Context Entry",
                },
              ],
              result: {
                id: "id3",
              },
              entryInfoWidth: 150,
              entryExpressionWidth: 1468,
            }
          ),
          void 0
        )
      )
    ).wrapper
  ).container;
}
jest.mock("uuid", function () {
  return {
    v4: function () {
      return "0000-1111-2222-3333";
    },
  };
});
//# sourceMappingURL=Cell.test.js.map

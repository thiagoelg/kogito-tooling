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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var Resizer_1 = require("@kie-tools/boxed-expression-component/dist/components/Resizer");
var SelectionBox_1 = require("@kie-tools/boxed-expression-component/dist/components/SelectionBox");
require("../../__mocks__/ReactWithSupervisor");
var test_utils_1 = require("../test-utils");
describe("SelectionBox", function () {
  describe("when users drag the selection box element (but do not release the mouse button)", function () {
    it("it appears in the screen", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var container, selectionBox, selectionBoxStyle;
        return __generator(this, function (_a) {
          container = renderTable();
          selectionBox = container.querySelector(".kie-selection-box");
          selectionBoxStyle = selectionBox.style;
          react_1.fireEvent.mouseDown(container, { clientX: 10, clientY: 20 });
          react_1.fireEvent.mouseMove(container, { clientX: 300, clientY: 400 });
          expect(selectionBoxStyle.width).toEqual("290px");
          expect(selectionBoxStyle.height).toEqual("380px");
          expect(selectionBoxStyle.top).toEqual("20px");
          expect(selectionBoxStyle.left).toEqual("10px");
          return [2];
        });
      });
    });
  });
  describe("when users drag the selection box element and release the mouse button", function () {
    it("it doesn't appear in the screen", function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var container, selectionBox, selectionBoxStyle;
        return __generator(this, function (_a) {
          container = renderTable();
          selectionBox = container.querySelector(".kie-selection-box");
          selectionBoxStyle = selectionBox.style;
          react_1.fireEvent.mouseDown(container, { clientX: 10, clientY: 10 });
          react_1.fireEvent.mouseMove(container, { clientX: 300, clientY: 400 });
          react_1.fireEvent.mouseUp(container);
          expect(selectionBoxStyle.width).toEqual("");
          expect(selectionBoxStyle.height).toEqual("");
          expect(selectionBoxStyle.top).toEqual("");
          expect(selectionBoxStyle.left).toEqual("");
          return [2];
        });
      });
    });
  });
});
function renderTable() {
  return (0, react_1.render)(
    (0, test_utils_1.wrapComponentInContext)(
      (0, jsx_runtime_1.jsxs)(
        jsx_runtime_1.Fragment,
        {
          children: [
            (0, jsx_runtime_1.jsx)(SelectionBox_1.SelectionBox, {}, void 0),
            (0, jsx_runtime_1.jsxs)(
              "table",
              {
                children: [
                  (0, jsx_runtime_1.jsx)(
                    "thead",
                    {
                      children: (0, jsx_runtime_1.jsxs)(
                        "tr",
                        {
                          children: [
                            (0, jsx_runtime_1.jsx)(
                              "th",
                              __assign(
                                { className: "col-1-1" },
                                { children: (0, jsx_runtime_1.jsx)(Resizer_1.Resizer, { width: 250 }, void 0) }
                              ),
                              void 0
                            ),
                            (0, jsx_runtime_1.jsx)(
                              "th",
                              __assign(
                                { className: "col-1-2" },
                                { children: (0, jsx_runtime_1.jsx)(Resizer_1.Resizer, { width: 250 }, void 0) }
                              ),
                              void 0
                            ),
                            (0, jsx_runtime_1.jsx)(
                              "th",
                              __assign(
                                { className: "col-1-3" },
                                { children: (0, jsx_runtime_1.jsx)(Resizer_1.Resizer, { width: 250 }, void 0) }
                              ),
                              void 0
                            ),
                          ],
                        },
                        void 0
                      ),
                    },
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    "tbody",
                    {
                      children: (0, jsx_runtime_1.jsxs)(
                        "tr",
                        {
                          children: [
                            (0, jsx_runtime_1.jsx)(
                              "td",
                              __assign(
                                { className: "col-2-1" },
                                { children: (0, jsx_runtime_1.jsx)(Resizer_1.Resizer, { width: 250 }, void 0) }
                              ),
                              void 0
                            ),
                            (0, jsx_runtime_1.jsx)(
                              "td",
                              __assign(
                                { className: "col-2-2" },
                                { children: (0, jsx_runtime_1.jsx)(Resizer_1.Resizer, { width: 250 }, void 0) }
                              ),
                              void 0
                            ),
                            (0, jsx_runtime_1.jsx)(
                              "td",
                              __assign(
                                { className: "col-2-3" },
                                { children: (0, jsx_runtime_1.jsx)(Resizer_1.Resizer, { width: 250 }, void 0) }
                              ),
                              void 0
                            ),
                          ],
                        },
                        void 0
                      ),
                    },
                    void 0
                  ),
                ],
              },
              void 0
            ),
          ],
        },
        void 0
      )
    )
  ).container;
}
//# sourceMappingURL=SelectionBox.test.js.map

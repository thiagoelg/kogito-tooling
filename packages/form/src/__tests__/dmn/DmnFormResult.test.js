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
var dmn_1 = require("../../dmn");
var props = {
  results: [],
  differences: [{}],
  locale: "en",
  notificationsPanel: true,
  openExecutionTab: function () {},
};
describe("DmnFormResult tests", function () {
  it("should render the DMNFormResult with the empty state", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var getByText;
      return __generator(this, function (_a) {
        getByText = (0, react_1.render)(
          (0, jsx_runtime_1.jsx)(dmn_1.DmnFormResult, __assign({}, props), void 0)
        ).getByText;
        expect(getByText("No response")).toMatchSnapshot();
        return [2];
      });
    });
  });
  it("should render the DmnFormResult with one result", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var results, getByText;
      return __generator(this, function (_a) {
        results = [
          {
            decisionId: "_9BD7BB23-0B23-488F-8DED-F5462CF89E0B",
            decisionName: "Decision-1",
            result: null,
            messages: [],
            evaluationStatus: dmn_1.EvaluationStatus.FAILED,
          },
        ];
        getByText = (0, react_1.render)(
          (0, jsx_runtime_1.jsx)(dmn_1.DmnFormResult, __assign({}, props, { results: results }), void 0)
        ).getByText;
        expect(getByText("Decision-1")).toMatchSnapshot();
        return [2];
      });
    });
  });
  it("should render the DmnFormResult with more then one result", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var results, getByText;
      return __generator(this, function (_a) {
        results = [
          {
            decisionId: "_9BD7BB23-0B23-488F-8DED-F5462CF89E0B",
            decisionName: "Decision-1",
            result: null,
            messages: [],
            evaluationStatus: dmn_1.EvaluationStatus.FAILED,
          },
          {
            decisionId: "_9BD7BB23-0B23-488F-8DED-F5462CF89E0B",
            decisionName: "Decision-2",
            result: null,
            messages: [],
            evaluationStatus: dmn_1.EvaluationStatus.SUCCEEDED,
          },
          {
            decisionId: "_9BD7BB23-0B23-488F-8DED-F5462CF89E0B",
            decisionName: "Decision-3",
            result: null,
            messages: [],
            evaluationStatus: dmn_1.EvaluationStatus.SKIPPED,
          },
        ];
        getByText = (0, react_1.render)(
          (0, jsx_runtime_1.jsx)(dmn_1.DmnFormResult, __assign({}, props, { results: results }), void 0)
        ).getByText;
        expect(getByText("Decision-1")).toMatchSnapshot();
        expect(getByText("Decision-2")).toMatchSnapshot();
        expect(getByText("Decision-3")).toMatchSnapshot();
        return [2];
      });
    });
  });
  it("should render an anchor tag", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var results, getByText;
      return __generator(this, function (_a) {
        results = [
          {
            decisionId: "_9BD7BB23-0B23-488F-8DED-F5462CF89E0B",
            decisionName: "Decision-1",
            result: null,
            messages: [],
            evaluationStatus: dmn_1.EvaluationStatus.FAILED,
          },
        ];
        getByText = (0, react_1.render)(
          (0, jsx_runtime_1.jsx)(dmn_1.DmnFormResult, __assign({}, props, { results: results }), void 0)
        ).getByText;
        expect(getByText("Evaluation failed").tagName).toEqual("A");
        expect(getByText("Evaluation failed")).toMatchSnapshot();
        return [2];
      });
    });
  });
  it("should render an paragraph tag", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var results, getByText;
      return __generator(this, function (_a) {
        results = [
          {
            decisionId: "_9BD7BB23-0B23-488F-8DED-F5462CF89E0B",
            decisionName: "Decision-1",
            result: null,
            messages: [],
            evaluationStatus: dmn_1.EvaluationStatus.FAILED,
          },
        ];
        getByText = (0, react_1.render)(
          (0, jsx_runtime_1.jsx)(
            dmn_1.DmnFormResult,
            __assign({}, props, { notificationsPanel: false, results: results }),
            void 0
          )
        ).getByText;
        expect(getByText("Evaluation failed").tagName).toEqual("P");
        expect(getByText("Evaluation failed")).toMatchSnapshot();
        return [2];
      });
    });
  });
});
//# sourceMappingURL=DmnFormResult.test.js.map

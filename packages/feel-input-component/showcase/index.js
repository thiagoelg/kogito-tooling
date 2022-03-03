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
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var ReactDOM = require("react-dom");
var react_1 = require("react");
var FeelService_1 = require("./FeelService");
require("./index.css");
var src_1 = require("../src");
var REACT_APP_FEEL_SERVER = process.env.REACT_APP_FEEL_SERVER;
if (!REACT_APP_FEEL_SERVER) {
  console.info(
    "" +
      "--------------------------------------------------------------------------------------------\n" +
      "The FEEL server is not enabled. You may enable it by starting your development web app with:\n" +
      "`REACT_APP_FEEL_SERVER=http://your-feel-server-url yarn start`.\n" +
      "--------------------------------------------------------------------------------------------"
  );
}
var FeelEditor = function () {
  var _a = __read((0, react_1.useState)(""), 2),
    feelExpression = _a[0],
    setFeelExpression = _a[1];
  var _b = __read((0, react_1.useState)(""), 2),
    feelResult = _b[0],
    setFeelResult = _b[1];
  var suggestionProvider = (0, react_1.useCallback)(function (text, row, col) {
    return FeelService_1.FeelService.getInstance().getSuggestions(text, row, col);
  }, []);
  (0, react_1.useEffect)(
    function () {
      var clientResult = FeelService_1.FeelService.getInstance().evaluate(feelExpression);
      if (clientResult !== "") {
        setFeelResult(clientResult);
      }
      if (REACT_APP_FEEL_SERVER) {
        window.clearTimeout(window.__KIE__FEEL__THROTTLING___);
        window.__KIE__FEEL__THROTTLING___ = window.setTimeout(function () {
          (function () {
            return __awaiter(void 0, void 0, void 0, function () {
              var resp, result;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [
                      4,
                      fetch(
                        REACT_APP_FEEL_SERVER +
                          "?" +
                          new URLSearchParams({
                            feel: feelExpression,
                            clientResult: clientResult,
                          })
                      ),
                    ];
                  case 1:
                    resp = _a.sent();
                    return [4, resp.text()];
                  case 2:
                    result = _a.sent();
                    if (!result.includes("Server Error")) {
                      setFeelResult(result);
                    }
                    return [2];
                }
              });
            });
          })();
        }, 500);
      }
    },
    [feelExpression]
  );
  var feelInput = (0, react_1.useMemo)(
    function () {
      return (0, jsx_runtime_1.jsx)(
        src_1.FeelInput,
        {
          enabled: true,
          suggestionProvider: suggestionProvider,
          onChange: function (_event, content, _preview) {
            setFeelExpression(content);
          },
          options: {
            lineNumbers: "on",
          },
        },
        void 0
      );
    },
    [setFeelExpression, suggestionProvider]
  );
  var feelOutput = (0, react_1.useMemo)(
    function () {
      return (0, jsx_runtime_1.jsxs)(
        "div",
        __assign(
          { className: "feel-output" },
          { children: [(0, jsx_runtime_1.jsx)("h3", { children: "FEEL output" }, void 0), feelResult] }
        ),
        void 0
      );
    },
    [feelResult]
  );
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children: (0, jsx_runtime_1.jsxs)(
        "div",
        __assign({ className: "feel-editor" }, { children: [feelInput, feelOutput] }),
        void 0
      ),
    },
    void 0
  );
};
ReactDOM.render((0, jsx_runtime_1.jsx)(FeelEditor, {}, void 0), document.getElementById("root"));
//# sourceMappingURL=index.js.map

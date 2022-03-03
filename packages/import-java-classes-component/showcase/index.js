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
var ReactDOM = require("react-dom");
require("@patternfly/react-core/dist/styles/base.css");
require("./index.css");
var src_1 = require("../src");
var Showcase = function () {
  var getJavaCodeCompletionClassesMock = function (value) {
    return __awaiter(void 0, void 0, void 0, function () {
      var booClassesList, bookClassesList, boomClassesList;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            booClassesList = [{ query: "org.kie.test.kogito.Book" }, { query: "org.kie.test.kogito.Boom" }];
            bookClassesList = [{ query: "org.kie.test.kogito.Book" }];
            boomClassesList = [{ query: "org.kie.test.kogito.Boom" }];
            return [4, delay()];
          case 1:
            _a.sent();
            if (value === "Boo") {
              return [2, booClassesList];
            } else if (value === "Book") {
              return [2, bookClassesList];
            } else if (value === "Boom") {
              return [2, boomClassesList];
            } else {
              return [2, []];
            }
            return [2];
        }
      });
    });
  };
  var getJavaCodeCompletionFieldsMock = function (className) {
    return __awaiter(void 0, void 0, void 0, function () {
      var bookClassFieldsList, boomClassFieldsList, authorClassFieldsList;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            bookClassFieldsList = [
              { fqcn: "org.kie.test.kogito.Author", accessor: "author" },
              { fqcn: "java.lang.String", accessor: "title" },
              { fqcn: "java.lang.Integer", accessor: "year" },
              { fqcn: "org.kie.test.kogito.Boom", accessor: "boom" },
            ];
            boomClassFieldsList = [
              { fqcn: "java.util.Date", accessor: "time" },
              { fqcn: "java.lang.Boolean", accessor: "big" },
              { fqcn: "java.lang.String", accessor: "color" },
              { fqcn: "java.time.Duration", accessor: "countdown" },
            ];
            authorClassFieldsList = [
              { fqcn: "int", accessor: "age" },
              { fqcn: "java.lang.String", accessor: "name" },
              { fqcn: "java.lang.String", accessor: "color" },
              { fqcn: "java.time.Duration", accessor: "countdown" },
            ];
            return [4, delay()];
          case 1:
            _a.sent();
            if (className === "org.kie.test.kogito.Book") {
              return [2, bookClassFieldsList];
            } else if (className === "org.kie.test.kogito.Boom") {
              return [2, boomClassFieldsList];
            } else if (className === "org.kie.test.kogito.Author") {
              return [2, authorClassFieldsList];
            } else {
              return [2, []];
            }
            return [2];
        }
      });
    });
  };
  var isLanguageServerAvailableMock = function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, delay()];
          case 1:
            _a.sent();
            return [2, Math.random() < 0.75];
        }
      });
    });
  };
  var delay = function () {
    return new Promise(function (res) {
      return setTimeout(res, Math.random() * (3000 - 500) + 1000);
    });
  };
  var gwtLayerService = {
    importJavaClassesInDataTypeEditor: function (javaClasses) {
      return window.alert("Java Classes sent to editor:" + javaClasses.length);
    },
  };
  var javaCodeCompletionService = {
    getClasses: getJavaCodeCompletionClassesMock,
    getFields: getJavaCodeCompletionFieldsMock,
    isLanguageServerAvailable: isLanguageServerAvailableMock,
  };
  return (0, jsx_runtime_1.jsxs)(
    "div",
    __assign(
      { className: "showcase" },
      {
        children: [
          (0, jsx_runtime_1.jsxs)(
            "p",
            {
              children: [
                "This showcase demonstrates how the ",
                (0, jsx_runtime_1.jsx)("strong", { children: "Import Java Classes" }, void 0),
                " component works. To simulate Button Enabled/Disabled status, which is managed by the ",
                (0, jsx_runtime_1.jsx)("strong", { children: "JavaCodeCompletionService" }, void 0),
                ", this showcase will randomy enable (75%) or disable (25%) the button.",
              ],
            },
            void 0
          ),
          (0, jsx_runtime_1.jsxs)(
            "p",
            {
              children: [
                "To simulate the searching of a Java Classes on the Search box inside the wizard, please use values:",
                (0, jsx_runtime_1.jsx)("em", { children: "Boo" }, void 0),
                ", ",
                (0, jsx_runtime_1.jsx)("em", { children: "Boom" }, void 0),
                " or ",
                (0, jsx_runtime_1.jsx)("em", { children: "Book" }, void 0),
                " as key, which are mocked in this showcase to demonstrate the component usage.",
              ],
            },
            void 0
          ),
          (0, jsx_runtime_1.jsx)(
            "div",
            __assign(
              { className: "main" },
              {
                children: (0, jsx_runtime_1.jsx)(
                  src_1.ImportJavaClasses,
                  { gwtLayerService: gwtLayerService, javaCodeCompletionService: javaCodeCompletionService },
                  void 0
                ),
              }
            ),
            void 0
          ),
        ],
      }
    ),
    void 0
  );
};
ReactDOM.render((0, jsx_runtime_1.jsx)(Showcase, {}, void 0), document.getElementById("root"));
//# sourceMappingURL=index.js.map

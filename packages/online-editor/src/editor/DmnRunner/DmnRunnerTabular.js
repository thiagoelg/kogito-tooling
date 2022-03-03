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
var __values =
  (this && this.__values) ||
  function (o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        },
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmnRunnerTabular = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var DmnRunnerContext_1 = require("./DmnRunnerContext");
var DmnRunnerStatus_1 = require("./DmnRunnerStatus");
var unitables_1 = require("@kie-tools/unitables");
var EditorPageDockDrawer_1 = require("../EditorPageDockDrawer");
var channel_1 = require("@kie-tools-core/keyboard-shortcuts/dist/channel");
function DmnRunnerTabular(props) {
  var _this = this;
  var dmnRunnerState = (0, DmnRunnerContext_1.useDmnRunnerState)();
  var dmnRunnerDispatch = (0, DmnRunnerContext_1.useDmnRunnerDispatch)();
  var updateDmnRunnerResults = (0, react_1.useCallback)(
    function (tableData) {
      return __awaiter(_this, void 0, void 0, function () {
        var payloads, results, runnerResults, results_1, results_1_1, result, err_1;
        var e_1, _a;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              if (!props.isReady) {
                return [2];
              }
              return [
                4,
                Promise.all(
                  tableData.map(function (data) {
                    return dmnRunnerDispatch.preparePayload(data);
                  })
                ),
              ];
            case 1:
              payloads = _b.sent();
              _b.label = 2;
            case 2:
              _b.trys.push([2, 4, , 5]);
              return [
                4,
                Promise.all(
                  payloads.map(function (payload) {
                    if (payload === undefined) {
                      return;
                    }
                    return dmnRunnerState.service.result(payload);
                  })
                ),
              ];
            case 3:
              results = _b.sent();
              runnerResults = [];
              try {
                for (
                  results_1 = __values(results), results_1_1 = results_1.next();
                  !results_1_1.done;
                  results_1_1 = results_1.next()
                ) {
                  result = results_1_1.value;
                  if (Object.hasOwnProperty.call(result, "details") && Object.hasOwnProperty.call(result, "stack")) {
                    dmnRunnerDispatch.setError(true);
                    break;
                  }
                  if (result) {
                    runnerResults.push(result.decisionResults);
                  }
                }
              } catch (e_1_1) {
                e_1 = { error: e_1_1 };
              } finally {
                try {
                  if (results_1_1 && !results_1_1.done && (_a = results_1.return)) _a.call(results_1);
                } finally {
                  if (e_1) throw e_1.error;
                }
              }
              props.setDmnRunnerResults(runnerResults);
              return [3, 5];
            case 4:
              err_1 = _b.sent();
              return [2, undefined];
            case 5:
              return [2];
          }
        });
      });
    },
    [props.isReady, dmnRunnerDispatch, dmnRunnerState.service]
  );
  (0, react_1.useEffect)(
    function () {
      updateDmnRunnerResults(dmnRunnerState.inputRows);
    },
    [dmnRunnerState.inputRows]
  );
  var openRow = (0, react_1.useCallback)(
    function (rowIndex) {
      dmnRunnerDispatch.setMode(DmnRunnerStatus_1.DmnRunnerMode.FORM);
      dmnRunnerDispatch.setCurrentInputRowIndex(rowIndex);
      props.setPanelOpen(EditorPageDockDrawer_1.PanelId.NONE);
    },
    [dmnRunnerDispatch]
  );
  (0, channel_1.useElementsThatStopKeyboardEventsPropagation)(
    window,
    (0, react_1.useMemo)(function () {
      return [".unitables--dmn-runner-drawer"];
    }, [])
  );
  return (0, jsx_runtime_1.jsx)(
    "div",
    __assign(
      { style: { height: "100%" } },
      {
        children:
          dmnRunnerState.jsonSchema &&
          (0, jsx_runtime_1.jsx)(
            unitables_1.DmnAutoTable,
            {
              jsonSchema: dmnRunnerState.jsonSchema,
              inputRows: dmnRunnerState.inputRows,
              setInputRows: dmnRunnerDispatch.setInputRows,
              results: props.dmnRunnerResults,
              error: dmnRunnerState.error,
              setError: dmnRunnerDispatch.setError,
              openRow: openRow,
            },
            void 0
          ),
      }
    ),
    void 0
  );
}
exports.DmnRunnerTabular = DmnRunnerTabular;
//# sourceMappingURL=DmnRunnerTabular.js.map

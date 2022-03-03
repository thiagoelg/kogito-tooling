"use strict";
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
var envelope_1 = require("@kie-tools-core/keyboard-shortcuts/dist/envelope");
var operating_system_1 = require("@kie-tools-core/operating-system");
var react_1 = require("@testing-library/react");
describe("DefaultKeyboardShortcutsService", function () {
  test("keyPress", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var keyboardShortcutsService, _a, action;
      return __generator(this, function (_b) {
        keyboardShortcutsService = new envelope_1.DefaultKeyboardShortcutsService({
          os: operating_system_1.OperatingSystem.LINUX,
        });
        (_a = __read(getActionForKeyPress("ctrl+a", keyboardShortcutsService), 1)), (action = _a[0]);
        expect(keyboardShortcutsService.registered().length).toStrictEqual(1);
        fire("keydown", { ctrlKey: true, code: "KeyA" });
        expect(action).toHaveBeenCalled();
        expect(keyboardShortcutsService.registered().length).toStrictEqual(1);
        return [2];
      });
    });
  });
  test("keyPress on ignored tag", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var keyboardShortcutsService, input, _a, actionOnInput, div, _b, actionOnDiv;
      return __generator(this, function (_c) {
        keyboardShortcutsService = new envelope_1.DefaultKeyboardShortcutsService({
          os: operating_system_1.OperatingSystem.LINUX,
        });
        input = (0, react_1.render)((0, jsx_runtime_1.jsx)("input", { "data-testid": "an-input" }, void 0)).getByTestId(
          "an-input"
        );
        (_a = __read(getActionForKeyPress("ctrl+a", keyboardShortcutsService, { element: input }), 1)),
          (actionOnInput = _a[0]);
        (0, react_1.fireEvent)(input, new KeyboardEvent("keydown", { ctrlKey: true, code: "KeyA" }));
        expect(actionOnInput).not.toHaveBeenCalled();
        div = (0, react_1.render)((0, jsx_runtime_1.jsx)("div", { "data-testid": "a-div" }, void 0)).getByTestId(
          "a-div"
        );
        (_b = __read(getActionForKeyPress("ctrl+a", keyboardShortcutsService, { element: div }), 1)),
          (actionOnDiv = _b[0]);
        (0, react_1.fireEvent)(div, new KeyboardEvent("keydown", { ctrlKey: true, code: "KeyA" }));
        expect(actionOnDiv).toHaveBeenCalled();
        expect(keyboardShortcutsService.registered().length).toStrictEqual(2);
        return [2];
      });
    });
  });
  test("keyPress on macOS", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var keyboardShortcutsService, _a, action;
      return __generator(this, function (_b) {
        keyboardShortcutsService = new envelope_1.DefaultKeyboardShortcutsService({
          os: operating_system_1.OperatingSystem.MACOS,
        });
        (_a = __read(getActionForKeyPress("ctrl+a", keyboardShortcutsService), 1)), (action = _a[0]);
        expect(keyboardShortcutsService.registered().length).toStrictEqual(1);
        fire("keydown", { metaKey: true, code: "KeyA" });
        expect(action).toHaveBeenCalled();
        expect(keyboardShortcutsService.registered().length).toStrictEqual(1);
        return [2];
      });
    });
  });
  test("keyDown then keyUp", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var keyboardShortcutsService, _a, actionDown, actionUp, _b, actionDown2, actionUp2;
      return __generator(this, function (_c) {
        keyboardShortcutsService = new envelope_1.DefaultKeyboardShortcutsService({
          os: operating_system_1.OperatingSystem.LINUX,
        });
        (_a = __read(getActionsForKeyUpAndDown("ctrl+a", keyboardShortcutsService), 2)),
          (actionDown = _a[0]),
          (actionUp = _a[1]);
        expect(keyboardShortcutsService.registered().length).toStrictEqual(1);
        fire("keydown", { ctrlKey: true, code: "KeyA" });
        expect(actionDown).toHaveBeenCalled();
        fire("keyup", { code: "CtrlRight" });
        expect(actionUp).toHaveBeenCalled();
        expect(keyboardShortcutsService.registered().length).toStrictEqual(1);
        (_b = __read(getActionsForKeyUpAndDown("ctrl+b", keyboardShortcutsService), 2)),
          (actionDown2 = _b[0]),
          (actionUp2 = _b[1]);
        expect(keyboardShortcutsService.registered().length).toStrictEqual(2);
        fire("keydown", { ctrlKey: true, code: "KeyB" });
        expect(actionDown2).toHaveBeenCalled();
        fire("keyup", { code: "KeyB" });
        expect(actionUp2).toHaveBeenCalled();
        expect(keyboardShortcutsService.registered().length).toStrictEqual(2);
        return [2];
      });
    });
  });
  test("keyPressOnce", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var keyboardShortcutsService, _a, action;
      return __generator(this, function (_b) {
        keyboardShortcutsService = new envelope_1.DefaultKeyboardShortcutsService({
          os: operating_system_1.OperatingSystem.LINUX,
        });
        (_a = __read(getActionForKeyPressOnce("ctrl+c", keyboardShortcutsService), 1)), (action = _a[0]);
        expect(keyboardShortcutsService.registered().length).toStrictEqual(1);
        fire("keydown", { ctrlKey: true, code: "KeyC" });
        expect(action).toHaveBeenCalled();
        expect(keyboardShortcutsService.registered().length).toStrictEqual(0);
        return [2];
      });
    });
  });
  test("deregister", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var keyboardShortcutsService, _a, action, id;
      return __generator(this, function (_b) {
        keyboardShortcutsService = new envelope_1.DefaultKeyboardShortcutsService({
          os: operating_system_1.OperatingSystem.LINUX,
        });
        (_a = __read(getActionForKeyPress("ctrl+c", keyboardShortcutsService), 2)), (action = _a[0]), (id = _a[1]);
        expect(keyboardShortcutsService.registered().length).toStrictEqual(1);
        fire("keydown", { ctrlKey: true, code: "KeyC" });
        expect(action).toHaveBeenCalled();
        keyboardShortcutsService.deregister(id);
        expect(keyboardShortcutsService.registered().length).toStrictEqual(0);
        return [2];
      });
    });
  });
});
function fire(type, opts) {
  (0, react_1.fireEvent)(window, new KeyboardEvent(type, opts));
}
function getActionForKeyPress(combination, api, opts) {
  if (opts === void 0) {
    opts = {};
  }
  var fn = jest.fn();
  var id = api.registerKeyPress(
    combination,
    "Label",
    function () {
      fn();
      return Promise.resolve();
    },
    opts
  );
  return [fn, id];
}
function getActionForKeyPressOnce(combination, api) {
  var fn = jest.fn();
  var id = api.registerKeyPressOnce(
    combination,
    function () {
      fn();
      return Promise.resolve();
    },
    {}
  );
  return [fn, id];
}
function getActionsForKeyUpAndDown(combination, api) {
  var down = jest.fn();
  var up = jest.fn();
  var id = api.registerKeyDownThenUp(
    combination,
    "Label",
    function () {
      down();
      return Promise.resolve();
    },
    function () {
      up();
      return Promise.resolve();
    },
    {}
  );
  return [down, up, id];
}
//# sourceMappingURL=DefaultKeyboardShortcutsService.test.js.map

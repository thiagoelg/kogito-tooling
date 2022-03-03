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
exports.DefaultKeyboardShortcutsService = exports.ModKeys = void 0;
var operating_system_1 = require("@kie-tools-core/operating-system");
var ModKeys;
(function (ModKeys) {
  ModKeys["CTRL"] = "ctrl";
  ModKeys["META"] = "meta";
  ModKeys["ALT"] = "alt";
  ModKeys["SHIFT"] = "shift";
})((ModKeys = exports.ModKeys || (exports.ModKeys = {})));
var MODIFIER_KEY_NAMES = new Map([
  ["AltLeft", "alt"],
  ["AltRight", "alt"],
  ["CtrlLeft", "ctrl"],
  ["CtrlRight", "ctrl"],
  ["MetaLeft", "meta"],
  ["MetaRight", "meta"],
  ["ShiftLeft", "shift"],
  ["ShiftRight", "shift"],
]);
var KEY_CODES = new Map([
  ["/", "Slash"],
  ["esc", "Escape"],
  ["delete", "Delete"],
  ["backspace", "Backspace"],
  ["right", "ArrowRight"],
  ["left", "ArrowLeft"],
  ["up", "ArrowUp"],
  ["down", "ArrowDown"],
  ["a", "KeyA"],
  ["b", "KeyB"],
  ["c", "KeyC"],
  ["d", "KeyD"],
  ["e", "KeyE"],
  ["f", "KeyF"],
  ["g", "KeyG"],
  ["h", "KeyH"],
  ["i", "KeyI"],
  ["j", "KeyJ"],
  ["k", "KeyK"],
  ["l", "KeyL"],
  ["m", "KeyM"],
  ["n", "KeyN"],
  ["o", "KeyO"],
  ["p", "KeyP"],
  ["q", "KeyQ"],
  ["r", "KeyR"],
  ["s", "KeyS"],
  ["t", "KeyT"],
  ["u", "KeyU"],
  ["v", "KeyV"],
  ["w", "KeyW"],
  ["x", "KeyX"],
  ["y", "KeyY"],
  ["z", "KeyZ"],
]);
var IGNORED_TAGS = ["INPUT", "TEXTAREA", "SELECT", "OPTION"];
var DefaultKeyboardShortcutsService = (function () {
  function DefaultKeyboardShortcutsService(args) {
    this.args = args;
    this.eventIdentifiers = 1;
    this.keyBindings = new Map();
  }
  DefaultKeyboardShortcutsService.prototype.registerKeyDownThenUp = function (
    combination,
    label,
    onKeyDown,
    onKeyUp,
    opts
  ) {
    var _this = this;
    console.debug(
      "Registering shortcut (down/up) for "
        .concat(combination, " - ")
        .concat(label, ": ")
        .concat(opts === null || opts === void 0 ? void 0 : opts.repeat)
    );
    var keyBinding = {
      combination: combination,
      label: label,
      listener: function (event) {
        var _a;
        var keyboardEvent = getProcessableKeyboardEvent(combination, event, opts);
        if (!keyboardEvent) {
          return true;
        }
        if (keyboardEvent.type === "keydown") {
          if (setsEqual(_this.combinationKeySet(combination), _this.pressedKeySet(keyboardEvent))) {
            console.debug("Fired (down) [".concat(combination, "]!"));
            onKeyDown(keyboardEvent.target);
            return false;
          }
        } else if (keyboardEvent.type === "keyup") {
          if (
            _this
              .combinationKeySet(combination)
              .has((_a = MODIFIER_KEY_NAMES.get(keyboardEvent.code)) !== null && _a !== void 0 ? _a : "") ||
            _this.combinationKeySet(combination).has(keyboardEvent.code)
          ) {
            console.debug("Fired (up) [".concat(combination, "]!"));
            onKeyUp(keyboardEvent.target);
            return false;
          }
        }
        return true;
      },
      opts: opts,
    };
    this.keyBindings.set(this.eventIdentifiers, keyBinding);
    this.keyBindingElement(keyBinding).addEventListener("keydown", keyBinding.listener);
    this.keyBindingElement(keyBinding).addEventListener("keyup", keyBinding.listener);
    return this.eventIdentifiers++;
  };
  DefaultKeyboardShortcutsService.prototype.registerKeyPress = function (combination, label, onKeyPress, opts) {
    var _this = this;
    console.debug(
      "Registering shortcut (press) for "
        .concat(combination, " - ")
        .concat(label, ": ")
        .concat(opts === null || opts === void 0 ? void 0 : opts.repeat)
    );
    var keyBinding = {
      combination: combination,
      label: label,
      listener: function (event) {
        var keyboardEvent = getProcessableKeyboardEvent(combination, event, opts);
        if (!keyboardEvent) {
          return true;
        }
        if (setsEqual(_this.combinationKeySet(combination), _this.pressedKeySet(keyboardEvent))) {
          console.debug("Fired (press) [".concat(combination, "]!"));
          onKeyPress(keyboardEvent.target);
          return false;
        }
        return true;
      },
      opts: opts,
    };
    this.keyBindings.set(this.eventIdentifiers, keyBinding);
    this.keyBindingElement(keyBinding).addEventListener("keydown", keyBinding.listener);
    return this.eventIdentifiers++;
  };
  DefaultKeyboardShortcutsService.prototype.registerKeyPressOnce = function (combination, onKeyPress, opts) {
    var _this = this;
    var id = this.registerKeyPress(
      combination,
      "",
      function (target) {
        return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            onKeyPress(target);
            this.deregister(id);
            return [2];
          });
        });
      },
      opts ? __assign(__assign({}, opts), { hidden: true }) : opts
    );
    return id;
  };
  DefaultKeyboardShortcutsService.prototype.deregister = function (id) {
    var keyBinding = this.keyBindings.get(id);
    if (!keyBinding) {
      console.error("Unable to de-register keyboard shortcut with id ".concat(id, " because it was not registered."));
      return;
    }
    this.keyBindingElement(keyBinding).removeEventListener(
      "keypress",
      keyBinding === null || keyBinding === void 0 ? void 0 : keyBinding.listener
    );
    this.keyBindingElement(keyBinding).removeEventListener(
      "keydown",
      keyBinding === null || keyBinding === void 0 ? void 0 : keyBinding.listener
    );
    this.keyBindingElement(keyBinding).removeEventListener(
      "keyup",
      keyBinding === null || keyBinding === void 0 ? void 0 : keyBinding.listener
    );
    this.keyBindings.delete(id);
  };
  DefaultKeyboardShortcutsService.prototype.keyBindingElement = function (keyBinding) {
    var _a, _b;
    return (_b =
      (_a = keyBinding === null || keyBinding === void 0 ? void 0 : keyBinding.opts) === null || _a === void 0
        ? void 0
        : _a.element) !== null && _b !== void 0
      ? _b
      : window;
  };
  DefaultKeyboardShortcutsService.prototype.combinationKeySet = function (combination) {
    var keys = combination
      .split("+")
      .map(function (k) {
        return k.toLowerCase();
      })
      .map(function (k) {
        var _a;
        return (_a = KEY_CODES.get(k)) !== null && _a !== void 0 ? _a : k;
      });
    if (this.args.os === operating_system_1.OperatingSystem.MACOS) {
      return new Set(
        keys.map(function (k) {
          return k === ModKeys.CTRL ? ModKeys.META : k;
        })
      );
    } else {
      return new Set(keys);
    }
  };
  DefaultKeyboardShortcutsService.prototype.pressedKeySet = function (e) {
    var pressedKeySet = new Set();
    if (e.ctrlKey) {
      pressedKeySet.add(ModKeys.CTRL);
    }
    if (e.metaKey) {
      pressedKeySet.add(ModKeys.META);
    }
    if (e.altKey) {
      pressedKeySet.add(ModKeys.ALT);
    }
    if (e.shiftKey) {
      pressedKeySet.add(ModKeys.SHIFT);
    }
    if (Array.from(MODIFIER_KEY_NAMES.keys()).indexOf(e.code) === -1) {
      pressedKeySet.add(e.code);
    }
    return pressedKeySet;
  };
  DefaultKeyboardShortcutsService.prototype.registered = function () {
    return Array.from(this.keyBindings.values());
  };
  return DefaultKeyboardShortcutsService;
})();
exports.DefaultKeyboardShortcutsService = DefaultKeyboardShortcutsService;
function getProcessableKeyboardEvent(combination, event, opts) {
  if (event instanceof CustomEvent && IGNORED_TAGS.includes(event.detail.channelOriginalTargetTagName)) {
    console.debug(
      "Ignoring execution ("
        .concat(combination, ") because target is ")
        .concat(event.detail.channelOriginalTargetTagName)
    );
    return null;
  }
  var keyboardEvent = event instanceof CustomEvent ? new KeyboardEvent(event.detail.type, event.detail) : event;
  if (keyboardEvent.target instanceof Element && IGNORED_TAGS.includes(keyboardEvent.target.tagName)) {
    console.debug(
      "Ignoring execution (".concat(combination, ") because target is ").concat(keyboardEvent.target.tagName)
    );
    return null;
  }
  if (keyboardEvent.repeat && !(opts === null || opts === void 0 ? void 0 : opts.repeat)) {
    return null;
  }
  return keyboardEvent;
}
function setsEqual(lhs, rhs) {
  var e_1, _a;
  if (lhs.size !== rhs.size) {
    return false;
  }
  try {
    for (var lhs_1 = __values(lhs), lhs_1_1 = lhs_1.next(); !lhs_1_1.done; lhs_1_1 = lhs_1.next()) {
      var a = lhs_1_1.value;
      if (!rhs.has(a)) {
        return false;
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (lhs_1_1 && !lhs_1_1.done && (_a = lhs_1.return)) _a.call(lhs_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return true;
}
//# sourceMappingURL=DefaultKeyboardShortcutsService.js.map

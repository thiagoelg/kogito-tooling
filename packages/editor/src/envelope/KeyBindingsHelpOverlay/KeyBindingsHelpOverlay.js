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
exports.KeyBindingsHelpOverlay = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var react_1 = require("react");
var Text_1 = require("@patternfly/react-core/dist/js/components/Text");
var Modal_1 = require("@patternfly/react-core/dist/js/components/Modal");
var keyboard_icon_1 = require("@patternfly/react-icons/dist/js/icons/keyboard-icon");
var operating_system_1 = require("@kie-tools-core/operating-system");
var api_1 = require("../../api");
var i18n_1 = require("../i18n");
function KeyBindingsHelpOverlay() {
  var _this = this;
  var _a = __read((0, react_1.useState)(false), 2),
    showing = _a[0],
    setShowing = _a[1];
  var envelopeContext = (0, api_1.useKogitoEditorEnvelopeContext)();
  var i18n = (0, i18n_1.useEditorEnvelopeI18nContext)().i18n;
  var toggle = (0, react_1.useCallback)(
    function () {
      setShowing(!showing);
    },
    [showing]
  );
  var keyBindings = (0, react_1.useMemo)(
    function () {
      return removeDuplicatesByAttr(envelopeContext.services.keyboardShortcuts.registered(), "combination")
        .filter(function (k) {
          var _a;
          return !((_a = k.opts) === null || _a === void 0 ? void 0 : _a.hidden);
        })
        .map(function (k) {
          var _a, _b;
          return {
            combination: handleMacOsCombination(k.combination, envelopeContext.operatingSystem),
            category: (_a = k.label.split("|")[0]) === null || _a === void 0 ? void 0 : _a.trim(),
            label: (_b = k.label.split("|")[1]) === null || _b === void 0 ? void 0 : _b.trim(),
          };
        })
        .reduce(function (lhs, rhs) {
          if (!lhs.has(rhs.category)) {
            lhs.set(rhs.category, new Set([{ label: rhs.label, combination: rhs.combination }]));
          } else {
            lhs.get(rhs.category).add({ label: rhs.label, combination: rhs.combination });
          }
          return lhs;
        }, new Map());
    },
    [envelopeContext.services.keyboardShortcuts.registered()]
  );
  (0, react_1.useEffect)(
    function () {
      var id = envelopeContext.services.keyboardShortcuts.registerKeyPress(
        "shift+/",
        ""
          .concat(i18n.keyBindingsHelpOverlay.categories.help, " | ")
          .concat(i18n.keyBindingsHelpOverlay.commands.showKeyboardOverlay),
        function () {
          return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
              return [2, setShowing(true)];
            });
          });
        },
        { element: window }
      );
      return function () {
        return envelopeContext.services.keyboardShortcuts.deregister(id);
      };
    },
    [i18n]
  );
  (0, react_1.useEffect)(
    function () {
      if (showing) {
        var id_1 = envelopeContext.services.keyboardShortcuts.registerKeyPressOnce(
          "esc",
          function () {
            return __awaiter(_this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                return [2, setShowing(false)];
              });
            });
          },
          {
            element: window,
          }
        );
        return function () {
          return envelopeContext.services.keyboardShortcuts.deregister(id_1);
        };
      }
    },
    [showing]
  );
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        (0, jsx_runtime_1.jsx)(
          "div",
          __assign(
            {
              onClick: function () {
                return setShowing(!showing);
              },
              className: "kie-tools--keyboard-shortcuts kie-tools--keyboard-shortcuts-icon",
              "data-testid": "keyboard-shortcuts-help-overlay-icon",
            },
            { children: (0, jsx_runtime_1.jsx)(keyboard_icon_1.KeyboardIcon, {}, void 0) }
          ),
          void 0
        ),
        (0, jsx_runtime_1.jsx)(
          Modal_1.Modal,
          __assign(
            {
              appendTo: document.body,
              title: i18n.keyBindingsHelpOverlay.title,
              isOpen: showing,
              width: "60%",
              onClose: toggle,
              "data-testid": "keyboard-shortcuts-help-overlay",
              className: "kie-tools--keyboard-shortcuts",
            },
            {
              children: (0, jsx_runtime_1.jsx)(
                Text_1.TextContent,
                {
                  children: (0, jsx_runtime_1.jsx)(
                    Text_1.TextList,
                    __assign(
                      { component: Text_1.TextListVariants.dl },
                      {
                        children: Array.from(keyBindings.keys()).map(function (category) {
                          return (0, jsx_runtime_1.jsxs)(
                            React.Fragment,
                            {
                              children: [
                                (0, jsx_runtime_1.jsx)(
                                  Text_1.Text,
                                  __assign({ component: Text_1.TextVariants.h2 }, { children: category }),
                                  void 0
                                ),
                                Array.from(keyBindings.get(category)).map(function (keyBinding) {
                                  return (0,
                                  jsx_runtime_1.jsxs)(React.Fragment, { children: [(0, jsx_runtime_1.jsx)(Text_1.TextListItem, __assign({ component: Text_1.TextListItemVariants.dt }, { children: formatKeyBindingCombination(keyBinding.combination) }), void 0), (0, jsx_runtime_1.jsx)(Text_1.TextListItem, __assign({ component: Text_1.TextListItemVariants.dd }, { children: keyBinding.label }), void 0)] }, keyBinding.combination);
                                }),
                              ],
                            },
                            category
                          );
                        }),
                      }
                    ),
                    void 0
                  ),
                },
                void 0
              ),
            }
          ),
          void 0
        ),
      ],
    },
    void 0
  );
}
exports.KeyBindingsHelpOverlay = KeyBindingsHelpOverlay;
function handleMacOsCombination(combination, os) {
  if (os === operating_system_1.OperatingSystem.MACOS) {
    return combination.replace("ctrl", "cmd");
  }
  return combination;
}
function removeDuplicatesByAttr(myArr, prop) {
  return myArr.filter(function (obj, pos, arr) {
    return (
      arr
        .map(function (mapObj) {
          return mapObj[prop];
        })
        .indexOf(obj[prop]) === pos
    );
  });
}
function formatKeyBindingCombination(combination) {
  return combination
    .split("+")
    .map(function (w) {
      return w.replace(/^\w/, function (c) {
        return c.toUpperCase();
      });
    })
    .join(" + ");
}
//# sourceMappingURL=KeyBindingsHelpOverlay.js.map

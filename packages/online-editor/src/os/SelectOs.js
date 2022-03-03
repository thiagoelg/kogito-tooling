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
exports.SelectOs = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Select_1 = require("@patternfly/react-core/dist/js/components/Select");
var react_1 = require("react");
var operating_system_1 = require("@kie-tools-core/operating-system");
var LINUX = "Linux";
var MACOS = "macOS";
var WINDOWS = "Windows";
function SelectOs(props) {
  var _a;
  var _b = __read((0, react_1.useState)(false), 2),
    isSelectExpanded = _b[0],
    setSelectIsExpanded = _b[1];
  var onSelectOsToggle = (0, react_1.useCallback)(function (isExpanded) {
    setSelectIsExpanded(isExpanded);
  }, []);
  var onSelectOperatingSystem = (0, react_1.useCallback)(
    function (e, selection) {
      props.onSelect(selection);
      setSelectIsExpanded(false);
    },
    [props]
  );
  var availableOperatingSystems = (0, react_1.useMemo)(
    function () {
      var _a, _b, _c, _d, _e, _f;
      return new Map([
        [
          operating_system_1.OperatingSystem.LINUX,
          (_b = (_a = props.i18n) === null || _a === void 0 ? void 0 : _a.names.linux) !== null && _b !== void 0
            ? _b
            : LINUX,
        ],
        [
          operating_system_1.OperatingSystem.MACOS,
          (_d = (_c = props.i18n) === null || _c === void 0 ? void 0 : _c.names.macos) !== null && _d !== void 0
            ? _d
            : MACOS,
        ],
        [
          operating_system_1.OperatingSystem.WINDOWS,
          (_f = (_e = props.i18n) === null || _e === void 0 ? void 0 : _e.names.windows) !== null && _f !== void 0
            ? _f
            : WINDOWS,
        ],
      ]);
    },
    [props.i18n]
  );
  return (0, jsx_runtime_1.jsx)(
    "div",
    __assign(
      { className: (_a = props.className) !== null && _a !== void 0 ? _a : "", style: { width: "140px" } },
      {
        children: (0, jsx_runtime_1.jsx)(
          Select_1.Select,
          __assign(
            {
              variant: Select_1.SelectVariant.single,
              "aria-label": "Select operating system",
              onToggle: onSelectOsToggle,
              onSelect: onSelectOperatingSystem,
              selections: props.selected,
              isOpen: isSelectExpanded,
              "aria-labelledby": "select-os",
              isDisabled: false,
              direction: props.direction,
              menuAppendTo: "parent",
            },
            {
              children: Array.from(availableOperatingSystems.entries()).map(function (_a) {
                var _b = __read(_a, 2),
                  key = _b[0],
                  label = _b[1];
                return (0,
                jsx_runtime_1.jsx)(Select_1.SelectOption, __assign({ isDisabled: false, value: key, isPlaceholder: false }, { children: label }), key);
              }),
            }
          ),
          void 0
        ),
      }
    ),
    void 0
  );
}
exports.SelectOs = SelectOs;
//# sourceMappingURL=SelectOs.js.map

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
exports.FullScreenToolbar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var i18n_1 = require("../../i18n");
function FullScreenToolbar(props) {
  var i18n = (0, i18n_1.useChromeExtensionI18n)().i18n;
  return (0, jsx_runtime_1.jsx)(
    "div",
    __assign(
      { className: "kogito-iframe-fullscreen-toolbar" },
      {
        children: (0, jsx_runtime_1.jsx)(
          "a",
          __assign(
            { "data-testid": "exit-fullscreen-button", href: "#", onClick: props.onExitFullScreen },
            { children: i18n.single.exitFullScreen }
          ),
          void 0
        ),
      }
    ),
    void 0
  );
}
exports.FullScreenToolbar = FullScreenToolbar;
//# sourceMappingURL=FullScreenToolbar.js.map

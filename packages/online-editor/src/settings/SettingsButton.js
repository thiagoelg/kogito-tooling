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
exports.SettingsButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var cog_icon_1 = require("@patternfly/react-icons/dist/js/icons/cog-icon");
var SettingsContext_1 = require("./SettingsContext");
function SettingsButton() {
  var settingsDispatch = (0, SettingsContext_1.useSettingsDispatch)();
  return (0, jsx_runtime_1.jsx)(
    Button_1.Button,
    __assign(
      {
        variant: Button_1.ButtonVariant.plain,
        onClick: function () {
          return settingsDispatch.open();
        },
        "aria-label": "Settings",
        className: "kie-tools--masthead-hoverable-dark",
      },
      { children: (0, jsx_runtime_1.jsx)(cog_icon_1.CogIcon, {}, void 0) }
    ),
    void 0
  );
}
exports.SettingsButton = SettingsButton;
//# sourceMappingURL=SettingsButton.js.map

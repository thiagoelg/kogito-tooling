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
exports.ResponsiveDropdownToggle = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Dropdown_1 = require("@patternfly/react-core/dist/js/components/Dropdown");
var ResponsiveDropdownContext_1 = require("./ResponsiveDropdownContext");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
function ResponsiveDropdownToggle(props) {
  var isModal = (0, ResponsiveDropdownContext_1.useResponsiveDropdownContext)().isModal;
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children: isModal
        ? (0, jsx_runtime_1.jsx)(
            Button_1.Button,
            __assign(
              {
                variant: Button_1.ButtonVariant.plain,
                onClick: function () {
                  var _a;
                  return (_a = props.onToggle) === null || _a === void 0
                    ? void 0
                    : _a.call(props, props.isOpen || false);
                },
                className: props.className,
              },
              { children: props.children }
            ),
            void 0
          )
        : (0, jsx_runtime_1.jsx)(Dropdown_1.DropdownToggle, __assign({}, props), void 0),
    },
    void 0
  );
}
exports.ResponsiveDropdownToggle = ResponsiveDropdownToggle;
//# sourceMappingURL=ResponsiveDropdownToggle.js.map

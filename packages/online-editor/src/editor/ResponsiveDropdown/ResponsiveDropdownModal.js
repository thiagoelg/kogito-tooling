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
exports.ResponsiveDropdownModal = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Modal_1 = require("@patternfly/react-core/dist/js/components/Modal");
function ResponsiveDropdownModal(_a) {
  var isOpen = _a.isOpen,
    onClose = _a.onClose,
    title = _a.title,
    children = _a.children;
  return (0, jsx_runtime_1.jsx)(
    Modal_1.Modal,
    __assign(
      {
        isOpen: isOpen !== null && isOpen !== void 0 ? isOpen : false,
        onClose: onClose,
        hasNoBodyWrapper: true,
        variant: Modal_1.ModalVariant.small,
        title: title,
        "aria-label": title,
        className: "kogito--editor__responsive-dropdown-modal",
      },
      {
        children: (0, jsx_runtime_1.jsx)(
          "div",
          __assign({ className: "kogito--editor__responsive-dropdown-container" }, { children: children }),
          void 0
        ),
      }
    ),
    void 0
  );
}
exports.ResponsiveDropdownModal = ResponsiveDropdownModal;
//# sourceMappingURL=ResponsiveDropdownModal.js.map

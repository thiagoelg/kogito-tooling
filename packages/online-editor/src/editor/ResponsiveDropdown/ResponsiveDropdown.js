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
exports.ResponsiveDropdown = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Dropdown_1 = require("@patternfly/react-core/dist/js/components/Dropdown");
var hooks_1 = require("./hooks");
var ResponsiveDropdownContext_1 = require("./ResponsiveDropdownContext");
var ResponsiveDropdownModal_1 = require("./ResponsiveDropdownModal");
function ResponsiveDropdown(props) {
  var isModal =
    (0, hooks_1.useWindowSizeRelationToBreakpoint)(props.switchingBreakpoint || "sm") ===
    hooks_1.RelationToBreakpoint.Below;
  return (0, jsx_runtime_1.jsx)(
    ResponsiveDropdownContext_1.ResponsiveDropdownContext.Provider,
    __assign(
      { value: { isModal: isModal } },
      {
        children: isModal
          ? (0, jsx_runtime_1.jsxs)(
              jsx_runtime_1.Fragment,
              {
                children: [
                  props.toggle,
                  (0, jsx_runtime_1.jsx)(
                    ResponsiveDropdownModal_1.ResponsiveDropdownModal,
                    __assign(
                      {
                        isOpen: props.isOpen,
                        onClose: function () {
                          var _a;
                          return (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
                        },
                        title: props.title,
                      },
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          Dropdown_1.Dropdown,
                          __assign({}, props, {
                            isOpen: true,
                            isFullHeight: true,
                            toggle: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0),
                            style: { width: "100%" },
                          }),
                          void 0
                        ),
                      }
                    ),
                    void 0
                  ),
                ],
              },
              void 0
            )
          : (0, jsx_runtime_1.jsx)(
              Dropdown_1.Dropdown,
              __assign({}, props, {
                dropdownItems: [
                  (0, jsx_runtime_1.jsx)(
                    Dropdown_1.DropdownItem,
                    __assign({ isDisabled: true }, { children: props.title }),
                    "responsive-dropdown-title"
                  ),
                  (0, jsx_runtime_1.jsx)(Dropdown_1.DropdownSeparator, {}, "responsive-dropdown-separator"),
                  props.dropdownItems,
                ],
              }),
              void 0
            ),
      }
    ),
    void 0
  );
}
exports.ResponsiveDropdown = ResponsiveDropdown;
//# sourceMappingURL=ResponsiveDropdown.js.map

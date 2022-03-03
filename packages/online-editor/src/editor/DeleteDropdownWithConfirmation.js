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
exports.DeleteDropdownWithConfirmation = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Dropdown_1 = require("@patternfly/react-core/dist/js/components/Dropdown");
var trash_icon_1 = require("@patternfly/react-icons/dist/js/icons/trash-icon");
function DeleteDropdownWithConfirmation(props) {
  var _a = __read((0, react_1.useState)(false), 2),
    isDeleteDropdownOpen = _a[0],
    setDeleteDropdownOpen = _a[1];
  return (0, jsx_runtime_1.jsx)(
    Dropdown_1.Dropdown,
    {
      onClick: function (e) {
        return e.stopPropagation();
      },
      className: "kie-tools--masthead-hoverable",
      onSelect: function () {
        return setDeleteDropdownOpen(false);
      },
      isOpen: isDeleteDropdownOpen,
      isPlain: true,
      position: Dropdown_1.DropdownPosition.right,
      toggle: (0, jsx_runtime_1.jsx)(
        Dropdown_1.DropdownToggle,
        __assign(
          {
            toggleIndicator: null,
            onToggle: setDeleteDropdownOpen,
            onClick: function (e) {
              return e.stopPropagation();
            },
          },
          { children: (0, jsx_runtime_1.jsx)(trash_icon_1.TrashIcon, {}, void 0) }
        ),
        void 0
      ),
      dropdownItems: [
        (0, jsx_runtime_1.jsx)(
          Dropdown_1.DropdownGroup,
          __assign(
            { label: "Are you sure?" },
            {
              children: (0, jsx_runtime_1.jsx)(
                Dropdown_1.DropdownItem,
                __assign({ onClick: props.onDelete }, { children: props.item }),
                void 0
              ),
            }
          ),
          "confirm-delete"
        ),
      ],
    },
    void 0
  );
}
exports.DeleteDropdownWithConfirmation = DeleteDropdownWithConfirmation;
//# sourceMappingURL=DeleteDropdownWithConfirmation.js.map

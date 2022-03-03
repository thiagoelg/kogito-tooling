"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResponsiveDropdownContext = exports.ResponsiveDropdownContext = void 0;
var react_1 = require("react");
exports.ResponsiveDropdownContext = react_1.default.createContext({ isModal: false });
function useResponsiveDropdownContext() {
  return (0, react_1.useContext)(exports.ResponsiveDropdownContext);
}
exports.useResponsiveDropdownContext = useResponsiveDropdownContext;
//# sourceMappingURL=ResponsiveDropdownContext.js.map

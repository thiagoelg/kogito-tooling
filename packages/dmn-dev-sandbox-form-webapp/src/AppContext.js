"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApp = exports.AppContext = void 0;
var react_1 = require("react");
exports.AppContext = (0, react_1.createContext)({});
function useApp() {
  return (0, react_1.useContext)(exports.AppContext);
}
exports.useApp = useApp;
//# sourceMappingURL=AppContext.js.map

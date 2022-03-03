"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGlobals = exports.GlobalContext = void 0;
var React = require("react");
exports.GlobalContext = React.createContext({});
function useGlobals() {
  return React.useContext(exports.GlobalContext);
}
exports.useGlobals = useGlobals;
//# sourceMappingURL=GlobalContext.js.map

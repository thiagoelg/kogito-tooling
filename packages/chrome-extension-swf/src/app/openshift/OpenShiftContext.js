"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOpenShift = exports.OpenShiftContext = exports.SW_JSON_EXTENSION = void 0;
var React = require("react");
var react_1 = require("react");
exports.SW_JSON_EXTENSION = "sw.json";
exports.OpenShiftContext = React.createContext({});
function useOpenShift() {
  return (0, react_1.useContext)(exports.OpenShiftContext);
}
exports.useOpenShift = useOpenShift;
//# sourceMappingURL=OpenShiftContext.js.map

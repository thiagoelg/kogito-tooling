"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDmnRunnerDispatch =
  exports.useDmnRunnerState =
  exports.DmnRunnerDispatchContext =
  exports.DmnRunnerStateContext =
    void 0;
var React = require("react");
var react_1 = require("react");
exports.DmnRunnerStateContext = React.createContext({});
exports.DmnRunnerDispatchContext = React.createContext({});
function useDmnRunnerState() {
  return (0, react_1.useContext)(exports.DmnRunnerStateContext);
}
exports.useDmnRunnerState = useDmnRunnerState;
function useDmnRunnerDispatch() {
  return (0, react_1.useContext)(exports.DmnRunnerDispatchContext);
}
exports.useDmnRunnerDispatch = useDmnRunnerDispatch;
//# sourceMappingURL=DmnRunnerContext.js.map

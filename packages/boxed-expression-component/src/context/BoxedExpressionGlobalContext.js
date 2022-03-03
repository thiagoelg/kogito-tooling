"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBoxedExpression = exports.BoxedExpressionGlobalContext = void 0;
var React = require("react");
var react_1 = require("react");
exports.BoxedExpressionGlobalContext = React.createContext({});
function useBoxedExpression() {
  return (0, react_1.useContext)(exports.BoxedExpressionGlobalContext);
}
exports.useBoxedExpression = useBoxedExpression;
//# sourceMappingURL=BoxedExpressionGlobalContext.js.map

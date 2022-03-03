"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEffectAfterFirstRender = void 0;
var react_1 = require("react");
function useEffectAfterFirstRender(func, deps) {
  var firstRender = (0, react_1.useRef)(true);
  (0, react_1.useEffect)(function () {
    if (!firstRender.current) {
      func();
    } else {
      firstRender.current = false;
    }
  }, deps);
}
exports.useEffectAfterFirstRender = useEffectAfterFirstRender;
//# sourceMappingURL=customEffects.js.map

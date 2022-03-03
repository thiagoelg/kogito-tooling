"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRoutes =
  exports.useNavigationBlocker =
  exports.useNavigationStatusToggle =
  exports.useNavigationBlockersBypass =
  exports.useNavigationStatus =
    void 0;
var react_1 = require("react");
var NavigationContextProvider_1 = require("./NavigationContextProvider");
var Routes_1 = require("./Routes");
function useNavigationBlockerContext() {
  return (0, react_1.useContext)(NavigationContextProvider_1.NavigationBlockerContext);
}
function useNavigationStatus() {
  return (0, react_1.useContext)(NavigationContextProvider_1.NavigationStatusContext);
}
exports.useNavigationStatus = useNavigationStatus;
function useNavigationBlockersBypass() {
  var bypass = useNavigationBlockerContext().bypass;
  return (0, react_1.useMemo)(
    function () {
      return { execute: bypass };
    },
    [bypass]
  );
}
exports.useNavigationBlockersBypass = useNavigationBlockersBypass;
function useNavigationStatusToggle() {
  var unblock = useNavigationBlockerContext().unblock;
  return (0, react_1.useMemo)(
    function () {
      return { unblock: unblock };
    },
    [unblock]
  );
}
exports.useNavigationStatusToggle = useNavigationStatusToggle;
function useNavigationBlocker(key, blocker) {
  var _a = useNavigationBlockerContext(),
    addBlocker = _a.addBlocker,
    removeBlocker = _a.removeBlocker;
  (0, react_1.useEffect)(
    function () {
      addBlocker(key, blocker);
      return function () {
        return removeBlocker(key);
      };
    },
    [addBlocker, removeBlocker, key, blocker]
  );
}
exports.useNavigationBlocker = useNavigationBlocker;
function useRoutes() {
  return (0, react_1.useMemo)(function () {
    return Routes_1.routes;
  }, []);
}
exports.useRoutes = useRoutes;
//# sourceMappingURL=Hooks.js.map

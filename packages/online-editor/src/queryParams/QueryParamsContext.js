"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQueryParam = exports.useQueryParams = void 0;
var react_router_1 = require("react-router");
var react_1 = require("react");
var Routes_1 = require("../navigation/Routes");
function useQueryParams() {
  var location = (0, react_router_1.useLocation)();
  return (0, react_1.useMemo)(
    function () {
      return (0, Routes_1.newQueryParamsImpl)(location.search);
    },
    [location.search]
  );
}
exports.useQueryParams = useQueryParams;
function useQueryParam(name) {
  var queryParams = useQueryParams();
  return (0, react_1.useMemo)(
    function () {
      return queryParams.get(name);
    },
    [queryParams, name]
  );
}
exports.useQueryParam = useQueryParam;
//# sourceMappingURL=QueryParamsContext.js.map

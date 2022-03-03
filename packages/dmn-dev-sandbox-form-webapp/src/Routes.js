"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = exports.newQueryParamsImpl = exports.Route = exports.PathParams = exports.QueryParams = void 0;
var IS_HASH_ROUTER = true;
var QueryParams;
(function (QueryParams) {})((QueryParams = exports.QueryParams || (exports.QueryParams = {})));
var PathParams;
(function (PathParams) {
  PathParams["EXTENSION"] = "extension";
  PathParams["FILE_PATH"] = "filePath";
  PathParams["MODEL_NAME"] = "modelName";
})((PathParams = exports.PathParams || (exports.PathParams = {})));
var Route = (function () {
  function Route(pathDelegate) {
    this.pathDelegate = pathDelegate;
  }
  Route.prototype.url = function (args) {
    var _a, _b;
    var SEP = ((_a = args.base) === null || _a === void 0 ? void 0 : _a.endsWith("/")) ? "" : "/";
    var HASH = IS_HASH_ROUTER ? "#" : "";
    var path = this.pathDelegate(args.pathParams);
    var queryParams = (_b = args.queryParams) !== null && _b !== void 0 ? _b : {};
    if (!args.base && Object.keys(queryParams).length <= 0) {
      return "".concat(HASH).concat(path);
    }
    if (!args.base) {
      return "".concat(HASH).concat(path, "?").concat(this.queryString(queryParams));
    }
    if (Object.keys(queryParams).length <= 0) {
      return "".concat(args.base).concat(SEP).concat(HASH).concat(path);
    }
    return "".concat(args.base).concat(SEP).concat(HASH).concat(path, "?").concat(this.queryString(queryParams));
  };
  Route.prototype.queryString = function (queryParams) {
    return decodeURIComponent(new URLSearchParams(queryParams).toString());
  };
  Route.prototype.queryArgs = function (queryString) {
    return queryString;
  };
  Route.prototype.path = function (pathParams) {
    return this.pathDelegate(pathParams);
  };
  return Route;
})();
exports.Route = Route;
function newQueryParamsImpl(queryString) {
  return {
    has: function (name) {
      return new URLSearchParams(queryString).has(name);
    },
    get: function (name) {
      var val = new URLSearchParams(queryString).get(name);
      return !val ? undefined : decodeURIComponent(val);
    },
    with: function (name, value) {
      var urlSearchParams = new URLSearchParams(queryString);
      urlSearchParams.set(name, value);
      return newQueryParamsImpl(decodeURIComponent(urlSearchParams.toString()));
    },
    without: function (name) {
      var urlSearchParams = new URLSearchParams(queryString);
      urlSearchParams.delete(name);
      return newQueryParamsImpl(decodeURIComponent(urlSearchParams.toString()));
    },
    toString: function () {
      return decodeURIComponent(new URLSearchParams(queryString).toString());
    },
  };
}
exports.newQueryParamsImpl = newQueryParamsImpl;
exports.routes = {
  root: new Route(function () {
    return "/";
  }),
  error: new Route(function () {
    return "/error";
  }),
  dataJson: new Route(function () {
    return "/data.json";
  }),
  swaggerUi: new Route(function () {
    return "/q/swagger-ui";
  }),
  dmnResult: new Route(function (_a) {
    var modelName = _a.modelName;
    return "/".concat(modelName, "/dmnresult");
  }),
  form: new Route(function (_a) {
    var filePath = _a.filePath;
    return "/form/".concat(filePath);
  }),
  model: new Route(function (_a) {
    var filePath = _a.filePath;
    return "/".concat(filePath);
  }),
  static: {
    images: {
      kieHorizontalLogoReverse: new Route(function () {
        return "images/kie_horizontal_rgb_fullcolor_reverse.svg";
      }),
    },
  },
};
//# sourceMappingURL=Routes.js.map

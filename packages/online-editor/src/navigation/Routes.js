"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = exports.newQueryParamsImpl = exports.Route = exports.PathParams = exports.QueryParams = void 0;
var IS_HASH_ROUTER = true;
var QueryParams;
(function (QueryParams) {
  QueryParams["SETTINGS"] = "settings";
  QueryParams["URL"] = "url";
  QueryParams["BRANCH"] = "branch";
  QueryParams["DMN_RUNNER_FORM_INPUTS"] = "formInputs";
  QueryParams["EXPAND"] = "expand";
})((QueryParams = exports.QueryParams || (exports.QueryParams = {})));
var PathParams;
(function (PathParams) {
  PathParams["EXTENSION"] = "extension";
  PathParams["WORKSPACE_ID"] = "workspaceId";
  PathParams["FILE_RELATIVE_PATH"] = "fileRelativePath";
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
  download: new Route(function () {
    return "/download";
  }),
  home: new Route(function () {
    return "/";
  }),
  editor: new Route(function (_a) {
    var extension = _a.extension;
    return "/editor/".concat(extension);
  }),
  newModel: new Route(function (_a) {
    var extension = _a.extension;
    return "/new/".concat(extension);
  }),
  importModel: new Route(function () {
    return "/import";
  }),
  workspaceWithFilePath: new Route(function (_a) {
    var workspaceId = _a.workspaceId,
      fileRelativePath = _a.fileRelativePath,
      extension = _a.extension;
    return "/".concat(workspaceId, "/file/").concat(fileRelativePath, ".").concat(extension);
  }),
  static: {
    sample: new Route(function (_a) {
      var type = _a.type;
      return "samples/Sample.".concat(type);
    }),
    images: {
      vscodeLogoBlue: new Route(function () {
        return "images/vscode.svg";
      }),
      vscodeLogoWhite: new Route(function () {
        return "images/vscode-alt.svg";
      }),
      kogitoLogoWhite: new Route(function () {
        return "images/kogito_logo_white.png";
      }),
      kieHorizontalLogoReverse: new Route(function () {
        return "images/kie_horizontal_rgb_fullcolor_reverse.svg";
      }),
      dmnRunnerGif: new Route(function () {
        return "images/dmn-runner2.gif";
      }),
      dmnDevSandboxGif: new Route(function () {
        return "images/dmn-dev-sandbox.gif";
      }),
    },
  },
};
//# sourceMappingURL=Routes.js.map

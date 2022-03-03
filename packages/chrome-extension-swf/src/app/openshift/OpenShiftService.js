"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __values =
  (this && this.__values) ||
  function (o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        },
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenShiftService = exports.DEFAULT_CREATED_BY = void 0;
var Build_1 = require("./resources/Build");
var BuildConfig_1 = require("./resources/BuildConfig");
var Deployment_1 = require("./resources/Deployment");
var ImageStream_1 = require("./resources/ImageStream");
var Resource_1 = require("./resources/Resource");
var Route_1 = require("./resources/Route");
var Service_1 = require("./resources/Service");
exports.DEFAULT_CREATED_BY = "kie-tools-chrome-extension";
var OpenShiftService = (function () {
  function OpenShiftService() {}
  OpenShiftService.prototype.getWorkflowFileName = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var commonArgs, deployments, deployment;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            commonArgs = {
              host: args.config.host,
              namespace: args.config.namespace,
              token: args.config.token,
              createdBy: exports.DEFAULT_CREATED_BY,
            };
            return [4, this.fetchResource(args.config.proxy, new Deployment_1.ListDeployments(commonArgs))];
          case 1:
            deployments = _a.sent();
            if (deployments.items.length === 0) {
              return [2];
            }
            deployment = deployments.items.find(function (item) {
              return item.metadata.name === args.resourceName;
            });
            if (!deployment) {
              return [2];
            }
            return [2, deployment.metadata.annotations[Resource_1.KOGITO_WORKFLOW_FILE]];
        }
      });
    });
  };
  OpenShiftService.prototype.getDeploymentRoute = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var commonArgs, route;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            commonArgs = {
              host: args.config.host,
              namespace: args.config.namespace,
              token: args.config.token,
              createdBy: exports.DEFAULT_CREATED_BY,
            };
            return [
              4,
              this.fetchResource(
                args.config.proxy,
                new Route_1.GetRoute(__assign(__assign({}, commonArgs), { resourceName: args.resourceName }))
              ),
            ];
          case 1:
            route = _a.sent();
            return [2, this.composeBaseUrl(route)];
        }
      });
    });
  };
  OpenShiftService.prototype.getResourceRouteMap = function (config) {
    return __awaiter(this, void 0, void 0, function () {
      var commonArgs, deployments, routes;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            commonArgs = {
              host: config.host,
              namespace: config.namespace,
              token: config.token,
              createdBy: exports.DEFAULT_CREATED_BY,
            };
            return [4, this.fetchResource(config.proxy, new Deployment_1.ListDeployments(commonArgs))];
          case 1:
            deployments = _a.sent();
            if (deployments.items.length === 0) {
              return [2, new Map()];
            }
            return [4, this.fetchResource(config.proxy, new Route_1.ListRoutes(commonArgs))];
          case 2:
            routes = _a.sent().items.filter(function (route) {
              return route.metadata.labels[Resource_1.KOGITO_CREATED_BY] === exports.DEFAULT_CREATED_BY;
            });
            return [
              2,
              new Map(
                deployments.items
                  .filter(function (deployment) {
                    return (
                      Resource_1.KOGITO_CREATED_BY in deployment.metadata.labels &&
                      deployment.metadata.labels[Resource_1.KOGITO_CREATED_BY] === exports.DEFAULT_CREATED_BY &&
                      routes.some(function (route) {
                        return route.metadata.name === deployment.metadata.name;
                      })
                    );
                  })
                  .map(function (deployment) {
                    var route = routes.find(function (route) {
                      return route.metadata.name === deployment.metadata.name;
                    });
                    return [deployment.metadata.name, _this.composeBaseUrl(route)];
                  })
              ),
            ];
        }
      });
    });
  };
  OpenShiftService.prototype.composeBaseUrl = function (route) {
    return "https://".concat(route.spec.host);
  };
  OpenShiftService.prototype.deploy = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var resourceName, commonArgs, rollbacks, buildConfig, processedFileContent;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            resourceName = "swf-".concat(this.generateRandomId());
            commonArgs = {
              host: args.config.host,
              namespace: args.config.namespace,
              token: args.config.token,
              resourceName: resourceName,
              createdBy: exports.DEFAULT_CREATED_BY,
            };
            rollbacks = [
              new Build_1.DeleteBuild(commonArgs),
              new BuildConfig_1.DeleteBuildConfig(commonArgs),
              new Route_1.DeleteRoute(commonArgs),
              new Service_1.DeleteService(commonArgs),
              new ImageStream_1.DeleteImageStream(commonArgs),
            ];
            return [4, this.fetchResource(args.config.proxy, new ImageStream_1.CreateImageStream(commonArgs))];
          case 1:
            _a.sent();
            return [
              4,
              this.fetchResource(args.config.proxy, new Service_1.CreateService(commonArgs), rollbacks.slice(4)),
            ];
          case 2:
            _a.sent();
            return [4, this.fetchResource(args.config.proxy, new Route_1.CreateRoute(commonArgs), rollbacks.slice(3))];
          case 3:
            _a.sent();
            return [
              4,
              this.fetchResource(
                args.config.proxy,
                new BuildConfig_1.CreateBuildConfig(commonArgs),
                rollbacks.slice(2)
              ),
            ];
          case 4:
            buildConfig = _a.sent();
            processedFileContent = args.workflow.content
              .replace(/(\r\n|\n|\r)/gm, "")
              .replace(/"/g, '\\"')
              .replace(/'/g, "\\x27");
            return [
              4,
              this.fetchResource(
                args.config.proxy,
                new Build_1.CreateBuild(
                  __assign(__assign({}, commonArgs), {
                    buildConfigUid: buildConfig.metadata.uid,
                    file: {
                      name: args.workflow.name,
                      content: processedFileContent,
                    },
                  })
                ),
                rollbacks.slice(1)
              ),
            ];
          case 5:
            _a.sent();
            return [
              4,
              this.fetchResource(
                args.config.proxy,
                new Deployment_1.CreateDeployment(__assign(__assign({}, commonArgs), { fileName: args.workflow.name })),
                rollbacks
              ),
            ];
          case 6:
            _a.sent();
            return [2];
        }
      });
    });
  };
  OpenShiftService.prototype.fetchResource = function (proxyUrl, target, rollbacks) {
    return __awaiter(this, void 0, void 0, function () {
      var response, _a, _b, rollbacks_1, rollbacks_1_1, resource, e_1_1;
      var e_1, _c;
      return __generator(this, function (_d) {
        switch (_d.label) {
          case 0:
            _a = fetch;
            _b = [proxyUrl + "/devsandbox"];
            return [4, target.requestInit()];
          case 1:
            return [4, _a.apply(void 0, _b.concat([_d.sent()]))];
          case 2:
            response = _d.sent();
            if (!!response.ok) return [3, 11];
            if (!(rollbacks && rollbacks.length > 0)) return [3, 10];
            _d.label = 3;
          case 3:
            _d.trys.push([3, 8, 9, 10]);
            (rollbacks_1 = __values(rollbacks)), (rollbacks_1_1 = rollbacks_1.next());
            _d.label = 4;
          case 4:
            if (!!rollbacks_1_1.done) return [3, 7];
            resource = rollbacks_1_1.value;
            return [4, this.fetchResource(proxyUrl, resource)];
          case 5:
            _d.sent();
            _d.label = 6;
          case 6:
            rollbacks_1_1 = rollbacks_1.next();
            return [3, 4];
          case 7:
            return [3, 10];
          case 8:
            e_1_1 = _d.sent();
            e_1 = { error: e_1_1 };
            return [3, 10];
          case 9:
            try {
              if (rollbacks_1_1 && !rollbacks_1_1.done && (_c = rollbacks_1.return)) _c.call(rollbacks_1);
            } finally {
              if (e_1) throw e_1.error;
            }
            return [7];
          case 10:
            throw new Error("Error fetching ".concat(target.name()));
          case 11:
            return [4, response.json()];
          case 12:
            return [2, _d.sent()];
        }
      });
    });
  };
  OpenShiftService.prototype.generateRandomId = function () {
    var randomPart = Math.random().toString(36).substr(2, 9);
    var milliseconds = new Date().getMilliseconds();
    return "".concat(randomPart).concat(milliseconds);
  };
  return OpenShiftService;
})();
exports.OpenShiftService = OpenShiftService;
//# sourceMappingURL=OpenShiftService.js.map

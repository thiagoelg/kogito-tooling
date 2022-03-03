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
exports.OpenShiftService =
  exports.DEFAULT_CREATED_BY =
  exports.DEVELOPER_SANDBOX_GET_STARTED_URL =
  exports.DEVELOPER_SANDBOX_URL =
    void 0;
var OpenShiftDeployedModel_1 = require("./OpenShiftDeployedModel");
var Deployment_1 = require("./resources/Deployment");
var Project_1 = require("./resources/Project");
var Resource_1 = require("./resources/Resource");
var Route_1 = require("./resources/Route");
var Service_1 = require("./resources/Service");
var OpenShiftSettingsConfig_1 = require("./OpenShiftSettingsConfig");
var DmnDevSandboxQuarkusAppApi_1 = require("../editor/DmnDevSandbox/DmnDevSandboxQuarkusAppApi");
exports.DEVELOPER_SANDBOX_URL = "https://developers.redhat.com/developer-sandbox";
exports.DEVELOPER_SANDBOX_GET_STARTED_URL = "https://developers.redhat.com/developer-sandbox/get-started";
exports.DEFAULT_CREATED_BY = "online-editor";
var CHECK_UPLOAD_STATUS_POLLING_TIME = 3000;
var OpenShiftService = (function () {
  function OpenShiftService(proxyUrl) {
    this.proxyUrl = proxyUrl;
    this.RESOURCE_NAME_PREFIX = "dmn-dev-sandbox";
  }
  OpenShiftService.prototype.isConnectionEstablished = function (config) {
    return __awaiter(this, void 0, void 0, function () {
      var error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [
              4,
              this.fetchResource(
                new Project_1.GetProject({
                  host: config.host,
                  namespace: config.namespace,
                  token: config.token,
                })
              ),
            ];
          case 1:
            _a.sent();
            return [2, true];
          case 2:
            error_1 = _a.sent();
            return [2, false];
          case 3:
            return [2];
        }
      });
    });
  };
  OpenShiftService.prototype.onCheckConfig = function (config) {
    return __awaiter(this, void 0, void 0, function () {
      var _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _a = (0, OpenShiftSettingsConfig_1.isConfigValid)(config);
            if (!_a) return [3, 2];
            return [4, this.isConnectionEstablished(config)];
          case 1:
            _a = _b.sent();
            _b.label = 2;
          case 2:
            return [2, _a];
        }
      });
    });
  };
  OpenShiftService.prototype.loadDeployments = function (config) {
    return __awaiter(this, void 0, void 0, function () {
      var commonArgs, deployments, routes, uploadStatuses;
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
            return [4, this.fetchResource(new Deployment_1.ListDeployments(commonArgs))];
          case 1:
            deployments = _a.sent();
            if (deployments.items.length === 0) {
              return [2, []];
            }
            return [4, this.fetchResource(new Route_1.ListRoutes(commonArgs))];
          case 2:
            routes = _a.sent().items.filter(function (route) {
              return route.metadata.labels[Resource_1.KOGITO_CREATED_BY] === exports.DEFAULT_CREATED_BY;
            });
            return [
              4,
              Promise.all(
                routes
                  .map(function (route) {
                    return _this.composeBaseUrl(route);
                  })
                  .map(function (url) {
                    return __awaiter(_this, void 0, void 0, function () {
                      var _a;
                      return __generator(this, function (_b) {
                        switch (_b.label) {
                          case 0:
                            _a = { url: url };
                            return [4, (0, DmnDevSandboxQuarkusAppApi_1.getUploadStatus)({ baseUrl: url })];
                          case 1:
                            return [2, ((_a.uploadStatus = _b.sent()), _a)];
                        }
                      });
                    });
                  })
              ),
            ];
          case 3:
            uploadStatuses = _a.sent();
            return [
              2,
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
                  var baseUrl = _this.composeBaseUrl(route);
                  var uploadStatus = uploadStatuses.find(function (status) {
                    return status.url === baseUrl;
                  }).uploadStatus;
                  return {
                    resourceName: deployment.metadata.name,
                    uri: deployment.metadata.annotations[Resource_1.KOGITO_URI],
                    baseUrl: baseUrl,
                    creationTimestamp: new Date(deployment.metadata.creationTimestamp),
                    state: _this.extractDeploymentStateWithUploadStatus(deployment, uploadStatus),
                    workspaceName: deployment.metadata.annotations[Resource_1.KOGITO_WORKSPACE_NAME],
                  };
                }),
            ];
        }
      });
    });
  };
  OpenShiftService.prototype.deploy = function (args) {
    return __awaiter(this, void 0, void 0, function () {
      var commonArgs, rollbacks, route, baseUrl, deployment;
      var _this = this;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            commonArgs = {
              host: args.config.host,
              namespace: args.config.namespace,
              token: args.config.token,
              resourceName: "".concat(this.RESOURCE_NAME_PREFIX, "-").concat(this.generateRandomId()),
              createdBy: exports.DEFAULT_CREATED_BY,
            };
            rollbacks = [new Route_1.DeleteRoute(commonArgs), new Service_1.DeleteService(commonArgs)];
            return [4, this.fetchResource(new Service_1.CreateService(commonArgs), rollbacks.slice(1))];
          case 1:
            _a.sent();
            return [4, this.fetchResource(new Route_1.CreateRoute(commonArgs), rollbacks.slice(2))];
          case 2:
            route = _a.sent();
            baseUrl = this.composeBaseUrl(route);
            return [
              4,
              this.fetchResource(
                new Deployment_1.CreateDeployment(
                  __assign(__assign({}, commonArgs), {
                    uri: args.targetFilePath,
                    baseUrl: baseUrl,
                    workspaceName: args.workspaceName,
                  })
                ),
                rollbacks
              ),
            ];
          case 3:
            deployment = _a.sent();
            new Promise(function (resolve, reject) {
              var deploymentState = _this.extractDeploymentState(deployment);
              var interval = setInterval(function () {
                return __awaiter(_this, void 0, void 0, function () {
                  var deployment_1, uploadStatus, e_1;
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        if (!(deploymentState !== OpenShiftDeployedModel_1.OpenShiftDeployedModelState.UP))
                          return [3, 2];
                        return [4, this.fetchResource(new Deployment_1.GetDeployment(commonArgs))];
                      case 1:
                        deployment_1 = _a.sent();
                        deploymentState = this.extractDeploymentState(deployment_1);
                        _a.label = 2;
                      case 2:
                        if (!(deploymentState === OpenShiftDeployedModel_1.OpenShiftDeployedModelState.UP))
                          return [3, 8];
                        _a.label = 3;
                      case 3:
                        _a.trys.push([3, 7, , 8]);
                        return [4, (0, DmnDevSandboxQuarkusAppApi_1.getUploadStatus)({ baseUrl: baseUrl })];
                      case 4:
                        uploadStatus = _a.sent();
                        if (uploadStatus === "NOT_READY") {
                          return [2];
                        }
                        clearInterval(interval);
                        if (!(uploadStatus === "WAITING")) return [3, 6];
                        return [
                          4,
                          (0, DmnDevSandboxQuarkusAppApi_1.postUpload)({
                            baseUrl: baseUrl,
                            workspaceZipBlob: args.workspaceZipBlob,
                          }),
                        ];
                      case 5:
                        _a.sent();
                        resolve();
                        _a.label = 6;
                      case 6:
                        return [3, 8];
                      case 7:
                        e_1 = _a.sent();
                        console.error(e_1);
                        reject(e_1);
                        clearInterval(interval);
                        return [3, 8];
                      case 8:
                        return [2];
                    }
                  });
                });
              }, CHECK_UPLOAD_STATUS_POLLING_TIME);
            });
            return [2];
        }
      });
    });
  };
  OpenShiftService.prototype.fetchResource = function (target, rollbacks) {
    return __awaiter(this, void 0, void 0, function () {
      var response, _a, _b, rollbacks_1, rollbacks_1_1, resource, e_2_1;
      var e_2, _c;
      return __generator(this, function (_d) {
        switch (_d.label) {
          case 0:
            _a = fetch;
            _b = [this.proxyUrl];
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
            return [4, this.fetchResource(resource)];
          case 5:
            _d.sent();
            _d.label = 6;
          case 6:
            rollbacks_1_1 = rollbacks_1.next();
            return [3, 4];
          case 7:
            return [3, 10];
          case 8:
            e_2_1 = _d.sent();
            e_2 = { error: e_2_1 };
            return [3, 10];
          case 9:
            try {
              if (rollbacks_1_1 && !rollbacks_1_1.done && (_c = rollbacks_1.return)) _c.call(rollbacks_1);
            } finally {
              if (e_2) throw e_2.error;
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
  OpenShiftService.prototype.composeBaseUrl = function (route) {
    return "https://".concat(route.spec.host);
  };
  OpenShiftService.prototype.extractDeploymentState = function (deployment) {
    var _a;
    if (!deployment.status.replicas || +deployment.status.replicas === 0) {
      return OpenShiftDeployedModel_1.OpenShiftDeployedModelState.DOWN;
    }
    var progressingCondition =
      (_a = deployment.status.conditions) === null || _a === void 0
        ? void 0
        : _a.find(function (condition) {
            return condition.type === "Progressing";
          });
    if (!progressingCondition || progressingCondition.status !== "True") {
      return OpenShiftDeployedModel_1.OpenShiftDeployedModelState.DOWN;
    }
    if (!deployment.status.readyReplicas || +deployment.status.readyReplicas === 0) {
      return OpenShiftDeployedModel_1.OpenShiftDeployedModelState.IN_PROGRESS;
    }
    return OpenShiftDeployedModel_1.OpenShiftDeployedModelState.UP;
  };
  OpenShiftService.prototype.extractDeploymentStateWithUploadStatus = function (deployment, uploadStatus) {
    var state = this.extractDeploymentState(deployment);
    if (state !== OpenShiftDeployedModel_1.OpenShiftDeployedModelState.UP) {
      return state;
    }
    if (uploadStatus === "ERROR") {
      return OpenShiftDeployedModel_1.OpenShiftDeployedModelState.ERROR;
    }
    if (uploadStatus !== "UPLOADED") {
      return OpenShiftDeployedModel_1.OpenShiftDeployedModelState.IN_PROGRESS;
    }
    return OpenShiftDeployedModel_1.OpenShiftDeployedModelState.UP;
  };
  return OpenShiftService;
})();
exports.OpenShiftService = OpenShiftService;
//# sourceMappingURL=OpenShiftService.js.map

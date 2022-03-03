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
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmnDevSandboxContextProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Hooks_1 = require("../../navigation/Hooks");
var KieSandboxExtendedServicesContext_1 = require("../../kieSandboxExtendedServices/KieSandboxExtendedServicesContext");
var KieSandboxExtendedServicesStatus_1 = require("../../kieSandboxExtendedServices/KieSandboxExtendedServicesStatus");
var DmnDevSandboxContext_1 = require("./DmnDevSandboxContext");
var OpenShiftInstanceStatus_1 = require("../../openshift/OpenShiftInstanceStatus");
var SettingsContext_1 = require("../../settings/SettingsContext");
var OpenShiftSettingsConfig_1 = require("../../openshift/OpenShiftSettingsConfig");
var WorkspacesContext_1 = require("../../workspace/WorkspacesContext");
var WorkspaceDescriptorService_1 = require("../../workspace/services/WorkspaceDescriptorService");
var LOAD_DEPLOYMENTS_POLLING_TIME = 2500;
function DmnDevSandboxContextProvider(props) {
  var _this = this;
  var settings = (0, SettingsContext_1.useSettings)();
  var settingsDispatch = (0, SettingsContext_1.useSettingsDispatch)();
  var routes = (0, Hooks_1.useRoutes)();
  var kieSandboxExtendedServices = (0, KieSandboxExtendedServicesContext_1.useKieSandboxExtendedServices)();
  var workspaces = (0, WorkspacesContext_1.useWorkspaces)();
  var _a = __read((0, react_1.useState)(false), 2),
    isDropdownOpen = _a[0],
    setDropdownOpen = _a[1];
  var _b = __read((0, react_1.useState)(false), 2),
    isDeploymentsDropdownOpen = _b[0],
    setDeploymentsDropdownOpen = _b[1];
  var _c = __read((0, react_1.useState)(false), 2),
    isConfirmDeployModalOpen = _c[0],
    setConfirmDeployModalOpen = _c[1];
  var _d = __read((0, react_1.useState)([]), 2),
    deployments = _d[0],
    setDeployments = _d[1];
  var onDisconnect = (0, react_1.useCallback)(
    function (closeModals) {
      settingsDispatch.openshift.setStatus(OpenShiftInstanceStatus_1.OpenShiftInstanceStatus.DISCONNECTED);
      setDropdownOpen(false);
      setDeployments([]);
      if (closeModals) {
        setConfirmDeployModalOpen(false);
      }
    },
    [settingsDispatch.openshift]
  );
  var deploy = (0, react_1.useCallback)(
    function (workspaceFile) {
      return __awaiter(_this, void 0, void 0, function () {
        var _a, fs, zipBlob, descriptorService, workspaceName, error_1;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              _a = (0, OpenShiftSettingsConfig_1.isConfigValid)(settings.openshift.config);
              if (!_a) return [3, 2];
              return [4, settingsDispatch.openshift.service.isConnectionEstablished(settings.openshift.config)];
            case 1:
              _a = _b.sent();
              _b.label = 2;
            case 2:
              if (!_a) {
                return [2, false];
              }
              return [4, workspaces.fsService.getWorkspaceFs(workspaceFile.workspaceId)];
            case 3:
              fs = _b.sent();
              return [
                4,
                workspaces.prepareZip({
                  fs: fs,
                  workspaceId: workspaceFile.workspaceId,
                  onlyExtensions: ["dmn"],
                }),
              ];
            case 4:
              zipBlob = _b.sent();
              return [4, workspaces.descriptorService.get(workspaceFile.workspaceId)];
            case 5:
              descriptorService = _b.sent();
              workspaceName =
                descriptorService.name !== WorkspaceDescriptorService_1.NEW_WORKSPACE_DEFAULT_NAME
                  ? descriptorService.name
                  : workspaceFile.name;
              _b.label = 6;
            case 6:
              _b.trys.push([6, 8, , 9]);
              return [
                4,
                settingsDispatch.openshift.service.deploy({
                  targetFilePath: workspaceFile.relativePath,
                  workspaceName: workspaceName,
                  workspaceZipBlob: zipBlob,
                  config: settings.openshift.config,
                  onlineEditorUrl: function (baseUrl) {
                    return routes.importModel.url({
                      base: process.env.WEBPACK_REPLACE__dmnDevSandbox_onlineEditorUrl,
                      pathParams: {},
                      queryParams: { url: "".concat(baseUrl, "/").concat(workspaceFile.relativePath) },
                    });
                  },
                }),
              ];
            case 7:
              _b.sent();
              return [2, true];
            case 8:
              error_1 = _b.sent();
              console.error(error_1);
              return [2, false];
            case 9:
              return [2];
          }
        });
      });
    },
    [settings.openshift.config, settingsDispatch.openshift.service, workspaces, routes.importModel]
  );
  (0, react_1.useEffect)(
    function () {
      if (
        kieSandboxExtendedServices.status !==
        KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING
      ) {
        onDisconnect(true);
        return;
      }
      if (!(0, OpenShiftSettingsConfig_1.isConfigValid)(settings.openshift.config)) {
        if (deployments.length > 0) {
          setDeployments([]);
        }
        return;
      }
      if (settings.openshift.status === OpenShiftInstanceStatus_1.OpenShiftInstanceStatus.DISCONNECTED) {
        settingsDispatch.openshift.service
          .isConnectionEstablished(settings.openshift.config)
          .then(function (isConfigOk) {
            settingsDispatch.openshift.setStatus(
              isConfigOk
                ? OpenShiftInstanceStatus_1.OpenShiftInstanceStatus.CONNECTED
                : OpenShiftInstanceStatus_1.OpenShiftInstanceStatus.EXPIRED
            );
            return isConfigOk ? settingsDispatch.openshift.service.loadDeployments(settings.openshift.config) : [];
          })
          .then(function (deployments) {
            return setDeployments(deployments);
          })
          .catch(function (error) {
            return console.error(error);
          });
        return;
      }
      if (
        settings.openshift.status === OpenShiftInstanceStatus_1.OpenShiftInstanceStatus.CONNECTED &&
        isDeploymentsDropdownOpen
      ) {
        var loadDeploymentsTask_1 = window.setInterval(function () {
          settingsDispatch.openshift.service
            .loadDeployments(settings.openshift.config)
            .then(function (deployments) {
              return setDeployments(deployments);
            })
            .catch(function (error) {
              setDeployments([]);
              window.clearInterval(loadDeploymentsTask_1);
              console.error(error);
            });
        }, LOAD_DEPLOYMENTS_POLLING_TIME);
        return function () {
          return window.clearInterval(loadDeploymentsTask_1);
        };
      }
    },
    [
      onDisconnect,
      settings.openshift,
      settingsDispatch.openshift.service,
      kieSandboxExtendedServices.status,
      deployments.length,
      settingsDispatch.openshift,
      isDeploymentsDropdownOpen,
    ]
  );
  var value = (0, react_1.useMemo)(
    function () {
      return {
        deployments: deployments,
        isDropdownOpen: isDropdownOpen,
        isDeploymentsDropdownOpen: isDeploymentsDropdownOpen,
        isConfirmDeployModalOpen: isConfirmDeployModalOpen,
        setDeployments: setDeployments,
        setDropdownOpen: setDropdownOpen,
        setConfirmDeployModalOpen: setConfirmDeployModalOpen,
        setDeploymentsDropdownOpen: setDeploymentsDropdownOpen,
        deploy: deploy,
      };
    },
    [deploy, deployments, isConfirmDeployModalOpen, isDeploymentsDropdownOpen, isDropdownOpen]
  );
  return (0, jsx_runtime_1.jsx)(
    DmnDevSandboxContext_1.DmnDevSandboxContext.Provider,
    __assign({ value: value }, { children: props.children }),
    void 0
  );
}
exports.DmnDevSandboxContextProvider = DmnDevSandboxContextProvider;
//# sourceMappingURL=DmnDevSandboxContextProvider.js.map

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
exports.DmnRunnerProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var WorkspacesContext_1 = require("../../workspace/WorkspacesContext");
var DmnRunnerStatus_1 = require("./DmnRunnerStatus");
var DmnRunnerContext_1 = require("./DmnRunnerContext");
var DmnRunnerService_1 = require("./DmnRunnerService");
var KieSandboxExtendedServicesStatus_1 = require("../../kieSandboxExtendedServices/KieSandboxExtendedServicesStatus");
var Routes_1 = require("../../navigation/Routes");
var JsonParse_1 = require("../../json/JsonParse");
var Hooks_1 = require("../../reactExt/Hooks");
var i18n_1 = require("../../i18n");
var QueryParamsContext_1 = require("../../queryParams/QueryParamsContext");
var react_router_1 = require("react-router");
var Hooks_2 = require("../../navigation/Hooks");
var KieSandboxExtendedServicesContext_1 = require("../../kieSandboxExtendedServices/KieSandboxExtendedServicesContext");
var SettingsContext_1 = require("../../settings/SettingsContext");
function DmnRunnerProvider(props) {
  var _this = this;
  var i18n = (0, i18n_1.useOnlineI18n)().i18n;
  var queryParams = (0, QueryParamsContext_1.useQueryParams)();
  var history = (0, react_router_1.useHistory)();
  var routes = (0, Hooks_2.useRoutes)();
  var kieSandboxExtendedServices = (0, KieSandboxExtendedServicesContext_1.useKieSandboxExtendedServices)();
  var workspaces = (0, WorkspacesContext_1.useWorkspaces)();
  var settings = (0, SettingsContext_1.useSettings)();
  var _a = __read((0, react_1.useState)(false), 2),
    error = _a[0],
    setError = _a[1];
  var _b = __read((0, react_1.useState)(undefined), 2),
    jsonSchema = _b[0],
    setJsonSchema = _b[1];
  var _c = __read((0, react_1.useState)(false), 2),
    isExpanded = _c[0],
    setExpanded = _c[1];
  var _d = __read((0, react_1.useState)(DmnRunnerStatus_1.DmnRunnerMode.FORM), 2),
    mode = _d[0],
    setMode = _d[1];
  var _e = __read((0, react_1.useState)([{}]), 2),
    inputRows = _e[0],
    setInputRows = _e[1];
  var _f = __read((0, react_1.useState)(0), 2),
    currentInputRowIndex = _f[0],
    setCurrentInputRowIndex = _f[1];
  var status = (0, react_1.useMemo)(
    function () {
      return isExpanded ? DmnRunnerStatus_1.DmnRunnerStatus.AVAILABLE : DmnRunnerStatus_1.DmnRunnerStatus.UNAVAILABLE;
    },
    [isExpanded]
  );
  var service = (0, react_1.useMemo)(
    function () {
      return new DmnRunnerService_1.DmnRunnerService(settings.kieSandboxExtendedServices.config.buildUrl());
    },
    [settings.kieSandboxExtendedServices.config]
  );
  var preparePayload = (0, react_1.useCallback)(
    function (data) {
      return __awaiter(_this, void 0, void 0, function () {
        var files, _a, _b, resourcePromises;
        var _c, _d;
        var _this = this;
        return __generator(this, function (_e) {
          switch (_e.label) {
            case 0:
              _b = (_a = workspaces).getFiles;
              _c = {};
              return [4, workspaces.fsService.getWorkspaceFs(props.workspaceFile.workspaceId)];
            case 1:
              return [4, _b.apply(_a, [((_c.fs = _e.sent()), (_c.workspaceId = props.workspaceFile.workspaceId), _c)])];
            case 2:
              files = _e.sent().filter(function (f) {
                return f.extension === "dmn";
              });
              resourcePromises = files.map(function (f) {
                return __awaiter(_this, void 0, void 0, function () {
                  var _a, _b;
                  var _c;
                  return __generator(this, function (_d) {
                    switch (_d.label) {
                      case 0:
                        _c = {
                          URI: f.relativePath,
                        };
                        _b = (_a = WorkspacesContext_1.decoder).decode;
                        return [4, f.getFileContents()];
                      case 1:
                        return [2, ((_c.content = _b.apply(_a, [_d.sent()])), _c)];
                    }
                  });
                });
              });
              _d = {
                mainURI: props.workspaceFile.relativePath,
              };
              return [4, Promise.all(resourcePromises)];
            case 3:
              return [2, ((_d.resources = _e.sent()), (_d.context = data), _d)];
          }
        });
      });
    },
    [props.workspaceFile, workspaces]
  );
  var updateFormSchema = (0, react_1.useCallback)(
    function () {
      return __awaiter(_this, void 0, void 0, function () {
        var payload, _a, err_1;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0:
              if (props.workspaceFile.extension !== "dmn") {
                return [2];
              }
              _b.label = 1;
            case 1:
              _b.trys.push([1, 4, , 5]);
              return [4, preparePayload()];
            case 2:
              payload = _b.sent();
              _a = setJsonSchema;
              return [4, service.formSchema(payload)];
            case 3:
              _a.apply(void 0, [_b.sent()]);
              return [3, 5];
            case 4:
              err_1 = _b.sent();
              console.error(err_1);
              setError(true);
              return [3, 5];
            case 5:
              return [2];
          }
        });
      });
    },
    [props.workspaceFile.extension, preparePayload, service]
  );
  (0, react_1.useEffect)(
    function () {
      if (props.workspaceFile.extension !== "dmn") {
        setExpanded(false);
        return;
      }
      updateFormSchema();
    },
    [updateFormSchema, props.workspaceFile.extension]
  );
  var validate = (0, react_1.useCallback)(
    function () {
      return __awaiter(_this, void 0, void 0, function () {
        var payload, _a, _b, validationResults, notifications;
        var _c, _d;
        var _e, _f;
        return __generator(this, function (_g) {
          switch (_g.label) {
            case 0:
              if (props.workspaceFile.extension !== "dmn") {
                return [2];
              }
              if (
                kieSandboxExtendedServices.status !==
                KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING
              ) {
                (_e = props.editorPageDock) === null || _e === void 0
                  ? void 0
                  : _e.setNotifications(i18n.terms.validation, "", []);
                return [2];
              }
              _c = {
                mainURI: props.workspaceFile.relativePath,
              };
              _d = {
                URI: props.workspaceFile.relativePath,
              };
              _b = (_a = WorkspacesContext_1.decoder).decode;
              return [4, props.workspaceFile.getFileContents()];
            case 1:
              payload = ((_c.resources = [((_d.content = _b.apply(_a, [_g.sent()])), _d)]), _c);
              return [4, service.validate(payload)];
            case 2:
              validationResults = _g.sent();
              notifications = validationResults.map(function (validationResult) {
                return {
                  type: "PROBLEM",
                  path: "",
                  severity: validationResult.severity,
                  message: "".concat(validationResult.messageType, ": ").concat(validationResult.message),
                };
              });
              (_f = props.editorPageDock) === null || _f === void 0
                ? void 0
                : _f.setNotifications(i18n.terms.validation, "", notifications);
              return [2];
          }
        });
      });
    },
    [props.workspaceFile, props.editorPageDock, kieSandboxExtendedServices.status, service, i18n.terms.validation]
  );
  (0, react_1.useEffect)(
    function () {
      validate();
    },
    [validate]
  );
  (0, react_1.useEffect)(
    function () {
      if (!jsonSchema || !queryParams.has(Routes_1.QueryParams.DMN_RUNNER_FORM_INPUTS)) {
        return;
      }
      try {
        setInputRows([
          (0, JsonParse_1.jsonParseWithDate)(queryParams.get(Routes_1.QueryParams.DMN_RUNNER_FORM_INPUTS)),
        ]);
        setExpanded(true);
      } catch (e) {
        console.error('Cannot parse "'.concat(Routes_1.QueryParams.DMN_RUNNER_FORM_INPUTS, '"'), e);
      } finally {
        history.replace({
          pathname: routes.editor.path({ extension: "dmn" }),
          search: routes.editor.queryArgs(queryParams).without(Routes_1.QueryParams.DMN_RUNNER_FORM_INPUTS).toString(),
        });
      }
    },
    [jsonSchema, history, routes, queryParams]
  );
  var prevKieSandboxExtendedServicesStatus = (0, Hooks_1.usePrevious)(kieSandboxExtendedServices.status);
  (0, react_1.useEffect)(
    function () {
      if (props.workspaceFile.extension !== "dmn") {
        return;
      }
      if (
        prevKieSandboxExtendedServicesStatus &&
        prevKieSandboxExtendedServicesStatus !==
          KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.AVAILABLE &&
        prevKieSandboxExtendedServicesStatus !==
          KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING &&
        kieSandboxExtendedServices.status ===
          KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING
      ) {
        setExpanded(true);
      }
      if (
        kieSandboxExtendedServices.status ===
          KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.STOPPED ||
        kieSandboxExtendedServices.status ===
          KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.NOT_RUNNING
      ) {
        setExpanded(false);
      }
    },
    [prevKieSandboxExtendedServicesStatus, kieSandboxExtendedServices.status, props.workspaceFile.extension]
  );
  var dmnRunnerDispatch = (0, react_1.useMemo)(
    function () {
      return {
        preparePayload: preparePayload,
        setInputRows: setInputRows,
        setCurrentInputRowIndex: setCurrentInputRowIndex,
        setExpanded: setExpanded,
        setError: setError,
        setMode: setMode,
      };
    },
    [preparePayload]
  );
  var dmnRunnerState = (0, react_1.useMemo)(
    function () {
      return {
        inputRows: inputRows,
        currentInputRowIndex: currentInputRowIndex,
        error: error,
        isExpanded: isExpanded,
        mode: mode,
        jsonSchema: jsonSchema,
        service: service,
        status: status,
      };
    },
    [inputRows, error, jsonSchema, isExpanded, mode, service, status, currentInputRowIndex]
  );
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children: (0, jsx_runtime_1.jsx)(
        DmnRunnerContext_1.DmnRunnerStateContext.Provider,
        __assign(
          { value: dmnRunnerState },
          {
            children: (0, jsx_runtime_1.jsx)(
              DmnRunnerContext_1.DmnRunnerDispatchContext.Provider,
              __assign({ value: dmnRunnerDispatch }, { children: props.children }),
              void 0
            ),
          }
        ),
        void 0
      ),
    },
    void 0
  );
}
exports.DmnRunnerProvider = DmnRunnerProvider;
//# sourceMappingURL=DmnRunnerProvider.js.map

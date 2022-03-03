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
exports.DmnDevSandboxModalConfirmDeploy = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Alert_1 = require("@patternfly/react-core/dist/js/components/Alert");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
var Modal_1 = require("@patternfly/react-core/dist/js/components/Modal");
var react_1 = require("react");
var i18n_1 = require("../../i18n");
var Alerts_1 = require("../../alerts/Alerts");
var DmnDevSandboxContext_1 = require("./DmnDevSandboxContext");
function DmnDevSandboxModalConfirmDeploy(props) {
  var _this = this;
  var dmnDevSandboxContext = (0, DmnDevSandboxContext_1.useDmnDevSandbox)();
  var i18n = (0, i18n_1.useOnlineI18n)().i18n;
  var _a = __read((0, react_1.useState)(false), 2),
    isConfirmLoading = _a[0],
    setConfirmLoading = _a[1];
  var deployStartedErrorAlert = (0, Alerts_1.useAlert)(
    props.alerts,
    (0, react_1.useCallback)(
      function (_a) {
        var close = _a.close;
        return (0, jsx_runtime_1.jsx)(
          Alert_1.Alert,
          {
            variant: "danger",
            title: i18n.dmnDevSandbox.alerts.deployStartedError,
            actionClose: (0, jsx_runtime_1.jsx)(Alert_1.AlertActionCloseButton, { onClose: close }, void 0),
          },
          void 0
        );
      },
      [i18n]
    )
  );
  var deployStartedSuccessAlert = (0, Alerts_1.useAlert)(
    props.alerts,
    (0, react_1.useCallback)(
      function (_a) {
        var close = _a.close;
        return (0, jsx_runtime_1.jsx)(
          Alert_1.Alert,
          {
            className: "kogito--alert",
            variant: "info",
            title: i18n.dmnDevSandbox.alerts.deployStartedSuccess,
            actionClose: (0, jsx_runtime_1.jsx)(Alert_1.AlertActionCloseButton, { onClose: close }, void 0),
          },
          void 0
        );
      },
      [i18n]
    )
  );
  var onConfirm = (0, react_1.useCallback)(
    function () {
      return __awaiter(_this, void 0, void 0, function () {
        var deployStarted;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (isConfirmLoading) {
                return [2];
              }
              setConfirmLoading(true);
              return [4, dmnDevSandboxContext.deploy(props.workspaceFile)];
            case 1:
              deployStarted = _a.sent();
              setConfirmLoading(false);
              dmnDevSandboxContext.setConfirmDeployModalOpen(false);
              if (deployStarted) {
                dmnDevSandboxContext.setDeploymentsDropdownOpen(true);
                deployStartedSuccessAlert.show();
              } else {
                deployStartedErrorAlert.show();
              }
              return [2];
          }
        });
      });
    },
    [isConfirmLoading, dmnDevSandboxContext, props.workspaceFile, deployStartedSuccessAlert, deployStartedErrorAlert]
  );
  var onCancel = (0, react_1.useCallback)(
    function () {
      dmnDevSandboxContext.setConfirmDeployModalOpen(false);
      setConfirmLoading(false);
    },
    [dmnDevSandboxContext]
  );
  return (0, jsx_runtime_1.jsx)(
    Modal_1.Modal,
    __assign(
      {
        "data-testid": "confirm-deploy-modal",
        variant: Modal_1.ModalVariant.small,
        title: i18n.dmnDevSandbox.confirmModal.title,
        isOpen: dmnDevSandboxContext.isConfirmDeployModalOpen,
        "aria-label": "Confirm deploy modal",
        onClose: onCancel,
        actions: [
          (0, jsx_runtime_1.jsx)(
            Button_1.Button,
            __assign(
              {
                id: "dmn-dev-sandbox-confirm-deploy-button",
                variant: "primary",
                onClick: onConfirm,
                isLoading: isConfirmLoading,
                spinnerAriaValueText: isConfirmLoading ? "Loading" : undefined,
              },
              { children: isConfirmLoading ? i18n.dmnDevSandbox.common.deploying : i18n.terms.confirm }
            ),
            "confirm"
          ),
          (0, jsx_runtime_1.jsx)(
            Button_1.Button,
            __assign({ variant: "link", onClick: onCancel }, { children: i18n.terms.cancel }),
            "cancel"
          ),
        ],
      },
      { children: i18n.dmnDevSandbox.confirmModal.body }
    ),
    void 0
  );
}
exports.DmnDevSandboxModalConfirmDeploy = DmnDevSandboxModalConfirmDeploy;
//# sourceMappingURL=DmnDevSandboxModalConfirmDeploy.js.map

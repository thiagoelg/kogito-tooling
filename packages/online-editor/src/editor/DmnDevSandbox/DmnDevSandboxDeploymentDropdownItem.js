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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmnDevSandboxDeploymentDropdownItem = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Dropdown_1 = require("@patternfly/react-core/dist/js/components/Dropdown");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
var check_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/check-circle-icon");
var exclamation_triangle_icon_1 = require("@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon");
var sync_alt_icon_1 = require("@patternfly/react-icons/dist/js/icons/sync-alt-icon");
var exclamation_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/exclamation-circle-icon");
var path_1 = require("path");
var react_1 = require("react");
var i18n_1 = require("../../i18n");
var OpenShiftDeployedModel_1 = require("../../openshift/OpenShiftDeployedModel");
function DmnDevSandboxDeploymentDropdownItem(props) {
  var i18n = (0, i18n_1.useOnlineI18n)().i18n;
  var deploymentName = (0, react_1.useMemo)(
    function () {
      var maxSize = 30;
      var name = props.deployment.workspaceName;
      var extension = "";
      if (!name) {
        var originalFilename = (0, path_1.basename)(props.deployment.uri);
        extension = " ".concat(originalFilename.substring(originalFilename.lastIndexOf(".")));
        name = originalFilename.replace(extension, "");
      }
      if (name.length < maxSize) {
        return name;
      }
      return "".concat(name.substring(0, maxSize), "...").concat(extension);
    },
    [props.deployment.uri, props.deployment.workspaceName]
  );
  var stateIcon = (0, react_1.useMemo)(
    function () {
      if (props.deployment.state === OpenShiftDeployedModel_1.OpenShiftDeployedModelState.UP) {
        return (0, jsx_runtime_1.jsx)(
          Tooltip_1.Tooltip,
          __assign(
            { position: "left", content: i18n.dmnDevSandbox.dropdown.item.upTooltip },
            {
              children: (0, jsx_runtime_1.jsx)(
                check_circle_icon_1.CheckCircleIcon,
                {
                  id: "dmn-dev-sandbox-deployment-item-up-icon",
                  className: "kogito--editor__dmn-dev-sandbox-dropdown-item-status success-icon",
                },
                void 0
              ),
            }
          ),
          "deployment-up-".concat(props.id)
        );
      }
      if (
        props.deployment.state === OpenShiftDeployedModel_1.OpenShiftDeployedModelState.IN_PROGRESS ||
        props.deployment.state === OpenShiftDeployedModel_1.OpenShiftDeployedModelState.PREPARING
      ) {
        return (0, jsx_runtime_1.jsx)(
          Tooltip_1.Tooltip,
          __assign(
            { position: "left", content: i18n.dmnDevSandbox.dropdown.item.inProgressTooltip },
            {
              children: (0, jsx_runtime_1.jsx)(
                sync_alt_icon_1.SyncAltIcon,
                {
                  id: "dmn-dev-sandbox-deployment-item-in-progress-icon",
                  className: "kogito--editor__dmn-dev-sandbox-dropdown-item-status in-progress-icon rotating",
                },
                void 0
              ),
            }
          ),
          "deployment-in-progress-".concat(props.id)
        );
      }
      if (props.deployment.state === OpenShiftDeployedModel_1.OpenShiftDeployedModelState.ERROR) {
        return (0, jsx_runtime_1.jsx)(
          Tooltip_1.Tooltip,
          __assign(
            { position: "left", content: i18n.dmnDevSandbox.dropdown.item.errorTooltip },
            {
              children: (0, jsx_runtime_1.jsx)(
                exclamation_circle_icon_1.ExclamationCircleIcon,
                {
                  id: "dmn-dev-sandbox-deployment-item-error-icon",
                  className: "kogito--editor__dmn-dev-sandbox-dropdown-item-status error-icon",
                },
                void 0
              ),
            }
          ),
          "deployment-error-".concat(props.id)
        );
      }
      return (0, jsx_runtime_1.jsx)(
        Tooltip_1.Tooltip,
        __assign(
          { position: "left", content: i18n.dmnDevSandbox.dropdown.item.downTooltip },
          {
            children: (0, jsx_runtime_1.jsx)(
              exclamation_triangle_icon_1.ExclamationTriangleIcon,
              {
                id: "dmn-dev-sandbox-deployment-item-down-icon",
                className: "kogito--editor__dmn-dev-sandbox-dropdown-item-status warning-icon",
              },
              void 0
            ),
          }
        ),
        "deployment-down-".concat(props.id)
      );
    },
    [i18n, props.deployment.state, props.id]
  );
  var onItemClicked = (0, react_1.useCallback)(
    function () {
      window.open("".concat(props.deployment.baseUrl, "/#/form/").concat(props.deployment.uri), "_blank");
    },
    [props.deployment.baseUrl, props.deployment.uri]
  );
  return (0, jsx_runtime_1.jsx)(
    Dropdown_1.DropdownItem,
    __assign(
      {
        id: "dmn-dev-sandbox-deployment-item-button",
        isDisabled: props.deployment.state !== OpenShiftDeployedModel_1.OpenShiftDeployedModelState.UP,
        onClick: onItemClicked,
        description: i18n.dmnDevSandbox.dropdown.item.createdAt(props.deployment.creationTimestamp.toLocaleString()),
        icon: stateIcon,
      },
      { children: deploymentName }
    ),
    "dmn-dev-sandbox-dropdown-item-".concat(props.id)
  );
}
exports.DmnDevSandboxDeploymentDropdownItem = DmnDevSandboxDeploymentDropdownItem;
//# sourceMappingURL=DmnDevSandboxDeploymentDropdownItem.js.map

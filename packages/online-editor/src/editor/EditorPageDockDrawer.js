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
exports.EditorPageDockDrawer = exports.PanelId = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var react_1 = require("react");
var ToggleGroup_1 = require("@patternfly/react-core/dist/js/components/ToggleGroup");
var DmnRunnerStatus_1 = require("./DmnRunner/DmnRunnerStatus");
var DmnRunnerContext_1 = require("./DmnRunner/DmnRunnerContext");
var i18n_1 = require("../i18n");
var NotificationsPanel_1 = require("./NotificationsPanel/NotificationsPanel");
var DmnRunnerTabular_1 = require("./DmnRunner/DmnRunnerTabular");
var Drawer_1 = require("@patternfly/react-core/dist/js/components/Drawer");
var NotificationsPanelDockToggle_1 = require("./NotificationsPanel/NotificationsPanelDockToggle");
var DmnRunnerDockToggle_1 = require("./DmnRunner/DmnRunnerDockToggle");
var Hooks_1 = require("../reactExt/Hooks");
var KieSandboxExtendedServicesContext_1 = require("../kieSandboxExtendedServices/KieSandboxExtendedServicesContext");
var KieSandboxExtendedServicesStatus_1 = require("../kieSandboxExtendedServices/KieSandboxExtendedServicesStatus");
var PanelId;
(function (PanelId) {
  PanelId["DMN_RUNNER_TABULAR"] = "dmn-runner-tabular";
  PanelId["NOTIFICATIONS_PANEL"] = "notifications-panel";
  PanelId["NONE"] = "";
})((PanelId = exports.PanelId || (exports.PanelId = {})));
exports.EditorPageDockDrawer = React.forwardRef(function (props, forwardRef) {
  var i18n = (0, i18n_1.useOnlineI18n)().i18n;
  var dmnRunnerState = (0, DmnRunnerContext_1.useDmnRunnerState)();
  var _a = __read((0, react_1.useState)(PanelId.NONE), 2),
    panel = _a[0],
    setPanel = _a[1];
  var _b = __read((0, react_1.useState)([]), 2),
    dmnRunnerResults = _b[0],
    setDmnRunnerResults = _b[1];
  var _c = __read((0, Hooks_1.useController)(), 2),
    notificationsToggle = _c[0],
    notificationsToggleRef = _c[1];
  var _d = __read((0, Hooks_1.useController)(), 2),
    notificationsPanel = _d[0],
    notificationsPanelRef = _d[1];
  var notificationsPanelTabNames = (0, react_1.useMemo)(
    function () {
      if (
        props.workspaceFile.extension.toLowerCase() === "dmn" &&
        dmnRunnerState.isExpanded &&
        dmnRunnerState.mode === DmnRunnerStatus_1.DmnRunnerMode.FORM
      ) {
        return [i18n.terms.validation, i18n.terms.execution];
      }
      return [i18n.terms.validation];
    },
    [
      props.workspaceFile.extension,
      dmnRunnerState.isExpanded,
      dmnRunnerState.mode,
      i18n.terms.validation,
      i18n.terms.execution,
    ]
  );
  (0, react_1.useEffect)(
    function () {
      if (!notificationsPanelTabNames.includes(i18n.terms.execution)) {
        notificationsToggle === null || notificationsToggle === void 0
          ? void 0
          : notificationsToggle.deleteNotificationsFromTab(i18n.terms.execution);
      }
      if (notificationsPanel && notificationsToggle) {
        var notifications = notificationsToggle.getNotifications();
        notifications.forEach(function (value, tabName) {
          var _a;
          (_a = notificationsPanel.getTab(tabName)) === null || _a === void 0
            ? void 0
            : _a.kogitoNotifications_setNotifications(value.path, value.notifications);
        });
      }
    },
    [i18n.terms.execution, notificationsPanel, notificationsPanelTabNames, notificationsToggle]
  );
  var onToggle = (0, react_1.useCallback)(function (panel) {
    setPanel(function (currentPanel) {
      if (currentPanel !== panel) {
        return panel;
      }
      return PanelId.NONE;
    });
  }, []);
  var setNotifications = (0, react_1.useCallback)(
    function (tabName, path, notifications) {
      var _a;
      notificationsToggle === null || notificationsToggle === void 0
        ? void 0
        : notificationsToggle.setNewNotifications(tabName, { path: path, notifications: notifications });
      (_a =
        notificationsPanel === null || notificationsPanel === void 0 ? void 0 : notificationsPanel.getTab(tabName)) ===
        null || _a === void 0
        ? void 0
        : _a.kogitoNotifications_setNotifications(path, notifications);
    },
    [notificationsPanel, notificationsToggle]
  );
  (0, react_1.useImperativeHandle)(
    forwardRef,
    function () {
      return {
        open: function (panelId) {
          return setPanel(panelId);
        },
        toggle: function (panelId) {
          return onToggle(panelId);
        },
        close: function () {
          return setPanel(PanelId.NONE);
        },
        getNotificationsPanel: function () {
          return notificationsPanel;
        },
        setNotifications: setNotifications,
      };
    },
    [notificationsPanel, onToggle, setNotifications]
  );
  var kieSandboxExtendedServices = (0, KieSandboxExtendedServicesContext_1.useKieSandboxExtendedServices)();
  var notificationsPanelIsDisabled = (0, react_1.useMemo)(
    function () {
      return (
        props.workspaceFile.extension.toLowerCase() === "bpmn" ||
        (props.workspaceFile.extension.toLowerCase() === "dmn" &&
          kieSandboxExtendedServices.status !==
            KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING)
      );
    },
    [kieSandboxExtendedServices.status, props.workspaceFile.extension]
  );
  var notificationsPanelDisabledReason = (0, react_1.useMemo)(
    function () {
      if (props.workspaceFile.extension.toLowerCase() === "bpmn") {
        return "BPMN Editor doesn't have access to Problems tab";
      }
      if (
        props.workspaceFile.extension.toLowerCase() === "dmn" &&
        kieSandboxExtendedServices.status !==
          KieSandboxExtendedServicesStatus_1.KieSandboxExtendedServicesStatus.RUNNING
      ) {
        return "In order to have access to Problems tab you need to use the KIE Sandbox Extended Services";
      }
      return "";
    },
    [kieSandboxExtendedServices.status, props.workspaceFile.extension]
  );
  var isDmnTableMode = (0, react_1.useMemo)(
    function () {
      return (
        dmnRunnerState.mode === DmnRunnerStatus_1.DmnRunnerMode.TABLE &&
        props.workspaceFile.extension.toLowerCase() === "dmn"
      );
    },
    [dmnRunnerState.mode, props.workspaceFile.extension]
  );
  (0, react_1.useEffect)(
    function () {
      setPanel(PanelId.NONE);
    },
    [props.workspaceFile.relativePath]
  );
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        (0, jsx_runtime_1.jsx)(
          Drawer_1.Drawer,
          __assign(
            { isInline: true, position: "bottom", isExpanded: panel !== PanelId.NONE },
            {
              children: (0, jsx_runtime_1.jsx)(
                Drawer_1.DrawerContent,
                __assign(
                  {
                    panelContent:
                      panel !== PanelId.NONE &&
                      (0, jsx_runtime_1.jsx)(
                        Drawer_1.DrawerPanelContent,
                        __assign(
                          { style: { height: "100%" }, isResizable: true },
                          {
                            children:
                              props.isEditorReady &&
                              (0, jsx_runtime_1.jsxs)(
                                jsx_runtime_1.Fragment,
                                {
                                  children: [
                                    panel === PanelId.NOTIFICATIONS_PANEL &&
                                      (0, jsx_runtime_1.jsx)(
                                        NotificationsPanel_1.NotificationsPanel,
                                        { ref: notificationsPanelRef, tabNames: notificationsPanelTabNames },
                                        void 0
                                      ),
                                    panel === PanelId.DMN_RUNNER_TABULAR &&
                                      isDmnTableMode &&
                                      (0, jsx_runtime_1.jsx)(
                                        DmnRunnerTabular_1.DmnRunnerTabular,
                                        {
                                          setPanelOpen: setPanel,
                                          isReady: props.isEditorReady,
                                          dmnRunnerResults: dmnRunnerResults,
                                          setDmnRunnerResults: setDmnRunnerResults,
                                        },
                                        void 0
                                      ),
                                  ],
                                },
                                void 0
                              ),
                          }
                        ),
                        void 0
                      ),
                  },
                  { children: props.children }
                ),
                void 0
              ),
            }
          ),
          void 0
        ),
        (0, jsx_runtime_1.jsx)(
          "div",
          __assign(
            {
              style: {
                borderTop: "rgb(221, 221, 221) solid 1px",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              },
            },
            {
              children: (0, jsx_runtime_1.jsxs)(
                ToggleGroup_1.ToggleGroup,
                {
                  children: [
                    isDmnTableMode &&
                      (0, jsx_runtime_1.jsx)(
                        DmnRunnerDockToggle_1.DmnRunnerDockToggle,
                        {
                          isSelected: panel === PanelId.DMN_RUNNER_TABULAR,
                          onChange: function (id) {
                            return onToggle(id);
                          },
                        },
                        void 0
                      ),
                    (0, jsx_runtime_1.jsx)(
                      NotificationsPanelDockToggle_1.NotificationsPanelDockToggle,
                      {
                        isDisabled: notificationsPanelIsDisabled,
                        disabledReason: notificationsPanelDisabledReason,
                        ref: notificationsToggleRef,
                        isSelected: panel === PanelId.NOTIFICATIONS_PANEL,
                        onChange: function (id) {
                          return onToggle(id);
                        },
                      },
                      void 0
                    ),
                  ],
                },
                void 0
              ),
            }
          ),
          void 0
        ),
      ],
    },
    void 0
  );
});
//# sourceMappingURL=EditorPageDockDrawer.js.map

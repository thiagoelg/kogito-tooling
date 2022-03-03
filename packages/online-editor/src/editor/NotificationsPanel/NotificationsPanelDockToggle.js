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
exports.NotificationsPanelDockToggle = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var react_1 = require("react");
var exclamation_circle_icon_1 = require("@patternfly/react-icons/dist/js/icons/exclamation-circle-icon");
var ToggleGroup_1 = require("@patternfly/react-core/dist/js/components/ToggleGroup");
var EditorPageDockDrawer_1 = require("../EditorPageDockDrawer");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
exports.NotificationsPanelDockToggle = React.forwardRef(function (props, forwardRef) {
  var _a = __read((0, react_1.useState)(0), 2),
    notificationsCount = _a[0],
    setNotificationsCount = _a[1];
  var notifications = (0, react_1.useMemo)(function () {
    return new Map();
  }, []);
  var setNewNotifications = (0, react_1.useCallback)(
    function (tabName, notificationsWithPath) {
      notifications.set(tabName, notificationsWithPath);
      setNotificationsCount(
        Array.from(notifications.values()).reduce(function (count, _a) {
          var notifications = _a.notifications;
          return count + notifications.length;
        }, 0)
      );
    },
    [notifications]
  );
  var deleteNotificationsFromTab = (0, react_1.useCallback)(
    function (tabName) {
      notifications.delete(tabName);
      setNotificationsCount(
        Array.from(notifications.values()).reduce(function (count, _a) {
          var notifications = _a.notifications;
          return count + notifications.length;
        }, 0)
      );
    },
    [notifications]
  );
  (0, react_1.useImperativeHandle)(
    forwardRef,
    function () {
      return {
        getNotifications: function () {
          return notifications;
        },
        setNewNotifications: setNewNotifications,
        deleteNotificationsFromTab: deleteNotificationsFromTab,
      };
    },
    [deleteNotificationsFromTab, notifications, setNewNotifications]
  );
  return (0,
  jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: props.isDisabled ? (0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, __assign({ content: props.disabledReason, position: "top-end" }, { children: (0, jsx_runtime_1.jsx)(NotificationsToggleItem, { notificationsCount: notificationsCount, isDisabled: props.isDisabled, isSelected: props.isSelected, onChange: props.onChange }, void 0) }), "disabled") : (0, jsx_runtime_1.jsx)(NotificationsToggleItem, { notificationsCount: notificationsCount, isDisabled: props.isDisabled, isSelected: props.isSelected, onChange: props.onChange }, void 0) }, void 0);
});
function NotificationsToggleItem(props) {
  var onAnimationEnd = (0, react_1.useCallback)(function (e) {
    e.preventDefault();
    e.stopPropagation();
    var updatedResult = document.getElementById("total-notifications");
    updatedResult === null || updatedResult === void 0
      ? void 0
      : updatedResult.classList.remove("kogito--editor__notifications-panel-error-count-updated");
  }, []);
  return (0, jsx_runtime_1.jsx)(
    ToggleGroup_1.ToggleGroupItem,
    {
      style: {
        borderLeft: "solid 1px",
        borderRadius: 0,
        borderColor: "rgb(211, 211, 211)",
        padding: "1px",
      },
      isDisabled: props.isDisabled,
      buttonId: EditorPageDockDrawer_1.PanelId.NOTIFICATIONS_PANEL,
      isSelected: props.isSelected,
      onChange: function () {
        if (!props.isDisabled) {
          props.onChange(EditorPageDockDrawer_1.PanelId.NOTIFICATIONS_PANEL);
        }
      },
      text: (0, jsx_runtime_1.jsxs)(
        "div",
        __assign(
          { style: { display: "flex" } },
          {
            children: [
              (0, jsx_runtime_1.jsx)(
                "div",
                __assign(
                  { style: { paddingRight: "5px", width: "30px" } },
                  { children: (0, jsx_runtime_1.jsx)(exclamation_circle_icon_1.ExclamationCircleIcon, {}, void 0) }
                ),
                void 0
              ),
              "Problems",
              (0, jsx_runtime_1.jsx)(
                "div",
                __assign(
                  { style: { paddingLeft: "5px", width: "30px" } },
                  {
                    children:
                      !props.isDisabled &&
                      (0, jsx_runtime_1.jsx)(
                        "span",
                        __assign(
                          { id: "total-notifications", onAnimationEnd: onAnimationEnd },
                          { children: props.notificationsCount }
                        ),
                        void 0
                      ),
                  }
                ),
                void 0
              ),
            ],
          }
        ),
        void 0
      ),
    },
    void 0
  );
}
//# sourceMappingURL=NotificationsPanelDockToggle.js.map

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
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTabDrawerGroup = exports.NotificationPanelTabContent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var react_1 = require("react");
var NotificationDrawer_1 = require("@patternfly/react-core/dist/js/components/NotificationDrawer");
function variant(severity) {
  switch (severity) {
    case "ERROR":
      return "danger";
    case "HINT":
      return "default";
    case "SUCCESS":
      return "success";
    case "WARNING":
      return "warning";
    default:
      return "info";
  }
}
exports.NotificationPanelTabContent = React.forwardRef(function (props, forwardedRef) {
  var _a = __read((0, react_1.useState)([]), 2),
    tabNotifications = _a[0],
    setTabNotifications = _a[1];
  var createNotification = (0, react_1.useCallback)(
    function (notification) {
      setTabNotifications(__spreadArray(__spreadArray([], __read(tabNotifications), false), [notification], false));
    },
    [tabNotifications]
  );
  var setNotifications = (0, react_1.useCallback)(
    function (path, notifications) {
      props.onNotificationsLengthChange(props.name, notifications.length);
      setTabNotifications(notifications);
    },
    [props.onNotificationsLengthChange, props.name]
  );
  var removeNotifications = (0, react_1.useCallback)(function (path) {
    setTabNotifications(function (previousTabNotifications) {
      return previousTabNotifications.filter(function (tabNotification) {
        return tabNotification.path === path;
      });
    });
  }, []);
  (0, react_1.useImperativeHandle)(forwardedRef, function () {
    return {
      kogitoNotifications_createNotification: createNotification,
      kogitoNotifications_setNotifications: setNotifications,
      kogitoNotifications_removeNotifications: removeNotifications,
    };
  });
  var notificationsMap = (0, react_1.useMemo)(
    function () {
      return tabNotifications.reduce(function (acc, notification) {
        var notificationEntry = acc.get(notification.path);
        if (!notificationEntry) {
          acc.set(notification.path, [notification]);
        } else {
          acc.set(
            notification.path,
            __spreadArray(__spreadArray([], __read(notificationEntry), false), [notification], false)
          );
        }
        return acc;
      }, new Map());
    },
    [tabNotifications]
  );
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children:
        tabNotifications.length > 0 &&
        (0, jsx_runtime_1.jsx)(
          NotificationDrawer_1.NotificationDrawer,
          {
            children: (0, jsx_runtime_1.jsx)(
              NotificationDrawer_1.NotificationDrawerBody,
              {
                children: (0, jsx_runtime_1.jsx)(
                  NotificationDrawer_1.NotificationDrawerGroupList,
                  {
                    children: __spreadArray([], __read(notificationsMap.entries()), false)
                      .sort(function (_a, _b) {
                        var _c = __read(_a, 1),
                          a = _c[0];
                        var _d = __read(_b, 1),
                          b = _d[0];
                        return a < b ? -1 : 1;
                      })
                      .map(function (_a, groupIndex) {
                        var _b = __read(_a, 2),
                          path = _b[0],
                          notifications = _b[1];
                        return (0, jsx_runtime_1.jsx)(
                          React.Fragment,
                          {
                            children:
                              path === ""
                                ? (0, jsx_runtime_1.jsx)(
                                    NotificationDrawer_1.NotificationDrawerList,
                                    __assign(
                                      { isHidden: false },
                                      {
                                        children: notifications.map(function (notification, notificationIndex) {
                                          return (0,
                                          jsx_runtime_1.jsx)(NotificationDrawer_1.NotificationDrawerListItem, __assign({ isRead: true, variant: variant(notification.severity) }, { children: (0, jsx_runtime_1.jsx)(NotificationDrawer_1.NotificationDrawerListItemHeader, { title: notification.message, variant: variant(notification.severity) }, void 0) }), "validation-notification-".concat(notificationIndex));
                                        }),
                                      }
                                    ),
                                    void 0
                                  )
                                : (0, jsx_runtime_1.jsx)(
                                    NotificationTabDrawerGroup,
                                    {
                                      path: path,
                                      notifications: notifications,
                                      allExpanded: props.expandAll,
                                      setAllExpanded: props.setExpandAll,
                                    },
                                    "execution-notification-group-".concat(groupIndex)
                                  ),
                          },
                          path
                        );
                      }),
                  },
                  void 0
                ),
              },
              void 0
            ),
          },
          void 0
        ),
    },
    void 0
  );
});
function NotificationTabDrawerGroup(props) {
  var _a = __read((0, react_1.useState)(false), 2),
    isExpanded = _a[0],
    setIsExpanded = _a[1];
  var onExpand = (0, react_1.useCallback)(function () {
    setIsExpanded(function (prevExpanded) {
      return !prevExpanded;
    });
    props.setAllExpanded(undefined);
  }, []);
  (0, react_1.useEffect)(
    function () {
      if (props.allExpanded !== undefined) {
        setIsExpanded(props.allExpanded);
      }
    },
    [props.allExpanded]
  );
  return (0, jsx_runtime_1.jsx)(
    NotificationDrawer_1.NotificationDrawerGroup,
    __assign(
      {
        isRead: true,
        title: props.path,
        isExpanded: isExpanded,
        count: props.notifications.length,
        onExpand: onExpand,
      },
      {
        children: props.notifications.map(function (notification, index) {
          return (0,
          jsx_runtime_1.jsx)(NotificationDrawer_1.NotificationDrawerList, __assign({ isHidden: !isExpanded }, { children: (0, jsx_runtime_1.jsx)(NotificationDrawer_1.NotificationDrawerListItem, __assign({ isRead: true, variant: variant(notification.severity) }, { children: (0, jsx_runtime_1.jsx)(NotificationDrawer_1.NotificationDrawerListItemHeader, { title: notification.message, variant: variant(notification.severity) }, void 0) }), void 0) }), "execution-notification-item-".concat(props.path, "-").concat(index));
        }),
      }
    ),
    void 0
  );
}
exports.NotificationTabDrawerGroup = NotificationTabDrawerGroup;
//# sourceMappingURL=NotificationsPanelTabContent.js.map

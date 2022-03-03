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
exports.NotificationsPanel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var react_1 = require("react");
var Badge_1 = require("@patternfly/react-core/dist/js/components/Badge");
var Tabs_1 = require("@patternfly/react-core/dist/js/components/Tabs");
var Tooltip_1 = require("@patternfly/react-core/dist/js/components/Tooltip");
var angle_up_icon_1 = require("@patternfly/react-icons/dist/js/icons/angle-up-icon");
var angle_down_icon_1 = require("@patternfly/react-icons/dist/js/icons/angle-down-icon");
var NotificationsPanelTabContent_1 = require("./NotificationsPanelTabContent");
var i18n_1 = require("../../i18n");
var Button_1 = require("@patternfly/react-core/dist/js/components/Button");
exports.NotificationsPanel = React.forwardRef(function (props, forwardRef) {
  var i18n = (0, i18n_1.useOnlineI18n)().i18n;
  var _a = __read((0, react_1.useState)(), 2),
    activeTab = _a[0],
    setActiveTab = _a[1];
  var _b = __read((0, react_1.useState)(new Map()), 2),
    tabsNotificationsCount = _b[0],
    setTabsNotificationsCount = _b[1];
  var tabs = (0, react_1.useMemo)(function () {
    return new Map();
  }, []);
  (0, react_1.useImperativeHandle)(
    forwardRef,
    function () {
      return {
        getTab: function (name) {
          var _a, _b;
          return (_b = (_a = tabs.get(name)) === null || _a === void 0 ? void 0 : _a.current) !== null && _b !== void 0
            ? _b
            : undefined;
        },
        setActiveTab: function (name) {
          return setActiveTab(name);
        },
      };
    },
    [tabs]
  );
  var tabsMap = (0, react_1.useMemo)(
    function () {
      return new Map(
        props.tabNames.map(function (tabName) {
          return [tabName, React.createRef()];
        })
      );
    },
    [props.tabNames]
  );
  (0, react_1.useEffect)(
    function () {
      setTabsNotificationsCount(function (prev) {
        var newMap = new Map(prev);
        props.tabNames.forEach(function (name) {
          var _a;
          newMap.set(name, (_a = newMap.get(name)) !== null && _a !== void 0 ? _a : 0);
        });
        Array.from(newMap.keys()).forEach(function (k) {
          if (!props.tabNames.includes(k)) {
            newMap.delete(k);
          }
        });
        return newMap;
      });
    },
    [props.tabNames]
  );
  (0, react_1.useEffect)(
    function () {
      __spreadArray([], __read(tabsMap.entries()), false).forEach(function (_a) {
        var _b = __read(_a, 2),
          tabName = _b[0],
          tabRef = _b[1];
        return tabs.set(tabName, tabRef);
      });
    },
    [tabs, tabsMap]
  );
  var hasChanged = (0, react_1.useCallback)(function (newMap, prevMap) {
    var newEntries = __spreadArray([], __read(newMap.entries()), false);
    var prevEntries = __spreadArray([], __read(prevMap.entries()), false);
    var checkAgainst = function (entries, map) {
      return entries.reduce(function (hasChanged, _a) {
        var _b = __read(_a, 2),
          key = _b[0],
          value = _b[1];
        if (map.get(key) !== value) {
          hasChanged = true;
        }
        return hasChanged;
      }, false);
    };
    var newCheck = checkAgainst(newEntries, prevMap);
    var prevCheck = checkAgainst(prevEntries, newMap);
    return newCheck && prevCheck;
  }, []);
  var onNotificationsLengthChange = (0, react_1.useCallback)(
    function (name, newQtt) {
      setTabsNotificationsCount(function (prev) {
        var newMap = new Map(prev);
        newMap.set(name, newQtt);
        if (hasChanged(newMap, prev)) {
          return newMap;
        }
        return prev;
      });
    },
    [hasChanged]
  );
  var onSelectTab = (0, react_1.useCallback)(function (event, tabName) {
    setActiveTab(tabName);
  }, []);
  (0, react_1.useEffect)(function () {
    setActiveTab(props.tabNames[0]);
  }, []);
  var _c = __read((0, react_1.useState)(), 2),
    expandAll = _c[0],
    setExpandAll = _c[1];
  var onExpandAll = (0, react_1.useCallback)(function () {
    setExpandAll(true);
  }, []);
  var onRetractAll = (0, react_1.useCallback)(function () {
    setExpandAll(false);
  }, []);
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        (0, jsx_runtime_1.jsxs)(
          "div",
          __assign(
            { className: "kogito--editor__notifications-panel-icon-position" },
            {
              children: [
                (0, jsx_runtime_1.jsx)(
                  Tooltip_1.Tooltip,
                  __assign(
                    { content: i18n.notificationsPanel.tooltip.retractAll },
                    {
                      children: (0, jsx_runtime_1.jsx)(
                        Button_1.Button,
                        __assign(
                          {
                            variant: Button_1.ButtonVariant.plain,
                            onClick: onRetractAll,
                            className: "kie-tools--masthead-hoverable",
                          },
                          { children: (0, jsx_runtime_1.jsx)(angle_up_icon_1.AngleUpIcon, {}, void 0) }
                        ),
                        void 0
                      ),
                    }
                  ),
                  void 0
                ),
                (0, jsx_runtime_1.jsx)(
                  Tooltip_1.Tooltip,
                  __assign(
                    { content: i18n.notificationsPanel.tooltip.expandAll },
                    {
                      children: (0, jsx_runtime_1.jsx)(
                        Button_1.Button,
                        __assign(
                          {
                            variant: Button_1.ButtonVariant.plain,
                            onClick: onExpandAll,
                            className: "kie-tools--masthead-hoverable",
                          },
                          { children: (0, jsx_runtime_1.jsx)(angle_down_icon_1.AngleDownIcon, {}, void 0) }
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
        (0, jsx_runtime_1.jsx)(
          Tabs_1.Tabs,
          __assign(
            { activeKey: activeTab, onSelect: onSelectTab, style: { overflow: "initial" } },
            {
              children: __spreadArray([], __read(tabsMap.entries()), false).map(function (_a, index) {
                var _b = __read(_a, 2),
                  tabName = _b[0],
                  tabRef = _b[1];
                return (0,
                jsx_runtime_1.jsx)(Tabs_1.Tab, __assign({ className: "kie-tools--problems-tab-content", eventKey: tabName, title: (0, jsx_runtime_1.jsxs)(Tabs_1.TabTitleText, { children: [tabName, " ", (0, jsx_runtime_1.jsx)(Badge_1.Badge, __assign({ isRead: true }, { children: tabsNotificationsCount.get(tabName) }), void 0)] }, void 0) }, { children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(NotificationsPanelTabContent_1.NotificationPanelTabContent, { name: tabName, ref: tabRef, onNotificationsLengthChange: onNotificationsLengthChange, expandAll: expandAll, setExpandAll: setExpandAll }, void 0) }, void 0) }), "tab-".concat(index));
              }),
            }
          ),
          void 0
        ),
      ],
    },
    void 0
  );
});
//# sourceMappingURL=NotificationsPanel.js.map

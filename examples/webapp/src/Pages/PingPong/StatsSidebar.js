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
exports.StatsSidebar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_core_1 = require("@patternfly/react-core");
function StatsSidebar(props) {
  var _a = __read((0, react_1.useState)("-"), 2),
    lastPingTimestamp = _a[0],
    setLastPingTimestamp = _a[1];
  var pings = props.pings,
    pongs = props.pongs,
    lastPing = props.lastPing,
    lastPong = props.lastPong,
    onClearLogs = props.onClearLogs,
    onGetLastPingTimestamp = props.onGetLastPingTimestamp;
  (0, react_1.useEffect)(
    function () {
      if (pings) {
        onGetLastPingTimestamp === null || onGetLastPingTimestamp === void 0
          ? void 0
          : onGetLastPingTimestamp().then(function (timestamp) {
              setLastPingTimestamp(new Date(timestamp).toLocaleTimeString());
            });
      }
    },
    [pings, onGetLastPingTimestamp]
  );
  return (0, jsx_runtime_1.jsx)(
    "div",
    {
      children: (0, jsx_runtime_1.jsxs)(
        react_core_1.Nav,
        __assign(
          { className: "webapp--page-navigation webapp--page-ping-pong-view-navigation" },
          {
            children: [
              (0, jsx_runtime_1.jsx)(
                "div",
                __assign(
                  { className: "webapp--page-navigation-title-div" },
                  {
                    children: (0, jsx_runtime_1.jsx)(
                      react_core_1.Title,
                      __assign(
                        { className: "webapp--page-navigation-title-h3", headingLevel: "h3", size: "xl" },
                        { children: "Stats" }
                      ),
                      void 0
                    ),
                  }
                ),
                void 0
              ),
              (0, jsx_runtime_1.jsxs)(
                react_core_1.NavList,
                {
                  children: [
                    (0, jsx_runtime_1.jsx)(
                      react_core_1.NavItem,
                      {
                        children: (0, jsx_runtime_1.jsxs)(
                          "div",
                          {
                            children: [
                              "Pings: \u00A0",
                              (0, jsx_runtime_1.jsx)(react_core_1.Label, { children: pings }, void 0),
                            ],
                          },
                          void 0
                        ),
                      },
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)(
                      react_core_1.NavItem,
                      {
                        children: (0, jsx_runtime_1.jsxs)(
                          "div",
                          {
                            children: [
                              "Pongs: \u00A0",
                              (0, jsx_runtime_1.jsx)(react_core_1.Label, { children: pongs }, void 0),
                            ],
                          },
                          void 0
                        ),
                      },
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)(
                      react_core_1.NavItem,
                      {
                        children: (0, jsx_runtime_1.jsxs)(
                          "div",
                          {
                            children: [
                              "Last ping: \u00A0",
                              (0, jsx_runtime_1.jsx)(react_core_1.Label, { children: lastPing }, void 0),
                            ],
                          },
                          void 0
                        ),
                      },
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)(
                      react_core_1.NavItem,
                      {
                        children: (0, jsx_runtime_1.jsxs)(
                          "div",
                          {
                            children: [
                              "Last ping timestamp: \u00A0",
                              (0, jsx_runtime_1.jsx)(react_core_1.Label, { children: lastPingTimestamp }, void 0),
                            ],
                          },
                          void 0
                        ),
                      },
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)(
                      react_core_1.NavItem,
                      {
                        children: (0, jsx_runtime_1.jsxs)(
                          "div",
                          {
                            children: [
                              "Last pong: \u00A0",
                              (0, jsx_runtime_1.jsx)(react_core_1.Label, { children: lastPong }, void 0),
                            ],
                          },
                          void 0
                        ),
                      },
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)(
                      react_core_1.NavItem,
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          "div",
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              "button",
                              __assign({ onClick: onClearLogs }, { children: "Clear logs!" }),
                              void 0
                            ),
                          },
                          void 0
                        ),
                      },
                      void 0
                    ),
                  ],
                },
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
exports.StatsSidebar = StatsSidebar;
//# sourceMappingURL=StatsSidebar.js.map

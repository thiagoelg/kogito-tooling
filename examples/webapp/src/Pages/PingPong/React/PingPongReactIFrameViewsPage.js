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
exports.PingPongReactIFrameViewsPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_core_1 = require("@patternfly/react-core");
var embedded_1 = require("@kie-tools-examples/ping-pong-view/dist/embedded");
var StatsSidebar_1 = require("../StatsSidebar");
var hooks_1 = require("../hooks");
var reactEnvelopePath = "envelope/ping-pong-view-react-impl.html";
function PingPongReactIFrameViewsPage() {
  var _a = (0, hooks_1.usePingPongChannelApi)(),
    pingsCount = _a.pingsCount,
    pongsCount = _a.pongsCount,
    lastPing = _a.lastPing,
    lastPong = _a.lastPong,
    apiImpl = _a.apiImpl;
  var react1 = (0, react_1.useRef)(null);
  var react2 = (0, react_1.useRef)(null);
  var react3 = (0, react_1.useRef)(null);
  var refs = (0, react_1.useMemo)(
    function () {
      return [react1, react2, react3];
    },
    [react1, react2, react3]
  );
  var _b = (0, hooks_1.usePingPongApiCallbacks)(refs),
    onClearLogs = _b.onClearLogs,
    onGetLastPingTimestamp = _b.onGetLastPingTimestamp;
  return (0, jsx_runtime_1.jsx)(
    react_core_1.Page,
    {
      children: (0, jsx_runtime_1.jsxs)(
        "div",
        __assign(
          { className: "webapp--page-main-div" },
          {
            children: [
              (0, jsx_runtime_1.jsx)(
                StatsSidebar_1.StatsSidebar,
                {
                  lastPing: lastPing,
                  lastPong: lastPong,
                  pings: pingsCount,
                  pongs: pongsCount,
                  onClearLogs: onClearLogs,
                  onGetLastPingTimestamp: onGetLastPingTimestamp,
                },
                void 0
              ),
              (0, jsx_runtime_1.jsxs)(
                "div",
                __assign(
                  { className: "webapp--page-ping-pong-view" },
                  {
                    children: [
                      (0, jsx_runtime_1.jsx)(
                        react_core_1.PageSection,
                        __assign(
                          { style: { flex: "1 1" } },
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              embedded_1.EmbeddedIFramePingPong,
                              {
                                apiImpl: apiImpl,
                                name: "React 1",
                                ref: react1,
                                targetOrigin: window.location.origin,
                                envelopePath: reactEnvelopePath,
                              },
                              void 0
                            ),
                          }
                        ),
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)(
                        react_core_1.PageSection,
                        __assign(
                          { style: { flex: "1 1" } },
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              embedded_1.EmbeddedIFramePingPong,
                              {
                                apiImpl: apiImpl,
                                name: "React 2",
                                ref: react2,
                                targetOrigin: window.location.origin,
                                envelopePath: reactEnvelopePath,
                              },
                              void 0
                            ),
                          }
                        ),
                        void 0
                      ),
                      (0, jsx_runtime_1.jsx)(
                        react_core_1.PageSection,
                        __assign(
                          { style: { flex: "1 1" } },
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              embedded_1.EmbeddedIFramePingPong,
                              {
                                apiImpl: apiImpl,
                                name: "React 3",
                                ref: react3,
                                targetOrigin: window.location.origin,
                                envelopePath: reactEnvelopePath,
                              },
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
            ],
          }
        ),
        void 0
      ),
    },
    void 0
  );
}
exports.PingPongReactIFrameViewsPage = PingPongReactIFrameViewsPage;
//# sourceMappingURL=PingPongReactIFrameViewsPage.js.map

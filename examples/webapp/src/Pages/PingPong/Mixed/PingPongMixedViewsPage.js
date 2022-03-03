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
exports.PingPongMixedViewsPage = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_core_1 = require("@patternfly/react-core");
var embedded_1 = require("@kie-tools-examples/ping-pong-view/dist/embedded");
var StatsSidebar_1 = require("../StatsSidebar");
var ping_pong_view_react_1 = require("@kie-tools-examples/ping-pong-view-react");
var lib_1 = require("@kie-tools-examples/ping-pong-view-angular/dist/wc/lib");
var hooks_1 = require("../hooks");
var reactEnvelopePath = "envelope/ping-pong-view-react-impl.html";
var angularEnvelopePath = "envelope/angular/index.html";
function PingPongMixedViewsPage() {
  var _a = (0, hooks_1.usePingPongChannelApi)(),
    pingsCount = _a.pingsCount,
    pongsCount = _a.pongsCount,
    lastPing = _a.lastPing,
    lastPong = _a.lastPong,
    apiImpl = _a.apiImpl;
  var angularIFrame = (0, react_1.useRef)(null);
  var angularDiv = (0, react_1.useRef)(null);
  var reactIFrame = (0, react_1.useRef)(null);
  var reactDiv = (0, react_1.useRef)(null);
  var refs = (0, react_1.useMemo)(
    function () {
      return [angularIFrame, angularDiv, reactIFrame, reactDiv];
    },
    [angularIFrame, angularDiv, reactIFrame, reactDiv]
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
                          { style: { flex: "1 1 25%" } },
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              embedded_1.EmbeddedIFramePingPong,
                              {
                                apiImpl: apiImpl,
                                name: "Angular iFrame",
                                ref: angularIFrame,
                                targetOrigin: window.location.origin,
                                envelopePath: angularEnvelopePath,
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
                          { style: { flex: "1 1 25%" } },
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              embedded_1.EmbeddedDivPingPong,
                              {
                                apiImpl: apiImpl,
                                name: "Angular Div",
                                ref: angularDiv,
                                targetOrigin: window.location.origin,
                                renderView: lib_1.pingPongEnvelopViewRenderDiv,
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
                          { style: { flex: "1 1 25%" } },
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              embedded_1.EmbeddedIFramePingPong,
                              {
                                apiImpl: apiImpl,
                                name: "React iFrame",
                                ref: reactIFrame,
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
                          { style: { flex: "1 1 25%" } },
                          {
                            children: (0, jsx_runtime_1.jsx)(
                              embedded_1.EmbeddedDivPingPong,
                              {
                                apiImpl: apiImpl,
                                name: "React Div",
                                ref: reactDiv,
                                targetOrigin: window.location.origin,
                                renderView: ping_pong_view_react_1.pingPongEnvelopViewRenderDiv,
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
exports.PingPongMixedViewsPage = PingPongMixedViewsPage;
//# sourceMappingURL=PingPongMixedViewsPage.js.map

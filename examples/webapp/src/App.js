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
exports.App = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("@patternfly/patternfly/base/patternfly-variables.css");
require("@patternfly/patternfly/patternfly-addons.scss");
require("@patternfly/patternfly/patternfly.scss");
var react_1 = require("react");
var react_core_1 = require("@patternfly/react-core");
var react_router_dom_1 = require("react-router-dom");
var Base64PngPage_1 = require("./Pages/Base64Png/Base64PngPage");
var BpmnPage_1 = require("./Pages/KogitoEditors/BpmnPage");
var DmnPage_1 = require("./Pages/KogitoEditors/DmnPage");
var TodoListViewPage_1 = require("./Pages/TodoList/TodoListViewPage");
var PingPongReactIFrameViewsPage_1 = require("./Pages/PingPong/React/PingPongReactIFrameViewsPage");
var PingPongReactDivViewsPage_1 = require("./Pages/PingPong/React/PingPongReactDivViewsPage");
var Home_1 = require("./Home");
require("../static/resources/styles.css");
var DmnStandaloneEditorPage_1 = require("./Pages/StandaloneEditors/DmnStandaloneEditorPage");
var PingPongAngularIFrameViewsPage_1 = require("./Pages/PingPong/Angular/PingPongAngularIFrameViewsPage");
var PingPongMixedViewsPage_1 = require("./Pages/PingPong/Mixed/PingPongMixedViewsPage");
var PingPongAngularDivViewsPage_1 = require("./Pages/PingPong/Angular/PingPongAngularDivViewsPage");
var Location;
(function (Location) {
  Location["BPMN"] = "/editor/bpmn";
  Location["DMN"] = "/editor/dmn";
  Location["BASE46PNG"] = "/editor/base64png";
  Location["TODO_LIST"] = "/page/todo-list";
  Location["PING_PONG_REACT_IFRAME_PAGES"] = "/page/ping-pong-react/iframe-pages";
  Location["PING_PONG_REACT_DIV_PAGES"] = "/page/ping-pong-react/div-pages";
  Location["PING_PONG_ANGULAR_IFRAME_PAGES"] = "/page/ping-pong-angular/iframe-pages";
  Location["PING_PONG_ANGULAR_DIV_PAGES"] = "/page/ping-pong-angular/div-pages";
  Location["PING_PONG_MIXED_PAGES"] = "/page/ping-pong-mixed";
  Location["STANDALONE_EDITORS"] = "/page/standalone-editors";
  Location["HOME"] = "/";
})(Location || (Location = {}));
function App() {
  var _a = __read((0, react_1.useState)(Location.HOME), 2),
    location = _a[0],
    setLocation = _a[1];
  (0, react_1.useEffect)(function () {
    setLocation(window.location.hash.slice(1));
  });
  return (0, jsx_runtime_1.jsx)(
    react_router_dom_1.HashRouter,
    {
      children: (0, jsx_runtime_1.jsx)(
        react_core_1.Page,
        __assign(
          {
            header: (0, jsx_runtime_1.jsx)(
              react_core_1.PageHeader,
              {
                logo: (0, jsx_runtime_1.jsx)(react_core_1.Brand, { src: "logo.png", alt: "Logo" }, void 0),
                topNav: (0, jsx_runtime_1.jsx)(
                  react_core_1.Nav,
                  __assign(
                    {
                      onSelect: function (e) {
                        return setLocation(e.itemId);
                      },
                      "aria-label": "Nav",
                      variant: "horizontal",
                    },
                    {
                      children: (0, jsx_runtime_1.jsxs)(
                        react_core_1.NavList,
                        {
                          children: [
                            (0, jsx_runtime_1.jsx)(
                              react_core_1.NavItem,
                              __assign(
                                { itemId: Location.HOME, isActive: location === Location.HOME },
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    react_router_dom_1.Link,
                                    __assign({ to: Location.HOME }, { children: "Home" }),
                                    void 0
                                  ),
                                }
                              ),
                              void 0
                            ),
                            (0, jsx_runtime_1.jsx)(
                              react_core_1.NavItem,
                              __assign(
                                { itemId: Location.BASE46PNG, isActive: location === Location.BASE46PNG },
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    react_router_dom_1.Link,
                                    __assign({ to: Location.BASE46PNG }, { children: "Base64 PNG Editor" }),
                                    void 0
                                  ),
                                }
                              ),
                              void 0
                            ),
                            (0, jsx_runtime_1.jsx)(
                              react_core_1.NavItem,
                              __assign(
                                { itemId: Location.BPMN, isActive: location === Location.BPMN },
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    react_router_dom_1.Link,
                                    __assign({ to: Location.BPMN }, { children: "BPMN Editor" }),
                                    void 0
                                  ),
                                }
                              ),
                              void 0
                            ),
                            (0, jsx_runtime_1.jsx)(
                              react_core_1.NavItem,
                              __assign(
                                { itemId: Location.DMN, isActive: location === Location.DMN },
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    react_router_dom_1.Link,
                                    __assign({ to: Location.DMN }, { children: "DMN Editor" }),
                                    void 0
                                  ),
                                }
                              ),
                              void 0
                            ),
                            (0, jsx_runtime_1.jsx)(
                              react_core_1.NavItem,
                              __assign(
                                { itemId: Location.TODO_LIST, isActive: location === Location.TODO_LIST },
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    react_router_dom_1.Link,
                                    __assign({ to: Location.TODO_LIST }, { children: "'To do' list View" }),
                                    void 0
                                  ),
                                }
                              ),
                              void 0
                            ),
                            (0, jsx_runtime_1.jsx)(
                              react_core_1.NavItem,
                              __assign(
                                {
                                  itemId: Location.PING_PONG_REACT_IFRAME_PAGES,
                                  isActive: location === Location.PING_PONG_REACT_IFRAME_PAGES,
                                },
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    react_router_dom_1.Link,
                                    __assign(
                                      { to: Location.PING_PONG_REACT_IFRAME_PAGES },
                                      { children: "Ping-Pong React IFrame" }
                                    ),
                                    void 0
                                  ),
                                }
                              ),
                              void 0
                            ),
                            (0, jsx_runtime_1.jsx)(
                              react_core_1.NavItem,
                              __assign(
                                {
                                  itemId: Location.PING_PONG_REACT_DIV_PAGES,
                                  isActive: location === Location.PING_PONG_REACT_DIV_PAGES,
                                },
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    react_router_dom_1.Link,
                                    __assign(
                                      { to: Location.PING_PONG_REACT_DIV_PAGES },
                                      { children: "Ping-Pong React Div" }
                                    ),
                                    void 0
                                  ),
                                }
                              ),
                              void 0
                            ),
                            (0, jsx_runtime_1.jsx)(
                              react_core_1.NavItem,
                              __assign(
                                {
                                  itemId: Location.PING_PONG_ANGULAR_IFRAME_PAGES,
                                  isActive: location === Location.PING_PONG_ANGULAR_IFRAME_PAGES,
                                },
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    react_router_dom_1.Link,
                                    __assign(
                                      { to: Location.PING_PONG_ANGULAR_IFRAME_PAGES },
                                      { children: "Ping-Pong Angular IFrame" }
                                    ),
                                    void 0
                                  ),
                                }
                              ),
                              void 0
                            ),
                            (0, jsx_runtime_1.jsx)(
                              react_core_1.NavItem,
                              __assign(
                                {
                                  itemId: Location.PING_PONG_ANGULAR_DIV_PAGES,
                                  isActive: location === Location.PING_PONG_ANGULAR_DIV_PAGES,
                                },
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    react_router_dom_1.Link,
                                    __assign(
                                      { to: Location.PING_PONG_ANGULAR_DIV_PAGES },
                                      { children: "Ping-Pong Angular Div" }
                                    ),
                                    void 0
                                  ),
                                }
                              ),
                              void 0
                            ),
                            (0, jsx_runtime_1.jsx)(
                              react_core_1.NavItem,
                              __assign(
                                {
                                  itemId: Location.PING_PONG_MIXED_PAGES,
                                  isActive: location === Location.PING_PONG_MIXED_PAGES,
                                },
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    react_router_dom_1.Link,
                                    __assign(
                                      { to: Location.PING_PONG_MIXED_PAGES },
                                      { children: "Ping-Pong Mixed Views" }
                                    ),
                                    void 0
                                  ),
                                }
                              ),
                              void 0
                            ),
                            (0, jsx_runtime_1.jsx)(
                              react_core_1.NavItem,
                              __assign(
                                {
                                  itemId: Location.STANDALONE_EDITORS,
                                  isActive: location === Location.STANDALONE_EDITORS,
                                },
                                {
                                  children: (0, jsx_runtime_1.jsx)(
                                    react_router_dom_1.Link,
                                    __assign(
                                      { to: Location.STANDALONE_EDITORS },
                                      { children: "DMN Standalone Editor" }
                                    ),
                                    void 0
                                  ),
                                }
                              ),
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
              void 0
            ),
          },
          {
            children: (0, jsx_runtime_1.jsxs)(
              react_router_dom_1.Switch,
              {
                children: [
                  (0, jsx_runtime_1.jsx)(
                    react_router_dom_1.Route,
                    __assign({ exact: true, path: "/" }, { children: (0, jsx_runtime_1.jsx)(Home_1.Home, {}, void 0) }),
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    react_router_dom_1.Route,
                    __assign(
                      { path: Location.BASE46PNG },
                      { children: (0, jsx_runtime_1.jsx)(Base64PngPage_1.Base64PngPage, {}, void 0) }
                    ),
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    react_router_dom_1.Route,
                    __assign(
                      { path: Location.BPMN },
                      { children: (0, jsx_runtime_1.jsx)(BpmnPage_1.BpmnPage, {}, void 0) }
                    ),
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    react_router_dom_1.Route,
                    __assign(
                      { path: Location.DMN },
                      { children: (0, jsx_runtime_1.jsx)(DmnPage_1.DmnPage, {}, void 0) }
                    ),
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    react_router_dom_1.Route,
                    __assign(
                      { path: Location.TODO_LIST },
                      { children: (0, jsx_runtime_1.jsx)(TodoListViewPage_1.TodoListViewPage, {}, void 0) }
                    ),
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    react_router_dom_1.Route,
                    __assign(
                      { path: Location.PING_PONG_REACT_IFRAME_PAGES },
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          PingPongReactIFrameViewsPage_1.PingPongReactIFrameViewsPage,
                          {},
                          void 0
                        ),
                      }
                    ),
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    react_router_dom_1.Route,
                    __assign(
                      { path: Location.PING_PONG_REACT_DIV_PAGES },
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          PingPongReactDivViewsPage_1.PingPongReactDivViewsPage,
                          {},
                          void 0
                        ),
                      }
                    ),
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    react_router_dom_1.Route,
                    __assign(
                      { path: Location.PING_PONG_ANGULAR_IFRAME_PAGES },
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          PingPongAngularIFrameViewsPage_1.PingPongAngularIFrameViewsPage,
                          {},
                          void 0
                        ),
                      }
                    ),
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    react_router_dom_1.Route,
                    __assign(
                      { path: Location.PING_PONG_ANGULAR_DIV_PAGES },
                      {
                        children: (0, jsx_runtime_1.jsx)(
                          PingPongAngularDivViewsPage_1.PingPongAngularDivViewsPage,
                          {},
                          void 0
                        ),
                      }
                    ),
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    react_router_dom_1.Route,
                    __assign(
                      { path: Location.PING_PONG_MIXED_PAGES },
                      { children: (0, jsx_runtime_1.jsx)(PingPongMixedViewsPage_1.PingPongMixedViewsPage, {}, void 0) }
                    ),
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    react_router_dom_1.Route,
                    __assign(
                      { path: Location.STANDALONE_EDITORS },
                      {
                        children: (0, jsx_runtime_1.jsx)(DmnStandaloneEditorPage_1.DmnStandaloneEditorPage, {}, void 0),
                      }
                    ),
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
    void 0
  );
}
exports.App = App;
//# sourceMappingURL=App.js.map

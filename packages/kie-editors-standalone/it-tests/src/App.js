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
exports.App = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var DmnEditorComponent_1 = require("./components/DmnEditorComponent");
var BpmnEditorComponent_1 = require("./components/BpmnEditorComponent");
var api_1 = require("@kie-tools-core/workspace/dist/api");
var processWithWidDefinition_bpmn2_1 = require("raw-loader!./resources/processWithWidDefinition.bpmn2");
var widDefinitions_wid_1 = require("raw-loader!./resources/widDefinitions.wid");
function App() {
  return (0, jsx_runtime_1.jsx)(
    react_router_dom_1.BrowserRouter,
    {
      children: (0, jsx_runtime_1.jsxs)(
        jsx_runtime_1.Fragment,
        {
          children: [
            (0, jsx_runtime_1.jsxs)(
              "div",
              __assign(
                { style: { display: "flex", justifyContent: "space-between" } },
                {
                  children: [
                    (0, jsx_runtime_1.jsx)(
                      react_router_dom_1.Link,
                      __assign({ to: "/dmn-read-only" }, { children: "DMN Read Only" }),
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)(
                      react_router_dom_1.Link,
                      __assign({ to: "/dmn-editable" }, { children: "DMN Editable" }),
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)(
                      react_router_dom_1.Link,
                      __assign({ to: "/bpmn-editable" }, { children: "BPMN Editable" }),
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)(
                      react_router_dom_1.Link,
                      __assign({ to: "/bpmn-read-only" }, { children: "BPMN Read Only" }),
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)(
                      react_router_dom_1.Link,
                      __assign({ to: "/bpmn-workitem" }, { children: "BPMN Workitem" }),
                      void 0
                    ),
                    (0, jsx_runtime_1.jsx)(
                      react_router_dom_1.Link,
                      __assign({ to: "/both-bpmn-dmn" }, { children: "Both BPMN DMN" }),
                      void 0
                    ),
                  ],
                }
              ),
              void 0
            ),
            (0, jsx_runtime_1.jsx)("br", {}, void 0),
            (0, jsx_runtime_1.jsxs)(
              react_router_dom_1.Switch,
              {
                children: [
                  (0, jsx_runtime_1.jsx)(
                    react_router_dom_1.Route,
                    {
                      exact: true,
                      path: "/dmn-read-only",
                      render: function () {
                        return (0, jsx_runtime_1.jsx)(
                          DmnEditorComponent_1.DmnEditorComponent,
                          { origin: "*", id: "dmn-read-only", readOnly: true, initialContent: Promise.resolve("") },
                          "dmn-read-only"
                        );
                      },
                    },
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    react_router_dom_1.Route,
                    {
                      exact: true,
                      path: "/dmn-editable",
                      render: function () {
                        return (0, jsx_runtime_1.jsx)(
                          DmnEditorComponent_1.DmnEditorComponent,
                          { origin: "*", id: "dmn-editable", readOnly: false, initialContent: Promise.resolve("") },
                          "dmn-editable"
                        );
                      },
                    },
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    react_router_dom_1.Route,
                    {
                      exact: true,
                      path: "/bpmn-editable",
                      render: function () {
                        return (0, jsx_runtime_1.jsx)(
                          BpmnEditorComponent_1.BpmnEditorComponent,
                          { origin: "*", id: "bpmn-editable", readOnly: false, initialContent: Promise.resolve("") },
                          "bpmn-editable"
                        );
                      },
                    },
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    react_router_dom_1.Route,
                    {
                      exact: true,
                      path: "/bpmn-read-only",
                      render: function () {
                        return (0, jsx_runtime_1.jsx)(
                          BpmnEditorComponent_1.BpmnEditorComponent,
                          { origin: "*", id: "bpmn-read-only", readOnly: true, initialContent: Promise.resolve("") },
                          "bpmn-read-only"
                        );
                      },
                    },
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    react_router_dom_1.Route,
                    {
                      exact: true,
                      path: "/bpmn-workitem",
                      render: function () {
                        return (0, jsx_runtime_1.jsx)(
                          BpmnEditorComponent_1.BpmnEditorComponent,
                          {
                            origin: "*",
                            id: "bpmn-workitem",
                            readOnly: false,
                            initialContent: Promise.resolve(processWithWidDefinition_bpmn2_1.default),
                            resources: new Map([
                              [
                                "custom-workitem.wid",
                                {
                                  contentType: api_1.ContentType.TEXT,
                                  content: Promise.resolve(widDefinitions_wid_1.default),
                                },
                              ],
                            ]),
                          },
                          void 0
                        );
                      },
                    },
                    void 0
                  ),
                  (0, jsx_runtime_1.jsx)(
                    react_router_dom_1.Route,
                    {
                      exact: true,
                      path: "/both-bpmn-dmn",
                      render: function () {
                        return (0, jsx_runtime_1.jsxs)(
                          jsx_runtime_1.Fragment,
                          {
                            children: [
                              (0, jsx_runtime_1.jsx)(
                                BpmnEditorComponent_1.BpmnEditorComponent,
                                { origin: "*", id: "both-bpmn", readOnly: false, initialContent: Promise.resolve("") },
                                void 0
                              ),
                              (0, jsx_runtime_1.jsx)(
                                DmnEditorComponent_1.DmnEditorComponent,
                                { origin: "*", id: "both-dmn", readOnly: false, initialContent: Promise.resolve("") },
                                void 0
                              ),
                            ],
                          },
                          void 0
                        );
                      },
                    },
                    void 0
                  ),
                ],
              },
              void 0
            ),
          ],
        },
        void 0
      ),
    },
    void 0
  );
}
exports.App = App;
//# sourceMappingURL=App.js.map

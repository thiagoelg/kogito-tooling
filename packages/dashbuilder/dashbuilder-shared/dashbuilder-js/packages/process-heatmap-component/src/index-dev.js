"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var ReactDOM = require("react-dom");
var ProcessHeatmapComponent_1 = require("./ProcessHeatmapComponent");
var component_api_1 = require("@dashbuilder-js/component-api");
var component_dev_1 = require("@dashbuilder-js/component-dev");
var api = new component_api_1.ComponentApi();
ReactDOM.render(
  (0, jsx_runtime_1.jsx)(
    ProcessHeatmapComponent_1.ProcessHeatmapComponent,
    { controller: api.getComponentController() },
    void 0
  ),
  document.getElementById("app")
);
new component_dev_1.ComponentDev().start();
//# sourceMappingURL=index-dev.js.map

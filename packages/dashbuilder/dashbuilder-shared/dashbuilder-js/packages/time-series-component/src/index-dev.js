"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var ReactDOM = require("react-dom");
var Chart_1 = require("./Chart");
var component_dev_1 = require("@dashbuilder-js/component-dev");
var component_api_1 = require("@dashbuilder-js/component-api");
var api = new component_api_1.ComponentApi();
ReactDOM.render(
  (0, jsx_runtime_1.jsx)(Chart_1.Chart, { controller: api.getComponentController() }, void 0),
  document.getElementById("app")
);
new component_dev_1.ComponentDev().start();
//# sourceMappingURL=index-dev.js.map

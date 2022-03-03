"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var ReactDOM = require("react-dom");
var LogoComponent_1 = require("./LogoComponent");
var component_api_1 = require("@dashbuilder-js/component-api");
var api = new component_api_1.ComponentApi();
ReactDOM.render(
  (0, jsx_runtime_1.jsx)(LogoComponent_1.LogoComponent, { controller: api.getComponentController() }, void 0),
  document.getElementById("app")
);
//# sourceMappingURL=index.js.map

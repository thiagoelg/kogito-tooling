"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var ReactDOM = require("react-dom");
var electron = require("electron");
var App_1 = require("./App");
document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render((0, jsx_runtime_1.jsx)(App_1.App, {}, void 0), document.getElementById("app"), function () {
    electron.ipcRenderer.send("mainWindowLoaded");
  });
});
//# sourceMappingURL=index.js.map

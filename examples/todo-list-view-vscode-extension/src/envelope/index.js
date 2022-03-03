"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoListViewEnvelope = require("@kie-tools-examples/todo-list-view/dist/envelope");
TodoListViewEnvelope.init({
  container: document.getElementById("envelope-app"),
  bus: acquireVsCodeApi(),
});
//# sourceMappingURL=index.js.map

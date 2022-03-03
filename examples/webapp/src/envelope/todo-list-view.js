"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoListViewEnvelope = require("@kie-tools-examples/todo-list-view/dist/envelope");
TodoListViewEnvelope.init({
  container: document.getElementById("envelope-app"),
  bus: {
    postMessage: function (message, targetOrigin, transfer) {
      return window.parent.postMessage(message, "*", transfer);
    },
  },
});
//# sourceMappingURL=todo-list-view.js.map

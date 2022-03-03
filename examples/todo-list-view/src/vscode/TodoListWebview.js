"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoListWebview = void 0;
var vscode = require("vscode");
var vscode_1 = require("vscode");
var channel_1 = require("@kie-tools-core/envelope-bus/dist/channel");
var TodoListWebview = (function () {
  function TodoListWebview(context, envelopeLocator, apiImpl) {
    this.context = context;
    this.envelopeLocator = envelopeLocator;
    this.apiImpl = apiImpl;
  }
  TodoListWebview.prototype.open = function (pageId, opts) {
    var _this = this;
    var webviewPanel = vscode.window.createWebviewPanel(
      pageId,
      this.envelopeLocator.title,
      vscode_1.ViewColumn.Beside,
      {
        retainContextWhenHidden: true,
        enableCommandUris: true,
        enableScripts: true,
        localResourceRoots: [vscode.Uri.file(this.context.extensionPath)],
      }
    );
    var scriptSrc = webviewPanel.webview
      .asWebviewUri(vscode_1.Uri.file(this.context.asAbsolutePath(this.envelopeLocator.envelopePath)))
      .toString();
    webviewPanel.webview.html =
      '<!DOCTYPE html>\n        <html lang="en">\n        <head>\n          <style>\n            html, body, div#envelope-app {\n                margin: 0;\n                border: 0;\n                padding: 10px;\n            }\n          </style>\n          <meta charset="UTF-8">\n          <meta name="viewport" content="width=device-width, initial-scale=1.0">\n          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n        </head>\n        <body>\n        <div id="envelope-app" />\n        <script src="'.concat(
        scriptSrc,
        '"></script>\n        </body>\n        </html>'
      );
    var envelopeServer = new channel_1.EnvelopeServer(
      {
        postMessage: function (message) {
          return webviewPanel.webview.postMessage(message);
        },
      },
      this.envelopeLocator.targetOrigin,
      function () {
        return envelopeServer.manager.clientApi.requests.todoList__init(
          { origin: envelopeServer.origin, envelopeServerId: envelopeServer.id },
          { user: "Tiago" }
        );
      }
    );
    this.context.subscriptions.push(
      webviewPanel.webview.onDidReceiveMessage(
        function (msg) {
          return envelopeServer.receive(msg, _this.apiImpl);
        },
        webviewPanel.webview,
        this.context.subscriptions
      )
    );
    webviewPanel.onDidDispose(
      function () {
        envelopeServer.stopInitPolling();
        opts.onClose();
      },
      webviewPanel.webview,
      this.context.subscriptions
    );
    envelopeServer.startInitPolling(this.apiImpl);
    return envelopeServer.manager.clientApi;
  };
  return TodoListWebview;
})();
exports.TodoListWebview = TodoListWebview;
//# sourceMappingURL=TodoListWebview.js.map

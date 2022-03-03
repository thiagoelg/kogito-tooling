"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupMessagesNotificationHandler = void 0;
var vscode = require("vscode");
var PopupMessagesNotificationHandler = (function () {
  function PopupMessagesNotificationHandler(workspaceApi, i18n) {
    this.workspaceApi = workspaceApi;
    this.i18n = i18n;
  }
  PopupMessagesNotificationHandler.prototype.kogitoNotifications_createNotification = function (notification) {
    this.getHandleStrategyForSeverity(notification.severity)(notification.message, notification.path);
  };
  PopupMessagesNotificationHandler.prototype.kogitoNotifications_setNotifications = function (path, notifications) {
    if (notifications.length === 0) {
      return;
    }
    var errors = notifications.filter(function (n) {
      return n.severity === "ERROR";
    });
    var others = notifications.filter(function (n) {
      return n.severity !== "ERROR";
    });
    var errorsMessage = this.consolidateMessages(errors);
    var othersMessage = this.consolidateMessages(others);
    this.getHandleStrategyForSeverity("ERROR")(errorsMessage, path);
    this.getHandleStrategyForSeverity("SUCCESS")(othersMessage, path);
  };
  PopupMessagesNotificationHandler.prototype.kogitoNotifications_removeNotifications = function (path) {};
  PopupMessagesNotificationHandler.prototype.getHandleStrategyForSeverity = function (severity) {
    switch (severity) {
      case "ERROR":
        return this.handleStrategy(vscode.window.showErrorMessage);
      case "WARNING":
        return this.handleStrategy(vscode.window.showWarningMessage);
      default:
        return this.handleStrategy(vscode.window.showInformationMessage);
    }
  };
  PopupMessagesNotificationHandler.prototype.handleStrategy = function (showFunction) {
    var _this = this;
    return function (message, path) {
      return path.length === 0
        ? showFunction(message)
        : showFunction(message, _this.i18n.getCurrent().open).then(function (selected) {
            if (!selected) {
              return;
            }
            _this.workspaceApi.kogitoWorkspace_openFile(path);
          });
    };
  };
  PopupMessagesNotificationHandler.prototype.consolidateMessages = function (notifications) {
    var messages = notifications.map(function (n) {
      return n.message;
    });
    if (messages.length > 0) {
      return messages.reduce(function (accum, current) {
        return "".concat(accum, "\n").concat(current);
      });
    } else {
      return "";
    }
  };
  return PopupMessagesNotificationHandler;
})();
exports.PopupMessagesNotificationHandler = PopupMessagesNotificationHandler;
//# sourceMappingURL=PopupMessagesNotificationHandler.js.map

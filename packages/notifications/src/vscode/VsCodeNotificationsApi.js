"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VsCodeNotificationsApi = void 0;
var PopupMessagesNotificationHandler_1 = require("./PopupMessagesNotificationHandler");
var ProblemsTabNotificationHandler_1 = require("./ProblemsTabNotificationHandler");
var core_1 = require("@kie-tools-core/i18n/dist/core");
var vscode = require("vscode");
var i18n_1 = require("./i18n");
var VsCodeNotificationsApi = (function () {
  function VsCodeNotificationsApi(workspaceApi, i18n) {
    if (i18n === void 0) {
      i18n = new core_1.I18n(
        i18n_1.notificationsApiVsCodeI18nDefaults,
        i18n_1.notificationsApiVsCodeI18nDictionaries,
        vscode.env.language
      );
    }
    this.workspaceApi = workspaceApi;
    this.i18n = i18n;
    this.strategies = {
      PROBLEM: new ProblemsTabNotificationHandler_1.ProblemsTabNotificationHandler(),
      ALERT: new PopupMessagesNotificationHandler_1.PopupMessagesNotificationHandler(this.workspaceApi, this.i18n),
    };
  }
  VsCodeNotificationsApi.prototype.kogitoNotifications_createNotification = function (notification) {
    this.handle(notification).kogitoNotifications_createNotification(notification);
  };
  VsCodeNotificationsApi.prototype.kogitoNotifications_setNotifications = function (path, notifications) {
    var alerts = notifications.filter(function (n) {
      return n.type === "ALERT";
    });
    var problems = notifications.filter(function (n) {
      return n.type !== "ALERT";
    });
    this.get("PROBLEM").kogitoNotifications_setNotifications(path, problems);
    this.get("ALERT").kogitoNotifications_setNotifications(path, alerts);
  };
  VsCodeNotificationsApi.prototype.kogitoNotifications_removeNotifications = function (path) {
    this.get("PROBLEM").kogitoNotifications_removeNotifications(path);
  };
  VsCodeNotificationsApi.prototype.handle = function (notification) {
    return this.get(notification.type);
  };
  VsCodeNotificationsApi.prototype.get = function (type) {
    var _a;
    return (_a = this.strategies[type]) !== null && _a !== void 0
      ? _a
      : new ProblemsTabNotificationHandler_1.ProblemsTabNotificationHandler();
  };
  return VsCodeNotificationsApi;
})();
exports.VsCodeNotificationsApi = VsCodeNotificationsApi;
//# sourceMappingURL=VsCodeNotificationsApi.js.map

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemsTabNotificationHandler = void 0;
var vscode = require("vscode");
var DIAGNOSTIC_COLLECTION_NAME = "kogito";
var KOGITO_NOTIFICATION_TO_VS_CODE_DIAGNOSTIC_SEVERITY_CONVERTION_MAP = {
  INFO: vscode.DiagnosticSeverity.Information,
  WARNING: vscode.DiagnosticSeverity.Warning,
  ERROR: vscode.DiagnosticSeverity.Error,
  HINT: vscode.DiagnosticSeverity.Hint,
  SUCCESS: vscode.DiagnosticSeverity.Information,
};
var ProblemsTabNotificationHandler = (function () {
  function ProblemsTabNotificationHandler() {
    this.diagnosticCollection = vscode.languages.createDiagnosticCollection(DIAGNOSTIC_COLLECTION_NAME);
  }
  ProblemsTabNotificationHandler.prototype.kogitoNotifications_createNotification = function (notification) {
    var _a;
    var uri = vscode.Uri.parse(notification.path);
    var diagnostics =
      ((_a = this.diagnosticCollection.get(uri)) === null || _a === void 0
        ? void 0
        : _a.map(function (elem) {
            return elem;
          })) || [];
    diagnostics.push(this.buildDiagnostic(notification));
    this.diagnosticCollection.set(uri, diagnostics);
  };
  ProblemsTabNotificationHandler.prototype.kogitoNotifications_setNotifications = function (path, notifications) {
    var _this = this;
    var uri = vscode.Uri.parse(path);
    var diagnostics = notifications.map(function (notification) {
      return _this.buildDiagnostic(notification);
    });
    this.diagnosticCollection.set(uri, diagnostics);
  };
  ProblemsTabNotificationHandler.prototype.kogitoNotifications_removeNotifications = function (path) {
    this.diagnosticCollection.delete(vscode.Uri.parse(path));
  };
  ProblemsTabNotificationHandler.prototype.buildDiagnostic = function (notification) {
    return {
      message: notification.message,
      range: new vscode.Range(new vscode.Position(0, 0), new vscode.Position(0, 0)),
      severity: this.getSeverity(notification.severity),
    };
  };
  ProblemsTabNotificationHandler.prototype.getSeverity = function (severity) {
    var diagnostic = KOGITO_NOTIFICATION_TO_VS_CODE_DIAGNOSTIC_SEVERITY_CONVERTION_MAP[severity];
    return diagnostic ? vscode.DiagnosticSeverity.Information : diagnostic;
  };
  return ProblemsTabNotificationHandler;
})();
exports.ProblemsTabNotificationHandler = ProblemsTabNotificationHandler;
//# sourceMappingURL=ProblemsTabNotificationHandler.js.map

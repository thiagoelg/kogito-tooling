"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
var vscode = require("vscode");
var KogitoVsCode = require("@kie-tools-core/vscode-extension");
var vscode_1 = require("@kie-tools-core/backend/dist/vscode");
var core_1 = require("@kie-tools-core/i18n/dist/core");
var i18n_1 = require("@kie-tools-core/backend/dist/i18n");
var path = require("path");
var fs = require("fs");
var api_1 = require("@kie-tools-core/editor/dist/api");
var backendProxy;
function activate(context) {
  console.info("Extension is alive.");
  var backendI18n = new core_1.I18n(i18n_1.backendI18nDefaults, i18n_1.backendI18nDictionaries, vscode.env.language);
  backendProxy = new vscode_1.VsCodeBackendProxy(context, backendI18n);
  KogitoVsCode.startExtension({
    extensionName: "kie-tools-examples.base64png-editor-vscode-extension",
    context: context,
    viewType: "kieKogitoWebviewBase64PNGEditor",
    generateSvgCommandId: "extension.kogito.getPreviewSvg",
    silentlyGenerateSvgCommandId: "",
    editorEnvelopeLocator: new api_1.EditorEnvelopeLocator("vscode", [
      new api_1.EnvelopeMapping("base64png", "**/*.base64png", "dist/", "dist/envelope/index.js"),
    ]),
    backendProxy: backendProxy,
  });
  context.subscriptions.push(
    vscode.commands.registerCommand("extension.kogito.createBase64Png", function (file) {
      var buffer = fs.readFileSync(file.fsPath);
      var parsedPath = path.parse(file.fsPath);
      var base64FileName = "".concat(parsedPath.name).concat(parsedPath.ext, ".base64png");
      var base64AbsoluteFilePath = path.join(parsedPath.dir, base64FileName);
      fs.writeFileSync(base64AbsoluteFilePath, buffer.toString("base64"));
      vscode.window.showInformationMessage("Generated the Base64 file with success!", "Open").then(function (selected) {
        if (!selected) {
          return;
        }
        vscode.commands.executeCommand("vscode.open", vscode.Uri.parse(base64AbsoluteFilePath));
      });
    })
  );
  console.info("Extension is successfully setup.");
}
exports.activate = activate;
function deactivate() {
  console.info("Extension is deactivating");
  backendProxy === null || backendProxy === void 0 ? void 0 : backendProxy.stopServices();
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map

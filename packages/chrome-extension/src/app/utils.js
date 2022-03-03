"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractOpenFilePath =
  exports.extractOpenFileExtension =
  exports.openRepoInExternalEditorContainer =
  exports.kogitoMenuContainer =
  exports.iframeFullscreenContainer =
  exports.createAndGetMainContainer =
  exports.mainContainer =
  exports.removeAllChildren =
  exports.runAfterUriChange =
  exports.runScriptOnPage =
    void 0;
var constants_1 = require("./constants");
function runScriptOnPage(scriptString) {
  var scriptTag = document.createElement("script");
  scriptTag.setAttribute("type", "text/javascript");
  scriptTag.innerText = scriptString;
  document.body.appendChild(scriptTag);
  scriptTag.remove();
}
exports.runScriptOnPage = runScriptOnPage;
var lastUri = window.location.pathname;
function runAfterUriChange(logger, callback) {
  var checkUriThenCallback = function () {
    var currentUri = window.location.pathname;
    if (lastUri === currentUri) {
      return;
    }
    logger.log("URI changed from '".concat(lastUri, "' to '").concat(currentUri, "'. Restarting the extension."));
    lastUri = currentUri;
    callback();
  };
  runScriptOnPage(
    "\n  var _wr = function(type) {\n      var orig = history[type];\n      return function() {\n          var rv = orig.apply(this, arguments);\n          var e = new Event(type);\n          e.arguments = arguments;\n          window.dispatchEvent(e);\n          return rv;\n      };\n  };\n  history.replaceState = _wr('replaceState');"
  );
  window.addEventListener("replaceState", function () {
    logger.log("replaceState event happened");
    checkUriThenCallback();
  });
  window.addEventListener("popstate", function () {
    logger.log("popstate event happened");
    checkUriThenCallback();
  });
}
exports.runAfterUriChange = runAfterUriChange;
function removeAllChildren(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
exports.removeAllChildren = removeAllChildren;
function mainContainer(id, container) {
  return container.querySelector(".".concat(constants_1.KOGITO_MAIN_CONTAINER_CLASS, ".").concat(id));
}
exports.mainContainer = mainContainer;
function createAndGetMainContainer(id, container) {
  if (!mainContainer(id, container)) {
    container.insertAdjacentHTML(
      "beforeend",
      '<div class="'.concat(constants_1.KOGITO_MAIN_CONTAINER_CLASS, " ").concat(id, '"></div>')
    );
  }
  return mainContainer(id, container);
}
exports.createAndGetMainContainer = createAndGetMainContainer;
function iframeFullscreenContainer(id, container) {
  var element = function () {
    return document.querySelector(".".concat(constants_1.KOGITO_IFRAME_FULLSCREEN_CONTAINER_CLASS, ".").concat(id));
  };
  if (!element()) {
    container.insertAdjacentHTML(
      "afterbegin",
      '<div class="'
        .concat(constants_1.KOGITO_IFRAME_FULLSCREEN_CONTAINER_CLASS, " ")
        .concat(id, '" class="hidden"></div>')
    );
  }
  return element();
}
exports.iframeFullscreenContainer = iframeFullscreenContainer;
function kogitoMenuContainer(id, container) {
  var element = function () {
    return document.querySelector(".".concat(constants_1.KOGITO_MENU_CONTAINER_CLASS, ".").concat(id));
  };
  if (!element()) {
    container.insertAdjacentHTML(
      "beforebegin",
      '<div class="'.concat(constants_1.KOGITO_MENU_CONTAINER_CLASS, " ").concat(id, ' Header-item"></div>')
    );
  }
  return element();
}
exports.kogitoMenuContainer = kogitoMenuContainer;
function openRepoInExternalEditorContainer(id, container) {
  var element = function () {
    return document.querySelector(
      ".".concat(constants_1.KOGITO_OPEN_REPO_IN_EXTERNAL_EDITOR_CONTAINER_CLASS, ".").concat(id)
    );
  };
  if (!element()) {
    container.insertAdjacentHTML(
      "beforeend",
      '<div class="'.concat(constants_1.KOGITO_OPEN_REPO_IN_EXTERNAL_EDITOR_CONTAINER_CLASS, " ").concat(id, '"></div>')
    );
  }
  return element();
}
exports.openRepoInExternalEditorContainer = openRepoInExternalEditorContainer;
function extractOpenFileExtension(url) {
  var _a, _b;
  return (_b = (_a = url.split(".").pop()) === null || _a === void 0 ? void 0 : _a.match(/[\w\d]+/)) === null ||
    _b === void 0
    ? void 0
    : _b.pop();
}
exports.extractOpenFileExtension = extractOpenFileExtension;
function extractOpenFilePath(url) {
  var _a, _b;
  var lastDotIndex = url.lastIndexOf(".");
  var splittedUrl = url.split(".");
  var fileExtension =
    (_b = (_a = splittedUrl.pop()) === null || _a === void 0 ? void 0 : _a.match(/[\w\d]+/)) === null || _b === void 0
      ? void 0
      : _b.pop();
  var filePathWithoutExtension = url.substring(0, lastDotIndex + 1);
  return (filePathWithoutExtension ? filePathWithoutExtension : "") + (fileExtension ? fileExtension : "");
}
exports.extractOpenFilePath = extractOpenFilePath;
//# sourceMappingURL=utils.js.map

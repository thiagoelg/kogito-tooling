"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var lastUri = window.location.pathname + window.location.search;
function runAfterUriChange(logger, callback) {
  var checkUriThenCallback = function () {
    var currentUri = window.location.pathname + window.location.search;
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
//# sourceMappingURL=utils.js.map

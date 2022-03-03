"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.discoverCurrentPageType = exports.startExtension = void 0;
var ReactDOM = require("react-dom");
require("../resources/style.css");
var ChromeResourceContentService_1 = require("./app/components/common/ChromeResourceContentService");
var renderServerlessWorkflowMenuApp_1 = require("./app/components/ServerlessWorkflowMenu/renderServerlessWorkflowMenuApp");
var Dependencies_1 = require("./app/Dependencies");
var RedHatConsolePageType_1 = require("./app/openshift/RedHatConsolePageType");
var utils_1 = require("./app/utils");
var Logger_1 = require("./Logger");
function startExtension(args) {
  var logger = new Logger_1.Logger(args.name);
  var resourceContentServiceFactory = new ChromeResourceContentService_1.ResourceContentServiceFactory();
  var dependencies = new Dependencies_1.Dependencies();
  var runInit = function () {
    return init({
      id: chrome.runtime.id,
      logger: logger,
      dependencies: dependencies,
      editorEnvelopeLocator: args.editorEnvelopeLocator,
      resourceContentServiceFactory: resourceContentServiceFactory,
      imageUris: args.imageUris,
    });
  };
  (0, utils_1.runAfterUriChange)(logger, function () {
    return setTimeout(runInit, 0);
  });
  setTimeout(runInit, 0);
}
exports.startExtension = startExtension;
function init(globals) {
  globals.logger.log("---");
  globals.logger.log("Starting Chrome Extension.");
  unmountPreviouslyRenderedFeatures(globals.id, globals.logger, globals.dependencies);
  var pageType = discoverCurrentPageType();
  if (pageType === RedHatConsolePageType_1.RedHatConsolePageType.ANY) {
    globals.logger.log("This page is not supported: ".concat(window.location.toString()));
    return;
  }
  if (pageType === RedHatConsolePageType_1.RedHatConsolePageType.APPLICATION_SERVICES) {
    (0, renderServerlessWorkflowMenuApp_1.renderServerlessWorkflowMenuApp)(__assign({}, globals));
    return;
  }
  throw new Error("Unknown OpenShiftPageType ".concat(pageType));
}
function unmountPreviouslyRenderedFeatures(id, logger, dependencies) {
  try {
    if ((0, utils_1.mainContainer)(id, dependencies.all.body())) {
      ReactDOM.unmountComponentAtNode((0, utils_1.mainContainer)(id, dependencies.all.body()));
      logger.log("Unmounted previous features.");
    }
  } catch (e) {
    logger.log("Ignoring exception while unmounting features.");
  }
}
function pathnameMatches(regex) {
  return !!window.location.pathname.match(new RegExp(regex));
}
function searchMatches(regex) {
  return !!window.location.search.match(new RegExp(regex));
}
function discoverCurrentPageType() {
  if (pathnameMatches("/application-services/*")) {
    return RedHatConsolePageType_1.RedHatConsolePageType.APPLICATION_SERVICES;
  }
  return RedHatConsolePageType_1.RedHatConsolePageType.ANY;
}
exports.discoverCurrentPageType = discoverCurrentPageType;
//# sourceMappingURL=index.js.map

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
exports.renderSingleEditorApp = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ReactDOM = require("react-dom");
var utils_1 = require("../../utils");
var SingleEditorApp_1 = require("./SingleEditorApp");
var Main_1 = require("../common/Main");
var constants_1 = require("../../constants");
var GlobalContext_1 = require("../common/GlobalContext");
function renderSingleEditorApp(args) {
  if (!args.dependencies.singleEdit.githubTextEditorToReplaceElement()) {
    args.logger.log("Doesn't look like the GitHub page is ready yet.");
    return;
  }
  var openFileExtension = (0, utils_1.extractOpenFileExtension)(window.location.href);
  var openFilePath = (0, utils_1.extractOpenFilePath)(window.location.href);
  if (!openFileExtension) {
    args.logger.log("Unable to determine file extension from URL.");
    return;
  }
  if (!args.editorEnvelopeLocator.hasMappingFor(openFilePath)) {
    args.logger.log('No enhanced editor available for "'.concat(openFilePath, '" format.'));
    return;
  }
  cleanup(args.id, args.dependencies);
  ReactDOM.render(
    (0, jsx_runtime_1.jsx)(
      Main_1.Main,
      __assign(
        {
          id: args.id,
          editorEnvelopeLocator: args.editorEnvelopeLocator,
          dependencies: args.dependencies,
          logger: args.logger,
          githubAuthTokenCookieName: args.githubAuthTokenCookieName,
          extensionIconUrl: args.extensionIconUrl,
          resourceContentServiceFactory: args.resourceContentServiceFactory,
          externalEditorManager: args.externalEditorManager,
        },
        {
          children: (0, jsx_runtime_1.jsx)(
            SingleEditorEditApp,
            { openFileExtension: openFileExtension, fileInfo: args.fileInfo },
            void 0
          ),
        }
      ),
      void 0
    ),
    (0, utils_1.createAndGetMainContainer)(args.id, args.dependencies.all.body()),
    function () {
      return args.logger.log("Mounted.");
    }
  );
}
exports.renderSingleEditorApp = renderSingleEditorApp;
function SingleEditorEditApp(props) {
  var globals = (0, GlobalContext_1.useGlobals)();
  var getFileName = (0, react_1.useCallback)(
    function () {
      return globals.dependencies.all.edit__githubFileNameInput().value;
    },
    [globals.dependencies]
  );
  var getFileContents = (0, react_1.useCallback)(
    function () {
      return Promise.resolve(globals.dependencies.all.edit__githubTextAreaWithFileContents().value);
    },
    [globals.dependencies]
  );
  return (0, jsx_runtime_1.jsx)(
    SingleEditorApp_1.SingleEditorApp,
    {
      readonly: false,
      openFileExtension: props.openFileExtension,
      getFileName: getFileName,
      getFileContents: getFileContents,
      iframeContainer: iframeContainer(globals.id, globals.dependencies),
      toolbarContainer: toolbarContainer(globals.id, globals.dependencies),
      githubTextEditorToReplace: globals.dependencies.singleEdit.githubTextEditorToReplaceElement(),
      fileInfo: props.fileInfo,
    },
    void 0
  );
}
function cleanup(id, dependencies) {
  (0, utils_1.removeAllChildren)(iframeContainer(id, dependencies));
  (0, utils_1.removeAllChildren)(toolbarContainer(id, dependencies));
  (0, utils_1.removeAllChildren)((0, utils_1.iframeFullscreenContainer)(id, dependencies.all.body()));
  (0, utils_1.removeAllChildren)((0, utils_1.createAndGetMainContainer)(id, dependencies.all.body()));
}
function toolbarContainer(id, dependencies) {
  var element = function () {
    return document.querySelector(".".concat(constants_1.KOGITO_TOOLBAR_CONTAINER_CLASS, ".").concat(id));
  };
  if (!element()) {
    dependencies.singleEdit
      .toolbarContainerTarget()
      .insertAdjacentHTML(
        "beforeend",
        '<div style="width:100%; padding-top: 20px;" class="'
          .concat(constants_1.KOGITO_TOOLBAR_CONTAINER_CLASS, " ")
          .concat(id, ' edit d-flex flex-column flex-items-start flex-md-row"></div>')
      );
  }
  return element();
}
function iframeContainer(id, dependencies) {
  var element = function () {
    return document.querySelector(".".concat(constants_1.KOGITO_IFRAME_CONTAINER_CLASS, ".").concat(id));
  };
  if (!element()) {
    dependencies.singleEdit
      .iframeContainerTarget()
      .insertAdjacentHTML(
        "afterend",
        '<div class="'.concat(constants_1.KOGITO_IFRAME_CONTAINER_CLASS, " ").concat(id, ' edit"></div>')
      );
  }
  return element();
}
//# sourceMappingURL=singleEditorEdit.js.map

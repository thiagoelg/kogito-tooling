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
exports.renderServerlessWorkflowMenuApp = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ReactDOM = require("react-dom");
var utils_1 = require("../../utils");
var Main_1 = require("../common/Main");
var ServerlessWorkflowMenuApp_1 = require("./ServerlessWorkflowMenuApp");
function renderServerlessWorkflowMenuApp(args) {
  ReactDOM.render(
    (0, jsx_runtime_1.jsx)(
      Main_1.Main,
      __assign(
        {
          id: args.id,
          editorEnvelopeLocator: args.editorEnvelopeLocator,
          dependencies: args.dependencies,
          logger: args.logger,
          resourceContentServiceFactory: args.resourceContentServiceFactory,
          imageUris: args.imageUris,
        },
        {
          children: (0, jsx_runtime_1.jsx)(
            ServerlessWorkflowMenuApp_1.ServerlessWorkflowMenuApp,
            { id: args.id },
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
exports.renderServerlessWorkflowMenuApp = renderServerlessWorkflowMenuApp;
//# sourceMappingURL=renderServerlessWorkflowMenuApp.js.map

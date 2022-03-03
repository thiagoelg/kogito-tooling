"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsolatedEditor = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var KogitoEditorIframe_1 = require("./KogitoEditorIframe");
var GitHubContext_1 = require("./GitHubContext");
var RefForwardingIsolatedEditor = function (props, forwardedRef) {
  var shouldRenderIframe = (props.keepRenderedEditorInTextMode && props.textMode) || !props.textMode;
  var githubApi = (0, GitHubContext_1.useGitHubApi)();
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children:
        shouldRenderIframe &&
        (0, jsx_runtime_1.jsx)(
          KogitoEditorIframe_1.KogitoEditorIframe,
          {
            ref: forwardedRef,
            contentPath: props.contentPath,
            openFileExtension: props.openFileExtension,
            getFileContents: props.getFileContents,
            readonly: props.readonly,
            onSetContentError: props.onSetContentError,
          },
          githubApi.token
        ),
    },
    void 0
  );
};
exports.IsolatedEditor = React.forwardRef(RefForwardingIsolatedEditor);
//# sourceMappingURL=IsolatedEditor.js.map

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
exports.KogitoEditorIframe = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var embedded_1 = require("@kie-tools-core/editor/dist/embedded");
var api_1 = require("@kie-tools-core/editor/dist/api");
var React = require("react");
var react_1 = require("react");
var utils_1 = require("../../utils");
var GitHubContext_1 = require("./GitHubContext");
var GlobalContext_1 = require("./GlobalContext");
var IsolatedEditorContext_1 = require("./IsolatedEditorContext");
var i18n_1 = require("../../i18n");
var GITHUB_CODEMIRROR_EDITOR_SELECTOR = ".file-editor-textarea + .CodeMirror";
var RefForwardingKogitoEditorIframe = function (props, forwardedRef) {
  var githubApi = (0, GitHubContext_1.useGitHubApi)();
  var _a = (0, embedded_1.useEditorRef)(),
    editor = _a.editor,
    editorRef = _a.editorRef;
  var _b = (0, GlobalContext_1.useGlobals)(),
    envelopeLocator = _b.envelopeLocator,
    resourceContentServiceFactory = _b.resourceContentServiceFactory;
  var _c = (0, react_1.useContext)(IsolatedEditorContext_1.IsolatedEditorContext),
    repoInfo = _c.repoInfo,
    textMode = _c.textMode,
    fullscreen = _c.fullscreen,
    onEditorReady = _c.onEditorReady;
  var locale = (0, i18n_1.useChromeExtensionI18n)().locale;
  var wasOnTextMode = usePrevious(textMode);
  var resourceContentService = (0, react_1.useMemo)(
    function () {
      return resourceContentServiceFactory.createNew(githubApi.octokit(), repoInfo);
    },
    [repoInfo]
  );
  var onResourceContentRequest = (0, react_1.useCallback)(
    function (request) {
      return resourceContentService.get(request.path, request.opts);
    },
    [resourceContentService]
  );
  var onResourceContentList = (0, react_1.useCallback)(
    function (request) {
      return resourceContentService.list(request.pattern, request.opts);
    },
    [resourceContentService]
  );
  var file = (0, react_1.useMemo)(
    function () {
      return {
        fileName: props.contentPath,
        fileExtension: props.openFileExtension,
        getFileContents: props.getFileContents,
        isReadOnly: props.readonly,
      };
    },
    [props.contentPath, props.openFileExtension, props.getFileContents, props.readonly]
  );
  (0, react_1.useEffect)(
    function () {
      if (!textMode && wasOnTextMode) {
        props.getFileContents().then(function (content) {
          return editor === null || editor === void 0
            ? void 0
            : editor.setContent(props.contentPath, content !== null && content !== void 0 ? content : "");
        });
      }
    },
    [textMode, wasOnTextMode, editor]
  );
  (0, react_1.useEffect)(
    function () {
      if (props.readonly || textMode || !editor) {
        return;
      }
      var stateControlSubscription = editor.getStateControl().subscribe(function () {
        editor.getContent().then(function (content) {
          (0,
          utils_1.runScriptOnPage)('document.querySelector("'.concat(GITHUB_CODEMIRROR_EDITOR_SELECTOR, "\")\n            .CodeMirror\n            .setValue('").concat(content.split("\n").join("\\n"), "')"));
        });
      });
      return function () {
        return editor.getStateControl().unsubscribe(stateControlSubscription);
      };
    },
    [textMode, editor]
  );
  (0, react_1.useImperativeHandle)(
    forwardedRef,
    function () {
      if (!editor) {
        return undefined;
      }
      return {
        setContent: function (content) {
          return editor.setContent(props.contentPath, content);
        },
      };
    },
    [editor]
  );
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children: (0, jsx_runtime_1.jsx)(
        "div",
        __assign(
          { className: "kogito-iframe ".concat(fullscreen ? "fullscreen" : "not-fullscreen") },
          {
            children: (0, jsx_runtime_1.jsx)(
              embedded_1.EmbeddedEditor,
              {
                ref: editorRef,
                file: file,
                channelType: api_1.ChannelType.GITHUB,
                kogitoEditor_ready: onEditorReady,
                kogitoWorkspace_resourceContentRequest: onResourceContentRequest,
                kogitoWorkspace_resourceListRequest: onResourceContentList,
                kogitoEditor_setContentError: props.onSetContentError,
                editorEnvelopeLocator: envelopeLocator,
                locale: locale,
              },
              void 0
            ),
          }
        ),
        void 0
      ),
    },
    void 0
  );
};
exports.KogitoEditorIframe = React.forwardRef(RefForwardingKogitoEditorIframe);
function usePrevious(value) {
  var ref = React.useRef();
  (0, react_1.useEffect)(
    function () {
      ref.current = value;
    },
    [value]
  );
  return ref.current;
}
//# sourceMappingURL=KogitoEditorIframe.js.map

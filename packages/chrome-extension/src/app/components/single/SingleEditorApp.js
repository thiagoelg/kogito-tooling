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
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleEditorApp = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ReactDOM = require("react-dom");
var FullScreenToolbar_1 = require("./FullScreenToolbar");
var SingleEditorToolbar_1 = require("./SingleEditorToolbar");
var customEffects_1 = require("../common/customEffects");
var IsolatedEditorContext_1 = require("../common/IsolatedEditorContext");
var utils_1 = require("../../utils");
var IsolatedEditor_1 = require("../common/IsolatedEditor");
var GlobalContext_1 = require("../common/GlobalContext");
var IsolatedEditorRef_1 = require("../common/IsolatedEditorRef");
function useFullScreenEditorTogglingEffect(fullscreen) {
  var globals = (0, GlobalContext_1.useGlobals)();
  (0, react_1.useLayoutEffect)(
    function () {
      if (!fullscreen) {
        (0, utils_1.iframeFullscreenContainer)(globals.id, globals.dependencies.all.body()).classList.add("hidden");
      } else {
        (0, utils_1.iframeFullscreenContainer)(globals.id, globals.dependencies.all.body()).classList.remove("hidden");
      }
    },
    [fullscreen]
  );
}
function SingleEditorApp(props) {
  var _a = __read((0, react_1.useState)(false), 2),
    textMode = _a[0],
    setTextMode = _a[1];
  var _b = __read((0, react_1.useState)(false), 2),
    errorOpeningFile = _b[0],
    setErrorOpeningFile = _b[1];
  var _c = __read((0, react_1.useState)(false), 2),
    textModeAvailable = _c[0],
    setTextModeAvailable = _c[1];
  var _d = __read((0, react_1.useState)(false), 2),
    fullscreen = _d[0],
    setFullscreen = _d[1];
  var globals = (0, GlobalContext_1.useGlobals)();
  var _e = (0, IsolatedEditorRef_1.useIsolatedEditorRef)(),
    isolatedEditor = _e.isolatedEditor,
    isolatedEditorRef = _e.isolatedEditorRef;
  useFullScreenEditorTogglingEffect(fullscreen);
  (0, customEffects_1.useIsolatedEditorTogglingEffect)(
    textMode,
    props.iframeContainer,
    props.githubTextEditorToReplace
  );
  var onSetContentError = (0, react_1.useCallback)(function () {
    setErrorOpeningFile(true);
  }, []);
  var IsolatedEditorComponent = (0, react_1.useMemo)(
    function () {
      return (0, jsx_runtime_1.jsx)(
        IsolatedEditor_1.IsolatedEditor,
        {
          ref: isolatedEditorRef,
          getFileContents: props.getFileContents,
          contentPath: props.fileInfo.path,
          openFileExtension: props.openFileExtension,
          textMode: textMode,
          readonly: props.readonly,
          keepRenderedEditorInTextMode: true,
          onSetContentError: onSetContentError,
        },
        void 0
      );
    },
    [textMode, onSetContentError]
  );
  var exitFullScreen = (0, react_1.useCallback)(function () {
    setFullscreen(false);
    setTextModeAvailable(false);
  }, []);
  var deactivateTextMode = (0, react_1.useCallback)(
    function () {
      setTextMode(false);
      setErrorOpeningFile(function (prev) {
        return props.readonly ? prev : false;
      });
    },
    [props.readonly]
  );
  var activateTextMode = (0, react_1.useCallback)(function () {
    setTextMode(true);
  }, []);
  var goFullScreen = (0, react_1.useCallback)(function () {
    setFullscreen(true);
  }, []);
  var getFileContents = props.getFileContents,
    getFileName = props.getFileName;
  var openExternalEditor = (0, react_1.useMemo)(
    function () {
      var _a;
      return (
        ((_a = globals.externalEditorManager) === null || _a === void 0 ? void 0 : _a.open) &&
        function () {
          getFileContents().then(function (fileContent) {
            var _a, _b;
            (_b = (_a = globals.externalEditorManager) === null || _a === void 0 ? void 0 : _a.open) === null ||
            _b === void 0
              ? void 0
              : _b.call(_a, getFileName(), fileContent, props.readonly);
          });
        }
      );
    },
    [globals.externalEditorManager, getFileContents, getFileName, props.readonly]
  );
  var linkToExternalEditor = (0, react_1.useMemo)(
    function () {
      var _a, _b;
      return (_b = (_a = globals.externalEditorManager) === null || _a === void 0 ? void 0 : _a.getLink) === null ||
        _b === void 0
        ? void 0
        : _b.call(
            _a,
            ""
              .concat(props.fileInfo.org, "/")
              .concat(props.fileInfo.repo, "/")
              .concat(props.fileInfo.gitRef, "/")
              .concat(props.fileInfo.path)
          );
    },
    [globals.externalEditorManager, props.fileInfo]
  );
  var onEditorReady = (0, react_1.useCallback)(function () {
    setTextModeAvailable(true);
  }, []);
  var repoInfo = (0, react_1.useMemo)(function () {
    return {
      gitref: props.fileInfo.gitRef,
      owner: props.fileInfo.org,
      repo: props.fileInfo.repo,
    };
  }, []);
  return (0, jsx_runtime_1.jsx)(
    jsx_runtime_1.Fragment,
    {
      children: (0, jsx_runtime_1.jsxs)(
        IsolatedEditorContext_1.IsolatedEditorContext.Provider,
        __assign(
          {
            value: {
              onEditorReady: onEditorReady,
              fullscreen: fullscreen,
              textMode: textMode,
              repoInfo: repoInfo,
            },
          },
          {
            children: [
              !fullscreen &&
                (0, jsx_runtime_1.jsxs)(
                  jsx_runtime_1.Fragment,
                  {
                    children: [
                      ReactDOM.createPortal(IsolatedEditorComponent, props.iframeContainer),
                      ReactDOM.createPortal(
                        (0, jsx_runtime_1.jsx)(
                          SingleEditorToolbar_1.SingleEditorToolbar,
                          {
                            textMode: textMode,
                            textModeAvailable: textModeAvailable,
                            onSeeAsDiagram: deactivateTextMode,
                            onSeeAsSource: activateTextMode,
                            onOpenInExternalEditor: openExternalEditor,
                            linkToExternalEditor: linkToExternalEditor,
                            onFullScreen: goFullScreen,
                            readonly: props.readonly,
                            errorOpeningFile: errorOpeningFile,
                          },
                          void 0
                        ),
                        props.toolbarContainer
                      ),
                    ],
                  },
                  void 0
                ),
              fullscreen &&
                (0, jsx_runtime_1.jsxs)(
                  jsx_runtime_1.Fragment,
                  {
                    children: [
                      ReactDOM.createPortal(
                        (0, jsx_runtime_1.jsx)(
                          FullScreenToolbar_1.FullScreenToolbar,
                          { onExitFullScreen: exitFullScreen },
                          void 0
                        ),
                        (0, utils_1.iframeFullscreenContainer)(globals.id, globals.dependencies.all.body())
                      ),
                      ReactDOM.createPortal(
                        IsolatedEditorComponent,
                        (0, utils_1.iframeFullscreenContainer)(globals.id, globals.dependencies.all.body())
                      ),
                    ],
                  },
                  void 0
                ),
            ],
          }
        ),
        void 0
      ),
    },
    void 0
  );
}
exports.SingleEditorApp = SingleEditorApp;
//# sourceMappingURL=SingleEditorApp.js.map

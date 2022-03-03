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
exports.EmbeddedEditor = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var channel_1 = require("@kie-tools-core/keyboard-shortcuts/dist/channel");
var channel_2 = require("@kie-tools-core/guided-tour/dist/channel");
var React = require("react");
var react_1 = require("react");
var channel_3 = require("../../channel");
var common_1 = require("../common");
var KogitoEditorChannelApiImpl_1 = require("./KogitoEditorChannelApiImpl");
var channel_4 = require("@kie-tools-core/envelope-bus/dist/channel");
var hooks_1 = require("@kie-tools-core/envelope-bus/dist/hooks");
var containerStyles = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  width: "100%",
  height: "100%",
  border: "none",
  margin: 0,
  padding: 0,
  overflow: "hidden",
};
var RefForwardingEmbeddedEditor = function (props, forwardedRef) {
  var iframeRef = (0, react_1.useRef)(null);
  var stateControl = (0, react_1.useMemo)(
    function () {
      return new channel_3.StateControl();
    },
    [props.file.getFileContents]
  );
  var _a = __read((0, react_1.useState)(false), 2),
    isReady = _a[0],
    setReady = _a[1];
  var envelopeMapping = (0, react_1.useMemo)(
    function () {
      return props.editorEnvelopeLocator.getEnvelopeMapping(props.file.fileName + "." + props.file.fileExtension);
    },
    [props.editorEnvelopeLocator, props.file]
  );
  var kogitoEditorChannelApiImpl = (0, react_1.useMemo)(
    function () {
      return new KogitoEditorChannelApiImpl_1.KogitoEditorChannelApiImpl(
        stateControl,
        props.file,
        props.locale,
        __assign(__assign({}, props), {
          kogitoEditor_ready: function () {
            var _a;
            setReady(true);
            (_a = props.kogitoEditor_ready) === null || _a === void 0 ? void 0 : _a.call(props);
          },
        })
      );
    },
    [stateControl, props]
  );
  var envelopeServer = (0, react_1.useMemo)(
    function () {
      return new channel_4.EnvelopeServer(
        {
          postMessage: function (message) {
            var _a, _b;
            return (_b = (_a = iframeRef.current) === null || _a === void 0 ? void 0 : _a.contentWindow) === null ||
              _b === void 0
              ? void 0
              : _b.postMessage(message, "*");
          },
        },
        props.editorEnvelopeLocator.targetOrigin,
        function (self) {
          var _a;
          return self.envelopeApi.requests.kogitoEditor_initRequest(
            { origin: self.origin, envelopeServerId: self.id },
            {
              fileExtension: props.file.fileExtension,
              resourcesPathPrefix:
                (_a =
                  envelopeMapping === null || envelopeMapping === void 0
                    ? void 0
                    : envelopeMapping.resourcesPathPrefix) !== null && _a !== void 0
                  ? _a
                  : "",
              initialLocale: props.locale,
              isReadOnly: props.file.isReadOnly,
              channel: props.channelType,
            }
          );
        }
      );
    },
    [
      props.editorEnvelopeLocator.targetOrigin,
      props.file.fileExtension,
      props.file.isReadOnly,
      props.locale,
      props.channelType,
      envelopeMapping === null || envelopeMapping === void 0 ? void 0 : envelopeMapping.resourcesPathPrefix,
    ]
  );
  (0, hooks_1.useConnectedEnvelopeServer)(envelopeServer, kogitoEditorChannelApiImpl);
  (0, common_1.useEffectAfterFirstRender)(
    function () {
      envelopeServer.envelopeApi.notifications.kogitoI18n_localeChange.send(props.locale);
    },
    [props.locale]
  );
  (0, common_1.useEffectAfterFirstRender)(
    function () {
      props.file.getFileContents().then(function (content) {
        envelopeServer.envelopeApi.requests.kogitoEditor_contentChanged({ content: content });
      });
    },
    [props.file.getFileContents]
  );
  (0, channel_2.useGuidedTourPositionProvider)(envelopeServer.envelopeApi, iframeRef);
  (0, channel_1.useSyncedKeyboardEvents)(envelopeServer.envelopeApi);
  (0, react_1.useImperativeHandle)(
    forwardedRef,
    function () {
      if (!iframeRef.current) {
        return undefined;
      }
      return {
        iframeRef: iframeRef,
        isReady: isReady,
        getStateControl: function () {
          return stateControl;
        },
        getEnvelopeServer: function () {
          return envelopeServer;
        },
        getElementPosition: function (s) {
          return envelopeServer.envelopeApi.requests.kogitoGuidedTour_guidedTourElementPositionRequest(s);
        },
        undo: function () {
          return Promise.resolve(envelopeServer.envelopeApi.notifications.kogitoEditor_editorUndo.send());
        },
        redo: function () {
          return Promise.resolve(envelopeServer.envelopeApi.notifications.kogitoEditor_editorRedo.send());
        },
        getContent: function () {
          return envelopeServer.envelopeApi.requests.kogitoEditor_contentRequest().then(function (c) {
            return c.content;
          });
        },
        getPreview: function () {
          return envelopeServer.envelopeApi.requests.kogitoEditor_previewRequest();
        },
        setContent: function (path, content) {
          return envelopeServer.envelopeApi.requests.kogitoEditor_contentChanged({ path: path, content: content });
        },
        validate: function () {
          return envelopeServer.envelopeApi.requests.kogitoEditor_validate();
        },
      };
    },
    [envelopeServer, stateControl, isReady]
  );
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        !envelopeMapping &&
          (0, jsx_runtime_1.jsx)(
            jsx_runtime_1.Fragment,
            {
              children: (0, jsx_runtime_1.jsx)(
                "span",
                { children: "No Editor available for '".concat(props.file.fileExtension, "' extension") },
                void 0
              ),
            },
            void 0
          ),
        envelopeMapping &&
          (0, jsx_runtime_1.jsx)(
            "iframe",
            {
              ref: iframeRef,
              id: "kogito-iframe",
              "data-testid": "kogito-iframe",
              src: envelopeMapping.envelopePath,
              title: "Kogito editor",
              style: containerStyles,
              "data-envelope-channel": props.channelType,
            },
            envelopeMapping.envelopePath
          ),
      ],
    },
    void 0
  );
};
exports.EmbeddedEditor = React.forwardRef(RefForwardingEmbeddedEditor);
//# sourceMappingURL=EmbeddedEditor.js.map

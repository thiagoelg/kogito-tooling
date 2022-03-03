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
exports.open = void 0;
var dmnEnvelopeIndex_html_1 = require("!!raw-loader!../../dist/resources/dmn/dmnEnvelopeIndex.html");
var channel_1 = require("@kie-tools-core/envelope-bus/dist/channel");
var api_1 = require("@kie-tools-core/editor/dist/api");
var KogitoEditorChannelApiImpl_1 = require("../envelope/KogitoEditorChannelApiImpl");
var channel_2 = require("@kie-tools-core/editor/dist/channel");
var Editor_1 = require("../common/Editor");
var createEnvelopeServer = function (iframe, readOnly, origin) {
  var defaultOrigin = window.location.protocol === "file:" ? "*" : window.location.origin;
  return new channel_1.EnvelopeServer(
    {
      postMessage: function (message) {
        var _a;
        return (_a = iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage(message, "*");
      },
    },
    origin !== null && origin !== void 0 ? origin : defaultOrigin,
    function (self) {
      return self.envelopeApi.requests.kogitoEditor_initRequest(
        {
          origin: self.origin,
          envelopeServerId: self.id,
        },
        {
          resourcesPathPrefix: "",
          fileExtension: "dmn",
          initialLocale: "en-US",
          isReadOnly: readOnly !== null && readOnly !== void 0 ? readOnly : true,
          channel: api_1.ChannelType.EMBEDDED,
        }
      );
    }
  );
};
function open(args) {
  var _a;
  var iframe = document.createElement("iframe");
  iframe.srcdoc = dmnEnvelopeIndex_html_1.default;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  var envelopeServer = createEnvelopeServer(iframe, args.readOnly, args.origin);
  var stateControl = new channel_2.StateControl();
  var receivedSetContentError = false;
  var channelApiImpl = new KogitoEditorChannelApiImpl_1.KogitoEditorChannelApiImpl(
    stateControl,
    {
      fileName: "",
      fileExtension: "dmn",
      getFileContents: function () {
        return Promise.resolve(args.initialContent);
      },
      isReadOnly: (_a = args.readOnly) !== null && _a !== void 0 ? _a : false,
    },
    "en-US",
    {
      kogitoEditor_setContentError: function () {
        var _a;
        if (!receivedSetContentError) {
          (_a = args.onError) === null || _a === void 0 ? void 0 : _a.call(args);
          receivedSetContentError = true;
        }
      },
    },
    args.resources
  );
  var listener = function (message) {
    envelopeServer.receive(message.data, channelApiImpl);
  };
  window.addEventListener("message", listener);
  args.container.appendChild(iframe);
  envelopeServer.startInitPolling(channelApiImpl);
  var editor = (0, Editor_1.createEditor)(envelopeServer.envelopeApi, stateControl, listener, iframe);
  return __assign(__assign({}, editor), {
    canvas: {
      getNodeIds: function () {
        return envelopeServer.envelopeApi.requests.canvas_getNodeIds();
      },
      getBackgroundColor: function (uuid) {
        return envelopeServer.envelopeApi.requests.canvas_getBackgroundColor(uuid);
      },
      setBackgroundColor: function (uuid, backgroundColor) {
        return envelopeServer.envelopeApi.requests.canvas_setBackgroundColor(uuid, backgroundColor);
      },
      getBorderColor: function (uuid) {
        return envelopeServer.envelopeApi.requests.canvas_getBorderColor(uuid);
      },
      setBorderColor: function (uuid, backgroundColor) {
        return envelopeServer.envelopeApi.requests.canvas_setBorderColor(uuid, backgroundColor);
      },
      getLocation: function (uuid) {
        return envelopeServer.envelopeApi.requests.canvas_getLocation(uuid);
      },
      getAbsoluteLocation: function (uuid) {
        return envelopeServer.envelopeApi.requests.canvas_getAbsoluteLocation(uuid);
      },
      getDimensions: function (uuid) {
        return envelopeServer.envelopeApi.requests.canvas_getDimensions(uuid);
      },
      applyState: function (uuid, state) {
        return envelopeServer.envelopeApi.requests.canvas_applyState(uuid, state);
      },
      centerNode: function (uuid) {
        return envelopeServer.envelopeApi.requests.canvas_centerNode(uuid);
      },
    },
  });
}
exports.open = open;
window.DmnEditor = { open: open };
//# sourceMappingURL=index.js.map

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbeddedEnvelope = exports.RefForwardingEmbeddedEnvelope = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var channel_1 = require("@kie-tools-core/envelope-bus/dist/channel");
var React = require("react");
var react_1 = require("react");
var hooks_1 = require("@kie-tools-core/envelope-bus/dist/hooks");
var api_1 = require("../api");
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
function RefForwardingEmbeddedEnvelope(props, forwardRef) {
  var iframeRef = (0, react_1.useRef)(null);
  var divRef = (0, react_1.useRef)(null);
  var bus = (0, react_1.useMemo)(
    function () {
      return {
        postMessage: function (message) {
          var _a, _b;
          if (props.config.containerType === api_1.ContainerType.DIV) {
            window.postMessage(message, "*");
          } else {
            (_b = (_a = iframeRef.current) === null || _a === void 0 ? void 0 : _a.contentWindow) === null ||
            _b === void 0
              ? void 0
              : _b.postMessage(message, "*");
          }
        },
      };
    },
    [props.config.containerType]
  );
  var envelopeServer = (0, react_1.useMemo)(
    function () {
      return new channel_1.EnvelopeServer(
        bus,
        props.origin,
        function (self) {
          return props.pollInit(self, function () {
            return props.config.containerType === api_1.ContainerType.DIV ? divRef.current : iframeRef.current;
          });
        },
        props.config.containerType === api_1.ContainerType.DIV
          ? channel_1.EnvelopeServerType.LOCAL
          : channel_1.EnvelopeServerType.REMOTE
      );
    },
    [bus, props.origin, props.pollInit, props.config.containerType]
  );
  (0, react_1.useImperativeHandle)(
    forwardRef,
    function () {
      return props.refDelegate(envelopeServer);
    },
    [envelopeServer, props.refDelegate]
  );
  (0, hooks_1.useConnectedEnvelopeServer)(envelopeServer, props.apiImpl);
  if (props.config.containerType === api_1.ContainerType.DIV) {
    return (0, jsx_runtime_1.jsx)("div", { ref: divRef }, void 0);
  }
  return (0, jsx_runtime_1.jsx)(
    "iframe",
    { ref: iframeRef, src: props.config.envelopePath, style: containerStyles, title: "X" },
    void 0
  );
}
exports.RefForwardingEmbeddedEnvelope = RefForwardingEmbeddedEnvelope;
exports.EmbeddedEnvelope = React.forwardRef(RefForwardingEmbeddedEnvelope);
//# sourceMappingURL=EmbeddedEnvelopeFactory.js.map

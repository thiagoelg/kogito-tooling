"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbeddedIFramePingPong = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var react_1 = require("react");
var embedded_1 = require("@kie-tools-core/envelope/dist/embedded");
var api_1 = require("@kie-tools-core/envelope/dist/api");
exports.EmbeddedIFramePingPong = React.forwardRef(function (props, forwardedRef) {
  var refDelegate = (0, react_1.useCallback)(function (envelopeServer) {
    return {
      clearLogs: function () {
        return envelopeServer.envelopeApi.requests.pingPongView__clearLogs();
      },
      getLastPingTimestamp: function () {
        return envelopeServer.envelopeApi.requests.pingPongView__getLastPingTimestamp();
      },
    };
  }, []);
  var pollInit = (0, react_1.useCallback)(
    function (envelopeServer, container) {
      return envelopeServer.envelopeApi.requests.pingPongView__init(
        { origin: envelopeServer.origin, envelopeServerId: envelopeServer.id },
        { name: props.name }
      );
    },
    [props.name]
  );
  var config = (0, react_1.useMemo)(
    function () {
      return {
        containerType: api_1.ContainerType.IFRAME,
        envelopePath: props.envelopePath,
      };
    },
    [props.envelopePath]
  );
  return (0,
  jsx_runtime_1.jsx)(EmbeddedIframePingPongEnvelope, { ref: forwardedRef, apiImpl: props.apiImpl, origin: props.targetOrigin, refDelegate: refDelegate, pollInit: pollInit, config: config }, void 0);
});
var EmbeddedIframePingPongEnvelope = React.forwardRef(embedded_1.RefForwardingEmbeddedEnvelope);
//# sourceMappingURL=EmbeddedIFramePingPong.js.map

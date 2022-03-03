"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbeddedTodoList = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var react_1 = require("react");
var api_1 = require("@kie-tools-core/envelope/dist/api");
var embedded_1 = require("@kie-tools-core/envelope/dist/embedded");
exports.EmbeddedTodoList = React.forwardRef(function (props, forwardedRef) {
  var pollInit = (0, react_1.useCallback)(function (envelopeServer, container) {
    return envelopeServer.envelopeApi.requests.todoList__init(
      {
        origin: envelopeServer.origin,
        envelopeServerId: envelopeServer.id,
      },
      { user: "Tiago" }
    );
  }, []);
  var refDelegate = (0, react_1.useCallback)(function (envelopeServer) {
    return {
      envelopeServer: envelopeServer,
      addItem: function (item) {
        return envelopeServer.envelopeApi.requests.todoList__addItem(item);
      },
      getItems: function () {
        return envelopeServer.envelopeApi.requests.todoList__getItems();
      },
      markAllAsCompleted: function () {
        return envelopeServer.envelopeApi.notifications.todoList__markAllAsCompleted.send();
      },
    };
  }, []);
  var config = (0, react_1.useMemo)(
    function () {
      return { containerType: api_1.ContainerType.IFRAME, envelopePath: props.envelopePath };
    },
    [props.envelopePath]
  );
  return (0,
  jsx_runtime_1.jsx)(EmbeddedTodoListEnvelope, { ref: forwardedRef, apiImpl: props.apiImpl, origin: props.targetOrigin, refDelegate: refDelegate, pollInit: pollInit, config: config }, void 0);
});
var EmbeddedTodoListEnvelope = React.forwardRef(embedded_1.RefForwardingEmbeddedEnvelope);
//# sourceMappingURL=EmbeddedTodoList.js.map

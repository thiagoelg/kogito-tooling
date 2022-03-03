"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pingPongEnvelopViewRenderDiv = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ReactDOM = require("react-dom");
var api_1 = require("@kie-tools-core/envelope/dist/api");
var __1 = require("..");
var pingPongEnvelopViewRenderDiv = function (container, envelopeId) {
  return new Promise(function (res) {
    ReactDOM.render(
      (0, jsx_runtime_1.jsx)(
        __1.PingPongEnvelopeView,
        { envelopeConfig: { containerType: api_1.ContainerType.DIV, envelopeId: envelopeId } },
        void 0
      ),
      container,
      function () {
        return res();
      }
    );
  });
};
exports.pingPongEnvelopViewRenderDiv = pingPongEnvelopViewRenderDiv;
//# sourceMappingURL=index.js.map

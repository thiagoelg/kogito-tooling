"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pingPongEnvelopViewRender = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ReactDOM = require("react-dom");
var api_1 = require("@kie-tools-core/envelope/dist/api");
var __1 = require("..");
var pingPongEnvelopViewRender = function (container) {
  return new Promise(function (res) {
    ReactDOM.render(
      (0, jsx_runtime_1.jsx)(
        __1.PingPongEnvelopeView,
        { envelopeConfig: { containerType: api_1.ContainerType.IFRAME } },
        void 0
      ),
      container,
      function () {
        return res();
      }
    );
  });
};
exports.pingPongEnvelopViewRender = pingPongEnvelopViewRender;
//# sourceMappingURL=index.js.map

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pingPongEnvelopViewRenderDiv = void 0;
var api_1 = require("@kie-tools-core/envelope/dist/api");
require("@kie-tools-examples/ping-pong-view-angular/dist/wc");
var pingPongEnvelopViewRenderDiv = function (container, envelopeId) {
  var element = document.createElement("ping-pong-angular");
  element.setAttribute("containerType", api_1.ContainerType.DIV);
  element.setAttribute("envelopeId", envelopeId);
  container.appendChild(element);
  return Promise.resolve();
};
exports.pingPongEnvelopViewRenderDiv = pingPongEnvelopViewRenderDiv;
//# sourceMappingURL=index.js.map

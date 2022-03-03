"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
var envelope_1 = require("@kie-tools-core/envelope");
var PingPongEnvelopeApiImpl_1 = require("./PingPongEnvelopeApiImpl");
function init(args) {
  var envelope = new envelope_1.Envelope(args.bus, args.config);
  return envelope.start(
    function () {
      return Promise.resolve(function () {});
    },
    {},
    {
      create: function (apiFactoryArgs) {
        return new PingPongEnvelopeApiImpl_1.PingPongEnvelopeApiImpl(apiFactoryArgs, args.pingPongViewFactory);
      },
    }
  );
}
exports.init = init;
//# sourceMappingURL=PingPongEnvelope.js.map

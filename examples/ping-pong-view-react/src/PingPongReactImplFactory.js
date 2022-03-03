"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingPongReactImplFactory = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var PingPongReactImpl_1 = require("./PingPongReactImpl");
var PingPongReactImplFactory = (function () {
  function PingPongReactImplFactory(setView) {
    this.setView = setView;
  }
  PingPongReactImplFactory.prototype.create = function (initArgs, channelApi) {
    var ref = React.createRef();
    this.setView(
      (0, jsx_runtime_1.jsx)(
        PingPongReactImpl_1.PingPongReactImpl,
        { initArgs: initArgs, channelApi: channelApi, ref: ref },
        void 0
      )
    );
    return function () {
      return ref.current;
    };
  };
  return PingPongReactImplFactory;
})();
exports.PingPongReactImplFactory = PingPongReactImplFactory;
//# sourceMappingURL=PingPongReactImplFactory.js.map

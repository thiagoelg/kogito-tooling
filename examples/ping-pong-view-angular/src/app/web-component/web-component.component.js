"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingPongWcComponent = void 0;
var core_1 = require("@angular/core");
var PingPongWcComponent = (function () {
  function PingPongWcComponent() {}
  __decorate([(0, core_1.Input)("containertype")], PingPongWcComponent.prototype, "containerType", void 0);
  __decorate([(0, core_1.Input)("envelopeid")], PingPongWcComponent.prototype, "envelopeId", void 0);
  PingPongWcComponent = __decorate(
    [
      (0, core_1.Component)({
        selector: "ping-pong-wc",
        template: '<app-ping-pong [containerType]="containerType" [envelopeId]="envelopeId"></app-ping-pong>',
      }),
    ],
    PingPongWcComponent
  );
  return PingPongWcComponent;
})();
exports.PingPongWcComponent = PingPongWcComponent;
//# sourceMappingURL=web-component.component.js.map

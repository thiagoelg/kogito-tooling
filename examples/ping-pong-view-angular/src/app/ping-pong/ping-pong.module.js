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
exports.PingPongModule = void 0;
var ping_pong_api_service_1 = require("./ping-pong-api.service");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ping_pong_component_1 = require("./ping-pong.component");
var PingPongModule = (function () {
  function PingPongModule() {}
  PingPongModule = __decorate(
    [
      (0, core_1.NgModule)({
        declarations: [ping_pong_component_1.PingPongComponent],
        imports: [platform_browser_1.BrowserModule],
        exports: [ping_pong_component_1.PingPongComponent],
        providers: [ping_pong_api_service_1.PingPongApiService],
        bootstrap: [ping_pong_component_1.PingPongComponent],
      }),
    ],
    PingPongModule
  );
  return PingPongModule;
})();
exports.PingPongModule = PingPongModule;
//# sourceMappingURL=ping-pong.module.js.map

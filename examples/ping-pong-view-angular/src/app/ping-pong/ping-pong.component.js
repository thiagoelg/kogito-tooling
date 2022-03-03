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
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingPongComponent = void 0;
var ping_pong_api_service_1 = require("./ping-pong-api.service");
var core_1 = require("@angular/core");
var PingPongViewEnvelope = require("@kie-tools-examples/ping-pong-view/dist/envelope");
var rxjs_1 = require("rxjs");
var PingPongComponent = (function () {
  function PingPongComponent(pingPongApiService) {
    this.pingPongApiService = pingPongApiService;
  }
  PingPongComponent.prototype.subscribeToLogUpdates = function () {
    this.log = this.pingPongApiService.log.asObservable().pipe(
      (0, rxjs_1.scan)(function (acc, curr) {
        return __spreadArray(__spreadArray([], __read(acc.slice(-9)), false), [curr], false);
      }, [])
    );
  };
  PingPongComponent.prototype.ngOnInit = function () {
    var _this = this;
    this.pingPongApiService.log.next({ line: "Logs will show up here", time: 0 });
    PingPongViewEnvelope.init({
      config: { containerType: this.containerType, envelopeId: this.envelopeId },
      bus: {
        postMessage: function (message, _targetOrigin, transfer) {
          return window.parent.postMessage(message, "*", transfer);
        },
      },
      pingPongViewFactory: this.pingPongApiService,
    });
    this.subscribeToLogUpdates();
    this.pingPongApiService.logCleared.subscribe(function () {
      return _this.subscribeToLogUpdates();
    });
  };
  __decorate([(0, core_1.Input)()], PingPongComponent.prototype, "containerType", void 0);
  __decorate([(0, core_1.Input)()], PingPongComponent.prototype, "envelopeId", void 0);
  PingPongComponent = __decorate(
    [
      (0, core_1.Component)({
        selector: "app-ping-pong",
        templateUrl: "./ping-pong.component.html",
        styleUrls: ["./ping-pong.component.css"],
        providers: [ping_pong_api_service_1.PingPongApiService],
      }),
    ],
    PingPongComponent
  );
  return PingPongComponent;
})();
exports.PingPongComponent = PingPongComponent;
//# sourceMappingURL=ping-pong.component.js.map

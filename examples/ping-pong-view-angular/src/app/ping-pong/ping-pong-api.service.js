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
exports.PingPongApiService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
function getCurrentTime() {
  return Date.now();
}
var PingPongApiService = (function () {
  function PingPongApiService() {
    this.log = new rxjs_1.ReplaySubject(10);
    this.logCleared = new rxjs_1.Subject();
    this.lastPingTimestamp = new rxjs_1.BehaviorSubject(0);
    this.initialized = false;
  }
  PingPongApiService.prototype.create = function (initArgs, channelApi) {
    var _this = this;
    this.clearSubscriptions();
    this.clearInterval();
    this.initArgs = initArgs;
    this.channelApi = channelApi;
    this.pingSubscription = this.channelApi.notifications.pingPongView__ping.subscribe(function (pingSource) {
      if (pingSource === _this.initArgs.name) {
        return;
      }
      _this.log.next({ line: "PING from '".concat(pingSource, "'."), time: getCurrentTime() });
      _this.channelApi.notifications.pingPongView__pong.send(_this.initArgs.name, pingSource);
    });
    this.pongSubscription = this.channelApi.notifications.pingPongView__pong.subscribe(function (
      pongSource,
      replyingTo
    ) {
      if (pongSource === _this.initArgs.name || replyingTo !== _this.initArgs.name) {
        return;
      }
      _this.log.next({ line: "PONG from '".concat(pongSource, "'."), time: getCurrentTime() });
    });
    this.dotInterval = window.setInterval(function () {
      _this.log.next({ line: ".", time: getCurrentTime() });
    }, 2000);
    this.initialized = true;
    return function () {
      return {
        clearLogs: function () {
          _this.log = new rxjs_1.ReplaySubject(10);
          _this.logCleared.next(null);
        },
        getLastPingTimestamp: function () {
          return Promise.resolve(_this.lastPingTimestamp.value);
        },
      };
    };
  };
  PingPongApiService.prototype.ping = function () {
    this.channelApi.notifications.pingPongView__ping.send(this.initArgs.name);
    this.lastPingTimestamp.next(getCurrentTime());
  };
  PingPongApiService.prototype.clearSubscriptions = function () {
    this.pingSubscription && this.channelApi.notifications.pingPongView__ping.unsubscribe(this.pingSubscription);
    this.pongSubscription && this.channelApi.notifications.pingPongView__pong.unsubscribe(this.pongSubscription);
  };
  PingPongApiService.prototype.clearInterval = function () {
    window.clearInterval(this.dotInterval);
  };
  PingPongApiService.prototype.ngOnDestroy = function () {
    this.clearSubscriptions();
    this.clearInterval();
  };
  PingPongApiService = __decorate([(0, core_1.Injectable)()], PingPongApiService);
  return PingPongApiService;
})();
exports.PingPongApiService = PingPongApiService;
//# sourceMappingURL=ping-pong-api.service.js.map

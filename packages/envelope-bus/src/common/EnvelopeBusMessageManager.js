"use strict";
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
exports.EnvelopeBusMessageManager = void 0;
var api_1 = require("../api");
var EnvelopeBusMessageManager = (function () {
  function EnvelopeBusMessageManager(send, name) {
    var _this = this;
    if (name === void 0) {
      name = "".concat(new Date().getMilliseconds());
    }
    this.send = send;
    this.name = name;
    this.requestHandlers = new Map();
    this.localNotificationsSubscriptions = new Map();
    this.remoteNotificationsSubscriptions = [];
    this.localSharedValueSubscriptions = new Map();
    this.localSharedValuesStore = new Map();
    this.clientApi = {
      requests: cachedProxy(new Map(), {
        get: function (target, name) {
          return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return _this.request.apply(_this, __spreadArray([name], __read(args), false));
          };
        },
      }),
      notifications: cachedProxy(new Map(), {
        get: function (target, name) {
          return {
            subscribe: function (callback) {
              return _this.subscribeToNotification(name, callback);
            },
            unsubscribe: function (callback) {
              return _this.unsubscribeFromNotification(name, callback);
            },
            send: function () {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              return _this.notify.apply(_this, __spreadArray([name], __read(args), false));
            },
          };
        },
      }),
      shared: cachedProxy(new Map(), {
        get: function (target, name) {
          return {
            set: function (value) {
              return _this.setSharedValue(name, value);
            },
            subscribe: function (callback) {
              return _this.subscribeToSharedValue(name, callback, { owned: false });
            },
            unsubscribe: function (callback) {
              return _this.unsubscribeFromSharedValue(name, callback);
            },
          };
        },
      }),
    };
    this.shared = cachedProxy(new Map(), {
      get: function (target, name) {
        return {
          set: function (value) {
            return _this.setSharedValue(name, value);
          },
          subscribe: function (callback) {
            return _this.subscribeToSharedValue(name, callback, { owned: true });
          },
          unsubscribe: function (callback) {
            return _this.unsubscribeFromSharedValue(name, callback);
          },
        };
      },
    });
    this.requestIdCounter = 0;
  }
  Object.defineProperty(EnvelopeBusMessageManager.prototype, "server", {
    get: function () {
      var _this = this;
      return {
        receive: function (m, apiImpl) {
          console.debug(m);
          _this.receive(m, apiImpl);
        },
      };
    },
    enumerable: false,
    configurable: true,
  });
  EnvelopeBusMessageManager.prototype.setSharedValue = function (method, value) {
    var _a;
    this.localSharedValuesStore.set(method, value);
    (_a = this.localSharedValueSubscriptions.get(method)) === null || _a === void 0
      ? void 0
      : _a.forEach(function (callback) {
          return callback(value);
        });
    this.send({
      type: method,
      purpose: api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_UPDATE,
      data: value,
    });
  };
  EnvelopeBusMessageManager.prototype.subscribeToSharedValue = function (method, callback, config) {
    var _a;
    var activeSubscriptions = (_a = this.localSharedValueSubscriptions.get(method)) !== null && _a !== void 0 ? _a : [];
    this.localSharedValueSubscriptions.set(
      method,
      __spreadArray(__spreadArray([], __read(activeSubscriptions), false), [callback], false)
    );
    if (config.owned || this.localSharedValuesStore.get(method)) {
      callback(this.getCurrentStoredSharedValueOrDefault(method, this.currentApiImpl));
    } else {
      this.send({
        type: method,
        purpose: api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_GET_DEFAULT,
        data: [],
      });
    }
    return callback;
  };
  EnvelopeBusMessageManager.prototype.unsubscribeFromSharedValue = function (name, callback) {
    var activeSubscriptions = this.localSharedValueSubscriptions.get(name);
    if (!activeSubscriptions) {
      return;
    }
    var index = activeSubscriptions.indexOf(callback);
    if (index < 0) {
      return;
    }
    activeSubscriptions.splice(index, 1);
  };
  EnvelopeBusMessageManager.prototype.getCurrentStoredSharedValueOrDefault = function (method, apiImpl) {
    var _a, _b;
    var m = method;
    return (_a = this.localSharedValuesStore.get(m)) !== null && _a !== void 0
      ? _a
      : this.localSharedValuesStore
          .set(
            m,
            (_b = apiImpl === null || apiImpl === void 0 ? void 0 : apiImpl[m]) === null || _b === void 0
              ? void 0
              : _b.apply(apiImpl).defaultValue
          )
          .get(method);
  };
  EnvelopeBusMessageManager.prototype.subscribeToNotification = function (method, callback) {
    var _a;
    var activeSubscriptions =
      (_a = this.localNotificationsSubscriptions.get(method)) !== null && _a !== void 0 ? _a : [];
    this.localNotificationsSubscriptions.set(
      method,
      __spreadArray(__spreadArray([], __read(activeSubscriptions), false), [callback], false)
    );
    this.send({
      type: method,
      purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION_SUBSCRIPTION,
      data: [],
    });
    return callback;
  };
  EnvelopeBusMessageManager.prototype.unsubscribeFromNotification = function (method, callback) {
    var activeSubscriptions = this.localNotificationsSubscriptions.get(method);
    if (!activeSubscriptions) {
      return;
    }
    var index = activeSubscriptions.indexOf(callback);
    if (index < 0) {
      return;
    }
    activeSubscriptions.splice(index, 1);
    this.send({
      type: method,
      purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION_UNSUBSCRIPTION,
      data: [],
    });
  };
  EnvelopeBusMessageManager.prototype.request = function (method) {
    var _this = this;
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    var requestId = this.getNextRequestId();
    this.send({
      requestId: requestId,
      type: method,
      data: args,
      purpose: api_1.EnvelopeBusMessagePurpose.REQUEST,
    });
    return new Promise(function (resolve, reject) {
      _this.requestHandlers.set(requestId, { resolve: resolve, reject: reject });
    });
  };
  EnvelopeBusMessageManager.prototype.notify = function (method) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    this.send({
      type: method,
      data: args,
      purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
    });
  };
  EnvelopeBusMessageManager.prototype.respond = function (request, data, error) {
    if (request.purpose !== api_1.EnvelopeBusMessagePurpose.REQUEST) {
      throw new Error("Cannot respond a message that is not a request");
    }
    if (!request.requestId) {
      throw new Error("Cannot respond a request without a requestId");
    }
    this.send({
      requestId: request.requestId,
      purpose: api_1.EnvelopeBusMessagePurpose.RESPONSE,
      type: request.type,
      data: data,
      error: error instanceof Error ? error.message : JSON.stringify(error),
    });
  };
  EnvelopeBusMessageManager.prototype.callback = function (response) {
    if (response.purpose !== api_1.EnvelopeBusMessagePurpose.RESPONSE) {
      throw new Error("Cannot invoke callback with a message that is not a response");
    }
    if (!response.requestId) {
      throw new Error("Cannot acknowledge a response without a requestId");
    }
    var callback = this.requestHandlers.get(response.requestId);
    if (!callback) {
      throw new Error("Callback not found for " + response);
    }
    this.requestHandlers.delete(response.requestId);
    if (!response.error) {
      callback.resolve(response.data);
    } else {
      callback.reject(new Error(response.error));
    }
  };
  EnvelopeBusMessageManager.prototype.receive = function (message, apiImpl) {
    var _this = this;
    var _a, _b;
    this.currentApiImpl = apiImpl;
    if (message.purpose === api_1.EnvelopeBusMessagePurpose.RESPONSE) {
      this.callback(message);
      return;
    }
    if (message.purpose === api_1.EnvelopeBusMessagePurpose.REQUEST) {
      var request_1 = message;
      var response = void 0;
      try {
        response = apiImpl[request_1.type].apply(apiImpl, request_1.data);
      } catch (err) {
        this.respond(request_1, undefined, err);
        return;
      }
      if (!(response instanceof Promise)) {
        throw new Error("Cannot make a request to '".concat(request_1.type, "' because it does not return a Promise"));
      }
      response
        .then(function (data) {
          return _this.respond(request_1, data);
        })
        .catch(function (err) {
          return _this.respond(request_1, undefined, err);
        });
      return;
    }
    if (message.purpose === api_1.EnvelopeBusMessagePurpose.NOTIFICATION) {
      var method = message.type;
      (_a = apiImpl[method]) === null || _a === void 0 ? void 0 : _a.apply(apiImpl, message.data);
      if (this.remoteNotificationsSubscriptions.indexOf(method) >= 0) {
        this.send({
          type: method,
          purpose: api_1.EnvelopeBusMessagePurpose.NOTIFICATION,
          data: message.data,
        });
      }
      var localSubscriptionMethod = message.type;
      (_b = this.localNotificationsSubscriptions.get(localSubscriptionMethod)) === null || _b === void 0
        ? void 0
        : _b.forEach(function (callback) {
            callback.apply(void 0, __spreadArray([], __read(message.data), false));
          });
      return;
    }
    if (message.purpose === api_1.EnvelopeBusMessagePurpose.NOTIFICATION_SUBSCRIPTION) {
      var method = message.type;
      if (this.remoteNotificationsSubscriptions.indexOf(method) < 0) {
        this.remoteNotificationsSubscriptions.push(method);
      }
      return;
    }
    if (message.purpose === api_1.EnvelopeBusMessagePurpose.NOTIFICATION_UNSUBSCRIPTION) {
      var method = message.type;
      var index = this.remoteNotificationsSubscriptions.indexOf(method);
      if (index >= 0) {
        this.remoteNotificationsSubscriptions.splice(index, 1);
      }
      return;
    }
    if (message.purpose === api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_GET_DEFAULT) {
      var method = message.type;
      this.send({
        type: method,
        purpose: api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_UPDATE,
        data: this.getCurrentStoredSharedValueOrDefault(method, apiImpl),
      });
      return;
    }
    if (message.purpose === api_1.EnvelopeBusMessagePurpose.SHARED_VALUE_UPDATE) {
      var method = message.type;
      var subscriptions = this.localSharedValueSubscriptions.get(method);
      this.localSharedValuesStore.set(method, message.data);
      subscriptions === null || subscriptions === void 0
        ? void 0
        : subscriptions.forEach(function (callback) {
            return callback(message.data);
          });
      return;
    }
  };
  EnvelopeBusMessageManager.prototype.getNextRequestId = function () {
    return "".concat(this.name, "_").concat(this.requestIdCounter++);
  };
  return EnvelopeBusMessageManager;
})();
exports.EnvelopeBusMessageManager = EnvelopeBusMessageManager;
function cachedProxy(cache, p) {
  return new Proxy(
    {},
    {
      set: function (target, name, value) {
        cache.set(name, value);
        return true;
      },
      get: function (target, name) {
        var _a, _b;
        return (_a = cache.get(name)) !== null && _a !== void 0
          ? _a
          : cache.set(name, (_b = p.get) === null || _b === void 0 ? void 0 : _b.call(p, target, name)).get(name);
      },
    }
  );
}
//# sourceMappingURL=EnvelopeBusMessageManager.js.map

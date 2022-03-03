"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
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
exports.PingPongReactImpl = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var react_1 = require("react");
var hooks_1 = require("@kie-tools-core/envelope-bus/dist/hooks");
exports.PingPongReactImpl = React.forwardRef(function (props, forwardedRef) {
  var _a = __read((0, react_1.useState)([{ line: "Logs will show up here", time: 0 }]), 2),
    log = _a[0],
    setLog = _a[1];
  var _b = __read((0, react_1.useState)(0), 2),
    lastPingTimestamp = _b[0],
    setLastPingTimestamp = _b[1];
  var pingPongViewApi = (0, react_1.useMemo)(
    function () {
      return {
        clearLogs: function () {
          return setLog([]);
        },
        getLastPingTimestamp: function () {
          return Promise.resolve(lastPingTimestamp);
        },
      };
    },
    [lastPingTimestamp, setLog]
  );
  (0, react_1.useImperativeHandle)(
    forwardedRef,
    function () {
      return pingPongViewApi;
    },
    [pingPongViewApi]
  );
  var ping = (0, react_1.useCallback)(
    function () {
      props.channelApi.notifications.pingPongView__ping.send(props.initArgs.name);
      setLastPingTimestamp(getCurrentTime());
    },
    [props.channelApi, props.initArgs.name]
  );
  (0, hooks_1.useSubscription)(
    props.channelApi.notifications.pingPongView__ping,
    (0, react_1.useCallback)(
      function (pingSource) {
        if (pingSource === props.initArgs.name) {
          return;
        }
        setLog(function (prevLog) {
          return __spreadArray(
            __spreadArray([], __read(prevLog), false),
            [{ line: "PING from '".concat(pingSource, "'."), time: getCurrentTime() }],
            false
          );
        });
        props.channelApi.notifications.pingPongView__pong.send(props.initArgs.name, pingSource);
      },
      [props.channelApi, props.initArgs.name]
    )
  );
  (0, hooks_1.useSubscription)(
    props.channelApi.notifications.pingPongView__pong,
    (0, react_1.useCallback)(
      function (pongSource, replyingTo) {
        if (pongSource === props.initArgs.name || replyingTo !== props.initArgs.name) {
          return;
        }
        setLog(function (prevLog) {
          return __spreadArray(
            __spreadArray([], __read(prevLog), false),
            [{ line: "PONG from '".concat(pongSource, "'."), time: getCurrentTime() }],
            false
          );
        });
      },
      [props.initArgs.name]
    )
  );
  (0, react_1.useLayoutEffect)(function () {
    var interval = setInterval(function () {
      return setLog(function (prevLog) {
        return __spreadArray(__spreadArray([], __read(prevLog), false), [{ line: ".", time: getCurrentTime() }], false);
      });
    }, 2000);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  return (0, jsx_runtime_1.jsxs)(
    jsx_runtime_1.Fragment,
    {
      children: [
        (0, jsx_runtime_1.jsxs)("i", { children: ["#", props.initArgs.name] }, void 0),
        (0, jsx_runtime_1.jsxs)(
          "div",
          __assign(
            { className: "ping-pong-view--header" },
            {
              children: [
                (0, jsx_runtime_1.jsx)("span", { children: "Hello from React!" }, void 0),
                (0, jsx_runtime_1.jsx)("button", __assign({ onClick: ping }, { children: "Ping others!" }), void 0),
              ],
            }
          ),
          void 0
        ),
        (0, jsx_runtime_1.jsx)(
          "div",
          __assign(
            { className: "ping-pong-view--log" },
            {
              children: log.slice(-10).map(function (line, i) {
                return (0,
                jsx_runtime_1.jsx)("p", __assign({ style: { fontFamily: "monospace" } }, { children: line.line }), i);
              }),
            }
          ),
          void 0
        ),
      ],
    },
    void 0
  );
});
function getCurrentTime() {
  return Date.now();
}
//# sourceMappingURL=PingPongReactImpl.js.map

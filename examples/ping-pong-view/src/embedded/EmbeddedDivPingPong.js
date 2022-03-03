"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbeddedDivPingPong = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var react_1 = require("react");
var api_1 = require("@kie-tools-core/envelope/dist/api");
var embedded_1 = require("@kie-tools-core/envelope/dist/embedded");
var config = { containerType: api_1.ContainerType.DIV };
exports.EmbeddedDivPingPong = React.forwardRef(function (props, forwardedRef) {
  var refDelegate = (0, react_1.useCallback)(function (envelopeServer) {
    return {
      clearLogs: function () {
        return envelopeServer.envelopeApi.requests.pingPongView__clearLogs();
      },
      getLastPingTimestamp: function () {
        return envelopeServer.envelopeApi.requests.pingPongView__getLastPingTimestamp();
      },
    };
  }, []);
  var renderLock = (0, react_1.useRef)(false);
  var renderView = props.renderView,
    name = props.name;
  var pollInit = (0, react_1.useCallback)(
    function (envelopeServer, container) {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!!renderLock.current) return [3, 2];
              return [4, renderView(container(), envelopeServer.id)];
            case 1:
              _a.sent();
              renderLock.current = true;
              _a.label = 2;
            case 2:
              return [
                2,
                envelopeServer.envelopeApi.requests.pingPongView__init(
                  { origin: envelopeServer.origin, envelopeServerId: envelopeServer.id },
                  { name: name }
                ),
              ];
          }
        });
      });
    },
    [name, renderView]
  );
  return (0,
  jsx_runtime_1.jsx)(EmbeddedDivPingPongEnvelope, { ref: forwardedRef, apiImpl: props.apiImpl, origin: props.targetOrigin, refDelegate: refDelegate, pollInit: pollInit, config: config }, void 0);
});
var EmbeddedDivPingPongEnvelope = React.forwardRef(embedded_1.RefForwardingEmbeddedEnvelope);
//# sourceMappingURL=EmbeddedDivPingPong.js.map

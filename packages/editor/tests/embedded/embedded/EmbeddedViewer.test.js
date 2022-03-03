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
var jsx_runtime_1 = require("react/jsx-runtime");
var api_1 = require("@kie-tools-core/editor/dist/api");
var channel_1 = require("@kie-tools-core/envelope-bus/dist/channel");
var embedded_1 = require("@kie-tools-core/editor/dist/embedded");
var EmbeddedEditorTestUtils_1 = require("./EmbeddedEditorTestUtils");
var react_1 = require("@testing-library/react");
var api_2 = require("@kie-tools-core/envelope-bus/dist/api");
describe("EmbeddedViewer::ONLINE", function () {
  var file = {
    fileName: "test.dmn",
    fileExtension: "dmn",
    getFileContents: function () {
      return Promise.resolve("");
    },
    isReadOnly: false,
  };
  var editorEnvelopeLocator = new api_1.EditorEnvelopeLocator("localhost:8888", [
    new api_1.EnvelopeMapping("dmn", "**/*.dmn", "envelope", "envelope/envelope.html"),
  ]);
  var channelType = api_1.ChannelType.ONLINE;
  var envelopeServerId = "test-bus-id";
  beforeAll(function () {
    jest.spyOn(channel_1.EnvelopeServer.prototype, "generateRandomId").mockReturnValue(envelopeServerId);
  });
  test("EmbeddedViewer::defaults", function () {
    var _a = (0, react_1.render)(
        (0, jsx_runtime_1.jsx)(
          embedded_1.EmbeddedViewer,
          { file: file, editorEnvelopeLocator: editorEnvelopeLocator, channelType: channelType, locale: "en" },
          void 0
        )
      ),
      getByTestId = _a.getByTestId,
      container = _a.container;
    expect(getByTestId("kogito-iframe")).toBeVisible();
    expect(getByTestId("kogito-iframe")).toHaveAttribute("data-envelope-channel", api_1.ChannelType.ONLINE);
    expect(getByTestId("kogito-iframe")).toHaveAttribute("src", "envelope/envelope.html");
    expect(container.firstChild).toMatchSnapshot();
  });
  test("EmbeddedViewer::onResourceContentRequest", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var onResourceContentRequest, container;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            onResourceContentRequest = jest.fn(function () {
              return Promise.resolve({});
            });
            container = (0, react_1.render)(
              (0, jsx_runtime_1.jsx)(
                embedded_1.EmbeddedViewer,
                {
                  file: file,
                  editorEnvelopeLocator: editorEnvelopeLocator,
                  channelType: channelType,
                  kogitoWorkspace_resourceContentRequest: onResourceContentRequest,
                  locale: "en",
                },
                void 0
              )
            ).container;
            return [
              4,
              (0, EmbeddedEditorTestUtils_1.incomingMessage)({
                targetEnvelopeServerId: envelopeServerId,
                requestId: "1",
                purpose: api_2.EnvelopeBusMessagePurpose.REQUEST,
                type: "kogitoWorkspace_resourceContentRequest",
                data: [{ path: "" }],
              }),
            ];
          case 1:
            _a.sent();
            expect(onResourceContentRequest).toBeCalled();
            expect(container.firstChild).toMatchSnapshot();
            return [2];
        }
      });
    });
  });
  test("EmbeddedViewer::onResourceListRequest", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var onResourceListRequest, container;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            onResourceListRequest = jest.fn(function () {
              return Promise.resolve({});
            });
            container = (0, react_1.render)(
              (0, jsx_runtime_1.jsx)(
                embedded_1.EmbeddedViewer,
                {
                  file: file,
                  editorEnvelopeLocator: editorEnvelopeLocator,
                  channelType: channelType,
                  kogitoWorkspace_resourceListRequest: onResourceListRequest,
                  locale: "en",
                },
                void 0
              )
            ).container;
            return [
              4,
              (0, EmbeddedEditorTestUtils_1.incomingMessage)({
                targetEnvelopeServerId: envelopeServerId,
                requestId: "1",
                purpose: api_2.EnvelopeBusMessagePurpose.REQUEST,
                type: "kogitoWorkspace_resourceListRequest",
                data: [{ pattern: "", paths: [] }],
              }),
            ];
          case 1:
            _a.sent();
            expect(onResourceListRequest).toBeCalled();
            expect(container.firstChild).toMatchSnapshot();
            return [2];
        }
      });
    });
  });
});
//# sourceMappingURL=EmbeddedViewer.test.js.map

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
var ComponentApi_1 = require("../ComponentApi");
var dataset_1 = require("../dataset");
var function_1 = require("../function");
var message_1 = require("../message");
var MessageProperty_1 = require("../message/MessageProperty");
var controller = new ComponentApi_1.ComponentApi().getComponentController();
var sampleDataSet = {
  columns: [
    {
      name: "Name",
      type: dataset_1.ColumnType.LABEL,
      settings: {
        columnId: "name",
        columnName: "Name",
        valueExpression: "value",
        emptyTemplate: "---",
      },
    },
    {
      name: "Age",
      type: dataset_1.ColumnType.NUMBER,
      settings: {
        columnId: "age",
        columnName: "age",
        valueExpression: "value",
        emptyTemplate: "---",
        valuePattern: "#,##0.00",
      },
    },
  ],
  data: [["John", "32"]],
};
describe("[Controller API] Callbacks", function () {
  it("INIT Callback without params", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var handleInit;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            handleInit = jest.fn();
            controller.setOnInit(handleInit);
            return [4, postInitMessage(new Map())];
          case 1:
            _a.sent();
            expect(handleInit).toHaveBeenCalledTimes(1);
            return [2];
        }
      });
    });
  });
  it("INIT Callback with params", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var handleInit, params;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            handleInit = jest.fn();
            params = new Map();
            params.set("hello", "world");
            controller.setOnInit(handleInit);
            return [4, postInitMessage(params)];
          case 1:
            _a.sent();
            expect(handleInit).toHaveBeenCalledWith(params);
            return [2];
        }
      });
    });
  });
  it("DataSet Callback", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var handleDataSet;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            handleDataSet = jest.fn();
            controller.setOnDataSet(handleDataSet);
            return [4, postDataSetMessage()];
          case 1:
            _a.sent();
            expect(handleDataSet).toHaveBeenCalledWith(sampleDataSet, expect.any(Map));
            return [2];
        }
      });
    });
  });
});
describe("[Controller API] Sending Requests", function () {
  var bus = mockBus();
  var componentId = "42";
  beforeAll(function () {
    var params = new Map();
    params.set(MessageProperty_1.MessageProperty.COMPONENT_ID, componentId);
    controller.init(params);
    controller.setComponentBus(bus);
  });
  it("Configuration Issues", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var configIssue, params, expected;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            configIssue = "some configuration issue.";
            params = new Map();
            expected = {
              type: message_1.MessageType.FIX_CONFIGURATION,
              properties: params,
            };
            params.set(MessageProperty_1.MessageProperty.CONFIGURATION_ISSUE, configIssue);
            controller.requireConfigurationFix(configIssue);
            return [4, delay(0)];
          case 1:
            _a.sent();
            expect(bus.send).toBeCalledWith(componentId, expected);
            return [2];
        }
      });
    });
  });
  it("Configuration Fixed", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var message;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            message = {
              type: message_1.MessageType.CONFIGURATION_OK,
              properties: new Map(),
            };
            controller.configurationOk();
            return [4, delay(0)];
          case 1:
            _a.sent();
            expect(bus.send).toBeCalledWith(componentId, message);
            return [2];
        }
      });
    });
  });
  it("Filter", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var filterRequest, props, message;
      return __generator(this, function (_a) {
        filterRequest = {
          column: 1,
          reset: false,
          row: 1,
        };
        props = new Map();
        props.set(MessageProperty_1.MessageProperty.FILTER, filterRequest);
        message = {
          type: message_1.MessageType.FILTER,
          properties: props,
        };
        controller.filter(filterRequest);
        expect(bus.send).toBeCalledWith(componentId, message);
        return [2];
      });
    });
  });
});
describe("[Controller API] Function Calls", function () {
  it("Function Success", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var functionCall, callPromise, result, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            functionCall = buildFunctionCallRequest();
            callPromise = controller.callFunction(functionCall);
            return [4, delay(0)];
          case 1:
            _a.sent();
            result = "SUCCESS RESULT";
            response = buildFunctionResponse(functionCall, result, function_1.FunctionResultType.SUCCESS);
            window.postMessage(response, window.location.origin);
            return [2, expect(callPromise).resolves.toBe(result)];
        }
      });
    });
  });
  it("Function Success", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var functionCall, callPromise, result, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            functionCall = buildFunctionCallRequest();
            callPromise = controller.callFunction(functionCall);
            return [4, delay(0)];
          case 1:
            _a.sent();
            result = "SUCCESS RESULT";
            response = buildFunctionResponse(functionCall, result, function_1.FunctionResultType.SUCCESS);
            window.postMessage(response, window.location.origin);
            return [2, expect(callPromise).resolves.toBe(result)];
        }
      });
    });
  });
  it("Function Not Found", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var functionCall, callPromise, message, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            functionCall = buildFunctionCallRequest();
            callPromise = controller.callFunction(functionCall);
            return [4, delay(0)];
          case 1:
            _a.sent();
            message = "NOT FOUND RESULT";
            response = buildFunctionResponse(functionCall, "", function_1.FunctionResultType.NOT_FOUND, message);
            window.postMessage(response, window.location.origin);
            return [2, expect(callPromise).rejects.toBe(message)];
        }
      });
    });
  });
  it("Function Execution Error", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var functionCall, callPromise, message, response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            functionCall = buildFunctionCallRequest();
            callPromise = controller.callFunction(functionCall);
            return [4, delay(0)];
          case 1:
            _a.sent();
            message = "ERROR RESULT";
            response = buildFunctionResponse(functionCall, "", function_1.FunctionResultType.ERROR, message);
            window.postMessage(response, window.location.origin);
            return [2, expect(callPromise).rejects.toBe(message)];
        }
      });
    });
  });
});
function buildFunctionCallRequest() {
  var functionParams = new Map();
  functionParams.set("test", "test");
  return {
    functionName: "test function name",
    parameters: functionParams,
  };
}
var delay = function (ms) {
  return new Promise(function (res) {
    return setTimeout(res, ms);
  });
};
function postDataSetMessage() {
  return __awaiter(this, void 0, void 0, function () {
    var params, datasetMsg;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          params = new Map();
          params.set("dataSet", sampleDataSet);
          datasetMsg = {
            type: message_1.MessageType.DATASET,
            properties: params,
          };
          return [4, postMessage(datasetMsg)];
        case 1:
          _a.sent();
          return [2];
      }
    });
  });
}
function postInitMessage(params) {
  return __awaiter(this, void 0, void 0, function () {
    var init;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          init = {
            type: message_1.MessageType.INIT,
            properties: params,
          };
          return [4, postMessage(init)];
        case 1:
          _a.sent();
          return [2];
      }
    });
  });
}
function postMessage(message) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          window.postMessage(message, window.location.origin);
          return [4, delay(0)];
        case 1:
          _a.sent();
          return [2];
      }
    });
  });
}
function mockBus() {
  return {
    destroy: jest.fn(),
    start: jest.fn(),
    send: jest.fn(),
    setListener: jest.fn(),
  };
}
function buildFunctionResponse(_request, _result, _type, _message) {
  var functionResponse = {
    message: _message || "success",
    resultType: _type,
    result: _result,
    request: _request,
  };
  var params = new Map();
  var functionResponseMessage = {
    type: message_1.MessageType.FUNCTION_RESPONSE,
    properties: params,
  };
  params.set(MessageProperty_1.MessageProperty.FUNCTION_RESPONSE, functionResponse);
  return functionResponseMessage;
}
//# sourceMappingURL=api.test.js.map

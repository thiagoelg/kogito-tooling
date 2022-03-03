"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentDev = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var ReactDOM = require("react-dom");
var ComponentDevPane_1 = require("./ComponentDevPane");
var component_api_1 = require("@dashbuilder-js/component-api");
var DEV_FILE = "/manifest.dev.json";
var COMP_ID = 42;
var initMessage;
var dataSetMessage;
var functions;
function handleDevConf(text) {
  var devConf = JSON.parse(text);
  var devPane = document.createElement("div");
  document.body.prepend(devPane);
  ReactDOM.render(
    (0, jsx_runtime_1.jsx)(
      ComponentDevPane_1.ComponentDevPane,
      {
        sendDataSet: function () {
          return sendMessage(dataSetMessage);
        },
        sendInit: function () {
          return sendMessage(initMessage);
        },
      },
      void 0
    ),
    devPane
  );
  window.addEventListener("message", function (e) {
    var message = e.data;
    if (message.type === component_api_1.MessageType.FUNCTION_CALL) {
      respondFunctionCall(message);
    }
  });
  functions = devConf.functions;
  createInit(devConf);
  createDataSet(devConf);
  setTimeout(function () {
    sendMessage(initMessage);
    setTimeout(function () {
      sendMessage(dataSetMessage);
    }, 100);
  }, 100);
}
function respondFunctionCall(message) {
  var functionCall = message.properties.get(component_api_1.MessageProperty.FUNCTION_CALL);
  var functionName = functionCall.functionName;
  var confResponse = functions
    ? functions
        .filter(function (f) {
          return f.name === functionName;
        })
        .filter(function (f) {
          return paramsMatch(functionCall.parameters, f.params);
        })[0]
    : undefined;
  console.debug("[COMPONENT DEV] Function response: ");
  console.debug(confResponse);
  var functionResponse;
  if (confResponse === undefined) {
    functionResponse = {
      message: "Function not found",
      request: functionCall,
      resultType: component_api_1.FunctionResultType.NOT_FOUND,
      result: undefined,
    };
  } else if (confResponse.response === "ERROR") {
    functionResponse = {
      message: "Function Error!",
      request: functionCall,
      resultType: component_api_1.FunctionResultType.ERROR,
      result: undefined,
    };
  } else {
    functionResponse = {
      message: "Success!",
      request: functionCall,
      resultType: component_api_1.FunctionResultType.SUCCESS,
      result: confResponse.response,
    };
  }
  var props = new Map();
  props.set(component_api_1.MessageProperty.FUNCTION_RESPONSE, functionResponse);
  sendMessage({
    type: component_api_1.MessageType.FUNCTION_RESPONSE,
    properties: props,
  });
}
function createInit(devConf) {
  var props = new Map();
  devConf.init.forEach(function (prop) {
    return props.set(prop.key, prop.value);
  });
  initMessage = {
    type: component_api_1.MessageType.INIT,
    properties: props,
  };
}
function createDataSet(devConf) {
  var props = new Map();
  devConf.init.forEach(function (prop) {
    return props.set(prop.key, prop.value);
  });
  props.set(component_api_1.MessageProperty.DATASET, devConf.dataSet);
  dataSetMessage = {
    type: component_api_1.MessageType.DATASET,
    properties: props,
  };
}
function paramsMatch(requestParams, devParams) {
  var devParamsEmpty = !devParams || devParams.length === 0;
  var requestParamsEmpty = !requestParams || requestParams.size === 0;
  var allMatch =
    devParams && requestParams
      ? !devParamsEmpty &&
        devParams.every(function (p) {
          return requestParams.get(p.key) === p.value;
        })
      : false;
  return (devParamsEmpty && requestParamsEmpty) || allMatch;
}
function sendMessage(message) {
  console.debug("[COMPONENT DEV] Sending Message");
  console.debug(message);
  message.properties.set(component_api_1.MessageProperty.COMPONENT_ID, COMP_ID);
  window.postMessage(message, window.location.href);
}
var ComponentDev = (function () {
  function ComponentDev() {}
  ComponentDev.prototype.start = function () {
    fetch(DEV_FILE)
      .then(function (r) {
        return r.text();
      })
      .then(function (text) {
        return handleDevConf(text);
      })
      .catch(function (e) {
        return console.log("Not able to load manifest DEV file: " + e);
      });
  };
  return ComponentDev;
})();
exports.ComponentDev = ComponentDev;
//# sourceMappingURL=index.js.map

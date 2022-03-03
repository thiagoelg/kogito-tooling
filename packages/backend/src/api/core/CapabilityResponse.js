"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilityResponse = void 0;
var CapabilityResponseStatus_1 = require("./CapabilityResponseStatus");
var CapabilityResponse = (function () {
  function CapabilityResponse(args) {
    this.status = args.status;
    this.body = args.body;
    this.message = args.message;
  }
  CapabilityResponse.ok = function (body) {
    return new CapabilityResponse({ status: CapabilityResponseStatus_1.CapabilityResponseStatus.OK, body: body });
  };
  CapabilityResponse.notAvailable = function (message) {
    return new CapabilityResponse({
      status: CapabilityResponseStatus_1.CapabilityResponseStatus.NOT_AVAILABLE,
      message: message,
    });
  };
  CapabilityResponse.missingInfra = function () {
    return new CapabilityResponse({ status: CapabilityResponseStatus_1.CapabilityResponseStatus.MISSING_INFRA });
  };
  return CapabilityResponse;
})();
exports.CapabilityResponse = CapabilityResponse;
//# sourceMappingURL=CapabilityResponse.js.map

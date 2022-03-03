"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("@kie-tools-core/backend/dist/api");
describe("utility methods to create a CapabilityResponse", function () {
  test("should be an empty OK response", function () {
    var response = api_1.CapabilityResponse.ok();
    expect(response.status).toBe(api_1.CapabilityResponseStatus.OK);
    expect(response.body).toBeUndefined();
    expect(response.message).toBeUndefined();
  });
  test("should be an OK response with a body", function () {
    var responseBody = { foo: "bar" };
    var response = api_1.CapabilityResponse.ok(responseBody);
    expect(response.status).toBe(api_1.CapabilityResponseStatus.OK);
    expect(response.body).toBe(responseBody);
    expect(response.message).toBeUndefined();
  });
  test("should be a NOT_AVAILABLE response", function () {
    var responseMessage = "some message";
    var response = api_1.CapabilityResponse.notAvailable(responseMessage);
    expect(response.status).toBe(api_1.CapabilityResponseStatus.NOT_AVAILABLE);
    expect(response.body).toBeUndefined();
    expect(response.message).toBe(responseMessage);
  });
  test("should be a MISSING_INFRA response", function () {
    var response = api_1.CapabilityResponse.missingInfra();
    expect(response.status).toBe(api_1.CapabilityResponseStatus.MISSING_INFRA);
    expect(response.body).toBeUndefined();
  });
});
//# sourceMappingURL=CapabilityResponse.test.js.map

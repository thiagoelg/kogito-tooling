"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var DmnFormToolbar_1 = require("../DmnFormToolbar");
var testing_utils_1 = require("./testing_utils");
describe("DmnFormToolbar", function () {
  it("should truncate the filename when it is too large", function () {
    var uri = "/a_really_really_really_really_large_filename_for_my_model.dmn";
    var getByTestId = (0, react_1.render)(
      (0, testing_utils_1.usingTestingDmnFormI18nContext)(
        (0, testing_utils_1.usingTestingAppContext)(
          (0, jsx_runtime_1.jsx)(DmnFormToolbar_1.DmnFormToolbar, { uri: uri }, void 0),
          {
            data: {
              baseUrl: "",
              forms: [{ uri: uri, modelName: "myModel", schema: {} }],
            },
          }
        ).wrapper
      ).wrapper
    ).getByTestId;
    expect(getByTestId("text-filename")).toHaveTextContent("a_really_really_really_re... .dmn");
  });
  it("should not truncate the filename when it is small enough", function () {
    var uri = "/my_model.dmn";
    var getByTestId = (0, react_1.render)(
      (0, testing_utils_1.usingTestingDmnFormI18nContext)(
        (0, testing_utils_1.usingTestingAppContext)(
          (0, jsx_runtime_1.jsx)(DmnFormToolbar_1.DmnFormToolbar, { uri: uri }, void 0),
          {
            data: {
              baseUrl: "",
              forms: [{ uri: uri, modelName: "myModel", schema: {} }],
            },
          }
        ).wrapper
      ).wrapper
    ).getByTestId;
    expect(getByTestId("text-filename")).toHaveTextContent("my_model.dmn");
  });
});
//# sourceMappingURL=DmnFormToolbar.test.js.map

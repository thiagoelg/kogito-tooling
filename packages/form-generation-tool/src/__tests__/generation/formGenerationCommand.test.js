"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generation_1 = require("../../generation");
var fs = require("../../generation/fs");
var mock_1 = require("./tools/uniforms/patternfly/mock");
var tools_1 = require("../../generation/tools");
jest.mock("../../generation/fs");
describe("formGenerationCommand tests", function () {
  var loadProjectSchemasMock = jest.spyOn(fs, "loadProjectSchemas");
  var storeFormAssetsMock = jest.spyOn(fs, "storeFormAsset");
  var sourcePath = "/a/test/path";
  beforeEach(function () {
    jest.clearAllMocks();
  });
  it("Generate forms with wrong tool type", function () {
    (0, generation_1.generateForms)({
      path: sourcePath,
      type: "wrong type",
      overwrite: true,
    });
    expect(loadProjectSchemasMock).not.toBeCalled();
    expect(storeFormAssetsMock).not.toBeCalled();
  });
  it("Generate forms for empty project", function () {
    loadProjectSchemasMock.mockReturnValueOnce([]);
    (0, generation_1.generateForms)({
      path: sourcePath,
      type: "patternfly",
      overwrite: true,
    });
    expect(loadProjectSchemasMock).toBeCalledTimes(1);
    expect(storeFormAssetsMock).not.toBeCalled();
  });
  it("Generate forms project with schemas", function () {
    var schemas = [
      {
        name: "ApplyForVisa",
        schema: mock_1.ApplyForVisaSchema,
      },
      {
        name: "ConfirmTravel",
        schema: mock_1.ConfirmTravelSchema,
      },
    ];
    loadProjectSchemasMock.mockReturnValueOnce(schemas);
    (0, generation_1.generateForms)({
      path: sourcePath,
      type: "patternfly",
      overwrite: true,
    });
    expect(loadProjectSchemasMock).toBeCalledTimes(1);
    expect(storeFormAssetsMock).toBeCalledTimes(2);
    var applyForVisaAsset = storeFormAssetsMock.mock.calls[0][0];
    expect(applyForVisaAsset.id).toEqual("ApplyForVisa");
    expect(applyForVisaAsset.assetName).toEqual("ApplyForVisa.tsx");
    expect(applyForVisaAsset.content).toContain("const Form__ApplyForVisa");
    expect(storeFormAssetsMock.mock.calls[0][1]).toEqual(sourcePath);
    expect(storeFormAssetsMock.mock.calls[0][2]).toBeTruthy();
    var confirmTravelAsset = storeFormAssetsMock.mock.calls[1][0];
    expect(confirmTravelAsset.id).toEqual("ConfirmTravel");
    expect(confirmTravelAsset.assetName).toEqual("ConfirmTravel.tsx");
    expect(confirmTravelAsset.content).toContain("const Form__ConfirmTravel");
    expect(storeFormAssetsMock.mock.calls[1][1]).toEqual(sourcePath);
    expect(storeFormAssetsMock.mock.calls[1][2]).toBeTruthy();
  });
  it("Generate forms project with schemas and one failure", function () {
    var ERROR_MESSAGE = "Unexpected Error!";
    var tool = {
      type: "cool tool",
      generate: function (schema) {
        if (schema.name === "ApplyForVisa") {
          throw new Error(ERROR_MESSAGE);
        }
        return {
          id: schema.name,
          content: schema.name,
          type: "txt",
          assetName: "".concat(schema.name, ".txt"),
          config: {
            schema: "",
            resources: { styles: {}, scripts: {} },
          },
        };
      },
    };
    (0, tools_1.registerFormGenerationTool)(tool);
    var schemas = [
      {
        name: "ApplyForVisa",
        schema: mock_1.ApplyForVisaSchema,
      },
      {
        name: "ConfirmTravel",
        schema: mock_1.ConfirmTravelSchema,
      },
    ];
    loadProjectSchemasMock.mockReturnValueOnce(schemas);
    (0, generation_1.generateForms)({
      path: sourcePath,
      type: tool.type,
      overwrite: true,
    });
    expect(loadProjectSchemasMock).toBeCalledTimes(1);
    expect(storeFormAssetsMock).toBeCalledTimes(1);
  });
});
//# sourceMappingURL=formGenerationCommand.test.js.map

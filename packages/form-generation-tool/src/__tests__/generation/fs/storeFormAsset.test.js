"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var types_1 = require("../../../generation/types");
var fs_1 = require("../../../generation/fs");
var storeFormAsset_1 = require("../../../generation/fs/storeFormAsset");
var PatternflyFormGenerationTool_1 = require("../../../generation/tools/uniforms/patternfly/PatternflyFormGenerationTool");
jest.mock("fs");
describe("storeFormAssets tests", function () {
  var mockFs = fs;
  var fsRmSyncMock = jest.fn();
  var fsMkDirSyncMock = jest.fn();
  var fsWriteFileSyncMock = jest.fn();
  var fsReaddirSyncMock = jest.fn();
  mockFs.readdirSync.mockImplementation(fsReaddirSyncMock);
  mockFs.rmSync.mockImplementation(fsRmSyncMock);
  mockFs.mkdirSync.mockImplementation(fsMkDirSyncMock);
  mockFs.writeFileSync.mockImplementation(fsWriteFileSyncMock);
  var sourcePath = "/a/test/path";
  var formAsset = {
    id: "test",
    assetName: "test.tsx",
    type: types_1.FormAssetType.TSX,
    content: "content",
    config: new PatternflyFormGenerationTool_1.PatternflyFormConfig({}),
  };
  beforeEach(function () {
    jest.clearAllMocks();
  });
  it("Store existing asset without overwrite", function () {
    mockFs.existsSync.mockReturnValue(true);
    fsReaddirSyncMock.mockReturnValue(["test.tsx", "test.config"]);
    expect(function () {
      return (0, fs_1.storeFormAsset)(formAsset, sourcePath, false);
    }).toThrow("Form already exists.");
  });
  it("Store existing asset with overwrite", function () {
    mockFs.existsSync.mockReturnValue(true);
    fsReaddirSyncMock.mockReturnValue(["test.tsx", "test.config"]);
    expect(function () {
      return (0, fs_1.storeFormAsset)(formAsset, sourcePath, true);
    }).not.toThrow();
    expect(fsRmSyncMock).toHaveBeenCalledTimes(2);
    expect(fsMkDirSyncMock).not.toHaveBeenCalled();
    expect(fsWriteFileSyncMock).toHaveBeenCalledTimes(2);
    expect(fsWriteFileSyncMock.mock.calls[0][0]).toStrictEqual(
      (0, storeFormAsset_1.getFormAssetPath)(sourcePath, formAsset.assetName)
    );
    expect(fsWriteFileSyncMock.mock.calls[0][1]).toStrictEqual(formAsset.content);
    expect(fsWriteFileSyncMock.mock.calls[1][0]).toStrictEqual(
      (0, storeFormAsset_1.getFormConfigAssetPath)(sourcePath, formAsset)
    );
    expect(fsWriteFileSyncMock.mock.calls[1][1]).toStrictEqual(
      JSON.stringify(new PatternflyFormGenerationTool_1.PatternflyFormConfig({}), null, 4)
    );
  });
  it("Store asset", function () {
    mockFs.existsSync.mockImplementation(function () {
      return false;
    });
    fsReaddirSyncMock.mockReturnValue([]);
    expect(function () {
      return (0, fs_1.storeFormAsset)(formAsset, sourcePath, true);
    }).not.toThrow();
    expect(fsMkDirSyncMock).toHaveBeenCalled();
    expect(fsRmSyncMock).not.toHaveBeenCalled();
    expect(fsWriteFileSyncMock).toHaveBeenCalledTimes(2);
    expect(fsWriteFileSyncMock.mock.calls[0][0]).toStrictEqual(
      (0, storeFormAsset_1.getFormAssetPath)(sourcePath, formAsset.assetName)
    );
    expect(fsWriteFileSyncMock.mock.calls[0][1]).toStrictEqual(formAsset.content);
    expect(fsWriteFileSyncMock.mock.calls[1][0]).toStrictEqual(
      (0, storeFormAsset_1.getFormConfigAssetPath)(sourcePath, formAsset)
    );
    expect(fsWriteFileSyncMock.mock.calls[1][1]).toStrictEqual(
      JSON.stringify(new PatternflyFormGenerationTool_1.PatternflyFormConfig({}), null, 4)
    );
  });
});
//# sourceMappingURL=storeFormAsset.test.js.map

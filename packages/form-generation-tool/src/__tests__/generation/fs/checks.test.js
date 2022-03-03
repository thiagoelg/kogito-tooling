"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var fs_1 = require("../../../generation/fs");
var loadProjectSchemas_1 = require("../../../generation/fs/loadProjectSchemas");
jest.mock("fs");
describe("checks tests", function () {
  var mockFs = fs;
  var fsExistsSyncMock = jest.fn();
  var fsStatSyncMock = jest.fn();
  mockFs.existsSync.mockImplementation(fsExistsSyncMock);
  mockFs.statSync.mockImplementation(fsStatSyncMock);
  var sourcePath = "/a/test/path";
  beforeEach(function () {
    jest.clearAllMocks();
  });
  it("Check Project structure with invalid path", function () {
    fsExistsSyncMock.mockReturnValueOnce(false);
    expect(function () {
      return (0, fs_1.checkKogitoProjectStructure)(sourcePath);
    }).toThrowError(loadProjectSchemas_1.ERROR_INVALID_FOLDER);
  });
  it("Check Project structure not a directory", function () {
    fsExistsSyncMock.mockReturnValueOnce(true);
    fsStatSyncMock.mockReturnValueOnce({
      isDirectory: function () {
        return false;
      },
    });
    expect(function () {
      return (0, fs_1.checkKogitoProjectStructure)(sourcePath);
    }).toThrowError(loadProjectSchemas_1.ERROR_NOT_DIRECTORY);
  });
  it("Check Project structure not a mvn project", function () {
    fsExistsSyncMock.mockReturnValueOnce(true).mockReturnValueOnce(false);
    fsStatSyncMock.mockReturnValueOnce({
      isDirectory: function () {
        return true;
      },
    });
    expect(function () {
      return (0, fs_1.checkKogitoProjectStructure)(sourcePath);
    }).toThrowError(loadProjectSchemas_1.ERROR_NOT_MVN_PROJECT);
  });
  it("Check Project contains forms", function () {
    fsExistsSyncMock.mockReturnValueOnce(true);
    expect((0, fs_1.checkKogitoProjectHasForms)(sourcePath)).toBeTruthy();
  });
  it("Check Project does not contain forms", function () {
    fsExistsSyncMock.mockReturnValueOnce(false);
    expect((0, fs_1.checkKogitoProjectHasForms)(sourcePath)).toBeFalsy();
  });
});
//# sourceMappingURL=checks.test.js.map

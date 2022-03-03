"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeFormAsset =
  exports.getFormConfigAssetPath =
  exports.getFormAssetPath =
  exports.FORM_CONFIG_EXT =
  exports.FORM_STORAGE_FOLDER =
    void 0;
var fs_1 = require("fs");
var path_1 = require("path");
exports.FORM_STORAGE_FOLDER = "src/main/resources/forms";
exports.FORM_CONFIG_EXT = ".config";
function getFormsFolder(sourcePath) {
  return "".concat(sourcePath, "/").concat(exports.FORM_STORAGE_FOLDER);
}
function getFormAssetPath(sourcePath, formAsset) {
  return "".concat(getFormsFolder(sourcePath), "/").concat(formAsset);
}
exports.getFormAssetPath = getFormAssetPath;
function getFormConfigAssetPath(source, formAsset) {
  return getFormAssetPath(source, "".concat(formAsset.id).concat(exports.FORM_CONFIG_EXT));
}
exports.getFormConfigAssetPath = getFormConfigAssetPath;
function storeFormAsset(formAsset, source, overwriteExisting) {
  var storagePath = getFormsFolder(source);
  if (!fs_1.default.existsSync(storagePath)) {
    fs_1.default.mkdirSync(storagePath);
  }
  var existingFormAssets = fs_1.default.readdirSync(storagePath).filter(function (file) {
    var extension = path_1.default.extname(file);
    return path_1.default.basename(file, extension) === formAsset.id;
  });
  if (existingFormAssets.length > 0) {
    if (!overwriteExisting) {
      throw new Error("Form already exists.");
    }
    console.log('Form "'.concat(formAsset.id, '" already exists. Proceeding to overwrite it.'));
    existingFormAssets.forEach(function (file) {
      fs_1.default.rmSync(getFormAssetPath(source, file));
    });
  }
  fs_1.default.writeFileSync(getFormAssetPath(source, formAsset.assetName), formAsset.content);
  fs_1.default.writeFileSync(getFormConfigAssetPath(source, formAsset), JSON.stringify(formAsset.config, null, 4));
}
exports.storeFormAsset = storeFormAsset;
//# sourceMappingURL=storeFormAsset.js.map

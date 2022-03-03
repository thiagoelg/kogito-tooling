"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnumKeyByEnumValue = void 0;
var getEnumKeyByEnumValue = function (myEnum, enumValue) {
  var keys = Object.keys(myEnum).filter(function (x) {
    return myEnum[x] == enumValue;
  });
  return keys.length > 0 ? keys[0] : null;
};
exports.getEnumKeyByEnumValue = getEnumKeyByEnumValue;
//# sourceMappingURL=EnumUtils.js.map

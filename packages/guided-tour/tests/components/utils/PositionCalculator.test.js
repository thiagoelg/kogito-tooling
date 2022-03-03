"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@kie-tools-core/guided-tour/dist/components/utils");
describe("PositionCalculator", function () {
  describe("calculatePositionStyle", function () {
    var rect = {
      bottom: 60,
      height: 50,
      left: 20,
      right: 220,
      top: 10,
      width: 200,
      x: 20,
      y: 10,
    };
    it("returns position for when the position is 'right'", function () {
      expect((0, utils_1.calculatePositionStyle)("right", rect)).toEqual({
        left: 240,
        top: 10,
        transform: "rotate3d(0, 0, 0, 0deg)",
      });
    });
    it("returns position for when the position is 'left'", function () {
      expect((0, utils_1.calculatePositionStyle)("left", rect)).toEqual({
        left: 0,
        top: 10,
        transform: "translate(-100%, 0%)",
      });
    });
    it("returns position for when the position is 'bottom'", function () {
      expect((0, utils_1.calculatePositionStyle)("bottom", rect)).toEqual({
        left: 20,
        top: 80,
        transform: "rotate3d(0, 0, 0, 0deg)",
      });
    });
    it("returns position for when the position is a non-identified position", function () {
      expect((0, utils_1.calculatePositionStyle)("center", rect)).toEqual({
        left: "",
        top: "",
        transform: "translate(-50%, -50%)",
      });
    });
    it("returns position for when the rect is 'undefined'", function () {
      expect((0, utils_1.calculatePositionStyle)("center", undefined)).toEqual({
        left: "",
        top: "",
        transform: "translate(-50%, -50%)",
      });
    });
  });
});
//# sourceMappingURL=PositionCalculator.test.js.map

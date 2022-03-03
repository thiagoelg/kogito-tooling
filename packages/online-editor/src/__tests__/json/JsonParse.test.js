"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JsonParse_1 = require("../../json/JsonParse");
describe("utils::jsonParseWithDate", function () {
  it("should parse JSON strings with dates properly", function () {
    var myObject = {
      myNumber: 1,
      myString: "myValue",
      myBoolean: false,
      myUndefined: undefined,
      myObject: {
        myNumber: 2,
        myDate: Date.now(),
      },
      myDateOne: Date.now(),
      myDateTwo: new Date(Date.UTC(2021, 8, 18, 7, 59, 0, 0)),
      myDateThree: new Date(),
      myDateFour: new Date("August 18, 2021 07:59:00"),
      myDateFive: new Date("2021-08-18T07:59:00"),
      myDateSix: new Date(2021, 8, 18),
      myDateSeven: new Date(2021, 8, 18, 7, 59, 0),
    };
    var json = JSON.stringify(myObject);
    expect(JSON.parse(json)).not.toEqual(myObject);
    expect((0, JsonParse_1.jsonParseWithDate)(json)).toEqual(myObject);
  });
});
describe("utils::jsonParseWithUrl", function () {
  it("should parse JSON strings with URLs properly", function () {
    var myObject = {
      myNumber: 1,
      myString: "myValue",
      myBoolean: false,
      myUndefined: undefined,
      myDate: Date.now(),
      myObject: {
        myNumber: 2,
        myUrl: new URL("https://github.com/kiegroup/kie-tools"),
      },
      myUrlOne: new URL("https://www.example.com"),
      myUrlTwo: new URL("http://www.example.com/path/to/file.txt"),
      myUrlThree: new URL("https://www.example.com/path/to/file.txt?param1=value1&param2=value2"),
      myUrlFour: new URL("http://www.example.com/path/to/file.txt#anchor"),
      myUrlFive: new URL("https://www.example.com/path/to/file.txt?param1=value1&param2=value2#anchor"),
    };
    var json = JSON.stringify(myObject);
    expect(JSON.parse(json)).not.toEqual(myObject);
    expect((0, JsonParse_1.jsonParseWithUrl)(json)).toEqual(myObject);
  });
});
//# sourceMappingURL=JsonParse.test.js.map

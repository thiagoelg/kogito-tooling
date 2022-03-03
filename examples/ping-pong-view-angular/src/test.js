"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/testing");
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/platform-browser-dynamic/testing");
(0, testing_1.getTestBed)().initTestEnvironment(
  testing_2.BrowserDynamicTestingModule,
  (0, testing_2.platformBrowserDynamicTesting)()
);
var context = require.context("./", true, /\.spec\.ts$/);
context.keys().map(context);
//# sourceMappingURL=test.js.map

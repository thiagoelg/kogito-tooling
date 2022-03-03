import { ReferenceDictionary } from "@kie-tools-core/i18n/dist/core";
interface BackendDictionary extends ReferenceDictionary {
  dontShowAgain: string;
  installExtension: string;
  installBackendExtensionMessage: string;
  viewTestSummary: string;
  runningTestScenarios: string;
  testScenarioSummary: (tests: number, errors: number, skipped: number, failures: number) => string;
}
export interface BackendI18n extends BackendDictionary {}
export {};
//# sourceMappingURL=BackendI18n.d.ts.map

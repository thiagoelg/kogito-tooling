import { Capability, CapabilityResponse } from "../../../api";
import { TestResult } from "./TestResult";
export interface TestScenarioRunnerCapability extends Capability {
  execute(baseDir: string, runnerClass: string): Promise<CapabilityResponse<TestResult>>;
  stopActiveExecution(): void;
}
//# sourceMappingURL=TestScenarioRunnerCapability.d.ts.map

import { CapabilityResponse, Service } from "../api";
import { TestResult, TestScenarioRunnerCapability } from "../channel-api";
export declare class TestScenarioRunnerService implements Service, TestScenarioRunnerCapability {
  private activeProcess;
  identify(): string;
  start(): Promise<void>;
  stop(): void;
  satisfyRequirements(): Promise<boolean>;
  stopActiveExecution(): void;
  execute(baseDir: string, runnerClass: string): Promise<CapabilityResponse<TestResult>>;
}
//# sourceMappingURL=TestScenarioRunnerService.d.ts.map

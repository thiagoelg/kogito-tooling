import * as React from "react";
import { OpenShiftSettingsConfig } from "./OpenShiftSettingsConfig";
export declare const SW_JSON_EXTENSION = "sw.json";
export interface DeploymentWorkflow {
  name: string;
  content: string;
}
export interface OpenShiftContextType {
  deploy(config: OpenShiftSettingsConfig, workflow: DeploymentWorkflow): Promise<boolean>;
  fetchWorkflowRoute(config: OpenShiftSettingsConfig, resourceName: string): Promise<string | undefined>;
  fetchWorkflowName(config: OpenShiftSettingsConfig, resourceName: string): Promise<string | undefined>;
  fetchWorkflow(config: OpenShiftSettingsConfig, resourceName: string): Promise<DeploymentWorkflow | undefined>;
  fetchWorkflows(config: OpenShiftSettingsConfig): Promise<DeploymentWorkflow[]>;
}
export declare const OpenShiftContext: React.Context<OpenShiftContextType>;
export declare function useOpenShift(): OpenShiftContextType;
//# sourceMappingURL=OpenShiftContext.d.ts.map

import { DeploymentWorkflow } from "./OpenShiftContext";
import { OpenShiftSettingsConfig } from "./OpenShiftSettingsConfig";
import { Resource, ResourceFetch } from "./resources/Resource";
export declare const DEFAULT_CREATED_BY = "kie-tools-chrome-extension";
export declare class OpenShiftService {
  getWorkflowFileName(args: { config: OpenShiftSettingsConfig; resourceName: string }): Promise<string | undefined>;
  getDeploymentRoute(args: { config: OpenShiftSettingsConfig; resourceName: string }): Promise<string | undefined>;
  getResourceRouteMap(config: OpenShiftSettingsConfig): Promise<Map<string, string>>;
  private composeBaseUrl;
  deploy(args: { config: OpenShiftSettingsConfig; workflow: DeploymentWorkflow }): Promise<void>;
  fetchResource<T = Resource>(
    proxyUrl: string,
    target: ResourceFetch,
    rollbacks?: ResourceFetch[]
  ): Promise<Readonly<T>>;
  private generateRandomId;
}
//# sourceMappingURL=OpenShiftService.d.ts.map

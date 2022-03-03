import { OpenShiftDeployedModel } from "./OpenShiftDeployedModel";
import { Resource, ResourceFetch } from "./resources/Resource";
import { OpenShiftSettingsConfig } from "./OpenShiftSettingsConfig";
export declare const DEVELOPER_SANDBOX_URL = "https://developers.redhat.com/developer-sandbox";
export declare const DEVELOPER_SANDBOX_GET_STARTED_URL = "https://developers.redhat.com/developer-sandbox/get-started";
export declare const DEFAULT_CREATED_BY = "online-editor";
export declare class OpenShiftService {
  private readonly proxyUrl;
  private readonly RESOURCE_NAME_PREFIX;
  constructor(proxyUrl: string);
  isConnectionEstablished(config: OpenShiftSettingsConfig): Promise<boolean>;
  onCheckConfig(config: OpenShiftSettingsConfig): Promise<boolean>;
  loadDeployments(config: OpenShiftSettingsConfig): Promise<OpenShiftDeployedModel[]>;
  deploy(args: {
    targetFilePath: string;
    workspaceName: string;
    workspaceZipBlob: Blob;
    config: OpenShiftSettingsConfig;
    onlineEditorUrl: (baseUrl: string) => string;
  }): Promise<void>;
  fetchResource<T = Resource>(target: ResourceFetch, rollbacks?: ResourceFetch[]): Promise<Readonly<T>>;
  private generateRandomId;
  private composeBaseUrl;
  private extractDeploymentState;
  private extractDeploymentStateWithUploadStatus;
}
//# sourceMappingURL=OpenShiftService.d.ts.map

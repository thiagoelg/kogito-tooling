import { HttpMethod, Resource, ResourceArgs, ResourceFetch } from "./Resource";
export interface DeploymentCondition {
  type: string;
  status: "True" | "False" | "Unknown";
}
export interface Deployment extends Resource {
  status: {
    replicas?: number;
    readyReplicas?: number;
    conditions?: DeploymentCondition[];
  };
}
export interface Deployments {
  items: Deployment[];
}
export interface CreateDeploymentArgs {
  fileName: string;
}
export declare class CreateDeployment extends ResourceFetch {
  protected args: ResourceArgs & CreateDeploymentArgs;
  constructor(args: ResourceArgs & CreateDeploymentArgs);
  method(): HttpMethod;
  requestBody(): Promise<string | undefined>;
  name(): string;
  url(): string;
}
export declare class ListDeployments extends ResourceFetch {
  protected method(): HttpMethod;
  protected requestBody(): Promise<string | undefined>;
  name(): string;
  url(): string;
}
export declare class DeleteDeployment extends ResourceFetch {
  protected method(): HttpMethod;
  protected requestBody(): Promise<string | undefined>;
  name(): string;
  url(): string;
}
export declare class GetDeployment extends ResourceFetch {
  protected method(): HttpMethod;
  protected requestBody(): Promise<string | undefined>;
  name(): string;
  url(): string;
}
//# sourceMappingURL=Deployment.d.ts.map

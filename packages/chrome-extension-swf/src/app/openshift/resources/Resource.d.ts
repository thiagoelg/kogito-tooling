export interface ResourceArgs {
  host: string;
  namespace: string;
  token: string;
  resourceName?: string;
  createdBy?: string;
}
export interface Resource {
  metadata: {
    uid: string;
    name: string;
    labels: Record<string, string>;
    annotations: Record<string, string>;
    creationTimestamp: string;
    workspaceId: string;
  };
}
export declare type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
export declare const KOGITO_CREATED_BY = "kogito.kie.org/created-by";
export declare const KOGITO_WORKFLOW_FILE = "kogito.kie.org/workflow-file";
export declare const JAVA_RUNTIME_VERSION = "openjdk-11-el7";
export declare abstract class ResourceFetch {
  protected readonly args: ResourceArgs;
  constructor(args: ResourceArgs);
  protected abstract method(): HttpMethod;
  protected abstract requestBody(): Promise<string | undefined>;
  abstract name(): string;
  abstract url(): string;
  requestInit(): Promise<RequestInit>;
}
//# sourceMappingURL=Resource.d.ts.map

import { HttpMethod, ResourceArgs, ResourceFetch } from "./Resource";
export interface Build extends ResourceFetch {
  status: {
    phase: "New" | "Pending" | "Running" | "Complete" | "Failed" | "Error" | "Cancelled";
  };
}
export interface Builds {
  items: Build[];
}
export interface CreateBuildArgs {
  buildConfigUid: string;
  file: {
    name: string;
    content: string;
  };
}
export declare class CreateBuild extends ResourceFetch {
  protected args: ResourceArgs & CreateBuildArgs;
  private readonly BASE_IMAGE;
  private readonly KOGITO_FOLDER;
  private readonly PROJECT_FOLDER;
  private readonly PROJECT_MAIN_RESOURCES;
  private readonly PROJECT_METAINF_RESOURCES;
  private readonly QUARKUS_APP_FOLDER;
  private readonly DEPLOYMENTS_FOLDER;
  private readonly POM_PATH;
  private readonly MVNW_PATH;
  constructor(args: ResourceArgs & CreateBuildArgs);
  protected method(): HttpMethod;
  protected requestBody(): Promise<string | undefined>;
  name(): string;
  url(): string;
}
export declare class ListBuilds extends ResourceFetch {
  protected method(): HttpMethod;
  protected requestBody(): Promise<string | undefined>;
  name(): string;
  url(): string;
}
export declare class DeleteBuild extends ResourceFetch {
  protected method(): HttpMethod;
  protected requestBody(): Promise<string | undefined>;
  name(): string;
  url(): string;
}
//# sourceMappingURL=Build.d.ts.map

import { HttpMethod, ResourceFetch } from "./Resource";
export declare class CreateBuildConfig extends ResourceFetch {
  protected method(): HttpMethod;
  protected requestBody(): Promise<string | undefined>;
  name(): string;
  url(): string;
}
export declare class DeleteBuildConfig extends ResourceFetch {
  protected method(): HttpMethod;
  protected requestBody(): Promise<string | undefined>;
  name(): string;
  url(): string;
}
//# sourceMappingURL=BuildConfig.d.ts.map

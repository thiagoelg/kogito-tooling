import { HttpMethod, ResourceFetch } from "./Resource";
export declare class CreateService extends ResourceFetch {
  protected method(): HttpMethod;
  protected requestBody(): Promise<string | undefined>;
  name(): string;
  url(): string;
}
export declare class DeleteService extends ResourceFetch {
  protected method(): HttpMethod;
  protected requestBody(): Promise<string | undefined>;
  name(): string;
  url(): string;
}
//# sourceMappingURL=Service.d.ts.map

import { HttpMethod, ResourceFetch } from "./Resource";
export declare class GetProject extends ResourceFetch {
  protected method(): HttpMethod;
  protected requestBody(): Promise<string | undefined>;
  name(): string;
  url(): string;
}
//# sourceMappingURL=Project.d.ts.map

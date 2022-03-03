import { HttpMethod, Resource, ResourceFetch } from "./Resource";
export interface Route extends Resource {
  spec: {
    host: string;
  };
}
export interface Routes {
  items: Route[];
}
export declare class CreateRoute extends ResourceFetch {
  protected method(): HttpMethod;
  protected requestBody(): Promise<string | undefined>;
  name(): string;
  url(): string;
}
export declare class ListRoutes extends ResourceFetch {
  protected method(): HttpMethod;
  protected requestBody(): Promise<string | undefined>;
  name(): string;
  url(): string;
}
export declare class DeleteRoute extends ResourceFetch {
  protected method(): HttpMethod;
  protected requestBody(): Promise<string | undefined>;
  name(): string;
  url(): string;
}
//# sourceMappingURL=Route.d.ts.map

import { HttpMethod, Resource, ResourceArgs, ResourceFetch } from "./Resource";
export interface Route extends Resource {
  spec: {
    host: string;
  };
}
export interface Routes {
  items: Route[];
}
export interface GetRouteArgs {
  resourceName: string;
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
export declare class GetRoute extends ResourceFetch {
  protected args: ResourceArgs & GetRouteArgs;
  constructor(args: ResourceArgs & GetRouteArgs);
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

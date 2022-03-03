export declare enum QueryParams {}
export declare enum PathParams {
  EXTENSION = "extension",
  FILE_PATH = "filePath",
  MODEL_NAME = "modelName",
}
export declare class Route<
  T extends {
    pathParams?: any;
    queryParams?: any;
  }
> {
  private readonly pathDelegate;
  constructor(
    pathDelegate: (
      pathParams: {
        [k in T["pathParams"]]: string;
      }
    ) => string
  );
  url(args: {
    base?: string;
    pathParams: {
      [k in T["pathParams"]]: string;
    };
    queryParams?: Partial<
      {
        [k in T["queryParams"]]: string;
      }
    >;
  }): string;
  queryString(
    queryParams: Partial<
      {
        [k in T["queryParams"]]: string;
      }
    >
  ): string;
  queryArgs(queryString: QueryParamsImpl<string>): QueryParamsImpl<T["queryParams"]>;
  path(
    pathParams: {
      [k in T["pathParams"]]: string;
    }
  ): string;
}
export interface QueryParamsImpl<Q extends string> {
  has(name: Q): boolean;
  get(name: Q): string | undefined;
  with(name: Q, value: string): QueryParamsImpl<Q>;
  without(name: Q): QueryParamsImpl<Q>;
  toString(): string;
}
export declare function newQueryParamsImpl<Q extends string>(queryString: string): QueryParamsImpl<Q>;
export declare const routes: {
  root: Route<{}>;
  error: Route<{}>;
  dataJson: Route<{}>;
  swaggerUi: Route<{}>;
  dmnResult: Route<{
    pathParams: PathParams.MODEL_NAME;
  }>;
  form: Route<{
    pathParams: PathParams.FILE_PATH;
  }>;
  model: Route<{
    pathParams: PathParams.FILE_PATH;
  }>;
  static: {
    images: {
      kieHorizontalLogoReverse: Route<{}>;
    };
  };
};
//# sourceMappingURL=Routes.d.ts.map

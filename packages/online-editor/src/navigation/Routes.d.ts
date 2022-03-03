export declare enum QueryParams {
  SETTINGS = "settings",
  URL = "url",
  BRANCH = "branch",
  DMN_RUNNER_FORM_INPUTS = "formInputs",
  EXPAND = "expand",
}
export declare enum PathParams {
  EXTENSION = "extension",
  WORKSPACE_ID = "workspaceId",
  FILE_RELATIVE_PATH = "fileRelativePath",
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
  download: Route<{}>;
  home: Route<{
    queryParams: QueryParams.EXPAND;
  }>;
  editor: Route<{
    pathParams: PathParams.EXTENSION;
    queryParams: QueryParams.URL | QueryParams.SETTINGS | QueryParams.DMN_RUNNER_FORM_INPUTS;
  }>;
  newModel: Route<{
    pathParams: PathParams.EXTENSION;
  }>;
  importModel: Route<{
    queryParams: QueryParams.URL | QueryParams.DMN_RUNNER_FORM_INPUTS | QueryParams.BRANCH;
  }>;
  workspaceWithFilePath: Route<{
    pathParams: PathParams.WORKSPACE_ID | PathParams.FILE_RELATIVE_PATH | PathParams.EXTENSION;
  }>;
  static: {
    sample: Route<{
      pathParams: "type";
    }>;
    images: {
      vscodeLogoBlue: Route<{}>;
      vscodeLogoWhite: Route<{}>;
      kogitoLogoWhite: Route<{}>;
      kieHorizontalLogoReverse: Route<{}>;
      dmnRunnerGif: Route<{}>;
      dmnDevSandboxGif: Route<{}>;
    };
  };
};
//# sourceMappingURL=Routes.d.ts.map

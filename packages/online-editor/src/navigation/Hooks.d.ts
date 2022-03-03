import { BlockerDelegate } from "./NavigationContextProvider";
export declare function useNavigationStatus(): import("./NavigationContextProvider").NavigationStatus &
  import("./NavigationContextProvider").NavigationStatusHelpers;
export declare function useNavigationBlockersBypass(): {
  execute: (callback: () => void) => void;
};
export declare function useNavigationStatusToggle(): {
  unblock: () => void;
};
export declare function useNavigationBlocker(key: string, blocker: BlockerDelegate): void;
export declare function useRoutes(): {
  download: import("./Routes").Route<{}>;
  home: import("./Routes").Route<{
    queryParams: import("./Routes").QueryParams.EXPAND;
  }>;
  editor: import("./Routes").Route<{
    pathParams: import("./Routes").PathParams.EXTENSION;
    queryParams:
      | import("./Routes").QueryParams.SETTINGS
      | import("./Routes").QueryParams.URL
      | import("./Routes").QueryParams.DMN_RUNNER_FORM_INPUTS;
  }>;
  newModel: import("./Routes").Route<{
    pathParams: import("./Routes").PathParams.EXTENSION;
  }>;
  importModel: import("./Routes").Route<{
    queryParams:
      | import("./Routes").QueryParams.URL
      | import("./Routes").QueryParams.BRANCH
      | import("./Routes").QueryParams.DMN_RUNNER_FORM_INPUTS;
  }>;
  workspaceWithFilePath: import("./Routes").Route<{
    pathParams: import("./Routes").PathParams;
  }>;
  static: {
    sample: import("./Routes").Route<{
      pathParams: "type";
    }>;
    images: {
      vscodeLogoBlue: import("./Routes").Route<{}>;
      vscodeLogoWhite: import("./Routes").Route<{}>;
      kogitoLogoWhite: import("./Routes").Route<{}>;
      kieHorizontalLogoReverse: import("./Routes").Route<{}>;
      dmnRunnerGif: import("./Routes").Route<{}>;
      dmnDevSandboxGif: import("./Routes").Route<{}>;
    };
  };
};
//# sourceMappingURL=Hooks.d.ts.map

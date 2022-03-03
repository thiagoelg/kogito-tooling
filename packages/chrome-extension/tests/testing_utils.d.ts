/// <reference types="jest" />
import * as React from "react";
import { GlobalContextType } from "@kie-tools-core/chrome-extension/dist/app/components/common/GlobalContext";
import { GitHubContextType } from "@kie-tools-core/chrome-extension/dist/app/components/common/GitHubContext";
import { I18nDictionariesProviderProps } from "@kie-tools-core/i18n/dist/react-components";
import { ChromeExtensionI18n } from "@kie-tools-core/chrome-extension/dist/app/i18n";
export declare function usingTestingGlobalContext(
  children: React.ReactElement,
  ctx?: Partial<GlobalContextType>
): {
  ctx: GlobalContextType;
  wrapper: JSX.Element;
};
export declare function usingTestingGitHubContext(
  children: React.ReactElement,
  ctx?: Pick<GitHubContextType, keyof GitHubContextType>
): {
  ctx: {
    token: string;
    setToken: jest.Mock<any, any> | ((token: string) => void);
    octokit:
      | jest.Mock<any, any>
      | (() => import("@octokit/core").Octokit &
          void & {
            paginate: import("@octokit/plugin-paginate-rest").PaginateInterface;
          } & import("@octokit/plugin-rest-endpoint-methods/dist-types/generated/method-types").RestEndpointMethods &
          import("@octokit/plugin-rest-endpoint-methods/dist-types/types").Api);
    userIsLoggedIn: jest.Mock<boolean, []> | (() => boolean);
  };
  wrapper: JSX.Element;
};
export declare function usingTestingChromeExtensionI18nContext(
  children: React.ReactElement,
  ctx?: Partial<I18nDictionariesProviderProps<ChromeExtensionI18n>>
): {
  ctx: I18nDictionariesProviderProps<ChromeExtensionI18n>;
  wrapper: JSX.Element;
};
//# sourceMappingURL=testing_utils.d.ts.map

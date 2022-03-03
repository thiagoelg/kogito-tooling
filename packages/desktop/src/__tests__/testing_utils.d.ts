import * as React from "react";
import { GlobalContextType } from "../webview/common/GlobalContext";
import { I18nDictionariesProviderProps } from "@kie-tools-core/i18n/dist/react-components";
import { DesktopI18n } from "../webview/common/i18n";
export declare function usingTestingGlobalContext(
  children: React.ReactElement,
  ctx?: Partial<GlobalContextType>
): {
  ctx: GlobalContextType;
  wrapper: JSX.Element;
};
export declare function usingTestingDesktopI18nContext(
  children: React.ReactElement,
  ctx?: Partial<I18nDictionariesProviderProps<DesktopI18n>>
): {
  ctx: I18nDictionariesProviderProps<DesktopI18n>;
  wrapper: JSX.Element;
};
//# sourceMappingURL=testing_utils.d.ts.map

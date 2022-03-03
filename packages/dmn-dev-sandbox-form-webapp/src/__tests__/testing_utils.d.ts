import { I18nDictionariesProviderProps } from "@kie-tools-core/i18n/dist/react-components";
import * as React from "react";
import { AppContextType } from "../AppContext";
import { DmnFormI18n } from "../i18n";
export declare function usingTestingDmnFormI18nContext(
  children: React.ReactElement,
  ctx?: Partial<I18nDictionariesProviderProps<DmnFormI18n>>
): {
  ctx: I18nDictionariesProviderProps<DmnFormI18n>;
  wrapper: JSX.Element;
};
export declare function usingTestingAppContext(
  children: React.ReactElement,
  ctx?: Partial<AppContextType>
): {
  ctx: AppContextType;
  wrapper: JSX.Element;
};
//# sourceMappingURL=testing_utils.d.ts.map

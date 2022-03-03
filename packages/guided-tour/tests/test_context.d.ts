import * as React from "react";
import { CurrentTutorialContextType } from "@kie-tools-core/guided-tour/dist/contexts";
import { I18nDictionariesProviderProps } from "@kie-tools-core/i18n/dist/react-components";
import { GuidedTourI18n } from "@kie-tools-core/guided-tour/dist/i18n";
export declare function usingCurrentTutorialContext(
  children: React.ReactElement,
  ctx?: Partial<CurrentTutorialContextType>
): {
  ctx: CurrentTutorialContextType;
  wrapper: JSX.Element;
};
export declare function usingTestingGuidedTourI18nContext(
  children: React.ReactElement,
  ctx?: Partial<I18nDictionariesProviderProps<GuidedTourI18n>>
): {
  ctx: I18nDictionariesProviderProps<GuidedTourI18n>;
  wrapper: JSX.Element;
};
//# sourceMappingURL=test_context.d.ts.map

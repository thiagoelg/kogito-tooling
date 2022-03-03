import * as React from "react";
import { I18nContextType } from "@kie-tools-core/i18n/dist/react-components";
import { OnlineI18n } from "./OnlineI18n";
import { I18nDefaults, I18nDictionaries } from "@kie-tools-core/i18n/dist/core";
export declare const onlineI18nDefaults: I18nDefaults<OnlineI18n>;
export declare const onlineI18nDictionaries: I18nDictionaries<OnlineI18n>;
export declare const OnlineI18nContext: React.Context<I18nContextType<OnlineI18n>>;
export declare function OnlineI18nContextProvider(props: { children: any }): JSX.Element;
export declare function useOnlineI18n(): I18nContextType<OnlineI18n>;
//# sourceMappingURL=setup.d.ts.map

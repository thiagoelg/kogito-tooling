import * as React from "react";
import { I18nDefaults, I18nDictionaries, ReferenceDictionary } from "../core";
import { I18nContextType } from "./I18nContext";
export interface I18nDictionariesProviderProps<D extends ReferenceDictionary> {
  defaults: I18nDefaults<D>;
  dictionaries: I18nDictionaries<D>;
  initialLocale?: string;
  ctx: React.Context<I18nContextType<D>>;
  children: React.ReactNode;
}
export declare const I18nDictionariesProvider: <D extends ReferenceDictionary>(
  props: I18nDictionariesProviderProps<D>
) => JSX.Element;
//# sourceMappingURL=I18nDictionariesProvider.d.ts.map

import { I18nDefaults, I18nDictionaries, ReferenceDictionary } from "./Dictionary";
export declare class I18n<D extends ReferenceDictionary> {
  private readonly defaults;
  private readonly dictionaries;
  private readonly initialLocale;
  private locale;
  private dictionary;
  constructor(defaults: I18nDefaults<D>, dictionaries: I18nDictionaries<D>, initialLocale?: string);
  setLocale(locale: string): void;
  private updateDictionary;
  getCurrent(): D;
  getLocale(): string;
}
//# sourceMappingURL=I18n.d.ts.map

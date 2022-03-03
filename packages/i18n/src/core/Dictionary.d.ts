import { Wrapped } from "./Wrapped";
export interface I18nDefaults<D extends ReferenceDictionary> {
  locale: string;
  dictionary: D;
}
export declare type I18nDictionaries<D extends ReferenceDictionary> = Map<string, TranslatedDictionary<D>>;
export declare type DictionaryInterpolation = (...args: Array<string | number>) => string;
export declare type ReferenceDictionary = {
  [k: string]: string | DictionaryInterpolation | Array<string | number | Wrapped<string>> | ReferenceDictionary;
};
export declare type TranslatedDictionary<D extends ReferenceDictionary> = DeepOptional<D>;
declare type DeepOptional<D> = {
  [K in keyof D]?: DeepOptional<D[K]>;
};
export {};
//# sourceMappingURL=Dictionary.d.ts.map

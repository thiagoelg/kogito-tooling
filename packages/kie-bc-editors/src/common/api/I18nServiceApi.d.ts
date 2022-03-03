export interface I18nServiceApi {
  onLocaleChange(callback: (locale: string) => void): void;
  getLocale(): Promise<string>;
}
//# sourceMappingURL=I18nServiceApi.d.ts.map

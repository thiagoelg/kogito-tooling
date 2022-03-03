export declare class I18nService {
  private readonly onLocaleChangeSubscriptions;
  constructor(onLocaleChangeSubscriptions?: Array<(locale: string) => void>);
  executeOnLocaleChangeSubscriptions(locale: string): void;
  subscribeToLocaleChange(onLocaleChange: (locale: string) => void): (locale: string) => void;
  unsubscribeToLocaleChange(onLocaleChange: (locale: string) => void): void;
}
//# sourceMappingURL=I18nService.d.ts.map

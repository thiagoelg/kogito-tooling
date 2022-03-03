import * as React from "react";
import { ReferenceDictionary } from "../core";
export interface I18nContextType<D extends ReferenceDictionary> {
  locale: string;
  setLocale: React.Dispatch<string>;
  i18n: D;
}
//# sourceMappingURL=I18nContext.d.ts.map

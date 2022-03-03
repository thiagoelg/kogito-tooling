import * as React from "react";
import { DictionaryInterpolation, ReferenceDictionary } from "@kie-tools-core/i18n/dist/core/Dictionary";
import { I18nContextType } from "@kie-tools-core/i18n/dist/react-components";
export interface DummyDictionary extends ReferenceDictionary {
  greeting: (name: string) => string;
  welcome: string;
  modal: {
    title: string;
    text: string;
  };
}
export declare const interpolationFunction: DictionaryInterpolation;
export declare const dummyDefault: DummyDictionary;
export declare const DummyContext: React.Context<I18nContextType<DummyDictionary>>;
export declare function DummyComponent(): JSX.Element;
//# sourceMappingURL=utils.d.ts.map

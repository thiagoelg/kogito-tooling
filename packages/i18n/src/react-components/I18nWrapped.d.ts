import * as React from "react";
import { ExtractWrappedComponentNames, Wrapped } from "../core";
declare type Components<Component extends Wrapped<string>> = {
  [K in ExtractWrappedComponentNames<Component>]: React.ReactNode;
};
interface ComponentChildren<Component> {
  [x: number]: string | number | Component;
}
interface Children {
  [x: number]: string | number;
}
interface Props<Component> {
  components: Component extends Wrapped<string> ? Components<Component> : undefined;
  children: Component extends Wrapped<string> ? ComponentChildren<Component> : Children;
}
export declare function I18nWrapped<Component>(props: Props<Component>): JSX.Element;
export {};
//# sourceMappingURL=I18nWrapped.d.ts.map

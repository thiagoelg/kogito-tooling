import * as React from "react";
import { Location, LocationDescriptorObject } from "history";
export declare type BlockerDelegate = (args: { location: Location }) => boolean;
export interface NavigationBlockerContextType {
  addBlocker: (name: string, blocker: BlockerDelegate) => void;
  removeBlocker: (name: string) => void;
  block: (location: Location) => void;
  unblock: () => void;
  bypass: (callback: () => void) => void;
}
export interface NavigationStatus {
  blockers: Map<string, BlockerDelegate>;
  lastBlockedLocation: Location | undefined;
  bypassBlockers: boolean;
}
export interface NavigationStatusHelpers {
  shouldBlockNavigationTo: (location: LocationDescriptorObject) => boolean;
}
export declare const NavigationBlockerContext: React.Context<NavigationBlockerContextType>;
export declare const NavigationStatusContext: React.Context<NavigationStatus & NavigationStatusHelpers>;
export declare function NavigationContextProvider(props: { children: React.ReactNode }): JSX.Element;
//# sourceMappingURL=NavigationContextProvider.d.ts.map

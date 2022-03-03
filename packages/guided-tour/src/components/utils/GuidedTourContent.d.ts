import * as React from "react";
import { Step } from "../../api";
export declare const StepDialog: (
  content: React.ReactNode | ((props: object) => React.ReactNode),
  onCloseAction: () => void
) => () => JSX.Element;
export declare const NegativeReinforcementDialog: (
  step: Step | undefined,
  onCloseAction: () => void
) => () => JSX.Element;
export declare const EmptyDialog: (onCloseAction: () => void) => () => JSX.Element;
//# sourceMappingURL=GuidedTourContent.d.ts.map

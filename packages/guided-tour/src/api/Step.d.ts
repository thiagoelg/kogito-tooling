/// <reference types="react" />
import { Mode } from ".";
export declare class Step {
  mode: Mode;
  content?:
    | import("react").ReactNode
    | ((props: { dismiss?: () => void; nextStep?: () => void; prevStep?: () => void }) => React.ReactNode);
  selector?: string | undefined;
  highlightEnabled?: boolean | undefined;
  navigatorEnabled?: boolean | undefined;
  position?: "center" | "left" | "right" | "bottom" | undefined;
  negativeReinforcementMessage?: string | undefined;
  constructor(
    mode: Mode,
    content?:
      | import("react").ReactNode
      | ((props: { dismiss?: () => void; nextStep?: () => void; prevStep?: () => void }) => React.ReactNode),
    selector?: string | undefined,
    highlightEnabled?: boolean | undefined,
    navigatorEnabled?: boolean | undefined,
    position?: "center" | "left" | "right" | "bottom" | undefined,
    negativeReinforcementMessage?: string | undefined
  );
}
export declare const NONE: Step;
//# sourceMappingURL=Step.d.ts.map

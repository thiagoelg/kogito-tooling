import "./HitPolicySelector.css";
import { BuiltinAggregation, HitPolicy } from "../../api";
import * as React from "react";
export interface HitPolicySelectorProps {
  selectedHitPolicy: HitPolicy;
  selectedBuiltInAggregator: BuiltinAggregation;
  onHitPolicySelect: (hitPolicy: HitPolicy) => void;
  onBuiltInAggregatorSelect: (builtInAggregator: BuiltinAggregation) => void;
}
export declare const HitPolicySelector: React.FunctionComponent<HitPolicySelectorProps>;
//# sourceMappingURL=HitPolicySelector.d.ts.map

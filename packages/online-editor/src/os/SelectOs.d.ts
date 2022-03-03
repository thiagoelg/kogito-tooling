import { SelectDirection } from "@patternfly/react-core/dist/js/components/Select";
import * as React from "react";
import { OperatingSystem } from "@kie-tools-core/operating-system";
import { OnlineI18n } from "../i18n";
interface Props {
  i18n?: OnlineI18n;
  direction: SelectDirection;
  className?: string;
  selected: OperatingSystem;
  onSelect: React.Dispatch<OperatingSystem>;
}
export declare type SelectOsRef = {
  getOperationalSystem: () => OperatingSystem;
} | null;
export declare function SelectOs(props: Props): JSX.Element;
export {};
//# sourceMappingURL=SelectOs.d.ts.map

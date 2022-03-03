import React from "react";
import { DropdownProps } from "@patternfly/react-core/dist/js/components/Dropdown";
import { Breakpoint } from "./hooks";
export interface ResponsiveDropdownProps extends DropdownProps {
  dropdownItems?: React.ReactNode[];
  switchingBreakpoint?: Breakpoint;
  onClose?: () => void;
  title: string;
}
export declare function ResponsiveDropdown(props: ResponsiveDropdownProps): JSX.Element;
//# sourceMappingURL=ResponsiveDropdown.d.ts.map

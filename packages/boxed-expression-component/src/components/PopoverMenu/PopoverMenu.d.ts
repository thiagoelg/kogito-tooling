import * as React from "react";
import "./PopoverMenu.css";
export interface PopoverMenuProps {
  children?: React.ReactElement;
  title: string;
  arrowPlacement?: () => HTMLElement;
  body: React.ReactNode;
  appendTo?: HTMLElement | ((ref?: HTMLElement) => HTMLElement);
  className?: string;
  hasAutoWidth?: boolean;
  minWidth?: string;
}
export declare const PopoverMenu: React.FunctionComponent<PopoverMenuProps>;
//# sourceMappingURL=PopoverMenu.d.ts.map

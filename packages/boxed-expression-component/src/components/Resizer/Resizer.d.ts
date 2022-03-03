import * as React from "react";
import "./Resizer.css";
export interface ResizerProps {
  width: number;
  height?: number | "100%";
  minWidth?: number;
  onHorizontalResizeStop?: (width: number) => void;
  children?: React.ReactElement;
}
export declare const Resizer: React.FunctionComponent<ResizerProps>;
//# sourceMappingURL=Resizer.d.ts.map

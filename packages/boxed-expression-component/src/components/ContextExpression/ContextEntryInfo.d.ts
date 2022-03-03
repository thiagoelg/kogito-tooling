import "./ContextEntryInfo.css";
import * as React from "react";
import { DataType } from "../../api";
export interface ContextEntryInfoProps {
  id: string;
  name: string;
  dataType: DataType;
  onContextEntryUpdate: (name: string, dataType: DataType) => void;
  editInfoPopoverLabel?: string;
}
export declare const ContextEntryInfo: React.FunctionComponent<ContextEntryInfoProps>;
//# sourceMappingURL=ContextEntryInfo.d.ts.map

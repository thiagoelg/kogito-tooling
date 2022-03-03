import * as React from "react";
import { DataType } from "../../api";
export interface DataTypeSelectorProps {
  selectedDataType: DataType;
  onDataTypeChange: (dataType: DataType) => void;
  menuAppendTo?: HTMLElement | "inline" | (() => HTMLElement) | "parent";
}
export declare const DataTypeSelector: React.FunctionComponent<DataTypeSelectorProps>;
//# sourceMappingURL=DataTypeSelector.d.ts.map

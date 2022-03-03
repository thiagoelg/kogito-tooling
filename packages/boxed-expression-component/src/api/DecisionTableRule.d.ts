import { DataType } from "./DataType";
export interface Clause {
  id: string;
  name: string;
  dataType: DataType;
  width?: number | string;
}
export interface Annotation {
  id: string;
  name: string;
  width?: number | string;
}
export interface DecisionTableRule {
  id: string;
  inputEntries: string[];
  outputEntries: string[];
  annotationEntries: string[];
}
//# sourceMappingURL=DecisionTableRule.d.ts.map

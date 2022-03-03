import "./EditParameters.css";
import * as React from "react";
import { EntryInfo } from "../../api";
export interface EditParametersProps {
  parameters: EntryInfo[];
  setParameters: React.Dispatch<React.SetStateAction<EntryInfo[]>>;
}
export declare const EditParameters: React.FunctionComponent<EditParametersProps>;
//# sourceMappingURL=EditParameters.d.ts.map

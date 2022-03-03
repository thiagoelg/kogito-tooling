import * as React from "react";
import { DecisionResult } from "@kie-tools/form/dist/dmn";
import { PanelId } from "../EditorPageDockDrawer";
interface Props {
  isReady?: boolean;
  setPanelOpen: React.Dispatch<React.SetStateAction<PanelId>>;
  dmnRunnerResults: Array<DecisionResult[] | undefined>;
  setDmnRunnerResults: React.Dispatch<React.SetStateAction<Array<DecisionResult[] | undefined>>>;
}
export declare function DmnRunnerTabular(props: Props): JSX.Element;
export {};
//# sourceMappingURL=DmnRunnerTabular.d.ts.map

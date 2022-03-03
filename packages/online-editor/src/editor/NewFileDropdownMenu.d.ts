/// <reference types="react" />
import { WorkspaceFile } from "../workspace/WorkspacesContext";
import { AlertsController } from "../alerts/Alerts";
export declare function NewFileDropdownMenu(props: {
  alerts: AlertsController | undefined;
  destinationDirPath: string;
  workspaceId: string;
  onAddFile: (file?: WorkspaceFile) => Promise<void>;
}): JSX.Element;
//# sourceMappingURL=NewFileDropdownMenu.d.ts.map

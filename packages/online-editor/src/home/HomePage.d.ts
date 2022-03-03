/// <reference types="react" />
import { SupportedFileExtensions } from "../envelopeLocator/EditorEnvelopeLocatorContext";
import { WorkspaceFile } from "../workspace/WorkspacesContext";
import { WorkspaceDescriptor } from "../workspace/model/WorkspaceDescriptor";
export declare function HomePage(): JSX.Element;
export declare function WorkspaceLoadingCard(): JSX.Element;
export declare function WorkspaceCardError(props: { workspace: WorkspaceDescriptor }): JSX.Element;
export declare function WorkspaceCard(props: {
  workspaceId: string;
  isSelected: boolean;
  onSelect: () => void;
}): JSX.Element;
export declare function NewModelCard(props: {
  title: string;
  extension: SupportedFileExtensions;
  description: string;
}): JSX.Element;
export declare function WorkspacesListDrawerPanelContent(props: {
  workspaceId: string | undefined;
  onClose: () => void;
}): JSX.Element;
export declare function FileDataListItem(props: { file: WorkspaceFile }): JSX.Element;
//# sourceMappingURL=HomePage.d.ts.map

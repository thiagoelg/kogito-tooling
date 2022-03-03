import { Globals } from "../common/Main";
export interface FileInfo {
  repo: string;
  org: string;
  path: string;
  gitRef: string;
}
export declare function renderSingleEditorReadonlyApp(
  args: Globals & {
    fileInfo: FileInfo;
  }
): void;
//# sourceMappingURL=singleEditorView.d.ts.map

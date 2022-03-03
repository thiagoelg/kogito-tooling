/// <reference types="react" />
import { FileInfo } from "./singleEditorView";
export declare function SingleEditorApp(props: {
  openFileExtension: string;
  readonly: boolean;
  getFileName: () => string;
  getFileContents: () => Promise<string | undefined>;
  toolbarContainer: HTMLElement;
  iframeContainer: HTMLElement;
  githubTextEditorToReplace: HTMLElement;
  fileInfo: FileInfo;
}): JSX.Element;
//# sourceMappingURL=SingleEditorApp.d.ts.map

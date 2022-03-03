/// <reference types="react" />
export interface PrInfo {
  repo: string;
  targetOrg: string;
  targetGitRef: string;
  org: string;
  gitRef: string;
}
export declare function IsolatedPrEditor(props: {
  prInfo: PrInfo;
  prFileContainer: HTMLElement;
  fileExtension: string;
  contentPath: string;
  githubTextEditorToReplace: HTMLElement;
  unprocessedFilePath: string;
}): JSX.Element;
export declare function getOriginalFilePath(path: string): string;
export declare function getModifiedFilePath(path: string): string;
//# sourceMappingURL=IsolatedPrEditor.d.ts.map

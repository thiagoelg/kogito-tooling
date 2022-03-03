export declare class Dependencies {
  readonly singleEdit: {
    iframeContainerTarget: () => HTMLElement | null;
    toolbarContainerTarget: () => HTMLElement | null;
    githubTextEditorToReplaceElement: () => HTMLElement | null;
  };
  readonly singleView: {
    iframeContainerTarget: () => HTMLElement | null;
    toolbarContainerTarget: () => HTMLElement | null;
    githubTextEditorToReplaceElement: () => HTMLElement | null;
  };
  readonly prView: {
    iframeContainerTarget: (container: HTMLElement) => HTMLElement | null;
    toolbarContainerTarget: (container: HTMLElement) => HTMLElement | null;
    githubTextEditorToReplaceElement: (container: HTMLElement) => HTMLElement | null;
  };
  readonly openRepoInExternalEditor: {
    buttonContainerOnRepoFilesList: () => HTMLElement | null;
    buttonContainerOnPrs: () => HTMLElement | null;
  };
  readonly all: {
    notificationIndicator: () => HTMLElement | null;
    body: () => HTMLElement;
    edit__githubFileNameInput: () => HTMLInputElement | null;
    edit__githubTextAreaWithFileContents: () => HTMLTextAreaElement | null;
    pr__mutationObserverTarget: () => HTMLElement | null;
    pr__openWithExternalEditorLinkContainer: (container: HTMLElement) => HTMLAnchorElement | null;
    pr__viewOriginalFileLinkContainer: (container: HTMLElement) => HTMLAnchorElement | null;
    pr__unprocessedFilePathContainer: (container: HTMLElement) => HTMLAnchorElement | null;
    array: {
      pr__supportedPrFileContainers: () => HTMLElement[] | null;
      pr__prInfoContainer: () => HTMLElement[] | null;
    };
  };
}
//# sourceMappingURL=Dependencies.d.ts.map

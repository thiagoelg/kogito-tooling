export interface ExternalEditorManager {
  name: string;
  open?: (filePath: string, fileContent: string, readonly: boolean) => void;
  getImportRepoUrl?: (repoUrl: string) => string;
  getLink?: (filePath: string) => string;
}
//# sourceMappingURL=ExternalEditorManager.d.ts.map

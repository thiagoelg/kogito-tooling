export interface EmbeddedEditorFile {
  fileName: string;
  fileExtension: string;
  getFileContents: () => Promise<string | undefined>;
  isReadOnly: boolean;
  path?: string;
}
//# sourceMappingURL=EmbeddedEditorFile.d.ts.map

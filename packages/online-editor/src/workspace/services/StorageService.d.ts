import KieSandboxFs from "@kie-tools/kie-sandbox-fs";
export declare class EagerStorageFile {
  private readonly args;
  constructor(args: { path: string; content: Uint8Array });
  get path(): string;
  get content(): Uint8Array;
}
export declare class StorageFile {
  private readonly args;
  constructor(args: { path: string; getFileContents: () => Promise<Uint8Array> });
  get path(): string;
  get getFileContents(): () => Promise<Uint8Array>;
}
export declare class StorageService {
  createOrOverwriteFile(fs: KieSandboxFs, file: StorageFile): Promise<void>;
  createFiles(fs: KieSandboxFs, files: StorageFile[]): Promise<void>;
  updateFile(fs: KieSandboxFs, file: StorageFile): Promise<void>;
  deleteFile(fs: KieSandboxFs, path: string): Promise<void>;
  renameFile(fs: KieSandboxFs, file: StorageFile, newFileName: string): Promise<StorageFile>;
  moveFile(fs: KieSandboxFs, file: StorageFile, newDirPath: string): Promise<StorageFile>;
  moveFiles(fs: KieSandboxFs, files: StorageFile[], newDirPath: string): Promise<Map<string, string>>;
  getFile(fs: KieSandboxFs, path: string): Promise<StorageFile | undefined>;
  getFiles(fs: KieSandboxFs, paths: string[]): Promise<EagerStorageFile[]>;
  mkdirDeep(fs: KieSandboxFs, dirPath: string, _selfCall?: boolean): Promise<void>;
  exists(fs: KieSandboxFs, path: string): Promise<boolean>;
  walk<T = string>(args: {
    fs: KieSandboxFs;
    startFromDirPath: string;
    shouldExcludeDir: (dirPath: string) => boolean;
    onVisit: (args: { absolutePath: string; relativePath: string }) => Promise<T | undefined>;
    originalStartingDirPath?: string;
  }): Promise<T[]>;
  deleteFiles(fs: KieSandboxFs, paths: string[]): Promise<void>;
}
//# sourceMappingURL=StorageService.d.ts.map

import DexieBackend from "@kie-tools/kie-sandbox-fs/dist/DexieBackend";
export declare class InMemoryBackend {
  readonly dexieBackend: DexieBackend;
  fs: Map<string, any>;
  constructor(dexieBackend: DexieBackend, fs?: Map<string, any>);
  saveSuperblock(superblock: any): Promise<void>;
  loadSuperblock(): Promise<any>;
  readFile(inode: string): Promise<any>;
  writeFile(inode: string, data: any): Promise<void>;
  unlink(inode: string): Promise<void>;
  wipe(): Promise<void>;
  close(): Promise<void>;
  readFileBulk(inodeBulk: string[]): Promise<any[]>;
  writeFileBulk(inodeBulk: string[], dataBulk: any[]): Promise<void>;
  unlinkBulk(inodeBulk: string[]): Promise<void>;
}
//# sourceMappingURL=InMemoryBackend.d.ts.map

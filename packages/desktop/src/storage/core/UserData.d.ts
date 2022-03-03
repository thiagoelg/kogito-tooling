export declare class UserData {
  private readonly basePath;
  private readonly dataPath;
  private readonly defaults;
  private readonly resourceTypes;
  constructor(options: { configName: string; resourceTypes: string[]; defaults: any });
  get(key: string): any;
  set(key: string, value: any): void;
  saveResource(type: string, fileName: string, fileContent: string): void;
  readResource(type: string, fileName: string): Promise<string>;
  listResources(type: string): string[];
  deleteResources(files: string[]): void;
  clearData(): void;
  clearResources(...resourceTypes: string[]): void;
  getBasePath(): string;
  private createResourceFolderIfNecessary;
  private createDataFileIfNecessary;
  private parseDataFile;
}
//# sourceMappingURL=UserData.d.ts.map

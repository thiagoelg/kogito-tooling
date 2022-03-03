import { RecentOpenedFile } from "../common/RecentOpenedFile";
export declare class DesktopUserData {
  private userData;
  constructor();
  registerFile(fullPath: string): void;
  saveFileThumbnail(filePath: string, fileType: string, fileContent: string): void;
  getLastOpenedFiles(): Promise<RecentOpenedFile[]>;
  private getPromisedRecentOpenedFiles;
  clear(): void;
  private buildThumbnailFileName;
}
//# sourceMappingURL=DesktopUserData.d.ts.map

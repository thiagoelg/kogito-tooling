import { Provider } from "../api/Provider";
import { FileMetadata } from "../api/FileMetadata";
import { FileType } from "../api/FileType";
import { StorageTypes } from "../api/StorageTypes";
export declare class FS implements Provider {
  readonly type = StorageTypes.FS;
  read(file: FileMetadata): Promise<string>;
  write(file: FileMetadata, content: string): Promise<void>;
  exists(file: FileMetadata): boolean;
  remove(file: FileMetadata): void;
  list(directory: FileMetadata): FileMetadata[];
  isDirectory(file: FileMetadata): boolean;
  static newFile(fullPath: string): FileMetadata;
  static _newFile(fullPath: string, fileType: FileType): FileMetadata;
}
//# sourceMappingURL=FS.d.ts.map

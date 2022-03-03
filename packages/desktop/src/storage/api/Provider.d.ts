import { StorageTypes } from "./StorageTypes";
import { FileMetadata } from "./FileMetadata";
export interface Provider {
  readonly type: StorageTypes;
  read(file: FileMetadata): Promise<string>;
  write(file: FileMetadata, content: string): Promise<void>;
  exists(file: FileMetadata): boolean;
  remove(file: FileMetadata): void;
  list(file: FileMetadata): FileMetadata[];
  isDirectory(file: FileMetadata): boolean;
}
//# sourceMappingURL=Provider.d.ts.map

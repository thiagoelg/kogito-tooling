import { StorageTypes } from "./StorageTypes";
import { FileType } from "./FileType";
export declare class FileMetadata {
  readonly name: string;
  readonly fullName: string;
  readonly relativeName: string;
  readonly type: FileType;
  readonly uri: string;
  readonly storage: StorageTypes;
  readonly origin: string;
  readonly id: string;
  constructor(
    name: string,
    fullName: string,
    relativeName: string,
    type: FileType,
    uri: string,
    storage: StorageTypes,
    origin: string,
    id: string
  );
}
//# sourceMappingURL=FileMetadata.d.ts.map

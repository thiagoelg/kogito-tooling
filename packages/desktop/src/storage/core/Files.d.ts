import { FileMetadata } from "../api/FileMetadata";
import { Provider } from "../api/Provider";
export declare class Files {
  private static providers;
  static register(provider: Provider): void;
  static write(file: FileMetadata, content: string): Promise<void>;
  static read(file: FileMetadata): Promise<string>;
  static exists(file: FileMetadata): boolean;
  static list(directory: FileMetadata): FileMetadata[];
  static delete(fileOrDir: FileMetadata): void;
}
//# sourceMappingURL=Files.d.ts.map

import * as React from "react";
import { SetStateAction } from "react";
import { ResourceContent } from "@kie-tools-core/workspace/dist/api";
export interface UploadedFile {
  name: string;
  value: ResourceContent;
}
interface Props {
  allowDownload: boolean;
  allowUpload: boolean;
  onView: (resource: UploadedFile) => void;
  files: UploadedFile[];
  setFiles: React.Dispatch<SetStateAction<UploadedFile[]>>;
  ouiaId?: string;
  ouiaSafe?: boolean;
}
export declare const FileLoader: React.FC<Props>;
export {};
//# sourceMappingURL=FileLoader.d.ts.map

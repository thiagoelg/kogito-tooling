export declare type UploadStatus = "NOT_READY" | "WAITING" | "UPLOADING" | "UPLOADED" | "ERROR";
export declare function getUploadStatus(args: { baseUrl: string }): Promise<UploadStatus>;
export declare function postUpload(args: { baseUrl: string; workspaceZipBlob: Blob }): Promise<void>;
//# sourceMappingURL=DmnDevSandboxQuarkusAppApi.d.ts.map

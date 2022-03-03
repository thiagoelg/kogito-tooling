export declare type RuntimeMode = "MULTIPLE_IMPORT" | "SINGLE" | "STATIC";
export interface ApiResponse {
  mode: RuntimeMode;
  availableModels: string[];
  acceptingNewImports: boolean;
}
export interface DashboardResponse {
  runtimeModelId: string;
  pages: string[];
}
export interface RequestInfo {
  url: string;
  user: string;
  password: string;
}
export declare function embeddedRuntimeUrl(url: string, dashboardId: string, page: string): string;
export declare class DashbuilderService {
  private requestInfo;
  private authToken;
  constructor(requestInfo: RequestInfo);
  listDashboards(): Promise<ApiResponse>;
  listPages(id: string): Promise<DashboardResponse>;
  private request;
}
//# sourceMappingURL=DashbuilderService.d.ts.map

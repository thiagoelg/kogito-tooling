/// <reference types="react" />
import { AppData } from "./DmnDevSandboxAppDataApi";
export interface AppContextType {
  fetchDone: boolean;
  data?: AppData;
}
export declare const AppContext: import("react").Context<AppContextType>;
export declare function useApp(): AppContextType;
//# sourceMappingURL=AppContext.d.ts.map

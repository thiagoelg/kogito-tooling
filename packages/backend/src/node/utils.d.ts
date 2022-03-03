/// <reference types="node" />
import * as cp from "child_process";
interface Version {
  major: number;
  minor: number;
  patch: number;
}
export declare function isMavenAvailable(version?: Version): Promise<boolean>;
export declare function isJavaAvailable(version?: Version): Promise<boolean>;
export declare function killProcess(process: cp.ChildProcess): void;
export {};
//# sourceMappingURL=utils.d.ts.map

import { FormAsset } from "../types";
export declare const FORM_STORAGE_FOLDER = "src/main/resources/forms";
export declare const FORM_CONFIG_EXT = ".config";
export declare function getFormAssetPath(sourcePath: string, formAsset: string): string;
export declare function getFormConfigAssetPath(source: string, formAsset: FormAsset): string;
export declare function storeFormAsset(formAsset: FormAsset, source: string, overwriteExisting: boolean): void;
//# sourceMappingURL=storeFormAsset.d.ts.map

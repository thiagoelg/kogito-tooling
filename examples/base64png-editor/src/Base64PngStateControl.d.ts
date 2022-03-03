import { StateControl } from "@kie-tools-core/editor/dist/channel";
import { KogitoEdit } from "@kie-tools-core/workspace/dist/api";
export interface Base64PngEdit extends KogitoEdit {
  filter: string;
  contrast: string;
  brightness: string;
  saturate: string;
  sepia: string;
  grayscale: string;
  invert: string;
}
export declare class Base64PngStateControl extends StateControl {
  getCurrentBase64PngEdit(): Base64PngEdit | undefined;
}
//# sourceMappingURL=Base64PngStateControl.d.ts.map

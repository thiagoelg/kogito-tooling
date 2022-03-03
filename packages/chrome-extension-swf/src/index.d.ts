import { EditorEnvelopeLocator } from "@kie-tools-core/editor/dist/api";
import "../resources/style.css";
import { ImageUris } from "./app/components/common/GlobalContext";
import { RedHatConsolePageType } from "./app/openshift/RedHatConsolePageType";
export declare function startExtension(args: {
  name: string;
  editorEnvelopeLocator: EditorEnvelopeLocator;
  imageUris: ImageUris;
}): void;
export declare function discoverCurrentPageType(): RedHatConsolePageType;
//# sourceMappingURL=index.d.ts.map

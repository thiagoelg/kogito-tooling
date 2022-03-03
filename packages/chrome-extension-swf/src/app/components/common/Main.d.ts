import { EditorEnvelopeLocator } from "@kie-tools-core/editor/dist/api";
import * as React from "react";
import { Logger } from "../../../Logger";
import { Dependencies } from "../../Dependencies";
import { ResourceContentServiceFactory } from "./ChromeResourceContentService";
import { ImageUris } from "./GlobalContext";
export interface Globals {
  id: string;
  editorEnvelopeLocator: EditorEnvelopeLocator;
  logger: Logger;
  dependencies: Dependencies;
  resourceContentServiceFactory: ResourceContentServiceFactory;
  imageUris: ImageUris;
}
export declare const Main: React.FunctionComponent<Globals>;
//# sourceMappingURL=Main.d.ts.map

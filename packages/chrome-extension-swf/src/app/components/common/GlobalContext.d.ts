import { EditorEnvelopeLocator } from "@kie-tools-core/editor/dist/api";
import * as React from "react";
import { Logger } from "../../../Logger";
import { Dependencies } from "../../Dependencies";
import { ResourceContentServiceFactory } from "./ChromeResourceContentService";
export interface ImageUris {
  kie: string;
  serverlessWorkflow: string;
}
export interface GlobalContextType {
  id: string;
  envelopeLocator: EditorEnvelopeLocator;
  logger: Logger;
  dependencies: Dependencies;
  resourceContentServiceFactory: ResourceContentServiceFactory;
  imageUris: ImageUris;
}
export declare const GlobalContext: React.Context<GlobalContextType>;
export declare function useGlobals(): GlobalContextType;
//# sourceMappingURL=GlobalContext.d.ts.map

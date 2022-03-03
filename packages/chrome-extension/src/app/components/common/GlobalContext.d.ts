import * as React from "react";
import { EditorEnvelopeLocator } from "@kie-tools-core/editor/dist/api";
import { Logger } from "../../../Logger";
import { ExternalEditorManager } from "../../../ExternalEditorManager";
import { ResourceContentServiceFactory } from "./ChromeResourceContentService";
import { Dependencies } from "../../Dependencies";
export interface GlobalContextType {
  id: string;
  githubAuthTokenCookieName: string;
  envelopeLocator: EditorEnvelopeLocator;
  logger: Logger;
  dependencies: Dependencies;
  extensionIconUrl: string;
  resourceContentServiceFactory: ResourceContentServiceFactory;
  externalEditorManager?: ExternalEditorManager;
}
export declare const GlobalContext: React.Context<GlobalContextType>;
export declare function useGlobals(): GlobalContextType;
//# sourceMappingURL=GlobalContext.d.ts.map

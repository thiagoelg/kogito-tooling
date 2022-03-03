import * as React from "react";
import { Logger } from "../../../Logger";
import { Dependencies } from "../../Dependencies";
import { ExternalEditorManager } from "../../../ExternalEditorManager";
import { ResourceContentServiceFactory } from "./ChromeResourceContentService";
import { EditorEnvelopeLocator } from "@kie-tools-core/editor/dist/api";
export interface Globals {
  id: string;
  editorEnvelopeLocator: EditorEnvelopeLocator;
  logger: Logger;
  dependencies: Dependencies;
  githubAuthTokenCookieName: string;
  extensionIconUrl: string;
  resourceContentServiceFactory: ResourceContentServiceFactory;
  externalEditorManager?: ExternalEditorManager;
}
export declare const Main: React.FunctionComponent<Globals>;
//# sourceMappingURL=Main.d.ts.map

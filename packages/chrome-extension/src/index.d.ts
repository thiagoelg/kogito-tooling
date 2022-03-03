import { GitHubPageType } from "./app/github/GitHubPageType";
import { EditorEnvelopeLocator } from "@kie-tools-core/editor/dist/api";
import "../resources/style.css";
import { ExternalEditorManager } from "./ExternalEditorManager";
export declare function startExtension(args: {
  name: string;
  extensionIconUrl: string;
  githubAuthTokenCookieName: string;
  editorEnvelopeLocator: EditorEnvelopeLocator;
  externalEditorManager?: ExternalEditorManager;
}): void;
export declare function extractFileInfoFromUrl(): {
  gitRef: string;
  repo: string;
  org: string;
  path: string;
};
export declare function discoverCurrentGitHubPageType(): GitHubPageType;
export * from "./ExternalEditorManager";
//# sourceMappingURL=index.d.ts.map

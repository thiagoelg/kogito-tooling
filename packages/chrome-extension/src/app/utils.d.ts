import { Logger } from "../Logger";
export declare function runScriptOnPage(scriptString: string): void;
export declare function runAfterUriChange(logger: Logger, callback: () => void): void;
export declare function removeAllChildren(node: Node): void;
export declare function mainContainer(id: string, container: HTMLElement): Element | null;
export declare function createAndGetMainContainer(id: string, container: HTMLElement): Element;
export declare function iframeFullscreenContainer(id: string, container: HTMLElement): Element;
export declare function kogitoMenuContainer(id: string, container: HTMLElement): Element;
export declare function openRepoInExternalEditorContainer(id: string, container: HTMLElement): Element;
export declare function extractOpenFileExtension(url: string): string | undefined;
export declare function extractOpenFilePath(url: string): string;
//# sourceMappingURL=utils.d.ts.map

import * as React from "react";
import { EditorEnvelopeLocator } from "@kie-tools-core/editor/dist/api";
export declare type SupportedFileExtensions = "bpmn" | "bpmn2" | "BPMN" | "BPMN2" | "dmn" | "DMN" | "pmml" | "PMML";
export declare const EditorEnvelopeLocatorContext: React.Context<EditorEnvelopeLocator>;
export declare function EditorEnvelopeLocatorContextProvider(props: { children: React.ReactNode }): JSX.Element;
export declare function useEditorEnvelopeLocator(): EditorEnvelopeLocator;
//# sourceMappingURL=EditorEnvelopeLocatorContext.d.ts.map

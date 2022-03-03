import * as React from "react";
import { I18nDictionariesProviderProps } from "@kie-tools-core/i18n/dist/react-components";
import { BoxedExpressionEditorI18n } from "@kie-tools/boxed-expression-component/dist/i18n";
import {
  BoxedExpressionEditorGWTService,
  BoxedExpressionProviderProps,
  DataType,
} from "@kie-tools/boxed-expression-component";
export declare const EDIT_EXPRESSION_NAME = "[data-ouia-component-id='edit-expression-name']";
export declare const EDIT_EXPRESSION_DATA_TYPE = "[data-ouia-component-id='edit-expression-data-type'] span";
export declare const flushPromises: () => Promise<unknown>;
export declare const dataTypes: {
  typeRef: string;
  name: string;
  isCustom: boolean;
}[];
export declare const pmmlParams: {
  document: string;
  modelsFromDocument: {
    model: string;
    parametersFromModel: {
      id: string;
      name: string;
      dataType: DataType;
    }[];
  }[];
}[];
export declare function usingTestingBoxedExpressionI18nContext(
  children: React.ReactElement,
  ctx?: Partial<I18nDictionariesProviderProps<BoxedExpressionEditorI18n>>
): {
  ctx: I18nDictionariesProviderProps<BoxedExpressionEditorI18n>;
  wrapper: JSX.Element;
};
export declare function usingTestingBoxedExpressionProviderContext(
  children: React.ReactElement,
  ctx?: Partial<BoxedExpressionProviderProps>
): {
  ctx: BoxedExpressionProviderProps;
  wrapper: JSX.Element;
};
export declare function wrapComponentInContext(
  component: JSX.Element,
  boxedExpressionEditorGWTService?: BoxedExpressionEditorGWTService
): JSX.Element;
export declare function activateSelector(container: HTMLElement, query: string): Promise<void>;
export declare function activateNameAndDataTypePopover(element: HTMLElement): Promise<void>;
export declare function updateElementViaPopover(
  triggerPoint: HTMLElement,
  baseElement: Element,
  inputSelector: string,
  newName: string
): Promise<void>;
export declare const contextEntry: (container: Element, index: number) => Element | null;
export declare const checkEntryContent: (
  entry: Element | null,
  entryRecordInfo: {
    id?: string;
    name: string;
    dataType: string;
  }
) => void;
export declare const checkEntryStyle: (entry: Element | null, cssClass: string) => void;
export declare const checkEntryLogicType: (entry: Element | null, cssClass: string) => void;
//# sourceMappingURL=test-utils.d.ts.map

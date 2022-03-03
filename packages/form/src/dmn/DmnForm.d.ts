import * as React from "react";
declare type DmnDecisionNodes = "InputSet" | string;
export interface DmnSchema {
  definitions?: {
    [x in DmnDecisionNodes]?: {
      type: string;
      properties: {
        [x: string]: DmnDeepProperty;
      };
    };
  };
}
export interface DmnFormData {
  definitions: DmnFormDefinitions;
}
declare type DmnFormDefinitions = {
  [x in DmnDecisionNodes]?: {
    required?: string[];
    properties: object;
    type: string;
    placeholder?: string;
    title?: string;
    format?: string;
    items: any[] & {
      properties: any;
    };
    "x-dmn-type"?: string;
  };
};
interface DmnDeepProperty {
  $ref?: string;
  type?: string;
  placeholder?: string;
  title?: string;
  format?: string;
  "x-dmn-type"?: string;
  properties?: DmnDeepProperty;
}
interface CommonProps {
  name?: string;
  formData: object;
  setFormData: React.Dispatch<object>;
  formError: boolean;
  setFormError: React.Dispatch<any>;
  formSchema?: any;
  id?: string;
  formRef?: React.RefObject<HTMLFormElement>;
  showInlineError?: boolean;
  autosave?: boolean;
  autosaveDelay?: number;
  placeholder?: boolean;
  onSubmit?: (model: any) => void;
  onValidate?: (model: any, error: any) => void;
  errorsField?: () => React.ReactNode;
  submitField?: () => React.ReactNode;
  locale?: string;
}
interface PropsWithNotificationsPanel extends CommonProps {
  notificationsPanel: true;
  openValidationTab: () => void;
}
interface PropsWithoutNotificationsPanel extends CommonProps {
  notificationsPanel: false;
}
export declare type Props = PropsWithNotificationsPanel | PropsWithoutNotificationsPanel;
export declare function usePrevious(value: any): undefined;
export declare function DmnForm(props: Props): JSX.Element;
export {};
//# sourceMappingURL=DmnForm.d.ts.map

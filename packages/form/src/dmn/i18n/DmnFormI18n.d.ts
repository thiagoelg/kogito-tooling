import { ReferenceDictionary, Wrapped } from "@kie-tools-core/i18n/dist/core";
import { CommonI18n } from "@kie-tools/i18n-common-dictionary";
interface DmnFormDictionary extends ReferenceDictionary {
  form: {
    status: {
      autoGenerationError: {
        title: string;
        explanation: string;
        checkNotificationPanel: Array<string | Wrapped<"link">>;
      };
      emptyForm: {
        title: string;
        explanation: string;
      };
      validatorError: {
        title: string;
        message: Array<string | Wrapped<"jira">>;
      };
    };
    validation: {
      daysAndTimeError: string;
      yearsAndMonthsError: string;
    };
    preProcessing: {
      selectPlaceholder: string;
      daysAndTimePlaceholder: string;
      yearsAndMonthsPlaceholder: string;
    };
  };
  result: {
    evaluation: {
      success: string;
      skipped: string;
      failed: string;
    };
    error: {
      title: string;
      explanation: string;
      message: Array<string | Wrapped<"jira">>;
    };
    dateTooltip: Array<string | Wrapped<"date">>;
    withoutResponse: {
      title: string;
      explanation: string;
    };
  };
}
export interface DmnFormI18n extends DmnFormDictionary, CommonI18n {}
export {};
//# sourceMappingURL=DmnFormI18n.d.ts.map

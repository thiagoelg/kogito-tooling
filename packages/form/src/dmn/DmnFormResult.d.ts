/// <reference types="react" />
import { NotificationSeverity } from "@kie-tools-core/notifications/dist/api";
import "./styles.scss";
export declare enum EvaluationStatus {
  SUCCEEDED = "SUCCEEDED",
  SKIPPED = "SKIPPED",
  FAILED = "FAILED",
}
export interface DecisionResultMessage {
  severity: NotificationSeverity;
  message: string;
  messageType: string;
  sourceId: string;
  level: string;
}
export declare type Result = boolean | number | null | object | object[] | string;
export interface DecisionResult {
  decisionId: string;
  decisionName: string;
  result: Result;
  messages: DecisionResultMessage[];
  evaluationStatus: EvaluationStatus;
}
declare type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
export interface DmnFormResultProps {
  results?: DecisionResult[];
  differences?: Array<DeepPartial<DecisionResult>>;
  locale?: string;
  notificationsPanel: false;
}
export interface DmnFormResultWithNotificationsPanelProps {
  results?: DecisionResult[];
  differences?: Array<DeepPartial<DecisionResult>>;
  locale?: string;
  notificationsPanel: true;
  openExecutionTab: () => void;
}
export interface DmnResult {
  details?: string;
  stack?: string;
  decisionResults?: DecisionResult[];
  messages: DecisionResultMessage[];
}
export declare function extractDifferences(current: DecisionResult[], previous: DecisionResult[]): object[];
export declare function DmnFormResult(
  props: DmnFormResultProps | DmnFormResultWithNotificationsPanelProps
): JSX.Element;
export {};
//# sourceMappingURL=DmnFormResult.d.ts.map

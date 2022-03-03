import { DataType } from "./DataType";
import { ExpressionProps } from "./ExpressionProps";
import { DataRecord, Row } from "react-table";
import { TableHandlerConfiguration } from "./Table";
import { BoxedExpressionEditorI18n } from "../i18n";
export interface EntryInfo {
  id: string;
  name: string;
  dataType: DataType;
}
export interface ContextEntryRecord<T = ExpressionProps> extends DataRecord {
  entryInfo: EntryInfo;
  entryExpression: T;
  nameAndDataTypeSynchronized?: boolean;
  onExpressionResetting?: () => void;
}
export declare type ContextEntries<T = ExpressionProps> = ContextEntryRecord<T>[];
export declare const DEFAULT_ENTRY_INFO_MIN_WIDTH = 150;
export declare const DEFAULT_ENTRY_EXPRESSION_MIN_WIDTH = 370;
export declare const getHandlerConfiguration: (
  i18n: BoxedExpressionEditorI18n,
  groupName: string
) => TableHandlerConfiguration;
export declare const generateNextAvailableEntryName: (
  entryInfos: EntryInfo[],
  namePrefix: string,
  lastIndex?: number
) => string;
export declare const getEntryKey: (row: Row) => string;
export declare function resetEntry(row: ContextEntryRecord): ContextEntryRecord;
//# sourceMappingURL=ContextEntry.d.ts.map

/// <reference types="react" />
export interface KieServerContainer {
  id: string;
  processes: string[];
}
export interface ProcessSelectorProps {
  containers: KieServerContainer[];
  onContainerProcessSelected: (container: string, process: string) => void;
  selectedContainer?: string;
  selectedProcess?: string;
}
export declare function ProcessSelector(props: ProcessSelectorProps): JSX.Element;
//# sourceMappingURL=ProcessSelector.d.ts.map

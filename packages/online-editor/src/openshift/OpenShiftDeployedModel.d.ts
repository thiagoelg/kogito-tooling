export declare enum OpenShiftDeployedModelState {
  UP = "UP",
  DOWN = "DOWN",
  IN_PROGRESS = "IN_PROGRESS",
  PREPARING = "PREPARING",
  ERROR = "ERROR",
}
export interface OpenShiftDeployedModel {
  resourceName: string;
  uri: string;
  baseUrl: string;
  creationTimestamp: Date;
  state: OpenShiftDeployedModelState;
  workspaceName: string;
}
//# sourceMappingURL=OpenShiftDeployedModel.d.ts.map

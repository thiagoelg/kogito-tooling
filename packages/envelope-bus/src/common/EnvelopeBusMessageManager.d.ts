import {
  ApiDefinition,
  ApiSharedValueConsumers,
  EnvelopeBusMessage,
  FunctionPropertyNames,
  MessageBusClientApi,
  MessageBusServer,
} from "../api";
export declare class EnvelopeBusMessageManager<
  ApiToProvide extends ApiDefinition<ApiToProvide>,
  ApiToConsume extends ApiDefinition<ApiToConsume>
> {
  private readonly send;
  private readonly name;
  private readonly requestHandlers;
  private readonly localNotificationsSubscriptions;
  private readonly remoteNotificationsSubscriptions;
  private readonly localSharedValueSubscriptions;
  private readonly localSharedValuesStore;
  private requestIdCounter;
  currentApiImpl?: ApiToProvide;
  clientApi: MessageBusClientApi<ApiToConsume>;
  shared: ApiSharedValueConsumers<ApiToProvide>;
  get server(): MessageBusServer<ApiToProvide, ApiToConsume>;
  constructor(
    send: (
      message: EnvelopeBusMessage<unknown, FunctionPropertyNames<ApiToConsume> | FunctionPropertyNames<ApiToProvide>>
    ) => void,
    name?: string
  );
  private setSharedValue;
  private subscribeToSharedValue;
  private unsubscribeFromSharedValue;
  private getCurrentStoredSharedValueOrDefault;
  private subscribeToNotification;
  private unsubscribeFromNotification;
  private request;
  private notify;
  private respond;
  private callback;
  private receive;
  getNextRequestId(): string;
}
//# sourceMappingURL=EnvelopeBusMessageManager.d.ts.map

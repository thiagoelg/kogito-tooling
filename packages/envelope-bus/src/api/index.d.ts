export declare type NotificationCallback<
  ApiToConsume extends ApiDefinition<ApiToConsume>,
  M extends NotificationPropertyNames<ApiToConsume>
> = (...args: ArgsType<ApiToConsume[M]>) => void;
export declare type SharedValueProviderPropertyNames<T extends ApiDefinition<T>> = {
  [K in keyof T]: ReturnType<T[K]> extends SharedValueProvider<any> ? K : never;
}[keyof T];
export declare type NotificationPropertyNames<T extends ApiDefinition<T>> = {
  [K in keyof T]: ReturnType<T[K]> extends void ? K : never;
}[keyof T];
export declare type RequestPropertyNames<T extends ApiDefinition<T>> = {
  [K in keyof T]: ReturnType<T[K]> extends Promise<any> ? K : never;
}[keyof T];
export interface SharedValueConsumer<T> {
  subscribe(callback: (newValue: T) => void): (newValue: T) => any;
  unsubscribe(subscription: (newValue: T) => void): void;
  set(t: T): void;
}
export interface SharedValueProvider<T> {
  defaultValue: T;
}
export declare type FunctionPropertyNames<T extends ApiDefinition<T>> =
  | SharedValueProviderPropertyNames<T>
  | NotificationPropertyNames<T>
  | RequestPropertyNames<T>;
export declare type ApiDefinition<T> = {
  [P in keyof T]: (...a: any) => Promise<any> | SharedValueProvider<any> | void;
};
export declare type ArgsType<T> = T extends (...args: infer A) => any ? A : never;
export declare type SubscriptionCallback<Api extends ApiDefinition<Api>, M extends NotificationPropertyNames<Api>> = (
  ...args: ArgsType<Api[M]>
) => void;
export declare type ApiRequests<T extends ApiDefinition<T>> = Pick<T, RequestPropertyNames<T>>;
export declare type ApiNotificationConsumers<T extends ApiDefinition<T>> = Pick<
  WithNotificationConsumers<T>,
  NotificationPropertyNames<T>
>;
export declare type ApiSharedValueConsumers<T extends ApiDefinition<T>> = Pick<
  WithSharedValueConsumers<T>,
  SharedValueProviderPropertyNames<T>
>;
export declare type WithSharedValueConsumers<T extends ApiDefinition<T>> = {
  [K in keyof T]: ReturnType<T[K]> extends SharedValueProvider<infer U> ? SharedValueConsumer<U> : never;
};
export interface NotificationConsumer<N> {
  subscribe(callback: (...newValue: ArgsType<N>) => void): (...newValue: ArgsType<N>) => any;
  unsubscribe(subscription: (...newValue: ArgsType<N>) => void): void;
  send(...args: ArgsType<N>): void;
}
export declare type WithNotificationConsumers<T extends ApiDefinition<T>> = {
  [K in keyof T]: ReturnType<T[K]> extends void ? NotificationConsumer<T[K]> : never;
};
export declare type WithRequestConsumers<T extends ApiDefinition<T>> = {
  [K in keyof T]: ReturnType<T[K]> extends void ? RequestConsumer<T[K]> : never;
};
export declare type RequestConsumer<T extends () => any> = (...args: ArgsType<T>) => ReturnType<T>;
export interface MessageBusClientApi<Api extends ApiDefinition<Api>> {
  requests: ApiRequests<Api>;
  notifications: ApiNotificationConsumers<Api>;
  shared: ApiSharedValueConsumers<Api>;
}
export interface MessageBusServer<
  ApiToProvide extends ApiDefinition<ApiToProvide>,
  ApiToConsume extends ApiDefinition<ApiToConsume>
> {
  receive(
    message: EnvelopeBusMessage<unknown, FunctionPropertyNames<ApiToProvide> | FunctionPropertyNames<ApiToConsume>>,
    apiImpl: ApiToProvide
  ): void;
}
export interface EnvelopeBusMessage<D, T> {
  data: D;
  type: T;
  targetEnvelopeServerId?: string;
  requestId?: string;
  purpose: EnvelopeBusMessagePurpose;
  error?: string;
  targetEnvelopeId?: string;
  directSender?: EnvelopeBusMessageDirectSender;
}
export declare enum EnvelopeBusMessagePurpose {
  REQUEST = "request",
  RESPONSE = "response",
  NOTIFICATION_SUBSCRIPTION = "subscription",
  NOTIFICATION_UNSUBSCRIPTION = "unsubscription",
  NOTIFICATION = "notification",
  SHARED_VALUE_GET_DEFAULT = "shared-value-get-default",
  SHARED_VALUE_UPDATE = "shared-value-update",
}
export declare enum EnvelopeBusMessageDirectSender {
  ENVELOPE_CLIENT = "envelopeClient",
  ENVELOPE_SERVER = "envelopeServer",
}
export interface EnvelopeBus {
  postMessage<D, T>(message: EnvelopeBusMessage<D, T>, targetOrigin?: string, _?: any): void;
}
//# sourceMappingURL=index.d.ts.map

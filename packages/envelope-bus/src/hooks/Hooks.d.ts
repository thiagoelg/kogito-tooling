import * as React from "react";
import {
  ApiDefinition,
  NotificationConsumer,
  NotificationPropertyNames,
  SharedValueConsumer,
  SubscriptionCallback,
} from "../api";
import { EnvelopeServer } from "../channel";
export declare function useConnectedEnvelopeServer<Api extends ApiDefinition<Api>>(
  envelopeServer: EnvelopeServer<Api, any>,
  apiImpl: Api
): void;
export declare function useSubscription<Api extends ApiDefinition<Api>, M extends NotificationPropertyNames<Api>>(
  notificationConsumer: NotificationConsumer<Api[M]>,
  callback: SubscriptionCallback<Api, M>
): void;
export declare function useSubscriptionOnce<Api extends ApiDefinition<Api>, M extends NotificationPropertyNames<Api>>(
  notificationConsumer: NotificationConsumer<Api[M]>,
  callback: SubscriptionCallback<Api, M>
): void;
export declare function useSharedValue<T>(
  sharedValue: SharedValueConsumer<T> | undefined
): [T | undefined, React.Dispatch<React.SetStateAction<T>>];
export declare function useStateAsSharedValue<T>(
  value: T,
  setValue: React.Dispatch<React.SetStateAction<T>>,
  sharedValue: SharedValueConsumer<T> | undefined
): void;
//# sourceMappingURL=Hooks.d.ts.map

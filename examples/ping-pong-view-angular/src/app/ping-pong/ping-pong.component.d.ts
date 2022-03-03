import { PingPongApiService, LogEntry } from "./ping-pong-api.service";
import { OnInit } from "@angular/core";
import { ContainerType } from "@kie-tools-core/envelope/dist/api";
import { Observable } from "rxjs";
export declare class PingPongComponent implements OnInit {
  pingPongApiService: PingPongApiService;
  containerType: ContainerType;
  envelopeId?: string;
  constructor(pingPongApiService: PingPongApiService);
  log: Observable<LogEntry[]>;
  subscribeToLogUpdates(): void;
  ngOnInit(): void;
}
//# sourceMappingURL=ping-pong.component.d.ts.map

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { createContext, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useCancelableEffect } from "@kie-tools-core/react-hooks/dist/useCancelableEffect";
import { decoder, encoder } from "@kie-tools-core/workspaces-git-fs/dist/encoderdecoder/EncoderDecoder";
import { LfsStorageFile } from "@kie-tools-core/workspaces-git-fs/dist/lfs/LfsStorageService";
import {
  AuthSession,
  AuthSessionStatus,
  authSessionFsCache,
  authSessionFsService,
  mapDeSerializer,
  AUTH_SESSIONS_FILE_PATH,
  AUTH_SESSIONS_FS_NAME_WITH_VERSION,
  mapSerializer,
  authSessionBroadcastChannel,
} from "./AuthSessionApi";
import { deleteOlderAuthSessionsStorage, migrateAuthSessions } from "./AuthSessionMigrations";
import { Holder } from "@kie-tools-core/react-hooks/dist/Holder";
import { NewAuthSessionModal } from "./components/NewAuthSessionModal";

export type AuthSessionsContextType = {
  authSessions: Map<string, AuthSession>;
  authSessionStatus: Map<string, AuthSessionStatus>;
  isNewAuthSessionModalOpen: boolean;
  currentAuthSessionId?: string;
  isAuthSessionsReady: boolean;
};

export type AuthSessionsDispatchContextType = {
  recalculateAuthSessionStatus: () => void;
  add: (authSession: AuthSession) => Promise<void>;
  remove: (authSession: AuthSession) => void;
  setIsNewAuthSessionModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentAuthSessionId: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const AuthSessionsContext = createContext<AuthSessionsContextType>({} as AuthSessionsContextType);
const AuthSessionsDispatchContext = createContext<AuthSessionsDispatchContextType>(
  {} as AuthSessionsDispatchContextType
);

export function useAuthSessions() {
  return useContext(AuthSessionsContext);
}

export function useAuthSessionsDispatch() {
  return useContext(AuthSessionsDispatchContext);
}

export function AuthSessionsContextProvider(props: PropsWithChildren<{}>) {
  const [authSessions, setAuthSessions] = useState<Map<string, AuthSession>>(new Map<string, AuthSession>());
  const [authSessionStatus, setAuthSessionStatus] = useState<Map<string, AuthSessionStatus>>(
    new Map<string, AuthSessionStatus>()
  );
  const [isNewAuthSessionModalOpen, setIsNewAuthSessionModalOpen] = useState(false);
  const [currentAuthSessionId, setCurrentAuthSessionId] = useState<string>();
  const [isAuthSessionsReady, setIsAuthSessionsReady] = useState<boolean>(false);

  const getAuthSessionsFromFile = useCallback(async () => {
    const fs = authSessionFsCache.getOrCreateFs(AUTH_SESSIONS_FS_NAME_WITH_VERSION);
    if (await authSessionFsService.exists(fs, AUTH_SESSIONS_FILE_PATH)) {
      const content = await (await authSessionFsService.getFile(fs, AUTH_SESSIONS_FILE_PATH))?.getFileContents();
      const parsedAuthSessions = JSON.parse(decoder.decode(content), mapDeSerializer);
      console.log({ parsedAuthSessions });
      return parsedAuthSessions;
    }
    return [];
  }, []);

  const refresh = useCallback(async () => {
    setAuthSessions(await getAuthSessionsFromFile());
  }, [getAuthSessionsFromFile]);

  const persistAuthSessions = useCallback(
    async (map: Map<string, AuthSession>) => {
      const fs = authSessionFsCache.getOrCreateFs(AUTH_SESSIONS_FS_NAME_WITH_VERSION);
      await authSessionFsService.createOrOverwriteFile(
        fs,
        new LfsStorageFile({
          path: AUTH_SESSIONS_FILE_PATH,
          getFileContents: async () => encoder.encode(JSON.stringify(map, mapSerializer)),
        })
      );

      // This goes to other broadcast channel instances, on other tabs
      authSessionBroadcastChannel.postMessage("UPDATE_AUTH_SESSIONS");

      // This updates this tab
      await refresh();
    },
    [refresh]
  );

  const add = useCallback(
    async (authSession: AuthSession) => {
      console.log({ newAuthSession: authSession, currentAuthSessions: authSessions });
      const n = new Map(authSessions?.entries() ?? []);
      console.log({ n: JSON.stringify(n) });
      n?.set(authSession.id, authSession);
      console.log({ updatedN: JSON.stringify(n) });
      await persistAuthSessions(n);
    },
    [authSessions, persistAuthSessions]
  );

  const remove = useCallback(
    (authSession: AuthSession) => {
      const n = new Map(authSessions?.entries() ?? []);
      n?.delete(authSession.id);
      persistAuthSessions(n);
    },
    [authSessions, persistAuthSessions]
  );

  // Update after persisted
  useEffect(() => {
    authSessionBroadcastChannel.onmessage = refresh;
  }, [refresh]);

  // Init
  useCancelableEffect(
    useCallback(
      ({ canceled }) => {
        const run = async () => {
          const migratedAuthSessions = await migrateAuthSessions();
          if (canceled.get()) {
            return;
          }
          await persistAuthSessions(migratedAuthSessions);
          await deleteOlderAuthSessionsStorage();
          console.log({ migratedAuthSessions });
          if (migratedAuthSessions.size > 0) {
            setCurrentAuthSessionId(migratedAuthSessions.entries().next().value[0]);
          }
        };
        run().then(() => {
          setIsAuthSessionsReady(true);
        });
      },
      [persistAuthSessions]
    )
  );

  const recalculateAuthSessionStatus = useCallback(
    (args?: { canceled: Holder<boolean> }) => {
      async function run() {
        const newAuthSessionStatus: [string, AuthSessionStatus][] = await Promise.all(
          [...(authSessions?.values() ?? [])].map(async (authSession) => {
            try {
              // const fetchUser = () => {}; // TODO: Implement re-auth
              // await fetchUser();
              return [authSession.id, AuthSessionStatus.VALID];
            } catch (e) {
              return [authSession.id, AuthSessionStatus.INVALID];
            }
          })
        );

        if (args?.canceled.get()) {
          return;
        }

        setAuthSessionStatus(new Map(newAuthSessionStatus));
      }
      run();
    },
    [authSessions]
  );

  useCancelableEffect(recalculateAuthSessionStatus);

  const dispatch = useMemo(() => {
    return {
      add,
      remove,
      recalculateAuthSessionStatus,
      setIsNewAuthSessionModalOpen,
      setCurrentAuthSessionId,
    };
  }, [add, recalculateAuthSessionStatus, remove]);

  const value = useMemo(() => {
    return { authSessions, authSessionStatus, isNewAuthSessionModalOpen, currentAuthSessionId, isAuthSessionsReady };
  }, [authSessionStatus, authSessions, isNewAuthSessionModalOpen, currentAuthSessionId, isAuthSessionsReady]);

  return (
    <>
      {value && isAuthSessionsReady && (
        <AuthSessionsContext.Provider value={value}>
          <AuthSessionsDispatchContext.Provider value={dispatch}>
            {props.children}
            <NewAuthSessionModal />
          </AuthSessionsDispatchContext.Provider>
        </AuthSessionsContext.Provider>
      )}
    </>
  );
}

export interface AuthInfo {
  username: string;
  uuid?: string;
  password: string;
}

export interface GitConfig {
  name: string;
  email: string;
}

export function useAuthSession(authSessionId: string | undefined): {
  authSession: AuthSession | undefined;
} {
  const { authSessions } = useAuthSessions();

  const authSession = useMemo(() => {
    if (!authSessionId) {
      return undefined;
    } else {
      return authSessions.get(authSessionId);
    }
  }, [authSessionId, authSessions]);
  return { authSession };
}

export function useCurrentAuthSession() {
  const { authSessions, currentAuthSessionId } = useAuthSessions();
  if (currentAuthSessionId) {
    return authSessions.get(currentAuthSessionId);
  }
}

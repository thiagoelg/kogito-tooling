/*
 * Copyright 2023 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, {
  Dispatch,
  ReactNode,
  RefObject,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { ActiveWorkspace } from "@kie-tools-core/workspaces-git-fs/dist/model/ActiveWorkspace";
import { GitIntegrationContextProvider } from "./GitIntegration/GitIntegrationContextProvider";
import { WorkspaceFile, useWorkspaces } from "@kie-tools-core/workspaces-git-fs/dist/context/WorkspacesContext";
import { CreateGitRepositoryModal } from "./GitIntegration/CreateGitRepositoryModal";
import { CreateGistOrSnippetModal } from "./GitIntegration/CreateGistOrSnippetModal";
import { EmbedModal } from "./Share/EmbedModal";
import { EmbeddedEditorRef } from "@kie-tools-core/editor/dist/embedded";
import { WorkspaceKind } from "@kie-tools-core/workspaces-git-fs/dist/worker/api/WorkspaceOrigin";
import { useAuthSession } from "../../authSessions/AuthSessionsContext";

export type EditorToolbarContextType = {
  isEmbedModalOpen: boolean;
  setEmbedModalOpen: Dispatch<SetStateAction<boolean>>;
  isCreateGitRepositoryModalOpen: boolean;
  setCreateGitRepositoryModalOpen: Dispatch<SetStateAction<boolean>>;
  isCreateGistOrSnippetModalOpen: boolean;
  setCreateGistOrSnippetModalOpen: Dispatch<SetStateAction<boolean>>;
  isShareDropdownOpen: boolean;
  setShareDropdownOpen: Dispatch<SetStateAction<boolean>>;
  isSyncGistOrSnippetDropdownOpen: boolean;
  setSyncGistOrSnippetDropdownOpen: Dispatch<SetStateAction<boolean>>;
  isSyncGitRepositoryDropdownOpen: boolean;
  setSyncGitRepositoryDropdownOpen: Dispatch<SetStateAction<boolean>>;
  isLargeKebabOpen: boolean;
  setLargeKebabOpen: Dispatch<SetStateAction<boolean>>;
  isSmallKebabOpen: boolean;
  setSmallKebabOpen: Dispatch<SetStateAction<boolean>>;
  isNewFileDropdownMenuOpen: boolean;
  setNewFileDropdownMenuOpen: Dispatch<SetStateAction<boolean>>;
  downloadRef: RefObject<HTMLAnchorElement>;
  downloadAllRef: RefObject<HTMLAnchorElement>;
  downloadPreviewRef: RefObject<HTMLAnchorElement>;
  downloadWorkspaceZip: () => Promise<void>;
};

export const EditorToolbarContext = createContext<EditorToolbarContextType>({} as any);

type Props = {
  workspace: ActiveWorkspace;
  workspaceFile: WorkspaceFile;
  children: ReactNode;
  editor: EmbeddedEditorRef | undefined;
};

export function EditorToolbarContextProvider(props: Props) {
  const [isEmbedModalOpen, setEmbedModalOpen] = useState(false);
  const [isCreateGitRepositoryModalOpen, setCreateGitRepositoryModalOpen] = useState(false);
  const [isCreateGistOrSnippetModalOpen, setCreateGistOrSnippetModalOpen] = useState(false);
  const [isShareDropdownOpen, setShareDropdownOpen] = useState(false);
  const [isSyncGistOrSnippetDropdownOpen, setSyncGistOrSnippetDropdownOpen] = useState(false);
  const [isSyncGitRepositoryDropdownOpen, setSyncGitRepositoryDropdownOpen] = useState(false);
  const [isLargeKebabOpen, setLargeKebabOpen] = useState(false);
  const [isSmallKebabOpen, setSmallKebabOpen] = useState(false);
  const [isNewFileDropdownMenuOpen, setNewFileDropdownMenuOpen] = useState(false);
  const downloadRef = useRef<HTMLAnchorElement>(null);
  const downloadAllRef = useRef<HTMLAnchorElement>(null);
  const downloadPreviewRef = useRef<HTMLAnchorElement>(null);
  const workspaces = useWorkspaces();
  const { gitConfig } = useAuthSession(props.workspace.descriptor.gitAuthSessionId);

  const downloadWorkspaceZip = useCallback(async () => {
    if (!props.editor) {
      return;
    }

    const zipBlob = await workspaces.prepareZip({ workspaceId: props.workspaceFile.workspaceId });
    if (downloadAllRef.current) {
      downloadAllRef.current.href = URL.createObjectURL(zipBlob);
      downloadAllRef.current.click();
    }
    if (props.workspace.descriptor.origin.kind === WorkspaceKind.LOCAL) {
      await workspaces.createSavePoint({ workspaceId: props.workspaceFile.workspaceId, gitConfig });
    }
  }, [
    props.editor,
    props.workspaceFile.workspaceId,
    props.workspace.descriptor.origin.kind,
    workspaces,
    downloadAllRef,
    gitConfig,
  ]);

  const value = useMemo(
    () => ({
      isEmbedModalOpen,
      setEmbedModalOpen,
      isCreateGitRepositoryModalOpen,
      setCreateGitRepositoryModalOpen,
      isCreateGistOrSnippetModalOpen,
      setCreateGistOrSnippetModalOpen,
      isShareDropdownOpen,
      setShareDropdownOpen,
      isSyncGistOrSnippetDropdownOpen,
      setSyncGistOrSnippetDropdownOpen,
      isSyncGitRepositoryDropdownOpen,
      setSyncGitRepositoryDropdownOpen,
      isLargeKebabOpen,
      setLargeKebabOpen,
      isSmallKebabOpen,
      setSmallKebabOpen,
      isNewFileDropdownMenuOpen,
      setNewFileDropdownMenuOpen,
      downloadRef,
      downloadAllRef,
      downloadPreviewRef,
      downloadWorkspaceZip,
    }),
    [
      isCreateGistOrSnippetModalOpen,
      isCreateGitRepositoryModalOpen,
      isEmbedModalOpen,
      isLargeKebabOpen,
      isNewFileDropdownMenuOpen,
      isShareDropdownOpen,
      isSmallKebabOpen,
      isSyncGistOrSnippetDropdownOpen,
      isSyncGitRepositoryDropdownOpen,
      downloadWorkspaceZip,
    ]
  );

  return (
    <EditorToolbarContext.Provider value={value}>
      <GitIntegrationContextProvider workspace={props.workspace}>
        {props.children}
        <CreateGitRepositoryModal
          workspace={props.workspace.descriptor}
          isOpen={isCreateGitRepositoryModalOpen}
          onClose={() => setCreateGitRepositoryModalOpen(false)}
        />
        <CreateGistOrSnippetModal
          workspace={props.workspace.descriptor}
          isOpen={isCreateGistOrSnippetModalOpen}
          onClose={() => setCreateGistOrSnippetModalOpen(false)}
        />
        <EmbedModal
          workspace={props.workspace.descriptor}
          workspaceFile={props.workspaceFile}
          isOpen={isEmbedModalOpen}
          onClose={() => setEmbedModalOpen(false)}
        />
        <>
          <a ref={downloadRef} />
          <a ref={downloadAllRef} />
          <a ref={downloadPreviewRef} />
        </>
      </GitIntegrationContextProvider>
    </EditorToolbarContext.Provider>
  );
}

export function useEditorToolbarContext() {
  return useContext(EditorToolbarContext);
}

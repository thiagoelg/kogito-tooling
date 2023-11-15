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

import { ResourceArgs } from "../../types";

export const deploymentWithFormWebappYaml = (args: ResourceArgs) => `
kind: Deployment
apiVersion: apps/v1
metadata:
  name: \${{ devDeployment.uniqueName }}
  namespace: \${{ devDeployment.kubernetes.namespace }}
  labels:
    app: \${{ devDeployment.uniqueName }}
    app.kubernetes.io/component: \${{ devDeployment.uniqueName }}
    app.kubernetes.io/instance: \${{ devDeployment.uniqueName }}
    app.kubernetes.io/name: \${{ devDeployment.uniqueName }}
    app.kubernetes.io/part-of: \${{ devDeployment.uniqueName }}
    \${{ devDeployment.labels.createdBy }}: kie-tools
    \${{ devDeployment.labels.partOf }}: \${{ devDeployment.uniqueName }}
  annotations:
    \${{ devDeployment.annotations.workspaceId }}: \${{ devDeployment.workspace.id }}
    \${{ devDeployment.annotations.workspaceName }}: \${{ devDeployment.workspace.name }}
spec:
  replicas: 1
  selector:
    matchLabels:
      app: \${{ devDeployment.uniqueName }}
  template:
    metadata:
      labels:
        app: \${{ devDeployment.uniqueName }}
        deploymentconfig: \${{ devDeployment.uniqueName }}
        app.kubernetes.io/part-of: \${{ devDeployment.uniqueName }}
        \${{ devDeployment.labels.createdBy }}: kie-tools
        \${{ devDeployment.labels.partOf }}: \${{ devDeployment.uniqueName }}
    spec:
      containers:
        - name: \${{ devDeployment.uniqueName }}
          image: ${args.baseImageUrl}
          imagePullPolicy: ${args.imagePullPolicy}
          ports:
            - containerPort: 8080
              protocol: TCP
          env:
            - name: BASE_URL
              value: http://localhost/\${{ devDeployment.uniqueName }}
            - name: QUARKUS_PLATFORM_VERSION
              value: ${args.quarkusPlatformVersion}
            - name: KOGITO_RUNTIME_VERSION
              value: ${args.kogitoRuntimeVersion}
            - name: ROOT_PATH
              value: \${{ devDeployment.uniqueName }}
            - name: DEV_DEPLOYMENT__UPLOAD_SERVICE_ROOT_PATH
              value: \${{ devDeployment.uniqueName }}
            - name: DEV_DEPLOYMENT__UPLOAD_SERVICE_API_KEY
              value: \${{ devDeployment.uploadService.apiKey }}
        - name: \${{ devDeployment.uniqueName }}-dmn-form-webapp
          image: ${args.formWebappImageUrl}
          imagePullPolicy: ${args.imagePullPolicy}
          ports:
            - containerPort: 8081
              protocol: TCP
          resources: {}
`;

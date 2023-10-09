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

export const createDeploymentYaml = `
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
  annotations:
    \${{ devDeployment.annotations.uri }}: \${{ devDeployment.workspace.resourceName }}
    \${{ devDeployment.annotations.workspaceId }}: \${{ devDeployment.workspace.id }}
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
    spec:
      containers:
        - name: \${{ devDeployment.uniqueName }}
          image: \${{ devDeployment.defaultContainerImageUrl }}
          ports:
            - containerPort: 8080
              protocol: TCP
          env:
            - name: BASE_URL
              value: http://localhost/\${{ devDeployment.uniqueName }}
            - name: QUARKUS_PLATFORM_VERSION
              value: 2.16.7.Final
            - name: KOGITO_RUNTIME_VERSION
              value: 1.40.0.Final
            - name: ROOT_PATH
              value: \${{ devDeployment.uniqueName }}
          resources: {}
          imagePullPolicy: Always
`;

export const getDeploymentListApiPath = (namespace: string, labelSelector?: string) => {
  const selector = labelSelector ? `?labelSelector=${labelSelector}` : "";
  return `apis/apps/v1/namespaces/${namespace}/deployments${selector}`;
};

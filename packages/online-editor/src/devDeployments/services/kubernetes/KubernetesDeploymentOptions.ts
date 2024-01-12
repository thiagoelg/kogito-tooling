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

import { DeploymentOptionArgs } from "../types";
import { DeploymentOption, DeploymentOptionOpts } from "../deploymentOptions/types";
import { CustomImageOption } from "../deploymentOptions/customImage";
import { KogitoQuarkusBlankAppOption } from "../deploymentOptions/kogitoQuarkusBlankApp";
import { FormWebappServiceYaml } from "../deploymentOptions/kogitoQuarkusBlankApp/FormWebappServiceYaml";
import { FormWebappIngressYaml } from "../deploymentOptions/kogitoQuarkusBlankApp/FormWebappIngressYaml";
import { IngressYaml } from "../deploymentOptions/kogitoQuarkusBlankApp/IngressYaml";

export function KubernetesDeploymentOptions(args: DeploymentOptionArgs): Array<DeploymentOption> {
  const kogitoQuarkusBlankAppOpts: DeploymentOptionOpts = {
    parameters: [
      {
        id: "includDmnFormWebapp",
        name: "Include DMN Form Webapp",
        description: "Wether to deploy the DMN Form Webapp as a sidecar container or not",
        type: "boolean",
        defaultValue: false,
        resourcePatches: [
          {
            targetKinds: ["Deployment"],
            jsonPatches: [
              {
                op: "add",
                path: "/spec/template/spec/containers/-",
                value: {
                  name: "${{ devDeployment.uniqueName }}-dmn-form-webapp",
                  image: args.dmnFormWebappImageUrl,
                  imagePullPolicy: args.imagePullPolicy,
                  ports: [{ containerPort: 8081, protocol: "TCP" }],
                },
              },
            ],
          },
        ],
        appendYamls: [FormWebappServiceYaml(), FormWebappIngressYaml()],
      },
    ],
    appendYamls: [IngressYaml()],
    resourcePatches: [
      {
        targetKinds: ["Deployment"],
        jsonPatches: [
          {
            op: "add",
            path: "/spec/template/spec/containers/0/env/-",
            value: { name: "BASE_URL", value: "http://localhost/${{ devDeployment.uniqueName }}" },
          },
          {
            op: "add",
            path: "/spec/template/spec/containers/0/env/-",
            value: { name: "ROOT_PATH", value: "/${{ devDeployment.uniqueName }}" },
          },
          {
            op: "add",
            path: "/spec/template/spec/containers/0/env/-",
            value: { name: "DEV_DEPLOYMENT__UPLOAD_SERVICE_ROOT_PATH", value: "${{ devDeployment.uniqueName }}" },
          },
        ],
      },
    ],
  };
  return [KogitoQuarkusBlankAppOption(args, kogitoQuarkusBlankAppOpts), CustomImageOption(args)];
}

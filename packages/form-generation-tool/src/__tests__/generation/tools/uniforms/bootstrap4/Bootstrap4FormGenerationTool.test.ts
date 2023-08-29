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

import { FormAsset } from "../../../../../generation/types";
import { ApplyForVisaSchema } from "./mock";
import {
  Bootstrap4FormConfig,
  Bootstrap4FormGenerationTool,
} from "../../../../../generation/tools/uniforms/bootstrap4/Bootstrap4FormGenerationTool";

describe("Bootstrap4FormGenerationTool tests", () => {
  it("Generate", () => {
    const tool = new Bootstrap4FormGenerationTool();

    const formAsset: FormAsset = tool.generate({
      name: "ApplyForVisa",
      schema: ApplyForVisaSchema,
    });

    expect(formAsset).not.toBeUndefined();
    expect(formAsset.id).toStrictEqual("ApplyForVisa");
    expect(formAsset.assetName).toStrictEqual("ApplyForVisa.html");
    expect(formAsset.content).not.toBeUndefined();
    expect(formAsset.config).not.toBeUndefined();
    expect(formAsset.config).toMatchObject(new Bootstrap4FormConfig(ApplyForVisaSchema));
  });
});

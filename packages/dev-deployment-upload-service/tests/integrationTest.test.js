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

const execSync = require("child_process").execSync;

const filePath = `${__dirname}/test.zip`;

describe("Test built images individually", () => {
  beforeAll(() => {
    execSync("pnpm start-test-servers && wait-on -t 2m http://localhost:8092/upload-status");
  });
  it("buildtime install", async () => {
    const response = execSync(
      `curl -X POST -H "Content-Type: multipart/form-data" -F "myFile=@${filePath}" http://localhost:8091/upload?apiKey=dev`
    ).toString();
    const dockerLogs = execSync(`docker logs ddus-buildtime-install`)
      .toString()
      .replace(/http:\/\/.*:/, "<ddus-fileserver-ip>:");
    expect(response).toMatchSnapshot();
    expect(dockerLogs).toMatchSnapshot();
  });
  it("runtime install", async () => {
    const response = execSync(
      `curl -X POST -H "Content-Type: multipart/form-data" -F "myFile=@${filePath}" http://localhost:8092/upload?apiKey=dev`
    ).toString();
    const dockerLogs = execSync(`docker logs ddus-runtime-install`)
      .toString()
      .replace(/http:\/\/.*:/, "<ddus-fileserver-ip>:");
    expect(response).toMatchSnapshot();
    expect(dockerLogs).toMatchSnapshot();
  });
  afterAll(() => {
    execSync("pnpm stop-test-servers");
  });
});

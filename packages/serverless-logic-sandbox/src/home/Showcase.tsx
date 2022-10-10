/*
 * Copyright 2022 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";
import { TextContent, Text } from "@patternfly/react-core/dist/js/components/Text";
import { Sample, SampleCard, SampleType } from "./SampleCard";
import { ReactComponent as GreetingsSvg } from "../../static/samples/greetings/greetings.svg";
import { ReactComponent as GreetingsKafkaSvg } from "../../static/samples/greetings-kafka/greetings-kafka.svg";
import { ReactComponent as CompensationSvg } from "../../static/samples/compensation/compensation.svg";
import { Gallery } from "@patternfly/react-core/dist/js/layouts/Gallery";

export const samples: Array<Sample> = [
  {
    name: "Greetings",
    fileName: "greetings",
    svg: GreetingsSvg,
    description: `This example shows a single Operation State with one action that calls the "greeting" function. The workflow data input is assumed to be the name of the person to greet. The results of the action is assumed to be the greeting for the provided persons name, which is added to the states data and becomes the workflow data output.`,
    type: SampleType.SW_JSON,
  },
  {
    name: "Greetings with Kafka events",
    fileName: "greetings-kafka",
    svg: GreetingsKafkaSvg,
    description: `This example is similar to the Greetings sample, but this time the "greeting" function is triggered via an Apache Kafka event. The event payload is assumed to be the name of the person to greet and in which language. The results of the action is assumed to be the greeting for the provided persons name, which is added to the states data and becomes the workflow data output.`,
    type: SampleType.SW_JSON,
  },
  {
    name: "Compensation",
    fileName: "compensation",
    svg: CompensationSvg,
    description: `This example contains a simple workflow service that illustrate compensation handling. This is simple workflow that expects a boolean shouldCompensate to indicate if compensation segment (which is composed by two inject states) should be executed or not. The process result is a boolean field compensated which value should match shouldCompensate.`,
    type: SampleType.SW_JSON,
  },
];

export function Showcase() {
  return (
    <>
      <TextContent>
        <Text component="h1">Samples Showcase</Text>
      </TextContent>
      <br />
      <Gallery
        hasGutter={true}
        minWidths={{ sm: "calc(100%/3.1 - 16px)", default: "100%" }}
        style={{
          overflowX: "auto",
          gridAutoFlow: "column",
          gridAutoColumns: "minmax(calc(100%/3.1 - 16px),1fr)",
          paddingBottom: "8px",
          paddingRight: "var(--pf-c-page__main-section--xl--PaddingRight)",
        }}
      >
        {samples.map((sample) => (
          <SampleCard sample={sample} key={sample.fileName} />
        ))}
      </Gallery>
    </>
  );
}

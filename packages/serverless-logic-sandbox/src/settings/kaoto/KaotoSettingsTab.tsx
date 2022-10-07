/*
 * Copyright 2021 Red Hat, Inc. and/or its affiliates.
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

import * as React from "react";
import { Form, FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { Page, PageSection } from "@patternfly/react-core/dist/js/components/Page";
import { Text, TextContent, TextVariants } from "@patternfly/react-core/dist/js/components/Text";
import { useCallback, useEffect, useState } from "react";
import { useSettings, useSettingsDispatch } from "../SettingsContext";
import { saveConfigCookie } from "./KaotoConfig";
import { Popover } from "@patternfly/react-core/dist/js/components/Popover";
import { HelpIcon, TimesIcon } from "@patternfly/react-icons/dist/js/icons";
import { InputGroup, InputGroupText } from "@patternfly/react-core/dist/js/components/InputGroup";
import { TextInput } from "@patternfly/react-core/dist/js/components/TextInput";
import { Button } from "@patternfly/react-core/dist/js/components/Button";

export function KaotoSettingsTab() {
  const settings = useSettings();
  const settingsDispatch = useSettingsDispatch();
  const [config, setConfig] = useState(settings.kaoto.config);

  useEffect(() => {
    settingsDispatch.kaoto.setConfig(config);
    saveConfigCookie(config);
  }, [config, settingsDispatch.kaoto]);

  const onBackendApiUrlChanged = useCallback(
    (apiUrl: string) => {
      setConfig({ ...config, kaotoBackendApiUrl: apiUrl });
    },
    [config]
  );

  return (
    <Page>
      <PageSection>
        <PageSection variant={"light"} isFilled={true} style={{ height: "100%" }}>
          <Form>
            <TextContent>
              <Text component={TextVariants.h3}>Kaoto</Text>
            </TextContent>
            <FormGroup
              label={"Host"}
              labelIcon={
                <Popover bodyContent={"The host associated with the Kaoto Backend instance."}>
                  <button
                    type="button"
                    aria-label="More info for host field"
                    onClick={(e) => e.preventDefault()}
                    aria-describedby="host-server-field"
                    className="pf-c-form__group-label-help"
                  >
                    <HelpIcon noVerticalAlign />
                  </button>
                </Popover>
              }
              isRequired
              fieldId="host-server-field"
            >
              <InputGroup className="pf-u-mt-sm">
                <TextInput
                  autoComplete={"off"}
                  isRequired
                  type="text"
                  id="host-server-field"
                  name="host-server-field"
                  aria-label="Host field"
                  aria-describedby="host-server-field-helper"
                  value={config.kaotoBackendApiUrl}
                  onChange={onBackendApiUrlChanged}
                  tabIndex={1}
                  data-testid="host-text-field"
                />
                <InputGroupText>
                  <Button
                    isSmall
                    variant="plain"
                    aria-label="Clear host button"
                    onClick={() => onBackendApiUrlChanged("")}
                  >
                    <TimesIcon />
                  </Button>
                </InputGroupText>
              </InputGroup>
            </FormGroup>
          </Form>
        </PageSection>
      </PageSection>
    </Page>
  );
}

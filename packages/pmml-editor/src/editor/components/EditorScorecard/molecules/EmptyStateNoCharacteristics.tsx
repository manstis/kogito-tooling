/*
 * Copyright 2020 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as React from "react";
import { Button, EmptyState, EmptyStateBody, EmptyStateVariant, Title } from "@patternfly/react-core";

interface EmptyStateNoCharacteristicsProps {
  addCharacteristic: () => void;
}

export const EmptyStateNoCharacteristics = (props: EmptyStateNoCharacteristicsProps) => (
  <EmptyState data-testid="empty-state-no-characteristics" variant={EmptyStateVariant.small}>
    <Title headingLevel="h4" size="lg">
      No Characteristics defined
    </Title>
    <EmptyStateBody>
      In a scorecard, input fields, also referred to as characteristics (for example, "age"), are broken down into
      attributes (for example, "19-29" and "30-39" age groups or ranges) with specific partial scores associated with
      them.
    </EmptyStateBody>
    <Button
      data-testid="empty-state-no-characteristics__create-characteristic"
      variant="primary"
      onClick={props.addCharacteristic}
    >
      Add Characteristic
    </Button>
  </EmptyState>
);
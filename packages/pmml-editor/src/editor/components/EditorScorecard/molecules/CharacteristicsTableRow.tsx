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
import { Split, SplitItem } from "@patternfly/react-core";
import { CharacteristicLabels, CharacteristicsTableAction } from "../atoms";
import { IndexedCharacteristic } from "../organisms";
import "./CharacteristicsTableRow.scss";

interface CharacteristicsTableRowProps {
  characteristic: IndexedCharacteristic;
  viewAttributes: () => void;
  onEdit: () => void;
  onDelete: () => void;
  isDisabled: boolean;
}

export const CharacteristicsTableRow = (props: CharacteristicsTableRowProps) => {
  const { isDisabled, characteristic, viewAttributes, onEdit, onDelete } = props;

  const index = characteristic.index;

  return (
    <article className={`characteristic-item characteristic-item-n${index}`}>
      <Split hasGutter={true} style={{ height: "100%" }}>
        <SplitItem>
          <strong>{characteristic.characteristic.name}</strong>
        </SplitItem>
        <SplitItem isFilled={true}>
          <CharacteristicLabels activeCharacteristic={characteristic.characteristic} viewAttributes={viewAttributes} />
        </SplitItem>
        <SplitItem>
          <CharacteristicsTableAction onEdit={() => onEdit()} onDelete={() => onDelete()} disabled={isDisabled} />
        </SplitItem>
      </Split>
    </article>
  );
};

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
import { useState } from "react";
import { Dropdown, DropdownItem, DropdownPosition, KebabToggle } from "@patternfly/react-core";

interface CharacteristicsTableActionProps {
  disabled: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

export const CharacteristicsTableAction = (props: CharacteristicsTableActionProps) => {
  const { disabled, onEdit, onDelete } = props;

  const [isOpen, setOpen] = useState(false);

  const onSelect = (event?: React.SyntheticEvent<HTMLDivElement>) => {
    setOpen(false);
  };

  const onToggle = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  return (
    <Dropdown
      isPlain
      position={DropdownPosition.right}
      isOpen={isOpen}
      onSelect={onSelect}
      toggle={<KebabToggle isDisabled={disabled} onToggle={onToggle} />}
      dropdownItems={[
        <DropdownItem key="edit" onClick={e => onEdit()}>
          Edit
        </DropdownItem>,
        <DropdownItem key="delete" onClick={e => onDelete()}>
          Delete
        </DropdownItem>
      ]}
    />
  );
};

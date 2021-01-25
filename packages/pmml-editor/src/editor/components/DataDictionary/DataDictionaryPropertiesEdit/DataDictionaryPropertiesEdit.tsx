/*
 * Copyright 2020 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Radio,
  Split,
  SplitItem,
  Stack,
  StackItem,
  TextInput,
  Title,
  TitleSizes,
  Tooltip
} from "@patternfly/react-core";
import { HelpIcon } from "@patternfly/react-icons";
import { ConstraintType, DDDataField } from "../DataDictionaryContainer/DataDictionaryContainer";
import ConstraintsEdit from "../ConstraintsEdit/ConstraintsEdit";
import "./DataDictionaryPropertiesEdit.scss";

interface DataDictionaryPropertiesEditProps {
  dataType: DDDataField;
  dataFieldIndex: number | undefined;
  onClose: () => void;
  onSave: (payload: Partial<DDDataField>) => void;
}

const DataDictionaryPropertiesEdit = (props: DataDictionaryPropertiesEditProps) => {
  const { dataType, dataFieldIndex, onClose, onSave } = props;
  const [displayName, setDisplayName] = useState(dataType.displayName ?? "");
  const [isCyclic, setIsCyclic] = useState(dataType.isCyclic);
  const [missingValue, setMissingValue] = useState(dataType.missingValue ?? "");
  const [invalidValue, setInvalidValue] = useState(dataType.invalidValue ?? "");

  useEffect(() => {
    setDisplayName(dataType.displayName ?? "");
    setIsCyclic(dataType.isCyclic);
    setMissingValue(dataType.missingValue ?? "");
    setInvalidValue(dataType.invalidValue ?? "");
  }, [dataType]);

  const saveCyclicProperty = (value: DDDataField["isCyclic"]) => {
    setIsCyclic(value);
    const updatedDataType: Partial<DDDataField> = {
      isCyclic: value
    };
    if (value === true) {
      if (dataType.optype === "ordinal" && dataType.constraints?.type !== ConstraintType.ENUMERATION) {
        updatedDataType.constraints = {
          type: ConstraintType.ENUMERATION,
          value: [""]
        };
      }
    }
    onSave(updatedDataType);
  };

  const isOptypeDisabled = useMemo(() => dataType.optype === "categorical", [dataType.optype]);

  const constraintAlert = useMemo(() => {
    if (dataType.optype === "continuous" && dataType.isCyclic && dataType.constraints === undefined) {
      return "Interval or Value constraints are required for cyclic continuous data types";
    }
    if (
      dataType.isCyclic &&
      dataType.optype === "continuous" &&
      dataType.constraints?.type === ConstraintType.RANGE &&
      dataType.constraints.value?.length > 1
    ) {
      return "Cyclic continuous data types can only have a single interval constraint";
    }
  }, [dataType]);

  return (
    <Stack hasGutter={true} className="data-dictionary__properties-edit">
      <StackItem>
        <Title headingLevel="h4" size={TitleSizes.xl}>
          <Button variant="link" isInline={true} onClick={onClose}>
            {dataType.name}
          </Button>
          &nbsp;/&nbsp;Properties
        </Title>
      </StackItem>
      <StackItem className="data-dictionary__properties-edit__form">
        <Form>
          <Split hasGutter={true}>
            <SplitItem style={{ marginRight: "2em" }}>
              <Stack hasGutter={true}>
                <StackItem>
                  <FormGroup
                    className="data-dictionary__properties-edit__field"
                    label="Display Name"
                    fieldId="display-name"
                    helperText="Display Name to use instead of the data type name"
                  >
                    <TextInput
                      type="text"
                      id="display-name"
                      name="display-name"
                      aria-describedby="Display Name"
                      value={displayName}
                      onChange={value => setDisplayName(value)}
                      autoComplete="off"
                      onBlur={() =>
                        onSave({
                          displayName: displayName === "" ? undefined : displayName
                        })
                      }
                    />
                  </FormGroup>
                </StackItem>
                <StackItem>
                  <FormGroup
                    className="data-dictionary__properties-edit__field"
                    label="Cyclic Type"
                    fieldId="is-cyclic"
                    isInline={true}
                    labelIcon={
                      dataType.optype === "categorical" ? (
                        <Tooltip content={"Categorical fields cannot be cyclic"}>
                          <button
                            aria-label="More info for name field"
                            onClick={e => e.preventDefault()}
                            aria-describedby="simple-form-name"
                            className="pf-c-form__group-label-help"
                          >
                            <HelpIcon style={{ color: "var(--pf-global--info-color--100)" }} />
                          </button>
                        </Tooltip>
                      ) : (
                        <></>
                      )
                    }
                  >
                    <Radio
                      isChecked={isCyclic === true}
                      name="isCyclic"
                      onChange={() => {
                        saveCyclicProperty(true);
                      }}
                      label="Yes"
                      id="isCyclic"
                      value="isCyclic"
                      isDisabled={isOptypeDisabled}
                    />
                    <Radio
                      isChecked={isCyclic === false}
                      name="isNotCyclic"
                      onChange={() => {
                        saveCyclicProperty(false);
                      }}
                      label="No"
                      id="isNotCyclic"
                      value="isNotCyclic"
                      isDisabled={isOptypeDisabled}
                    />
                    <Radio
                      isChecked={isCyclic === undefined}
                      name="cyclicNotSet"
                      onChange={() => {
                        saveCyclicProperty(undefined);
                      }}
                      label="Not Set"
                      id="cyclicNotSet"
                      value="cyclicNotSet"
                      isDisabled={isOptypeDisabled}
                    />
                  </FormGroup>
                </StackItem>
                <StackItem>
                  <FormGroup
                    className="data-dictionary__properties-edit__field"
                    label="Missing Value"
                    fieldId="missing-value"
                    helperText="Value for when the input is missing"
                  >
                    <TextInput
                      type="text"
                      id="missing-value"
                      name="missing-value"
                      aria-describedby="Missing Value"
                      value={missingValue}
                      onChange={value => setMissingValue(value)}
                      autoComplete="off"
                      onBlur={() =>
                        onSave({
                          missingValue: missingValue === "" ? undefined : missingValue
                        })
                      }
                    />
                  </FormGroup>
                </StackItem>
                <StackItem>
                  <FormGroup
                    className="data-dictionary__properties-edit__field"
                    label="Invalid Value"
                    fieldId="missing-value"
                    helperText="Value for when the input is invalid"
                  >
                    <TextInput
                      type="text"
                      id="invalid-value"
                      name="invalid-value"
                      aria-describedby="Invalid Value"
                      value={invalidValue}
                      onChange={value => setInvalidValue(value)}
                      autoComplete="off"
                      onBlur={() =>
                        onSave({
                          invalidValue: invalidValue === "" ? undefined : invalidValue
                        })
                      }
                    />
                  </FormGroup>
                </StackItem>
              </Stack>
            </SplitItem>
            <SplitItem isFilled={true}>
              {constraintAlert && (
                <Alert
                  variant="warning"
                  isInline={true}
                  className="data-dictionary__validation-alert"
                  title={constraintAlert}
                />
              )}
              <ConstraintsEdit dataType={dataType} dataFieldIndex={dataFieldIndex} onSave={onSave} />
            </SplitItem>
          </Split>
        </Form>
      </StackItem>
    </Stack>
  );
};

export default DataDictionaryPropertiesEdit;

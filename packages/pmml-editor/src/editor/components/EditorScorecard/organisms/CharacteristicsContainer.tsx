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
import { useCallback, useMemo, useState } from "react";
import { Stack, StackItem } from "@patternfly/react-core";
import { Operation } from "../Operation";
import { CharacteristicsTable, IndexedCharacteristic } from "./CharacteristicsTable";
import "./CharacteristicsContainer.scss";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Actions } from "../../../reducers";
import { useDispatch } from "react-redux";
import {
  AttributeEditor,
  AttributeToolbar,
  CharacteristicsToolbar,
  EmptyStateNoCharacteristics,
  EmptyStateNoMatchingCharacteristics
} from "../molecules";
import { Characteristic } from "@kogito-tooling/pmml-editor-marshaller";
import { isEqual } from "lodash";
import set = Reflect.set;
import get = Reflect.get;

interface CharacteristicsContainerProps {
  modelIndex: number;
  activeOperation: Operation;
  setActiveOperation: (operation: Operation) => void;
  characteristics: IndexedCharacteristic[];
  filter: string;
  onFilter: (filter: string) => void;
  deleteCharacteristic: (index: number) => void;
  commit: (index: number | undefined, characteristic: Characteristic) => void;
}

type CharacteristicsViewSection = "overview" | "attribute";

export const CharacteristicsContainer = (props: CharacteristicsContainerProps) => {
  const {
    modelIndex,
    activeOperation,
    setActiveOperation,
    characteristics,
    filter,
    onFilter,
    deleteCharacteristic,
    commit
  } = props;

  const dispatch = useDispatch();

  const [selectedCharacteristicIndex, setSelectedCharacteristicIndex] = useState<number | undefined>(undefined);
  const [selectedAttributeIndex, setSelectedAttributeIndex] = useState<number | undefined>(undefined);

  const [viewSection, setViewSection] = useState<CharacteristicsViewSection>("overview");
  const getTransition = (_viewSection: CharacteristicsViewSection) => {
    if (_viewSection === "overview") {
      return "characteristics-container__overview";
    } else {
      return "characteristics-container__attribute";
    }
  };

  const onViewOverviewView = () => {
    setActiveOperation(Operation.UPDATE_CHARACTERISTIC);
    setViewSection("overview");
  };

  const onViewAttribute = (index: number | undefined) => {
    if (index === undefined) {
      return;
    }
    setSelectedAttributeIndex(index);
    setViewSection("attribute");
  };

  const validateCharacteristicName = useCallback(
    (index: number | undefined, name: string): boolean => {
      if (name === undefined || name.trim() === "") {
        return false;
      }
      const matching = characteristics.filter(ic => index !== ic.index && ic.characteristic.name === name);
      return matching.length === 0;
    },
    [characteristics]
  );

  const onAddCharacteristic = useCallback(() => {
    let numberOfCharacteristics = characteristics?.length;
    if (numberOfCharacteristics !== undefined) {
      //Index of the new row is equal to the number of existing rows
      setSelectedCharacteristicIndex(numberOfCharacteristics);
      //TODO {manstis} This will need some more magic to ensure the new default does not already exist
      const newCharacteristicName = "New characteristic";
      commit(undefined, {
        name: newCharacteristicName,
        baselineScore: undefined,
        reasonCode: undefined,
        Attribute: []
      });
      setActiveOperation(Operation.UPDATE_CHARACTERISTIC);
    }
  }, [characteristics]);

  const onAddAttribute = useCallback(() => {
    if (selectedCharacteristicIndex === undefined) {
      return;
    }
    let numberOfAttributes = characteristics[selectedCharacteristicIndex].characteristic.Attribute.length;
    //Index of the new row is equal to the number of existing rows
    setSelectedAttributeIndex(numberOfAttributes);
    dispatch({
      type: Actions.Scorecard_AddAttribute,
      payload: {
        modelIndex: modelIndex,
        characteristicIndex: selectedCharacteristicIndex,
        text: "True",
        partialScore: undefined,
        reasonCode: undefined
      }
    });
    setActiveOperation(Operation.UPDATE_ATTRIBUTE);
    setViewSection("attribute");
  }, [characteristics, selectedCharacteristicIndex]);

  const onCommitAndClose = () => {
    onCommit({});
    onCancel();
  };

  const onCommit = (partial: Partial<Characteristic>) => {
    if (selectedCharacteristicIndex !== undefined) {
      const characteristic = characteristics[selectedCharacteristicIndex].characteristic;
      const existingPartial: Partial<Characteristic> = {};
      Object.keys(partial).forEach(key => set(existingPartial, key, get(characteristic, key)));

      if (!isEqual(partial, existingPartial)) {
        commit(selectedCharacteristicIndex, { ...characteristic, ...partial });
      }
    }
  };

  const onCancel = () => {
    setSelectedCharacteristicIndex(undefined);
    setActiveOperation(Operation.NONE);
  };

  const emptyStateProvider = useMemo(() => {
    if (filter === "") {
      return <EmptyStateNoCharacteristics addCharacteristic={onAddCharacteristic} />;
    } else {
      return (
        <Stack hasGutter={true}>
          <StackItem>
            <CharacteristicsToolbar onFilter={onFilter} onAddCharacteristic={onAddCharacteristic} />
            <EmptyStateNoMatchingCharacteristics />
          </StackItem>
        </Stack>
      );
    }
  }, [filter]);

  return (
    <div className="characteristics-container">
      {characteristics.length === 0 && emptyStateProvider}
      {characteristics.length > 0 && (
        <SwitchTransition mode={"out-in"}>
          <CSSTransition
            timeout={{
              enter: 230,
              exit: 100
            }}
            classNames={getTransition(viewSection)}
            key={viewSection}
          >
            <>
              {viewSection === "overview" && (
                <Stack hasGutter={true}>
                  <StackItem>
                    <CharacteristicsToolbar onFilter={onFilter} onAddCharacteristic={onAddCharacteristic} />
                  </StackItem>
                  <StackItem className="characteristics-container__overview">
                    <CharacteristicsTable
                      modelIndex={modelIndex}
                      activeOperation={activeOperation}
                      setActiveOperation={setActiveOperation}
                      characteristics={characteristics}
                      selectedCharacteristicIndex={selectedCharacteristicIndex}
                      setSelectedCharacteristicIndex={setSelectedCharacteristicIndex}
                      validateCharacteristicName={validateCharacteristicName}
                      viewAttribute={onViewAttribute}
                      deleteCharacteristic={deleteCharacteristic}
                      onAddAttribute={onAddAttribute}
                      onCommitAndClose={onCommitAndClose}
                      onCommit={onCommit}
                      onCancel={onCancel}
                    />
                  </StackItem>
                </Stack>
              )}
              {viewSection === "attribute" && (
                <Stack hasGutter={true}>
                  <StackItem>
                    <AttributeToolbar viewOverview={onViewOverviewView} />
                  </StackItem>
                  <StackItem className="characteristics-container__attribute">
                    <AttributeEditor
                      modelIndex={modelIndex}
                      activeOperation={activeOperation}
                      characteristicIndex={selectedCharacteristicIndex}
                      attributeIndex={selectedAttributeIndex}
                      onCancel={onViewOverviewView}
                      onCommit={(_index, _content) => {
                        if (_index === undefined) {
                          dispatch({
                            type: Actions.Scorecard_AddAttribute,
                            payload: {
                              modelIndex: modelIndex,
                              characteristicIndex: selectedCharacteristicIndex,
                              text: _content.text,
                              partialScore: _content.partialScore,
                              reasonCode: _content.reasonCode
                            }
                          });
                        } else {
                          dispatch({
                            type: Actions.Scorecard_UpdateAttribute,
                            payload: {
                              modelIndex: modelIndex,
                              characteristicIndex: selectedCharacteristicIndex,
                              attributeIndex: selectedAttributeIndex,
                              text: _content.text,
                              partialScore: _content.partialScore,
                              reasonCode: _content.reasonCode
                            }
                          });
                        }
                      }}
                    />
                  </StackItem>
                </Stack>
              )}
            </>
          </CSSTransition>
        </SwitchTransition>
      )}
    </div>
  );
};

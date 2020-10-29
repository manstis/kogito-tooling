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
import { PageSection, PageSectionVariants } from "@patternfly/react-core";
import { Header } from "../../Header/molecules";
import { Characteristic, Characteristics, Model, PMML, Scorecard } from "@kogito-tooling/pmml-editor-marshaller";
import {
  CharacteristicDefinition,
  CharacteristicsTable,
  CorePropertiesTable,
  IndexedCharacteristic
} from "../organisms";
import { getModelName } from "../../..";
import { Actions } from "../../../reducers";
import { useDispatch, useSelector } from "react-redux";
import { CharacteristicsToolbar } from "../molecules";
import "./ScorecardEditorPage.scss";

interface ScorecardEditorPageProps {
  path: string;
  modelIndex: number;
  model: Scorecard;
}

export const ScorecardEditorPage = (props: ScorecardEditorPageProps) => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("");
  const [showCharacteristicPanel, setShowCharacteristicPanel] = useState(false);
  const [selectedCharacteristic, setSelectedCharacteristic] = useState<IndexedCharacteristic | undefined>(undefined);

  const characteristics: Characteristics | undefined = useSelector<PMML, Characteristics | undefined>((state: PMML) => {
    const model: Model | undefined = state.models ? state.models[props.modelIndex] : undefined;
    if (model && model instanceof Scorecard) {
      return (model as Scorecard).Characteristics;
    }
    return undefined;
  });

  const onAddCharacteristic = useCallback(() => {
    setShowCharacteristicPanel(true);
    setSelectedCharacteristic({
      index: undefined,
      characteristic: { name: undefined, baselineScore: undefined, reasonCode: undefined, Attribute: [] }
    });
  }, [characteristics]);

  const selectCharacteristic = useCallback(
    index => {
      setShowCharacteristicPanel(true);
      setSelectedCharacteristic({
        index: index,
        characteristic: characteristics?.Characteristic[index] as Characteristic
      });
    },
    [characteristics]
  );

  const validateCharacteristicName = useCallback(
    (index: number | undefined, name: string): boolean => {
      if (name === undefined || name === "") {
        return false;
      }
      const existing: Characteristic[] = characteristics?.Characteristic ?? [];
      const matching = existing.filter((c, _index) => _index !== index && c.name === name);
      return matching.length === 0;
    },
    [characteristics]
  );

  const hideCharacteristicPanel = useCallback(() => {
    setShowCharacteristicPanel(false);
  }, [characteristics]);

  const filterCharacteristics = useCallback((): IndexedCharacteristic[] => {
    const _lowerCaseFilter = filter.toLowerCase();
    const _filteredCharacteristics = characteristics?.Characteristic.map<IndexedCharacteristic>(
      (_characteristic, index) => ({ index: index, characteristic: _characteristic } as IndexedCharacteristic)
    ).filter(ic => {
      const _characteristicName = ic.characteristic.name;
      return _characteristicName?.toLowerCase().includes(_lowerCaseFilter);
    });
    return _filteredCharacteristics ?? [];
  }, [filter, characteristics]);

  const filteredCharacteristics: IndexedCharacteristic[] = useMemo(() => filterCharacteristics(), [
    filter,
    characteristics
  ]);

  return (
    <div data-testid="editor-page" className={"editor"}>
      <CharacteristicDefinition
        characteristic={selectedCharacteristic}
        showCharacteristicPanel={showCharacteristicPanel}
        hideCharacteristicPanel={hideCharacteristicPanel}
        validateCharacteristicName={validateCharacteristicName}
        commit={_props => {
          if (_props.characteristic?.index === undefined) {
            dispatch({
              type: Actions.Scorecard_AddCharacteristic,
              payload: {
                modelIndex: props.modelIndex,
                name: _props.characteristic?.characteristic.name,
                reasonCode: _props.characteristic?.characteristic.reasonCode,
                baselineScore: _props.characteristic?.characteristic.baselineScore
              }
            });
          } else {
            dispatch({
              type: Actions.Scorecard_UpdateCharacteristic,
              payload: {
                modelIndex: props.modelIndex,
                characteristicIndex: _props.characteristic?.index,
                name: _props.characteristic?.characteristic.name,
                reasonCode: _props.characteristic?.characteristic.reasonCode,
                baselineScore: _props.characteristic?.characteristic.baselineScore
              }
            });
          }
        }}
      />

      <PageSection variant={PageSectionVariants.light} isFilled={false}>
        <Header title={getModelName(props.model)} />
      </PageSection>

      <PageSection isFilled={false}>
        <CorePropertiesTable
          isScorable={props.model.isScorable ?? true}
          functionName={props.model.functionName}
          algorithmName={props.model.algorithmName ?? ""}
          baselineScore={props.model.baselineScore ?? 0}
          baselineMethod={props.model.baselineMethod ?? "other"}
          initialScore={props.model.initialScore ?? 0}
          useReasonCodes={props.model.useReasonCodes ?? true}
          reasonCodeAlgorithm={props.model.reasonCodeAlgorithm ?? "pointsBelow"}
          commit={_props => {
            dispatch({
              type: Actions.Scorecard_SetCoreProperties,
              payload: {
                modelIndex: props.modelIndex,
                isScorable: _props.isScorable,
                functionName: _props.functionName,
                algorithmName: _props.algorithmName,
                baselineScore: _props.baselineScore,
                baselineMethod: _props.baselineMethod,
                initialScore: _props.initialScore,
                useReasonCodes: _props.useReasonCodes,
                reasonCodeAlgorithm: _props.reasonCodeAlgorithm
              }
            });
          }}
        />
      </PageSection>

      <PageSection isFilled={true} style={{ paddingTop: "0px" }}>
        <PageSection variant={PageSectionVariants.light}>
          <CharacteristicsToolbar onFilter={setFilter} onAddCharacteristic={onAddCharacteristic} />
          <CharacteristicsTable
            characteristics={filteredCharacteristics}
            onRowClick={index => selectCharacteristic(index)}
            onRowDelete={index => {
              if (window.confirm(`Delete Characteristic "${index}"?`)) {
                dispatch({
                  type: Actions.Scorecard_DeleteCharacteristic,
                  payload: {
                    modelIndex: props.modelIndex,
                    characteristicIndex: index
                  }
                });
              }
            }}
            onAddCharacteristic={onAddCharacteristic}
            validateCharacteristicName={validateCharacteristicName}
            commitCharacteristicUpdate={_props => {
              if (_props.index === undefined) {
                dispatch({
                  type: Actions.Scorecard_AddCharacteristic,
                  payload: {
                    modelIndex: props.modelIndex,
                    name: _props.characteristic.name,
                    reasonCode: _props.characteristic.reasonCode,
                    baselineScore: _props.characteristic.baselineScore
                  }
                });
              } else {
                dispatch({
                  type: Actions.Scorecard_UpdateCharacteristic,
                  payload: {
                    modelIndex: props.modelIndex,
                    characteristicIndex: _props.index,
                    name: _props.characteristic.name,
                    reasonCode: _props.characteristic.reasonCode,
                    baselineScore: _props.characteristic.baselineScore
                  }
                });
              }
            }}
          />
        </PageSection>
      </PageSection>
    </div>
  );
};

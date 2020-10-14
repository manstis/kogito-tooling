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
import { CharacteristicsTable, CorePropertiesTable } from "../organisms";
import { getModelName } from "../../../utils";
import { Actions } from "../../../reducers";
import { useDispatch, useSelector } from "react-redux";
import { CharacteristicsToolbar } from "../molecules";

interface EditorPageProps {
  path: string;
  index: number;
  model: Scorecard;
}

export const ScorecardEditorPage = (props: EditorPageProps) => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("");

  const onAddCharacteristic = useCallback(() => window.alert("Add Characteristic"), []);

  const characteristics: Characteristics | undefined = useSelector<PMML, Characteristics | undefined>((state: PMML) => {
    const model: Model | undefined = state.models ? state.models[props.index] : undefined;
    if (model && model instanceof Scorecard) {
      return (model as Scorecard).Characteristics;
    }
    return undefined;
  });

  const filterCharacteristics = useCallback((): Characteristic[] => {
    const _lowerCaseFilter = filter.toLowerCase();
    const _filteredCharacteristics = characteristics?.Characteristic.filter((_characteristic: Characteristic) => {
      const _characteristicName = _characteristic.name;
      return _characteristicName?.toLowerCase().includes(_lowerCaseFilter);
    });
    return _filteredCharacteristics ?? [];
  }, [filter, characteristics]);

  const filteredCharacteristics: Characteristic[] = useMemo(() => filterCharacteristics(), [filter, characteristics]);

  return (
    <div data-testid="editor-page">
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
                index: props.index,
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
            onRowClick={index => null}
            onAddCharacteristic={onAddCharacteristic}
          />
        </PageSection>
      </PageSection>
    </div>
  );
};

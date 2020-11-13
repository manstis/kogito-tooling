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
import { ActionMap, Actions } from "./Actions";
import { HistoryAwareReducer, HistoryService } from "../history";
import {
  DataType,
  FieldName,
  OpType,
  OutputField,
  RankOrder,
  ResultFeature
} from "@kogito-tooling/pmml-editor-marshaller";
import { Reducer } from "react";

interface OutputFieldPayload {
  [Actions.UpdateOutput]: {
    readonly modelIndex: number;
    readonly outputIndex: number;
    readonly name: FieldName;
    readonly dataType: DataType;
    readonly optype: OpType | undefined;
    readonly targetField: FieldName | undefined;
    readonly feature: ResultFeature | undefined;
    readonly value: any | undefined;
    readonly rank: number | undefined;
    readonly rankOrder: RankOrder | undefined;
    readonly segmentId: string | undefined;
    readonly isFinalResult: boolean | undefined;
  };
}

export type OutputFieldActions = ActionMap<OutputFieldPayload>[keyof ActionMap<OutputFieldPayload>];

export const OutputFieldReducer: HistoryAwareReducer<OutputField[], OutputFieldActions> = (
  service: HistoryService
): Reducer<OutputField[], OutputFieldActions> => {
  return (state: OutputField[], action: OutputFieldActions) => {
    switch (action.type) {
      case Actions.UpdateOutput:
        return service.mutate(state, `models[${action.payload.modelIndex}].Output.OutputField`, draft => {
          const outputIndex = action.payload.outputIndex;
          if (outputIndex >= 0 && outputIndex < draft.length) {
            draft[outputIndex] = {
              ...draft[outputIndex],
              name: action.payload.name,
              dataType: action.payload.dataType,
              optype: action.payload.optype,
              targetField: action.payload.targetField,
              feature: action.payload.feature,
              value: action.payload.value,
              rank: action.payload.rank,
              rankOrder: action.payload.rankOrder,
              segmentId: action.payload.segmentId,
              isFinalResult: action.payload.isFinalResult
            };
          }
        });
    }

    return state;
  };
};
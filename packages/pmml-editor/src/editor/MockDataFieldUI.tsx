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
import { Actions } from "./reducers/Actions";
import { DataField, FieldName } from "@kogito-tooling/pmml-editor-marshaller";
import { AppContext } from "./PMMLEditorContextProvider";

const style = {
  padding: "5px 5px 5px 5px"
};

interface Props {
  readonly index: number;
  readonly field: DataField;
}

const MockDataFieldUI = (props: Props) => {
  const { dispatch } = React.useContext(AppContext);

  const setDataFieldName = (name: FieldName) => {
    dispatch({
      type: Actions.SetDataFieldName,
      payload: {
        index: props.index,
        name: name
      }
    });
  };

  const deleteDataField = () => {
    dispatch({
      type: Actions.DeleteDataField,
      payload: {
        dataFieldIndex: props.index
      }
    });
  };

  return (
    <div style={style}>
      <input
        value={props.field.name as string}
        onChange={e => setDataFieldName(e.target.value as FieldName)}
        placeholder="Name"
      />
      <button onClick={() => deleteDataField()}>Delete</button>
    </div>
  );
};

export default MockDataFieldUI;

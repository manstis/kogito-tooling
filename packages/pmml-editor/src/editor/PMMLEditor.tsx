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
import { KogitoEditorChannelApi } from "@kogito-tooling/editor/dist/api";
import { MessageBusClientApi } from "@kogito-tooling/envelope-bus/dist/api";
import * as React from "react";
import { Reducer } from "react";
import { HistoryLog, StateButtons } from "./MockHistoryUI";
import { enableAllPlugins } from "immer";
import MockVersionUI from "./MockVersionUI";
import MockDataFieldsUI from "./MockDataFieldsUI";
import MockSummaryUI from "./MockSummaryUI";
import MockHeaderUI from "./MockHeaderUI";
import { createStore, Store } from "redux";
import { PMMLReducer } from "./reducers/PMMLReducer";
import { AllActions } from "./reducers/Actions";
import { PMML } from "@kogito-tooling/pmml-editor-marshaller";
import { Provider } from "react-redux";
import mergeReducers from "combine-reducer";
import { HeaderReducer } from "./reducers/HeaderReducer";
import { DataDictionaryReducer } from "./reducers/DataDictionaryReducer";
import { DataFieldReducer } from "./reducers/DataFieldReducer";

enableAllPlugins();

const reducer: Reducer<PMML, AllActions> = mergeReducers(PMMLReducer, {
  Header: HeaderReducer,
  DataDictionary: mergeReducers(DataDictionaryReducer, { DataField: DataFieldReducer })
});

const store: Store<PMML, AllActions> = createStore(reducer, {
  Header: { description: "" },
  DataDictionary: {
    DataField: []
  },
  version: "1.0"
});

export interface Props {
  exposing: (s: PMMLEditor) => void;
  channelApi: MessageBusClientApi<KogitoEditorChannelApi>;
}

export interface State {
  path: string;
  content: string;
  originalContent: string;
}

export class PMMLEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    props.exposing(this);
    this.state = {
      path: "",
      content: "",
      originalContent: ""
    };
  }

  public componentDidMount(): void {
    this.props.channelApi.notifications.receive_ready();
  }

  public setContent(path: string, content: string): Promise<void> {
    return new Promise<void>(res => this.setState({ path: path, content: content, originalContent: content }, res));
  }

  public getContent(): Promise<string> {
    return new Promise<string>(res => this.state.content);
  }

  public render() {
    return (
      <Provider store={store}>
        <StateButtons />
        <hr />
        <MockVersionUI />
        <hr />
        <MockHeaderUI />
        <hr />
        <MockDataFieldsUI />
        <hr />
        <MockSummaryUI />
        <hr />
        <HistoryLog />
      </Provider>
    );
  }
}

export const Timestamp = () => {
  return (
    <div>
      <sub>Rendered: {new Date().getTime()}</sub>
    </div>
  );
};

interface TitleProps {
  title: string;
}

export const Title = (props: TitleProps) => {
  return <h1 className="pf-c-title pf-m-xl">{props.title}</h1>;
};

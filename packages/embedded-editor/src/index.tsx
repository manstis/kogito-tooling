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

import { EditorContent } from "@kogito-tooling/core-api";
import * as React from "react";
import { useRef } from "react";
import * as ReactDOM from "react-dom";
import { EMPTY_FILE_DMN } from "./common/File";
import { EmbeddedEditor, EmbeddedEditorRef } from "./EmbeddedEditor";
import { EmbeddedViewer } from "./EmbeddedViewer";

interface Props { }

const App = (props: Props) => {

  const editorRef = useRef<EmbeddedEditorRef>(null);

  return (
    <>
      <p><h1>Viewer</h1></p>
      <EmbeddedViewer file={EMPTY_FILE_DMN} />

      <p><h1>Editor</h1></p>
      <button onClick={(e: React.MouseEvent) => editorRef.current?.requestContent()}>Get content</button>
      <EmbeddedEditor
        ref={editorRef}
        file={EMPTY_FILE_DMN}
        onContentResponse={(content: EditorContent) => window.alert(content.content)}
      />
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("app")!
);

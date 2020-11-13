import * as React from "react";
import {
  Button,
  ButtonVariant,
  Modal,
  ModalVariant,
  Split,
  SplitItem,
  Title,
  TitleSizes
} from "@patternfly/react-core";
import { CloseIcon } from "@patternfly/react-icons";
import { Operation } from "../../EditorScorecard";
import MiningSchemaContainer from "../MiningSchemaContainer/MiningSchemaContainer";
import { useState } from "react";
import { DataDictionary, MiningField, MiningSchema, PMML } from "@kogito-tooling/pmml-editor-marshaller";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../../reducers";

interface MiningSchemaHandlerProps {
  activeOperation: Operation;
  setActiveOperation?: (operation: Operation) => void;
  miningSchema?: MiningSchema;
  modelIndex: number;
}

const MiningSchemaHandler = (props: MiningSchemaHandlerProps) => {
  const { activeOperation, miningSchema, modelIndex } = props;
  const [isMiningSchemaOpen, setIsMiningSchemaOpen] = useState(false);
  const dispatch = useDispatch();
  const dataDictionary = useSelector<PMML, DataDictionary | undefined>((state: PMML) => state.DataDictionary);

  const addMiningField = (names: string[]) => {
    dispatch({
      type: Actions.AddMiningSchemaFields,
      payload: {
        modelIndex: modelIndex,
        names: names
      }
    });
  };

  const deleteMiningField = (index: number) => {
    dispatch({
      type: Actions.DeleteMiningSchemaField,
      payload: {
        modelIndex: modelIndex,
        miningSchemaIndex: index
      }
    });
  };

  const updateField = (index: number, field: MiningField) => {
    dispatch({
      type: Actions.UpdateMiningSchemaField,
      payload: {
        modelIndex: modelIndex,
        miningSchemaIndex: index,
        ...field
      }
    });
  };

  const handleMiningSchemaToggle = () => {
    setIsMiningSchemaOpen(!isMiningSchemaOpen);
  };

  const header = (
    <Split hasGutter={true}>
      <SplitItem isFilled={true}>
        <Title headingLevel="h1" size={TitleSizes["2xl"]}>
          Mining Schema
        </Title>
      </SplitItem>
      <SplitItem>
        <Button type="button" variant={ButtonVariant.plain} onClick={handleMiningSchemaToggle}>
          <CloseIcon />
        </Button>
      </SplitItem>
    </Split>
  );

  return (
    <>
      <Button variant="secondary" isDisabled={activeOperation !== Operation.NONE} onClick={handleMiningSchemaToggle}>
        Set Mining Schema
      </Button>
      <Modal
        aria-label="mining-schema"
        title="Mining Schema"
        header={header}
        isOpen={isMiningSchemaOpen}
        showClose={false}
        variant={ModalVariant.large}
        onEscapePress={() => false}
      >
        <MiningSchemaContainer
          miningSchema={miningSchema}
          dataDictionary={dataDictionary}
          onAddField={addMiningField}
          onDeleteField={deleteMiningField}
          onUpdateField={updateField}
        />
      </Modal>
    </>
  );
};

export default MiningSchemaHandler;
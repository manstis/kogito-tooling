import * as React from "react";
import { useEffect, useState } from "react";
import {
  ActionGroup,
  Button,
  Form,
  FormGroup,
  Stack,
  StackItem,
  Text,
  TextArea,
  TextContent,
  TextVariants
} from "@patternfly/react-core";
import "./OutputsBatchAdd.scss";

interface OutputsBatchAddProps {
  onAdd: (types: string) => void;
  onCancel: () => void;
}

const OutputsBatchAdd = ({ onAdd, onCancel }: OutputsBatchAddProps) => {
  const [input, setInput] = useState("");
  const [inputValidation, setInputValidation] = useState<"success" | "error" | "default">("default");

  useEffect(() => {
    document.querySelector<HTMLInputElement>(`#outputs`)?.focus();
  }, []);

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const validateInput = () => {
    const validation = input.trim().length > 0 ? "success" : "error";
    setInputValidation(validation);
    return validation;
  };

  const handleSubmit = (event: React.FormEvent) => {
    if (validateInput() === "success") {
      onAdd(input);
    }
    event.preventDefault();
  };

  return (
    <section>
      <Stack hasGutter={true}>
        <StackItem>
          <TextContent>
            <Text component={TextVariants.h3}>Add Multiple Output Fields</Text>
            <Text component={TextVariants.p}>
              You can add multiple outputs by entering their names below. Add them one per line.
              <br />
              They will be created with the default type of <em>String</em>. You will be able to edit them later.
            </Text>
          </TextContent>
        </StackItem>
        <StackItem>
          <Form onSubmit={handleSubmit} style={{ gridGap: 0 }}>
            <FormGroup
              label="Outputs"
              fieldId="outputs"
              isRequired={true}
              validated={inputValidation}
              helperTextInvalid={"Please enter at least one Output name"}
            >
              <TextArea
                className="outputs-container__multiple-outputs"
                value={input}
                onChange={handleInputChange}
                name="outputs"
                isRequired={true}
                id="outputs"
                placeholder={"First Output\nSecond Output\n..."}
              />
            </FormGroup>
            <ActionGroup>
              <Button variant="primary" type="submit">
                Add Them
              </Button>
              <Button variant="link" onClick={() => onCancel()}>
                Never mind
              </Button>
            </ActionGroup>
          </Form>
        </StackItem>
      </Stack>
    </section>
  );
};

export default OutputsBatchAdd;

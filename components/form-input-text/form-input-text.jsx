import React from "react";

import { Group, Input, Label, WarningMessage } from "./form-input-text.style";

const FormInput = ({
  handleChange,
  label,
  required,
  warningMessage,
  name,
  value,
  type,
  light,
}) => (
  <Group light={light}>
    <Label light={light}>
      {label}
      {required ? <span>*</span> : null}
    </Label>
    <Input
      light={light}
      onChange={handleChange}
      required={required}
      type={type}
      name={name}
      value={value}
      warningMessage={warningMessage}
    />
    {warningMessage.length > 0 ? (
      <WarningMessage light={light}>{warningMessage}</WarningMessage>
    ) : null}
  </Group>
);

export default FormInput;

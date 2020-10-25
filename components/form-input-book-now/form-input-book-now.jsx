import React from "react";

import { Group, Input, Label } from "./form-input-book-now.style";

const FormInput = ({ handleChange, label, required, name, value, type }) => (
  <Group>
    <Label>
      {label}
      {required ? <span>*</span> : null}
    </Label>
    <Input
      onChange={handleChange}
      required={required}
      type={type}
      name={name}
      value={value}
    />
  </Group>
);

export default FormInput;

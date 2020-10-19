import React from "react";
import {
  Group,
  Input,
  TextArea,
  Label,
  Submit,
  WarningMessage,
} from "./form-input.style.jsx";

export const FormInput = ({
  handleChange,
  label,
  required,
  warningMessage,
  ...otherProps
}) => (
  <Group>
    {required && label ? (
      <Label>
        {label}
        <sup>*</sup>
      </Label>
    ) : label ? (
      <Label>{label}</Label>
    ) : null}
    <Input onChange={handleChange} required={required} {...otherProps} />
    {warningMessage ? <WarningMessage>{warningMessage}</WarningMessage> : null}
  </Group>
);

export const FormText = ({ handleChange, label, required, ...otherProps }) => (
  <Group>
    {required && label ? (
      <Label>
        {label}
        <sup>*</sup>
      </Label>
    ) : label ? (
      <Label>{label}</Label>
    ) : null}
    <TextArea onChange={handleChange} required={required} {...otherProps} />
  </Group>
);

export const FormSubmit = ({ value, ...otherProps }) => (
  <Submit type="submit" value={value} {...otherProps} />
);

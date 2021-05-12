import React from 'react';

import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

export type FieldState<T> = {
  hasError: boolean,
  value: T,
  error: boolean;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
};

export type FieldProps = {
  fieldState: FieldState<string>
  id: string,
  label: string,
};

const InputField: React.FC<FieldProps> = (props) => (
  <FormControl fullWidth>
    <InputLabel
      error={props.fieldState.hasError}
      htmlFor={props.id}>
      {props.label}
    </InputLabel>
    <Input
      fullWidth
      error={props.fieldState.hasError}
      id={props.id}
      value={props.fieldState.value}
      onChange={(e) => { props.fieldState.onChange(e.target.value as any) }}
    />
    <FormHelperText error={props.fieldState.hasError}>{props.fieldState.error}</FormHelperText>
  </FormControl>)


export default InputField;

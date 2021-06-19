import React from 'react';
import { TextField } from '@material-ui/core';

export default function Input(props) {
  const { name, label, value, error = null, onChange, size, ...other } = props;
  return (
    <TextField
      variant='outlined'
      label={label}
      size={size || 'large'}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}

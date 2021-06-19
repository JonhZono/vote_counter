import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

export function useForm(
  initialValue,
  validationOnChange = false,
  formValidation
) {
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    //check the realtime validation
    if (validationOnChange) {
      formValidation({ [name]: value });
    }
  };
  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '100%',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '5px',
    },
  },
}));

export function Form(props) {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form className={classes.root} noValidate autoComplete='off' {...other}>
      {children}
    </form>
  );
}

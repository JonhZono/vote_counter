import React from 'react';
//import { useHistory } from 'react-router-dom';
import { Form, useForm } from '../../hooks/FormHook';
import Controls from '../../controls/Controls';
import { InputAdornment, makeStyles } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';

const initialValue = {
  phoneNumber: '093849384',
};
const useStyles = makeStyles(() => ({
  forgot: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    fontSize: '1rem',
    color: '#c62828',
    marginTop: '15px',
  },
  error: {
    color: '#c62828',
    textAlign: 'center',
  },
  success: {
    color: '#295ee7',
    textAlign: 'center',
  },
}));
export const LoginForm = () => {
  const classes = useStyles();
  //const history = useHistory();
  const formValidation = (fieldValues = values) => {
    let temp = { ...errors };
    if ('phoneNumber' in fieldValues) {
      temp.password =
        fieldValues.phoneNumber.length >= 9
          ? ''
          : 'Password must be at least 9 characters';
    }
    setErrors({ ...temp });
    //to check if we are calling formValidation inside handleSubmit or not
    if (fieldValues === values)
      return Object.values(temp).every((y) => y === '');
  };

  const { values, setValues, errors, setErrors, handleInputChange } = useForm(
    initialValue,
    true,
    formValidation
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation()) {
      //call api and check if phone number is correct
      //return history.push('/verify');
    }
  };
  //
  return (
    <Form onSubmit={handleSubmit}>
      <Controls.Input
        name='phoneNumber'
        label='Enter Phone Number'
        value={values.phoneNumber}
        onChange={handleInputChange}
        error={errors.phoneNumber}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <PhoneIcon />
            </InputAdornment>
          ),
        }}
      />
      <Controls.Button type='submit' text='Continue →' />
    </Form>
  );
};

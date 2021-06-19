import React from 'react';
//import { useHistory } from 'react-router-dom';
import { Form, useForm } from '../../hooks/FormHook';
import Controls from '../../controls/Controls';
import {
  InputAdornment,
  makeStyles,
  Grid,
  Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import thumbnail from '../../assets/vote_background.svg';
import Logo from '../../assets/logo.svg';

const initialValue = {
  code: '123456',
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  login: {
    position: 'relative',
    top: '6%',
    maxHeight: '100%',
    textAlign: 'left',
    padding: theme.spacing(6),
  },
  picture: {
    width: 'auto',
    height: '100vh',
    maxHeight: '100%',
    margin: 0,
    padding: 0,
    backgroundImage: `url(${thumbnail})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 'auto',
    height: '10vh',
    maxHeight: '100%',
    marginBottom: '15px',
    padding: '70px',
    backgroundImage: `url(${Logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
  },
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
const Verify = () => {
  const classes = useStyles();
  //const history = useHistory();
  const formValidation = (fieldValues = values) => {
    let temp = { ...errors };
    if ('code' in fieldValues) {
      temp.code =
        fieldValues.code.length >= 6
          ? ''
          : 'Code must be at least 6 characters';
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
      //call api and check if code is correct
      //return history.push('/dashboard');
    }
  };
  //
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <div className={classes.login}>
            <div className={classes.logo}></div>
            <Typography variant='h5' component='h6'>
              <span style={{ color: '#46455a', textTransform: 'uppercase' }}>
                <b>Welcome to</b>
              </span>
              <i>
                <span style={{ color: '#62B38D' }}>LDP Family</span>
              </i>
            </Typography>
            <Form onSubmit={handleSubmit}>
              <Controls.Input
                name='code'
                label='Enter code'
                type='password'
                value={values.code}
                onChange={handleInputChange}
                error={errors.code}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LockOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Controls.Button type='submit' text='Sign In →' />
            </Form>
          </div>
        </Grid>
        <Grid item sm={8}>
          <div className={classes.picture}></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Verify;

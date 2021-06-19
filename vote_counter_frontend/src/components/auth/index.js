import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { LoginForm } from './LoginForm';
import thumbnail from '../../assets/vote_background.svg';
import Logo from '../../assets/logo.svg';

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
}));

const Login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
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
                <span style={{ color: '#62B38D' }}>
                  LDP Family
                </span>
              </i>
            </Typography>
            <LoginForm />
          </div>
        </Grid>
        <Grid item sm={8}>
          <div className={classes.picture}></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;

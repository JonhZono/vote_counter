import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//import { useSelector } from 'react-redux';
import { MainLayout } from '../main/MainLayout';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  //const { isAuth } = useSelector((state) => state.login);
  const isAuth = true;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component />;
        } else {
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />;
        }
      }}
    />
  );
};

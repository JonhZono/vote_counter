import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  //const { isAuth } = useSelector((state) => state.login); ->redux state
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

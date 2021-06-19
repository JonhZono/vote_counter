import React from 'react';
import { Sidebar } from '../sidebar/Sidebar';
import { Grid } from '@material-ui/core';

const MainLayout = ({ children }) => {
  return (
    <Grid container>
      <Grid item md={2} xs={2}>
        <Sidebar />
      </Grid>
      <Grid item md={10} xs={10}>
        {children}
      </Grid>
    </Grid>
  );
};

export default MainLayout;

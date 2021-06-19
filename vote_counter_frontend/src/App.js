import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Login from './components/auth/index';
import Verify from './components/auth/Verify';
import Dashboard from './components/dashboard/index';
import MainLayout from './components/main/MainLayout';
import { ProtectedRoute } from './components/route/ProtectedRoute';
import Parties from './components/parties/index';
import Offices from './components/offices/index';
import Locations from './components/locations/index';
import Result from './components/result/index';
import UsersMgt from './components/usersmgt/index';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#ffffff',
    },
    primary: {
      main: '#333996',
      light: '#3c44b126',
    },
    secondary: {
      main: '#c62828',
      light: '#f8324526',
    },
  },
});
//
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/verify' component={Verify} />
          <MainLayout>
            <ProtectedRoute path='/dashboard' component={Dashboard} />
            <ProtectedRoute path='/parties' component={Parties} />
            <ProtectedRoute path='/offices' component={Offices} />
            <ProtectedRoute path='/result' component={Result} />
            <ProtectedRoute path='/locations' component={Locations} />
            <ProtectedRoute path='/users-mgt' component={UsersMgt} />
          </MainLayout>
          <Route path='*' component={() => '404 NOT FOUND'} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;

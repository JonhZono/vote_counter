import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BusinessIcon from '@material-ui/icons/Business';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';
import RecentActorsIcon from '@material-ui/icons/RecentActors';

export const SidebarData = [
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
    path: '/dashboard',
  },
  {
    title: 'Locations',
    icon: <LocationOnIcon />,
    path: '/locations',
  },
  {
    title: 'Parties',
    icon: <BusinessIcon />,
    path: '/parties',
  },
  {
    title: 'Offices',
    icon: <HomeWorkIcon />,
    path: '/offices',
  },
  {
    title: 'Result',
    icon: <CallMissedOutgoingIcon />,
    path: '/result',
  },
  {
    title: 'RoleMgt',
    icon: <RecentActorsIcon />,
    path: '/users-mgt',
  },
];

import React from 'react';
import { SidebarData } from './SidebarData';
import Button from '@material-ui/core/Button';
import './Sidebar.css';

export const Sidebar = () => {
  return (
    <div className='sidebarMenu'>
      <ul className='sidebarLists'>
        {SidebarData.map((val, key) => {
          return (
            <li
              className='row'
              key={key}
              onClick={() => (window.location.pathname = val.path)}
            >
              <div id='icon'>{val.icon}</div>
              <div id='title'>{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

import React from 'react';
import NavBar from '../NavBar/NavBar';
import DaisyNav from '../DaisyNav/DaisyNav';

const Header = () => {
      const navigationData =  [
  {
    "id": 1,
    "name": "Home",
    "url": "/home",
    "icon": "home"
  },
  {
    "id": 2,
    "name": "About",
    "url": "/about",
    "icon": "about"
  },
  {
    "id": 3,
    "name": "Transactions",
    "url": "/transactions",
    "icon": "arrow-left-right"
  },
  {
    "id": 4,
    "name": "Settings",
    "url": "/settings",
    "icon": "settings"
  },
  {
    "id": 5,
    "name": "Reports",
    "url": "/reports",
    "icon": "bar-chart-3"
  }
];
    return (
        <div>
            <NavBar navigationData={navigationData}></NavBar>
            <DaisyNav></DaisyNav>
        </div>
    );
};

export default Header;
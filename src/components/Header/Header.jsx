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
    "name": "Posts",
    "url": "/posts",
    "icon": "posts"
  },
  {
    "id": 5,
    "name": "Users",
    "url": "/users",
    "icon": "users"
  },
  {
    "id": 6,
    "name": "Users2",
    "url": "/users2",
    "icon": "users"
  }
];
    return (
        <div >
            <NavBar navigationData={navigationData}></NavBar>
            {/* <DaisyNav></DaisyNav> */}
        </div>
    );
};

export default Header;
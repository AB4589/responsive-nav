import React, { useState } from 'react';
// import Link from './Link'
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';


const NavBar = ({ navigationData }) => {
   const [open, setOpen] = useState(false);
   const links =  navigationData.map((route, index) => (
          // <Link key={index} route={route}></Link>
          <Link to={route.url} key={index} className='m-5'>{route.name}</Link>

        ))
     return (
      <>
    <nav>
         {open ? <X className='md:hidden' onClick={()=>setOpen(!open)}></X> : <Menu className='md:hidden' onClick={()=>setOpen(!open)}></Menu>}
    <div className={`md:hidden absolute duration-1000 ${open? 'top-21' : '-top-42'}`}>{links}</div>
      <ul className="md:flex hidden">
          <li>{links}</li>
      </ul>
    </nav> 
     
      </>
  );
};

export default NavBar;
import React, { useState } from 'react';
import Link from './Link'
import { Menu, X } from 'lucide-react';

const NavBar = ({ navigationData }) => {
   const [open, setOpen] = useState(false);
   const links =  navigationData.map((route) => (
          <Link route={route}></Link>
        ))
     return (

    <nav>
        <div className='md:hidden'>{links}</div>
         {open ? <X className='md:hidden' onClick={()=>setOpen(!open)}></X> : <Menu className='md:hidden' onClick={()=>setOpen(!open)}></Menu>}
      <ul className="md:flex hidden">
          {links}
      </ul>
    </nav>
  );
};

export default NavBar;
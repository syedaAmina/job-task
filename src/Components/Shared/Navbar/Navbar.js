import React from 'react';
import './Navbar.css';
import { Search, Home , Chat} from '@mui/icons-material';
import logoo from '../../../assests/img/logoo.webp';
const Navbar = () => {
    return (
      <div className="navbar bg-base-100">
      <div className="flex-1">
        <img className='logo' src={logoo} alt='lost'/>
      </div>
      <div className="flex-none ">

    
<div className='icon'> 
<Search/>
<input placeholder='search ' className='search-input'/>
<Home/>
<Chat/>

</div>

        <ul className="menu menu-horizontal px-1">
          <li><a>Item 1</a></li>
          <li tabIndex={0}>
            <a>
              Parent
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>


        <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  
      </div>

    </div>
    );
};

export default Navbar;
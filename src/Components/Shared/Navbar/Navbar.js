import React from 'react';
import './Navbar.css';
import { Search, Chat, Notifications} from '@mui/icons-material';
import logo from '../../../assests/img/logo.png';
import girl from '../../../assests/img/girl2.jpg';
import { Link } from 'react-router-dom';
const Navbar = () => {

const menuItems = <React.Fragment>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/Newsfeed">Newsfeed</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Chat"><Chat className='chat-icon'/></Link></li>
        <li><Link to="/Notifications"><Notifications className='notifications-icon'/></Link></li>

  </React.Fragment>

    return (
   <div className="navbar bg-base-100 ">
      <div className="flex-1">
     <img className='logo' src={logo} alt='lost'/>
      </div>
      <div className="flex-none ">
      <ul tabIndex={0} className="menu menu-compact flex-row  mt-3 p-2 nav-link">
       {menuItems}
       </ul>

<Search className='search-icon mt-2'/>
<input placeholder='search for friends' className='search-input'/>


 <div className="dropdown dropdown-end">
<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
<div className="w-10 ml-2 rounded-full">
   <img src={girl} alt='lost'/>
     </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
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
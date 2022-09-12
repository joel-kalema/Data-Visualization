import React from 'react';
import { NavLink } from 'react-router-dom';
import { FcFactory } from 'react-icons/fc';
import '../App.css';

function Header() {
  return (
    <div className="header">
        <div>
            <div className='logo'><FcFactory /></div>
            <div className='links'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/controle'>Control</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
            </div>
        </div>
    </div>
  );
}

export default Header;
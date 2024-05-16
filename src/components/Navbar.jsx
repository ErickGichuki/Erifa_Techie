import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul>
        <Link to='Home'>Home</Link>
        <li>
            <NavLink to='/'>Dashboard</NavLink>
        </li>
        <li>
            <NavLink to='/cart'>Cart</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;

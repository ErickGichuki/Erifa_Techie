import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/info">Info</NavLink>
          </li>
          <li>
            <NavLink to='/'>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to='/cart'>Cart</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;

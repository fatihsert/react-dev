import React from "react";
import {Nav,NavItem,NavLink} from 'reactstrap'

const Navbar = () => {
  return(
  <Nav>
    <NavItem>
      <NavLink to="/">Home</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/Contact">Contact</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/About">About</NavLink>
    </NavItem>
  </Nav>);
};
export default Navbar;

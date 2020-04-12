import React from 'react'
import PropTypes from 'prop-types'

const NavbarItem=(props)=>{

    return (
      <li className="nav-item">
         <a className="nav-link" href={props.link}>{props.text}</a>
      </li>
    );

}

NavbarItem.propTypes ={
  text:PropTypes.string.isRequired,
  link:PropTypes.string.isRequired
    
};


export default NavbarItem;
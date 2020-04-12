import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Navbar extends Component {
  state = {
    isActive: false,
  };

  render() {
    const { title, navs ,navITemClick} = this.props;

    return (
      
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
              {title}
            </a>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                {/* <ul className="navbar-nav mr-auto">{props.children}</ul> */}
                {navs.map((nav, i) => {
                  return (
                    
                    <li
                      key={"navbaritem_" + i}
                      className={"nav-item" + (nav.isActive ? " active" : "")}
                      onClick={navITemClick.bind(this, nav)}
                    >
                      <a className="nav-link" href="#">
                        {nav.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        </header>
      </div>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

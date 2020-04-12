import React, { Component } from "react";
import PropTypes from "prop-types";

import UserConsumer from "./Context";

export default class Navbar extends Component {
  navITemClick = (nav,dispatch) => {
    dispatch({type:"ACTIVE_NAV",payload:nav.id});
  };
  render() {
    return (
      <UserConsumer>
        {(value) => {
          const { title, navs, navITemClick } = this.props;
          const {dispatch}=value;

          return (
            <div>
              <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                  <a className="navbar-brand" href="/">
                    {title}
                  </a>

                  <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                      {navs.map((nav, i) => {
                        return (
                          <li
                            key={"navbaritem_" + i}
                            className={
                              "nav-item" + (nav.isActive ? " active" : "")
                            }
                            onClick={this.navITemClick.bind(this, nav,dispatch)}
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
        }}
      </UserConsumer>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

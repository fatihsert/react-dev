import React, { Component } from "react";
import "./User.css";
export default class User extends Component {
  render() {
    const { name, lastname } = this.props;

    return (
      <div className="user-card">
        <div>
          {name} {lastname}
        </div>
      </div>
    );
  }
}

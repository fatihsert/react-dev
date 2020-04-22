import React, { Component } from "react";
import UserComponent from "./UserComponent";
import UserHook from "./UserHook";
import UserUseEffect from './UserUseEffect'
import "./App.css";
const ThemeContext = React.createContext("dark");

export default class App extends Component {
  render() {
    return (
      <div>
        <ThemeContext.Provider value="dark">
          <UserComponent></UserComponent>
          <hr></hr>
          <UserHook></UserHook>
          <hr>
          </hr>
          <UserUseEffect></UserUseEffect>
        </ThemeContext.Provider>
      </div>
    );
  }
}

import React, { Component } from "react";
import User from "./User";
import "./App.css";
import AddUser from "./AddUser";
import UserProvider from "./Context";
import UserConsumer from "./Context";

export default class App extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          const { users } = value;
          debugger;
          return (
            <div className="user-list">
              <AddUser></AddUser>
              
              {users.map((user,i)=>{
                  return(
                      <User key={user.id} name={user.name} lastname={user.lastname}></User>
                  );
              })}
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

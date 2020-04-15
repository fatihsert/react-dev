import React, { Component } from "react";
import uniqid from "uniqid"; //var uniqid = require("uniqid");
import UserConsumer from "./Context";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
    };
  }

  addUser = (dispatch,e) => {
    e.preventDefault();

    const { name, lastname } = this.state;

    const newUser = { name, lastname, id: uniqid() };

    dispatch({type:'ADD_USER',payload:newUser});
  };
  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  //   onNameChange=(e)=>{ this.setState({name:e.target.value});}
  //   onLastnameChange=(e)=>{this.setState({lastname:e.target.value});}

  render() {
    const { name, lastname } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <form onSubmit={this.addUser.bind(this,dispatch)}>
              Name:
              <input
                type="text"
                name="name"
                id="name"
                onChange={this.onChangeInput}
              ></input>
              <br></br>
              Lastname:
              <input
                type="text"
                name="lastname"
                id="lastname"
                onChange={this.onChangeInput}
              ></input>
              <br></br>
              <button type="submit">Save</button>
            </form>
          );
        }}
      </UserConsumer>
    );
  }
}

import React, { Component } from "react";

export default class UserComponent extends Component {
  state = { username: "fatih", surname: "sert" };
  constructor(props) {
    super(props);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
  }
  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }
  handleSurnameChange(e) {
    this.setState({ surname: e.target.value });
  }
  render() {
    const { username, surname } = this.state;

    return (
      <div>
        <h3> hello I Am Component</h3>
        <div>UserName: {username}</div>
        <div>UserName: {surname}</div>
        surname
        <input type="text" onChange={this.handleUsernameChange}></input>
        surnanme
        <input type="text" onChange={this.handleSurnameChange}></input>
      </div>
    );
  }

  componentDidMount()
  {
    console.log("componentDidMount");
  }
  componentDidUpdate()
  {
    console.log("componentDidUpdate");
  }
  componentWillMount()
  {
    console.log("componentWillMount");
  }
  componentWillUpdate()
  {
    console.log("componentWillUpdate");
  }

  componentWillUnmount()
  {
    console.log("componentWillUnmount");
  }
 
}

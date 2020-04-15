import React, { Component } from "react";
import axios from "axios";
const userContext = React.createContext("app104");

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      debugger;

      state.users.push(action.payload);

      return state;
    default:
      return state;
  }
};

export class UserProvider extends Component {
  state = {
    users: [    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  componentDidMount = async () => {
    //http://localhost:3000/users
    const response = await axios.get("http://localhost:3000/users");
    console.log(response);
    this.setState({users:response.data});
  };

  render() {
    return (
      <userContext.Provider value={this.state}>
        {this.props.children}
      </userContext.Provider>
    );
  }
}

const UserConsumer = userContext.Consumer;

export default UserConsumer;

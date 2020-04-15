import React, { Component } from "react";
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
    users: [
      { name: "fatih", lastname: "sert", id: "1" },
      { name: "fatih1", lastname: "sert1", id: "2" },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
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

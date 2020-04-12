import React, { Component } from "react";
const userContext = React.createContext("app102");
const reducer = (state, action) => {
  switch (action.type) {
    case "ACTIVE_NAV":
      state.navs.forEach((element) => {
        element.isActive = action.payload == element.id;
      });
      return {
        ...state,
        navs: state.navs,
      };
    case "CARD_CHANGE":
      state.cards.forEach((element) => {
        element.isVisible = action.payload == element.id?!element.isVisible:false;
      });

      
      state= { ...state,
        cards:state.cards };
        debugger;

        return state
    default:
      return state;
  }
};

export class UserProvider extends Component {
  state = {
    cards: [
      {
        title: "Card-1",
        id: "1",
        isVisible:false,
        Users: [
          {
            id: 1,
            name: "fatih",
            surname: "sert",
            email: "mail@mail.com",
          },
          {
            id: 3,
            name: "fatih-1",
            surname: "sert-1",
            email: "mail.1@mail.com",
          },
        ],
      },
      {
        title: "Card-2",
        id: "2",
        isVisible:false,
        Users: [
          {
            id: 2,
            name: "fatih-2",
            surname: "sert-2",
            email: "mail-2@mail.com",
          },
          {
            id: 4,
            name: "fatih-3",
            surname: "sert-3",
            email: "mail-3@mail.com",
          },
        ],
      },
    ],
    navs: [
      { link: "/", text: "Home", isActive: true, id: 1 },
      { link: "/", text: "About", isActive: false, id: 2 },
      { link: "/", text: "Help", isActive: false, id: 3 },
      { link: "/", text: "Pricing", isActive: false, id: 4 },
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

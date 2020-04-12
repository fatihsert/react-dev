import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import User from "./User";
import NavbarItem from "./NavbarItem";
import Card from "./Card";
import Users from "./Users";
export default class App extends Component {
  state = {
    cards: [
      {
        title: "Card-1",
        id: "1",
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
      { link: "/", text: "Home", isActive: true  ,id:1},
      { link: "/", text: "About" , isActive: false ,id:2},
      { link: "/", text: "Help" , isActive: false ,id:3},
      { link: "/", text: "Pricing" , isActive: false ,id:4}
    ],
  };


  navITemClick=(nav)=>{
   const {navs}=this.state;

   for(let i=0;i<navs.length;i++){
     navs[i].isActive=navs[i].id==nav.id;
   }
   this.setState({navs:navs});
  };

  render() {
    const { cards, navs } = this.state;

    return (
      <div>
        <Navbar title="hello" navs={navs} navITemClick={this.navITemClick}>
          {/* <NavbarItem text="Home" link="/" />
          <NavbarItem text="About" link="/" />
          <NavbarItem text="Help" link="/" />
          <NavbarItem text="Contact" link="/" /> */}
        </Navbar>

        <div className="container">
          {cards.map((card, i) => {
            return (
              <Card title={card.title} key={card.id}>
                <div>#{i}</div>
                <Users key={"user_" + i} users={card.Users}></Users>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

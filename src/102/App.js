import React, { Component } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Users from "./Users";
import UserConsumer from "./Context";

export default class App extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          const { cards ,navs} =value;
          debugger;
          return (
            <div>
              <Navbar title="React-102" navs={navs}></Navbar>
              <div className="container">
                {
                 
                 cards.map((card,i)=>{
                   return(
                    <Card title={card.title} id={card.id} key={card.id} isVisible={card.isVisible}>
                      <Users key={"user"+i} users={card.Users}></Users>
                     </Card>
                   )
                 })
                }
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
import React, { Component } from "react";
import "./card.css";
import UserConsumer from "./Context";

export default class Card extends Component {
  onChange = (id, dispatch) => {
    debugger;
    dispatch({ type: "CARD_CHANGE", payload: id });
  };
  render() {
    return (
      <UserConsumer>
        {(value) => {
          const { title, children, id,isVisible } = this.props;
          const { dispatch } = value;
debugger;
          return (
            <div>
              <div
                className="card m-3"
                onClick={this.onChange.bind(this, id, dispatch)}
              >
                <div className="card-body">
                  <h3>{title}</h3>
                  { isVisible?children:null }
                </div>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

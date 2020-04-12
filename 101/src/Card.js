import React, { Component } from "react";
import "./card.css";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "test",
      isVisible: false,
    };
  }

  onClickEvent = (number, e) => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  onClickEventBinded;
  render() {
    const { title, children } = this.props;
    const { isVisible } = this.state;
    return (
      <div className="card m-3" onClick={this.onClickEvent.bind(this, 23)}>
        <div className="card-body">
          <h5 className="card-title" >
            {title}
          </h5>
            {isVisible?children:null}
        </div>
      </div>
    );
  }
}

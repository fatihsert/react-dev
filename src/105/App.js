import React, { Component } from "react";
import Test from "./Test";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { t: true };
    this.changeState.bind(this);
    console.log("constructor=" + this.state.t);
  }

  changeState = () => {
    this.setState({ t: !this.state.t });
    console.log("state change=" + this.state.t);
  };

  //new props,setState,forceUpdate
  render() {
    console.log("render=" + this.state.t);
    return (
      <div>
        <button type="button" onClick={this.changeState}>
          Change State
        </button>
        {this.state.t? <Test></Test> : null}
      </div>
    );
  }

  componentDidMount() {
    //Api çağrılarını yapılabilir.
    //fakat burada state güncellediğimizde render tekrardan çalışacak. bundan dolayı render işlemini state göre yapıyorsak belki öncesinde(render içersinde değil!!) çağırmak gerebilir örn constructor
    console.log("componentDidMount=" + this.state.t);
    this.setState({ t: !this.state.t });
  }

  componentDidUpdate(prevProps, prevState) {}

  //render olup olmamasına karar verebiliyoruz
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }
}

import React, { Component } from "react";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { Container, Row } from "reactstrap";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar></Navbar>
          <Container>
            <Row>
              <Route component={Home} path="/" exact></Route>
              <Route component={About} path="/About"></Route>
              <Route component={Contact} path="/Contact"></Route>
            </Row>
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}

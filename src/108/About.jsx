import React, { Component } from "react";
import { Container, Row } from "reactstrap";
export default class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <h2> About</h2>
          </Row>
          <Row>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam
            vehicula elementum sed sit amet dui. Proin eget tortor risus.
            Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
            vel, ullamcorper sit amet ligula. Nulla porttitor accumsan
            tincidunt. Praesent sapien massa, convallis a pellentesque nec,
            egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et,
            porttitor at sem.
          </Row>
        </Container>
      </div>
    );
  }
}

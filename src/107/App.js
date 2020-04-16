import React, { Component } from "react";
import { NavbarText, Container, Row, Col ,Navbar,NavbarBrand} from "reactstrap";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import Navi from "./Navi";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.getCategories();
  }
  state = {
    currentCategory: {},
    categories: [],
    products: [],
    card:[]
  };
  changeCategory = (category) => {
    this.setState({ currentCategory: category }, () => {
      this.getProducts();
    });
  };

  addItem = (product) => {
    let card=this.state.card;
    card.push(product);
    this.setState({card})
  };
  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };
  getProducts = () => {
    fetch(
      "http://localhost:3000/products?categoryId=" +
        this.state.currentCategory.categoryId
    )
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  render() {
    let categoryInfo = {
      title: "category",
      onChange: this.changeCategory,
      currentCategory: this.state.currentCategory,
      categories: this.state.categories,
    };
    let productInfo = {
      products: this.state.products,
      addItem:this.addItem
    };

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarText right="true">Basket {this.state.card.length}</NavbarText>
        </Navbar>

        <Container>
          <Row>
            <h3>107</h3>
          </Row>
          <Row>
            <Navi></Navi>
          </Row>
          <Row>
            <Col xs="4">
              <CategoryList info={categoryInfo}></CategoryList>
            </Col>
            <Col xs="8">
              <ProductList info={productInfo}></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

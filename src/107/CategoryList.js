import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default class CategoryList extends Component {
  state = {
    categories:[],
    currentCategory:{}
  };

  constructor(props)
  {
    super(props);
  }
   
  
  render() {
    if(!this.props.info.categories) return (<div>loading</div>);

    return (
      <div>
        {this.props.info.title}
        <ListGroup>
          {this.props.info.categories.map((category) => {
            return (
              
              <ListGroupItem key={category.categoryId} onClick={this.props.info.onChange.bind(this,category)} active={this.props.currentCategory?(category.categoryId===this.props.currentCategory.categoryId):false}>
                {category.categoryName}
              </ListGroupItem>
            );
          })}
        </ListGroup>
        <div>
          {this.props.info.currentCategory?this.props.info.currentCategory.categoryName:null}
        </div>
      </div>
    );
  }
}

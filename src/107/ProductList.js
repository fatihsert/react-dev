import React, { Component } from "react";
import { Table,Button } from "reactstrap";
export default class ProductList extends Component {
  render() {

    if(!this.props.info.products) return (<div>loading</div>);


    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Operation</th>

            </tr>
          </thead>
          <tbody>
            {this.props.info.products.map((product) => {
              return (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.name}</td>
                  <td><Button color="primary" onClick={this.props.info.addItem.bind(this,product)}>Add</Button></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

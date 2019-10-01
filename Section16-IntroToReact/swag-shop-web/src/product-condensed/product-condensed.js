import React, { Component } from "react";
import "./product-condensed.css";

class ProductCondensed extends Component {
  render() {
    //in react, you must always return a <div></div>
    return (
      <li className="pc-condensed list-group-item d-flex justify-content-between align-items-center">
        <p>
          {this.props.product.title} | <b>${this.props.product.price}</b>
        </p>
        <a className="btn btn-outline-danger">X</a>
      </li>
    );
  }
}
export default ProductCondensed;

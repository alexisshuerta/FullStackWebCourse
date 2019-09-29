import React, { Component } from "react";
import "./product.css";

class Product extends Component {
  render() {
    //in react, you must always return a <div></div>
    return (
      <div className="product">
        <img
          className="card-img-top"
          src={this.props.imgUrl}
          alt="Product"
        ></img>
        <div className="card-block">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">Price: {this.props.price}</p>
          <a href="#" className="btn btn-primary">
            Add to Wishlist
          </a>
        </div>
      </div>
    );
  }
}

export default Product;

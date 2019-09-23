import React, { Component } from "react";
import "./product.css";

class Product extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" alt="Product"></img>
        <div className="card-block">
          <h4 className="card-title">TITLE GOES HERE</h4>
          <p className="card-text">Price: $</p>
          <a
            href="https://www.amazon.com/ref=nav_logo"
            className="btn btn-primary"
          >
            Add to Wishlist
          </a>
        </div>
      </div>
    );
  }
}

export default Product;

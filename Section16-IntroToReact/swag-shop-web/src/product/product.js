import React, { Component } from "react";
import "./product.css";

class Product extends Component {
  render() {
    //in react, you must always return a <div></div>
    return (
      <div className="card">
        <img
          className="card-img-top"
          src="../../public/images/lemonCheetos.png"
          alt="Product"
        ></img>
        <div className="card-block">
          <h4 className="card-title">Hot Cheetos</h4>
          <p className="card-text">Price: $1.69</p>
          <a href="#" className="btn btn-primary">
            Add to Wishlist
          </a>
        </div>
      </div>
    );
  }
}

export default Product;

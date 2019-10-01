import React, { Component } from "react";
import "./wishlist.css";

import ProductCondensed from "../product-condensed/product-condensed";

class Wishlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wishList: [
        {
          title: "Bologna Killer",
          price: 23.99,
          _id: "sff12fsd"
        },
        {
          title: "Foo Man Chu",
          price: 4.54,
          _id: "sff6242d"
        },
        {
          title: "Pipe Dream",
          price: 100.0,
          _id: "s7d9af7"
        }
      ]
    };
    // Bind Functions
    this.createWishList = this.createWishList.bind(this);
  }

  createWishList = () => {
    const list = this.state.wishList.map(product => (
      <ProductCondensed product={product} key={product._id} />
    ));
    return list;
  };

  render() {
    //in react, you must always return a <div></div>
    return (
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">Wish List</h4>
          <ul className="list-group">{this.createWishList()}</ul>
        </div>
      </div>
    );
  }
}

export default Wishlist;

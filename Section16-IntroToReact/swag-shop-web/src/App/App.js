import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Components
import Product from "../product/product";
import WishList from "../wishlist/wishlist";

// Services
import HttpService from "../services/http-service";

const http = new HttpService();

//ES6 definition
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { products: [] };

    //! need to bind functions
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);

    this.loadData();
  }

  // calls the get products function from HTTPService
  loadData = () => {
    //products is the resolve and err is the reject from http-service.js
    //.then is how you fulfill a promise

    //need to create a reference to self/this.. bc don't have access to this inside promise(.then)
    var self = this;
    http.getProducts().then(
      data => {
        //everytime setState is called, everything in state will rerender...(refresh)
        //! if i want something in my UI to refresh, call setState() on the highest component where i want to start
        this.setState({ products: data });
      },
      err => {}
    );
  };

  productList = () => {
    //map goes through every element in an array and does something(takes in callback)
    const list = this.state.products.map(product => (
      //the key has to be here on the outermost level
      <div className="col-sm-4" key={product._id}>
        <Product
          title={product.title}
          price={product.price}
          imgUrl={product.imgUrl}
        />
      </div>
    ));

    //! list should be in parenthesis??
    return list;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to the Swag Shop!</p>
        </header>
        <div className="container-fluid App-main">
          <div className="row">
            <div className="col-sm-9">
              <div className="row">{this.productList()}</div>
            </div>
            <div className="col-sm-3">
              <WishList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// default javascript
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Welcome to the Swag Shop!</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

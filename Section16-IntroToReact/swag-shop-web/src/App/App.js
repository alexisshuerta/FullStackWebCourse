import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Product from "../product/product";

import HttpService from "../services/http-service";

const http = new HttpService();

//ES6 definition
class App extends React.Component {
  constructor(props) {
    super(props);
    //! need to bind functions
    this.loadData = this.loadData.bind(this);

    this.loadData();
  }

  // calls the get products function from HTTPService
  loadData = () => {
    //products is the resolve and err is the reject from http-service.js
    //.then is how you fulfill a promise
    http.getProducts().then(
      products => {
        console.log(products);
      },
      err => {}
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to the Swag Shop!</p>
        </header>
        <div className="container App-main">
          <div className="row">
            <Product
              className="col-sm-4"
              price="1.69"
              title="Hot Cheetos"
              imgUrl="https://images.freshop.com/00028400433938/db0d7f0bc64541da3d582edbd552bd8d_large.png"
            />
            <Product
              className="col-sm-4"
              price="1.69"
              title="Hot Cheetos"
              imgUrl="https://images.freshop.com/00028400433938/db0d7f0bc64541da3d582edbd552bd8d_large.png"
            />
            <Product
              className="col-sm-4"
              price="1.69"
              title="Hot Cheetos"
              imgUrl="https://images.freshop.com/00028400433938/db0d7f0bc64541da3d582edbd552bd8d_large.png"
            />
            <Product
              className="col-sm-4"
              price="1.69"
              title="Hot Cheetos"
              imgUrl="https://images.freshop.com/00028400433938/db0d7f0bc64541da3d582edbd552bd8d_large.png"
            />
            <Product
              className="col-sm-4"
              price="1.69"
              title="Hot Cheetos"
              imgUrl="https://images.freshop.com/00028400433938/db0d7f0bc64541da3d582edbd552bd8d_large.png"
            />
            <Product
              className="col-sm-4"
              price="1.69"
              title="Hot Cheetos"
              imgUrl="https://images.freshop.com/00028400433938/db0d7f0bc64541da3d582edbd552bd8d_large.png"
            />
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

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
    //need to bind functions
    this.loadData = this.loadData.bind(this);

    this.loadData();
  }

  loadData = () => {
    //products is the resolve and err is the reject from http-service.js
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
        <div className="App-main">
          <Product />
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

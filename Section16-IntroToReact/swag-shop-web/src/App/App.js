import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HttpService from "../services/http-service";

const http = new HttpService();

//ES6 definition
class App extends React.Component {
  constructor(props) {
    super(props);
    http.getProducts();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to the Swag Shop!</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Me to Learn React!
          </a>
        </header>
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

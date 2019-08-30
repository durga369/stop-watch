import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Timer from "./Timer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome To Timer App Built in React JS.</p>
        <Timer start={Date.now()} />
        {
          // <a
          //   className="App-link"
          //   href="https://reactjs.org"
          //   target="_blank"
          //   rel="noopener noreferrer"
          // >
          //Learn React
          //</a>
        }
      </header>
    </div>
  );
}

export default App;

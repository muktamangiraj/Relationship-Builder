import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

//Routing pages import
import Home from "./components/Home";
import Update from "./components/Update";

//style sheet import
import "./App.css";

function App() {
  return (
    <Router>
      <div className = "App">
        <Route exact path="/" component={Home} />
        <Route exact path="/update" component={Update} />
      </div>
    </Router>
  );
}

export default App;


//   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
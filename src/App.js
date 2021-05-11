import React from "react"
import './App.css';

import {
  BrowserRouter as Router,
} from "react-router-dom";

import Nav from "./navbar";
import Mainroutes from "./mainroutes";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
            <div>
            <nav  className="navbar">
              <Nav />
            </nav>
              <Mainroutes/>
            </div>
        </Router>
      </div>
      
    </div>
  );
}

export default App;

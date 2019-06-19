import React from "react";
import "./App.css";
import "bootswatch/dist/lux/bootstrap.css";
import NavBar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <p>jjjj</p>
      </div>
    </Router>
  );
}

export default App;

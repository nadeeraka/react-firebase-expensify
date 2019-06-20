import React from "react";
import "./App.css";
import "bootswatch/dist/lux/bootstrap.css";
import NavBar from "./components/layouts/Navbar";
import Dashboard from "./components/layouts/Dashbord";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

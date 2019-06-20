import React from "react";
import "./App.css";
import "bootswatch/dist/lux/bootstrap.css";
import NavBar from "./components/layouts/Navbar";
import Dashboard from "./components/layouts/Dashbord";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./stroe";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./NavRoute.css";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import NavbarComponent from "../components/NavbarComponent/NavbarComponent";

export default function NavRoute() {
  return (
    <Router>
      <div className="nav-route-container">
        <NavbarComponent />
        <div className="main-body">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Home" component={Home} />
            <Route path="/Shop" component={Shop} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

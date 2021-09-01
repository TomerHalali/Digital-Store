import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/Login/Login";

export default function NavRoute() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Shop">Shop</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Home" component={Home} />
          <Route path="/Shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

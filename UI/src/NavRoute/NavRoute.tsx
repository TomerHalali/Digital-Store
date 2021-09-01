import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";

export default function NavRoute() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Shop">Shop</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Shop" component={Shop} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

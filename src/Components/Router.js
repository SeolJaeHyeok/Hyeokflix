import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" exact component={Search} />
      <Route path="/tv" exact component={TV} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

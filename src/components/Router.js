import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Home from "pages/Home";
import Tv from "pages/Tv";
import Detail from "pages/Detail";
import Search from "pages/Search";
import Header from "./Header";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tv" component={Tv} />
        <Route path="/search" component={Search} />
        <Route path="/detail" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);

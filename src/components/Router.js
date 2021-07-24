import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Home from "components/Home/HomeViewer";
import Tv from "components/Tv/TvViewer";
import Detail from "components/Detail/DetailViewer";
import Search from "components/Search/SearchViewer";
import Header from "./Header";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tv" component={Tv} />
        <Route path="/search" exact component={Search} />
        <Route
          path="/movie/:id"
          render={(props) => <Detail key={props.match.params.id} {...props} />}
        />{" "}
        <Route
          path="/show/:id"
          render={(props) => <Detail key={props.match.params.id} {...props} />}
        />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);

import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Home from "../pages/HomePage";
import Movie from "../pages/MoviePage";
import Tv from "../pages/TvPage";
import Detail from "../pages/DetailPage";
import Search from "../pages/SearchPage";
import Person from "../pages/PersonPage";
import Header from "./common/Header";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie" component={Movie} />
        <Route exact path="/tv" component={Tv} />
        <Route exact path="/search" component={Search} />
        <Route
          path="/movie/:id"
          render={(props) => <Detail key={props.match.params.id} {...props} />}
        />{" "}
        <Route
          path="/tv/:id"
          render={(props) => <Detail key={props.match.params.id} {...props} />}
        />
        <Route exact path="/person/:id" component={Person} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);

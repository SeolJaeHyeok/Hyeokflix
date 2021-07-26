import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Home from "components/Home/HomeViewer";
import Movie from "../containers/Movie/index";
import Tv from "../containers/Tv/index";
import Detail from "../containers/Detail/index";
import Search from "../containers/Search/index";
import Header from "./common/Header";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie" component={Movie} />
        <Route exact path="/tv" component={Tv} />
        <Route exact path="/search" exact component={Search} />
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

import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "../screens/App";
import HomePage from "../screens/home/HomePage";
import CounterPage from "../screens/counter/CounterPage";
import TrackerPage from "../screens/tracker/TrackerPage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/counter" component={CounterPage} />
    <Route path="/tracker" component={TrackerPage} />
  </Route>
);

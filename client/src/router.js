import React from "react";
import { Route, Switch } from "react-router";
import Home from "./containers/Home";
import VehicleDetails from "./components/VehicleDetails";
import NotFound from "./components/NotFound";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/vehicles/:id" component={VehicleDetails} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;

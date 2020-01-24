import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "../Pages";

const routeList = [
  { path: "/", component: HomePage },
  { path: "/home", component: HomePage },
  { path: "/jsonToSwagger", component: HomePage }
];

const RouterSwitch = () => (
  <div>
    <Switch>
      {routeList.map(route => (
        <Route path={route.path} component={route.component} exact />
      ))}
    </Switch>
  </div>
);

export default RouterSwitch;

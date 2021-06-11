import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { routes } from "./consts";
import HomePage from "./containers/HomePage";
import DoctorPage from "./containers/DoctorPage";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path={routes.doctors}>
          <DoctorPage />
        </Route>

        {/* <Route path={routes.patients}>
          <PatientsPage />
        </Route> */}

        <Route exact path={routes.home}>
          <HomePage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

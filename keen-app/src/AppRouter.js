import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { routes } from "./consts";
import HomePage from "./containers/HomePage";
import DoctorsPage from "./containers/DoctorsPage";
import DoctorDetailsPage from "./containers/DoctorDetailsPage";
// import AddFeedbackModal from "./components/AddFeedbackModal";
// import ThankModal from "./components/ThankModal";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        {/* <Route path={routes.thank}>
          <ThankModal />
        </Route>

        <Route path={routes.addfeedback}>
          <AddFeedbackModal />
        </Route> */}

        <Route path={routes.doctors}>
          <DoctorsPage />
        </Route>

        <Route path={`${routes.doctor}/:id`}>
          <DoctorDetailsPage />
        </Route>

        <Route exact path={routes.home}>
          <HomePage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

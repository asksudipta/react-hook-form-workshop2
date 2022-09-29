import { render } from "@testing-library/react";
import React from "react";
import { useForm } from "react-hook-form";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./Header";

//Define DemoRouter arrow function component
const DemoRouter = () => {
  const { Welcome, About, Home, Person, NotFound } = useForm();
  return (
    <div className="Container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/home" component={Home} />
          <Route path="/person" component={Person} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <h6> Welcome page</h6>
    </div>
  );
};

export default DemoRouter;

import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoutes";
import Home from "./containers/home";
import Login from "./containers/login";
import Signup from "./containers/signup";
import NewNote from "./containers/newNote";
import Notes from "./containers/notes";
import NotFound from "./containers/notFound";

export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps} />
        <AppliedRoute path="/login" exact component={Login} props={childProps} />
        <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
        <AppliedRoute path="/notes/new" exact component={NewNote} props={childProps} />
        <AppliedRoute path="/notes/:id" exact component={Notes} props={childProps} />
        <Route component={NotFound} />
    </Switch>;
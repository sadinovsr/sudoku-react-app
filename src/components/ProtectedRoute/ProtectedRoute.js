import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class ProtectedRoute extends Component {

  render() {
    const { path, component } = this.props;
    return localStorage.getItem('token') ? (
      <Route exact path={path} component={component} />
    ) : (
      <Redirect to="/" />
    );
  }
}

export default ProtectedRoute;
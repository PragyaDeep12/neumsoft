import React from "react";
import { Switch } from "react-router";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import VerifyCode from "../VerifyCode";

import RegisterAccount from "../RegisterAccount";

export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Switch>
          <PrivateRoute path="/home" component={HomePage} />
          <PrivateRoute path="/verifyCode" component={VerifyCode} />
          <PrivateRoute path="/registerAccount" component={RegisterAccount} />

          <PublicRoute path="/" component={LoginPage}></PublicRoute>
        </Switch>
      </div>
    );
  }
}

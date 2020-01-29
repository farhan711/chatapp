/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import ReactGA from "react-ga";

import * as CONSTANTS from "./data/config/constants";

import App from "./app";
import PrivateRoute from "./components/privateroute";
import Home from "./app/home";
import NotFound from "./components/notfound";
// import PageContainer from './app/pagecontainer';
import Login from "./app/authentication/login";
import Signup from "./app/authentication/signup";
import CreateWorkspace from "./app/workspace";
import StartWorkspace from "./app/startworkspace";
// import Conversation from './app/pagecontainer/modules/conversation';
// import Dashboard from './app/pagecontainer/modules/dashboard';
// import ChatHistory from './app/pagecontainer/modules/history';
// import Profile from './app/pagecontainer/modules/profile';
import Permissions from "./app/workspacepermissions";
import Profile from "./app/profilePage";
import ChatDashboard from "./app/chatdashboard";
import VerifyOTP from "./app/otppage";
import ForgetPassword from "./app/authentication/forgetpassword";
import ResetPassword from "./app/authentication/resetpassword";

ReactGA.initialize("ga-0008-your-id");

function logPageView() {
  ReactGA.pageview(window.location.pathname + window.location.search);
}

//ADD ROUTING
export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history} onChange={logPageView}>
          <App history={history}>
            <Switch>
              <Route
                exact
                strict
                path={CONSTANTS.ROUTE_PATH.HOME}
                history={history}
                component={Home}
              />
              <Route
                exact
                path={CONSTANTS.ROUTE_PATH.LOGIN}
                history={history}
                component={Login}
              />
              <Route
                exact
                path={CONSTANTS.ROUTE_PATH.SIGNUP}
                history={history}
                component={Signup}
              />
              <Route
                exact
                path={CONSTANTS.ROUTE_PATH.CREATE_WORKSPACE}
                history={history}
                component={CreateWorkspace}
              />
              <Route
                exact
                path={CONSTANTS.ROUTE_PATH.START_WORKSPACE}
                history={history}
                component={StartWorkspace}
              />
              
              <Route
                exact
                path={CONSTANTS.ROUTE_PATH.WORKSPACE}
                history={history}
                component={Permissions}
              />
              <Route
                exact
                path={CONSTANTS.ROUTE_PATH.PROFILE_PAGE}
                history={history}
                component={Profile}
              />
              <Route
                exact
                path={'/permissions'}
                history={history}
                component={Permissions}
              />
              <Route
                exact
                path={CONSTANTS.ROUTE_PATH.OTP_PAGE}
                history={history}
                component={VerifyOTP}
              />
              <Route
                exact
                path={`${CONSTANTS.ROUTE_PATH.FORGET_PASSWORD}`}
                history={history}
                component={ForgetPassword}
              />
              <Route
                exact
                path={`${CONSTANTS.ROUTE_PATH.WORKSPACE}/:id`}
                history={history}
                component={ChatDashboard}
              />
              <Route
                exact
                path={`${CONSTANTS.ROUTE_PATH.RESET_PASSWORD}`}
                history={history}
                component={ResetPassword}
              />
              <PrivateRoute component={NotFound} />
            </Switch>
          </App>
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

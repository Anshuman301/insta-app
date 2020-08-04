import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import NoMatch from "./Pages/404Page/404Page";
import { connect } from "react-redux";
const App = ({ isLogin }) => {
  return (
    <div>
      <Switch>
        {isLogin ? (
          <Route path="/" render={() => <Home />} />
        ) : (
          <Route exact path="/" render={() => <Login />} />
        )}
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
  );
};
const mapStateToProps = ({ login: { isLogin } }) => ({
  isLogin
});
export default connect(mapStateToProps)(App);

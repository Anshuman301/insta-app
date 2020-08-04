import React from "react";
import Header from "../../Components/Header/Header";
import { Switch, Route } from "react-router-dom";
import Explore from "../Explore/Explore";
import NoMatch from "../../Pages/404Page/404Page";
import NewHome from "../NewHome/NewHome";
import Profile from "../../Components/Profile/Profile";
const Home = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={NewHome} />
        <Route exact path="/explore" component={Explore} />
        <Route path="/:id" component={Profile} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
  );
};

export default Home;

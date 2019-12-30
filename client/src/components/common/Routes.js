import React, { Component } from "react";
import PrivateRoutes from "../../components/common/PrivateRoutes";
import CreateProfile from "../../components/createprofile/CreateProfile";
import EditProfile from "../../components/edit-profile/EditProfile";
import AddExperience from "../../components/add-credentials/AddExperience";
import AddEducation from "../../components/add-credentials/AddEducation";
import Profiles from "../../components/profiles/Profiles";
import ViewProfile from "../../components/view-profile/ViewProfile";
import NotFound from "../../components/not-found/NotFound";
import Posts from "../../components/posts/Posts";
import Post from "../../components/post/Post";
import Register from "../../components/auth/Register";
import Login from "../../components/auth/Login";
import Dashboard from "../../components/dashboard/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export class Routes extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          {" "}
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profiles" component={Profiles} />
            <Route exact path="/profile/:handle" component={ViewProfile} />

            <PrivateRoutes exact path="/dashboard" component={Dashboard} />

            <PrivateRoutes
              exact
              path="/create-profile"
              component={CreateProfile}
            />

            <PrivateRoutes exact path="/edit-profile" component={EditProfile} />

            <PrivateRoutes
              exact
              path="/add-experience"
              component={AddExperience}
            />

            <PrivateRoutes
              exact
              path="/add-education"
              component={AddEducation}
            />

            <PrivateRoutes exact path="/feed" component={Posts} />

            <PrivateRoutes exact path="/post/:id" component={Post} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import store from "./store";
import "./App.css";
import { clearCurrentProfile } from "./actions/profileAction";
import Routes from "./components/common/Routes";

//check for token
if (localStorage.jwtToken) {
  //set auth token to the headers
  setAuthToken(localStorage.jwtToken);
  //decode the toekn to get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  //check for expiry date for the token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //log out the user
    store.dispatch(logoutUser());
    //clear current profile
    store.dispatch(clearCurrentProfile());

    //redirect to login
    window.location.href = "/login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

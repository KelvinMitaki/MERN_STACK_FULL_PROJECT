import React, { Component } from "react";
import Landing from "../layout/Landing";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import NotFound from "./NotFound";

export class Condition extends Component {
  render() {
    let displayError;
    Landing
      ? (displayError = (
          <span>
            {Navbar}
            {Landing}
            {Footer}
          </span>
        ))
      : (displayError = <span>{NotFound}</span>);
    return displayError;
  }
}

export default Condition;

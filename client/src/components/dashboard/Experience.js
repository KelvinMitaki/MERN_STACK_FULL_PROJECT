import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";

export class Experience extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12"></div>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteExperience })(Experience);

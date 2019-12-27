import React, { Component } from "react";
import { connect } from "react-redux";

export class Education extends Component {
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

export default connect(null, { deleteEducation })(Education);

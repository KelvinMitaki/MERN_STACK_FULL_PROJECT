import React, { Component } from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profileAction";

export class Experience extends Component {
  handleClick = id => {
    this.props.deleteExperience(id);
  };
  render() {
    const experience = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
          {exp.to === null ? (
            "Now"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={() => this.handleClick(exp._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
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

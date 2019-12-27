import React, { Component } from "react";
import { getCurrentProfile, deleteAccount } from "../../actions/profileAction";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";
import { Link } from "react-router-dom";
import ProfileActions from "./ProfileActions";
import Experience from "./Experience";
import Education from "./Education";

export class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  handleDeleteClick = e => {
    this.props.deleteAccount();
  };
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;
    if (profile === null || loading) {
      return (dashboardContent = <Spinner />);
    } else {
      //check if user profile has data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              Welcome{" "}
              <Link to={`/profile/${profile.handle}`}>{user.name} </Link>
            </p>
            <div className="btn-group mb-4" role="group">
              <Link to="/edit-profile" className="btn btn-light">
                <i className="fas fa-user-circle text-info mr-1"></i> Edit
                Profile
              </Link>
              <Link to="/add-experience" className="btn btn-light">
                <i className="fab fa-black-tie text-info mr-1"></i>
                Add Experience
              </Link>
              <Link to="/add-education" className="btn btn-light">
                <i className="fas fa-graduation-cap text-info mr-1"></i>
                Add Education
              </Link>
            </div>
            <h4 className="mb-4">Experience Credentials</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Title</th>
                  <th>Years</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{experience}</tbody>
            </table>
            <h4 className="mb-4">Education Credentials</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>School</th>
                  <th>Degree</th>
                  <th>Years</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{education}</tbody>
            </table>
            <div style={{ marginBottom: "60px" }}>
              <button
                onClick={this.handleDeleteClick}
                className="btn btn-danger"
              >
                Delete My Account
              </button>
            </div>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );
      }
    }
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);

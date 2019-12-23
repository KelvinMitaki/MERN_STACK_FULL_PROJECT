import React, { Component } from "react";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
import ProfileGithub from "./ProfileGithub";
import ProfileHeader from "./ProfileHeader";
import Spinner from "../common/Spinner";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProfileByHandle } from "../../actions/profileAction";

export class ViewProfile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }
  render() {
    return (
      <div>
        <ProfileHeader />
        <ProfileGithub />
        <ProfileAbout />
        <ProfileCreds />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfileByHandle })(ViewProfile);

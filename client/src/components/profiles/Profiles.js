import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfiles } from "../../actions/profileAction";
import Spinner from "../common/Spinner";
import ProfileItem from "./ProfileItem";

export class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }
  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;
    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(profile => {
          return <ProfileItem key={profile._id} profile={profile} />;
        });
      } else {
        profileItems = <h4>No profiles found...</h4>;
      }
    }
    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Developer Profiles</h1>
              <p className="lead text-center">
                Browse and connect with developers
              </p>
              {profileItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(mapStateToProps, { getProfiles })(Profiles);

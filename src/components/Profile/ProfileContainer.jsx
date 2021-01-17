import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { profileAPI } from "../api/api";

class ProfileAPIComponent extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    profileAPI.getProfileInfo(userId).then((data) => {
      this.props.setUserProfile(data);
    });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let functionsToProps = {
  setUserProfile,
};

let ProfileAPIComponentWithURLData = withRouter(ProfileAPIComponent);

let ProfileComponent = connect(
  mapStateToProps,
  functionsToProps
)(ProfileAPIComponentWithURLData);

export default ProfileComponent;

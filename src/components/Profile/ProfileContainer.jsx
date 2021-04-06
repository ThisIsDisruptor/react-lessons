import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getProfileInfoThunkCreator,
  getStatusThunkCreator,
  savePhotoThunkCreator,
  updateStatusThunkCreator,
  saveProfileThunkCreator,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileAPIComponent extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      //userId = 2;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getProfileInfo(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

let functionsToProps = {
  getProfileInfo: getProfileInfoThunkCreator,
  getStatus: getStatusThunkCreator,
  updateStatus: updateStatusThunkCreator,
  savePhoto: savePhotoThunkCreator,
  saveProfile: saveProfileThunkCreator,
};

let ProfileComponent = compose(
  //withAuthRedirect,
  withRouter,
  connect(mapStateToProps, functionsToProps)
)(ProfileAPIComponent);

export default ProfileComponent;

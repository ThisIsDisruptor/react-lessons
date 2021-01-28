import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getProfileInfoThunkCreator,
  getStatusThunkCreator,
  updateStatusThunkCreator,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileAPIComponent extends React.Component {
  componentDidMount() {
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
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
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
};

let ProfileComponent = compose(
  //withAuthRedirect,
  withRouter,
  connect(mapStateToProps, functionsToProps)
)(ProfileAPIComponent);

export default ProfileComponent;

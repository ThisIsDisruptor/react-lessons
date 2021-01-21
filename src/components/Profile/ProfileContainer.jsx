import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfileInfoThunkCreator } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileAPIComponent extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      // userId = 14119;
      userId = 2;
    }
    this.props.getProfileInfo(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let functionsToProps = {
  getProfileInfo: getProfileInfoThunkCreator,
};

let ProfileComponent = compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, functionsToProps)
)(ProfileAPIComponent);

export default ProfileComponent;

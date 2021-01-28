import React from "react";
import { connect } from "react-redux";
import {
  getAuthUserDataThunkCreator,
  logoutThunkCreator,
} from "../../redux/authReducer";
import { withRouter } from "react-router-dom";
import Header from "./Header";

class HeaderAPIContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  data: state.auth,
});

let functionsToProps = {
  getAuthUserData: getAuthUserDataThunkCreator,
  logout: logoutThunkCreator,
};

let HeaderContainer = connect(
  mapStateToProps,
  functionsToProps
)(HeaderAPIContainer);

export default HeaderContainer;

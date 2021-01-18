import React from "react";

import * as axios from "axios";
import { connect } from "react-redux";
import {
  getAuthUserDataThunkCreator,
  setAuthUserData,
} from "../../redux/authReducer";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import { authAPI } from "../api/api";

class HeaderAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  data: state.auth,
});

let functionsToProps = {
  getAuthUserData: getAuthUserDataThunkCreator,
};

let HeaderContainer = connect(
  mapStateToProps,
  functionsToProps
)(HeaderAPIContainer);

export default HeaderContainer;

import React from "react";

import * as axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/authReducer";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import { authAPI } from "../api/api";

class HeaderAPIContainer extends React.Component {
  componentDidMount() {
    authAPI.getAuthUserData().then((data) => {
      if (data.resultCode === 0) {
        this.props.setAuthUserData(data.data);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  data: state.auth,
});

let functionsToProps = {
  setAuthUserData,
};

let HeaderContainer = connect(
  mapStateToProps,
  functionsToProps
)(HeaderAPIContainer);

export default HeaderContainer;

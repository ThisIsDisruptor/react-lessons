import React from "react";

import * as axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/authReducer";
import { withRouter } from "react-router-dom";
import Header from "./Header";

class HeaderAPIContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.setAuthUserData(response.data.data);
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

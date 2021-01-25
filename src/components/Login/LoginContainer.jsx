import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loginThunkCreator } from "../../redux/authReducer";
import Login from "./Login";

let mapStateToProps = (state) => {
  return { isAuth: state.auth.isAuth };
};

let functionsToProps = {
  login: loginThunkCreator,
};

let LoginContainer = compose(connect(mapStateToProps, functionsToProps))(Login);

export default LoginContainer;

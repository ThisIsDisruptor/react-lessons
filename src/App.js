import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, withRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileComponent from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { getAuthUserDataThunkCreator } from "./redux/authReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeAppThunkCreator } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

class AppComponent extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    let sideBar = this.props.state.sideBar;
    if (!this.props.state.app.initialized) {
      return <Preloader isFetching={true} />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar sideBar={sideBar} />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileComponent />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />

          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />

          <Route path="/users" render={() => <UsersContainer />} />

          <Route path="/login" render={() => <LoginContainer />} />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  state,
});

let functionsToProps = {
  initializeApp: initializeAppThunkCreator,
};

let App = compose(
  withRouter,
  connect(mapStateToProps, functionsToProps)
)(AppComponent);

export default App;

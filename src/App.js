import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileComponent from "./components/Profile/ProfileContainer";

const App = (props) => {
  let state = props.store.getState();
  let { sideBar } = state;

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar sideBar={sideBar} />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <ProfileComponent />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />

        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />

        <Route path="/users" render={() => <UsersContainer />} />
      </div>
    </div>
  );
};

export default App;

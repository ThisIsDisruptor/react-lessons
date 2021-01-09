import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import StoreContext from "./redux/StoreContext";

const App = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let { profilePage, dialogsPage, sideBar } = state;

        return (
          <div className="app-wrapper">
            <Header />
            <Navbar sideBar={sideBar} />
            <div className="app-wrapper-content">
              <Route path="/profile" render={() => <Profile />} />
              <Route path="/dialogs" render={() => <DialogsContainer />} />

              <Route path="/news" component={News} />
              <Route path="/music" component={Music} />
              <Route path="/settings" component={Settings} />
            </div>
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = props => {
	let { profilePage, dialogsPage, sideBar } = props.state;

	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar sideBar={sideBar} />
				<div className="app-wrapper-content">
					<Route
						path="/profile"
						render={() => (
							<Profile
								profilePage={profilePage}
								addPost={props.addPost}
								newPostTextUpdate={props.newPostTextUpdate}
							/>
						)}
					/>
					<Route
						path="/dialogs"
						render={() => (
							<Dialogs
								dialogsPage={dialogsPage}
								addMessage={props.addMessage}
								newMessageTextUpdate={props.newMessageTextUpdate}
							/>
						)}
					/>

					<Route path="/news" component={News} />
					<Route path="/music" component={Music} />
					<Route path="/settings" component={Settings} />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;

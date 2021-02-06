import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeAppThunkCreator } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/reduxStore';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
					<Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
					<Route path="/dialogs" render={withSuspense(DialogsContainer)} />

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

let mapStateToProps = state => ({
	state,
});

let functionsToProps = {
	initializeApp: initializeAppThunkCreator,
};

let AppContainer = compose(withRouter, connect(mapStateToProps, functionsToProps))(AppComponent);

let SocialNetworkApp = props => (
	<React.StrictMode>
		<HashRouter>
			<Provider store={store}>
				<AppContainer store={store} />
			</Provider>
		</HashRouter>
	</React.StrictMode>
);
export default SocialNetworkApp;

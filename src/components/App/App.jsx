import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import LandingPage from '../LandingPage/LandingPage.jsx';
import Footer from '../Footer/Footer.jsx';
import RegistrationPage from '../RegistrationPage/RegistrationPage.jsx';
import MapPage from '../MapPage/MapPage';

function App() {
	return (
		<div>
			<Router>
				<Route exact path='/'>
					<LandingPage />
				</Route>
				<Route exact path='/RegistrationPage'>
					<RegistrationPage />
				</Route>
				<Route exact path='/MapPage'>
					<MapPage />
				</Route>
			</Router>
			<Footer />
		</div>
	);
}

export default App;

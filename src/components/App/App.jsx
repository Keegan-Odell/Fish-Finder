import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import LandingPage from '../LandingPage/LandingPage.jsx';
import Footer from '../Footer/Footer.jsx';
import RegistrationPage from '../RegistrationPage/RegistrationPage.jsx';
import MapPage from '../MapPage/MapPage';
import Header from '../Header/Header';
import About from '../About/About';

function App() {
	return (
		<div>
			<Router>
			<Header />
				<Route exact path='/'>
					<LandingPage />
				</Route>
				<Route exact path='/RegistrationPage'>
					<RegistrationPage />
				</Route>
				<Route exact path='/MapPage'>
					<MapPage />
				</Route>
				<Route exact path='/About'>
					<About />
				</Route>
			</Router>
			<Footer />
		</div>
	);
}

export default App;

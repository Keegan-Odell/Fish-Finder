import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import LandingPage from '../LandingPage/LandingPage.jsx';
import Footer from '../Footer/Footer.jsx';
import RegistrationPage from '../RegistrationPage/RegistrationPage.jsx';

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
			</Router>
			<Footer />
		</div>
	);
}

export default App;

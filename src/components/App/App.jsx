import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage.jsx';
import Footer from '../Footer/Footer.jsx';

function App() {
	return (
		<div>
			<Router>
				<Route exact path='/'>
					<LandingPage />
				</Route>
			</Router>
			<Footer />
		</div>
	);
}

export default App;

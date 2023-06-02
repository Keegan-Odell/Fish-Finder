import React, { useEffect } from 'react';
import {
	HashRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import LandingPage from '../LandingPage/LandingPage.jsx';
import Footer from '../Footer/Footer.jsx';
import RegistrationPage from '../RegistrationPage/RegistrationPage.jsx';
import MapPage from '../MapPage/MapPage';
import Header from '../Header/Header';
import About from '../About/About';
import EditPage from '../EditPage/EditPage';

function App() {
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);

	useEffect(() => {
		dispatch({
			type: 'FETCH_USER',
		});
	}, []);

	useEffect(() => {
		dispatch({
			type: 'GET_CATCH_OBJECT',
		});
	}, []);

	useEffect(() => {
		dispatch({
			type: 'FETCH_CATCHES',
		});
	}, []);

	return (
		<div>
			<Router>
				<Header />

				<Route exact path='/'>
					<LandingPage />
				</Route>

				<Route exact path='/RegistrationPage'>
					{user.id ? <Redirect to='/' /> : <RegistrationPage />}
				</Route>

				<ProtectedRoute exact path='/MapPage'>
					<MapPage />
				</ProtectedRoute>

				<ProtectedRoute exact path='/edit/:id'>
					<EditPage />
				</ProtectedRoute>

				<Route exact path='/About'>
					<About />
				</Route>
			</Router>
			<Footer />
		</div>
	);
}

export default App;

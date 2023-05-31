import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './LandingPage.css';

function LandingPage() {
	const history = useHistory();
	const user = useSelector((store) => store.user);

	const onLogin = (event) => {
		event.preventDefault();
		history.push('/MapPage');
	};

	const onRegister = (event) => {
		event.preventDefault();
		if (user.id) {
			alert(
				'You are already Registered! Please Log-in or Log-Out to register a new account.'
			);
		} else {
			history.push('/RegistrationPage');
		}
	};

	return (
		<div className='container'>
			<h1 className='title'>Fish Finder</h1>
			<img src='images/fish_logo.jpg' alt='Fish Finder logo' />
			{user.username && <h3>Thank You for Registering, {user.username}.</h3>}
			<form className='flexContainer'>
				<input
					type='text'
					className='inputs'
					name='usernameInput'
					id='usernameInput'
				/>
				<input
					type='text'
					className='inputs'
					name='passwordInput'
					id='passwordInput'
				/>
				<button className='test' onClick={onLogin}>
					Log In
				</button>
				<button className='test' onClick={onRegister}>
					Register
				</button>
			</form>
		</div>
	);
}

export default LandingPage;

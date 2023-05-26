import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
	const history = useHistory();

	const onLogin = (event) => {
		event.preventDefault()
		history.push('/MapPage');
	};

	const onRegister = (event) => {
		event.preventDefault();
		history.push('/RegistrationPage');
	};

	return (
		<div className='container'>
			<h1 className='title'>Fish Finder</h1>
			<img src='images/fish_logo.jpg' alt='Fish Finder logo' />
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
				<button className='test' onClick={onLogin}>Log In</button>
				<button className='test' onClick={onRegister}>Register</button>
			</form>
		</div>
	);
}

export default LandingPage;

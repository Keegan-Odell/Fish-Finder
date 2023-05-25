import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
	const history = useHistory();

	const onLogin = (event) => {
    event.preventDefault()
		console.log('test');
	};

  const onRegister = (event) => {
    event.preventDefault()
    console.log('test123');
  }

	return (
		<div className='container'>
			<h1>Fish Finder</h1>
			<img src='images/fish_logo.jpg' alt='Fish Finder logo' />
			<form action=''>
				<input type='text' name='usernameInput' id='usernameInput' />
				<input type='text' name='passwordInput' id='passwordInput' />
				<button onClick={onLogin}>Log In</button>
				<button onClick={onRegister}>Register</button>
			</form>
		</div>
	);
}

export default LandingPage;

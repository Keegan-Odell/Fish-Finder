import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import '../LandingPage/LandingPage.css';

function RegistrationPage() {
	const history = useHistory();

	const handleConfirm = (event) => {
		event.preventDefault();
		history.push('/');
	};

	return (
		<div>
			<h1>testing testing testing</h1>
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
				<input
					type='text'
					className='inputs'
					name='confirmPasswordInput'
					id='confirmPasswordInput'
				/>
				<button onClick={handleConfirm}>Confirm Registration</button>
			</form>
		</div>
	);
}

export default RegistrationPage;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import '../LandingPage/LandingPage.css';

function RegistrationPage() {
	const history = useHistory();
	const dispatch = useDispatch();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const errors = useSelector((store) => store.errors);

	const handleRegistration = (event) => {
		const handleBack = () => {
			history.push('/');
		};

		event.preventDefault();

		if (password === confirmPassword) {
			dispatch({
				type: 'REGISTER',
				payload: {
					username: username,
					password: password,
				},
			});
		} else {
			alert('Passwords did not match!');
		}
	};
	return (
		<div>
			<h1 className='title'>Fish Finder</h1>
			<img src='images/fish_logo.jpg' alt='Fish Finder logo' />
			{errors.registrationMessage && (
				<h3 className='alert' role='alert'>
					{errors.registrationMessage}
				</h3>
			)}
			<form className='flexContainer' onSubmit={handleRegistration}>
				<div className='usernameContainer'>
					<label htmlFor='usernameInput'>Username:</label>
					<input
						type='text'
						className='inputs'
						name='usernameInput'
						id='usernameInput'
						value={username}
						required
						onChange={(event) => setUsername(event.target.value)}
					/>
				</div>
				<div className='passwordContainer'>
					<label htmlFor='passwordInput'>Password: </label>
					<input
						type='text'
						className='inputs'
						name='passwordInput'
						id='passwordInput'
						value={password}
						required
						onChange={(event) => setPassword(event.target.value)}
					/>
				</div>
				<div className='confirmPasswordContainer'>
					<label htmlFor='confirmPasswordInput'>Confirm Password: </label>
					<input
						type='text'
						className='inputs'
						name='confirmPasswordInput'
						id='confirmPasswordInput'
						value={confirmPassword}
						required
						onChange={(event) => setConfirmPassword(event.target.value)}
					/>
				</div>
				<div className='submitBtn'>
					<input
						className='test'
						type='submit'
						name='submit'
						value='Register'
					/>
				</div>
			</form>
			<button onClick={handleBack}>Back</button>
		</div>
	);
}

export default RegistrationPage;

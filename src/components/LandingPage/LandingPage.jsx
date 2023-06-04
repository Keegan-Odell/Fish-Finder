import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './LandingPage.css';

function LandingPage() {
	const history = useHistory();
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);
	const errors = useSelector((store) => store.errors);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (event) => {
		event.preventDefault();

		if (username && password) {
			dispatch({
				type: 'LOGIN',
				payload: {
					username: username,
					password: password,
				},
			});
		} else {
			dispatch({
				type: 'LOGIN_INPUT_ERROR',
			});
		}
		history.push('/MapPage');
	};

	const handleRegister = (event) => {
		event.preventDefault();
		if (user.id) {
			alert(
				'You are already Registered! Please Log-in or Log-Out to register a new account.'
			);
		} else {
			history.push('/RegistrationPage');
		}
	};

	const conditionalRender = () => {
		if (user.id && user.username) {
			return (
				<>
					<h3>Thank You for using Fish Finder, {user.username}</h3>
					<button
						onClick={() => {
							history.push('/MapPage');
						}}>
						To Fish Finder
					</button>
				</>
			);
		} else {
			return (
				<form className='flexContainer' onSubmit={handleLogin}>
					<div className='usernameContainer'>
						<label htmlFor='usernameInput'>Username: </label>
						<input
							type='text'
							className='inputs'
							name='usernameInput'
							value={username}
							onChange={(event) => setUsername(event.target.value)}
						/>
					</div>
					<div className='passwordContainer'>
						<label htmlFor='passwordInput'>Password: </label>
						<input
							type='password'
							className='inputs'
							name='passwordInput'
							value={password}
							onChange={(event) => setPassword(event.target.value)}
						/>
					</div>
					<input className='test' type='submit' name='submit' value='Log In' />
					<input
						className='test'
						type='button'
						name='submit'
						value='Register'
						onClick={handleRegister}
					/>
				</form>
			);
		}
	};

	return (
		<div className='container'>
			<h1 className='title'>Fish Finder</h1>
			<img src='images/fish_logo.jpg' alt='Fish Finder logo' />
			{errors.loginMessage && <h3>{errors.loginMessage}</h3>}
			{conditionalRender()}
		</div>
	);
}

export default LandingPage;

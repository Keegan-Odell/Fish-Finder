import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Header() {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleAbout = (event) => {
		event.preventDefault();
		history.push('/About');
	};

	const handleLogOut = (event) => {
		dispatch({
			type: 'LOGOUT',
		});
		history.push('/');
	};

	return (
		<div>
			<button onClick={handleAbout}>About</button>
			<button onClick={handleLogOut}>Log Out</button>
		</div>
	);
}

export default Header;

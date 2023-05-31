import React from 'react';
import { useHistory } from 'react-router-dom';

function Header() {
	const history = useHistory();

	const handleAbout = (event) => {
		event.preventDefault();
		history.push('/About');
	};

	const handleLogOut = (event) => {
		event.preventDefault();
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

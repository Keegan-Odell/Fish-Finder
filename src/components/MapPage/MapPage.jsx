import React from 'react';
import './MapPage.css';

function MapPage() {
	const handleMonthClick = (event) => {
		event.preventDefault;
		console.log('test');
	};

	return (
		<div>
			<div className='sideBar'>
				<div className='dropdown'>
					<button className='dropbtn'>Months</button>
					<div className='dropdown-content'>
						<button className='monthBtn'>January</button>
						<button className='monthBtn'>February</button>
						<button className='monthBtn'>March</button>
						<button className='monthBtn'>April</button>
						<button className='monthBtn'>May</button>
						<button className='monthBtn'>June</button>
						<button className='monthBtn'>July</button>
						<button className='monthBtn'>August</button>
						<button className='monthBtn'>September</button>
						<button className='monthBtn'>October</button>
						<button className='monthBtn'>November</button>
						<button className='monthBtn'>December</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MapPage;

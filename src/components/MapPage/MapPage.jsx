import React, { useState } from 'react';
import './MapPage.css';
import DropDown from '../DropDown/DropDown';

function MapPage() {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const lengths = [
		'0-5',
		'6-7',
		'8-9',
		'10-11',
		'12-14',
		'15-19',
		'20-24',
		'25-29',
		'30-34',
		'35+',
	];
	const typeOfFish = [
		'Largemouth Bass',
		'Smallmouth Bass',
		'Walleye',
		'Lake Trout',
		'Northern Pike',
		'Muskellunge',
	];
	const waterTemp = ['0-32', '33-40', '41-50', '51-60', '61-70', '71+'];

	//title for menu buttons
	let [monthTitle, setMonthTitle] = useState('Months');
	let [lengthsTitle, setLengthsTitle] = useState('Length (inches)');
	let [typeOfFishTitle, setTypeOfFishTitle] = useState('Type Of Fish');
	let [waterTempTitle, setWaterTempTitle] = useState('Water Temperature (F°)');

	let handleReset = () => {
		setMonthTitle('Months');
		setLengthsTitle('Length (inches)');
		setTypeOfFishTitle('Type Of Fish');
		setWaterTempTitle('Water Temperature (F°)');
		window.location.reload(true);
	};

	return (
		<div>
			<div className='title'>Fish Finder</div>
			<DropDown info={months} title={monthTitle} />
			<DropDown info={lengths} title={lengthsTitle} />
			<DropDown info={typeOfFish} title={typeOfFishTitle} />
			<DropDown info={waterTemp} title={waterTempTitle} />
			<button>Search</button>
			<button onClick={handleReset}>Reset</button>
			<button>Add New Fish</button>
		</div>
	);
}

export default MapPage;

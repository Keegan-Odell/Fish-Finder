import React, { useState } from 'react';

import './MapPage.css';
import DropDown from '../DropDown/DropDown';
import GoogleMapComponent from '../GoogleMapComponent/GoogleMapComponent';
import CreateFishForm from '../CreateFishForm/CreateFishForm';
import { useSelector } from 'react-redux';

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

	//conditional render boolean
	let [newFishForm, setNewFishForm] = useState(false);

	let handleReset = () => {
		setMonthTitle('Months');
		setLengthsTitle('Length (inches)');
		setTypeOfFishTitle('Type Of Fish');
		setWaterTempTitle('Water Temperature (F°)');
		window.location.reload(true);
	};

	const handleNewFish = () => {
		if (newFishForm === true) {
			setNewFishForm(false);
		} else {
			setNewFishForm(true);
		}
		console.log(newFishForm);
	};

	const conditionalRenderNewFishForm = () => {
		if (newFishForm === true) {
			return <CreateFishForm />;
		} else {
			return <></>;
		}
	};

	return (
		<div>
			<div className='title'>Fish Finder</div>
			<div className='container'>
				<div className='sidebar'>
					<DropDown info={months} title={monthTitle} propMod={'month'} />
					<DropDown info={lengths} title={lengthsTitle} propMod={'length'} />
					<DropDown
						info={typeOfFish}
						title={typeOfFishTitle}
						propMod={'fishID'}
					/>
					<DropDown
						info={waterTemp}
						title={waterTempTitle}
						propMod={'waterTemp'}
					/>
					{conditionalRenderNewFishForm()}
					<button>Search</button>
					<button onClick={handleNewFish}>Add New Fish</button>
					<button onClick={handleReset}>Reset</button>
				</div>
				<div className='map'>
					<GoogleMapComponent />
				</div>
			</div>
		</div>
	);
}

export default MapPage;

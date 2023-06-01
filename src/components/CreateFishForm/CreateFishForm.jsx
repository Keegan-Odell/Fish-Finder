import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function CreateFishForm() {
	const dispatch = useDispatch();
	const catchObject = useSelector((store) =>  store.catches.getCatchObject);
	const [lat, setLat] = useState(0);
	const [lon, setLon] = useState(0);

	const createCatch = () => {
		dispatch({
			type: 'CREATE_NEW_CATCH',
			payload: catchObject,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		catchObject.lat = Number(lat);
		catchObject.lon = Number(lon);

		//sending catchObject to database
		createCatch();
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='latContainer'>
				<label htmlFor='lat'>Lat: </label>
				<input
					type='number'
					name='lat'
					value={lat}
					required
					onChange={(event) => setLat(event.target.value)}
				/>
			</div>
			<div className='lonContainer'>
				<label htmlFor='lon'>Lon: </label>
				<input
					type='number'
					name='lon'
					value={lon}
					required
					onChange={(event) => setLon(event.target.value)}
				/>
			</div>
			<div>
				<input type='submit' name='submit' value='Confirm' />
			</div>
		</form>
	);
}

export default CreateFishForm;

import React, { useMemo, useState } from 'react';
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function EditPage() {
	const params = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const catchEdit = useSelector((store) => store.catches.getOneCatch);
	const [month, setMonth] = useState(catchEdit[0].month);
	const [length, setLength] = useState(catchEdit[0].length);
	const [latitude, setLatitude] = useState(catchEdit[0].latitude);
	const [longitude, setLongitude] = useState(catchEdit[0].longitude);
	const idToEdit = params.id;
	console.log(catchEdit);

	useEffect(() => {
		dispatch({
			type: 'GET_ONE_FISH',
			payload: idToEdit,
		});
	}, []);

	const handleBack = () => {
		history.push('/MapPage');
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch({
			type: 'EDIT_CATCH_MONTH',
			payload: {
				id: idToEdit,
				month: month,
				length: length,
				latitude: latitude,
				longitude: longitude,
			},
		});
		history.push('/MapPage');
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className='monthContainer'>
					<label htmlFor='month'>Change Month: </label>
					<input
						type='text'
						name='month'
						value={month}
						onChange={(e) => setMonth(e.target.value)}
					/>
				</div>
				<div className='lengthContainer'>
					<label htmlFor='length'>Change Length: </label>
					<input
						type='text'
						name='length'
						value={length}
						onChange={(e) => setLength(e.target.value)}
					/>
				</div>
				<div className='latitudeContainer'>
					<label htmlFor='Latitude'>Change Latitude: </label>
					<input
						type='number'
						name='latitude'
						value={latitude}
						onChange={(e) => setLatitude(e.target.value)}
					/>
				</div>
				<div className='longitudeContainer'>
					<label htmlFor='Longitude'>Change Longitude: </label>
					<input
						type='number'
						name='longitude'
						value={longitude}
						onChange={(e) => setLongitude(e.target.value)}
					/>
				</div>
				<button>Finalize Edit</button>
			</form>
			<button onClick={handleBack}>Back</button>
		</>
	);
}

export default EditPage;

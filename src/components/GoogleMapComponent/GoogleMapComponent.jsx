import React, { useMemo, useState } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function GoogleMapComponent() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
	});

	if (!isLoaded) return <div>Loading...</div>;

	return <Map />;
}

function Map() {
	const dispatch = useDispatch();
	const history = useHistory();
	const catches = useSelector((store) => store.catches.getCatches);
	const singleFish = useSelector((store) => store.catches.getOneCatch);
	const center = useMemo(() => ({ lat: 47.418, lng: -93.507 }), []);
	const [conditionalRender, setConditionalRender] = useState(false);
	const icon = {
		url: 'images/fish-svgrepo-com.svg',
		anchor: new google.maps.Point(10, 30),
		origin: new google.maps.Point(0, 0),
		scaledSize: new google.maps.Size(25, 30),
	};

	const fetchOneFish = (num) => {
		dispatch({
			type: 'GET_ONE_FISH',
			payload: num,
		});
	};

	const handleClose = () => {
		setConditionalRender(false);
	};

	const handleDelete = (num) => {
		dispatch({
			type: 'DELETE_CATCH',
			payload: num,
		});
		setConditionalRender(false);
	};

	const handleUpdate = () => {
		history.push(`/edit/${singleFish[0].id}`);
	};

	const conditionalRenderInfo = () => {
		if (conditionalRender === true) {
			return (
				<>
					<table>
						<tbody>
							<tr>
								<td>Month Caught: </td>
								<td>{singleFish[0].month}</td>
							</tr>
							<tr>
								<td>Length (inches): </td>
								<td>{singleFish[0].length}</td>
							</tr>
							<tr>
								<td>Fish Type: </td>
								<td>{singleFish[0].name}</td>
							</tr>
							<tr>
								<td>Water Temp (F°): </td>
								<td>{singleFish[0].water_temp} F°</td>
							</tr>
							<tr>
								<td>Latitude: </td>
								<td>{singleFish[0].latitude}°</td>
							</tr>
							<tr>
								<td>Longitude: </td>
								<td>{singleFish[0].longitude}°</td>
							</tr>
						</tbody>
					</table>
					<button onClick={handleClose}>Close</button>
					<button onClick={handleUpdate}>Update</button>
					<button
						onClick={() => {
							handleDelete(singleFish[0].id);
						}}>
						Delete
					</button>
				</>
			);
		} else {
			return <></>;
		}
	};

	return (
		<div>
			{conditionalRenderInfo()}
			<GoogleMap zoom={14} center={center} mapContainerClassName='mapContainer'>
				{catches.map((catches, index) => {
					return (
						<MarkerF
							key={index}
							onClick={() => {
								if (conditionalRender === false) {
									setConditionalRender(true);
								}
								fetchOneFish(catches.id);
							}}
							icon={icon}
							position={{
								lat: Number(catches.latitude),
								lng: Number(catches.longitude),
							}}
						/>
					);
				})}
			</GoogleMap>
		</div>
	);
}

export default GoogleMapComponent;

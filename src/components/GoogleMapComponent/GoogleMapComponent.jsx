import React, { useMemo, useState } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';

function GoogleMapComponent() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
	});

	if (!isLoaded) return <div>Loading...</div>;

	return <Map />;
}

function Map() {
	const dispatch = useDispatch();
	const catches = useSelector((store) => store.catches.getCatches);
	const singleFish = useSelector((store) => store.catches.getOneCatch);
	const center = useMemo(() => ({ lat: 47.418, lng: -93.507 }), []);
	const [conditionalRender, setConditionalRender] = useState(false);
	const [fishToShow, setFishToShow] = useState(0);
	const icon = {
		url: 'images/fish-svgrepo-com.svg',
		anchor: new google.maps.Point(10, 30),
		origin: new google.maps.Point(0, 0),
		scaledSize: new google.maps.Size(25, 30),
	};

	const fetchOneFish = (num) => {
		console.log(num);
		dispatch({
			type: 'GET_ONE_FISH',
			payload: num,
		});
	};

	const handleClose = () => {
		setConditionalRender(false);
	};

	// const conditionalRenderInfo = () => {
	// 	if (conditionalRender === true) {
	// 		return (
	// 			<>
	// 				<button onClick={handleClose}>Close</button>
	// 				<table>
	// 					<tr>
	// 						<td>Month Caught: </td>
	// 						<td></td>
	// 					</tr>
	// 				</table>
	// 			</>
	// 		);
	// 	} else {
	// 		return <></>;
	// 	}
	// };

	return (
		<div>
			{/* {conditionalRenderInfo()} */}
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
								// console.log(catches.id);
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

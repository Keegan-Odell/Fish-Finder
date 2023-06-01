import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

function GoogleMapComponent() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
	});

	if (!isLoaded) return <div>Loading...</div>;

	return <Map />;
}

function Map() {
	const handleClick = () => {
		console.log('test');
	};
	const center = useMemo(() => ({ lat: 47.418, lng: -93.507 }), []);
	const icon = {
		url: 'images/fish-svgrepo-com.svg',
		anchor: new google.maps.Point(10, 30),
		origin: new google.maps.Point(0, 0),
		scaledSize: new google.maps.Size(25, 30),
	};

	return (
		<GoogleMap zoom={14} center={center} mapContainerClassName='mapContainer'>
			<MarkerF
				key='marker1'
				onClick={handleClick}
				icon={icon}
				position={{ lat: 47.418, lng: -93.507 }}
			/>
		</GoogleMap>
	);
}

export default GoogleMapComponent;

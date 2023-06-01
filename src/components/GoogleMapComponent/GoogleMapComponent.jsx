import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function GoogleMapComponent() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
	});

	if (!isLoaded) return <div>Loading...</div>;

	return <Map />;
}

function Map() {
	return (
		<GoogleMap
			zoom={10}
			center={{ lat: 44, lng: -80 }}
			mapContainerClassName='mapContainer'></GoogleMap>
	);
}

export default GoogleMapComponent;

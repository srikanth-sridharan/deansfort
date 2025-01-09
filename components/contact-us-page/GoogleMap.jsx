import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useState } from "react";

const containerStyle = {
	width: "100%",
	height: "100%",
};

const center = {
	lat: 11.168918,
	lng: 76.955832,
};

function MyGoogleMap() {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyBb_aeT6Hr9qX7qxrrkaaaTRgFssam2A7E",
	});

	const [map, setMap] = useState(null);

	const onLoad = useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);

		setMap(map);
	}, []);

	const onUnmount = useCallback(function callback(map) {
		setMap(null);
	}, []);
	return (
		<div className="responsive-map">
			{isLoaded ? (
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center}
					zoom={10}
					onLoad={onLoad}
					onUnmount={onUnmount}
				>
					<Marker position={{ lat: center.lat, lng: center.lng }} />
				</GoogleMap>
			) : (
				<>
					<h1>Google Map</h1>
				</>
			)}
		</div>
	);
}

export default MyGoogleMap;

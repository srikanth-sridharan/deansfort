"use client";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

function MyMap() {
	const position = { lat: 11.16913, lng: 76.95589 };
	return (
		<div className="responsive-map">
			<APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}>
				<Map defaultCenter={position} defaultZoom={18} mapId="Deansfort_Map">
					<AdvancedMarker position={position} />
				</Map>
			</APIProvider>
		</div>
	);
}

export default MyMap;

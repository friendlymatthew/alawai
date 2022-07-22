import { Map, Marker, ZoomControl } from "pigeon-maps";
import React, { useState } from "react";
import { maptiler } from "pigeon-maps/providers";

export default function AMap() {
	const maptilerProvider = maptiler("l5hNIg7LOisRvP4p4VZq", "streets");

	const [zoom, setZoom] = useState(13);
	const [center, setCenter] = useState([
		21.297408978733333, -157.84367992565248,
	]);

	return (
		<div className="py-20">
			<div className="font-serif text-5xl font-bold pb-8">
				Where You&apos;ll Stay
			</div>
			<Map
				height={700}
				center={center}
				zoom={zoom}
				onBoundsChanged={({ center, zoom }) => {
					setCenter(center);
					setZoom(zoom);
				}}
				dprs={[1, 2]}
				provider={maptilerProvider}
			>
				<ZoomControl styles={{ right: 10, top: 10, zIndex: 100 }} />
				<Marker
					width={50}
					anchor={[21.287250400395145, -157.8381066869557]}
					color="#0F172A"
				/>
			</Map>
		</div>
	);
}

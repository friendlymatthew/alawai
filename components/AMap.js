import { Map, Marker } from "pigeon-maps";

import { maptiler } from "pigeon-maps/providers";

export default function AMap() {
	const maptilerProvider = maptiler("l5hNIg7LOisRvP4p4VZq", "streets");

	return (
		<div className="py-20">
			<div className="font-serif text-5xl font-bold pb-8">
				Where You'll Stay
			</div>
			<Map
				height={700}
				defaultCenter={[21.287250400395145, -157.8381066869557]}
				defaultZoom={15}
				dprs={[1, 2]}
				provider={maptilerProvider}
			>
				<Marker
					width={50}
					anchor={[21.287250400395145, -157.8381066869557]}
					color="navy"
				/>
			</Map>
		</div>
	);
}

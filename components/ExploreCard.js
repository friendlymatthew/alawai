export default function ExploreCard({ location, tag, desc, distance, map }) {
	return (
		<div className="rounded-lg card max-h-96 bg-slate-800 text-white">
			<figure className="h-[200px] bg-orange-300"></figure>
			<div className="card-body">
				<div className="card-title font-serif text-2xl">{location}</div>
				<div className="card-actions flex space-x-8 justify-end">
					<div className="italic opacity-80">{distance}</div>
					<button>map</button>
				</div>
			</div>
		</div>
	);
}

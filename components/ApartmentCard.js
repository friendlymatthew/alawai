export default function ApartmentCard() {
	return (
		<div className="text-slate-900 text-xl 11/12 lg:w-10/12 md:px-4 md:py-4">
			<div className="font-semibold mb-4 font-sans">Apartment Amenities</div>

			<div className="grid grid-cols-2 lg:grid-cols-6 items-center gap-4 lg:gap-0 font-sans font-thin text-lg">
				<div className=" h-16 space-y-2 flex-col flex justify-between items-center">
					<img src="/swim.svg" alt="swimming-pool" className="h-8 w-8 " />
					<div className="text-center">Swimming Pool</div>
				</div>

				<div className="h-16 space-y-2 flex-col flex justify-between items-center">
					<img src="/spa.svg" alt="swimming-pool" className="h-8 w-8" />
					<div className="text-center">Spa/Hot Tub</div>
				</div>
				<div className="h-16 space-y-2 flex-col flex justify-between items-center">
					<img src="/gym.svg" alt="swimming-pool" className="h-8 w-8" />
					<div className="text-center">Fitness Center</div>
				</div>
				<div className="h-16 space-y-2 flex-col flex justify-between items-center">
					<img src="/sauna.svg" alt="swimming-pool" className="h-8 w-8" />
					<div className="text-center">Sauna</div>
				</div>
				<div className="h-16 space-y-2 flex-col flex justify-between items-center">
					<img src="/hammock.svg" alt="swimming-pool" className="h-8 w-8" />
					<div className="text-center">Outdoor Lounge</div>
				</div>
				<div className="h-16 space-y-2 flex-col flex justify-between items-center">
					<img src="/grill.svg" alt="swimming-pool" className="h-8 w-8" />
					<div className="text-center">Outdoor Grill</div>
				</div>
			</div>
		</div>
	);
}

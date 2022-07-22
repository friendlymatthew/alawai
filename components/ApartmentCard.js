const amenitiesDb = [
	{
		name: "Swimming Pool",
	},
	{
		name: "Sauna and Steam Room",
	},
	{
		name: "Workout Room",
	},
	{
		name: "Barbeque Grill",
	},
	{
		name: "Two parking spots",
	},
	{
		name: "Conference Room",
	},
];

export default function ApartmentCard() {
	return (
		<div className="text-xl 11/12 lg:w-8/12 md:px-4 md:py-4">
			<div className="font-semibold mb-4 font-sans">Apartment Amenities</div>

			<div className="grid grid-cols-2 lg:grid-cols-6 items-center gap-4 md:gap-0 font-sans font-thin text-lg">
				<div className="content-between grid grid-cols-1 place-items-center space-y-2 py-2   ">
					<img src="/swim.svg" alt="swimming-pool" className="h-10 w-8" />

					<div className="">Swimming Pool</div>
				</div>

				<div className="flex-col justify-end grid grid-cols-1 place-items-center space-y-2 py-2  ">
					<img src="/spa.svg" alt="swimming-pool" className="h-8 w-8" />

					<div>Spa / Hot Tub</div>
				</div>
				<div className="grid grid-cols-1 place-items-center space-y-2 py-2 ">
					<img src="/sauna.svg" alt="swimming-pool" className="h-8 w-8" />

					<div>Sauna</div>
				</div>
				<div className="grid grid-cols-1 place-items-center space-y-2 py-2 ">
					<img src="/gym.svg" alt="swimming-pool" className="h-8 w-8" />

					<div>Fitness Center</div>
				</div>
				<div className=" grid grid-cols-1 place-items-center space-y-2 py-2">
					<img src="/grill.svg" alt="swimming-pool" className="h-8 w-8" />

					<div>Outdoor Kitchen</div>
				</div>
				<div className="grid grid-cols-1 place-items-center space-y-2 py-2">
					<img src="/hammock.svg" alt="swimming-pool" className="h-8 w-8" />

					<div>Outdoor Lounge</div>
				</div>
			</div>
		</div>
	);
}

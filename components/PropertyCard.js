const propertyData = [
	{
		detail: "Two Bedrooms",
	},
	{
		detail: "Two Full Bathrooms",
	},
	{
		detail: "Oceanfront View",
	},
	{
		detail: "Kitchen",
	},
	{
		detail: "Appliances",
		more: "Dishwasher, Disposal, Washer, Dryer, Microwave, Oven, Refrigerator",
	},
];

import Mosaic from "../components/Mosaic";

export default function PropertyCard() {
	return (
		<div className="font-thin font-sans grid grid-cols-1 lg:grid-cols-4  rounded-lg  md:py-2">
			<div className="col-span-3">
				<Mosaic />
			</div>
			<div className="md:pl-8">
				<div className="text-xl font-bold pb-8">Property Details</div>
				<ul>
					{propertyData.map((feature) => {
						return (
							<li key={feature.detail} className="text-lg py-1">
								<div>{feature.detail}</div>
								{feature.more ? (
									<div className="w-8/12 text-sm">{feature.more}</div>
								) : (
									<></>
								)}
							</li>
						);
					})}

					<li className="italic pt-2">1,112 sqft</li>
				</ul>
			</div>
		</div>
	);
}

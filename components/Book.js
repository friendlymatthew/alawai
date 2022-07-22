import { Formik, Field, Form } from "formik";

export default function Book() {
	return (
		<div>
			<div className="font-serif text-5xl font-semibold">
				<div>Book</div>
				<div className="pt-2 pb-8 font-sans font-thin text-slate-700 text-2xl">
					Please provide the following information
				</div>
			</div>

			<Formik
				initialValues={{
					name: "",
					email: "",
					date: "",
				}}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					alert(JSON.stringify(values, null, 2));
				}}
			>
				<Form className="space-y-12 font-sans font-thin text-2xl">
					<div className="">
						<label className="pr-4">Full Name</label>
						<Field
							id="name"
							name="name"
							placeholder="enter name"
							className="w-auto px-3 py-1.5 block text-slate-800 text-lg placeholder:text-slate-800 border-slate-800 border rounded-md"
						/>
					</div>

					<div className="">
						<label className="pr-4">Email</label>
						<Field
							className="w-auto block px-3 py-1.5 text-slate-800 text-lg placeholder:text-slate-800 border-slate-800 border rounded-md"
							id="email"
							name="email"
							type="email"
							placeholder="email address"
						/>
					</div>

					<div className="">
						<label className="pr-4">Desired Move-in Date</label>
						<Field
							className="w-auto block px-3 py-1.5 text-slate-800 text-lg placeholder:text-slate-800 border-slate-800 border rounded-md"
							id="date"
							name="date"
							placeholder="Type Date"
							type="date"
							focus="(this.type = 'date')"
						/>
					</div>
					<button
						className="block border-2 hover:bg-slate-800 hover:text-white transition ease-in duration-200 border-slate-800 px-12 py-2 rounded-lg "
						type="submit"
					>
						Submit
					</button>
				</Form>
			</Formik>
		</div>
	);
}

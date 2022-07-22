module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: "'Roboto', sans-serif",
				serif: "'Spectral', serif",
			},
		},
	},
	daisyui: {
		themes: false,
	},
	plugins: [require("daisyui")],
};

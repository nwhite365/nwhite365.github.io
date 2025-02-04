/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),
		function ({ addUtilities }) {
			const newUtilities = {
				'.icon-buttons': {
				},
				'.icon-buttons:hover': {
					filter: 'invert(50%)',
				},
				'.dark .icon-buttons': {
					fill: 'white',
					filter: 'invert(100%)',
				},
				'.dark .icon-buttons:hover': {
					filter: 'invert(50%)',
				},
				'.text-blue': {
					color: '#0000EE',
				},
				'.text-blue:visited': {
					color: '#551A8B',
				},
				'.text-blue:active, .text-blue:visited:active': { 
					color: '#FF0000',
				},
			};
			addUtilities(newUtilities, ['responsive', 'hover']);
		  },
	],
};

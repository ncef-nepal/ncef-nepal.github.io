/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
		extend: {}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#bfdbfe',
					secondary: '#701dc4',
					accent: '#234f84',
					neutral: '#24203c',
					'base-100': '#f7f1f9',
					info: '#3f86e4',
					success: '#15a257',
					warning: '#af7904',
					error: '#f15350'
				}
			},
			'dark',
			'cupcake'
		]
	}
};

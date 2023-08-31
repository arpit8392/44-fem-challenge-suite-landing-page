import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				darkBlue: 'hsl(219, 43%, 16%)',
				grey: 'hsl(219, 20%, 36%)',
				cream: 'hsl(30, 35%, 93%)',
				creamWhite: 'hsl(30, 29%, 97%)',
				lavendar: 'hsl(264, 100%, 69%)',
				fuchsia: 'hsl(292, 76%, 54%)',
				amber: 'hsl(31, 100%, 65%)',
			},
			backgroundImage: {
				'gradient-primary':
					'linear-gradient(135deg, #A060FF 0%, #CB30E3 49.21%, #FFA84E 100%)',
				'curved-pattern-1': 'url("/public/assets/pattern-curved-line-1.svg")',
				'curved-pattern-2': 'url("/public/assets/pattern-curved-line-2.svg")',
				'blur-pattern': 'url("/public/assets/pattern-blur.svg")',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
export default config
